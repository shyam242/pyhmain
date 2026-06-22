import Link from "next/link";
import Image from "next/image";

export default function TalentPoolPage() {
  return (
    <div className="bg-white min-h-screen text-[#050B2C]">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f2ff] via-[#f5f5ff] to-[#ede8ff] pt-36 pb-0 px-4">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-300 rounded-full blur-[180px] opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#D9782D] rounded-full blur-[140px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Left */}
            <div className="flex-1 lg:pr-8 pb-12 lg:pb-0">
              <span className="inline-flex items-center gap-2 bg-[#D9782D]/10 border border-[#D9782D]/20 text-[#D9782D] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9782D]" />
                Talent Pool
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-[#050B2C] leading-[1.1] mb-5">
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
                  className="inline-flex items-center gap-2 bg-white text-[#050B2C] border-2 border-[#050B2C]/12 px-7 py-3.5 rounded-xl font-semibold hover:border-[#050B2C]/25 hover:bg-gray-50 transition">
                  Request Talent
                </Link>
              </div>
            </div>

            {/* Right — SVG network visual */}
            <div className="flex-1 relative flex items-center justify-center min-h-[420px]">
              {/* Large concentric rings */}
              <div className="absolute w-[380px] h-[380px] rounded-full border border-[#D9782D]/10" />
              <div className="absolute w-[280px] h-[280px] rounded-full border border-[#D9782D]/15" />
              <div className="absolute w-[180px] h-[180px] rounded-full border border-[#D9782D]/20 bg-[#D9782D]/5" />

              {/* Center icon */}
              <div className="absolute w-16 h-16 rounded-full bg-[#D9782D]/15 flex items-center justify-center z-10">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>

              {/* Floating candidate cards */}
              {/* Top */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 flex items-center gap-3 min-w-[160px] z-20">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold">JE</div>
                <div>
                  <p className="text-xs font-bold text-[#050B2C]">James Enrique</p>
                  <p className="text-[10px] text-gray-400">Software Engineer</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center ml-auto flex-shrink-0">
                  <svg width="8" height="8" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5"><polyline points="2 6 5 9 10 3"/></svg>
                </div>
              </div>

              {/* Left */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 flex items-center gap-3 min-w-[160px] z-20">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-xs font-bold">PK</div>
                <div>
                  <p className="text-xs font-bold text-[#050B2C]">Pooja K. Hingan</p>
                  <p className="text-[10px] text-gray-400">Product Manager</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center ml-auto flex-shrink-0">
                  <svg width="8" height="8" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5"><polyline points="2 6 5 9 10 3"/></svg>
                </div>
              </div>

              {/* Right */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 flex items-center gap-3 min-w-[150px] z-20">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-xs font-bold">GS</div>
                <div>
                  <p className="text-xs font-bold text-[#050B2C]">Guita Sarker</p>
                  <p className="text-[10px] text-gray-400">Sales Lead</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center ml-auto flex-shrink-0">
                  <svg width="8" height="8" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5"><polyline points="2 6 5 9 10 3"/></svg>
                </div>
              </div>

              {/* Bottom */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 flex items-center gap-3 min-w-[150px] z-20">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-xs font-bold">DM</div>
                <div>
                  <p className="text-xs font-bold text-[#050B2C]">Dina Mariya</p>
                  <p className="text-[10px] text-gray-400">Operations</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center ml-auto flex-shrink-0">
                  <svg width="8" height="8" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5"><polyline points="2 6 5 9 10 3"/></svg>
                </div>
              </div>

              {/* Connector dots scattered */}
              {[
                "top-[15%] right-[18%]", "top-[25%] left-[18%]",
                "bottom-[22%] right-[14%]", "bottom-[30%] left-[20%]",
              ].map((pos, i) => (
                <div key={i} className={`absolute ${pos} w-2 h-2 rounded-full bg-[#D9782D]/40`} />
              ))}
              {[
                "top-[40%] left-[8%]", "top-[35%] right-[8%]",
                "bottom-[45%] right-[5%]",
              ].map((pos, i) => (
                <div key={i} className={`absolute ${pos} w-3.5 h-3.5 rounded-full border-2 border-[#D9782D]/30 bg-white`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By bar */}
      <section className="py-8 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400 mb-5">Trusted By Hiring Teams Across India</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {["Microsoft","Adobe","Deloitte","Infosys","TCS"].map((brand) => (
              <span key={brand} className="text-gray-500 font-bold text-base tracking-tight">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Use Our Talent Pool */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-14 items-center">
            {/* Photo */}
            <div className="lg:w-[48%] relative rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/hiring-team.png"
                alt="Why use our talent pool"
                width={700}
                height={460}
                className="w-full h-[380px] object-cover object-center"
              />
              {/* Floating stat cards */}
              <div className="absolute bottom-5 left-5 bg-white rounded-2xl shadow-lg px-5 py-3">
                <p className="text-2xl font-bold text-[#050B2C]">10,000+</p>
                <p className="text-xs text-gray-400 font-medium">Talent Network</p>
              </div>
              <div className="absolute top-5 right-5 bg-white rounded-2xl shadow-lg px-5 py-3">
                <p className="text-2xl font-bold text-[#D9782D]">500+</p>
                <p className="text-xs text-gray-400 font-medium">Hiring Partners</p>
              </div>
            </div>

            {/* Text */}
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
                    title: "Cross-Domain Expertise",
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
                      <h3 className="font-bold text-[#050B2C] mb-1">{title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE CARDS — What We Offer */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#D9782D] uppercase tracking-[0.3em] text-xs font-semibold mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#050B2C]">Three ways we help you hire better.</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-sm">Candidate discovery, team readiness, and business-scale hiring — all through one trusted platform.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: "Talent Solutions",
                desc: "Access top talent across roles, industries, and experience levels — from startups to enterprise.",
                bullets: ["Confidential & niche technical roles", "Direct recruiter visibility", "Better fit than mass portals"],
                img: "/hiring-team.png",
                imgAlt: "Talent solutions team",
                icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
              },
              {
                label: "Workforce Readiness",
                desc: "We help teams grow with candidate scoring, skill fit insights, and interview preparation support.",
                bullets: ["Skills match & project relevance scoring", "Stability & availability assessment", "Interview preparation coaching"],
                img: "/ss-candidate-dashboard.png",
                imgAlt: "Candidate dashboard",
                icon: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>,
              },
              {
                label: "Business Solutions",
                desc: "Scalable hiring solutions designed to meet your evolving business needs across any team size.",
                bullets: ["Bulk candidate analysis & delivery", "Pre-screened shortlists", "Recruiter dashboard & pipeline tools"],
                img: "/ss-recruiter-dashboard.png",
                imgAlt: "Recruiter dashboard",
                icon: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></>,
              },
            ].map((card) => (
              <div key={card.label} className="rounded-3xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg hover:border-[#D9782D]/20 transition group">
                <div className="relative h-52 overflow-hidden">
                  <Image src={card.img} alt={card.imgAlt} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{card.icon}</svg>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-bold text-[#050B2C] mb-2">{card.label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{card.desc}</p>
                  <ul className="space-y-1.5">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D9782D] flex-shrink-0" />{b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-14 px-4 bg-[#050B2C]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10,000+", label: "Talent Network" },
              { value: "500+", label: "Hiring Partners" },
              { value: "2,000+", label: "Successful Placements" },
              { value: "50+", label: "Industries Served" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl md:text-4xl font-bold text-[#D9782D] mb-1">{value}</p>
                <p className="text-gray-400 text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-8 px-4 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto mt-8">
          <div className="rounded-3xl overflow-hidden relative min-h-[220px] shadow-xl">
            <Image
              src="/hiring-team.png"
              alt="Build the future together"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050B2C]/95 via-[#050B2C]/70 to-[#050B2C]/10" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#D9782D] rounded-full blur-[120px] opacity-20 pointer-events-none" />
            <div className="relative z-10 flex flex-col justify-center px-10 md:px-16 py-14 max-w-2xl">
              <p className="text-[#D9782D] text-xs font-semibold uppercase tracking-widest mb-3">Build Your Team</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                Build Your Team with the <span className="text-[#D9782D]">Right Talent.</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Join the companies who trust PickYourHire to build winning teams through smart referrals and AI-powered hiring.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-[#D9782D] hover:bg-[#c96c25] text-white font-semibold px-7 py-3 rounded-xl transition shadow-lg shadow-[#D9782D]/30 text-sm">
                  Explore Talent →
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3 rounded-xl transition text-sm backdrop-blur-sm">
                  Talk To Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
