"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, Globe, Zap, BarChart3, Shield, Clock, Check, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

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
        {/* Hero */}
        <section 
          className="pt-32 pb-20 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)" }}
        >
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6"
              >
                <Phone className="w-4 h-4" />
                Wholesale Voice
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl lg:text-6xl font-bold text-white text-balance"
              >
                High-Quality Voice Termination Worldwide
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-xl text-white/70"
              >
                Connect your customers globally with our premium voice routes. Competitive rates, exceptional quality, and unmatched reliability.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white/10 bg-transparent">
                  <Link href="/contact">Request Pricing</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

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
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
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
                      <Check className="w-5 h-5 text-primary" />
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
                      <span className="font-semibold text-primary">{tier.rate}</span>
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
