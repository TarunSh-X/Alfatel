"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, Globe, Zap, BarChart3, Shield, Clock, Check, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/page-hero"

const features = [
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Terminate calls to 180+ countries with local presence in major markets worldwide.",
  },
  {
    icon: Zap,
    title: "HD Voice Quality",
    description: "Crystal-clear audio with advanced codecs including G.711, G.729, and Opus support.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Comprehensive CDRs and reporting dashboards for complete visibility into your traffic.",
  },
  {
    icon: Shield,
    title: "Fraud Protection",
    description: "Advanced fraud detection and prevention systems to protect your business.",
  },
  {
    icon: Clock,
    title: "99.99% Uptime",
    description: "Enterprise-grade infrastructure with redundant systems and automatic failover.",
  },
  {
    icon: Phone,
    title: "24/7 NOC Support",
    description: "Round-the-clock support from our expert Network Operations Center.",
  },
]

const pricingTiers = [
  { destination: "United States", rate: "$0.0050" },
  { destination: "United Kingdom", rate: "$0.0080" },
  { destination: "Germany", rate: "$0.0090" },
  { destination: "France", rate: "$0.0085" },
  { destination: "Australia", rate: "$0.0120" },
  { destination: "Japan", rate: "$0.0150" },
]

export default function WholesaleVoicePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Wholesale Voice"
          eyebrowIcon={Phone}
          title="High-Quality Voice Termination Worldwide"
          highlightLastWord
          description="Connect your customers globally with our premium voice routes. Competitive rates, exceptional quality, and unmatched reliability."
          align="left"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Products", href: "/products" },
            { name: "Wholesale Voice", href: "/products/wholesale-voice" },
          ]}
          highlights={["180+ Countries", "HD Voice Quality", "99.99% Uptime", "24/7 NOC"]}
        />

        {/* Features */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Enterprise-Grade Voice Infrastructure
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to deliver exceptional voice quality at scale.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-[#FFBE32]/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0f2744]/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-[#0f2744]" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="py-24 bg-secondary/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Competitive Wholesale Rates
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Volume-based pricing with no minimum commitments. Pay only for what you use.
                </p>
                <ul className="mt-8 space-y-4">
                  {["No setup fees", "No monthly minimums", "Real-time billing", "Volume discounts available"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#FFBE32]" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" asChild className="mt-8">
                  <Link href="/contact">
                    Get Custom Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="p-6 border-b border-border">
                  <h3 className="font-semibold text-foreground">Sample Rates (per minute)</h3>
                </div>
                <div className="divide-y divide-border">
                  {pricingTiers.map((tier) => (
                    <div key={tier.destination} className="flex items-center justify-between p-4">
                      <span className="text-foreground">{tier.destination}</span>
                      <span className="font-semibold text-[#0f2744]">{tier.rate}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-secondary/50 text-center text-sm text-muted-foreground">
                  Rates vary by volume. Contact us for a custom quote.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
