"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

function ReferrerDialog({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative bg-white rounded-[2rem] border border-gray-200 shadow-2xl max-w-lg w-full overflow-hidden">
        {/* Orange accent top bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#D9782D] to-[#f49d59]" />

        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-400 hover:text-[#050B2C] transition text-3xl font-bold leading-none"
          aria-label="Close"
        >
          ×
        </button>

        <div className="p-8 md:p-10">
          {/* Icon + header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-[#D9782D]/10 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <span className="text-xs font-semibold text-[#D9782D] uppercase tracking-[0.25em]">Referrer Program</span>
          </div>

          <h2 className="text-3xl font-bold text-[#050B2C] mb-2 mt-1">Become a PickYourHire Referrer</h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Turn your professional network into meaningful opportunities — for candidates you believe in and for yourself.
          </p>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 gap-4 mb-8">
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                ),
                title: "Earn Referral Incentives",
                desc: "Get paid fixed payouts or percentage-based rewards when your referred candidates are successfully placed.",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                  </svg>
                ),
                title: "Full Visibility on Every Referral",
                desc: "Track submission status, interview progress, selection updates, and payout history in real time.",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                ),
                title: "Access Exclusive Roles",
                desc: "Refer for confidential, niche, and leadership positions that never appear on public job boards.",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                ),
                title: "Trusted Partner Ecosystem",
                desc: "Work with a dedicated team that supports you with structured workflows and clear payout milestones.",
              },
            ].map((benefit) => (
              <div key={benefit.title} className="flex gap-4 items-start bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div className="mt-0.5 w-8 h-8 rounded-lg bg-[#D9782D]/10 flex items-center justify-center flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <p className="font-semibold text-[#050B2C] text-sm">{benefit.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mt-0.5">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <a
            href="https://portal.pickyourhire.com/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#D9782D] hover:bg-[#c96c25] text-white font-semibold py-4 rounded-xl transition-colors duration-200 shadow-lg shadow-[#D9782D]/20 text-base"
          >
            Register Here
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          <p className="text-center text-gray-400 text-xs mt-4">
            Already registered?{" "}
            <a href="https://portal.pickyourhire.com/signin" target="_blank" rel="noopener noreferrer" className="text-[#D9782D] hover:underline font-medium">
              Sign in to your portal
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [referrerDialogOpen, setReferrerDialogOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
        <div className="backdrop-blur-xl bg-white/90 border border-gray-200 shadow-lg rounded-2xl px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <h1 className="font-bold text-xl text-[#050B2C]">PICKYOURHIRE</h1>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-[#050B2C] font-medium relative">
            <button
              onClick={() => setReferrerDialogOpen(true)}
              className="text-[#050B2C] hover:text-[#D9782D] transition-colors duration-200 font-medium"
            >
              Be a Referrer
            </button>

            <div
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button className="flex items-center gap-1 text-[#050B2C]">
                Recruiter
                <Image
                  src="/caret-down.svg"
                  width={16}
                  height={16}
                  alt="arrow"
                  className={`transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
                />
              </button>

              {open && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                  <Link
                    href="/talent-pool"
                    className="block px-5 py-4 bg-gray-50 font-medium text-[#050B2C] hover:bg-gray-100"
                  >
                    Talent Pool
                  </Link>
                </div>
              )}
            </div>

            <Link href="/jobs">Jobs</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:inline-block">
              <button className="bg-[#D9782D] text-[#F8FAFC] px-6 py-2 rounded-xl font-semibold hover:bg-[#f49d59] transition-colors duration-300 shadow-sm shadow-[#D9782D]/20">
                Get In Touch
              </button>
            </Link>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-xl bg-gray-100 border border-gray-300"
            >
              {mobileOpen ? (
                <span className="text-2xl text-[#050B2C]">×</span>
              ) : (
                <Image src="/hamburger.svg" width={24} height={24} alt="menu" className="text-[#050B2C]" />
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden mt-3 rounded-3xl border border-gray-200 bg-white/95 shadow-2xl backdrop-blur-2xl p-5 text-[#050B2C]">
            <div className="flex flex-col gap-3">
              <button
                onClick={() => { setReferrerDialogOpen(true); closeMobile(); }}
                className="block rounded-2xl px-4 py-3 text-left text-[#050B2C] hover:bg-gray-100 font-medium"
              >
                Be a Referrer
              </button>
              <Link href="/jobs" onClick={closeMobile} className="block rounded-2xl px-4 py-3 text-[#050B2C] hover:bg-gray-100">
                Jobs
              </Link>
              <Link href="/contact" onClick={closeMobile} className="block rounded-2xl px-4 py-3 text-[#050B2C] hover:bg-gray-100">
                Contact
              </Link>
              <div className="rounded-2xl border border-gray-300 overflow-hidden">
                <Link href="/talent-pool" onClick={closeMobile} className="block px-4 py-3 bg-gray-50 text-[#050B2C] hover:bg-gray-100">
                  Talent Pool
                </Link>
              </div>
              <Link href="/contact" onClick={closeMobile} className="inline-flex items-center justify-center rounded-2xl bg-[#D9782D] px-4 py-3 text-white font-semibold hover:bg-[#f49d59]">
                Get In Touch
              </Link>
            </div>
          </div>
        )}
      </div>

      {referrerDialogOpen && <ReferrerDialog onClose={() => setReferrerDialogOpen(false)} />}
    </>
  );
}
