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
      if (!response.ok) throw new Error("Failed to send message");
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const glassInput =
    "w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-3xl text-[#050B2C] placeholder:text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D9782D]/20 focus:border-[#D9782D]/30 transition duration-300";

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50 to-[#f6f1ec] pt-28 px-4 pb-16">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#ffffff",
            color: "#050b2c",
            border: "1px solid rgba(13, 41, 89, 0.08)",
            borderRadius: "12px",
            padding: "14px 18px",
          },
        }}
      />

      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#D9782D]/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blue-400/5 blur-3xl" />
      </div>

      {/* Page header */}
      <div className="relative z-10 text-center mb-12">
        <span className="inline-flex items-center gap-2 bg-[#050B2C]/5 border border-[#050B2C]/10 text-[#050B2C] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D9782D] inline-block" />
          Get In Touch
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-[#050B2C] mb-3">Contact Us</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Let&apos;s build something amazing together. Reach out and we&apos;ll respond within 1 business day.
        </p>
      </div>

      {/* Split layout */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-start">

        {/* Left info panel */}
        <div className="lg:w-[36%] flex-shrink-0 w-full">
          <div className="rounded-[2rem] bg-gradient-to-br from-[#050B2C] to-[#0d1f50] p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D9782D] rounded-full blur-[100px] opacity-20 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2">Let&apos;s talk hiring</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Discuss talent solutions, partnerships, or any questions about PickYourHire.
              </p>

              <div className="space-y-5 mb-8">
                <a href="mailto:contact@pickyourhire.com" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D9782D]/20 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest">Email</p>
                    <p className="text-white text-sm font-medium group-hover:text-[#D9782D] transition-colors">contact@pickyourhire.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest">Hours</p>
                    <p className="text-white text-sm font-medium">Mon–Sat, 10AM–7PM IST</p>
                  </div>
                </div>

                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-xl bg-[#25D366]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/30 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest">WhatsApp</p>
                    <p className="text-[#25D366] text-sm font-medium">Chat with us</p>
                  </div>
                </a>

                <a href="https://linkedin.com/company/pickyourhire" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest">LinkedIn</p>
                    <p className="text-white text-sm font-medium group-hover:text-blue-400 transition-colors">PickYourHire</p>
                  </div>
                </a>
              </div>

              {/* Screenshot preview */}
              <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl opacity-80">
                <img src="/ss-jd-cv-results.png" alt="Platform preview" className="w-full h-auto block" />
              </div>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="flex-1 w-full">
          <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-[0_20px_80px_rgba(5,11,44,0.08)] p-8 md:p-12">
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white to-transparent opacity-60" />

            <div className="mb-8 relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#050B2C]">Send us a message</h2>
              <p className="mt-1 text-gray-500 text-sm">Fill in the form and we&apos;ll be in touch shortly.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="mb-2 block font-medium text-[#050B2C] text-sm">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required
                    className={glassInput} placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="mb-2 block font-medium text-[#050B2C] text-sm">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required
                    className={glassInput} placeholder="Enter your email address" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="mb-2 block font-medium text-[#050B2C] text-sm">Service Interested In</label>
                  <select name="subject" value={formData.subject} onChange={handleChange} required
                    className="w-full px-4 py-4 rounded-3xl bg-gray-50 border border-gray-200 text-[#050B2C] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D9782D]/20 focus:border-[#D9782D]/30 transition duration-300">
                    <option value="" disabled>Choose a service</option>
                    <option value="Talent">Talent Pool</option>
                    <option value="Demo">Request Demo</option>
                    <option value="Partner">Partner with Us</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block font-medium text-[#050B2C] text-sm">Phone Number</label>
                  <div className="flex overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-sm focus-within:ring-2 focus-within:ring-[#D9782D]/20 transition duration-300">
                    <input type="text" defaultValue="+91"
                      className="w-16 border-r border-gray-200 bg-transparent px-3 py-4 text-[#050B2C] outline-none" />
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      className="flex-1 bg-transparent px-4 py-4 text-[#050B2C] placeholder:text-gray-400 outline-none"
                      placeholder="Enter phone number" />
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-2 block font-medium text-[#050B2C] text-sm">
                  How can we help you? <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={5}
                  className={`${glassInput} resize-none`} placeholder="Enter your message here" />
                <div className="mt-1 text-xs text-gray-400">{formData.message.length}/1000</div>
              </div>

              <LoadingButton
                type="submit"
                loading={loading}
                loadingText="Sending..."
                className={`group w-full rounded-full py-4 text-base font-semibold transition-all duration-300 ${
                  loading
                    ? "cursor-not-allowed bg-gray-400"
                    : "bg-gradient-to-r from-[#D9782D] to-[#f49d59] text-white hover:shadow-lg hover:shadow-[#D9782D]/30"
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  Request Consultation
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </LoadingButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
