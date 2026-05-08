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

    console.log("Database schema initialized successfully!");
  } catch (error) {
    console.error("Error initializing database:", error);
    throw error;
  }
}
