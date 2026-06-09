"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Hash, Globe, Zap, Settings, Shield, Clock, Check, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

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
                <Hash className="w-4 h-4" />
                Wholesale DID
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl lg:text-6xl font-bold text-white text-balance"
              >
                Global Phone Numbers On Demand
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-xl text-white/70"
              >
                Local, toll-free, and mobile numbers from 100+ countries. Instant provisioning via API with complete number management.
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
                  <Link href="/contact">View Coverage</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

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
                  <div className="text-3xl font-bold text-primary mb-2">{item.countries}</div>
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
                  className="p-6 rounded-2xl bg-card border border-border"
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
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
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
