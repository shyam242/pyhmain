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
      <div className="backdrop-blur-xl bg-white/70 border border-white/40 shadow-lg rounded-2xl px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <h1 className="font-bold text-xl text-slate-900">PICKYOURHIRE</h1>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium relative">
          <Link href="/referrer">Be a Referrer</Link>

          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="flex items-center gap-1 text-slate-900">
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
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border overflow-hidden">
                <Link
                  href="/talent-pool"
                  className="block px-5 py-4 bg-gray-100 font-medium hover:bg-gray-200"
                >
                  Talent Pool
                </Link>
                <Link
                  href="/products"
                  className="block px-5 py-4 hover:bg-gray-100"
                >
                  Products
                </Link>
              </div>
            )}
          </div>

          <Link href="/jobs">Jobs</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:inline-block">
            <button className="bg-[#123045] text-white px-6 py-2 rounded-xl font-semibold hover:bg-[#0B1F4D] transition-colors duration-300">
              Get In Touch
            </button>
          </Link>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-xl bg-slate-950/10 border border-white/20"
          >
            {mobileOpen ? (
              <span className="text-2xl text-slate-900">×</span>
            ) : (
              <Image src="/hamburger.svg" width={24} height={24} alt="menu" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden mt-3 rounded-3xl border border-white/10 bg-white/95 shadow-2xl backdrop-blur-2xl p-5 text-slate-900">
          <div className="flex flex-col gap-3">
            <Link href="/referrer" onClick={closeMobile} className="block rounded-2xl px-4 py-3 hover:bg-slate-100">
              Be a Referrer
            </Link>
            <Link href="/jobs" onClick={closeMobile} className="block rounded-2xl px-4 py-3 hover:bg-slate-100">
              Jobs
            </Link>
            <Link href="/contact" onClick={closeMobile} className="block rounded-2xl px-4 py-3 hover:bg-slate-100">
              Contact
            </Link>
            <div className="rounded-2xl border border-slate-200 overflow-hidden">
              <Link href="/talent-pool" onClick={closeMobile} className="block px-4 py-3 bg-slate-100 hover:bg-slate-200">
                Talent Pool
              </Link>
              <Link href="/products" onClick={closeMobile} className="block px-4 py-3 hover:bg-slate-100">
                Products
              </Link>
            </div>
            <Link href="/contact" onClick={closeMobile} className="inline-flex items-center justify-center rounded-2xl bg-[#123045] px-4 py-3 text-white font-semibold hover:bg-[#0B1F4D]">
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}