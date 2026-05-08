"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface JobSummary {
  id: string;
  title: string;
  department: string;
  salaryRange: string;
}

export default function FeaturedJobs() {
  const [jobs, setJobs] = useState<JobSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadJobs() {
      try {
        const response = await fetch("/api/jobs?limit=3");
        if (!response.ok) {
          throw new Error("Failed to fetch featured jobs");
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching featured jobs:", error);
      } finally {
        setLoading(false);
      }
    }

    loadJobs();
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {loading ? (
        [1, 2, 3].map((idx) => (
          <div
            key={idx}
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8 animate-pulse"
          >
            <div className="h-6 bg-slate-700 rounded mb-4" />
            <div className="h-4 bg-slate-700 rounded mb-2 w-3/4" />
            <div className="h-4 bg-slate-700 rounded mb-6 w-1/2" />
            <div className="h-10 bg-slate-700 rounded" />
          </div>
        ))
      ) : jobs.length > 0 ? (
        jobs.map((job) => (
          <div
            key={job.id}
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8 animate-fade-in hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
            <p className="text-gray-400 mb-6">{job.department}</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-400 font-semibold">{job.salaryRange || "Competitive"}</span>
              <Link href={`/jobs/${job.id}`} className="bg-white text-slate-900 px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                View
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div className="md:col-span-3 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8 text-center text-gray-400">
          No featured roles available right now.
        </div>
      )}
    </div>
  );
}
