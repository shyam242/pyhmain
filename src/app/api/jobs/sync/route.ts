import { query } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// Self-healing: this site's schema initializer (src/lib/schema.ts) is only run
// manually via a setup script, so a freshly-deployed database may not have the
// external_id column/constraint yet. Ensure it exists on first use instead of
// requiring a manual migration step.
let externalIdColumnChecked = false;
async function ensureExternalIdColumn() {
  if (externalIdColumnChecked) return;
  await query(`ALTER TABLE jobs ADD COLUMN IF NOT EXISTS external_id INTEGER;`);
  await query(`
    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'jobs_external_id_key'
      ) THEN
        ALTER TABLE jobs ADD CONSTRAINT jobs_external_id_key UNIQUE (external_id);
      END IF;
    END $$;
  `);
  externalIdColumnChecked = true;
}

// Internal endpoint used by the PickYourHire portal to keep this site's public
// /jobs listings in sync whenever a job is created, edited, paused, closed,
// or deleted in the portal. Authenticated with a shared secret (not a user
// login) since this is a server-to-server call, not something a person types in.
//
// Required env var: SYNC_SECRET — must match PUBLIC_SITE_SYNC_SECRET on the portal.

export async function POST(request: NextRequest) {
  try {
    const secret = process.env.SYNC_SECRET;
    if (!secret) {
      console.error("SYNC_SECRET is not configured on the public site — sync request rejected.");
      return NextResponse.json({ error: "Sync is not configured on this site" }, { status: 503 });
    }

    const providedSecret = request.headers.get("x-sync-secret");
    if (providedSecret !== secret) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await ensureExternalIdColumn();

    const body = await request.json();
    const { action, job } = body || {};

    if (!job?.external_id) {
      return NextResponse.json({ error: "job.external_id is required" }, { status: 400 });
    }

    if (action === "delete") {
      const result = await query("DELETE FROM jobs WHERE external_id = $1", [job.external_id]);
      return NextResponse.json({ message: "Job removed", deleted: (result.rowCount ?? 0) > 0 });

    if (action === "upsert") {
      if (!job.title || !job.department || !job.location) {
        return NextResponse.json({ error: "Missing required job fields" }, { status: 400 });
      }

      const result = await query(
        `INSERT INTO jobs
           (external_id, title, department, location, job_type, salary_range, experience,
            description, responsibilities, qualifications, benefits, posted_date)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, CURRENT_DATE)
         ON CONFLICT (external_id) DO UPDATE SET
           title = EXCLUDED.title,
           department = EXCLUDED.department,
           location = EXCLUDED.location,
           job_type = EXCLUDED.job_type,
           salary_range = EXCLUDED.salary_range,
           experience = EXCLUDED.experience,
           description = EXCLUDED.description,
           responsibilities = EXCLUDED.responsibilities,
           qualifications = EXCLUDED.qualifications,
           benefits = EXCLUDED.benefits,
           updated_at = CURRENT_TIMESTAMP
         RETURNING *`,
        [
          job.external_id,
          job.title,
          job.department,
          job.location,
          job.jobType || null,
          job.salaryRange || null,
          job.experience || null,
          job.description || "",
          job.responsibilities || [],
          job.qualifications || [],
          job.benefits || [],
        ]
      );

      return NextResponse.json({ message: "Job synced", job: result.rows[0] });
    }

    return NextResponse.json({ error: "action must be 'upsert' or 'delete'" }, { status: 400 });
  } catch (error) {
    console.error("Error syncing job from portal:", error);
    return NextResponse.json({ error: "Failed to sync job" }, { status: 500 });
  }
}
