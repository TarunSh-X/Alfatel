"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, Hash, MessageSquare, Radio, Code, Headphones, ArrowRight, Check, Boxes } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/page-hero"

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
        <PageHero
          eyebrow="Our Products"
          eyebrowIcon={Boxes}
          title="Telecom Infrastructure Products"
          highlightLastWord
          description="Carrier-grade voice, messaging, numbering, and connectivity — engineered for enterprises that demand reliability at global scale."
          align="left"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Products", href: "/products" },
          ]}
          highlights={["180+ Countries", "99.99% Uptime SLA", "Carrier-Grade Routing", "24/7 NOC"]}
          aside={
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "180+", label: "Countries Covered" },
                { value: "100K+", label: "API Calls / Day" },
                { value: "99.99%", label: "Network Uptime" },
                { value: "<50ms", label: "Avg. Latency" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm"
                >
                  <div className="text-3xl font-bold text-[#FFBE32]">{s.value}</div>
                  <div className="mt-1 text-sm text-white/70">{s.label}</div>
                </div>
              ))}
            </div>
          }
        />

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
                    className="group block h-full p-8 rounded-2xl bg-card border border-border hover:border-[#FFBE32]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#0f2744]/10 flex items-center justify-center group-hover:bg-[#0f2744] group-hover:scale-110 transition-all duration-300 mb-6">
                      <product.icon className="w-7 h-7 text-[#0f2744] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-[#0f2744] transition-colors">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {product.description}
                    </p>
                    <ul className="mt-6 space-y-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-[#FFBE32]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 inline-flex items-center text-[#0f2744] font-medium group-hover:gap-3 gap-2 transition-all">
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
