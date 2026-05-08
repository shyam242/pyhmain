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
    <div className="bg-slate-900 min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-20 px-4 pt-32">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Explore Opportunities</h1>
          <p className="text-xl text-gray-400">
            Discover your next career opportunity from our featured positions
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-gradient-to-b from-slate-900  to-slate-800 py-8 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:border-white/40"
            />
          </div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <JobCardSkeleton count={6} />
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400">No jobs found matching your filters.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <Link
                  key={job._id}
                  href={`/jobs/${job._id}`}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 cursor-pointer group hover:bg-white/10 transition animate-fade-in"
                >
                  <div className="mb-4">
                    <h2 className="text-xl font-bold text-white mb-2">
                      {job.title}
                    </h2>
                    <p className="text-sm text-gray-400">{job.department}</p>
                  </div>

                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2 text-gray-300">
                      <span>📍</span>
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <span>💼</span>
                      <span className="text-sm">{job.jobType}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <span>💰</span>
                      <span className="text-sm">{job.salaryRange}</span>
                    </div>
                  </div>

                  <div className="mb-4 pt-4 border-t border-white/10">
                    <p className="text-gray-400 text-sm line-clamp-2">{job.description}</p>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30">
                      {job.experience}
                    </span>
                    <span className="text-xs text-gray-500">
                      Posted: {new Date(job.postedDate).toLocaleDateString()}
                    </span>
                  </div>

                  <button className="w-full bg-white text-slate-900 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition">
                    View Details
                  </button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose PickYourHire?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="text-4xl font-bold text-blue-400 mb-2">{jobs.length}+</div>
              <p className="text-gray-400">Active Job Listings</p>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
              <p className="text-gray-400">Verified Companies</p>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
              <p className="text-gray-400">Successful Placements</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-14 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">More Opportunities Await</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Explore even more career paths and discover the latest roles on our extended network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://pickyourhire.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-white/10 border border-white/15 text-white font-semibold hover:bg-white/15 transition"
            >
              Visit Our Other Website
            </a>
            <Link
              href="https://www.linkedin.com/company/pickyourhire/"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full font-semibold inline-block transition"
            >
              Browse All Jobs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
