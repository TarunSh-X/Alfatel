// =============================================================================
// app/products/wholesale-sms/page.tsx
//
// SEO-optimised Wholesale SMS product page for Alfacall.
// Tech stack: Next.js 14 App Router · Tailwind CSS · Framer Motion · shadcn/ui
//
// SEO targets:
//   Primary   → "wholesale SMS API"
//   Secondary → "bulk SMS", "A2P SMS", "SMS gateway", "international SMS"
//
// Sections:
//   1. Hero           – H1, keyword-rich copy, dual CTA
//   2. Stats bar      – delivery rate, countries, throughput, uptime
//   3. Features grid  – nine feature cards
//   4. Use cases      – three messaging categories with bullet examples
//   5. Pricing note   – per-message model + compliance callouts
//   6. Sender ID types – longcode, shortcode, alphanumeric
//   7. FAQ            – accordion Q&A (FAQPage schema)
//   8. CTA banner
// =============================================================================

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Script from "next/script"
import {
  MessageSquare, Globe, Zap, BarChart3, Shield,
  ArrowLeftRight, Check, ArrowRight, ChevronDown, ChevronUp,
  Bell, Code2, Lock,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useState } from "react"

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "99%+", label: "Delivery rate" },
  { value: "200+", label: "Countries reached" },
  { value: "50K/s", label: "Peak throughput" },
  { value: "99.99%", label: "Platform uptime" },
]

const features = [
  {
    icon: Globe,
    title: "Global A2P Reach",
    description:
      "Direct connections to 200+ countries via Tier-1 SMSC routes — no grey routes, no unexplained delivery failures.",
  },
  {
    icon: Zap,
    title: "High Throughput",
    description:
      "Process up to 50,000 messages per second with automatic load balancing across our distributed SMSC clusters.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Delivery Reports",
    description:
      "Per-message DLRs pushed to your webhook endpoint within seconds, plus an analytics dashboard for aggregate stats.",
  },
  {
    icon: Shield,
    title: "Compliance Automation",
    description:
      "Built-in opt-out management, DND list filtering, CTIA / GDPR adherence, and automatic local regulation checks.",
  },
  {
    icon: ArrowLeftRight,
    title: "Two-Way Messaging",
    description:
      "Full inbound SMS support with configurable webhook delivery, enabling conversational flows and keyword responses.",
  },
  {
    icon: MessageSquare,
    title: "Shortcode & Longcode",
    description:
      "Dedicated and shared shortcodes in major markets; longcodes and alphanumeric sender IDs for international sends.",
  },
  {
    icon: Bell,
    title: "Message Scheduling",
    description:
      "Queue campaigns for later delivery and respect local time zones — prevent off-hours sends automatically.",
  },
  {
    icon: Code2,
    title: "Simple REST API",
    description:
      "Send a single message or a million with one POST request. SDKs for Python, Node.js, PHP, and Java.",
  },
  {
    icon: Lock,
    title: "Number Masking",
    description:
      "Keep sender numbers private in two-party conversations — ideal for ride-share, delivery, and marketplace apps.",
  },
]

const useCases = [
  {
    title: "Transactional SMS",
    description:
      "Time-critical messages that depend on high deliverability and sub-second latency.",
    examples: [
      "Two-factor authentication (OTP)",
      "Order and shipment confirmations",
      "Appointment reminders",
      "Account security alerts",
    ],
  },
  {
    title: "Marketing Campaigns",
    description:
      "Promotional messaging with audience targeting, scheduling, and conversion analytics.",
    examples: [
      "Flash sale announcements",
      "Loyalty program rewards",
      "Product launch notifications",
      "Re-engagement campaigns",
    ],
  },
  {
    title: "Conversational SMS",
    description:
      "Two-way threads that let customers reply and interact with your systems.",
    examples: [
      "Customer support triage",
      "Survey and NPS collection",
      "Chatbot-driven flows",
      "Delivery preference updates",
    ],
  },
]

const senderTypes = [
  {
    name: "Alphanumeric Sender ID",
    description:
      "Branded sender name (up to 11 characters) displayed instead of a phone number. Best for one-way notifications in markets that support it.",
    badge: "Best for notifications",
  },
  {
    name: "Dedicated Longcode",
    description:
      "A standard local phone number assigned exclusively to your account. Supports inbound replies and is required for P2P-style conversations.",
    badge: "Best for conversations",
  },
  {
    name: "Dedicated Shortcode",
    description:
      "5–6 digit number for high-volume, high-trust messaging in the US & Canada. Required for most marketing use cases in North America.",
    badge: "Best for high volume",
  },
]

const faqs = [
  {
    q: "What is wholesale SMS?",
    a: "Wholesale SMS means purchasing SMS message delivery capacity directly from a carrier or aggregator at bulk per-message rates, typically for resale or large-scale A2P (application-to-person) messaging. Alfacall connects directly to Tier-1 SMSCs worldwide, allowing you to send messages at competitive rates without grey routes.",
  },
  {
    q: "What delivery rates can I expect?",
    a: "On Tier-1 routes we consistently achieve 99%+ delivery rates. Rates for some emerging markets may be lower due to local network conditions. You can view per-country delivery statistics in your dashboard at any time.",
  },
  {
    q: "Does Alfacall support two-way SMS?",
    a: "Yes. Inbound SMS on longcodes and shortcodes is fully supported. You configure a webhook URL per sender, and we POST the inbound message payload to your endpoint within seconds of receipt.",
  },
  {
    q: "How does opt-out management work?",
    a: "Alfacall automatically processes STOP / UNSUBSCRIBE keywords and suppresses future sends to that number. The suppression list is available via API so you can sync it with your own CRM or marketing platform.",
  },
  {
    q: "Can I send from a branded alphanumeric sender ID?",
    a: "Yes. Alphanumeric sender IDs are supported in most countries in Europe, the Middle East, and Asia Pacific. The US does not permit alphanumeric sender IDs for A2P — we will advise on the correct sender type per destination.",
  },
  {
    q: "What is the pricing model?",
    a: "Alfacall SMS is billed per outbound message segment (160 characters for standard GSM-7, 153 characters for multi-part). Inbound messages on longcodes and shortcodes are also billed per message. Volume tiers are applied automatically. Contact us for a full rate deck.",
  },
]

// ─── JSON-LD schema ───────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Wholesale SMS API",
      description:
        "Bulk SMS delivery to 200+ countries with 99% delivery rates, two-way messaging, shortcode support, and compliance automation.",
      brand: { "@type": "Brand", name: "Alfacall" },
      url: "https://alfacall.net/products/wholesale-sms",
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

export default function WholesaleSMSPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <Script
        id="wholesale-sms-schema"
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
          aria-labelledby="sms-hero-heading"
        >
          <div className="absolute inset-0 opacity-10" aria-hidden>
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="sms-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#sms-grid)" />
            </svg>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6"
              >
                <MessageSquare className="w-4 h-4" aria-hidden />
                Wholesale SMS API
              </motion.div>

              <motion.h1
                id="sms-hero-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl lg:text-6xl font-bold text-white text-balance"
              >
                Wholesale SMS Delivery to 200+ Countries
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-xl text-white/75 max-w-2xl"
              >
                Send transactional, marketing, and conversational SMS at scale
                via a single REST API. 99%+ delivery rates, real-time DLRs, full
                compliance tooling, and two-way messaging included.
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
                  <Link href="/contact">View Pricing</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 2. STATS BAR ────────────────────────────────────────────────── */}
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

        {/* ── 3. FEATURES GRID ────────────────────────────────────────────── */}
        <section className="py-24 bg-background" aria-labelledby="sms-features-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2
                id="sms-features-heading"
                className="text-3xl lg:text-4xl font-bold text-foreground"
              >
                Enterprise SMS Infrastructure
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to send messages at any volume with
                confidence.
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

        {/* ── 4. USE CASES ────────────────────────────────────────────────── */}
        <section className="py-24 bg-secondary/50" aria-labelledby="sms-use-cases-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2
                id="sms-use-cases-heading"
                className="text-3xl lg:text-4xl font-bold text-foreground"
              >
                Built for Every SMS Use Case
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From OTP delivery to full marketing campaigns, Alfacall SMS
                handles it all on one platform.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((uc, index) => (
                <motion.div
                  key={uc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-card border border-border"
                >
                  <h3 className="text-xl font-semibold text-foreground">
                    {uc.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {uc.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {uc.examples.map((ex) => (
                      <li key={ex} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" aria-hidden />
                        <span className="text-foreground">{ex}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. SENDER ID TYPES ──────────────────────────────────────────── */}
        <section className="py-24 bg-background" aria-labelledby="sender-types-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2
                id="sender-types-heading"
                className="text-3xl lg:text-4xl font-bold text-foreground"
              >
                Choose the Right Sender ID for Your Market
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Alfacall supports all major sender ID formats — we'll advise on
                the best option per destination.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {senderTypes.map((st, index) => (
                <motion.div
                  key={st.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-card border border-border"
                >
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                    {st.badge}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {st.name}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {st.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. FAQ ──────────────────────────────────────────────────────── */}
        <section className="py-24 bg-secondary/50" aria-labelledby="sms-faq-heading">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id="sms-faq-heading"
                className="text-3xl lg:text-4xl font-bold text-foreground"
              >
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Common questions about Alfacall wholesale SMS services.
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
              Start sending SMS today
            </h2>
            <p className="mt-4 text-xl text-white/75 max-w-2xl mx-auto">
              Get access to our global SMS network with competitive rates, a
              powerful API, and compliance tools built in.
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
                <Link href="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
