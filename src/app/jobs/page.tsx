"use client";

import Link from "next/link";
import Image from "next/image";
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
  if (isNaN(posted.getTime()) || diffMs < 0) return "Just now";
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
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setPageLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs");
        const data = await res.json();
        setJobs(data);
        setFilteredJobs(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    setFilteredJobs(
      jobs.filter(
        (j) =>
          j.title.toLowerCase().includes(term) ||
          j.department.toLowerCase().includes(term) ||
          j.location.toLowerCase().includes(term)
      )
    );
  }, [searchTerm, jobs]);

  if (pageLoading) return <PageLoader />;

  return (
    <div className="min-h-screen bg-white text-[#050B2C]">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-10 px-4" style={{ background: "linear-gradient(135deg, #f0f2ff 0%, #f5f0ff 50%, #ede8ff 100%)" }}>
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D9782D] rounded-full blur-[180px] opacity-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-400 rounded-full blur-[160px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10">

            {/* Left text */}
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 bg-[#D9782D]/10 border border-[#D9782D]/20 text-[#D9782D] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9782D]" />
                Open Positions
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#050B2C] leading-[1.1] mb-5">
                Explore <span className="text-[#D9782D]">Opportunities</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
                Discover your next career opportunity from our featured positions across industries and roles.
              </p>
              {/* 3 badges */}
              <div className="flex flex-wrap gap-4">
                {[
                  { label: "Verified Companies", sub: "Trusted & verified", color: "#3b82f6", icon: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></> },
                  { label: "Curated Roles", sub: "Handpicked jobs", color: "#D9782D", icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></> },
                  { label: "Fast Response", sub: "Quick interview calls", color: "#10b981", icon: <><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></> },
                ].map(({ label, sub, color, icon }) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${color}18` }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#050B2C]">{label}</p>
                      <p className="text-[10px] text-gray-400">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right illustration */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-full max-w-[420px] h-[280px]">
                <Image
                  src="/jobs-illustration.png"
                  alt="Find the right job"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEARCH BAR ── */}
      <section className="px-4 py-8 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 bg-white border-2 border-gray-200 rounded-2xl px-5 py-4 shadow-sm focus-within:border-[#D9782D]/40 transition">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent text-[#050B2C] placeholder:text-gray-400 outline-none text-base"
            />
            <button className="w-10 h-10 rounded-xl bg-[#D9782D] flex items-center justify-center flex-shrink-0 hover:bg-[#c96c25] transition">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── JOB CARDS ── */}
      <section className="py-12 px-4 bg-gray-50 min-h-[400px]">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3,4,5,6].map((i) => <JobCardSkeleton key={i} />)}
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </div>
              <p className="text-xl font-bold text-[#050B2C] mb-2">No jobs found</p>
              <p className="text-gray-500 text-sm">Try a different search term</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <div key={job._id} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-[#D9782D]/20 transition group flex flex-col">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-[#050B2C] text-base leading-snug mb-1 group-hover:text-[#D9782D] transition">{job.title}</h3>
                      <span className="text-xs font-semibold text-[#D9782D]">{job.department}</span>
                    </div>
                    <button className="text-gray-300 hover:text-[#D9782D] transition ml-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                      </svg>
                    </button>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-col gap-1.5 mb-4">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
                      {job.jobType}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3 flex-1">{job.description}</p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      {job.experience && (
                        <span className="text-xs font-semibold text-[#D9782D] bg-[#D9782D]/8 px-2.5 py-1 rounded-full border border-[#D9782D]/15">
                          {job.experience}
                        </span>
                      )}
                      <span className="text-[10px] text-gray-400">Posted: {formatTimeAgo(job.postedDate)}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link href={`/jobs/${job._id}`}
                    className="mt-4 w-full text-center bg-[#D9782D] hover:bg-[#c96c25] text-white text-sm font-semibold py-3 rounded-xl transition">
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
