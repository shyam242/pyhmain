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
      <div className="relative bg-white rounded-2xl border border-gray-200 shadow-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto">
        <div className="h-1 w-full bg-gradient-to-r from-[#D9782D] to-[#f49d59] sticky top-0 z-10" />
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-[#050B2C] transition text-2xl font-bold leading-none z-10"
          aria-label="Close"
        >×</button>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-lg bg-[#D9782D]/10 flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <span className="text-xs font-semibold text-[#D9782D] uppercase tracking-[0.25em]">Referrer Program</span>
          </div>
          <h2 className="text-2xl font-bold text-[#050B2C] mb-1">Become a PickYourHire Referrer</h2>
          <p className="text-gray-500 text-sm mb-5 leading-relaxed">Turn your professional network into meaningful opportunities — for candidates you believe in and for yourself.</p>
          <div className="grid grid-cols-1 gap-3 mb-5">
            {[
              { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, title: "Earn Referral Incentives", desc: "Get paid fixed payouts or percentage-based rewards when your referred candidates are successfully placed." },
              { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>, title: "Full Visibility on Every Referral", desc: "Track submission status, interview progress, selection updates, and payout history in real time." },
              { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, title: "Access Exclusive Roles", desc: "Refer for confidential, niche, and leadership positions that never appear on public job boards." },
              { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: "Trusted Partner Ecosystem", desc: "Work with a dedicated team that supports you with structured workflows and clear payout milestones." },
            ].map((b) => (
              <div key={b.title} className="flex gap-3 items-start bg-gray-50 rounded-xl p-3 border border-gray-100">
                <div className="w-7 h-7 rounded-lg bg-[#D9782D]/10 flex items-center justify-center flex-shrink-0 mt-0.5">{b.icon}</div>
                <div>
                  <p className="font-semibold text-[#050B2C] text-sm">{b.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed mt-0.5">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="https://portal.pickyourhire.com/signin" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#D9782D] hover:bg-[#c96c25] text-white font-semibold py-3 rounded-xl transition-colors duration-200 shadow-md shadow-[#D9782D]/20 text-sm">
            Register Here
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <p className="text-center text-gray-400 text-xs mt-3">
            Already registered?{" "}
            <a href="https://portal.pickyourhire.com/signin" target="_blank" rel="noopener noreferrer" className="text-[#D9782D] hover:underline font-medium">Sign in to your portal</a>
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
          {/* Logo — PICK in navy, YOUR in orange, HIRE in navy */}
          <Link href="/">
            <h1 className="font-bold text-xl tracking-tight">
              <span className="text-[#050B2C]">PICK</span>
              <span className="text-[#D9782D]">YOUR</span>
              <span className="text-[#050B2C]">HIRE</span>
            </h1>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 font-medium relative">
            <button
              onClick={() => setReferrerDialogOpen(true)}
              className="text-[#050B2C] hover:text-[#D9782D] transition-colors duration-200 font-medium"
            >Be a Referrer</button>

            {/* Recruiter dropdown */}
            <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
              <button className="flex items-center gap-1 text-[#050B2C] hover:text-[#D9782D] transition-colors duration-200 pb-2">
                Recruiter
                <Image src="/caret-down.svg" width={16} height={16} alt="arrow"
                  className={`transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`} />
              </button>
              {open && (
                <div className="absolute top-full left-0 -mt-2 pt-2 w-48">
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                    <Link href="/talent-pool"
                      className="block px-5 py-3 text-sm font-medium text-[#050B2C] hover:bg-[#D9782D]/5 hover:text-[#D9782D] transition-colors">
                      Talent Pool
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/jobs" className="text-[#050B2C] hover:text-[#D9782D] transition-colors duration-200">Jobs</Link>
            <Link href="/contact" className="text-[#050B2C] hover:text-[#D9782D] transition-colors duration-200">Contact</Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Explore Opportunities — smaller, outlined */}
            <Link href="/jobs" className="hidden md:inline-block">
              <button className="text-[#D9782D] border border-[#D9782D] px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-[#D9782D]/5 transition-colors duration-200">
                Explore Opportunities
              </button>
            </Link>
            {/* Contact Us — smaller, filled */}
            <Link href="/contact" className="hidden md:inline-block">
              <button className="bg-[#D9782D] text-white px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-[#c96c25] transition-colors duration-200 shadow-sm shadow-[#D9782D]/20">
                Contact Us
              </button>
            </Link>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-xl bg-gray-100 border border-gray-300"
            >
              {mobileOpen ? <span className="text-2xl text-[#050B2C]">×</span>
                : <Image src="/hamburger.svg" width={24} height={24} alt="menu" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden mt-3 rounded-3xl border border-gray-200 bg-white/95 shadow-2xl backdrop-blur-2xl p-5 text-[#050B2C]">
            <div className="flex flex-col gap-3">
              <button onClick={() => { setReferrerDialogOpen(true); closeMobile(); }}
                className="block rounded-2xl px-4 py-3 text-left text-[#050B2C] hover:text-[#D9782D] hover:bg-orange-50 font-medium transition-colors">
                Be a Referrer
              </button>
              <Link href="/jobs" onClick={closeMobile} className="block rounded-2xl px-4 py-3 text-[#050B2C] hover:text-[#D9782D] hover:bg-orange-50 transition-colors">Jobs</Link>
              <Link href="/contact" onClick={closeMobile} className="block rounded-2xl px-4 py-3 text-[#050B2C] hover:text-[#D9782D] hover:bg-orange-50 transition-colors">Contact</Link>
              <div className="rounded-2xl border border-gray-300 overflow-hidden">
                <Link href="/talent-pool" onClick={closeMobile} className="block px-4 py-3 bg-gray-50 text-[#050B2C] hover:text-[#D9782D] hover:bg-orange-50 transition-colors">Talent Pool</Link>
              </div>
              <Link href="/jobs" onClick={closeMobile} className="inline-flex items-center justify-center rounded-2xl border border-[#D9782D] text-[#D9782D] px-4 py-2.5 text-sm font-semibold hover:bg-[#D9782D]/5 transition-colors">
                Explore Opportunities
              </Link>
              <Link href="/contact" onClick={closeMobile} className="inline-flex items-center justify-center rounded-2xl bg-[#D9782D] px-4 py-2.5 text-white text-sm font-semibold hover:bg-[#c96c25] transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>

      {referrerDialogOpen && <ReferrerDialog onClose={() => setReferrerDialogOpen(false)} />}
    </>
  );
}
