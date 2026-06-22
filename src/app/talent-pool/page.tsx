import Link from "next/link";
import Image from "next/image";

const functions = [
  {
    label: "Technology",
    icon: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>,
    roles: ["Full Stack Engineers", "DevOps", "Data Scientists"],
    color: "#D9782D",
  },
  {
    label: "Sales",
    icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>,
    roles: ["Sales Executives", "Business Development", "Enterprise Sales", "Account Managers"],
    color: "#D9782D",
  },
  {
    label: "Operations",
    icon: <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></>,
    roles: ["Supply Chain", "Procurement", "Plant Operators"],
    color: "#D9782D",
  },
  {
    label: "Leadership",
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    roles: ["CXO", "VP", "+ Directors"],
    color: "#D9782D",
  },
];

export default function TalentPoolPage() {
  return (
    <div className="bg-white min-h-screen text-[#050B2C]">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f2ff] via-[#f5f5ff] to-[#ede8ff] pt-36 pb-16 px-4">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-300 rounded-full blur-[180px] opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#D9782D] rounded-full blur-[140px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Left */}
            <div className="flex-1 lg:pr-8">
              <span className="inline-flex items-center gap-2 bg-[#D9782D]/10 border border-[#D9782D]/20 text-[#D9782D] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9782D]" />
                Talent Pool
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#050B2C] leading-[1.1] mb-5">
                Find the Right <span className="text-[#D9782D]">Talent.</span><br />
                Build Winning <span className="text-[#D9782D]">Teams.</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
                Access a curated network of verified professionals across technology, sales, operations, leadership, and emerging industries.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-[#D9782D] text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-[#c96c25] transition shadow-lg shadow-[#D9782D]/25">
                  Explore Talent →
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#050B2C] border-2 border-gray-200 px-7 py-3.5 rounded-xl font-semibold hover:border-gray-300 hover:bg-gray-50 transition">
                  Request Talent
                </Link>
              </div>
            </div>

            {/* Right — real photos network like screenshot 2 */}
            <div className="flex-1 relative flex items-center justify-center min-h-[420px]">
              {/* Concentric rings */}
              <div className="absolute w-[380px] h-[380px] rounded-full border border-gray-200" />
              <div className="absolute w-[270px] h-[270px] rounded-full border border-gray-200" />
              <div className="absolute w-[160px] h-[160px] rounded-full border border-[#D9782D]/20 bg-[#D9782D]/5" />

              {/* Center icon */}
              <div className="absolute w-16 h-16 rounded-full bg-[#D9782D]/15 flex items-center justify-center z-10">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>

              {/* Top card — James Enrique with photo */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl border border-gray-100 pl-2 pr-4 py-2 flex items-center gap-3 min-w-[180px] z-20">
                <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0">
                  <Image src="/hero-professionals.png" alt="James Enrique" width={40} height={40} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#050B2C]">James Enrique</p>
                  <p className="text-[10px] text-gray-400">Software Engineer</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center ml-auto flex-shrink-0">
                  <svg width="8" height="8" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5"><polyline points="2 6 5 9 10 3"/></svg>
                </div>
              </div>

              {/* Left card — Pooja with photo */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl border border-gray-100 pl-2 pr-4 py-2 flex items-center gap-3 min-w-[175px] z-20">
                <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0">
                  <Image src="/hiring-team.png" alt="Pooja K. Hingan" width={40} height={40} className="w-full h-full object-cover object-center" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#050B2C]">Pooja K. Hingan</p>
                  <p className="text-[10px] text-gray-400">Product Manager</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center ml-auto flex-shrink-0">
                  <svg width="8" height="8" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5"><polyline points="2 6 5 9 10 3"/></svg>
                </div>
              </div>

              {/* Right card — Guita */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl border border-gray-100 pl-2 pr-4 py-2 flex items-center gap-3 min-w-[160px] z-20">
                <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0">
                  <Image src="/hero-professionals.png" alt="Guita Sarker" width={40} height={40} className="w-full h-full object-cover object-center" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#050B2C]">Guita Sarker</p>
                  <p className="text-[10px] text-gray-400">Sales Lead</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center ml-auto flex-shrink-0">
                  <svg width="8" height="8" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5"><polyline points="2 6 5 9 10 3"/></svg>
                </div>
              </div>

              {/* Bottom card — Dina */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl border border-gray-100 pl-2 pr-4 py-2 flex items-center gap-3 min-w-[160px] z-20">
                <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0">
                  <Image src="/hiring-team.png" alt="Dina Mariya" width={40} height={40} className="w-full h-full object-cover object-bottom" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#050B2C]">Dina Mariya</p>
                  <p className="text-[10px] text-gray-400">Operations</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center ml-auto flex-shrink-0">
                  <svg width="8" height="8" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5"><polyline points="2 6 5 9 10 3"/></svg>
                </div>
              </div>

              {/* Small floating avatar dots */}
              {[
                { pos: "top-[12%] right-[14%]", initials: "AS" },
                { pos: "top-[20%] left-[14%]", initials: "RK" },
                { pos: "bottom-[18%] right-[12%]", initials: "MJ" },
                { pos: "bottom-[26%] left-[16%]", initials: "PL" },
              ].map(({ pos, initials }, i) => (
                <div key={i} className={`absolute ${pos} w-8 h-8 rounded-full bg-white border-2 border-gray-100 shadow-md flex items-center justify-center z-10`}>
                  <span className="text-[8px] font-bold text-gray-500">{initials}</span>
                </div>
              ))}

              {/* Plus signs */}
              {["top-[8%] left-[22%]", "bottom-[8%] right-[22%]"].map((pos, i) => (
                <div key={i} className={`absolute ${pos} text-[#D9782D]/40 text-xl font-light`}>+</div>
              ))}

              {/* Connector dots */}
              {["top-[38%] left-[6%]", "top-[32%] right-[6%]", "bottom-[42%] right-[4%]"].map((pos, i) => (
                <div key={i} className={`absolute ${pos} w-3 h-3 rounded-full border-2 border-[#D9782D]/25 bg-white`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY USE OUR TALENT POOL ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-14 items-center">

            {/* Left — collage of real photos like screenshot 2 */}
            <div className="lg:w-[48%]">
              <div className="grid grid-cols-2 gap-3">
                {/* Large top-left */}
                <div className="relative rounded-2xl overflow-hidden h-52 col-span-1 row-span-2">
                  <Image src="/hiring-team2.png" alt="Team hiring" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B2C]/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 bg-white rounded-xl px-3 py-1.5 shadow">
                    <p className="text-xs font-bold text-[#D9782D]">Find the Right Talent.</p>
                    <p className="text-[10px] text-gray-500">Build Your Success.</p>
                  </div>
                </div>
                {/* Top right */}
                <div className="relative rounded-2xl overflow-hidden h-24">
                  <Image src="/hero-professionals.png" alt="Professionals" fill className="object-cover object-top" />
                </div>
                {/* Bottom right */}
                <div className="relative rounded-2xl overflow-hidden h-24">
                  <Image src="/hiring-team.png" alt="Hiring" fill className="object-cover object-bottom" />
                </div>
                {/* Bottom row spanning */}
                <div className="relative rounded-2xl overflow-hidden h-36 col-span-2">
                  <Image src="/hiring-team.png" alt="Team" fill className="object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#050B2C]/20 to-transparent" />
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex-1">
              <p className="text-[#D9782D] font-semibold uppercase tracking-[0.3em] text-xs mb-4">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#050B2C] leading-tight mb-8">
                Why Use Our Talent Pool?
              </h2>
              <div className="space-y-6">
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
                    <div className="w-11 h-11 rounded-2xl bg-[#D9782D]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                      <span className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                      {r}
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
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
            <div className="absolute left-0 top-0 w-72 h-72 bg-[#D9782D] rounded-full blur-[130px] opacity-10 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
                Build Your Team with the{" "}
                <span className="text-[#D9782D]">Right Talent.</span>
              </h2>
              <p className="text-white/50 text-sm leading-relaxed max-w-xl">
                Discover pre-qualified professionals through a trusted network designed to help organizations hire faster and smarter.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0 relative z-10">
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-[#D9782D] hover:bg-[#c96c25] text-white font-semibold px-7 py-3 rounded-xl transition shadow-lg shadow-[#D9782D]/30 text-sm">
                Explore Talent →
              </Link>
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold px-7 py-3 rounded-xl transition text-sm">
                Talk To Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
