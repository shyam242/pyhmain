import Link from "next/link";
import Image from "next/image";

const functions = [
  {
    label: "Technology",
    icon: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>,
    roles: ["Full Stack Engineers", "DevOps", "Data Scientists"],
  },
  {
    label: "Sales",
    icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>,
    roles: ["Sales Executives", "Business Development", "Enterprise Sales", "Account Managers"],
  },
  {
    label: "Operations",
    icon: <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></>,
    roles: ["Supply Chain", "Procurement", "Plant Operators"],
  },
  {
    label: "Leadership",
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    roles: ["CXO", "VP", "+ Directors"],
  },
];

const candidates = [
  { name: "James Enrique", role: "Software Engineer", pos: "top-4 left-1/2 -translate-x-1/2" },
  { name: "Pooja K. Hingan", role: "Product Manager", pos: "top-1/2 left-0 -translate-y-1/2" },
  { name: "Guita Sarker", role: "Sales Lead", pos: "top-1/2 right-0 -translate-y-1/2" },
  { name: "Dina Mariya", role: "Operations", pos: "bottom-4 left-1/2 -translate-x-1/2" },
];

export default function TalentPoolPage() {
  return (
    <div className="bg-white min-h-screen text-[#050B2C]">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#f5f5f8] pt-36 pb-0 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-0">

            {/* LEFT — text */}
            <div className="flex-1 pb-12 lg:pb-16 pr-0 lg:pr-10">
              {/* Tag */}
              <span className="inline-flex items-center gap-2 border border-[#D9782D]/30 text-[#D9782D] text-xs font-semibold px-4 py-1.5 rounded-full mb-8">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                TALENT POOL
              </span>

              <h1 className="text-5xl md:text-6xl font-extrabold text-[#050B2C] leading-[1.1] mb-5">
                Find the Right <span className="text-[#D9782D]">Talent.</span><br />
                Build Winning <span className="text-[#D9782D]">Teams.</span>
              </h1>

              <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
                Access a curated network of verified professionals across technology, sales, operations, leadership, and emerging industries.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="https://portal.pickyourhire.com/signin"
                  className="inline-flex items-center gap-2 bg-[#D9782D] text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-[#c96c25] transition shadow-lg shadow-[#D9782D]/25 text-sm">
                  Explore Talent →
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#050B2C] border-2 border-gray-200 px-7 py-3.5 rounded-xl font-semibold hover:bg-gray-50 transition text-sm">
                  Request Talent
                </Link>
              </div>

              {/* 3 badges */}
              <div className="flex flex-wrap gap-6">
                {[
                  { label: "Verified", sub: "Trusted professionals", icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></> },
                  { label: "Curated", sub: "Quality over quantity", icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></> },
                  { label: "Fast Match", sub: "Find talent, faster", icon: <><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></> },
                ].map(({ label, sub, icon }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#D9782D]/10 flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#050B2C]">{label}</p>
                      <p className="text-[11px] text-gray-400">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — talent-pool.png fills right half flush to bottom */}
            <div className="flex-1 flex items-end justify-center lg:justify-end self-stretch">
              <div className="relative w-full h-[420px] lg:h-[520px]">
                <Image
                  src="/hiring.jpeg"
                  alt="Talent Pool"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>

          </div>
        </div>

        {/* ── Stats bar ── */}
        <div className="max-w-7xl mx-auto mt-4">
          <div className="rounded-2xl px-8 py-5 flex flex-wrap items-center justify-between gap-4" style={{ background: "#050B2C" }}>
            {[
              { icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>, stat: "25K+", label: "Verified Professionals" },
              { icon: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></>, stat: "120+", label: "Industries Covered" },
              { icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>, stat: "48hrs", label: "Average Match Time" },
              { icon: <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>, stat: "98%", label: "Client Satisfaction" },
            ].map(({ icon, stat, label }, i, arr) => (
              <div key={label} className="flex items-center gap-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                <div>
                  <p className="text-white font-extrabold text-xl leading-tight">{stat}</p>
                  <p className="text-white/50 text-xs">{label}</p>
                </div>
                {i < arr.length - 1 && <div className="hidden md:block h-8 w-px bg-white/10 ml-4" />}
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* ── WHY USE OUR TALENT POOL — single image left ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-14 items-center">

            {/* Single clean image */}
            <div className="lg:w-[48%] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/hiring.png"
                alt="Hiring team"
                width={700}
                height={480}
                className="w-full h-[420px] object-cover object-center"
              />
            </div>

            {/* Right content */}
            <div className="flex-1">
              <p className="text-[#D9782D] font-semibold uppercase tracking-[0.3em] text-xs mb-4">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#050B2C] leading-tight mb-8">
                Why Use Our Talent Pool?
              </h2>
              <div className="space-y-7">
                {[
                  {
                    title: "Verified Professionals",
                    desc: "Every candidate undergoes profile verification and quality checks before joining our network.",
                    icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>
                  },
                  {
                    title: "Curated Talent",
                    desc: "Access professionals across domains and industries, with real-world experience and a proven track record.",
                    icon: <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>
                  },
                  {
                    title: "Faster Hiring",
                    desc: "Skip the long search and connect directly with pre-screened, qualified candidates ready to perform.",
                    icon: <><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></>
                  },
                ].map(({ title, desc, icon }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#D9782D]/10 flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#D9782D] mb-1">{title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPLORE TALENT ACROSS EVERY FUNCTION ── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#050B2C]">Explore Talent Across Every Function</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {functions.map((fn) => (
              <div key={fn.label} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-[#D9782D]/20 transition group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-[#D9782D]/10 flex items-center justify-center mb-4">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{fn.icon}</svg>
                </div>
                <h3 className="font-bold text-[#D9782D] mb-3">{fn.label}</h3>
                <ul className="space-y-1.5">
                  {fn.roles.map((r) => (
                    <li key={r} className="text-xs text-gray-500 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />{r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#050B2C] py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative">
          <div className="abstalent=poololute left-0 top-0 w-72 h-72 bg-[#D9782D] rounded-full blur-[130px] opacity-10 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
              Build Your Team with the <span className="text-[#D9782D]">Right Talent.</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed max-w-xl">
              Discover pre-qualified professionals through a trusted network designed to help organizations hire faster and smarter.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0 relative z-10">
            <Link href="/contact" className="bg-[#D9782D] hover:bg-[#c96c25] text-white font-semibold px-7 py-3 rounded-xl transition shadow-lg shadow-[#D9782D]/30 text-sm">
              Explore Talent.
            </Link>
            <Link href="/s" className="bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold px-7 py-3 rounded-xl transition text-sm">
              Talk To Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
