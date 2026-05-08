import Link from "next/link";
import Image from "next/image";
import ServicesShowcase from "@/components/ServicesShowcase";
import { query } from "@/lib/db";

type JobSummary = {
  id: string;
  title: string;
  department: string;
  salaryRange: string;
};

async function fetchFeaturedJobs(): Promise<JobSummary[]> {
  try {
    const result = await query(
      "SELECT id, title, department, salary_range as \"salaryRange\" FROM jobs ORDER BY posted_date DESC LIMIT 3"
    );
    return result.rows.map((row) => ({
      id: row.id.toString(),
      title: row.title,
      department: row.department,
      salaryRange: row.salaryRange || "Competitive",
    }));
  } catch (error) {
    console.error("Error fetching featured jobs:", error);
    return [];
  }
}

export default async function Home() {
  const topJobs = await fetchFeaturedJobs();

  return (
    <div className="bg-slate-900 min-h-screen">
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 py-32 px-4 pt-56 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Where Tech Meets <span className="text-blue-400">Talent</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Connecting exceptional tech professionals with innovative companies worldwide. Discover your next opportunity or build your dream team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/jobs"
              className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold inline-block"
            >
              Browse Jobs
            </Link>
            <Link
              href="/contact"
              className="bg-transparent text-white px-8 py-4 rounded-lg border-2 border-white font-semibold inline-block cursor-hover"
            >
              For Companies
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-400 text-[35px] font-semibold mb-16 tracking-wide">
            Trusted by the best companies worldwide
          </p>
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-12 overflow-hidden">
            <div className="flex overflow-hidden gap-16">
              <div className="flex gap-16 animate-scroll">
                {["KPMG", "Satiate Solutions", "Meddbot", "Coflux Sciences", "Superprocure", "M3S Support", "Steps AI", "Motion Matics", "SEP","Manage my Lawsuits","Speed Engineering Solutions"].map((company, idx) => (
                  <div key={idx} className="text-gray-300 font-bold text-2xl whitespace-nowrap min-w-max">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesShowcase />

      {/* Metrics Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="text-5xl font-bold text-white mb-3">50+</div>
              <p className="text-gray-400">Job Listings</p>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="text-5xl font-bold text-white mb-3">100%</div>
              <p className="text-gray-400">Verified Companies</p>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="text-5xl font-bold text-white mb-3">500+</div>
              <p className="text-gray-400">Successful Placements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <div>
              <p className="text-blue-400 font-semibold text-sm mb-2">FEATURED</p>
              <h2 className="text-5xl font-bold text-white">New Opportunities</h2>
            </div>
            <Link href="/jobs" className="text-white font-semibold border-b-2 border-white">
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {topJobs.length > 0 ? (
              topJobs.map((job) => (
                <div key={job.id} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8 animate-fade-in hover:bg-white/10 transition-all duration-300">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold text-white mb-8">Ready to get started?</h2>
          <p className="text-xl text-gray-400 mb-12">
            Join thousands of professionals and companies on PickYourHire today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/jobs"
              className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold inline-block"
            >
              Browse Jobs
            </Link>
            <Link
              href="/contact"
              className="bg-transparent text-white px-8 py-4 rounded-lg border-2 border-white font-semibold inline-block"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
