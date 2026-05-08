#!/usr/bin/env node

require("dotenv").config({ path: ".env.local" });

const { Pool } = require("pg");

const DATABASE_URL = process.env.DATABASE_URL;
const PGUSER = process.env.PGUSER;
const PGPASSWORD = process.env.PGPASSWORD;
const PGHOST = process.env.PGHOST;
const PGPORT = process.env.PGPORT;
const PGDATABASE = process.env.PGDATABASE;

// Parse DATABASE_URL if provided, or use individual env vars
let user = PGUSER;
let password = PGPASSWORD;
let host = PGHOST;
let port = PGPORT || 5432;
let database = PGDATABASE;

if (DATABASE_URL) {
  try {
    const url = new URL(DATABASE_URL);
    user = url.username;
    password = url.password;
    host = url.hostname;
    port = url.port || 5432;
    database = url.pathname.split("/")[1];
  } catch (error) {
    console.error("Invalid DATABASE_URL format:", error.message);
    process.exit(1);
  }
}

if (!user || !password || !host || !database) {
  console.error(
    "Missing database credentials. Please set DATABASE_URL or PGUSER/PGPASSWORD/PGHOST/PGDATABASE"
  );
  process.exit(1);
}

console.log(`Setting up PostgreSQL database...`);
console.log(`User: ${user}`);
console.log(`Host: ${host}:${port}`);
console.log(`Database: ${database}`);

// First, connect to the default 'postgres' database to create the target database
const adminPool = new Pool({
  user,
  password,
  host,
  port: parseInt(port, 10),
  database: "postgres",
});

async function setupDatabase() {
  try {
    // Check if database exists, if not create it
    console.log(`\nChecking if database "${database}" exists...`);
    const checkDb = await adminPool.query(
      `SELECT datname FROM pg_database WHERE datname = $1`,
      [database]
    );

    if (checkDb.rows.length === 0) {
      console.log(`Database "${database}" does not exist. Creating...`);
      await adminPool.query(`CREATE DATABASE "${database}"`);
      console.log(`✓ Database "${database}" created successfully`);
    } else {
      console.log(`✓ Database "${database}" already exists`);
    }

    await adminPool.end();

    // Now connect to the target database to create tables
    const appPool = new Pool({
      user,
      password,
      host,
      port: parseInt(port, 10),
      database,
    });

    console.log(`\nSetting up database schema...`);

    // Create jobs table
    await appPool.query(`
      CREATE TABLE IF NOT EXISTS jobs (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        department VARCHAR(100),
        location VARCHAR(100),
        description TEXT,
        responsibilities TEXT,
        qualifications TEXT,
        benefits TEXT,
        salary_range VARCHAR(100),
        job_type VARCHAR(50),
        experience_level VARCHAR(50),
        apply_url TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log(`✓ Jobs table created or already exists`);

    // Create index on title for faster searches
    await appPool.query(
      `CREATE INDEX IF NOT EXISTS idx_jobs_title ON jobs(title)`
    );
    console.log(`✓ Index on job title created`);

    // Check if there are any jobs, if not insert sample data
    const jobCount = await appPool.query(`SELECT COUNT(*) FROM jobs`);
    if (jobCount.rows[0].count === "0") {
      console.log(`\nNo jobs found. Inserting sample data...`);
      await appPool.query(`
        INSERT INTO jobs (title, department, location, description, responsibilities, qualifications, benefits, salary_range, job_type, experience_level)
        VALUES 
        (
          'Senior Software Engineer',
          'Engineering',
          'San Francisco, CA',
          'We are looking for an experienced software engineer to join our team.',
          'Design and implement scalable software solutions\nMentor junior engineers\nParticipate in code reviews',
          'Bachelor''s degree in Computer Science or related field\n5+ years of software engineering experience\nStrong knowledge of system design',
          'Competitive salary\nHealth insurance\n401k matching\nRemote work options',
          '$150,000 - $200,000',
          'Full-time',
          'Senior'
        ),
        (
          'Product Manager',
          'Product',
          'New York, NY',
          'Lead product strategy and roadmap for our platform.',
          'Define product vision and strategy\nWork with engineering and design teams\nAnalyze user feedback and market trends',
          'Bachelor''s degree in any field\n3+ years of product management experience\nStrong analytical skills',
          'Competitive salary\nEquity options\nFlexible hours',
          '$120,000 - $160,000',
          'Full-time',
          'Mid-level'
        ),
        (
          'UX/UI Designer',
          'Design',
          'Remote',
          'Create beautiful and intuitive user interfaces.',
          'Design user interfaces and experiences\nConduct user research\nCollaborate with product and engineering teams',
          'Portfolio demonstrating design skills\n2+ years of UX/UI design experience\nProficiency in design tools (Figma, Adobe XD)',
          'Competitive salary\nCreative freedom\nRemote work',
          '$100,000 - $140,000',
          'Full-time',
          'Mid-level'
        )
      `);
      console.log(`✓ Sample jobs inserted`);
    } else {
      console.log(`Database already contains ${jobCount.rows[0].count} job(s)`);
    }

    await appPool.end();

    console.log(`\n✅ Database setup completed successfully!`);
  } catch (error) {
    console.error("Error setting up database:", error);
    process.exit(1);
  }
}

setupDatabase();
