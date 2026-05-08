@echo off
REM PostgreSQL Database Setup Script for PickYourHire (Windows)
REM This script creates the PostgreSQL database and tables

echo Creating PostgreSQL database and tables...

REM Create the database using psql
REM Note: Make sure PostgreSQL is installed and psql is in your PATH

psql -U postgres -h localhost -c "CREATE DATABASE pickyourhire;" 2>nul

REM Create the tables
psql -U postgres -h localhost -d pickyourhire -c "CREATE TABLE IF NOT EXISTS jobs (
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
);"

psql -U postgres -h localhost -d pickyourhire -c "CREATE INDEX IF NOT EXISTS idx_jobs_department ON jobs(department);"
psql -U postgres -h localhost -d pickyourhire -c "CREATE INDEX IF NOT EXISTS idx_jobs_location ON jobs(location);"
psql -U postgres -h localhost -d pickyourhire -c "CREATE INDEX IF NOT EXISTS idx_jobs_posted_date ON jobs(posted_date DESC);"
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

CREATE INDEX IF NOT EXISTS idx_jobs_department ON jobs(department);
CREATE INDEX IF NOT EXISTS idx_jobs_location ON jobs(location);
CREATE INDEX IF NOT EXISTS idx_jobs_posted_date ON jobs(posted_date DESC);

EOF

echo Database and tables created successfully!
pause
