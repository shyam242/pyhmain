"use client";

import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import LoadingButton from "@/components/LoadingButton";

type ServiceCard = {
  title: string;
  description: string;
  bullets: string[];
};

type ServiceGroup = {
  key: string;
  label: string;
  headline: string;
  intro: string;
  highlight: string;
  bullets: string[];
  cards: ServiceCard[];
};

const serviceGroups: ServiceGroup[] = [
  {
    key: "candidate",
    label: "Candidates",
    headline: "Candidate Services",
    intro:
      "From opportunity discovery to interview readiness, PickYourHire helps candidates move faster with confidence.",
    highlight:
      "Career growth powered by curated job access, tailored evaluation, and expert preparation.",
    bullets: [
      "Curated roles matched to your skills and goals",
      "Technical and readiness scoring for better visibility",
      "Interview preparation with role-specific guidance",
    ],
    cards: [
      {
        title: "Opportunity Discovery",
        description:
          "Access curated roles across startups, product companies, semiconductor, embedded, IT, non-IT, and leadership hiring.",
        bullets: [
          "Confidential opportunities and niche technical openings",
          "Direct recruiter visibility for high-fit roles",
          "Better matching than mass job portals",
        ],
      },
      {
        title: "Candidate Scoring & Evaluation",
        description:
          "Understand your readiness with technical profile scoring, skill fit insights, and experience relevance evaluation.",
        bullets: [
          "Skills match, domain fit, and project relevance scoring",
          "Stability and availability assessment",
          "Hiring readiness categorization for faster decisions",
        ],
      },
      {
        title: "Interview Preparation",
        description:
          "Gain confidence with mock interview guidance, company-specific preparation, and resume discussion coaching.",
        bullets: [
          "Technical and HR interview coaching",
          "Communication improvement recommendations",
          "Role-specific preparation tips and checklists",
        ],
      },
    ],
  },
  {
    key: "recruiter",
    label: "Recruiters",
    headline: "Recruiter Services",
    intro:
      "Make hiring faster and more accurate with sourcing, pre-screening, and analytics built for modern recruitment teams.",
    highlight:
      "A complete talent delivery experience from sourcing through shortlist review and decision support.",
    bullets: [
      "Active sourcing, passive outreach, and referral-driven delivery",
      "Pre-screened candidate packages with compensation alignment",
      "AI scoring and hiring pipeline insights for better decisions",
    ],
    cards: [
      {
        title: "Talent Sourcing",
        description:
          "Identify high-quality candidates quickly through active search, passive outreach, database mining, and referral networks.",
        bullets: [
          "Niche talent acquisition across IT, telecom, semiconductor, and healthcare",
          "Referral-driven candidate discovery",
          "Rapid shortlist generation for urgent hiring needs",
        ],
      },
      {
        title: "Pre-screened Delivery",
        description:
          "Reduce screening effort with resume evaluation, technical review, HR validation, and candidate alignment checks.",
        bullets: [
          "Resume review and candidate score summaries",
          "Compensation and notice-period validation",
          "Interest confirmation for smoother handoffs",
        ],
      },
      {
        title: "AI & Analytics",
        description:
          "Leverage intelligent candidate prioritization and hiring analytics to focus on best-fit profiles and faster decisions.",
        bullets: [
          "Skills matching, role suitability, and ranking",
          "Pipeline tracking, conversion analytics, and performance metrics",
          "Hiring dashboard insights for recruiter efficiency",
        ],
      },
      {
        title: "Technical Screening Support",
        description:
          "Validate candidate competency early with assessments, technical discussion coordination, and domain evaluation.",
        bullets: [
          "Skill-based evaluation and coding assessment support",
          "Communication and domain understanding validation",
          "Hands-on technical screening before interviews",
        ],
      },
    ],
  },
  {
    key: "referrer",
    label: "Referrers",
    headline: "Referrer Services",
    intro:
      "Empower your referral network with transparent tracking, incentives, and structured collaboration workflows.",
    highlight:
      "A partner-first ecosystem that rewards referrals and keeps every candidate journey visible.",
    bullets: [
      "Referral submission tracking and status visibility",
      "Structured incentive plans for successful referrals",
      "Transparent payout and follow-up tracking",
    ],
    cards: [
      {
        title: "Referral Partner Program",
        description:
          "Invite industry professionals, tech leads, HR networks, and alumni to refer candidates into your hiring ecosystem.",
        bullets: [
          "Easy referral submission experience",
          "Partner collaboration for hard-to-fill roles",
          "Dedicated referral workflows for key hires",
        ],
      },
      {
        title: "Incentive Management",
        description:
          "Choose the right reward model with fixed payouts, percentage incentives, and performance-based reward plans.",
        bullets: [
          "Fixed referral payments for successful hires",
          "Percentage-based rewards for long-term incentives",
          "Clear payout milestones and release tracking",
        ],
      },
      {
        title: "Referral Tracking Dashboard",
        description:
          "Give referrers full visibility into submission status, interview progress, selection updates, and payout history.",
        bullets: [
          "Referral submission tracking and status updates",
          "Interview and selection visibility",
          "Post-joining follow-up and payout history",
        ],
      },
    ],
  },
];

export default function ServicesShowcase() {
  const [activeGroup, setActiveGroup] = useState(serviceGroups[0]);
  const [showMockInterviewForm, setShowMockInterviewForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      const matched = serviceGroups.find((g) => g.key === tab);
      if (matched) setActiveGroup(matched);
    }
  }, [searchParams]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    experience: "",
    primarySkill: "",
    focusAreas: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.mobileNo,
          subject: "Mock Interview Query",
          message: `Experience: ${formData.experience}\nPrimary Skill: ${formData.primarySkill}\nFocus Areas: ${formData.focusAreas}`,
        }),
      });

      if (response.ok) {
        toast.success("Mock interview request submitted successfully!");
        setFormData({ name: "", email: "", mobileNo: "", experience: "", primarySkill: "", focusAreas: "" });
        setShowMockInterviewForm(false);
      } else {
        toast.error("Failed to submit request. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="services"
      className="py-32 px-4 bg-gradient-to-b from-white via-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto">
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
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#D9782D] uppercase tracking-[0.35em] text-sm font-semibold mb-4">
            PickYourHire Services
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-[#050B2C] mb-6">
            One ecosystem with three service pathways.
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore candidate, recruiter, and referrer experiences with a
            service showcase designed to keep every interaction clear, fast,
            and outcome-focused.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          {serviceGroups.map((group) => (
            <button
              key={group.key}
              type="button"
              onClick={() => setActiveGroup(group)}
              className={`px-6 py-3 rounded-full transition font-semibold ${
                activeGroup.key === group.key
                  ? "bg-[#D9782D] text-white shadow-lg shadow-[#D9782D]/20"
                  : "bg-white text-[#050B2C] border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-[360px_1fr] gap-8 items-start">
          {/* Sidebar */}
          <aside className="lg:sticky top-28 rounded-[2rem] border border-gray-200 bg-white shadow-lg p-10">
            <h3 className="text-3xl font-bold text-[#050B2C] mb-5">
              {activeGroup.headline}
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              {activeGroup.intro}
            </p>

            <p className="text-[#D9782D] font-semibold mb-8">
              {activeGroup.highlight}
            </p>

            <ul className="space-y-4 text-gray-600">
              {activeGroup.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 items-start">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#D9782D]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </aside>
          <div className="relative">
            <div
              className="h-[760px] overflow-y-auto hide-scrollbar rounded-[2rem] border border-gray-200 bg-white p-6 shadow-lg"
              style={{ overscrollBehavior: "auto" }}
            >
              <div className="space-y-6 pr-2">
                {activeGroup.cards.map((card) => (
                  <article
                    key={card.title}
                    className="group bg-gray-50 border border-gray-200 rounded-[2rem] p-8 transition hover:shadow-md"
                  >
                    {/* Top */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <h4 className="text-2xl font-semibold text-[#050B2C]">
                        {card.title}
                      </h4>

                      <span className="text-sm text-[#D9782D] font-semibold">
                        Feature
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {card.description}
                    </p>

                    {/* Bullets */}
                    <ul className="grid gap-3 text-gray-600 mb-6">
                      {card.bullets.map((item) => (
                        <li key={item} className="flex gap-3 items-start">
                          <span className="mt-1 h-2 w-2 rounded-full bg-[#7BC74D]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Mock Interview Button */}
                    {card.title === "Interview Preparation" && (
                      <button
                        onClick={() => setShowMockInterviewForm(true)}
                        className="inline-flex items-center justify-center rounded-xl bg-[#D9782D] px-6 py-3 text-white font-semibold transition hover:bg-[#c96c25] shadow-lg shadow-[#D9782D]/20"
                      >
                        Book Mock Interview
                      </button>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showMockInterviewForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-[2rem] border border-gray-200 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowMockInterviewForm(false)}
              className="absolute right-6 top-6 text-gray-400 hover:text-[#050B2C] transition text-3xl font-bold"
              aria-label="Close mock interview form"
            >
              ×
            </button>

            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#050B2C] mb-2">Request Mock Interview</h2>
              <p className="text-gray-600 mb-8">Fill in your details and let our PYH panel prepare you for success.</p>

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
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-3xl text-[#050B2C] placeholder:text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D9782D]/20 focus:border-[#D9782D]/30 transition duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="mb-2 block font-medium text-[#050B2C]">Mobile Number</label>
                    <input
                      type="tel"
                      name="mobileNo"
                      value={formData.mobileNo}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-3xl text-[#050B2C] placeholder:text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D9782D]/20 focus:border-[#D9782D]/30 transition duration-300"
                      placeholder="Enter mobile number"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-medium text-[#050B2C]">Experience Level</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-3xl text-[#050B2C] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D9782D]/20 focus:border-[#D9782D]/30 transition duration-300"
                    >
                      <option value="" disabled>
                        Select experience level
                      </option>
                      <option value="Fresher">Fresher (0 years)</option>
                      <option value="1-2 years">1-2 years</option>
                      <option value="2-5 years">2-5 years</option>
                      <option value="5-10 years">5-10 years</option>
                      <option value="10+ years">10+ years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-medium text-[#050B2C]">Primary Skill / Role</label>
                  <input
                    type="text"
                    name="primarySkill"
                    value={formData.primarySkill}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-3xl text-[#050B2C] placeholder:text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D9782D]/20 focus:border-[#D9782D]/30 transition duration-300"
                    placeholder="e.g., React, Python, Product Management"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium text-[#050B2C]">Areas for PYH Panel to Focus</label>
                  <textarea
                    name="focusAreas"
                    value={formData.focusAreas}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-3xl text-[#050B2C] placeholder:text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D9782D]/20 focus:border-[#D9782D]/30 transition duration-300 resize-none"
                    placeholder="e.g., System design, behavioral questions, technical depth in algorithms, etc."
                  />
                </div>

                <LoadingButton
                  type="submit"
                  loading={loading}
                  loadingText="Submitting..."
                  className={`w-full rounded-full py-4 text-lg font-semibold transition-all duration-300 ${
                    loading
                      ? "cursor-not-allowed bg-gray-400"
                      : "bg-gradient-to-r from-[#D9782D] to-[#f49d59] text-white hover:shadow-lg hover:shadow-[#D9782D]/30"
                  }`}
                >
                  Request Mock Interview
                </LoadingButton>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}