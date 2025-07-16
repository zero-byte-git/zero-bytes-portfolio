"use client";

import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Facebook,
  Star,
  Mail,
  InstagramIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10">
        {/* Logo & CTA */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span>Zero Bytes</span>
          </h2>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="#">How it works</Link></li>
            <li><Link href="#">Case Studies</Link></li>
            <li><Link href="#">Features</Link></li>
            <li><Link href="#">Comparison</Link></li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="#">Team</Link></li>
            <li><Link href="#">Reviews</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li className="flex items-center gap-1">
              <Mail size={14} className="text-blue-400" />
              <a href="mailto:support@company.io" className="text-blue-400">
                support@company.io
              </a>
            </li>
          </ul>
        </div>

        {/* Resources + Social */}
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <Linkedin size={16} /> <Link href="#">LinkedIn</Link>
            </li>
            <li className="flex items-center gap-2">
              <Twitter size={16} /> <Link href="#">Twitter</Link>
            </li>
            <li className="flex items-center gap-2">
              <Facebook size={16} /> <Link href="#">Facebook</Link>
            </li>
            <li className="flex items-center gap-2">
              <InstagramIcon size={16} /> <Link href="#">Instagram</Link>
            </li>
            <li>
              <Link href="#">Trustpilot</Link>
              <p className="flex items-center text-green-400 text-sm mt-1 gap-1">
                <Star size={14} className="fill-green-400 text-green-400" />
                <Star size={14} className="fill-green-400 text-green-400" />
                <Star size={14} className="fill-green-400 text-green-400" />
                <Star size={14} className="fill-green-400 text-green-400" />
                <Star size={14} className="fill-green-400 text-green-400" />
                <span className="ml-2">Excellent</span>
              </p>
              <p className="text-gray-400 text-xs">Based on 84+ reviews</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="space-x-4">
          <Link href="#">Terms of Service</Link>
          <Link href="#">Privacy Policy</Link>
        </div>
        <p>© 2025 YourCompany, Inc. All rights reserved.</p>
      </div>

      <p className="text-xs text-center mt-6 text-gray-500 max-w-4xl mx-auto">
        Company.io is an independent service and has no affiliation with any external service unless explicitly mentioned.
        By using our website, you agree to our Terms of Service and Privacy Policy.
      </p>
    </footer>
  );
}
