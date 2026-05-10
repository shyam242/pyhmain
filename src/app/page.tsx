import Link from "next/link";
import ServicesShowcase from "@/components/ServicesShowcase";
import FeaturedJobs from "@/components/FeaturedJobs";

export default function Home() {

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-gradient-to-b from-white via-gray-50 to-gray-100 py-24 px-4 pt-36 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-7xl md:text-8xl font-bold text-[#050B2C] mb-8 leading-tight">
            Where Tech Meets <span className="text-[#D9782D]">Talent</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Connecting exceptional tech professionals with innovative companies worldwide. Discover your next opportunity or build your dream team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/jobs"
              className="bg-[#D9782D] text-white px-8 py-4 rounded-lg font-semibold inline-block hover:bg-[#f49d59]"
            >
              Browse Jobs
            </Link>
            <Link
              href="/contact"
              className="bg-transparent text-[#050B2C] px-8 py-4 rounded-lg border-2 border-[#050B2C] font-semibold inline-block cursor-hover hover:bg-gray-100"
            >
              For Companies
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-600 text-[35px] font-semibold mb-16 tracking-wide">
            Trusted by the best companies worldwide
          </p>
          <div className="backdrop-blur-md bg-white border border-gray-200 rounded-2xl p-12 overflow-hidden shadow-sm">
            <div className="flex overflow-hidden gap-16">
              <div className="flex gap-16 animate-scroll">
                {["KPMG", "Satiate Solutions", "Meddbot", "Coflux Sciences", "Superprocure", "M3S Support", "Steps AI", "Motion Matics", "SEP","Manage my Lawsuits","Speed Engineering Solutions"].map((company, idx) => (
                  <div key={idx} className="text-gray-700 font-bold text-2xl whitespace-nowrap min-w-max">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D9782D] font-semibold uppercase tracking-[0.3em] mb-4">Industries We Cater</p>
            <h2 className="text-5xl md:text-6xl font-bold text-[#050B2C]">Sector expertise that helps you hire faster</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              From high-growth tech to healthcare and retail, PickYourHire connects candidates with companies in the industries that matter most.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-gray-50 border border-gray-200 p-8 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-[#050B2C] mb-4">IT / ITES Industry</h3>
              <p className="text-gray-600 leading-relaxed">
                Trusted talent for software, cloud, digital transformation, product engineering, and technology services.
              </p>
            </div>
            <div className="rounded-3xl bg-gray-50 border border-gray-200 p-8 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-[#050B2C] mb-4">Healthcare & Pharma</h3>
              <p className="text-gray-600 leading-relaxed">
                Skilled professionals for clinical operations, medical devices, biotech, pharma manufacturing, and healthcare IT.
              </p>
            </div>
            <div className="rounded-3xl bg-gray-50 border border-gray-200 p-8 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-[#050B2C] mb-4">Telecom / Semiconductor</h3>
              <p className="text-gray-600 leading-relaxed">
                Engineering and operations specialists for telecom, semiconductor design, embedded systems, and network infrastructure.
              </p>
            </div>
            <div className="rounded-3xl bg-gray-50 border border-gray-200 p-8 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-[#050B2C] mb-4">FMCG & Retail</h3>
              <p className="text-gray-600 leading-relaxed">
                Hiring support across merchandising, sales, supply chain, retail operations, and customer experience functions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServicesShowcase />

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D9782D] font-semibold uppercase tracking-[0.3em] mb-4">Frequently asked questions</p>
            <h2 className="text-5xl font-bold text-[#050B2C]">Everything you need to know</h2>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-[#050B2C] mb-3">What industries do you serve?</h3>
                <p className="text-gray-600 leading-relaxed">
                  We support organizations across IT, BFSI, Telecom, Manufacturing, Healthcare, E-commerce, Education, Retail, and Professional Services.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#050B2C] mb-3">How is PickYourHire different from traditional recruitment agencies?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Traditional recruitment often focuses on volume. PickYourHire focuses on trusted referrals and curated profiles, ensuring clients receive fewer but more relevant candidates with better retention potential.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#050B2C] mb-3">Can referral-based hiring be used for confidential or leadership roles?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes. Referral hiring is especially effective for confidential, niche, and senior-level positions, where trust and discretion are critical.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-[#050B2C] mb-3">What is referral-based hiring at PickYourHire?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Referral-based hiring means candidates are sourced through trusted professional networks, industry experts, and verified referrers—rather than mass job portals. This helps ensure higher quality, credibility, and better role fit.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#050B2C] mb-3">Can startups and small businesses work with you?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Absolutely. We work with startups, SMEs, and large enterprises, offering flexible hiring solutions based on business stage and budget.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#050B2C] mb-3">Do you provide a replacement guarantee?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes. For permanent hiring, we offer a replacement guarantee period, the terms of which are defined in the engagement agreement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="backdrop-blur-md bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="text-5xl font-bold text-[#D9782D] mb-3">50+</div>
              <p className="text-gray-600">Job Listings</p>
            </div>
            <div className="backdrop-blur-md bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="text-5xl font-bold text-[#D9782D] mb-3">100%</div>
              <p className="text-gray-600">Verified Companies</p>
            </div>
            <div className="backdrop-blur-md bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="text-5xl font-bold text-[#D9782D] mb-3">500+</div>
              <p className="text-gray-600">Successful Placements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <div>
              <p className="text-[#D9782D] font-semibold text-sm mb-2">FEATURED</p>
              <h2 className="text-5xl font-bold text-[#050B2C]">New Opportunities</h2>
            </div>
            <Link href="/jobs" className="text-[#050B2C] font-semibold border-b-2 border-[#050B2C]">
              View All →
            </Link>
          </div>

          <FeaturedJobs />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold text-[#050B2C] mb-8">Ready to get started?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Join thousands of professionals and companies on PickYourHire today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/jobs"
              className="bg-[#D9782D] text-white px-8 py-4 rounded-lg font-semibold inline-block hover:bg-[#f49d59]"
            >
              Browse Jobs
            </Link>
            <Link
              href="/contact"
              className="bg-transparent text-[#050B2C] px-8 py-4 rounded-lg border-2 border-[#050B2C] font-semibold inline-block hover:bg-gray-100"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
