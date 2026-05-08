"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

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

export default function AdminDashboard() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingJobId, setEditingJobId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    jobType: "",
    salaryRange: "",
    experience: "",
    description: "",
    responsibilities: "",
    qualifications: "",
    benefits: "",
  });
  const router = useRouter();

  const resetForm = () => {
    setEditingJobId(null);
    setFormData({
      title: "",
      department: "",
      location: "",
      jobType: "",
      salaryRange: "",
      experience: "",
      description: "",
      responsibilities: "",
      qualifications: "",
      benefits: "",
    });
    setShowForm(false);
  };

  const handleEditJob = (job: Job) => {
    setEditingJobId(job._id);
    setFormData({
      title: job.title,
      department: job.department,
      location: job.location,
      jobType: job.jobType,
      salaryRange: job.salaryRange,
      experience: job.experience,
      description: job.description,
      responsibilities: (job.responsibilities || []).join("\n"),
      qualifications: (job.qualifications || []).join("\n"),
      benefits: (job.benefits || []).join("\n"),
    });
    setShowForm(true);
  };

  useEffect(() => {
    // Check if admin is logged in
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin");
      return;
    }

    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch("/api/jobs");
      if (response.ok) {
        const data = await response.json();
        setJobs(data);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
      toast.error("Failed to fetch jobs");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const token = localStorage.getItem("adminToken");
    if (!token) {
      toast.error("Not authenticated");
      return;
    }

    const method = editingJobId ? "PATCH" : "POST";
    const endpoint = editingJobId ? `/api/jobs/${editingJobId}` : "/api/jobs";

    try {
      const jobData = {
        ...formData,
        responsibilities: formData.responsibilities.split("\n").filter((r) => r.trim()),
        qualifications: formData.qualifications.split("\n").filter((q) => q.trim()),
        benefits: formData.benefits.split("\n").filter((b) => b.trim()),
      };

      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(jobData),
      });

      if (response.ok) {
        toast.success(editingJobId ? "Job updated successfully!" : "Job added successfully!");
        resetForm();
        fetchJobs();
      } else {
        const error = await response.json();
        toast.error(error.error || (editingJobId ? "Failed to update job" : "Failed to add job"));
      }
    } catch (error) {
      console.error("Error saving job:", error);
      toast.error("An error occurred");
    }
  };

  const handleDeleteJob = async (jobId: string) => {
    if (!confirm("Are you sure you want to delete this job?")) return;

    const token = localStorage.getItem("adminToken");
    if (!token) {
      toast.error("Not authenticated");
      return;
    }

    try {
      const response = await fetch(`/api/jobs/${jobId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        toast.success("Job deleted successfully!");
        fetchJobs();
      } else {
        const error = await response.json();
        toast.error(error.error || "Failed to delete job");
      }
    } catch (error) {
      console.error("Error deleting job:", error);
      toast.error("An error occurred");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin");
  };

  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-8 px-4 pt-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-gray-400 mt-1">Manage job postings</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          {/* Add Job Button */}
          <button
            onClick={() => setShowForm(!showForm)}
            className="mb-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition"
          >
            {showForm ? "Cancel" : "+ Add New Job"}
          </button>

          {/* Add Job Form */}
          {showForm && (
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                {editingJobId ? "Edit Job Posting" : "Create New Job Posting"}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Job Title *</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="e.g., Senior Developer"
                      className="w-full px-4 py-2 bg-white/5 border border-white/20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:border-white/40"
                      required
                    />
                  </div>

                  {/* Department */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Department *</label>
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      placeholder="e.g., Engineering"
                      className="w-full px-4 py-2 bg-white/5 border border-white/20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:border-white/40"
                      required
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Location *</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="e.g., Remote"
                      className="w-full px-4 py-2 bg-white/5 border border-white/20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:border-white/40"
                      required
                    />
                  </div>

                  {/* Job Type */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Job Type *</label>
                    <select
                      name="jobType"
                      value={formData.jobType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-white/5 border border-white/20 text-white rounded-lg focus:outline-none focus:border-white/40"
                      required
                    >
                      <option value="" className="bg-slate-900">Select Type</option>
                      <option value="Full-time" className="bg-slate-900">Full-time</option>
                      <option value="Part-time" className="bg-slate-900">Part-time</option>
                      <option value="Contract" className="bg-slate-900">Contract</option>
                      <option value="Internship" className="bg-slate-900">Internship</option>
                    </select>
                  </div>

                  {/* Salary Range */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Salary Range</label>
                    <input
                      type="text"
                      name="salaryRange"
                      value={formData.salaryRange}
                      onChange={handleInputChange}
                      placeholder="e.g., $80,000 - $120,000"
                      className="w-full px-4 py-2 bg-white/5 border border-white/20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:border-white/40"
                    />
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Experience Required</label>
                    <input
                      type="text"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="e.g., 3+ years"
                      className="w-full px-4 py-2 bg-white/5 border border-white/20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Job Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Detailed job description..."
                    className="w-full px-4 py-2 bg-white/5 border border-white/20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:border-white/40 h-32"
                    required
                  />
                </div>

                {/* Responsibilities */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Responsibilities (one per line)</label>
                  <textarea
                    name="responsibilities"
                    value={formData.responsibilities}
                    onChange={handleInputChange}
                    placeholder="Line 1&#10;Line 2&#10;Line 3..."
                    className="w-full px-4 py-2 bg-white/5 border border-white/20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:border-white/40 h-24"
                  />
                </div>

                {/* Qualifications */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Qualifications (one per line)</label>
                  <textarea
                    name="qualifications"
                    value={formData.qualifications}
                    onChange={handleInputChange}
                    placeholder="Line 1&#10;Line 2&#10;Line 3..."
                    className="w-full px-4 py-2 bg-white/5 border border-white/20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:border-white/40 h-24"
                  />
                </div>

                {/* Benefits */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Benefits (one per line)</label>
                  <textarea
                    name="benefits"
                    value={formData.benefits}
                    onChange={handleInputChange}
                    placeholder="Line 1&#10;Line 2&#10;Line 3..."
                    className="w-full px-4 py-2 bg-white/5 border border-white/20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:border-white/40 h-24"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-lg transition"
                  >
                    {editingJobId ? "Update Job" : "Create Job Posting"}
                  </button>
                  {editingJobId && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="w-full py-3 bg-white text-slate-900 rounded-lg font-semibold border border-white/20"
                    >
                      Cancel Edit
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}

          {/* Jobs List */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-400">Loading jobs...</p>
            </div>
          ) : jobs.length === 0 ? (
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8 text-center">
              <p className="text-gray-400 mb-4">No jobs posted yet</p>
              <button
                onClick={() => setShowForm(true)}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
              >
                Create First Job
              </button>
            </div>
          ) : (
            <div className="grid gap-4">
              {jobs.map((job) => (
                <div key={job._id} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition">
                  <div className="flex justify-between items-start mb-4 gap-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{job.title}</h3>
                      <p className="text-gray-400 text-sm">{job.department} • {job.location}</p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleEditJob(job)}
                        className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 font-semibold rounded-lg transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteJob(job._id)}
                        className="px-4 py-2 bg-red-600/20 hover:bg-red-600/40 text-red-300 font-semibold rounded-lg transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-sm text-gray-400">
                    <div>
                      <p className="text-gray-500">Type</p>
                      <p className="text-white">{job.jobType}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Salary</p>
                      <p className="text-white">{job.salaryRange}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Experience</p>
                      <p className="text-white">{job.experience}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Posted</p>
                      <p className="text-white">{job.postedDate}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
