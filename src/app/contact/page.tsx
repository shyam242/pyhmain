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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50 to-[#f6f1ec] flex items-center justify-center px-4 py-12">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#ffffff",
            color: "#050b2c",
            border: "1px solid rgba(13, 41, 89, 0.08)",
            backdropFilter: "blur(12px)",
            padding: "14px 18px",
            borderRadius: "12px",
          },
        }}
      />

      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#D9782D]/8 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#7BC74D]/8 blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#D9782D]/5 blur-3xl animate-bounce-subtle" />
      </div>

      {/* Wave Animation SVG Background */}
      <svg className="pointer-events-none absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D9782D" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#D9782D" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7BC74D" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#7BC74D" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,100 Q300,50 600,100 T1200,100 L1200,0 L0,0 Z" fill="url(#waveGradient1)" opacity="0.5">
          <animate attributeName="d" dur="20s" repeatCount="indefinite"
            values="M0,100 Q300,50 600,100 T1200,100 L1200,0 L0,0 Z;
                    M0,50 Q300,100 600,50 T1200,50 L1200,0 L0,0 Z;
                    M0,100 Q300,50 600,100 T1200,100 L1200,0 L0,0 Z" />
        </path>
        <path d="M0,200 Q300,150 600,200 T1200,200 L1200,800 L0,800 Z" fill="url(#waveGradient2)" opacity="0.3">
          <animate attributeName="d" dur="25s" repeatCount="indefinite"
            values="M0,200 Q300,150 600,200 T1200,200 L1200,800 L0,800 Z;
                    M0,150 Q300,200 600,150 T1200,150 L1200,800 L0,800 Z;
                    M0,200 Q300,150 600,200 T1200,200 L1200,800 L0,800 Z" />
        </path>
      </svg>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-3xl animate-fade-in">
        <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-[0_20px_80px_rgba(5,11,44,0.08)] p-8 md:p-12">

          {/* Shine Effect */}
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white to-transparent opacity-60" />

          {/* Heading */}
          <div className="mb-10 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-[#050B2C]">Contact Us</h1>
            <p className="mt-3 text-gray-600">Let's build something amazing together.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="mb-2 block font-medium text-[#050B2C]">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={glassInput}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-[#050B2C]">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={glassInput}
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Service + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Service */}
              <div>
                <label className="mb-2 block font-medium text-[#050B2C]">Service Interested In</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 rounded-3xl bg-gray-50 border border-gray-200 text-[#050B2C] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D9782D]/20 focus:border-[#D9782D]/30 transition duration-300"
                >
                  <option value="" disabled>Choose a service</option>
                  <option value="Talent">Talent Pool</option>
                  <option value="Demo">Request Demo</option>
                  <option value="Partner">Partner with Us</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-medium text-[#050B2C]">Phone Number</label>
                <div className="flex overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-sm focus-within:ring-2 focus-within:ring-[#D9782D]/20 transition duration-300">
                  <input
                    type="text"
                    defaultValue="+91"
                    className="w-16 border-r border-gray-200 bg-transparent px-3 py-4 text-[#050B2C] outline-none placeholder:text-gray-400"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-1 bg-transparent px-4 py-4 text-[#050B2C] placeholder:text-gray-400 outline-none"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="mb-2 block font-medium text-[#050B2C]">
                How can we help you?
                <span className="ml-1 text-sm text-gray-500">(optional)</span>
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`${glassInput} resize-none`}
                placeholder="Enter your message here"
              />

              <div className="mt-2 text-sm text-gray-500">
                {formData.message.length}/1000 characters
              </div>
            </div>

            {/* Submit Button */}
            <LoadingButton
              type="submit"
              loading={loading}
              loadingText="Sending..."
              className={`group w-full rounded-full py-4 text-lg font-semibold transition-all duration-300 ${
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
  );
}