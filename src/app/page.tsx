"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ServicesShowcase from "@/components/ServicesShowcase";
import FeaturedJobs from "@/components/FeaturedJobs";

/* ─────────────────────────────────────────────
   Industry data
───────────────────────────────────────────── */
const TOP_INDUSTRIES = [
  {
    title: "IT / ITES Industry",
    desc: "Trusted talent for software, cloud, digital transformation, product engineering, and technology services.",
    accent: "#7C3AED",
    icon: <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>,
    subCategories: [
      { name: "Software Development & Engineering", roles: "Full Stack Developers, Frontend Developers, Backend Developers, Mobile App Developers, Software Engineers, Solution Architects, and Technical Leads." },
      { name: "AI, Data Science & Analytics", roles: "AI Engineers, Machine Learning Engineers, Data Scientists, Data Analysts, Business Intelligence Analysts, Data Engineers, and Generative AI Specialists." },
      { name: "Cloud, DevOps & Cybersecurity", roles: "Cloud Engineers, DevOps Engineers, SREs, Security Analysts, Cybersecurity Specialists, Cloud Architects, and Infrastructure Engineers." },
      { name: "IT Infrastructure & Technical Support", roles: "System Administrators, Network Engineers, IT Support Specialists, Service Desk Engineers, Infrastructure Managers, Technical Support Engineers, and IT Operations Professionals." },
      { name: "Business Process & Digital Services (ITES)", roles: "Customer Support Executives, Technical Support Associates, Business Analysts, Customer Success Managers, Service Delivery Managers, Operations Executives, and Shared Services Professionals." },
      { name: "Product, ERP & Technology Consulting", roles: "Product Managers, Business Analysts, SAP Consultants, ERP Consultants, Functional Consultants, Pre-Sales Consultants, and Solution Consultants." },
    ],
  },
  {
    title: "Healthcare & Pharma",
    desc: "Skilled professionals for clinical operations, medical devices, biotech, pharma manufacturing, and healthcare IT.",
    accent: "#0D9488",
    icon: <><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></>,
    subCategories: [
      { name: "Healthcare Services & Hospital Operations", roles: "Hospital Administrators, Healthcare Operations Managers, Nursing Supervisors, Patient Care Coordinators, Medical Officers, and Healthcare Quality Managers." },
      { name: "Pharmaceutical & Life Sciences", roles: "Research Scientists, Formulation Scientists, Regulatory Affairs Specialists, Quality Assurance Executives, Quality Control Analysts, and Production Managers." },
      { name: "Clinical Research & Drug Safety", roles: "Clinical Research Associates (CRAs), Clinical Trial Managers, Pharmacovigilance Specialists, Medical Writers, Clinical Data Managers, and Drug Safety Associates." },
      { name: "Medical Devices & Diagnostics", roles: "Biomedical Engineers, Product Specialists, Application Specialists, Service Engineers, Validation Engineers, and Diagnostic Experts." },
      { name: "Pharma Sales, Marketing & Commercial Excellence", roles: "Medical Representatives, Area Sales Managers, Regional Sales Managers, Product Managers, Key Account Managers, and Healthcare Marketing Specialists." },
    ],
  },
  {
    title: "Telecom / Semiconductor",
    desc: "Engineering and operations specialists for telecom, semiconductor design, embedded systems, and network infrastructure.",
    accent: "#2563EB",
    icon: <><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></>,
    subCategories: [
      { name: "Telecom & Network Technologies", roles: "Network Engineers, RF Engineers, Telecom Engineers, Network Planning Specialists, OSS/BSS Consultants, NOC Engineers, and 4G/5G Deployment Professionals." },
      { name: "Semiconductor Design & Development", roles: "VLSI Design Engineers, ASIC Design Engineers, RTL Design Engineers, FPGA Engineers, Physical Design Engineers, Design Verification Engineers, and DFT Engineers." },
      { name: "Embedded Systems & Firmware Engineering", roles: "Embedded Software Engineers, Firmware Engineers, Device Driver Developers, RTOS Engineers, IoT Developers, Hardware-Software Integration Engineers, and Embedded Systems Architects." },
      { name: "Chip Manufacturing & Testing", roles: "Process Engineers, Product Engineers, Validation Engineers, Test Engineers, Yield Engineers, Failure Analysis Engineers, and Semiconductor Manufacturing Professionals." },
      { name: "Technical Sales & Field Applications", roles: "Field Application Engineers (FAEs), Technical Sales Engineers, Solutions Consultants, Customer Success Engineers, Application Engineers, and Pre-Sales Consultants." },
    ],
  },
  {
    title: "FMCG & Retail",
    desc: "Hiring support across merchandising, sales, supply chain, retail operations, and customer experience functions.",
    accent: "#DB2777",
    icon: <><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></>,
    subCategories: [
      { name: "Distribution & Logistics", roles: "Talent for supply chain, last-mile delivery, fleet management, and warehouse operations." },
      { name: "Retail Sales", roles: "Sales associates, store managers, visual merchandisers, and retail leaders." },
      { name: "Marketing & Growth", roles: "Brand strategists, digital marketers, performance specialists, and growth leaders." },
      { name: "B2B Sales", roles: "Account executives, enterprise sales managers, and pre-sales consultants." },
      { name: "Operations & Strategy", roles: "COOs, operations managers, process improvement leads, and project managers." },
      { name: "Warehouse Management", roles: "Warehouse supervisors, inventory managers, WMS operators, and fulfillment leads." },
    ],
  },
];

/* Sub-category accordion card */
function SubCategoryCard({ sub, accent }: { sub: { name: string; roles: string }; accent: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl border bg-white overflow-hidden cursor-pointer hover:shadow-sm transition-all"
      style={{ borderColor: open ? `${accent}50` : "#e5e7eb" }}
      onClick={() => setOpen((v) => !v)}
    >
      <div className="flex items-center justify-between px-4 py-3.5 gap-3">
        <div className="flex items-center gap-2.5 flex-1 min-w-0">
          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: accent }} />
          <p className="text-sm font-semibold text-[#050B2C] leading-snug">{sub.name}</p>
        </div>
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200"
          style={{ background: open ? `${accent}15` : "#f3f4f6", transform: open ? "rotate(180deg)" : "none" }}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={open ? accent : "#9ca3af"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </div>
      {open && (
        <div className="px-4 pb-4 pt-2 border-t" style={{ borderColor: `${accent}20`, background: `${accent}06` }}>
          <p className="text-xs text-gray-600 leading-relaxed">{sub.roles}</p>
        </div>
      )}
    </div>
  );
}

/* Full industries section — cards on top, panel below */
function IndustriesSection() {
  const [active, setActive] = useState<string | null>(null);
  const activeInd = TOP_INDUSTRIES.find((i) => i.title === active) ?? null;

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#D9782D]/40" />
            <p className="text-[#D9782D] font-semibold uppercase tracking-[0.3em] text-xs">Industries We Cater</p>
            <span className="h-px w-10 bg-[#D9782D]/40" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#050B2C]">Sector expertise that helps you hire faster</h2>
          <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto">
            From high-growth tech to healthcare and retail, PickYourHire connects candidates with companies in the industries that matter most.{" "}
            <span className="font-semibold text-[#050B2C]">Click any card to explore roles.</span>
          </p>
        </div>

        {/* 4 cards — full width, no expand inside card */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {TOP_INDUSTRIES.map(({ title, desc, accent, icon }) => {
            const isActive = active === title;
            return (
              <button
                key={title}
                onClick={() => setActive(isActive ? null : title)}
                className="text-left rounded-2xl border-t-4 bg-white overflow-hidden focus:outline-none transition-all duration-200"
                style={{
                  borderTopColor: accent,
                  boxShadow: isActive
                    ? `0 4px 24px ${accent}25, 0 0 0 2px ${accent}30`
                    : "0 1px 4px rgba(0,0,0,0.06)",
                  transform: isActive ? "translateY(-3px)" : "none",
                }}
              >
                {/* Gradient header */}
                <div
                  className="h-36 relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${accent}15 0%, ${accent}30 100%)` }}
                >
                  {/* Big faint icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" className="opacity-20">{icon}</svg>
                  </div>
                  {/* Small icon badge */}
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                  </div>
                  {/* Chevron */}
                  <div
                    className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center transition-transform duration-300"
                    style={{ transform: isActive ? "rotate(180deg)" : "none" }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                {/* Body */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-[#050B2C] mb-1.5">{title}</h3>
                  <div className="w-8 h-0.5 mb-3 rounded-full" style={{ background: accent }} />
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  <p className="mt-3 text-xs font-semibold flex items-center gap-1.5 transition-all" style={{ color: accent, opacity: isActive ? 0 : 1 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                    Explore roles
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Full-width expanded panel — below all cards, never inside */}
        {activeInd && (
          <div
            className="mt-5 rounded-2xl border overflow-hidden"
            style={{ borderColor: `${activeInd.accent}30` }}
          >
            {/* Panel header bar */}
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{
                background: `linear-gradient(135deg, ${activeInd.accent}10, ${activeInd.accent}05)`,
                borderBottom: `1px solid ${activeInd.accent}20`,
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm"
                  style={{ background: `${activeInd.accent}18` }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={activeInd.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{activeInd.icon}</svg>
                </div>
                <div>
                  <p className="font-bold text-[#050B2C]">{activeInd.title}</p>
                  <p className="text-xs text-gray-400">{activeInd.subCategories.length} specialisations — click any to expand roles</p>
                </div>
              </div>
              <button
                onClick={() => setActive(null)}
                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition flex-shrink-0"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>

            {/* Sub-category grid */}
            <div className="bg-gray-50/50 p-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
              {activeInd.subCategories.map((sub) => (
                <SubCategoryCard key={sub.name} sub={sub} accent={activeInd.accent} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default function Home() {
export default function Home() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── CXO REFERRAL BANNER — just below navbar ── */}
      <div className="w-full relative overflow-hidden px-4 py-3" style={{ background: "linear-gradient(135deg, #1e0d6b 0%, #2d1b8e 45%, #1a1060 100%)", marginTop: "88px" }}>
        {/* Glow orbs */}
        <div className="absolute -left-8 top-0 w-40 h-40 bg-violet-700 rounded-full blur-[70px] opacity-30 pointer-events-none" />
        <div className="absolute right-20 -bottom-6 w-36 h-36 bg-indigo-400 rounded-full blur-[70px] opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Left — icon + text */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <p className="text-white font-bold text-sm sm:text-base leading-snug">
              Referrals Welcome from <span className="text-white">Freshers</span> to{" "}
              <span className="text-[#fb923c] font-extrabold">CXO &amp; VP Level!</span>
            </p>
            <p className="hidden md:block text-white/55 text-xs ml-2">
              You can refer anyone. Every successful hire brings success — and rewards!
            </p>
          </div>

          {/* Middle — perks */}
          <div className="relative z-10 hidden lg:flex items-center gap-4">
            {[
              { icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>, label: "Refer Anyone, Any Level" },
              { icon: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></>, label: "Earn Attractive Rewards" },
              { icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>, label: "Trusted & Verified" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-white/70 text-xs">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                <span className="font-medium whitespace-nowrap">{label}</span>
              </div>
            ))}
          </div>

          {/* Right — CTA */}
          <div className="relative z-10 flex-shrink-0">
            <Link
              href="https://portal.pickyourhire.com/signin"
              className="inline-flex items-center gap-1.5 bg-[#f97316] hover:bg-[#ea6c0a] text-white font-bold px-5 py-2 rounded-xl transition-all shadow-lg shadow-orange-500/30 text-sm whitespace-nowrap"
            >
              Refer Now →
            </Link>
          </div>
        </div>
      </div>

      {/* ── HERO — original "Because the Right Hire Changes Everything" ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f2ff] via-[#f5f0ff] to-[#ede8ff] pt-0 pb-0 px-4 flex items-center">
        {/* Background orbs */}
        <div className="absolute top-10 right-10 w-[420px] h-[420px] bg-purple-300 rounded-full blur-[160px] opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#D9782D] rounded-full blur-[140px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">

            <div className="flex-1 lg:pr-8">
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

            {/* RIGHT — Professional image + floating stat cards */}
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

              {/* Floating panel — Recruiter Dashboard preview */}
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

      {/* ── REFERRAL BONUS BANNER (original orange) ── */}
      <section className="px-4 py-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#050B2C] via-[#0d1f50] to-[#050B2C] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Glow accents */}
            <div className="absolute left-0 top-0 w-40 h-40 bg-[#D9782D] rounded-full blur-[80px] opacity-20 pointer-events-none" />
            <div className="absolute right-0 bottom-0 w-40 h-40 bg-[#D9782D] rounded-full blur-[80px] opacity-10 pointer-events-none" />
            {/* Left — icon + text */}
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#D9782D]/20 border border-[#D9782D]/30 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[#D9782D] text-xs font-bold uppercase tracking-widest">Referral Program</span>
                  <span className="bg-[#D9782D] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Live</span>
                </div>
                <p className="text-white font-bold text-sm">
                  Refer Now! Help us find great talent and <span className="text-[#D9782D]">earn referral bonuses</span> for successful placements.
                </p>
              </div>
            </div>
            {/* Right — perks + CTA */}
            <div className="relative z-10 flex items-center gap-4 flex-shrink-0">
              <div className="hidden md:flex items-center gap-3">
                {["Earn Bonuses", "Grow Network", "Fast Payouts"].map((p) => (
                  <div key={p} className="flex items-center gap-1.5 text-white/60 text-xs">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#D9782D" strokeWidth="2.5"><polyline points="2 6 5 9 10 3"/></svg>
                    {p}
                  </div>
                ))}
              </div>
              <Link href="https://portal.pickyourhire.com/signin"
                className="bg-[#D9782D] hover:bg-[#c96c25] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition whitespace-nowrap shadow-lg shadow-[#D9782D]/30">
                Be a Referrer →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trusted companies marquee ── */}
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

      {/* ── Products & Platform ── */}
      <section className="py-24 px-4 bg-[#f8f9fb] border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="lg:w-[38%] lg:sticky lg:top-28 lg:self-start">
              <p className="text-[#D9782D] font-semibold uppercase tracking-[0.3em] text-xs mb-4">Our Products & Platform</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#050B2C] leading-tight mb-5">
                Purpose-built tools for modern hiring
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our products are designed to support recruiters, candidates, and referrers — helping organisations hire faster, smarter, and more transparently.
              </p>
              <a href="https://portal.pickyourhire.com/signin" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#050B2C] hover:bg-[#0d1f50] text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-md text-sm">
                Get In Touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
            <div className="lg:w-[62%] flex flex-col gap-6">
              {[
                { label: "Recruiter Dashboard", color: "#050B2C", desc: "A complete hiring command centre — track all candidates, shortlists, pipeline statuses, and jump into AI match tools instantly.", img: "/ss-recruiter-dashboard.png", alt: "PickYourHire Recruiter Dashboard" },
                { label: "Search by Project", color: "#050B2C", desc: "Find candidates based on AI-parsed projects from their resumes. Search any technology and surface candidates who have actually built with it.", img: "/ss-search-by-project.png", alt: "Search Candidates by Project" },
                { label: "Candidate Dashboard", color: "#D9782D", desc: "Build a verified profile, browse matched job openings, track your application status, and manage skills — all without mass-applying to irrelevant roles.", img: "/ss-candidate-dashboard.png", alt: "Candidate Dashboard" },
              ].map(({ label, color, desc, img, alt }) => (
                <div key={label} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="p-6 pb-4">
                    <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color }}>{label}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                  <div className="mx-4 mb-4 rounded-xl overflow-hidden border border-gray-100 shadow-inner bg-gray-50">
                    <Image src={img} alt={alt} width={900} height={480} className="w-full h-auto object-top" style={{ display: "block" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries We Cater ── */}
      <IndustriesSection />

      {/* ── FAQ ── */}
      <section className="py-24 px-4 bg-[#fdf9f6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#D9782D] font-semibold uppercase tracking-[0.3em] text-xs mb-5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#050B2C]">Everything you need to know</h2>
            <div className="w-16 h-1 bg-[#D9782D] rounded-full mx-auto mt-5" />
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { q: "What industries do you serve?", a: "We support organizations across IT, BFSI, Telecom, Manufacturing, Healthcare, E-commerce, Education, Retail, and Professional Services.", icon: <><rect x="2" y="2" width="20" height="20" rx="3"/><path d="M8 2v4M16 2v4M2 10h20"/></> },
              { q: "What is referral-based hiring at PickYourHire?", a: "Referral-based hiring means candidates are sourced through trusted professional networks, industry experts, and verified referrers — rather than mass job portals.", icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></> },
              { q: "How is PickYourHire different from traditional recruitment agencies?", a: "Traditional recruitment often focuses on volume. PickYourHire focuses on trusted referrals and curated profiles, ensuring clients receive fewer but more relevant candidates with better retention potential.", icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></> },
              { q: "Can startups and small businesses work with you?", a: "Absolutely. We work with startups, SMEs, and large enterprises, offering flexible hiring solutions based on business stage and budget.", icon: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 5.27 5.27l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></> },
              { q: "Can referral-based hiring be used for confidential or leadership roles?", a: "Yes. Referral hiring is especially effective for confidential, niche, and senior-level positions, where trust and discretion are critical.", icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></> },
              { q: "Do you provide a replacement guarantee?", a: "Yes. For permanent hiring, we offer a replacement guarantee period, the terms of which are defined in the engagement agreement.", icon: <><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></> },
            ].map(({ q, a, icon }) => (
              <div key={q} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition p-7 flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#D9782D]/10 flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#050B2C] mb-2 leading-snug">{q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#fff5ec] rounded-2xl border border-[#D9782D]/20 px-8 py-5 flex flex-col sm:flex-row items-center gap-4 justify-between">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#D9782D] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 5.27 5.27l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <p className="font-bold text-[#050B2C]">Need more information?</p>
                <p className="text-gray-500 text-sm">Our team is here to help you find the right hiring solution for your needs.</p>
              </div>
            </div>
            <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-[#D9782D] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[#c96c25] transition shadow-md text-sm whitespace-nowrap">
              → Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Jobs ── */}
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

      {/* ── CTA ── */}
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
