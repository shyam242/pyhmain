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
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="mb-2 block font-medium text-[#050B2C]">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-3xl text-[#050B2C] placeholder:text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D9782D]/20 focus:border-[#D9782D]/30 transition duration-300"
              placeholder="Enter your name"
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
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-3xl text-[#050B2C] placeholder:text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D9782D]/20 focus:border-[#D9782D]/30 transition duration-300"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="mb-2 block font-medium text-[#050B2C]">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-3xl text-[#050B2C] placeholder:text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D9782D]/20 focus:border-[#D9782D]/30 transition duration-300"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="mb-2 block font-medium text-[#050B2C]">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-3xl text-[#050B2C] placeholder:text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D9782D]/20 focus:border-[#D9782D]/30 transition duration-300"
              placeholder="Enter your company name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="mb-2 block font-medium text-[#050B2C]">Experience</label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-3xl text-[#050B2C] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D9782D]/20 focus:border-[#D9782D]/30 transition duration-300"
            >
              <option value="" disabled>
                Select experience range
              </option>
              <option value="Less than 1 year">Less than 1 year</option>
              <option value="1-3 years">1-3 years</option>
              <option value="3-5 years">3-5 years</option>
              <option value="5-10 years">5-10 years</option>
              <option value="10+ years">10+ years</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block font-medium text-[#050B2C]">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-3xl text-[#050B2C] placeholder:text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D9782D]/20 focus:border-[#D9782D]/30 transition duration-300"
              placeholder="Enter your location"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block font-medium text-[#050B2C]">Anything else you'd like to mention?</label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-3xl text-[#050B2C] placeholder:text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D9782D]/20 focus:border-[#D9782D]/30 transition duration-300 resize-none"
            placeholder="Tell us about your referral experience, the types of candidates you refer, or anything else."
          />
        </div>

        <LoadingButton
          type="submit"
          loading={loading}
          loadingText="Sending..."
          className={`w-full rounded-full py-4 text-lg font-semibold transition-all duration-300 ${
            loading
              ? "cursor-not-allowed bg-gray-400"
              : "bg-linear-to-r from-[#D9782D] to-[#f49d59] text-white hover:shadow-lg hover:shadow-[#D9782D]/30"
          }`}
        >
          Submit Referrer Request
        </LoadingButton>
      </form>
    </div>
  );
}
