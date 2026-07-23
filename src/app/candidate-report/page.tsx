import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: "Job-matched scoring",
    desc: "Every report is generated against a specific job — either an existing posting or pasted JD text — so the evaluation reflects real fit, not a generic resume summary.",
    icon: <><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></>,
    color: "#5B9BFF",
  },
  {
    title: "Cached per candidate + job",
    desc: "Once a report exists for a candidate–job pairing, it's reused automatically. Re-downloading it never re-runs the AI, so repeat exports cost nothing extra.",
    icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
    color: "#2DD4BF",
  },
  {
    title: "Clean, shareable PDFs",
    desc: "Each candidate gets a polished, standalone PDF evaluation — safe to forward to hiring managers, with recruiter remarks excluded automatically.",
    icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></>,
    color: "#D9782D",
  },
  {
    title: "Batch generation",
    desc: "Select as many candidates as you like against a single job and generate every report in one pass — then track them all from Report History.",
    icon: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
    color: "#8B7CF6",
  },
];

const steps = [
  {
    n: "01",
    title: "Pick the job",
    desc: "Choose an existing job posting or paste job description text straight in — give it a title so reports are labeled clearly.",
  },
  {
    n: "02",
    title: "Select candidates",
    desc: "Search your pipeline by name, email, skills, or company, then multi-select everyone you want evaluated against that job.",
  },
  {
    n: "03",
    title: "Generate reports",
    desc: "One click runs the AI evaluation for every selected candidate and compiles a decision-ready PDF for each of them.",
  },
  {
    n: "04",
    title: "Reuse instantly",
    desc: "Need the same report again later? It's pulled from cache — instantly, and without spending another AI credit.",
  },
];

export default function CandidateReportPage() {
  return (
    <div className="min-h-screen text-white bg-[#050B2C] relative overflow-hidden">

      {/* ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1442] via-[#050B2C] to-[#050B2C]" />
        <div className="absolute -top-24 right-[-10%] w-[460px] h-[460px] rounded-full bg-[#5B9BFF]/15 blur-[130px]" />
        <div className="absolute top-[55%] -left-40 w-[440px] h-[440px] rounded-full bg-[#D9782D]/15 blur-[130px]" />
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
                <span className="text-xs font-semibold text-white/70 tracking-wide">Candidate Report Generator</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.12] mb-5 text-white">
                Resumes in.<br />
                <span className="text-[#D9782D]">Decision-ready</span> reports out.
              </h1>

              <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
                Pick candidates and a job, and generate a job-matched PDF evaluation report for each — automatically cached per candidate and job, so a re-download never re-runs the AI.
              </p>

              <div className="flex flex-wrap gap-3 mb-9">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-[#D9782D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#c96c25] transition text-sm shadow-lg shadow-[#D9782D]/20">
                  Generate Reports →
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-white/5 text-white border border-white/15 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition text-sm">
                  Talk To Us
                </Link>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-2 border-t border-white/10 pt-5">
                {[
                  { stat: "0 extra cost", label: "on cached re-downloads" },
                  { stat: "1 click", label: "batch generation" },
                  { stat: "PDF", label: "shareable output" },
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
                  <span className="ml-3 text-[11px] text-white/40 font-medium">app.pickyourhire.com/candidate-report</span>
                </div>
                <Image
                  src="/report.png"
                  alt="Candidate Report Generator interface"
                  width={1392}
                  height={752}
                  className="w-full h-auto"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-[#D9782D] font-semibold uppercase tracking-[0.25em] text-xs mb-3">What you get</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Every report, built to be trusted</h2>
            <p className="text-white/55 text-sm mt-2 max-w-xl">Reports never include internal recruiter remarks — they&apos;re safe to hand straight to a hiring manager.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
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

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-[#D9782D] font-semibold uppercase tracking-[0.25em] text-xs mb-3">How it works</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">From pipeline to PDF in four steps</h2>
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
              Stop writing evaluations <span className="text-[#D9782D]">by hand.</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed max-w-xl">
              Generate consistent, job-matched candidate reports in a fraction of the time.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link href="https://portal.pickyourhire.com/signin" className="bg-[#D9782D] hover:bg-[#c96c25] text-white font-semibold px-6 py-3 rounded-lg transition text-sm shadow-lg shadow-[#D9782D]/20">
              Generate Reports →
            </Link>
            <Link href="/fake-experience-check" className="bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold px-6 py-3 rounded-lg transition text-sm">
              Try Fake Experience Check
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
