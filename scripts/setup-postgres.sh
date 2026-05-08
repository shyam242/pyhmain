#!/bin/bash

# PostgreSQL Database Setup Script for PickYourHire
# This script creates the PostgreSQL database and tables

echo "Creating PostgreSQL database and tables..."

# Create the database if it does not already exist
createdb -U postgres -h localhost pickyourhire 2>/dev/null || true

# Create tables inside the database
psql -U postgres -h localhost -d pickyourhire << 'SQL'
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

CREATE INDEX IF NOT EXISTS idx_jobs_department ON jobs(department);
CREATE INDEX IF NOT EXISTS idx_jobs_location ON jobs(location);
CREATE INDEX IF NOT EXISTS idx_jobs_posted_date ON jobs(posted_date DESC);
SQL

echo "Database and tables created successfully!"
