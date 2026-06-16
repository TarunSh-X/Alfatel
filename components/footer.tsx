"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, Mail } from "lucide-react"
import { AnimatedLogo } from "./animated-logo"
import { Flag } from "./flag"

const offices = [
  {
    code: "us",
    name: "USA (Registered Office)",
    lines: ["1309 Coffeen Avenue, Ste 1200", "Sheridan, WY 82801", "United States"],
  },
  {
    code: "hk",
    name: "Hong Kong (Asia Pacific)",
    lines: ["RM 603, South China Industrial Building", "Chun Pin Street, Kwai Chung", "Hong Kong SAR, China"],
  },
]

const footerLinks = {
  products: [
    { name: "Wholesale Voice", href: "/products/wholesale-voice" },
    { name: "Wholesale DID", href: "/products/wholesale-did" },
    { name: "Wholesale SMS", href: "/products/wholesale-sms" },
    { name: "SIP Trunking", href: "/products/sip-trunking" },
  ],
  services: [
    { name: "Voice API", href: "/services#voice-api" },
    { name: "Messaging API", href: "/services#messaging-api" },
    { name: "Number Management", href: "/services#number-management" },
    { name: "Developer Docs", href: "/services#developer" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Partners", href: "/about#partners" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "SLA", href: "/sla" },
  ],
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0f2744]">
      <div className="relative z-10">
        {/* Main Footer */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-3 lg:col-span-3">
              <AnimatedLogo size="lg" showText={true} href="/" />
              <p className="mt-5 text-white/70 max-w-sm leading-relaxed">
                Enterprise-grade wholesale voice, DID, SMS, and SIP trunking solutions 
                powering global communications for businesses worldwide.
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href="mailto:info@alfacall.net"
                  className="flex items-center gap-3 text-white/70 hover:text-[#b89850] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#b89850]/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  info@alfacall.net
                </a>
                <a
                  href="tel:+12082447477"
                  className="flex items-center gap-3 text-white/70 hover:text-[#b89850] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#b89850]/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  +1 (208) 244-7477
                </a>
              </div>
            </div>

            {/* Products */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-white mb-5">Products</h3>
              <ul className="space-y-4">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-[#b89850] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-white mb-5">Services</h3>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-[#b89850] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-white mb-5">Company</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-[#b89850] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal + Global Offices */}
            <div className="col-span-2 md:col-span-3 lg:col-span-3">
              <h3 className="font-semibold text-white mb-5">Legal</h3>
              <ul className="space-y-4">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-[#b89850] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="font-semibold text-white mt-8 mb-5">Global Offices</h3>
              <ul className="space-y-6">
                {offices.map((office) => (
                  <li key={office.name} className="flex items-start gap-3 text-white/70">
                    <Flag code={office.code} name={office.name} className="w-6 h-auto rounded-sm shadow-sm mt-1 shrink-0" />
                    <div className="text-sm leading-relaxed">
                      <div className="font-medium text-white">{office.name}</div>
                      {office.lines.map((line) => (
                        <div key={line}>{line}</div>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-white/60 text-sm">
                &copy; {new Date().getFullYear()} AlfaCall. All rights reserved.
              </p>
              
              {/* Social links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/alfacall-limited/?originalSubdomain=hk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-[#b89850] hover:bg-[#b89850]/20 transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/alfacall_limited/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-[#b89850] hover:bg-[#b89850]/20 transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
