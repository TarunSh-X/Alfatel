"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Radio, Globe, Zap, Settings, Shield, ArrowLeftRight, Check, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Globe,
    title: "Unlimited Channels",
    description: "Scale your voice capacity instantly with no channel limits or hardware.",
  },
  {
    icon: Settings,
    title: "PBX Integration",
    description: "Seamless integration with Asterisk, FreePBX, 3CX, and all major PBX systems.",
  },
  {
    icon: ArrowLeftRight,
    title: "Failover Support",
    description: "Automatic failover to backup routes ensures business continuity.",
  },
  {
    icon: Shield,
    title: "TLS Encryption",
    description: "End-to-end encryption for secure voice communications.",
  },
  {
    icon: Zap,
    title: "Codec Flexibility",
    description: "Support for G.711, G.729, Opus, and other popular codecs.",
  },
  {
    icon: Radio,
    title: "CLI Passthrough",
    description: "Full caller ID transparency with CLI passthrough support.",
  },
]

const benefits = [
  { title: "Cost Savings", value: "60%", description: "Average savings vs traditional PSTN" },
  { title: "Setup Time", value: "5 min", description: "Quick configuration and go live" },
  { title: "Uptime SLA", value: "99.99%", description: "Enterprise-grade reliability" },
  { title: "Support", value: "24/7", description: "Round-the-clock expert assistance" },
]

export default function SIPTrunkingPage() {
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
                <Radio className="w-4 h-4" />
                SIP Trunking
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl lg:text-6xl font-bold text-white text-balance"
              >
                Scalable SIP Trunk Connections
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-xl text-white/70"
              >
                Connect your PBX to our global network with unlimited channels, automatic failover, and enterprise-grade security.
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
                  <Link href="/contact">View Documentation</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border text-center"
                >
                  <div className="text-4xl font-bold text-primary mb-2">{benefit.value}</div>
                  <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
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
                Enterprise SIP Features
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to modernize your voice infrastructure.
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

        {/* Integration */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Works with Your PBX
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Alfacall SIP trunking integrates seamlessly with all major PBX systems and softphones.
                </p>
                <ul className="mt-8 space-y-4">
                  {["Asterisk & FreePBX", "3CX Phone System", "Microsoft Teams", "Cisco Unified CM", "Avaya IP Office", "Any SIP-compliant PBX"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-6">Quick Setup</h3>
                <ol className="space-y-4">
                  {[
                    "Sign up for an Alfacall account",
                    "Configure your SIP credentials",
                    "Add trunk settings to your PBX",
                    "Test and go live",
                  ].map((step, index) => (
                    <li key={step} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                        {index + 1}
                      </span>
                      <span className="text-foreground pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
                <Button size="lg" asChild className="w-full mt-8">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
