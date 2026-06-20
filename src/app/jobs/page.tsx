"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import PageLoader from "@/components/PageLoader";
import JobCardSkeleton from "@/components/JobCardSkeleton";

interface Job {
  _id: string;
  title: string;
  department: string;
  location: string;
  jobType: string;
  salaryRange: string;
  experience: string;
  description: string;
  postedDate: string;
}

const formatTimeAgo = (dateString: string) => {
  const now = new Date();
  const posted = new Date(dateString);
  const diffMs = now.getTime() - posted.getTime();

  if (isNaN(posted.getTime()) || diffMs < 0) {
    return "Just now";
  }

  const minutes = Math.floor(diffMs / (1000 * 60));
  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;

  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} day${days === 1 ? "" : "s"} ago`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months === 1 ? "" : "s"} ago`;

  const years = Math.floor(months / 12);
  return `${years} year${years === 1 ? "" : "s"} ago`;
};

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [jobs, searchTerm]);

  const fetchJobs = async () => {
    try {
      const response = await fetch("/api/jobs");
      if (response.ok) {
        const data = await response.json();
        setJobs(data);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = jobs;

    if (searchTerm) {
      filtered = filtered.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredJobs(filtered);
  };

  return (
    <div className="bg-white min-h-screen text-[#050B2C]">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#050B2C] via-[#0d1f50] to-[#1a1040] py-24 px-4 pt-36">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D9782D] rounded-full blur-[160px] opacity-10 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-700 rounded-full blur-[140px] opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/70 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9782D] inline-block" />
            Open Positions
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Explore <span className="text-[#D9782D]">Opportunities</span>
          </h1>
          <p className="text-lg text-white/60 max-w-xl mb-8">
            Discover your next career opportunity from our featured positions across industries and roles.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl px-4 py-2 text-white text-sm font-medium">✓ Verified Companies</div>
            <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl px-4 py-2 text-white text-sm font-medium">✓ Curated Roles</div>
            <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl px-4 py-2 text-white text-sm font-medium">✓ Fast Response</div>
          </div>
        </div>
      </section>

            {/* Search and Filter Section */}
      <section className="bg-white py-8 px-4 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-3 bg-slate-50 border border-gray-200 text-[#050B2C] placeholder:text-gray-400 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#D9782D]/20 focus:border-[#D9782D]/30"
            />
          </div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <JobCardSkeleton count={6} />
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No jobs found matching your filters.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <Link
                  key={job._id}
                  href={`/jobs/${job._id}`}
                  className="group rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold text-[#050B2C] mb-2">{job.title}</h2>
                    <p className="text-sm text-gray-500">{job.department}</p>
                  </div>

                  <div className="mb-4 space-y-3">
                    <div className="flex items-center gap-2 text-[#7BC74D]">
                      <span></span>
                      <span className="text-sm text-[#050B2C]">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#D9782D]">
                      <span></span>
                      <span className="text-sm text-[#050B2C]">{job.jobType}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#050B2D]">
                      <span></span>
                      <span className="text-sm text-[#050B2C]">{job.salaryRange}</span>
                    </div>
                  </div>

                  <div className="mb-4 border-t border-gray-200 pt-4">
                    <p className="text-gray-600 text-sm line-clamp-2">{job.description}</p>
                  </div>

                  <div className="flex flex-col gap-3 mb-4 text-sm sm:flex-row sm:items-center sm:justify-between">
                    <span className="inline-flex items-center rounded-full bg-[#D9782D]/10 px-3 py-1 text-[#D9782D]">{job.experience}</span>
                    <span className="text-gray-500">Posted: {formatTimeAgo(job.postedDate)}</span>
                  </div>

                  <button className="w-full rounded-full bg-[#D9782D] py-3 text-sm font-semibold text-white transition duration-300 group-hover:bg-[#f49d59]">
                    View Details
                  </button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#050B2C] mb-8">Why Choose PickYourHire?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-[1.75rem] border border-gray-200 bg-gray-50 p-8 shadow-sm">
              <div className="text-4xl font-bold text-[#D9782D] mb-2">{jobs.length}+</div>
              <p className="text-gray-600">Active Job Listings</p>
            </div>
            <div className="rounded-[1.75rem] border border-gray-200 bg-gray-50 p-8 shadow-sm">
              <div className="text-4xl font-bold text-[#D9782D] mb-2">100%</div>
              <p className="text-gray-600">Verified Companies</p>
            </div>
            <div className="rounded-[1.75rem] border border-gray-200 bg-gray-50 p-8 shadow-sm">
              <div className="text-4xl font-bold text-[#D9782D] mb-2">100+</div>
              <p className="text-gray-600">Successful Placements</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#050B2C] mb-4">More Opportunities Await</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Explore even more career paths and discover the latest roles on our extended network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://portal.pickyourhire.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#D9782D] px-8 py-3 text-white font-semibold hover:bg-[#f49d59] transition"
            >
              Visit Our Other Website
            </a>
            <Link
              href="https://www.linkedin.com/company/pickyourhire/"
              className="inline-flex items-center justify-center rounded-full border border-[#050B2C] bg-white px-8 py-3 text-[#050B2C] font-semibold hover:bg-gray-100 transition"
            >
              Browse All Jobs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
