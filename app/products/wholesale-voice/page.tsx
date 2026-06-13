"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, Globe, Zap, BarChart3, Shield, Clock, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/page-hero"
import { Flag } from "@/components/flag"

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

const coverageCountries = [
  { code: "us", name: "United States", badge: "Premium Route" },
  { code: "gb", name: "United Kingdom", badge: "HD Quality" },
  { code: "cn", name: "China", badge: "Premium Route" },
  { code: "in", name: "India", badge: "HD Quality" },
  { code: "au", name: "Australia", badge: "Premium Route" },
  { code: "ca", name: "Canada", badge: "HD Quality" },
  { code: "de", name: "Germany", badge: "Premium Route" },
  { code: "fr", name: "France", badge: "HD Quality" },
  { code: "br", name: "Brazil", badge: "Premium Route" },
  { code: "mx", name: "Mexico", badge: "HD Quality" },
  { code: "jp", name: "Japan", badge: "Premium Route" },
  { code: "sg", name: "Singapore", badge: "HD Quality" },
  { code: "ae", name: "UAE", badge: "Premium Route" },
  { code: "za", name: "South Africa", badge: "HD Quality" },
  { code: "ng", name: "Nigeria", badge: "Premium Route" },
  { code: "ph", name: "Philippines", badge: "HD Quality" },
  { code: "id", name: "Indonesia", badge: "Premium Route" },
  { code: "kr", name: "South Korea", badge: "HD Quality" },
  { code: "it", name: "Italy", badge: "Premium Route" },
  { code: "es", name: "Spain", badge: "HD Quality" },
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
                  className="p-6 rounded-2xl bg-card border border-border hover:border-[#b89850]/40 transition-colors"
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

        {/* Global Coverage */}
        <section className="py-24 bg-[#0A1628]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#b89850]/10 border border-[#b89850]/30 text-[#b89850] text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                Global Coverage
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Premium Routes to 180+ Countries
              </h2>
              <p className="mt-4 text-lg text-white/60">
                Our top destinations deliver HD voice quality on direct, premium routes — with capacity available now.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {coverageCountries.map((country, index) => (
                <motion.div
                  key={country.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 4) * 0.05 }}
                  className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:border-[#b89850]/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Flag code={country.code} name={country.name} className="w-8 h-auto rounded-sm shadow-sm shrink-0" />
                    <h3 className="font-semibold text-white">{country.name}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-md bg-[#b89850]/15 px-2.5 py-1 text-xs font-medium text-[#b89850]">
                      {country.badge}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Available
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Custom Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
