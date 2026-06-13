"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, MessageSquare, Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { AnimatedLogo } from "@/components/animated-logo"
import { Flag } from "@/components/flag"

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

const subjects = [
  "General Inquiry",
  "Wholesale Voice",
  "Wholesale DID",
  "Wholesale SMS",
  "SIP Trunking",
  "Partnership",
  "Technical Support",
  "Other",
]

const countryCodes = ["+1", "+44", "+91", "+852", "+61", "+86", "+49", "+33", "+971"]

interface FormState {
  fullName: string
  company: string
  email: string
  countryCode: string
  phone: string
  subject: string
  message: string
  agree: boolean
}

interface FormErrors {
  fullName?: string
  email?: string
  subject?: string
  message?: string
  agree?: string
}

const initialState: FormState = {
  fullName: "",
  company: "",
  email: "",
  countryCode: "+1",
  phone: "",
  subject: "",
  message: "",
  agree: false,
}

const inputClasses =
  "w-full rounded-lg bg-[#0D1F3C] border border-white/10 px-4 py-3 text-white placeholder:text-white/40 transition-all focus:outline-none focus:border-[#b89850] focus:ring-2 focus:ring-[#b89850]/30 focus:shadow-[0_0_18px_rgba(184,152,80,0.25)]"

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): FormErrors => {
    const next: FormErrors = {}
    if (!form.fullName.trim()) next.fullName = "Please enter your full name."
    if (!form.email.trim()) {
      next.email = "Please enter your email address."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address."
    }
    if (!form.subject) next.subject = "Please select a subject."
    if (!form.message.trim()) next.message = "Please enter a message."
    if (!form.agree) next.agree = "You must agree before submitting."
    return next
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length === 0) {
      setSubmitted(true)
    }
  }

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (key in errors) {
      setErrors((prev) => ({ ...prev, [key]: undefined }))
    }
  }

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Contact Us"
          eyebrowIcon={MessageSquare}
          title="Get in Touch"
          highlightLastWord
          description="Reach out to our team for wholesale voice, DID, SMS, and SIP trunking. We respond within 24 hours."
          align="left"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Contact", href: "/contact" },
          ]}
        />

        {/* Two-column contact section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-8 items-stretch">
              {/* LEFT — Contact info panel */}
              <div className="lg:col-span-2 rounded-2xl bg-[#0f2744] p-8 lg:p-10 text-white">
                <AnimatedLogo size="md" showText href="/" />

                <p className="mt-8 text-xl font-semibold text-balance">
                  Let&apos;s connect. Our team responds within 24 hours.
                </p>

                <div className="mt-8 space-y-5">
                  <a
                    href="tel:+12082447477"
                    className="flex items-center gap-4 text-white/80 hover:text-[#b89850] transition-colors group"
                  >
                    <span className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#b89850]/20 transition-colors">
                      <Phone className="w-5 h-5" />
                    </span>
                    +1 (208) 244-7477
                  </a>
                  <a
                    href="mailto:info@alfacall.net"
                    className="flex items-center gap-4 text-white/80 hover:text-[#b89850] transition-colors group"
                  >
                    <span className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#b89850]/20 transition-colors">
                      <Mail className="w-5 h-5" />
                    </span>
                    info@alfacall.net
                  </a>
                </div>

                {/* Office locations */}
                <div className="mt-10">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-[#b89850]">
                    Office Locations
                  </h2>
                  <div className="mt-5 space-y-6">
                    {offices.map((office) => (
                      <div key={office.name} className="flex items-start gap-4">
                        <span className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                          <MapPin className="w-5 h-5 text-[#b89850]" />
                        </span>
                        <div className="text-sm leading-relaxed text-white/80">
                          <div className="font-medium text-white flex items-center gap-2">
                            <Flag code={office.code} className="w-5 h-auto rounded-sm shadow-sm" />
                            {office.name}
                          </div>
                          {office.lines.map((line) => (
                            <div key={line}>{line}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social */}
                <div className="mt-10 flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/company/alfacall-limited/?originalSubdomain=hk"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center text-white/80 hover:text-[#b89850] hover:bg-[#b89850]/20 transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/alfacall_limited/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center text-white/80 hover:text-[#b89850] hover:bg-[#b89850]/20 transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* RIGHT — Contact form */}
              <div className="lg:col-span-3 min-w-0 rounded-2xl bg-[#13294d] p-8 lg:p-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center h-full min-h-[28rem]"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center mb-6">
                      <Check className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Thank you!</h2>
                    <p className="mt-3 text-white/70 max-w-md">
                      We&apos;ll be in touch within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>
                    <p className="mt-2 text-white/60">
                      Fill in the details below and we&apos;ll get back to you shortly.
                    </p>

                    <div className="mt-8 grid sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-white/80 mb-1.5">
                          Full Name <span className="text-[#b89850]">*</span>
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          value={form.fullName}
                          onChange={(e) => update("fullName", e.target.value)}
                          className={inputClasses}
                          placeholder="Jane Doe"
                          aria-invalid={!!errors.fullName}
                        />
                        {errors.fullName && <p className="mt-1.5 text-sm text-red-400">{errors.fullName}</p>}
                      </div>

                      {/* Company */}
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-1.5">
                          Company Name
                        </label>
                        <input
                          id="company"
                          type="text"
                          value={form.company}
                          onChange={(e) => update("company", e.target.value)}
                          className={inputClasses}
                          placeholder="Acme Inc."
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1.5">
                          Email Address <span className="text-[#b89850]">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          className={inputClasses}
                          placeholder="you@company.com"
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && <p className="mt-1.5 text-sm text-red-400">{errors.email}</p>}
                      </div>

                      {/* Phone */}
                      <div className="min-w-0">
                        <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1.5">
                          Phone Number
                        </label>
                        <div className="flex gap-2">
                          <select
                            aria-label="Country code"
                            value={form.countryCode}
                            onChange={(e) => update("countryCode", e.target.value)}
                            className="w-24 shrink-0 rounded-lg bg-[#0D1F3C] border border-white/10 px-3 py-3 text-white transition-all focus:outline-none focus:border-[#b89850] focus:ring-2 focus:ring-[#b89850]/30"
                          >
                            {countryCodes.map((code) => (
                              <option key={code} value={code} className="bg-[#0D1F3C]">
                                {code}
                              </option>
                            ))}
                          </select>
                          <input
                            id="phone"
                            type="tel"
                            value={form.phone}
                            onChange={(e) => update("phone", e.target.value)}
                            className={`${inputClasses} flex-1 min-w-0`}
                            placeholder="(208) 244-7477"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="mt-5">
                      <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-1.5">
                        Subject <span className="text-[#b89850]">*</span>
                      </label>
                      <select
                        id="subject"
                        value={form.subject}
                        onChange={(e) => update("subject", e.target.value)}
                        className={inputClasses}
                        aria-invalid={!!errors.subject}
                      >
                        <option value="" className="bg-[#0D1F3C]">
                          Select a subject
                        </option>
                        {subjects.map((s) => (
                          <option key={s} value={s} className="bg-[#0D1F3C]">
                            {s}
                          </option>
                        ))}
                      </select>
                      {errors.subject && <p className="mt-1.5 text-sm text-red-400">{errors.subject}</p>}
                    </div>

                    {/* Message */}
                    <div className="mt-5">
                      <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1.5">
                        Message <span className="text-[#b89850]">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        className={`${inputClasses} resize-y`}
                        placeholder="Tell us how we can help..."
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && <p className="mt-1.5 text-sm text-red-400">{errors.message}</p>}
                    </div>

                    {/* Agreement */}
                    <div className="mt-5">
                      <label htmlFor="agree" className="flex items-start gap-3 text-sm text-white/70 cursor-pointer">
                        <input
                          id="agree"
                          type="checkbox"
                          checked={form.agree}
                          onChange={(e) => update("agree", e.target.checked)}
                          className="mt-0.5 h-4 w-4 rounded border-white/20 bg-[#0D1F3C] text-[#b89850] focus:ring-[#b89850]/40 accent-[#b89850]"
                          aria-invalid={!!errors.agree}
                        />
                        <span>
                          I agree to the{" "}
                          <a href="/privacy" className="text-[#b89850] hover:underline">
                            Privacy Policy
                          </a>{" "}
                          and{" "}
                          <a href="/terms" className="text-[#b89850] hover:underline">
                            Terms of Service
                          </a>
                          .
                        </span>
                      </label>
                      {errors.agree && <p className="mt-1.5 text-sm text-red-400">{errors.agree}</p>}
                    </div>

                    <button
                      type="submit"
                      className="mt-8 w-full rounded-lg bg-[#b89850] px-6 py-3.5 font-bold text-[#0f2744] hover:bg-[#b89850]/90 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
