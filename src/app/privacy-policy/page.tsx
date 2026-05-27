export const metadata = {
  title: "Privacy Policy | PickYourHire",
  description:
    "How PickYourHire collects, uses, and protects your personal and professional information.",
};

const sections = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: (
      <>
        <p>
          When you register or update your profile on PickYourHire, we collect
          the following categories of information:
        </p>
        <div className="mt-4 space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">
              Identity & Contact
            </h4>
            <p>
              Your full name, email address, and contact number — used to
              identify you, reach out about relevant opportunities, and send
              account-related communications.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">
              Career & Professional Details
            </h4>
            <p>
              Job role, current and preferred locations, current and expected
              CTC (in LPA), notice period, whether you hold an active offer,
              your highest qualification, current company name, and your reason
              for considering a change.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Skills</h4>
            <p>
              General skills, technical skills, and soft skills as entered by
              you in your profile — used to match you with suitable
              opportunities and evaluate role fit.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">
              Address & Identity Verification
            </h4>
            <p>
              Your address as per Aadhaar — collected solely for candidate
              verification purposes and not used for any other purpose without
              your explicit consent.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">
              Professional Presence
            </h4>
            <p>
              Your LinkedIn profile URL, if provided — used to supplement
              recruiter evaluation and improve matching accuracy.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: (
      <>
        <p>
          PickYourHire uses the information you provide exclusively to operate
          and improve our talent matching platform. Specifically:
        </p>
        <ul className="mt-4 space-y-2 list-none">
          {[
            "To match your profile with job openings that align with your skills, location, compensation expectations, and availability.",
            "To share your profile (in whole or in summary form) with recruiters and hiring companies who have listed roles on our platform.",
            "To contact you via your registered email or phone number regarding relevant opportunities, platform updates, or account matters.",
            "To evaluate candidate readiness, scoring your profile for technical fit, domain alignment, and hiring suitability — in service of faster, better placements.",
            "To improve our platform through aggregate, anonymized analysis of usage patterns and profile data.",
            "To comply with legal obligations, including identity verification requirements applicable to recruitment activities in India.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-gray-600 leading-relaxed">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-400" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4">
          We do not use your data for advertising, sell it to data brokers, or
          share it with third parties unrelated to your job search or our
          platform operations.
        </p>
      </>
    ),
  },
  {
    id: "data-sharing",
    title: "Data Sharing & Disclosure",
    content: (
      <>
        <p>Your data may be shared in the following limited circumstances:</p>
        <div className="mt-4 space-y-4">
          <div className="border-l-2 border-orange-200 pl-4">
            <h4 className="font-semibold text-gray-800 mb-1">
              Recruiters & Hiring Companies
            </h4>
            <p>
              When your profile matches an open role, relevant details are
              shared with the hiring team. You will be informed before or
              immediately after such sharing.
            </p>
          </div>
          <div className="border-l-2 border-orange-200 pl-4">
            <h4 className="font-semibold text-gray-800 mb-1">
              Referral Partners
            </h4>
            <p>
              If you were referred through our Referral Program, limited
              profile-level information (such as candidacy status) may be shared
              with the referring party.
            </p>
          </div>
          <div className="border-l-2 border-orange-200 pl-4">
            <h4 className="font-semibold text-gray-800 mb-1">
              Service Providers
            </h4>
            <p>
              We use trusted third-party infrastructure providers (email
              delivery, database hosting) who process data only on our
              instructions and under strict confidentiality terms.
            </p>
          </div>
          <div className="border-l-2 border-orange-200 pl-4">
            <h4 className="font-semibold text-gray-800 mb-1">Legal Requests</h4>
            <p>
              We may disclose information where required by applicable law,
              court order, or government authority.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: (
      <>
        <p>
          We retain your profile data for as long as your account remains
          active. If you have not engaged with the platform for 24 consecutive
          months and no active hiring process is underway on your behalf, we
          will delete or anonymize your personal data unless retention is
          required by law.
        </p>
        <p className="mt-3">
          You may request deletion of your account and associated data at any
          time by contacting us at{" "}
          <a
            href="mailto:contact@pickyourhire.com"
            className="text-orange-500 hover:text-orange-600 underline underline-offset-2 transition-colors"
          >
            contact@pickyourhire.com
          </a>
          . Requests are processed within 30 business days.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: (
      <>
        <p>
          You have the following rights with respect to your personal data:
        </p>
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          {[
            {
              right: "Access",
              desc: "Request a copy of all personal information we hold about you.",
            },
            {
              right: "Correction",
              desc: "Update or correct inaccurate information through your profile settings or by contacting us.",
            },
            {
              right: "Deletion",
              desc: "Ask us to permanently delete your account and personal data.",
            },
            {
              right: "Portability",
              desc: "Request your profile data in a structured, machine-readable format.",
            },
            {
              right: "Withdrawal",
              desc: "Withdraw consent for specific uses of your data at any time.",
            },
            {
              right: "Objection",
              desc: "Object to your data being shared with specific recruiters or companies.",
            },
          ].map(({ right, desc }) => (
            <div
              key={right}
              className="bg-gray-50 rounded-lg p-4 border border-gray-100"
            >
              <h4 className="font-semibold text-gray-800 text-sm mb-1">
                {right}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4">
          To exercise any of these rights, write to us at{" "}
          <a
            href="mailto:contact@pickyourhire.com"
            className="text-orange-500 hover:text-orange-600 underline underline-offset-2 transition-colors"
          >
            contact@pickyourhire.com
          </a>{" "}
          with the subject line <em>Privacy Request</em>.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Data Security",
    content: (
      <p>
        We implement industry-standard security practices to protect your
        information: encrypted data transmission (TLS), access controls
        restricting who can view candidate data within our team, and secure
        cloud infrastructure for database hosting. While no system is entirely
        free of risk, we take our obligation to protect your data seriously and
        respond promptly to any suspected breach.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies & Analytics",
    content: (
      <>
        <p>
          PickYourHire uses cookies and similar technologies to maintain your
          session, remember your preferences, and understand how the platform is
          used. We may use privacy-respecting analytics tools to track aggregate
          usage patterns. We do not use third-party advertising cookies.
        </p>
        <p className="mt-3">
          You can control cookie behavior through your browser settings.
          Disabling cookies may affect certain platform features, including
          staying signed in.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy periodically as our platform evolves
        or applicable regulations change. When we do, we will revise the
        effective date below and, where the changes are material, notify
        registered users by email. Continued use of PickYourHire after a policy
        update constitutes acceptance of the revised terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    content: (
      <>
        <p>
          For any questions, concerns, or requests related to this Privacy
          Policy or the handling of your personal data, reach us at:
        </p>
        <div className="mt-4 bg-orange-50 border border-orange-100 rounded-xl p-5 space-y-1">
          <p className="font-semibold text-gray-800">PickYourHire</p>
          <p className="text-gray-600">
            <a
              href="mailto:contact@pickyourhire.com"
              className="text-orange-500 hover:text-orange-600 transition-colors"
            >
              contact@pickyourhire.com
            </a>
          </p>
          <p className="text-gray-500 text-sm">
            Monday to Saturday, 10AM to 7PM IST
          </p>
        </div>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Page heading */}
        <div className="mb-14 max-w-2xl">
          <div className="inline-block text-xs font-semibold tracking-widest uppercase text-orange-500 mb-4 border border-orange-200 rounded-full px-3 py-1">
            Legal
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            At PickYourHire, your career information is sensitive. This policy
            explains exactly what we collect, why we collect it, and how it is
            protected.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar navigation */}
          <aside className="lg:w-56 flex-shrink-0">
            <nav className="sticky top-8">
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">
                On this page
              </p>
              <ul className="space-y-1">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="block text-sm text-gray-500 hover:text-orange-500 py-1 transition-colors leading-snug"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main content */}
          <article className="flex-1 min-w-0 space-y-4">
            {sections.map((section, idx) => (
              <section
                key={section.id}
                id={section.id}
                className="group rounded-2xl border border-gray-100 bg-white px-8 py-7 shadow-sm transition-all duration-200 hover:border-orange-200 hover:shadow-[0_4px_24px_rgba(249,115,22,0.08)]"
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-5 pb-5 border-b border-gray-100 group-hover:border-orange-100 transition-colors duration-200">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-orange-50 border border-orange-100 font-mono text-[11px] font-semibold text-orange-400 group-hover:bg-orange-100 group-hover:text-orange-500 transition-colors duration-200">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-base font-bold text-gray-900 tracking-tight">
                    {section.title}
                  </h2>
                </div>
                {/* Card body */}
                <div className="text-gray-600 leading-relaxed space-y-3 text-[15px]">
                  {section.content}
                </div>
              </section>
            ))}

            {/* Closing note */}
            <div className="px-8 py-4 rounded-xl bg-gray-50 border border-gray-100 text-sm text-gray-400">
              PickYourHire is operated from India. This policy is governed by
              applicable Indian data protection law. Last reviewed: May 2026.
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}