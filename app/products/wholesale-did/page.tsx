"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Hash, Globe, Zap, Settings, Shield, Clock, Check, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"

const features = [
  {
    icon: Globe,
    title: "100+ Countries",
    description: "Local, mobile, and toll-free numbers from over 100 countries worldwide.",
  },
  {
    icon: Zap,
    title: "Instant Provisioning",
    description: "Get numbers activated in seconds with our automated provisioning system.",
  },
  {
    icon: Settings,
    title: "API Management",
    description: "Full API access to search, provision, and manage numbers programmatically.",
  },
  {
    icon: Shield,
    title: "Number Portability",
    description: "Port existing numbers to our platform with minimal downtime.",
  },
  {
    icon: Clock,
    title: "99.99% Availability",
    description: "Reliable number routing with enterprise-grade uptime guarantees.",
  },
  {
    icon: Hash,
    title: "Flexible Channels",
    description: "Configure voice, SMS, and fax capabilities per number as needed.",
  },
]

const numberTypes = [
  { type: "Local Numbers", countries: "100+", description: "Geographic numbers for local presence" },
  { type: "Toll-Free Numbers", countries: "50+", description: "Free calling for your customers" },
  { type: "Mobile Numbers", countries: "40+", description: "Mobile DIDs with SMS capability" },
  { type: "National Numbers", countries: "30+", description: "Non-geographic national reach" },
]

export default function WholesaleDIDPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Wholesale DID"
          eyebrowIcon={Hash}
          title="Global Phone Numbers On Demand"
          highlightLastWord
          description="Local, toll-free, and mobile numbers from 100+ countries. Instant provisioning via API with complete number management."
          align="left"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Products", href: "/products" },
            { name: "Wholesale DID", href: "/products/wholesale-did" },
          ]}
          highlights={["100+ Countries", "Instant Provisioning", "API Management", "Number Portability"]}
        />

        {/* Number Types */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Number Types for Every Need
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Choose from our extensive inventory of phone numbers worldwide.
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
                  className="p-6 rounded-2xl bg-card border border-border text-center"
                >
                  <div className="text-3xl font-bold text-[#b89850] mb-2">{item.countries}</div>
                  <h3 className="text-lg font-semibold text-foreground">{item.type}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-secondary/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Complete DID Management
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to manage phone numbers at scale.
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
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-[#b89850]/40 hover:shadow-soft transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0f2744] flex items-center justify-center mb-4 group-hover:bg-[#b89850] transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-white group-hover:text-[#0f2744] transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Ready to expand your reach?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Get instant access to our global DID inventory with flexible pricing and full API support.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold rounded-xl bg-[#b89850] text-[#0f2744] hover:brightness-105 hover:scale-105 transition-all duration-300 shadow-medium"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold rounded-xl border border-[#b89850]/50 text-[#0f2744] hover:bg-[#b89850]/10 hover:scale-105 transition-all duration-300"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
