"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PageLoader from "@/components/PageLoader";

interface Job {
  _id: string;
  title: string;
  department: string;
  location: string;
  jobType: string;
  salaryRange: string;
  experience: string;
  description: string;
  responsibilities?: string[];
  qualifications?: string[];
  benefits?: string[];
  postedDate: string;
}

export default function JobDetailsPage() {
  const params = useParams();
  const id = params.id as string;
  const [job, setJob] = useState<Job | null>(null);
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJob();
    fetchAllJobs();
  }, [id]);

  const fetchJob = async () => {
    try {
      const response = await fetch(`/api/jobs/${id}`);
      if (response.ok) {
        const data = await response.json();
        setJob(data);
      } else {
        setJob(null);
      }
    } catch (error) {
      console.error("Error fetching job:", error);
      setJob(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllJobs = async () => {
    try {
      const response = await fetch("/api/jobs");
      if (response.ok) {
        const data = await response.json();
        setAllJobs(data);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  if (loading) {
    return <PageLoader message="Loading job details..." />;
  }

  if (!job) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center px-4 py-20 text-center">
        <div className="max-w-2xl border border-gray-200 rounded-[2rem] p-10 bg-gray-50 shadow-sm">
          <h1 className="text-3xl font-bold text-[#050B2C] mb-4">Job not found</h1>
          <p className="text-gray-600 mb-6">The job you are looking for could not be found. Please return to the job listings.</p>
          <Link href="/jobs" className="inline-block bg-[#D9782D] text-white px-6 py-3 rounded-3xl font-semibold hover:bg-[#f49d59]">
            Back to Jobs
          </Link>
        </div>
      </div>
    );
  }

  const similarJobs = allJobs
    .filter((j) => j._id !== job._id && j.department === job.department)
    .slice(0, 3);

  return (
    <div className="bg-white min-h-screen text-[#050B2C] animate-fade-in">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100 py-16 px-4 pt-32">
        <div className="absolute inset-x-0 top-0 opacity-40 h-80">
          <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-[#D9782D]/15 blur-3xl animate-pulse-slow" />
          <div className="absolute right-1/4 top-12 h-80 w-80 rounded-full bg-[#7BC74D]/15 blur-3xl animate-pulse-slow" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <Link href="/jobs" className="text-[#D9782D] mb-4 inline-block font-semibold">
            ← Back to Jobs
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-[#050B2C] mb-4">{job.title}</h1>
          <p className="text-xl text-gray-600">{job.department}</p>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Quick Info */}
            <div className="rounded-[1.75rem] border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#050B2C] mb-6">Job Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-gray-500 text-sm font-semibold mb-1">Location</p>
                  <p className="text-lg text-[#050B2C]">{job.location}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-semibold mb-1">Job Type</p>
                  <p className="text-lg text-[#050B2C]">{job.jobType}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-semibold mb-1">Experience</p>
                  <p className="text-lg text-[#050B2C]">{job.experience}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-semibold mb-1">Salary</p>
                  <p className="text-lg text-[#050B2C]">{job.salaryRange}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="rounded-[1.75rem] border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#050B2C] mb-4">About This Role</h2>
              <p className="text-gray-600 leading-8 whitespace-pre-line break-words mb-6">
                {job.description}
              </p>
            </div>

            {/* Responsibilities */}
            {job.responsibilities && job.responsibilities.length > 0 && (
              <div className="rounded-[1.75rem] border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-[#050B2C] mb-6">Responsibilities</h2>
                <ul className="space-y-4">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex gap-4">
                      <span className="text-[#D9782D] font-bold flex-shrink-0">✓</span>
                      <span className="text-gray-600">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Qualifications */}
            {job.qualifications && job.qualifications.length > 0 && (
              <div className="rounded-[1.75rem] border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-[#050B2C] mb-6">Qualifications</h2>
                <ul className="space-y-4">
                  {job.qualifications.map((qual, idx) => (
                    <li key={idx} className="flex gap-4">
                      <span className="text-[#7BC74D] font-bold flex-shrink-0">✓</span>
                      <span className="text-gray-600">{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits */}
            {job.benefits && job.benefits.length > 0 && (
              <div className="rounded-[1.75rem] border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-[#050B2C] mb-6">Benefits & Perks</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {job.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="text-[#D9782D] text-2xl">🎁</span>
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            {/* Apply Card */}
            <div className="rounded-[1.75rem] border border-gray-200 bg-white p-8 space-y-6 shadow-sm sticky top-32">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#050B2C] mb-2">Ready to Apply?</h3>
                <p className="text-gray-600 mb-6">
                  Click the button below to apply on LinkedIn for this exciting opportunity.
                </p>
              </div>

              <a
                href="https://www.linkedin.com/company/pickyourhire"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#D9782D] hover:bg-[#f49d59] text-white py-4 rounded-3xl font-semibold text-center block transition shadow-lg shadow-[#D9782D]/20"
              >
                Apply Now on LinkedIn
              </a>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-[#050B2C] mb-4">Share This Job</h4>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Link copied to clipboard!");
                  }}
                  className="w-full border border-gray-200 text-[#050B2C] py-2 rounded-3xl hover:bg-gray-50 transition"
                >
                 Copy Link
                </button>
              </div>

              <div className="rounded-[1.75rem] bg-[#D9782D]/10 border border-[#D9782D]/20 p-4">
                <h4 className="font-semibold text-[#050B2C] mb-2">Pro Tip</h4>
                <p className="text-sm text-gray-600">
                  Make sure your LinkedIn profile is up to date before applying.
                </p>
              </div>
            </div>

            {/* Similar Jobs */}
            {similarJobs.length > 0 && (
              <div className="mt-8 rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#050B2C] mb-4">Similar Positions</h3>
                <div className="space-y-3">
                  {similarJobs.map((similarJob) => (
                    <Link
                      key={similarJob._id}
                      href={`/jobs/${similarJob._id}`}
                      className="block p-4 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#D9782D]/30 hover:bg-[#D9782D]/5 transition"
                    >
                      <p className="font-semibold text-[#050B2C] text-sm mb-1">{similarJob.title}</p>
                      <p className="text-xs text-gray-500">{similarJob.location}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}

