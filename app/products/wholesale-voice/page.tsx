// =============================================================================
// app/products/wholesale-voice/page.tsx
//
// SEO-optimised Wholesale Voice product page for Alfacall.
// Tech stack: Next.js 14 App Router · Tailwind CSS · Framer Motion · shadcn/ui
//
// SEO targets:
//   Primary   → "wholesale voice termination"
//   Secondary → "wholesale VoIP", "international voice routes", "A-Z termination"
//
// Sections:
//   1. Hero           – H1, keyword-rich subheadline, dual CTA
//   2. Stats bar      – social-proof numbers
//   3. Features grid  – feature cards (H3 per card)
//   4. Pricing table  – sample rates + benefits list
//   5. Destinations   – regional coverage (H2)
//   6. How it works   – numbered steps
//   7. FAQ            – accordion-style Q&A (schema ready)
//   8. CTA banner     – final conversion push
//
// JSON-LD schema (Product + FAQPage) is injected via <script> in the head.
// =============================================================================

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Script from "next/script"
import {
  Phone, Globe, Zap, BarChart3, Shield, Clock,
  Check, ArrowRight, ChevronDown, ChevronUp,
  Server, Activity, Headphones,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useState } from "react"

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "180+", label: "Countries covered" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "$0.005", label: "Rates from (per min)" },
  { value: "24/7", label: "NOC support" },
]

const features = [
  {
    icon: Globe,
    title: "Global A-Z Termination",
    description:
      "Reach any destination worldwide with direct interconnects to Tier-1 carriers, ensuring shortest-path routing and best voice quality.",
  },
  {
    icon: Zap,
    title: "HD Voice Quality",
    description:
      "Crystal-clear audio via G.711, G.729, and Opus codecs. Wideband HD voice available on supporting routes.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Comprehensive CDRs, live traffic dashboards, and automated email reports give you full visibility at all times.",
  },
  {
    icon: Shield,
    title: "Fraud Protection",
    description:
      "AI-powered fraud detection, IPRN blocking, and velocity alerts protect your margins around the clock.",
  },
  {
    icon: Clock,
    title: "Redundant Infrastructure",
    description:
      "Geographically dispersed PoPs with N+1 redundancy and automatic failover keep your traffic flowing.",
  },
  {
    icon: Headphones,
    title: "Dedicated NOC",
    description:
      "Round-the-clock support from our Network Operations Center — real engineers, not bots.",
  },
  {
    icon: Server,
    title: "Carrier-Grade SBC",
    description:
      "Session Border Controllers at every PoP for TLS/SRTP encryption, NAT traversal, and transcoding.",
  },
  {
    icon: Activity,
    title: "Least-Cost Routing",
    description:
      "Our LCR engine selects the cheapest quality route in real-time, automatically, saving you money without compromise.",
  },
  {
    icon: Phone,
    title: "CLI Transparency",
    description:
      "Full caller-ID passthrough on supported routes to maximise answer rates for your outbound campaigns.",
  },
]

const pricingTiers = [
  { destination: "United States", rate: "$0.0050", quality: "Tier-1" },
  { destination: "United Kingdom", rate: "$0.0080", quality: "Tier-1" },
  { destination: "Germany",        rate: "$0.0090", quality: "Tier-1" },
  { destination: "France",         rate: "$0.0085", quality: "Tier-1" },
  { destination: "Australia",      rate: "$0.0120", quality: "Tier-1" },
  { destination: "Japan",          rate: "$0.0150", quality: "Tier-1" },
  { destination: "India",          rate: "$0.0070", quality: "Tier-1" },
  { destination: "Brazil",         rate: "$0.0200", quality: "Tier-1" },
]

const regions = [
  { name: "North America",  countries: 3,   flag: "🇺🇸" },
  { name: "Europe",         countries: 45,  flag: "🇪🇺" },
  { name: "Asia Pacific",   countries: 38,  flag: "🌏" },
  { name: "Latin America",  countries: 28,  flag: "🌎" },
  { name: "Middle East",    countries: 18,  flag: "🌍" },
  { name: "Africa",         countries: 50,  flag: "🌍" },
]

const steps = [
  {
    step: "1",
    title: "Sign up & get approved",
    description:
      "Create your Alfacall account. Our team verifies your business and activates wholesale access within one business day.",
  },
  {
    step: "2",
    title: "Configure your SIP trunk",
    description:
      "Add our SIP proxy to your switch or soft-switch using the credentials provided in your portal.",
  },
  {
    step: "3",
    title: "Fund your balance",
    description:
      "Top up via wire transfer, credit card, or crypto. No minimums — use exactly what you need.",
  },
  {
    step: "4",
    title: "Start terminating traffic",
    description:
      "Route live calls and monitor CDRs, ASR, ACD, and PDD in real-time from your dashboard.",
  },
]

const faqs = [
  {
    q: "What is wholesale voice termination?",
    a: "Wholesale voice termination is the process of routing large volumes of telephone calls from one carrier or reseller to another for delivery to the end destination. Alfacall acts as the terminating carrier, connecting your calls to PSTN or VoIP endpoints in 180+ countries at bulk per-minute rates.",
  },
  {
    q: "What codecs does Alfacall support for wholesale voice?",
    a: "We support G.711 (u-law and a-law), G.729, G.722 (HD voice), and Opus on compatible routes. Transcoding is available at our SBCs where needed.",
  },
  {
    q: "Is there a minimum monthly commitment or deposit?",
    a: "No monthly minimum traffic commitment. We do require a prepaid balance — the minimum top-up is $100. Volume discounts kick in automatically as your monthly usage grows.",
  },
  {
    q: "How quickly can I go live?",
    a: "Most accounts are activated within one business day. SIP credentials and routing documentation are provided immediately upon approval so your team can begin testing in staging.",
  },
  {
    q: "What fraud protection do you offer?",
    a: "Alfacall uses real-time IPRN and PRS blocking, per-destination velocity limits, and optional spend-cap alerts. You can also whitelist or blacklist specific prefixes directly in the portal.",
  },
  {
    q: "Do you offer CLI / ANI passthrough?",
    a: "Yes. Caller-ID passthrough is available on the majority of our routes. Where a carrier downstream strips CLI, we clearly indicate this in the route pricing table.",
  },
]

// ─── JSON-LD schema ───────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Wholesale Voice Termination",
      description:
        "Carrier-grade wholesale voice termination to 180+ countries with HD quality, real-time analytics, and competitive per-minute rates.",
      brand: { "@type": "Brand", name: "Alfacall" },
      url: "https://alfacall.net/products/wholesale-voice",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "0.005",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "0.005",
          priceCurrency: "USD",
          unitText: "per minute",
        },
      },
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

export default function WholesaleVoicePage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <Script
        id="wholesale-voice-schema"
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
          aria-labelledby="hero-heading"
        >
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 opacity-10" aria-hidden>
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="voice-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#voice-grid)" />
            </svg>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6"
              >
                <Phone className="w-4 h-4" aria-hidden />
                Wholesale Voice Termination
              </motion.div>

              {/* H1 — primary SEO keyword */}
              <motion.h1
                id="hero-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl lg:text-6xl font-bold text-white text-balance"
              >
                Global Wholesale Voice Termination at Carrier Rates
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-xl text-white/75 max-w-2xl"
              >
                Route high-volume voice traffic to 180+ countries with Tier-1
                quality, competitive per-minute rates, and a 99.99% uptime SLA.
                Built for carriers, resellers, and enterprise contact centres.
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
                  <Link href="/contact">Get Started Free</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/contact">Request Custom Pricing</Link>
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
                  <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. FEATURES GRID ────────────────────────────────────────────── */}
        <section className="py-24 bg-background" aria-labelledby="features-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2
                id="features-heading"
                className="text-3xl lg:text-4xl font-bold text-foreground"
              >
                Enterprise-Grade Voice Infrastructure
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything carriers and resellers need to deliver exceptional
                wholesale voice quality at scale.
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

        {/* ── 4. PRICING TABLE ────────────────────────────────────────────── */}
        <section
          className="py-24 bg-secondary/50"
          aria-labelledby="pricing-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: copy */}
              <div>
                <h2
                  id="pricing-heading"
                  className="text-3xl lg:text-4xl font-bold text-foreground"
                >
                  Competitive Wholesale Voice Rates
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Volume-based per-minute pricing with no monthly minimums and
                  no setup fees. The more traffic you send, the lower your rate.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "No setup fees or monthly minimums",
                    "Prepaid billing — never overspend",
                    "Real-time balance alerts",
                    "Volume discount tiers available",
                    "Transparent CDR export (CSV / API)",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" aria-hidden />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" asChild className="mt-8">
                  <Link href="/contact">
                    Get Custom Quote
                    <ArrowRight className="ml-2 w-4 h-4" aria-hidden />
                  </Link>
                </Button>
              </div>

              {/* Right: rate table */}
              <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
                <div className="p-6 border-b border-border flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">
                    Sample Rates (per minute, Tier-1 quality)
                  </h3>
                </div>
                <div className="divide-y divide-border">
                  {pricingTiers.map((tier) => (
                    <div
                      key={tier.destination}
                      className="flex items-center justify-between px-6 py-4"
                    >
                      <div>
                        <span className="text-foreground font-medium">
                          {tier.destination}
                        </span>
                        <span className="ml-2 text-xs text-muted-foreground">
                          {tier.quality}
                        </span>
                      </div>
                      <span className="font-bold text-primary tabular-nums">
                        {tier.rate}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-secondary/50 text-center text-sm text-muted-foreground">
                  Rates depend on volume and route quality. Contact us for a
                  full rate deck.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. COVERAGE MAP (text-based regions) ──────────────────────── */}
        <section className="py-24 bg-background" aria-labelledby="coverage-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2
                id="coverage-heading"
                className="text-3xl lg:text-4xl font-bold text-foreground"
              >
                Worldwide Voice Termination Coverage
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Direct interconnects across all inhabited continents — no
                back-routing, no unexpected latency spikes.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {regions.map((r, i) => (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/30 transition-colors"
                >
                  <div className="text-4xl mb-2">{r.flag}</div>
                  <div className="text-2xl font-bold text-primary">
                    {r.countries}+
                  </div>
                  <div className="mt-1 text-sm font-medium text-foreground">
                    {r.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. HOW IT WORKS ─────────────────────────────────────────────── */}
        <section
          className="py-24 bg-secondary/50"
          aria-labelledby="how-it-works-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2
                id="how-it-works-heading"
                className="text-3xl lg:text-4xl font-bold text-foreground"
              >
                Get Live in Under 24 Hours
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Four simple steps from sign-up to live wholesale voice traffic.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative p-6 rounded-2xl bg-card border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mb-4">
                    {s.step}
                  </div>
                  <h3 className="font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. FAQ ──────────────────────────────────────────────────────── */}
        <section className="py-24 bg-background" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id="faq-heading"
                className="text-3xl lg:text-4xl font-bold text-foreground"
              >
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to know about Alfacall wholesale voice
                termination.
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. CTA BANNER ───────────────────────────────────────────────── */}
        <section
          className="py-20"
          style={{
            background:
              "linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)",
          }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to start terminating traffic?
            </h2>
            <p className="mt-4 text-xl text-white/75 max-w-2xl mx-auto">
              Join hundreds of carriers and resellers who trust Alfacall for
              reliable, cost-effective wholesale voice termination.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                asChild
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                <Link href="/contact">
                  Create an Account
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
