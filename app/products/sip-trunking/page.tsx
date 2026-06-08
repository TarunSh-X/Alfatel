// =============================================================================
// app/products/sip-trunking/page.tsx
//
// SEO-optimised SIP Trunking product page for Alfacall.
// Tech stack: Next.js 14 App Router · Tailwind CSS · Framer Motion · shadcn/ui
//
// SEO targets:
//   Primary   → "SIP trunking"
//   Secondary → "SIP trunk provider", "cloud SIP trunking", "VoIP SIP trunk"
//
// Sections:
//   1. Hero             – H1, keyword-rich copy, dual CTA
//   2. Benefits bar     – 4 key metrics (cost savings, setup, uptime, support)
//   3. Features grid    – 9 feature cards
//   4. PBX compatibility – logo-style list of supported PBXs
//   5. Quick setup      – 4-step onboarding guide
//   6. Security         – TLS / SRTP / compliance callouts
//   7. FAQ              – accordion Q&A (FAQPage schema)
//   8. CTA banner
// =============================================================================

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Script from "next/script"
import {
  Radio, Globe, Zap, Settings, Shield,
  ArrowLeftRight, Check, ArrowRight, ChevronDown, ChevronUp,
  Lock, Activity, Server,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useState } from "react"

// ─── Data ────────────────────────────────────────────────────────────────────

const benefits = [
  { title: "Cost Savings",   value: "60%",    description: "Average vs traditional PSTN lines" },
  { title: "Setup Time",     value: "5 min",  description: "From sign-up to first live call" },
  { title: "Uptime SLA",     value: "99.99%", description: "Enterprise-grade availability" },
  { title: "NOC Support",    value: "24/7",   description: "Real engineers, not just bots" },
]

const features = [
  {
    icon: Globe,
    title: "Unlimited Concurrent Channels",
    description:
      "Scale voice capacity instantly — no channel caps, no hardware to provision, no lead time.",
  },
  {
    icon: Settings,
    title: "Universal PBX Integration",
    description:
      "Works out of the box with Asterisk, FreePBX, 3CX, Cisco, Avaya, Microsoft Teams, and any SIP-compliant PBX.",
  },
  {
    icon: ArrowLeftRight,
    title: "Automatic Failover",
    description:
      "Active-active routing across multiple PoPs. Traffic re-routes in under 500ms if a primary node degrades.",
  },
  {
    icon: Lock,
    title: "TLS + SRTP Encryption",
    description:
      "End-to-end signalling (TLS) and media (SRTP) encryption as standard — no extra configuration required.",
  },
  {
    icon: Zap,
    title: "Flexible Codec Support",
    description:
      "G.711 (u/a-law), G.729, G.722 HD voice, and Opus. Transcoding available at our SBC layer where needed.",
  },
  {
    icon: Radio,
    title: "CLI Passthrough",
    description:
      "Full caller-ID transparency — your customers see the real originating number, improving answer rates.",
  },
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description:
      "Live channel utilisation, call quality scores (MOS), jitter, and packet loss metrics in your portal.",
  },
  {
    icon: Server,
    title: "Dedicated SBC Option",
    description:
      "Dedicated Session Border Controller allocation available for high-volume or compliance-sensitive deployments.",
  },
  {
    icon: Globe,
    title: "Inbound DID Bundles",
    description:
      "Pair your SIP trunk with local DID numbers from 100+ countries — managed from one account.",
  },
]

const pbxList = [
  "Asterisk",
  "FreePBX",
  "3CX Phone System",
  "Microsoft Teams (Direct Routing)",
  "Cisco Unified Communications Manager",
  "Avaya IP Office",
  "Sangoma PBXact",
  "Yeastar P-Series",
  "Any RFC 3261-compliant PBX",
]

const steps = [
  {
    step: "1",
    title: "Create your account",
    description:
      "Sign up at alfacall.net. Business accounts are approved within one business day.",
  },
  {
    step: "2",
    title: "Receive SIP credentials",
    description:
      "You'll get a SIP domain, username, and password in your portal. Keep these handy for step 3.",
  },
  {
    step: "3",
    title: "Add the trunk to your PBX",
    description:
      "Enter Alfacall's SIP credentials in your PBX trunk settings. We provide config guides for all major PBXs.",
  },
  {
    step: "4",
    title: "Test and go live",
    description:
      "Make a test call, verify CLI, and you're live. Our NOC monitors your trunk quality from day one.",
  },
]

const securityPoints = [
  {
    title: "TLS Signalling Encryption",
    description:
      "All SIP signalling is encrypted over TLS 1.2/1.3, protecting call metadata and routing information from eavesdropping.",
  },
  {
    title: "SRTP Media Encryption",
    description:
      "Real-time voice media is encrypted with SRTP, ensuring your conversations cannot be intercepted in transit.",
  },
  {
    title: "IP Whitelisting",
    description:
      "Restrict trunk access to your known PBX IP addresses, blocking unauthorised registration attempts.",
  },
  {
    title: "Rate & Spend Controls",
    description:
      "Set per-destination rate caps and daily spend limits to prevent billing surprises from misconfiguration or fraud.",
  },
]

const faqs = [
  {
    q: "What is SIP trunking?",
    a: "SIP (Session Initiation Protocol) trunking is a method of delivering voice calls over the internet to your PBX or UC system, replacing traditional PSTN or ISDN lines. Instead of physical copper connections, your PBX connects to Alfacall's SIP servers over your broadband or MPLS link and calls are routed globally through our carrier network.",
  },
  {
    q: "How many concurrent calls can I make?",
    a: "Alfacall SIP trunks have no channel limit. You can make as many simultaneous calls as your internet bandwidth and PBX capacity allow. We recommend a minimum of 100 Kbps per concurrent call (G.711) as a rough bandwidth guide.",
  },
  {
    q: "Does Alfacall support Microsoft Teams Direct Routing?",
    a: "Yes. Alfacall is certified for Microsoft Teams Direct Routing. We provide a compliant Session Border Controller and configuration documentation for connecting Teams Phone to our PSTN gateway.",
  },
  {
    q: "What internet connection do I need?",
    a: "Any stable broadband connection works. For production use we recommend a dedicated connection or at minimum QoS policy that prioritises SIP/RTP traffic. A minimum of 1 Mbps per 10 concurrent calls is a safe starting point for G.711.",
  },
  {
    q: "Can I keep my existing phone numbers when switching to Alfacall SIP trunking?",
    a: "Yes. We support number porting in most countries. You continue using your existing numbers — simply point them to your Alfacall trunk after porting completes. Geographic DIDs in 100+ countries are also available if you need new numbers.",
  },
  {
    q: "Is there a contract or minimum term?",
    a: "No contracts and no minimum terms. Alfacall SIP trunking is billed on a pay-as-you-go per-minute basis. You can scale up, scale down, or cancel at any time.",
  },
]

// ─── JSON-LD schema ───────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "SIP Trunking Service",
      description:
        "Unlimited-channel SIP trunking with 99.99% uptime, TLS/SRTP encryption, automatic failover, and integrations for all major PBX systems.",
      brand: { "@type": "Brand", name: "Alfacall" },
      url: "https://alfacall.net/products/sip-trunking",
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

export default function SIPTrunkingPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <Script
        id="sip-trunking-schema"
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
          aria-labelledby="sip-hero-heading"
        >
          <div className="absolute inset-0 opacity-10" aria-hidden>
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="sip-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#sip-grid)" />
            </svg>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6"
              >
                <Radio className="w-4 h-4" aria-hidden />
                SIP Trunking
              </motion.div>

              <motion.h1
                id="sip-hero-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl lg:text-6xl font-bold text-white text-balance"
              >
                Cloud SIP Trunking with Unlimited Channels
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-xl text-white/75 max-w-2xl"
              >
                Replace costly PSTN lines with Alfacall SIP trunking. Unlimited
                concurrent calls, automatic failover, TLS/SRTP encryption, and
                native integrations for all major PBX systems — live in five
                minutes.
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
                  <Link href="/contact">View Documentation</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 2. BENEFITS BAR ─────────────────────────────────────────────── */}
        <section className="bg-primary/5 border-y border-border py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-primary">
                    {b.value}
                  </div>
                  <div className="mt-1 font-medium text-foreground text-sm">
                    {b.title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {b.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. FEATURES GRID ────────────────────────────────────────────── */}
        <section className="py-24 bg-background" aria-labelledby="sip-features-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2
                id="sip-features-heading"
                className="text-3xl lg:text-4xl font-bold text-foreground"
              >
                Enterprise SIP Trunking Features
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A modern SIP trunk built for the demands of enterprise voice
                infrastructure.
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

        {/* ── 4. PBX COMPATIBILITY + QUICK SETUP ─────────────────────────── */}
        <section className="py-24 bg-secondary/50" aria-labelledby="pbx-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* PBX list */}
              <div>
                <h2
                  id="pbx-heading"
                  className="text-3xl lg:text-4xl font-bold text-foreground"
                >
                  Works with Your PBX
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Alfacall SIP trunking integrates seamlessly with all major PBX
                  systems, soft-switches, and Microsoft Teams Direct Routing.
                </p>
                <ul className="mt-8 space-y-3">
                  {pbxList.map((pbx) => (
                    <li key={pbx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" aria-hidden />
                      <span className="text-foreground">{pbx}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick setup */}
              <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Go Live in 4 Steps
                </h3>
                <ol className="space-y-5">
                  {steps.map((s) => (
                    <li key={s.step} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                        {s.step}
                      </span>
                      <div>
                        <div className="font-semibold text-foreground">
                          {s.title}
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {s.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
                <Button size="lg" asChild className="w-full mt-8">
                  <Link href="/contact">
                    Get Your SIP Credentials
                    <ArrowRight className="ml-2 w-4 h-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. SECURITY SECTION ─────────────────────────────────────────── */}
        <section className="py-24 bg-background" aria-labelledby="security-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2
                id="security-heading"
                className="text-3xl lg:text-4xl font-bold text-foreground"
              >
                Security Built Into Every Trunk
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Enterprise voice security without the enterprise complexity.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {securityPoints.map((sp, index) => (
                <motion.div
                  key={sp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-5 p-6 rounded-2xl bg-card border border-border"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{sp.title}</h3>
                    <p className="mt-1 text-muted-foreground leading-relaxed">
                      {sp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. FAQ ──────────────────────────────────────────────────────── */}
        <section className="py-24 bg-secondary/50" aria-labelledby="sip-faq-heading">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id="sip-faq-heading"
                className="text-3xl lg:text-4xl font-bold text-foreground"
              >
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to know about Alfacall SIP trunking.
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
              Modernise your phone system today
            </h2>
            <p className="mt-4 text-xl text-white/75 max-w-2xl mx-auto">
              Switch from PSTN to Alfacall SIP trunking and save up to 60% on
              your business phone costs — no contracts, cancel any time.
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
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
