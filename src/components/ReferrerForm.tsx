"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import toast from "react-hot-toast";
import LoadingButton from "@/components/LoadingButton";

type ReferrerFormProps = {
  onSuccessAction?: () => void;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  experience: string;
  location: string;
  details: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  experience: "",
  location: "",
  details: "",
};

export default function ReferrerForm({ onSuccessAction }: ReferrerFormProps) {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: "Be a Referrer Submission",
          message: `Company: ${formData.company}\nExperience: ${formData.experience}\nLocation: ${formData.location}\nDetails: ${formData.details || "No additional details provided."}`,
        }),
      });
      if (response.ok) {
        toast.success("Your referrer submission was sent successfully!");
        setFormData(initialState);
        if (onSuccessAction) onSuccessAction();
      } else {
        toast.error("Failed to send the form. Please try again.");
      }
    } catch {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-3xl text-[#050B2C] placeholder:text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D9782D]/20 focus:border-[#D9782D]/30 transition duration-300";

  return (
    <div className="space-y-5">

      {/* ── Referral Bonus Highlight Banner ── */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#D9782D] to-[#f49d59] p-4 text-white">
        {/* Decorative glow */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/20 rounded-full blur-xl pointer-events-none" />
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-lg pointer-events-none" />
        <div className="relative z-10 flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
            </svg>
          </div>
          <div>
            <p className="font-bold text-sm mb-1">🎉 Refer Now! Earn Referral Bonuses</p>
            <p className="text-white/85 text-xs leading-relaxed">
              Help us find great talent and earn referral bonuses for every successful placement. The more you refer, the more you earn!
            </p>
          </div>
        </div>
      </div>

      {/* ── Perks list ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { icon: <><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></>, label: "Earn Bonuses", sub: "Per successful hire" },
          { icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>, label: "Grow Network", sub: "Connect talent & companies" },
          { icon: <><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></>, label: "Fast Payouts", sub: "Quick & transparent" },
        ].map(({ icon, label, sub }) => (
          <div key={label} className="bg-[#D9782D]/5 border border-[#D9782D]/15 rounded-xl px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#D9782D]/10 flex items-center justify-center flex-shrink-0">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D9782D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
            </div>
            <div>
              <p className="text-xs font-bold text-[#050B2C]">{label}</p>
              <p className="text-[10px] text-gray-400">{sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Form ── */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="mb-2 block font-medium text-[#050B2C] text-sm">Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required
              className={inputClass} placeholder="Enter your name" />
          </div>
          <div>
            <label className="mb-2 block font-medium text-[#050B2C] text-sm">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required
              className={inputClass} placeholder="Enter your email" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="mb-2 block font-medium text-[#050B2C] text-sm">Phone</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
              className={inputClass} placeholder="Enter your phone number" />
          </div>
          <div>
            <label className="mb-2 block font-medium text-[#050B2C] text-sm">Company</label>
            <input type="text" name="company" value={formData.company} onChange={handleChange} required
              className={inputClass} placeholder="Enter your company name" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="mb-2 block font-medium text-[#050B2C] text-sm">Experience</label>
            <select name="experience" value={formData.experience} onChange={handleChange} required className={inputClass}>
              <option value="" disabled>Select experience range</option>
              <option value="Less than 1 year">Less than 1 year</option>
              <option value="1-3 years">1-3 years</option>
              <option value="3-5 years">3-5 years</option>
              <option value="5-10 years">5-10 years</option>
              <option value="10+ years">10+ years</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block font-medium text-[#050B2C] text-sm">Location</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} required
              className={inputClass} placeholder="Enter your location" />
          </div>
        </div>

        <div>
          <label className="mb-2 block font-medium text-[#050B2C] text-sm">Anything else you&apos;d like to mention?</label>
          <textarea name="details" value={formData.details} onChange={handleChange} rows={4}
            className={`${inputClass} resize-none`}
            placeholder="Tell us about your referral experience, the types of candidates you refer, or anything else." />
        </div>

        <LoadingButton type="submit" loading={loading} loadingText="Sending..."
          className={`w-full rounded-full py-4 text-base font-semibold transition-all duration-300 ${
            loading ? "cursor-not-allowed bg-gray-400"
              : "bg-gradient-to-r from-[#D9782D] to-[#f49d59] text-white hover:shadow-lg hover:shadow-[#D9782D]/30"
          }`}>
          Submit Referrer Request
        </LoadingButton>
      </form>
    </div>
  );
}
