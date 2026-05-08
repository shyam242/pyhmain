import { query } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const result = await query("SELECT * FROM jobs WHERE id = $1", [parseInt(id)]);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    const row = result.rows[0];
    const job = {
      id: row.id.toString(),
      _id: row.id.toString(),
      title: row.title,
      department: row.department,
      location: row.location,
      jobType: row.job_type,
      salaryRange: row.salary_range,
      experience: row.experience,
      description: row.description,
      responsibilities: row.responsibilities,
      qualifications: row.qualifications,
      benefits: row.benefits,
      postedDate: row.posted_date ? row.posted_date.toISOString().split("T")[0] : null,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };

    return NextResponse.json(job);
  } catch (error) {
    console.error("Error fetching job:", error);
    return NextResponse.json({ error: "Failed to fetch job" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.split(" ")[1];

    // Verify admin token
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
      jwt.verify(token, process.env.JWT_SECRET || "");
    } catch {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    const { id } = await params;
    const result = await query("DELETE FROM jobs WHERE id = $1", [parseInt(id)]);

    if (result.rowCount === 0) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Job deleted successfully" });
  } catch (error) {
    console.error("Error deleting job:", error);
    return NextResponse.json({ error: "Failed to delete job" }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.split(" ")[1];

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
      jwt.verify(token, process.env.JWT_SECRET || "");
    } catch {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    const { id } = await params;
    const payload = await request.json();
    const updates: string[] = [];
    const values: any[] = [];

    if (payload.title !== undefined) {
      values.push(payload.title);
      updates.push(`title = $${values.length}`);
    }
    if (payload.department !== undefined) {
      values.push(payload.department);
      updates.push(`department = $${values.length}`);
    }
    if (payload.location !== undefined) {
      values.push(payload.location);
      updates.push(`location = $${values.length}`);
    }
    if (payload.jobType !== undefined) {
      values.push(payload.jobType);
      updates.push(`job_type = $${values.length}`);
    }
    if (payload.salaryRange !== undefined) {
      values.push(payload.salaryRange);
      updates.push(`salary_range = $${values.length}`);
    }
    if (payload.experience !== undefined) {
      values.push(payload.experience);
      updates.push(`experience = $${values.length}`);
    }
    if (payload.description !== undefined) {
      values.push(payload.description);
      updates.push(`description = $${values.length}`);
    }
    if (payload.responsibilities !== undefined) {
      values.push(payload.responsibilities);
      updates.push(`responsibilities = $${values.length}`);
    }
    if (payload.qualifications !== undefined) {
      values.push(payload.qualifications);
      updates.push(`qualifications = $${values.length}`);
    }
    if (payload.benefits !== undefined) {
      values.push(payload.benefits);
      updates.push(`benefits = $${values.length}`);
    }

    if (updates.length === 0) {
      return NextResponse.json({ error: "No fields to update" }, { status: 400 });
    }

    values.push(parseInt(id, 10));
    const queryText = `UPDATE jobs SET ${updates.join(", ")}, updated_at = CURRENT_TIMESTAMP WHERE id = $${values.length} RETURNING *`;
    const result = await query(queryText, values);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    const row = result.rows[0];
    const updatedJob = {
      id: row.id.toString(),
      _id: row.id.toString(),
      title: row.title,
      department: row.department,
      location: row.location,
      jobType: row.job_type,
      salaryRange: row.salary_range,
      experience: row.experience,
      description: row.description,
      responsibilities: row.responsibilities,
      qualifications: row.qualifications,
      benefits: row.benefits,
      postedDate: row.posted_date ? row.posted_date.toISOString().split("T")[0] : null,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };

    return NextResponse.json(updatedJob);
  } catch (error) {
    console.error("Error updating job:", error);
    return NextResponse.json({ error: "Failed to update job" }, { status: 500 });
  }
}
