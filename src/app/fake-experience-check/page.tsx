import Link from "next/link";
import Image from "next/image";

const flagTypes = [
  {
    title: "Inflated titles",
    desc: "Flags seniority or scope claims that don't line up with tenure length or company size at the time.",
    icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>,
    color: "#D9782D",
  },
  {
    title: "Impossible timelines",
    desc: "Catches skill or role claims that couldn't chronologically fit the dates listed on the resume.",
    icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
    color: "#5B9BFF",
  },
  {
    title: "Unexplained gaps & overlaps",
    desc: "Surfaces employment gaps and overlapping roles that deserve a direct question in the interview.",
    icon: <><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>,
    color: "#2DD4BF",
  },
  {
    title: "Unverifiable claims",
    desc: "Flags employers, metrics, or achievements that are difficult to independently verify — so you know exactly what to probe.",
    icon: <><path d="M9.5 12l1.8 1.8L15 10"/><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>,
    color: "#8B7CF6",
  },
];

const steps = [
  {
    n: "01",
    title: "Upload resumes",
    desc: "Drop up to 20 resumes at once — PDF, DOCX, or TXT, up to 10MB each.",
  },
  {
    n: "02",
    title: "Add the job (optional)",
    desc: "Paste or upload a job description to sharpen skill-match accuracy, or skip straight to the check.",
  },
  {
    n: "03",
    title: "Run the check",
    desc: "The AI screens every resume for inflated titles, timeline inconsistencies, and unexplained gaps or overlaps.",
  },
  {
    n: "04",
    title: "Review the flags",
    desc: "Get a per-candidate risk score, flag count, and a plain-language recommendation before you schedule an interview.",
  },
];

export default function FakeExperienceCheckPage() {
  return (
    <div className="min-h-screen text-white bg-[#050B2C] relative overflow-hidden">

      {/* ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1442] via-[#050B2C] to-[#050B2C]" />
        <div className="absolute -top-24 -left-32 w-[440px] h-[440px] rounded-full bg-[#D9782D]/15 blur-[130px]" />
        <div className="absolute top-[50%] -right-40 w-[460px] h-[460px] rounded-full bg-[#5B9BFF]/15 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "26px 26px" }}
        />
      </div>

      {/* ── HERO ── */}
      <section style={{ paddingTop: "80px" }}>
        <div className="max-w-6xl mx-auto px-4 py-14 lg:py-16">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">

            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 mb-5 bg-white/5 border border-white/10 rounded-full pl-2 pr-3.5 py-1.5">
                <span className="text-[10px] font-bold bg-[#D9782D] text-white px-2 py-0.5 rounded-full">AI</span>
                <span className="text-xs font-semibold text-white/70 tracking-wide">Fake Experience Check</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.12] mb-5 text-white">
                Catch the resume<br />
                that <span className="text-[#D9782D]">doesn&apos;t add up.</span>
              </h1>

              <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
                Upload resumes to screen for inflated titles, chronologically impossible skill claims, and unexplained employment gaps or overlaps — before you spend an interview slot on them.
              </p>

              <div className="flex flex-wrap gap-3 mb-9">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-[#D9782D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#c96c25] transition text-sm shadow-lg shadow-[#D9782D]/20">
                  Run a Check →
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-white/5 text-white border border-white/15 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition text-sm">
                  Talk To Us
                </Link>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-2 border-t border-white/10 pt-5">
                {[
                  { stat: "20", label: "resumes per batch" },
                  { stat: "6+", label: "flag categories" },
                  { stat: "In memory", label: "nothing stored permanently" },
                ].map(({ stat, label }) => (
                  <div key={label}>
                    <span className="font-bold text-white">{stat}</span>
                    <span className="text-white/50 text-sm ml-1.5">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — product screenshot in a browser-style frame */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#D9782D]/20 to-[#5B9BFF]/20 rounded-3xl blur-2xl opacity-70" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0A1442] shadow-2xl">
                <div className="flex items-center gap-1.5 px-4 py-3 bg-white/[0.04] border-b border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-3 text-[11px] text-white/40 font-medium">app.pickyourhire.com/fake-experience-check</span>
                </div>
                <Image
                  src="/experience1.png"
                  alt="Fake Experience Check upload interface"
                  width={1507}
                  height={688}
                  className="w-full h-auto"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHAT IT FLAGS ── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-[#D9782D] font-semibold uppercase tracking-[0.25em] text-xs mb-3">What it flags</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Four ways a resume can lie</h2>
            <p className="text-white/55 text-sm mt-2 max-w-xl">Each flag comes with the reasoning behind it, so you know exactly what to ask about in the interview.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {flagTypes.map((f) => (
              <div key={f.title} className="bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-[#D9782D]/40 hover:bg-white/[0.06] transition">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: `${f.color}22` }}>
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke={f.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{f.icon}</svg>
                </div>
                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEE IT IN ACTION ── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
            <div>
              <p className="text-[#D9782D] font-semibold uppercase tracking-[0.25em] text-xs mb-3">See it in action</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-5">
                A risk score you can act on — not just a red flag
              </h2>
              <p className="text-white/55 text-sm leading-relaxed mb-6">
                Every candidate gets an auto score, a risk rating, and a count of exactly how many flags were raised — plus a plain-language recommendation on how to proceed, like what to verify and what to probe deeper on in the interview.
              </p>
              <div className="space-y-3">
                {[
                  "Auto score out of 85, broken down by skill match, experience, company tier, stability, and projects",
                  "Risk rating (Low / Moderate / High) with a total flag count",
                  "A written recommendation summarizing what to verify before proceeding",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-[#D9782D]/15 flex items-center justify-center flex-shrink-0">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <p className="text-white/70 text-sm leading-relaxed">{t}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#D9782D]/15 to-[#5B9BFF]/15 rounded-3xl blur-2xl opacity-70" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0A1442] shadow-2xl p-3">
                <Image
                  src="/experience2.png"
                  alt="Example candidate risk profile with auto score and flags"
                  width={1819}
                  height={576}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-[#D9782D] font-semibold uppercase tracking-[0.25em] text-xs mb-3">How it works</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">From resume pile to risk report in minutes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-6 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <div className="w-12 h-12 rounded-xl bg-[#0A1442] border border-[#D9782D]/40 flex items-center justify-center font-bold text-[#D9782D] mb-4 relative z-10">
                  {s.n}
                </div>
                <h3 className="font-bold text-white mb-2">{s.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-14 px-4 overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D9782D]/10 via-transparent to-[#5B9BFF]/10 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />
        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
              Don&apos;t let a good story <span className="text-[#D9782D]">skip a background check.</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed max-w-xl">
              Screen every resume for red flags before it reaches an interview slot.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link href="https://portal.pickyourhire.com/signin" className="bg-[#D9782D] hover:bg-[#c96c25] text-white font-semibold px-6 py-3 rounded-lg transition text-sm shadow-lg shadow-[#D9782D]/20">
              Run a Check →
            </Link>
            <Link href="/candidate-report" className="bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold px-6 py-3 rounded-lg transition text-sm">
              Try Candidate Reports
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
