export const metadata = {
  title: "Terms of Service | PickYourHire",
  description:
    "The terms and conditions governing your use of PickYourHire's recruitment and talent matching platform.",
};

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: (
      <>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to
          and use of the PickYourHire website, platform, and related services
          (collectively, the &ldquo;Platform&rdquo;), operated by
          PickYourHire (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
          &ldquo;our&rdquo;).
        </p>
        <p className="mt-3">
          By creating an account, submitting your profile, browsing job
          listings, referring a candidate, or otherwise using the Platform,
          you agree to be bound by these Terms. If you do not agree, please
          do not use the Platform.
        </p>
      </>
    ),
  },
  {
    id: "who-can-use",
    title: "Who Can Use PickYourHire",
    content: (
      <>
        <p>
          PickYourHire connects job seekers, referrers, and hiring companies.
          To use the Platform, you confirm that:
        </p>
        <ul className="mt-4 space-y-2 list-none">
          {[
            "You are at least 18 years of age and legally capable of entering into a binding agreement.",
            "All information you provide — including profile details, work history, and identity documents — is accurate, current, and not misleading.",
            "You are using the Platform for genuine recruitment, job-seeking, or referral purposes, and not for any unlawful or fraudulent activity.",
            "If you register on behalf of a company, you have the authority to bind that company to these Terms.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-gray-600 leading-relaxed">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-400" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "platform-roles",
    title: "Candidates, Referrers & Hiring Companies",
    content: (
      <>
        <p>
          PickYourHire serves three categories of users, each with distinct
          responsibilities:
        </p>
        <div className="mt-4 space-y-4">
          <div className="border-l-2 border-orange-200 pl-4">
            <h4 className="font-semibold text-gray-800 mb-1">Candidates</h4>
            <p>
              By submitting your profile, you authorize PickYourHire to share
              your details with prospective hiring companies for the purpose
              of evaluating you for relevant roles. You are responsible for
              keeping your profile, contact details, and availability status
              up to date.
            </p>
          </div>
          <div className="border-l-2 border-orange-200 pl-4">
            <h4 className="font-semibold text-gray-800 mb-1">
              Referrers
            </h4>
            <p>
              If you refer a candidate through our Referral Program, you
              confirm that you have the candidate&apos;s consent to share
              their details with us. Referral rewards, where applicable, are
              paid only after the referred candidate is successfully placed
              and has completed any qualifying period defined in the
              applicable engagement, and are subject to verification at our
              discretion.
            </p>
          </div>
          <div className="border-l-2 border-orange-200 pl-4">
            <h4 className="font-semibold text-gray-800 mb-1">
              Hiring Companies
            </h4>
            <p>
              Companies engaging PickYourHire for hiring or staffing services
              agree to use candidate information shared with them solely for
              evaluating and recruiting for the specific role(s) discussed,
              and not to redistribute candidate data to unrelated third
              parties. Commercial terms, fees, and any replacement guarantee
              are governed by the separate engagement agreement signed with
              PickYourHire.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "account-responsibilities",
    title: "Account Responsibilities",
    content: (
      <>
        <p>When you create an account or submit your profile, you agree to:</p>
        <ul className="mt-4 space-y-2 list-none">
          {[
            "Provide accurate and truthful information, including your skills, experience, compensation expectations, and notice period.",
            "Keep your login credentials confidential and notify us immediately of any unauthorized use of your account.",
            "Not impersonate any person or misrepresent your affiliation with any company.",
            "Not submit another individual's personal or professional details without their knowledge and consent.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-gray-600 leading-relaxed">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-400" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4">
          We reserve the right to suspend or terminate accounts that contain
          false information, violate these Terms, or are used in a manner
          that harms the integrity of the Platform.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    content: (
      <>
        <p>You agree not to use the Platform to:</p>
        <ul className="mt-4 space-y-2 list-none">
          {[
            "Post or transmit false, misleading, defamatory, or fraudulent content.",
            "Scrape, harvest, or extract data from the Platform using automated means without our prior written consent.",
            "Attempt to gain unauthorized access to any part of the Platform, other users' accounts, or our systems.",
            "Use candidate or recruiter contact information obtained through the Platform for unsolicited marketing or spam.",
            "Upload any content that infringes the intellectual property or privacy rights of any third party.",
            "Interfere with or disrupt the security, integrity, or performance of the Platform.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-gray-600 leading-relaxed">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-400" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "no-employment-guarantee",
    title: "No Guarantee of Employment or Hire",
    content: (
      <p>
        PickYourHire facilitates introductions between candidates and hiring
        companies through referrals, profile matching, and recruitment
        support. We do not guarantee that any candidate will receive a job
        offer, that any referral will result in a placement, or that any
        hiring company will find a suitable candidate. Final hiring
        decisions, offer terms, and employment relationships are solely
        between the candidate and the hiring company; PickYourHire is not a
        party to that employment relationship unless explicitly stated in a
        separate written agreement.
      </p>
    ),
  },
  {
    id: "fees-payments",
    title: "Fees & Payments",
    content: (
      <>
        <p>
          Job seekers and referrers do not pay any fee to use the core
          PickYourHire platform. Fees charged to hiring companies for
          recruitment, staffing, or talent-pool access are governed by the
          separate commercial agreement signed at the time of engagement,
          including applicable replacement guarantee terms.
        </p>
        <p className="mt-3">
          Where referral rewards are payable, the amount, eligibility
          criteria, and payout timeline will be communicated through the
          Referral Program and are subject to change with notice.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: (
      <p>
        The PickYourHire name, logo, website design, and underlying
        technology are the property of PickYourHire and may not be copied,
        reproduced, or used without our prior written permission. Content you
        submit (such as your profile, resume, or referral details) remains
        yours, but by submitting it you grant PickYourHire a limited,
        non-exclusive license to use, store, and share that content with
        prospective employers or referral partners for the purpose of
        operating the Platform.
      </p>
    ),
  },
  {
    id: "third-party-links",
    title: "Third-Party Links & Services",
    content: (
      <p>
        The Platform may contain links to third-party websites or services
        (such as WhatsApp, LinkedIn, or Instagram) that are not owned or
        controlled by PickYourHire. We are not responsible for the content,
        privacy practices, or terms of any third-party service, and your
        interactions with them are governed by their own terms and policies.
      </p>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    content: (
      <p>
        The Platform is provided on an &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; basis. While we strive for accuracy, we do not
        warrant that job listings, candidate information, or other content on
        the Platform will be error-free, complete, or uninterrupted. We make
        no representations regarding the suitability, qualifications, or
        conduct of any candidate, referrer, or hiring company, and any
        engagement between users is undertaken at their own discretion and
        risk.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: (
      <p>
        To the fullest extent permitted by applicable law, PickYourHire and
        its team shall not be liable for any indirect, incidental, special,
        or consequential damages arising out of or related to your use of the
        Platform, including but not limited to loss of employment
        opportunities, loss of candidates, lost profits, or reputational
        harm, even if we have been advised of the possibility of such
        damages. Our total liability for any claim arising from these Terms
        or your use of the Platform shall not exceed the amount, if any, paid
        by you to PickYourHire in the twelve months preceding the claim.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Suspension & Termination",
    content: (
      <p>
        We may suspend or terminate your access to the Platform at any time,
        with or without notice, if we believe you have violated these Terms,
        provided false information, or engaged in conduct that we determine,
        in our sole discretion, to be harmful to PickYourHire, other users, or
        third parties. You may also stop using the Platform and request
        deletion of your account at any time by contacting us.
      </p>
    ),
  },
  {
    id: "changes-to-terms",
    title: "Changes to These Terms",
    content: (
      <p>
        We may revise these Terms from time to time as our Platform and
        services evolve. When we do, we will update the effective date below
        and, where changes are material, notify registered users by email.
        Continued use of PickYourHire after an update constitutes acceptance
        of the revised Terms.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law & Disputes",
    content: (
      <p>
        These Terms are governed by and construed in accordance with the laws
        of India. Any disputes arising out of or relating to these Terms or
        your use of the Platform shall be subject to the exclusive
        jurisdiction of the courts located in India, unless otherwise
        required by applicable law.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    content: (
      <>
        <p>
          For any questions or concerns regarding these Terms of Service,
          reach us at:
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

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Page heading */}
        <div className="mb-14 max-w-2xl">
          <div className="inline-block text-xs font-semibold tracking-widest uppercase text-orange-500 mb-4 border border-orange-200 rounded-full px-3 py-1">
            Legal
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            These Terms outline what you can expect from PickYourHire, and
            what we expect from you, as a candidate, referrer, or hiring
            company using our platform.
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
              PickYourHire is operated from India. These Terms are governed by
              applicable Indian law. Last reviewed: May 2026.
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
