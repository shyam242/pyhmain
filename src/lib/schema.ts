import { pool } from "./db";

export async function initializeDatabase() {
  try {
    console.log("Initializing database schema...");

    // Create jobs table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS jobs (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        department VARCHAR(100) NOT NULL,
        location VARCHAR(100) NOT NULL,
        job_type VARCHAR(50) NOT NULL,
        salary_range VARCHAR(100),
        experience VARCHAR(100),
        description TEXT NOT NULL,
        responsibilities TEXT[] DEFAULT '{}',
        qualifications TEXT[] DEFAULT '{}',
        benefits TEXT[] DEFAULT '{}',
        posted_date DATE DEFAULT CURRENT_DATE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // external_id links a row back to its source job in the PickYourHire portal,
    // so the sync endpoint (/api/jobs/sync) can update or remove the right row
    // instead of creating duplicates. UNIQUE is required for the ON CONFLICT
    // upsert used by that endpoint. Added via IF NOT EXISTS so it's safe to run
    // against a database that already has the jobs table from before this change.
    await pool.query(`
      ALTER TABLE jobs ADD COLUMN IF NOT EXISTS external_id INTEGER;
    `);
    await pool.query(`
      DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT 1 FROM pg_constraint WHERE conname = 'jobs_external_id_key'
        ) THEN
          ALTER TABLE jobs ADD CONSTRAINT jobs_external_id_key UNIQUE (external_id);
        END IF;
      END $$;
    `);

    console.log("Database schema initialized successfully!");
  } catch (error) {
    console.error("Error initializing database:", error);
    throw error;
  }
}
