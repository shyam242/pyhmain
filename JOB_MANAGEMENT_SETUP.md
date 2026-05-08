# PickYourHire Job Management System - Setup Guide

## Overview

Your application now has a complete job management system with:
- **Public Job Listing Page** (`/jobs`) - Browse jobs with search and filters
- **Job Details Page** (`/jobs/[id]`) - View full job information
- **Admin Login Panel** (`/admin`) - Secure admin authentication
- **Admin Dashboard** (`/admin/dashboard`) - Manage jobs (create, delete, update)
- **API Endpoints** - RESTful API for job operations

---

## Prerequisites

1. **PostgreSQL Server** - install PostgreSQL locally or use a hosted provider
   - Create a PostgreSQL user
   - Create a database named `pickyourhire`
   - Note the username, password, host, and port

2. **Environment Variables Setup**
   - Copy `.env.example` to `.env.local`
   - Fill in the PostgreSQL connection string or Postgres env vars
   - Set admin credentials (email/password)
   - Set a strong JWT secret

---

## Installation & Setup

### Step 1: Create PostgreSQL Database

1. Install PostgreSQL on your machine or use a hosted service
2. Create a new database named `pickyourhire`
3. Create a user with a strong password
4. Grant access to the database user

### Step 2: Update Environment Variables

Edit `.env.local` with your database credentials:

```
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/pickyourhire
ADMIN_EMAIL=admin@pickyourhire.com
ADMIN_PASSWORD=your_secure_password
JWT_SECRET=a_random_secure_string_here
```

Or use the individual Postgres vars:

```
PGUSER=postgres
PGPASSWORD=your_password
PGHOST=localhost
PGPORT=5432
PGDATABASE=pickyourhire
```

---

### Step 3: Seed Initial Jobs (Optional)

To populate your database with initial jobs, you can manually add them via the admin dashboard:

1. Start your app: `npm run dev`
2. Go to `http://localhost:3000/admin`
3. Log in with your admin credentials
4. Click "+ Add New Job" and fill in the form
5. Submit to add the job to MongoDB

---

## How to Use

### For Users (Public)

1. **Browse Jobs** (`/jobs`)
   - View all available job postings
   - Search by job title or keywords
   - Filter by department or location
   - Click on a job card to see details

2. **View Job Details** (`/jobs/[id]`)
   - See complete job information
   - View responsibilities, qualifications, and benefits
   - Click "Apply Now on LinkedIn" button (redirects to LinkedIn)
   - See similar positions in the same department

### For Admins

1. **Login** (`/admin`)
   - Email: `admin@pickyourhire.com` (or your configured email)
   - Password: `admin123` (or your configured password)

2. **Dashboard** (`/admin/dashboard`)
   - **Add New Jobs**
     - Click "+ Add New Job"
     - Fill in all job details
     - Add responsibilities, qualifications, and benefits (one per line)
     - Click "Create Job Posting"
   
   - **View All Jobs**
     - See all posted jobs in a list format
     - View key information at a glance
   
   - **Delete Jobs**
     - Click "Delete" button next to a job
     - Confirm deletion when prompted

3. **Logout**
   - Click "Logout" button in the top right

---

## API Endpoints

All API endpoints are protected with JWT tokens (except GET operations).

### GET Endpoints (Public)

```
GET /api/jobs
- Returns all job listings

GET /api/jobs/[id]
- Returns a specific job by ID
```

### POST Endpoints (Admin Only)

```
POST /api/jobs
- Add a new job
- Requires: Authorization Bearer token in header
- Body: Job details (title, department, location, etc.)
```

### DELETE Endpoints (Admin Only)

```
DELETE /api/jobs/[id]
- Delete a job by ID
- Requires: Authorization Bearer token in header
```

---

## File Structure

```
src/
├── app/
│   ├── api/
│   │   ├── admin/
│   │   │   └── login/route.ts      # Admin login endpoint
│   │   └── jobs/
│   │       ├── route.ts             # GET all jobs, POST new job
│   │       └── [id]/route.ts        # GET single job, DELETE job
│   ├── admin/
│   │   ├── page.tsx                 # Admin login form
│   │   └── dashboard/page.tsx       # Admin dashboard
│   └── jobs/
│       ├── page.tsx                 # Jobs listing page
│       └── [id]/page.tsx            # Job details page
├── lib/
│   └── db.ts                        # MongoDB connection utility
└── data/
    └── jobs.ts                      # (Old) Static job data (no longer used)
```

---

## Database Schema

### Jobs Collection

```javascript
{
  _id: ObjectId,
  title: "Job Title",
  department: "Engineering",
  location: "Remote",
  jobType: "Full-time",
  salaryRange: "$100,000 - $150,000",
  experience: "3+ years",
  description: "Job description...",
  responsibilities: ["Task 1", "Task 2", ...],
  qualifications: ["Skill 1", "Skill 2", ...],
  benefits: ["Benefit 1", "Benefit 2", ...],
  postedDate: "2026-05-07"
}
```

---

## Important Notes

### Security

1. **Change Admin Credentials** (Production)
   - Update `ADMIN_EMAIL` and `ADMIN_PASSWORD` in `.env.local`
   - Use strong, unique passwords

2. **Change JWT Secret** (Production)
   - Replace `JWT_SECRET` with a strong random string
   - Use: `openssl rand -base64 32` to generate

3. **MongoDB Security**
   - Whitelist your IP addresses
   - Use strong database passwords
   - Don't commit credentials to Git

4. **Environment Variables**
   - Never commit `.env.local` to Git
   - Use `.env.example` as a template
   - Add `.env.local` to `.gitignore`

### Token Management

- Admin tokens are stored in browser localStorage
- Tokens expire after 24 hours
- Tokens are also stored as HTTP-only cookies

### LinkedIn Integration

- All "Apply" buttons redirect to: `https://www.linkedin.com/company/pickyourhire`
- Users apply directly on your LinkedIn company page
- No external applicant tracking system needed (yet)

---

## Troubleshooting

### "Cannot connect to MongoDB"
- Check your connection string in `.env.local`
- Verify your MongoDB cluster is running
- Check your IP address is whitelisted in MongoDB Atlas

### "Unauthorized" error on admin operations
- Verify you're logged in (token should be in localStorage)
- Check admin credentials are correct
- Try logging out and logging back in

### Jobs not appearing
- Check MongoDB has the `pickyourhire` database created
- Verify you've added jobs via the admin dashboard
- Check browser console for API errors

### Admin dashboard not loading
- Ensure you're logged in first
- Check that your token hasn't expired
- Clear browser cache and try again

---

## Next Steps

1. **Customize**
   - Update the LinkedIn company URL in `/api/admin/login` (demo email/password)
   - Modify styling to match your brand
   - Add more job fields if needed

2. **Enhance**
   - Add job editing functionality
   - Implement applicant tracking
   - Add email notifications
   - Create analytics dashboard

3. **Deploy**
   - Deploy to Vercel (recommended for Next.js)
   - Configure MongoDB Atlas for production
   - Set up proper backup strategies
   - Enable HTTPS and security headers

---

## Support

For issues or questions, check:
- MongoDB documentation: https://docs.mongodb.com
- Next.js documentation: https://nextjs.org/docs
- API response errors in browser console
