"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
      
      {/* Glass Navbar */}
      <div className="backdrop-blur-xl bg-white/90 border border-gray-200 shadow-lg rounded-2xl px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <h1 className="font-bold text-xl text-[#050B2C]">PICKYOURHIRE</h1>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[#050B2C] font-medium relative">
          <Link href="/referrer">Be a Referrer</Link>

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
            <Link href="/referrer" onClick={closeMobile} className="block rounded-2xl px-4 py-3 text-[#050B2C] hover:bg-gray-100">
              Be a Referrer
            </Link>
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
  );
}