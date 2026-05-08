import { query } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const limit = Number(url.searchParams.get("limit"));

    const queryText = limit > 0
      ? "SELECT * FROM jobs ORDER BY posted_date DESC LIMIT $1"
      : "SELECT * FROM jobs ORDER BY posted_date DESC";
    const queryParams = limit > 0 ? [limit] : [];

    const result = await query(queryText, queryParams);
    const jobs = result.rows.map((row) => ({
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
    }));
    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
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

    const { title, department, location, jobType, salaryRange, experience, description, responsibilities, qualifications, benefits } = await request.json();

    if (!title || !department || !location) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const result = await query(
      `INSERT INTO jobs (title, department, location, job_type, salary_range, experience, description, responsibilities, qualifications, benefits, posted_date)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, CURRENT_DATE)
       RETURNING *`,
      [
        title,
        department,
        location,
        jobType,
        salaryRange || null,
        experience || null,
        description,
        responsibilities || [],
        qualifications || [],
        benefits || [],
      ]
    );

    const row = result.rows[0];
    const newJob = {
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

    return NextResponse.json(newJob, { status: 201 });
  } catch (error) {
    console.error("Error creating job:", error);
    return NextResponse.json({ error: "Failed to create job" }, { status: 500 });
  }
}
