import Link from "next/link";
import Image from "next/image";
import ServicesShowcase from "@/components/ServicesShowcase";
import FeaturedJobs from "@/components/FeaturedJobs";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f2ff] via-[#f5f0ff] to-[#ede8ff] pt-32 pb-0 px-4 flex items-center">
        {/* Background orbs */}
        <div className="absolute top-10 right-10 w-[420px] h-[420px] bg-purple-300 rounded-full blur-[160px] opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#D9782D] rounded-full blur-[140px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">

          

              <h1 className="text-5xl md:text-6xl font-bold text-[#050B2C] leading-[1.1] mb-6">
                Because the Right Hire<br />
                Changes <span className="text-[#D9782D]">Everything</span>
              </h1>

              <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg">
                We connect exceptional professionals with innovative companies through trusted referrals and AI-powered candidate matching.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link href="/jobs"
                  className="inline-flex items-center justify-center gap-2 bg-[#D9782D] text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-[#c96c25] transition shadow-lg shadow-[#D9782D]/25">
                  I&apos;m a Candidate →
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#050B2C] border-2 border-[#050B2C]/12 px-7 py-3.5 rounded-xl font-semibold hover:border-[#050B2C]/25 hover:bg-gray-50 transition">
                  I&apos;m a Company →
                </Link>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["bg-orange-400","bg-blue-500","bg-emerald-500","bg-purple-500","bg-rose-400"].map((c,i) => (
                    <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                      {String.fromCharCode(65+i)}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  Join <span className="font-semibold text-[#050B2C]">3000+</span> professionals
                </p>
              </div>
            </div>

            {/* ── RIGHT — Professional image + floating stat cards ── */}
            <div className="flex-1 relative flex items-end justify-center min-h-[460px] lg:min-h-[520px]">

              {/* Background circle */}
              <div className="absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full bg-white/50 border border-white/80 shadow-inner" />

              {/* Professional photo */}
              <div className="relative z-10 h-[440px] lg:h-[500px] w-full flex items-end justify-center">
                <Image
                  src="/hero-professionals.png"
                  alt="PickYourHire professionals"
                  width={480}
                  height={500}
                  className="object-contain object-bottom h-full w-auto drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating card — AI Match Score (top left) */}
              <div className="absolute top-12 left-2 lg:-left-6 z-20 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 min-w-[148px]">
                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-1">AI Match Score</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-[#050B2C]">98%</span>
                  <span className="text-emerald-500 text-sm font-semibold flex items-center gap-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                    High
                  </span>
                </div>
              </div>

              {/* Floating card — Verified Talent (top right) */}
              <div className="absolute top-8 right-0 lg:-right-4 z-20 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider leading-none">Verified Talent</p>
                    <p className="text-xs font-bold text-emerald-600 mt-0.5">Trusted & Verified</p>
                  </div>
                </div>
              </div>

              {/* Floating card — Trusted Referrals (mid left) */}
              <div className="absolute top-[44%] left-0 lg:-left-8 z-20 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 min-w-[148px]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-lg bg-[#D9782D]/10 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>
                  </div>
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Trusted Referrals</p>
                </div>
                <p className="text-xl font-bold text-[#050B2C]">+50</p>
              </div>

              {/* Floating card — Hire Faster (bottom right) */}
              <div className="absolute bottom-16 right-0 lg:-right-2 z-20 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider leading-none">Hire Faster</p>
                    <p className="text-xs font-bold text-[#050B2C] mt-0.5">Save 40% Time</p>
                  </div>
                </div>
              </div>

              {/* Floating panel — Recruiter Dashboard preview (Recrivio-style) */}
              <div className="hidden sm:block absolute left-0 lg:-left-16 bottom-4 lg:bottom-8 z-0 w-[220px] lg:w-[290px] -rotate-6 rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden">
                <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-50 border-b border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div className="relative w-full h-[130px] lg:h-[175px]">
                  <Image
                    src="/ss-recruiter-dashboard.png"
                    alt="PickYourHire Recruiter Dashboard"
                    fill
                    className="object-cover object-left-top"
                  />
                </div>
              </div>

              {/* Floating label — Recruiter Dashboard tagline */}
              <div className="hidden sm:block absolute left-2 lg:-left-10 bottom-[-10px] lg:bottom-[-16px] z-20 bg-[#050B2C] text-white rounded-2xl shadow-xl px-4 py-3 max-w-[180px]">
                <p className="text-[9px] text-[#D9782D] font-bold uppercase tracking-widest mb-1">Recruiter Dashboard</p>
                <p className="text-xs font-semibold leading-snug">Hire Smarter. Track Faster.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Trusted companies marquee */}
      <section className="pt-6 pb-16 lg:pb-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-8">Trusted by leading companies</p>
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-sm py-8 sm:py-10 px-4 sm:px-10">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="flex gap-5 sm:gap-6 animate-scroll">
              {["KPMG","Satiate Solutions","Meddbot","Coflux Sciences","Superprocure","M3S Support","Steps AI","Motion Matics","SEP","Manage my Lawsuits","Speed Engineering Solutions","KPMG","Satiate Solutions","Meddbot","Coflux Sciences","Superprocure","M3S Support","Steps AI","Motion Matics","SEP","Manage my Lawsuits","Speed Engineering Solutions"].map((c, i) => (
                <div key={i} className="flex items-center justify-center bg-white rounded-2xl border border-gray-200 shadow-sm px-6 sm:px-8 py-4 sm:py-5 min-w-max hover:border-[#D9782D]/40 hover:shadow-md transition">
                  <span className="text-gray-600 font-bold text-base sm:text-lg whitespace-nowrap hover:text-[#D9782D] transition-colors">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServicesShowcase />

      {/* ===== PRODUCTS & PLATFORM SECTION ===== */}
      <section className="py-24 px-4 bg-[#f8f9fb] border-t border-gray-100">
        <div className="max-w-7xl mx-auto">

          {/* Sticky-left + scrolling-right layout */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            {/* LEFT — sticky panel */}
            <div className="lg:w-[38%] lg:sticky lg:top-28 lg:self-start">
              <p className="text-[#D9782D] font-semibold uppercase tracking-[0.3em] text-xs mb-4">Our Products & Platform</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#050B2C] leading-tight mb-5">
                Purpose-built tools for modern hiring
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our products are designed to support recruiters, candidates, and referrers — helping organisations hire faster, smarter, and more transparently.
              </p>
              <a
                href="https://portal.pickyourhire.com/signin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#050B2C] hover:bg-[#0d1f50] text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-md text-sm"
              >
                Get In Touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>

            {/* RIGHT — scrolling product cards */}
            <div className="lg:w-[62%] flex flex-col gap-6">

              {/* Card 1 — Recruiter Dashboard */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6 pb-4">
                  <p className="text-xs font-semibold text-[#050B2C] uppercase tracking-widest mb-1">Recruiter Dashboard</p>
                  <p className="text-gray-500 text-sm leading-relaxed">A complete hiring command centre — track all candidates, shortlists, pipeline statuses, and jump into AI match tools instantly.</p>
                </div>
                <div className="mx-4 mb-4 rounded-xl overflow-hidden border border-gray-100 shadow-inner bg-gray-50">
                  <Image
                    src="/ss-recruiter-dashboard.png"
                    alt="PickYourHire Recruiter Dashboard"
                    width={900}
                    height={480}
                    className="w-full h-auto object-top"
                    style={{ display: 'block' }}
                  />
                </div>
              </div>

              {/* Card 3 — Search by Project */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6 pb-4">
                  <p className="text-xs font-semibold text-[#050B2C] uppercase tracking-widest mb-1">Search by Project</p>
                  <p className="text-gray-500 text-sm leading-relaxed">Find candidates based on AI-parsed projects from their resumes. Search any technology and surface candidates who have actually built with it.</p>
                </div>
                <div className="mx-4 mb-4 rounded-xl overflow-hidden border border-gray-100 shadow-inner bg-gray-50">
                  <Image
                    src="/ss-search-by-project.png"
                    alt="Search Candidates by Project"
                    width={900}
                    height={480}
                    className="w-full h-auto object-top"
                    style={{ display: 'block' }}
                  />
                </div>
              </div>

              {/* Card 4 — Candidate Dashboard */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6 pb-4">
                  <p className="text-xs font-semibold text-[#D9782D] uppercase tracking-widest mb-1">Candidate Dashboard</p>
                  <p className="text-gray-500 text-sm leading-relaxed">Build a verified profile, browse matched job openings, track your application status, and manage skills — all without mass-applying to irrelevant roles.</p>
                </div>
                <div className="mx-4 mb-4 rounded-xl overflow-hidden border border-gray-100 shadow-inner bg-gray-50">
                  <Image
                    src="/ss-candidate-dashboard.png"
                    alt="Candidate Dashboard"
                    width={900}
                    height={480}
                    className="w-full h-auto object-top"
                    style={{ display: 'block' }}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* ===== END PRODUCTS SECTION ===== */}

      {/* Industries — 10 cards */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D9782D] font-semibold uppercase tracking-[0.3em] mb-4">Industries We Cater</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#050B2C]">Sector expertise that helps you hire faster</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">From high-growth tech to healthcare and retail, PickYourHire connects candidates with companies in the industries that matter most.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "IT / ITES Industry", desc: "Trusted talent for software, cloud, digital transformation, product engineering, and technology services.", icon: <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></> },
              { title: "Healthcare & Pharma", desc: "Skilled professionals for clinical operations, medical devices, biotech, pharma manufacturing, and healthcare IT.", icon: <><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></> },
              { title: "Telecom / Semiconductor", desc: "Engineering and operations specialists for telecom, semiconductor design, embedded systems, and network infrastructure.", icon: <><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></> },
              { title: "FMCG & Retail", desc: "Hiring support across merchandising, sales, supply chain, retail operations, and customer experience functions.", icon: <><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></> },
              { title: "Distribution & Logistics", desc: "Talent for supply chain, last-mile delivery, fleet management, warehouse operations, and distribution networks.", icon: <><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></> },
              { title: "Retail Sales", desc: "Sales associates, store managers, visual merchandisers, and retail leaders who drive revenue and customer loyalty.", icon: <><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></> },
              { title: "Marketing & Growth", desc: "Brand strategists, digital marketers, performance specialists, and growth leaders for consumer and B2B brands.", icon: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 5.27 5.27l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></> },
              { title: "B2B Sales", desc: "Account executives, enterprise sales managers, pre-sales consultants, and business development professionals.", icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></> },
              { title: "Operations & Strategy", desc: "COOs, operations managers, process improvement leads, and project management professionals across sectors.", icon: <><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></> },
              { title: "Warehouse Management", desc: "Warehouse supervisors, inventory managers, WMS operators, and fulfillment center leads for modern supply chains.", icon: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></> },
            ].map(({ title, desc, icon }) => (
              <div key={title} className="rounded-3xl bg-gray-50 border border-gray-200 p-8 shadow-sm hover:shadow-md hover:border-[#D9782D]/30 transition group">
                <div className="w-10 h-10 rounded-xl bg-[#D9782D]/10 flex items-center justify-center mb-5 group-hover:bg-[#D9782D]/20 transition">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                </div>
                <h3 className="text-xl font-semibold text-[#050B2C] mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D9782D] font-semibold uppercase tracking-[0.3em] mb-4">Frequently asked questions</p>
            <h2 className="text-4xl font-bold text-[#050B2C]">Everything you need to know</h2>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <div><h3 className="text-xl font-semibold text-[#050B2C] mb-3">What industries do you serve?</h3><p className="text-gray-600 leading-relaxed">We support organizations across IT, BFSI, Telecom, Manufacturing, Healthcare, E-commerce, Education, Retail, and Professional Services.</p></div>
              <div><h3 className="text-xl font-semibold text-[#050B2C] mb-3">How is PickYourHire different from traditional recruitment agencies?</h3><p className="text-gray-600 leading-relaxed">Traditional recruitment often focuses on volume. PickYourHire focuses on trusted referrals and curated profiles, ensuring clients receive fewer but more relevant candidates with better retention potential.</p></div>
              <div><h3 className="text-xl font-semibold text-[#050B2C] mb-3">Can referral-based hiring be used for confidential or leadership roles?</h3><p className="text-gray-600 leading-relaxed">Yes. Referral hiring is especially effective for confidential, niche, and senior-level positions, where trust and discretion are critical.</p></div>
            </div>
            <div className="space-y-8">
              <div><h3 className="text-xl font-semibold text-[#050B2C] mb-3">What is referral-based hiring at PickYourHire?</h3><p className="text-gray-600 leading-relaxed">Referral-based hiring means candidates are sourced through trusted professional networks, industry experts, and verified referrers — rather than mass job portals.</p></div>
              <div><h3 className="text-xl font-semibold text-[#050B2C] mb-3">Can startups and small businesses work with you?</h3><p className="text-gray-600 leading-relaxed">Absolutely. We work with startups, SMEs, and large enterprises, offering flexible hiring solutions based on business stage and budget.</p></div>
              <div><h3 className="text-xl font-semibold text-[#050B2C] mb-3">Do you provide a replacement guarantee?</h3><p className="text-gray-600 leading-relaxed">Yes. For permanent hiring, we offer a replacement guarantee period, the terms of which are defined in the engagement agreement.</p></div>
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
              <h2 className="text-4xl font-bold text-[#050B2C]">New Opportunities</h2>
            </div>
            <Link href="/jobs" className="text-[#050B2C] font-semibold border-b-2 border-[#050B2C]">View All →</Link>
          </div>
          <FeaturedJobs />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#050B2C] mb-6">Ready to get started?</h2>
          <p className="text-xl text-gray-600 mb-12">Join thousands of professionals and companies on PickYourHire today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/jobs" className="bg-[#D9782D] text-white px-8 py-4 rounded-lg font-semibold inline-block hover:bg-[#f49d59]">Browse Jobs</Link>
            <Link href="/contact" className="bg-transparent text-[#050B2C] px-8 py-4 rounded-lg border-2 border-[#050B2C] font-semibold inline-block hover:bg-gray-100">Get In Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
