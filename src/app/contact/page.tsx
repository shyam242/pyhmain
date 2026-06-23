"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import LoadingButton from "@/components/LoadingButton";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed");
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#050B2C] placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#D9782D]/20 focus:border-[#D9782D]/50 transition";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-20">
      <Toaster position="top-right" />

      <div className="w-full max-w-5xl">
        <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl">

          {/* ── LEFT — Form ── */}
          <div className="flex-1 bg-white p-8 md:p-12">
            {/* Tag */}
            <div className="flex items-center gap-2 mb-6">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2L15 22l-4-9-9-4 20-7z"/></svg>
              <span className="text-[#D9782D] text-xs font-bold uppercase tracking-widest">Get In Touch</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-[#050B2C] leading-tight mb-3">
              Let&apos;s Build Your Hiring<br />Success Story
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Whether you&apos;re a candidate exploring opportunities, a recruiter hiring top talent, or a professional interested in referrals, our team is here to help.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#050B2C] mb-1.5">Full Name</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </span>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required
                      className={`${inputClass} pl-9`} placeholder="Enter your full name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#050B2C] mb-1.5">Work Email</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </span>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required
                      className={`${inputClass} pl-9`} placeholder="Enter your professional email" />
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#050B2C] mb-1.5">Service Required</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    </span>
                    <select name="subject" value={formData.subject} onChange={handleChange} required
                      className={`${inputClass} pl-9 appearance-none`}>
                      <option value="" disabled>Choose a service</option>
                      <option value="Talent">Talent Pool</option>
                      <option value="Demo">Request Demo</option>
                      <option value="Partner">Partner with Us</option>
                      <option value="Other">Other</option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#050B2C] mb-1.5">Phone Number</label>
                  <div className="flex overflow-hidden rounded-xl border border-gray-200 bg-white focus-within:ring-2 focus-within:ring-[#D9782D]/20 focus-within:border-[#D9782D]/50 transition">
                    <div className="flex items-center gap-1 px-3 border-r border-gray-200 bg-gray-50 text-sm text-[#050B2C] font-medium">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 5.27 5.27l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      +91
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                    </div>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      className="flex-1 px-3 py-3 text-sm text-[#050B2C] placeholder:text-gray-400 outline-none bg-white"
                      placeholder="Enter your mobile number" />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-[#050B2C] mb-1.5">
                  How Can We Help? <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3.5 text-gray-400">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  </span>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4}
                    className={`${inputClass} pl-9 resize-none`}
                    placeholder="Tell us about your requirement, hiring needs, or career goals..." />
                </div>
              </div>

              <LoadingButton type="submit" loading={loading} loadingText="Sending..."
                className={`w-full py-3.5 rounded-xl text-base font-bold transition flex items-center justify-center gap-2 ${
                  loading ? "bg-gray-300 cursor-not-allowed text-gray-500"
                    : "bg-[#D9782D] hover:bg-[#c96c25] text-white shadow-lg shadow-[#D9782D]/25"
                }`}>
                Submit Inquiry
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </LoadingButton>

              <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Your information is secure and will only be used to assist you.
              </p>
            </form>
          </div>

          {/* ── RIGHT — Info panel ── */}
          <div className="lg:w-[340px] bg-[#050B2C] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#D9782D] rounded-full blur-[100px] opacity-15 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500 rounded-full blur-[100px] opacity-10 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-xl font-bold text-white mb-6">Why Connect With PickYourHire?</h2>
              <div className="space-y-4 mb-8">
                {[
                  "Verified Employers Across India",
                  "Dedicated Recruitment Support",
                  "Trusted Referral Network",
                  "Faster Candidate-Recruiter Connections",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border border-[#D9782D] flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#D9782D" strokeWidth="2.5"><polyline points="2 6 5 9 10 3"/></svg>
                    </div>
                    <p className="text-white/80 text-sm">{item}</p>
                  </div>
                ))}
              </div>

              <div className="w-full h-px bg-white/10 mb-8" />

              <h3 className="text-white font-bold mb-5">Get in Touch</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>,
                    icon2: <polyline points="22,6 12,13 2,6"/>,
                    text: "contact@pickyourhire.com",
                  },
                  {
                    icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 5.27 5.27l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>,
                    text: "+91 99369 22504",
                  },
                  {
                    icon: <circle cx="12" cy="12" r="10"/>,
                    icon2: <><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>,
                    text: "www.pickyourhire.com",
                  },
                  {
                    icon: <circle cx="12" cy="12" r="10"/>,
                    icon2: <polyline points="12 6 12 12 16 14"/>,
                    text: "Mon – Sat  |  9 AM – 7 PM",
                  },
                ].map(({ icon, icon2, text }, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {icon}{icon2}
                      </svg>
                    </div>
                    <p className="text-white/70 text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
