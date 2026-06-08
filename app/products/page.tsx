"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, Hash, MessageSquare, Radio, Code, Headphones, ArrowRight, Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const products = [
  {
    icon: Phone,
    title: "Wholesale Voice",
    description: "High-quality voice termination with global coverage across 180+ countries.",
    href: "/products/wholesale-voice",
    features: [
      "180+ Countries Coverage",
      "HD Voice Quality",
      "Real-time CDRs",
      "Competitive Rates",
      "24/7 NOC Support",
    ],
  },
  {
    icon: Hash,
    title: "Wholesale DID",
    description: "Local and toll-free numbers from 100+ countries with instant provisioning.",
    href: "/products/wholesale-did",
    features: [
      "100+ Countries",
      "Instant Provisioning",
      "Number Portability",
      "API Management",
      "Flexible Pricing",
    ],
  },
  {
    icon: MessageSquare,
    title: "Wholesale SMS",
    description: "Global SMS delivery with high throughput and exceptional delivery rates.",
    href: "/products/wholesale-sms",
    features: [
      "Global Coverage",
      "High Throughput",
      "Two-Way Messaging",
      "Delivery Reports",
      "Shortcode Support",
    ],
  },
  {
    icon: Radio,
    title: "SIP Trunking",
    description: "Scalable SIP connections with unlimited channels and failover support.",
    href: "/products/sip-trunking",
    features: [
      "Unlimited Channels",
      "PBX Integration",
      "Failover Support",
      "Codec Flexibility",
      "TLS Encryption",
    ],
  },
  {
    icon: Code,
    title: "Voice API",
    description: "Programmable voice capabilities for building custom communication applications.",
    href: "/services#voice-api",
    features: [
      "Call Control API",
      "IVR Builder",
      "Call Recording",
      "Speech-to-Text",
      "Webhooks",
    ],
  },
  {
    icon: Headphones,
    title: "Messaging API",
    description: "Powerful messaging APIs for SMS, MMS, and omnichannel communication.",
    href: "/services#messaging-api",
    features: [
      "SMS/MMS API",
      "Two-Way Messaging",
      "Delivery Webhooks",
      "Template Support",
      "Rate Limiting",
    ],
  },
]

export default function ProductsPage() {
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
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-6xl font-bold text-white text-balance"
            >
              Our Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-xl text-white/70 max-w-2xl mx-auto"
            >
              Complete telecom infrastructure for enterprises of all sizes
            </motion.p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={product.href}
                    className="group block h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 mb-6">
                      <product.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {product.description}
                    </p>
                    <ul className="mt-6 space-y-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 inline-flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Need a custom solution?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team can help design a tailored telecom infrastructure that meets your specific requirements.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
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
