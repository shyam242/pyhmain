"use client";

import { useState } from "react";

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
    highlight: "Career growth powered by curated job access, tailored evaluation, and expert preparation.",
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

  return (
    <section id="services" className="py-32 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-400 uppercase tracking-[0.35em] text-sm font-semibold mb-4">
            PickYourHire Services
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            One ecosystem. Three service pathways.
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore candidate, recruiter, and referrer experiences with a service showcase designed to keep every interaction clear, fast, and outcome-focused.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          {serviceGroups.map((group) => (
            <button
              key={group.key}
              type="button"
              onClick={() => setActiveGroup(group)}
              className={`px-6 py-3 rounded-full transition font-semibold ${
                activeGroup.key === group.key
                  ? "bg-white text-slate-950 shadow-lg"
                  : "bg-white/10 text-gray-300 border border-white/10 hover:bg-white/15"
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[360px_1fr] gap-8 items-start">
          <aside className="lg:sticky top-28 rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-2xl backdrop-blur-xl p-10">
            <h3 className="text-3xl font-bold text-white mb-5">
              {activeGroup.headline}
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              {activeGroup.intro}
            </p>
            <p className="text-blue-300 font-semibold mb-8">
              {activeGroup.highlight}
            </p>
            <ul className="space-y-4 text-gray-400">
              {activeGroup.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 items-start">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </aside>

          <div className="relative">
            <div className="h-[760px] overflow-y-auto hide-scrollbar rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-2xl">
              <div className="space-y-6 pr-2">
                {activeGroup.cards.map((card) => (
                  <article
                    key={card.title}
                    className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] p-8 transition hover:bg-white/10 animate-fade-in"
                  >
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <h4 className="text-2xl font-semibold text-white">
                        {card.title}
                      </h4>
                      <span className="text-sm text-blue-300">Feature</span>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {card.description}
                    </p>
                    <ul className="grid gap-3 text-gray-400">
                      {card.bullets.map((item) => (
                        <li key={item} className="flex gap-3 items-start">
                          <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
