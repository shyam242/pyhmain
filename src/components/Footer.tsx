import Link from "next/link";
import image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-gray-900 mb-2">
              PickYourHire
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Connecting top tech talent with innovative companies worldwide.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-4">Product</p>
            <ul className="space-y-3">
              {[
                { label: "Browse Jobs", href: "/jobs" },
                { label: "Services", href: "/services" },
                { label: "Referral Program", href: "/referrer" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-4">Company</p>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-4">Contact</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@pickyourhire.com"
                  className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
                >
                  contact@pickyourhire.com
                </a>
              </li>
              <li className="text-sm text-gray-500">
                Monday to Saturday, 10AM - 7PM IST
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-400">
            © 2026 PickYourHire. All rights reserved.
          </p>
          <Link
            href="/privacy-policy"
            className="text-sm text-gray-400 hover:text-orange-500 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}