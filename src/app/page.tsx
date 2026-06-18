import Link from "next/link";
import ServicesShowcase from "@/components/ServicesShowcase";
import FeaturedJobs from "@/components/FeaturedJobs";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-white via-gray-50 to-gray-100 py-24 px-4 pt-36 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-7xl md:text-8xl font-bold text-[#050B2C] mb-8 leading-tight">
            Because the Right Hire Changes <span className="text-[#D9782D]">Everything</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Connecting exceptional tech professionals with innovative companies worldwide. Discover your next opportunity or build your dream team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/jobs" className="bg-[#D9782D] text-white px-8 py-4 rounded-lg font-semibold inline-block hover:bg-[#f49d59]">
              Browse Jobs
            </Link>
            <Link href="/contact" className="bg-transparent text-[#050B2C] px-8 py-4 rounded-lg border-2 border-[#050B2C] font-semibold inline-block hover:bg-gray-100">
              For Companies
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted companies scrollbar */}
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

      {/* Industries Section — expanded */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D9782D] font-semibold uppercase tracking-[0.3em] mb-4">Industries We Cater</p>
            <h2 className="text-5xl md:text-6xl font-bold text-[#050B2C]">Sector expertise that helps you hire faster</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              From high-growth tech to healthcare and retail, PickYourHire connects candidates with companies in the industries that matter most.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Original 4 */}
            <div className="rounded-3xl bg-gray-50 border border-gray-200 p-8 shadow-sm hover:shadow-md hover:border-[#D9782D]/30 transition group">
              <div className="w-10 h-10 rounded-xl bg-[#D9782D]/10 flex items-center justify-center mb-5 group-hover:bg-[#D9782D]/20 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-[#050B2C] mb-3">IT / ITES Industry</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Trusted talent for software, cloud, digital transformation, product engineering, and technology services.</p>
            </div>

            <div className="rounded-3xl bg-gray-50 border border-gray-200 p-8 shadow-sm hover:shadow-md hover:border-[#D9782D]/30 transition group">
              <div className="w-10 h-10 rounded-xl bg-[#D9782D]/10 flex items-center justify-center mb-5 group-hover:bg-[#D9782D]/20 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-[#050B2C] mb-3">Healthcare & Pharma</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Skilled professionals for clinical operations, medical devices, biotech, pharma manufacturing, and healthcare IT.</p>
            </div>

            <div className="rounded-3xl bg-gray-50 border border-gray-200 p-8 shadow-sm hover:shadow-md hover:border-[#D9782D]/30 transition group">
              <div className="w-10 h-10 rounded-xl bg-[#D9782D]/10 flex items-center justify-center mb-5 group-hover:bg-[#D9782D]/20 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-[#050B2C] mb-3">Telecom / Semiconductor</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Engineering and operations specialists for telecom, semiconductor design, embedded systems, and network infrastructure.</p>
            </div>

            <div className="rounded-3xl bg-gray-50 border border-gray-200 p-8 shadow-sm hover:shadow-md hover:border-[#D9782D]/30 transition group">
              <div className="w-10 h-10 rounded-xl bg-[#D9782D]/10 flex items-center justify-center mb-5 group-hover:bg-[#D9782D]/20 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-[#050B2C] mb-3">FMCG & Retail</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Hiring support across merchandising, sales, supply chain, retail operations, and customer experience functions.</p>
            </div>

            {/* New industries from the handwritten screenshot */}
            <div className="rounded-3xl bg-gray-50 border border-gray-200 p-8 shadow-sm hover:shadow-md hover:border-[#D9782D]/30 transition group">
              <div className="w-10 h-10 rounded-xl bg-[#D9782D]/10 flex items-center justify-center mb-5 group-hover:bg-[#D9782D]/20 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-[#050B2C] mb-3">Distribution & Logistics</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Talent for supply chain, last-mile delivery, fleet management, warehouse operations, and distribution networks.</p>
            </div>

            <div className="rounded-3xl bg-gray-50 border border-gray-200 p-8 shadow-sm hover:shadow-md hover:border-[#D9782D]/30 transition group">
              <div className="w-10 h-10 rounded-xl bg-[#D9782D]/10 flex items-center justify-center mb-5 group-hover:bg-[#D9782D]/20 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-[#050B2C] mb-3">Retail Sales</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Sales associates, store managers, visual merchandisers, and retail leaders who drive revenue and customer loyalty.</p>
            </div>

            <div className="rounded-3xl bg-gray-50 border border-gray-200 p-8 shadow-sm hover:shadow-md hover:border-[#D9782D]/30 transition group">
              <div className="w-10 h-10 rounded-xl bg-[#D9782D]/10 flex items-center justify-center mb-5 group-hover:bg-[#D9782D]/20 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 5.27 5.27l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-[#050B2C] mb-3">Marketing & Growth</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Brand strategists, digital marketers, performance specialists, and growth leaders for consumer and B2B brands.</p>
            </div>

            <div className="rounded-3xl bg-gray-50 border border-gray-200 p-8 shadow-sm hover:shadow-md hover:border-[#D9782D]/30 transition group">
              <div className="w-10 h-10 rounded-xl bg-[#D9782D]/10 flex items-center justify-center mb-5 group-hover:bg-[#D9782D]/20 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-[#050B2C] mb-3">B2B Sales</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Account executives, enterprise sales managers, pre-sales consultants, and business development professionals.</p>
            </div>

            <div className="rounded-3xl bg-gray-50 border border-gray-200 p-8 shadow-sm hover:shadow-md hover:border-[#D9782D]/30 transition group">
              <div className="w-10 h-10 rounded-xl bg-[#D9782D]/10 flex items-center justify-center mb-5 group-hover:bg-[#D9782D]/20 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-[#050B2C] mb-3">Operations & Strategy</h3>
              <p className="text-gray-600 leading-relaxed text-sm">COOs, operations managers, process improvement leads, and project management professionals across sectors.</p>
            </div>

            <div className="rounded-3xl bg-gray-50 border border-gray-200 p-8 shadow-sm hover:shadow-md hover:border-[#D9782D]/30 transition group">
              <div className="w-10 h-10 rounded-xl bg-[#D9782D]/10 flex items-center justify-center mb-5 group-hover:bg-[#D9782D]/20 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-[#050B2C] mb-3">Warehouse Management</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Warehouse supervisors, inventory managers, WMS operators, and fulfillment center leads for modern supply chains.</p>
            </div>
          </div>
        </div>
      </section>

      <ServicesShowcase />

      {/* ===== PRODUCTS & PLATFORM SECTION ===== */}
      <section className="py-24 px-4 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D9782D] font-semibold uppercase tracking-[0.3em] mb-4">Our Products & Platform</p>
            <h2 className="text-5xl md:text-6xl font-bold text-[#050B2C]">One platform, end-to-end hiring</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              From intelligent candidate matching to referral management, PickYourHire's suite of tools covers every stage of the hiring lifecycle.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Product 1 — Recruiter Portal (large card) */}
            <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#050B2C] to-[#0d1f50] text-white p-10 flex flex-col justify-between min-h-[380px] shadow-xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#D9782D] rounded-full blur-[120px] opacity-20 pointer-events-none" />
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-xs font-semibold text-orange-300 mb-6 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block" />
                  Recruiter Suite
                </div>
                <h3 className="text-3xl font-bold mb-4">Recruiter Portal</h3>
                <p className="text-white/70 leading-relaxed max-w-sm mb-8">
                  AI-powered candidate matching, JD-to-CV scoring, advanced filters, shortlist management, and a full hiring pipeline dashboard — all in one place.
                </p>
                <ul className="space-y-2 text-sm text-white/80">
                  {["JD ↔ CV Match with weighted AI scoring", "Candidate pipeline & shortlist management", "Search by project, skill, and experience", "Bulk candidate analysis"].map(f => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D9782D] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="https://portal.pickyourhire.com/signin" target="_blank" rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-[#D9782D] hover:bg-[#f49d59] text-white font-semibold px-6 py-3 rounded-xl transition-colors w-fit shadow-lg shadow-[#D9782D]/30">
                Access Recruiter Portal
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>

            {/* Right column — 2 smaller cards */}
            <div className="flex flex-col gap-8">
              {/* Product 2 — Candidate Dashboard */}
              <div className="rounded-[2rem] bg-gray-50 border border-gray-200 p-8 hover:shadow-md hover:border-[#D9782D]/30 transition flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#D9782D]/10 rounded-full px-4 py-1.5 text-xs font-semibold text-[#D9782D] mb-5 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9782D] inline-block" />
                    For Candidates
                  </div>
                  <h3 className="text-2xl font-bold text-[#050B2C] mb-3">Candidate Dashboard</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    Build your profile, track job applications, showcase verified skills, and get matched to roles suited to your experience — all from a single candidate portal.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-500">
                    {["Profile strength scoring & verification", "Open job browsing with smart filters", "Skills management & project showcase"].map(f => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D9782D] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="https://portal.pickyourhire.com/signin" target="_blank" rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 border-2 border-[#050B2C] text-[#050B2C] font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition w-fit text-sm">
                  Create Candidate Profile
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>

              {/* Product 3 — Referral Platform */}
              <div className="rounded-[2rem] bg-[#FFF7F0] border border-[#D9782D]/20 p-8 hover:shadow-md hover:border-[#D9782D]/50 transition flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#D9782D]/15 rounded-full px-4 py-1.5 text-xs font-semibold text-[#D9782D] mb-5 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9782D] inline-block" />
                    Referral Network
                  </div>
                  <h3 className="text-2xl font-bold text-[#050B2C] mb-3">Referral Platform</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    Join PickYourHire's referral ecosystem, submit candidates, track every referral's status, and earn incentives when your referrals get hired.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-500">
                    {["Real-time referral tracking & status", "Incentive management & payout history", "Access to exclusive, confidential roles"].map(f => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D9782D] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="https://portal.pickyourhire.com/signin" target="_blank" rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 bg-[#D9782D] hover:bg-[#c96c25] text-white font-semibold px-5 py-2.5 rounded-xl transition w-fit text-sm shadow-md shadow-[#D9782D]/20">
                  Join as Referrer
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom stats strip */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "AI-Powered", label: "JD ↔ CV Matching Engine" },
              { value: "Real-time", label: "Referral Tracking Dashboard" },
              { value: "Multi-role", label: "Recruiter, Candidate & Referrer" },
              { value: "Secure", label: "Verified Company & Candidate Profiles" },
            ].map((stat) => (
              <div key={stat.label} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center hover:border-[#D9782D]/30 transition">
                <p className="text-lg font-bold text-[#D9782D] mb-1">{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ===== END PRODUCTS SECTION ===== */}

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
                <p className="text-gray-600 leading-relaxed">We support organizations across IT, BFSI, Telecom, Manufacturing, Healthcare, E-commerce, Education, Retail, and Professional Services.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#050B2C] mb-3">How is PickYourHire different from traditional recruitment agencies?</h3>
                <p className="text-gray-600 leading-relaxed">Traditional recruitment often focuses on volume. PickYourHire focuses on trusted referrals and curated profiles, ensuring clients receive fewer but more relevant candidates with better retention potential.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#050B2C] mb-3">Can referral-based hiring be used for confidential or leadership roles?</h3>
                <p className="text-gray-600 leading-relaxed">Yes. Referral hiring is especially effective for confidential, niche, and senior-level positions, where trust and discretion are critical.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-[#050B2C] mb-3">What is referral-based hiring at PickYourHire?</h3>
                <p className="text-gray-600 leading-relaxed">Referral-based hiring means candidates are sourced through trusted professional networks, industry experts, and verified referrers—rather than mass job portals. This helps ensure higher quality, credibility, and better role fit.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#050B2C] mb-3">Can startups and small businesses work with you?</h3>
                <p className="text-gray-600 leading-relaxed">Absolutely. We work with startups, SMEs, and large enterprises, offering flexible hiring solutions based on business stage and budget.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#050B2C] mb-3">Do you provide a replacement guarantee?</h3>
                <p className="text-gray-600 leading-relaxed">Yes. For permanent hiring, we offer a replacement guarantee period, the terms of which are defined in the engagement agreement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
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

      {/* Featured Jobs */}
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

      {/* CTA */}
      <section className="py-24 px-4 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold text-[#050B2C] mb-8">Ready to get started?</h2>
          <p className="text-xl text-gray-600 mb-12">Join thousands of professionals and companies on PickYourHire today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/jobs" className="bg-[#D9782D] text-white px-8 py-4 rounded-lg font-semibold inline-block hover:bg-[#f49d59]">
              Browse Jobs
            </Link>
            <Link href="/contact" className="bg-transparent text-[#050B2C] px-8 py-4 rounded-lg border-2 border-[#050B2C] font-semibold inline-block hover:bg-gray-100">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
