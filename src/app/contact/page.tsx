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
    "w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder:text-gray-300 shadow-[0_8px_32px_rgba(31,38,135,0.15)] focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-white/40 transition-all duration-300";

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#06142E] via-[#0B1F4D] to-[#09152B] flex items-center justify-center px-4 py-12">
      
      {/* Toast */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#3a3a3a",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
            padding: "14px 18px",
            borderRadius: "12px",
          },
        }}
      />

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-cyan-400/10 blur-3xl rounded-full"></div>

      {/* Decorative Waves */}
      <div className="absolute left-[-10%] top-20 h-[2px] w-[120%] rotate-6 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
      <div className="absolute bottom-20 left-[-10%] h-[2px] w-[120%] -rotate-6 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"></div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-3xl animate-fade-in">
        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(31,38,135,0.25)] p-8 md:p-12">

          {/* Shine */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent"></div>

          {/* Heading */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Contact Us
            </h1>

            <p className="mt-3 text-gray-300">
              Let’s build something amazing together.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label className="mb-2 block font-medium text-white">
                  Full Name
                </label>

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
                <label className="mb-2 block font-medium text-white">
                  Email
                </label>

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
                <label className="mb-2 block font-medium text-white">
                  Service Interested In
                </label>

                <select
  name="subject"
  value={formData.subject}
  onChange={handleChange}
  required
  className="
    w-full
    px-4
    py-3
    rounded-xl
    bg-white/10
    backdrop-blur-xl
    border
    border-white/20
    text-white
    shadow-[0_8px_32px_rgba(31,38,135,0.15)]
    focus:outline-none
    focus:ring-2
    focus:ring-blue-400/40
    focus:border-white/40
    appearance-none
    cursor-pointer
    transition-all
    duration-300
  "
>
  <option
    value=""
    disabled
    className="bg-[#2f2f2f] text-gray-300"
  >
    Choose a service
  </option>
  <option value="Talent" className="bg-[#2f2f2f] text-white">
    Talent Pool
  </option>

  <option value="Demo" className="bg-[#2f2f2f] text-white">
   Request Demo
  </option>
<option value="Partner" className="bg-[#2f2f2f] text-white">
    Partner with Us
  </option>
  <option value="Other" className="bg-[#2f2f2f] text-white">
    Other
  </option>
</select>
              </div>
              <div>
  <label className="mb-2 block font-medium text-white">
    Phone Number
  </label>

  <div className="flex overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,38,135,0.15)] focus-within:ring-2 focus-within:ring-blue-400/40 transition-all duration-300">

    {/* Country Code Input */}
    <input
      type="text"
      defaultValue="+91"
      className="
        w-14
        border-r
        border-white/10
        bg-transparent
        px-3
        py-3
        text-white
        outline-none
        placeholder:text-gray-300
      "
    />

    {/* Phone Number */}
    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      className="
        flex-1
        bg-transparent
        px-4
        py-3
        text-white
        placeholder:text-gray-300
        outline-none
      "
      placeholder="Enter phone number"
    />
  </div>
</div>
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block font-medium text-white">
                How can we help you?
                <span className="ml-1 text-sm text-gray-400">
                  (optional)
                </span>
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`${glassInput} resize-none`}
                placeholder="Enter your message here"
              />

              <div className="mt-2 text-sm text-gray-400">
                {formData.message.length}/1000 characters
              </div>
            </div>

            {/* Submit Button */}
            <LoadingButton
              type="submit"
              loading={loading}
              loadingText="Sending..."
              className={`group w-full rounded-xl py-4 text-lg font-semibold transition-all duration-300 ${
                loading
                  ? "cursor-not-allowed bg-gray-500"
                  : "bg-gradient-to-r bg-blue-400 text-white hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
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