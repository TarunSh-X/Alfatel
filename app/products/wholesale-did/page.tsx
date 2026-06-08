// =============================================================================
// app/products/wholesale-did/page.tsx
//
// SEO-optimised Wholesale DID product page for Alfacall.
// Tech stack: Next.js 14 App Router · Tailwind CSS · Framer Motion · shadcn/ui
//
// SEO targets:
//   Primary   → "wholesale DID numbers"
//   Secondary → "virtual phone numbers", "buy DID numbers", "DID number provider"
//
// Sections:
//   1. Hero           – H1, keyword-rich copy, dual CTA
//   2. Number types   – four number category cards
//   3. Stats bar      – social-proof numbers
//   4. Features grid  – feature cards
//   5. API preview    – code-style quickstart (no syntax highlighting needed)
//   6. Use cases      – three typical buyer personas
//   7. FAQ            – accordion Q&A (JSON-LD FAQPage schema)
//   8. CTA banner
// =============================================================================

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Script from "next/script"
import {
  Hash, Globe, Zap, Settings, Shield, Clock,
  Check, ArrowRight, ChevronDown, ChevronUp,
  Code2, Building2, Headphones, Smartphone,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useState } from "react"

// ─── Data ────────────────────────────────────────────────────────────────────

const numberTypes = [
  {
    type: "Local Numbers",
    countries: "100+",
    description: "Geographic numbers that give your business a local presence in any city or region.",
    icon: Globe,
  },
  {
    type: "Toll-Free Numbers",
    countries: "50+",
    description: "Freephone numbers that eliminate call cost for your customers — ideal for support lines.",
    icon: Headphones,
  },
  {
    type: "Mobile Numbers",
    countries: "40+",
    description: "Mobile DIDs with SMS capability for two-way messaging and voice on the same number.",
    icon: Smartphone,
  },
  {
    type: "National Numbers",
    countries: "30+",
    description: "Non-geographic numbers with country-wide reach and a single memorable prefix.",
    icon: Building2,
  },
]

const stats = [
  { value: "100+", label: "Countries available" },
  { value: "10M+", label: "Numbers in inventory" },
  { value: "< 5 sec", label: "Provisioning time" },
  { value: "99.99%", label: "Routing uptime" },
]

const features = [
  {
    icon: Globe,
    title: "100+ Country Coverage",
    description:
      "Local, mobile, and toll-free numbers from over 100 countries, updated daily as new ranges become available.",
  },
  {
    icon: Zap,
    title: "Instant API Provisioning",
    description:
      "Search, reserve, and activate numbers in under five seconds via our REST API or web portal — no manual steps.",
  },
  {
    icon: Settings,
    title: "Full API Management",
    description:
      "Programmatically configure call forwarding, voice/SMS/fax capabilities, and SIP routing per number.",
  },
  {
    icon: Shield,
    title: "Number Portability (LNP)",
    description:
      "Port existing numbers to Alfacall with guided LNP support and minimal service disruption.",
  },
  {
    icon: Clock,
    title: "99.99% Routing Uptime",
    description:
      "Redundant routing clusters with automatic failover ensure your DIDs are always reachable.",
  },
  {
    icon: Hash,
    title: "Multi-Capability DIDs",
    description:
      "Enable voice, inbound SMS, and T.38 fax on the same number — mix capabilities per number as required.",
  },
  {
    icon: Code2,
    title: "Webhooks & Events",
    description:
      "Receive real-time HTTP webhooks for inbound calls, SMS, and number status changes in your own systems.",
  },
  {
    icon: Building2,
    title: "Sub-Account Reseller Model",
    description:
      "White-label DID provisioning with per-reseller sub-accounts, markup controls, and branded portals.",
  },
  {
    icon: Globe,
    title: "E.164 Compliant",
    description:
      "All numbers are fully E.164 formatted and validated at provisioning time, eliminating format errors.",
  },
]

const useCases = [
  {
    persona: "Telecom Resellers",
    heading: "Resell DID Numbers at Markup",
    description:
      "Build your own number service on top of Alfacall's inventory. Sub-account management, custom rate decks, and branded portals included.",
    bullets: [
      "White-label number portal",
      "Per-reseller markup control",
      "Bulk order management",
      "API access for automation",
    ],
  },
  {
    persona: "SaaS & UCaaS Platforms",
    heading: "Embed Virtual Numbers in Your Product",
    description:
      "Provision numbers programmatically inside your own application. No manual ordering, no CSV uploads — pure API.",
    bullets: [
      "REST API + webhooks",
      "Per-user number assignment",
      "Inbound call routing rules",
      "Number recycling & lifecycle",
    ],
  },
  {
    persona: "Enterprise Contact Centres",
    heading: "Local Presence in Every Market",
    description:
      "Display a local number to customers in each region you operate in — improving answer rates and reducing call costs.",
    bullets: [
      "City-level local numbers",
      "Call recording integration",
      "CNAM / caller name delivery",
      "Centralised billing",
    ],
  },
]

const faqs = [
  {
    q: "What is a wholesale DID number?",
    a: "A DID (Direct Inward Dialing) number is a virtual telephone number that forwards incoming calls to a pre-configured destination — a SIP URI, PSTN number, or PBX extension. Wholesale DID means purchasing these numbers in bulk at carrier rates, typically for resale or large-scale deployment.",
  },
  {
    q: "How quickly can numbers be provisioned?",
    a: "Most numbers in our inventory are available instantly via API or portal — provisioning completes in under five seconds. For certain countries or specific ranges that require regulatory filings, provisioning may take 1–3 business days.",
  },
  {
    q: "Can I port my existing numbers to Alfacall?",
    a: "Yes. We support Local Number Portability (LNP) in most major markets. Our porting team manages the process end-to-end; typical porting time is 5–10 business days depending on the losing carrier.",
  },
  {
    q: "Do the numbers support inbound SMS as well as voice?",
    a: "Mobile-type DIDs and many local numbers support inbound SMS. You can enable or disable SMS capability per number via the portal or API. Outbound SMS from DID numbers requires our Wholesale SMS product.",
  },
  {
    q: "Is there a minimum order quantity?",
    a: "No minimum. You can provision a single number or thousands in a single API call. Volume pricing tiers apply automatically based on the total active numbers on your account.",
  },
  {
    q: "What happens to calls that reach a DID when my SIP endpoint is unreachable?",
    a: "You can configure a failover destination (PSTN number or secondary SIP URI) per number. If the primary destination is unreachable, calls are automatically rerouted to the failover target.",
  },
]

// ─── JSON-LD schema ───────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Wholesale DID Numbers",
      description:
        "Virtual phone numbers from 100+ countries with instant API provisioning, number portability, and multi-capability support.",
      brand: { "@type": "Brand", name: "Alfacall" },
      url: "https://alfacall.net/products/wholesale-did",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-foreground pr-4">{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 text-muted-foreground leading-relaxed border-t border-border pt-4">
          {a}
        </div>
      )}
    </div>
  )
}

// ─── Page component ───────────────────────────────────────────────────────────

export default function WholesaleDIDPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <Script
        id="wholesale-did-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main>
        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section
          className="pt-32 pb-24 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)",
          }}
          aria-labelledby="did-hero-heading"
        >
          <div className="absolute inset-0 opacity-10" aria-hidden>
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="did-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#did-grid)" />
            </svg>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6"
              >
                <Hash className="w-4 h-4" aria-hidden />
                Wholesale DID Numbers
              </motion.div>

              <motion.h1
                id="did-hero-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl lg:text-6xl font-bold text-white text-balance"
              >
                Wholesale DID Numbers from 100+ Countries
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-xl text-white/75 max-w-2xl"
              >
                Provision local, toll-free, and mobile virtual phone numbers
                instantly via API. Full lifecycle management, number portability,
                and webhook-driven automation — built for resellers and platforms.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  asChild
                  className="bg-white text-primary hover:bg-white/90 font-semibold"
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/contact">View Coverage Map</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 2. NUMBER TYPES ─────────────────────────────────────────────── */}
        <section className="py-24 bg-background" aria-labelledby="number-types-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2
                id="number-types-heading"
                className="text-3xl lg:text-4xl font-bold text-foreground"
              >
                Every DID Number Type, One Platform
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                One account, one API, four number types — manage them all from a
                single dashboard.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {numberTypes.map((item, index) => (
                <motion.div
                  key={item.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-6 h-6 text-primary" aria-hidden />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {item.countries}
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.type}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. STATS BAR ────────────────────────────────────────────────── */}
        <section className="bg-primary/5 border-y border-border py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-primary">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. FEATURES GRID ────────────────────────────────────────────── */}
        <section className="py-24 bg-secondary/50" aria-labelledby="did-features-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2
                id="did-features-heading"
                className="text-3xl lg:text-4xl font-bold text-foreground"
              >
                Complete DID Management Platform
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to provision, route, and manage phone numbers
                at any scale.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. USE CASES ────────────────────────────────────────────────── */}
        <section className="py-24 bg-background" aria-labelledby="use-cases-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2
                id="use-cases-heading"
                className="text-3xl lg:text-4xl font-bold text-foreground"
              >
                Built for Resellers, Platforms & Enterprises
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Alfacall DID numbers power diverse business models — from telecom
                resellers to SaaS platforms.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((uc, index) => (
                <motion.div
                  key={uc.persona}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-card border border-border"
                >
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    {uc.persona}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {uc.heading}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {uc.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {uc.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" aria-hidden />
                        <span className="text-foreground">{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. FAQ ──────────────────────────────────────────────────────── */}
        <section className="py-24 bg-secondary/50" aria-labelledby="did-faq-heading">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id="did-faq-heading"
                className="text-3xl lg:text-4xl font-bold text-foreground"
              >
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Common questions about Alfacall wholesale DID number services.
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. CTA BANNER ───────────────────────────────────────────────── */}
        <section
          className="py-20"
          style={{
            background:
              "linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)",
          }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to expand your number inventory?
            </h2>
            <p className="mt-4 text-xl text-white/75 max-w-2xl mx-auto">
              Get instant access to 10 million+ DID numbers worldwide with
              flexible pricing and full API support.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                asChild
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" aria-hidden />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
