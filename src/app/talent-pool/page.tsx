import Link from "next/link";
import Image from "next/image";

export default function TalentPoolPage() {
  return (
    <div className="bg-white min-h-screen text-[#050B2C]">

      {/* ── HERO — text left, diagonal photo right ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f8f9fb] to-gray-100 pt-36 pb-0 px-4">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D9782D] rounded-full blur-[200px] opacity-[0.06] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="rounded-3xl bg-white border border-gray-200 shadow-sm overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[420px]">
              {/* Left text */}
              <div className="flex-1 p-10 md:p-14 flex flex-col justify-center">
                <span className="inline-flex items-center gap-2 bg-[#D9782D]/10 border border-[#D9782D]/20 text-[#D9782D] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9782D]" />
                  Talent Pool
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-[#050B2C] leading-tight mb-4">
                  Find the Right <span className="text-[#D9782D]">Talent.</span><br />
                  Build Your <span className="text-[#D9782D]">Success.</span>
                </h1>
                <p className="text-gray-500 leading-relaxed mb-8 max-w-lg">
                  PickYourHire connects you with skilled professionals who fit your needs and your culture — through trusted referrals and AI-powered matching.
                </p>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-[#D9782D] text-white px-7 py-3 rounded-xl font-semibold hover:bg-[#c96c25] transition shadow-lg shadow-[#D9782D]/20 w-fit">
                  Find Talent →
                </Link>
              </div>
              {/* Right photo — diagonal left edge */}
              <div className="lg:w-[52%] relative min-h-[320px] overflow-hidden">
                <Image
                  src="/hiring-team.png"
                  alt="Hiring team collaboration"
                  fill
                  className="object-cover object-center"
                />
                {/* Diagonal mask */}
                <div
                  className="absolute inset-0 hidden lg:block"
                  style={{ background: "linear-gradient(105deg, white 0%, white 12%, transparent 36%)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE CARDS — icon + photo + text ── */}
      <section className="py-16 px-4 bg-white">
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
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                ),
              },
              {
                label: "Workforce Readiness",
                desc: "We help teams grow with candidate scoring, skill fit insights, and interview preparation support.",
                bullets: ["Skills match & project relevance scoring", "Stability & availability assessment", "Interview preparation coaching"],
                img: "/ss-candidate-dashboard.png",
                imgAlt: "Candidate dashboard",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                ),
              },
              {
                label: "Business Solutions",
                desc: "Scalable hiring solutions designed to meet your evolving business needs across any team size.",
                bullets: ["Bulk candidate analysis & delivery", "Pre-screened shortlists", "Recruiter dashboard & pipeline tools"],
                img: "/ss-recruiter-dashboard.png",
                imgAlt: "Recruiter dashboard",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
                ),
              },
            ].map((card) => (
              <div key={card.label} className="rounded-3xl border border-gray-200 bg-gray-50 overflow-hidden hover:shadow-lg hover:border-[#D9782D]/20 transition group">
                {/* Photo */}
                <div className="relative h-52 overflow-hidden">
                  <Image src={card.img} alt={card.imgAlt} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/20 to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm">
                    {card.icon}
                  </div>
                </div>
                {/* Text */}
                <div className="p-7">
                  <h3 className="text-lg font-bold text-[#050B2C] mb-2">{card.label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{card.desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D9782D] flex-shrink-0" />{b}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-[#D9782D] hover:gap-2 transition-all">
                    Learn more ↗
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TALENT SOLUTIONS AT SCALE — Recrivio-style wide card ── */}
      <section className="py-6 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white border border-gray-200 shadow-sm overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[340px]">
              <div className="flex-1 p-10 md:p-14 flex flex-col justify-center">
                <p className="text-[#D9782D] text-xs font-semibold uppercase tracking-widest mb-3">Talent Solutions at Scale</p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#050B2C] mb-2">Ensuring the right people are in place, ready to perform.</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-lg">
                  We help organisations build performance-ready teams by improving access to talent and enabling workforce readiness across roles, locations, and changing business needs.
                </p>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 text-[#050B2C] font-semibold px-5 py-2.5 rounded-xl hover:border-[#D9782D]/40 hover:text-[#D9782D] transition w-fit shadow-sm">
                  Learn more ↗
                </Link>
              </div>
              <div className="lg:w-[55%] relative min-h-[300px] overflow-hidden">
                <Image src="/hiring-team.png" alt="Talent solutions at scale" fill className="object-cover object-center" />
                <div
                  className="absolute inset-0 hidden lg:block"
                  style={{ background: "linear-gradient(105deg, white 0%, white 8%, transparent 30%)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-6 px-4 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-[#050B2C] to-[#0d1f50] overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D9782D] rounded-full blur-[140px] opacity-15 pointer-events-none" />
            <div className="flex flex-col lg:flex-row items-center">
              <div className="flex-1 p-10 md:p-14 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Let&apos;s build the future of work — together.
                </h2>
                <p className="text-white/60 leading-relaxed mb-8 max-w-lg">
                  Join the companies who trust PickYourHire to build winning teams through smart referrals and AI-powered hiring.
                </p>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-[#D9782D] hover:bg-[#c96c25] text-white font-semibold px-7 py-3 rounded-xl transition shadow-lg shadow-[#D9782D]/30">
                  Get Started →
                </Link>
              </div>
              <div className="lg:w-[42%] relative min-h-[260px] w-full overflow-hidden">
                <Image src="/hiring-team.png" alt="Build the future together" fill className="object-cover object-top opacity-30 lg:opacity-50" />
                <div className="absolute inset-0 hidden lg:block" style={{ background: "linear-gradient(105deg, #050B2C 0%, transparent 40%)" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
