import Link from "next/link";
import Image from "next/image";

const functions = [
  {
    label: "Technology",
    color: "#7C3AED",
    icon: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>,
    roles: ["Full Stack Engineers", "DevOps", "Data Scientists"],
  },
  {
    label: "Sales",
    color: "#2563EB",
    icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>,
    roles: ["Sales Executives", "Business Development", "Enterprise Sales", "Account Managers"],
  },
  {
    label: "Operations",
    color: "#0D9488",
    icon: <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></>,
    roles: ["Supply Chain", "Procurement", "Plant Operators"],
  },
  {
    label: "Leadership",
    color: "#D9782D",
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    roles: ["CXO", "VP", "+ Directors"],
  },
];

/* Hero illustration: each function gets a node position + a sample role, so
   the illustration previews the real "Explore Talent" grid below rather than
   showing generic stock headshots. */
const heroNodes = [
  { ...functions[0], example: "Full Stack Engineer", top: "14%", left: "6%" },
  { ...functions[1], example: "Enterprise Sales", top: "10%", left: "60%" },
  { ...functions[2], example: "Supply Chain Lead", top: "66%", left: "4%" },
  { ...functions[3], example: "VP / Director", top: "70%", left: "62%" },
];

const whyUs = [
  {
    title: "Verified profiles",
    desc: "Every candidate goes through profile and background verification before joining the pool.",
  },
  {
    title: "Curated, not crowded",
    desc: "Professionals are shortlisted by domain and track record, so you review fewer, better-fit resumes.",
  },
  {
    title: "48-hour turnaround",
    desc: "Most roles get a first shortlist within two working days of a request.",
  },
];

export default function TalentPoolPage() {
  return (
    <div className="bg-white min-h-screen text-[#050B2C]">

      {/* ── HERO ── */}
      <section className="bg-[#f5f5f8]" style={{ paddingTop: "80px" }}>
        <div className="max-w-6xl mx-auto px-4 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">

            {/* LEFT — text */}
            <div>
              <p className="text-[#D9782D] font-semibold uppercase tracking-[0.25em] text-xs mb-4">
                Talent Pool
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.12] mb-4">
                Find the right talent.<br />
                Build a <span className="text-[#D9782D]">winning team.</span>
              </h1>

              <p className="text-gray-500 text-base leading-relaxed mb-7 max-w-md">
                A curated network of verified professionals across technology, sales, operations, leadership, and emerging industries — matched to your role in as little as 48 hours.
              </p>

              <div className="flex flex-wrap gap-3 mb-7">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-[#D9782D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#c96c25] transition text-sm">
                  Explore Talent →
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#050B2C] border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition text-sm">
                  Request Talent
                </Link>
              </div>

              {/* Stat row — plain text, no icon soup */}
              <div className="flex flex-wrap gap-x-8 gap-y-2 border-t border-gray-200 pt-5">
                {[
                  { stat: "25K+", label: "Verified professionals" },
                  { stat: "120+", label: "Industries covered" },
                  { stat: "48 hrs", label: "Average match time" },
                ].map(({ stat, label }) => (
                  <div key={label}>
                    <span className="font-bold text-[#050B2C]">{stat}</span>
                    <span className="text-gray-500 text-sm ml-1.5">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — custom talent-network illustration (no stock photo, fully responsive) */}
            <div className="relative rounded-2xl overflow-hidden h-[320px] sm:h-[380px] lg:h-[440px] bg-gradient-to-br from-[#eceef5] to-[#e2e5ef]">

              {/* dot-grid texture */}
              <div
                className="absolute inset-0 opacity-70"
                style={{
                  backgroundImage: "radial-gradient(rgba(5,11,44,0.10) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* soft color blobs, one per category, anchored near its node */}
              {heroNodes.map((n) => (
                <div
                  key={`blob-${n.label}`}
                  className="absolute w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{ background: n.color, top: n.top, left: n.left }}
                />
              ))}

              {/* connecting lines from center to each node */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {heroNodes.map((n) => (
                  <line
                    key={`line-${n.label}`}
                    x1="50" y1="50"
                    x2={`${parseFloat(n.left) + 8}`} y2={`${parseFloat(n.top) + 6}`}
                    stroke={n.color}
                    strokeOpacity="0.3"
                    strokeWidth="0.5"
                    strokeDasharray="2 2"
                    vectorEffect="non-scaling-stroke"
                    className="animate-dash-flow"
                  />
                ))}
              </svg>

              {/* center node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full animate-pulse-ring-accent" />
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#050B2C] flex flex-col items-center justify-center text-white shadow-lg">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                    <span className="text-[10px] sm:text-xs font-bold mt-1">25K+</span>
                  </div>
                </div>
              </div>

              {/* satellite nodes — one per talent function, gently floating */}
              {heroNodes.map((n, i) => (
                <div
                  key={n.label}
                  className="absolute animate-float-y"
                  style={{ top: n.top, left: n.left, animationDelay: `${i * 0.6}s` }}
                >
                  <div
                    className="bg-white rounded-xl shadow-md px-2.5 py-2 sm:px-3 sm:py-2.5 flex items-center gap-2 border max-w-[140px] sm:max-w-[160px]"
                    style={{ borderColor: `${n.color}30` }}
                  >
                    <div
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${n.color}18` }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={n.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{n.icon}</svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] sm:text-xs font-bold text-[#050B2C] leading-tight truncate">{n.label}</p>
                      <p className="text-[9px] sm:text-[10px] text-gray-500 leading-tight truncate">{n.example}</p>
                    </div>
                  </div>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* ── WHY USE OUR TALENT POOL ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">

            <div className="lg:w-[42%] rounded-2xl overflow-hidden">
              <Image
                src="/hiring-team2.png"
                alt="Hiring team"
                width={700}
                height={480}
                className="w-full h-[340px] object-cover object-center"
              />
            </div>

            <div className="flex-1">
              <p className="text-[#D9782D] font-semibold uppercase tracking-[0.25em] text-xs mb-3">Why Choose Us</p>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
                Built for hiring teams who don&apos;t have time to sift through noise
              </h2>
              <div className="divide-y divide-gray-100">
                {whyUs.map(({ title, desc }) => (
                  <div key={title} className="py-4 first:pt-0">
                    <h3 className="font-bold text-[#050B2C] mb-1">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPLORE TALENT ACROSS EVERY FUNCTION ── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">Explore talent across every function</h2>
            <p className="text-gray-500 text-sm mt-2">Roles across every domain, curated for your hiring needs.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {functions.map((fn) => (
              <div key={fn.label} className="bg-white rounded-xl border border-gray-100 p-5 hover:border-[#D9782D]/30 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3">{fn.icon}</svg>
                <h3 className="font-bold text-[#050B2C] mb-2.5">{fn.label}</h3>
                <ul className="space-y-1.5">
                  {fn.roles.map((r) => (
                    <li key={r} className="text-xs text-gray-500">{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative bg-[#050B2C] py-14 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
              Build your team with the <span className="text-[#D9782D]">right talent.</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed max-w-xl">
              Pre-qualified professionals, through a network built to help you hire faster.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link href="/contact" className="bg-[#D9782D] hover:bg-[#c96c25] text-white font-semibold px-6 py-3 rounded-lg transition text-sm">
              Explore Talent →
            </Link>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold px-6 py-3 rounded-lg transition text-sm">
              Talk To Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
