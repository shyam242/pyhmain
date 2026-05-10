import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-[#050B2C] py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4 font-bold text-[#050B2C]">
              <span>PickYourHire</span>
            </div>
            <p className="text-sm text-gray-600">
              Connecting top tech talent with innovative companies worldwide.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-[#050B2C] mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/jobs" className="text-gray-600 hover:text-[#D9782D]">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-600 hover:text-[#D9782D]">
                  Services
                </Link>
              </li>
              <li>
                <a href="https://www.your-referrer-platform.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#D9782D]">
                  Referral Program
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-[#050B2C] mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#D9782D]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#D9782D]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-[#050B2C] mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-600">
                <a href="mailto:contact@pickyourhire.com" className="text-gray-600 hover:text-[#D9782D]">
                  contact@pickyourhire.com
                </a>
              </li>
              <li className="text-gray-600">Monday to Saturday, 10AM - 7PM IST</li>
              <li className="pt-2">
                <div className="flex gap-2">
                  <a href="https://www.linkedin.com/company/pickyourhire/" className="text-gray-600 hover:text-[#D9782D]">
                    LinkedIn
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; 2026 PickYourHire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
