"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, Hash, MessageSquare, Radio, ArrowRight, Wifi, CheckCircle } from "lucide-react"

const products = [
  {
    icon: Phone,
    title: "Wholesale Voice",
    description: "High-quality voice termination with global coverage. Crystal-clear HD audio across 180+ countries with real-time analytics.",
    href: "/products/wholesale-voice",
    features: ["Global Coverage", "HD Quality", "Real-time Analytics", "Competitive Rates"],
    iconBg: "bg-[#0f2744]",
    iconColor: "text-white",
    accentColor: "text-[#0f2744]",
  },
  {
    icon: Hash,
    title: "Wholesale DID",
    description: "Local and toll-free numbers from 100+ countries. Instant provisioning with full number portability and management.",
    href: "/products/wholesale-did",
    features: ["100+ Countries", "Instant Setup", "Number Porting", "API Access"],
    iconBg: "bg-[#FFBE32]",
    iconColor: "text-[#0f2744]",
    accentColor: "text-[#FFBE32]",
  },
  {
    icon: MessageSquare,
    title: "Wholesale SMS",
    description: "Global SMS delivery with high throughput and delivery rates. Two-way messaging with delivery receipts.",
    href: "/products/wholesale-sms",
    features: ["Global Reach", "High Delivery", "Two-Way SMS", "Webhooks"],
    iconBg: "bg-emerald-500",
    iconColor: "text-white",
    accentColor: "text-emerald-600",
  },
  {
    icon: Radio,
    title: "SIP Trunking",
    description: "Scalable SIP trunk connections with unlimited channels. Seamless PBX integration with failover support.",
    href: "/products/sip-trunking",
    features: ["Unlimited Channels", "PBX Integration", "Failover", "24/7 Support"],
    iconBg: "bg-blue-500",
    iconColor: "text-white",
    accentColor: "text-blue-600",
  },
]

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative group"
    >
      <Link href={product.href} className="block">
        {/* Main card with enhanced hover effects */}
        <div className="relative h-full p-8 rounded-2xl bg-white border border-border shadow-soft overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:border-[#FFBE32]/30 group-hover:-translate-y-2">
          
          {/* Animated gradient border on hover */}
          <div 
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, transparent 0%, rgba(255, 190, 50, 0.1) 50%, rgba(15, 39, 68, 0.05) 100%)",
            }}
          />
          
          {/* Animated corner accent */}
          <div 
            className="absolute top-0 right-0 w-32 h-32 translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500 rounded-full opacity-0 group-hover:opacity-100"
            style={{
              background: "radial-gradient(circle, rgba(255, 190, 50, 0.3) 0%, transparent 70%)",
            }}
          />
          
          {/* Bottom line accent that expands on hover */}
          <div 
            className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ease-out"
            style={{
              background: "linear-gradient(90deg, #FFBE32 0%, #0f2744 100%)",
            }}
          />

          <div className="relative z-10">
            {/* Icon with enhanced hover animation */}
            <motion.div 
              className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${product.iconBg} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
              style={{
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <product.icon className={`w-8 h-8 ${product.iconColor} transition-transform duration-300 group-hover:scale-110`} />
            </motion.div>

            {/* Title with color transition */}
            <h3 className="text-xl font-bold text-[#0f2744] mb-3 transition-colors duration-300 group-hover:text-[#0f2744]">
              {product.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-6 transition-colors duration-300">
              {product.description}
            </p>

            {/* Features with staggered hover effect */}
            <div className="space-y-2 mb-6">
              {product.features.map((feature, featureIndex) => (
                <div 
                  key={feature} 
                  className="flex items-center gap-2 text-sm transition-all duration-300"
                  style={{
                    transitionDelay: `${featureIndex * 50}ms`,
                  }}
                >
                  <CheckCircle className="w-4 h-4 text-emerald-500 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-foreground/80 group-hover:text-foreground transition-colors duration-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA with animated arrow */}
            <div className={`flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${product.accentColor}`}>
              <span className="group-hover:underline underline-offset-4">Learn more</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function ProductsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-secondary mb-8"
          >
            <Wifi className="w-4 h-4 text-[#0f2744]" />
            <span className="text-sm font-medium text-[#0f2744]">Our Products</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-[#0f2744] mb-6"
          >
            Enterprise Communication
            <br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #0f2744 0%, #FFBE32 100%)" }}>
              Infrastructure
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Everything you need to build, scale, and manage global telecommunications 
            with enterprise-grade reliability and performance.
          </motion.p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.title} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
