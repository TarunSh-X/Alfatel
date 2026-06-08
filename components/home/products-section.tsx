"use client"

import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Phone, Hash, MessageSquare, Radio, ArrowRight, Wifi, CheckCircle } from "lucide-react"
import { useRef } from "react"
import { PulsingGlow } from "./animated-elements"

const products = [
  {
    icon: Phone,
    title: "Wholesale Voice",
    description: "High-quality voice termination with global coverage. Crystal-clear HD audio across 180+ countries with real-time analytics.",
    href: "/products/wholesale-voice",
    features: ["Global Coverage", "HD Quality", "Real-time Analytics", "Competitive Rates"],
    gradient: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6, 182, 212, 0.4)",
    iconBg: "rgba(6, 182, 212, 0.15)",
  },
  {
    icon: Hash,
    title: "Wholesale DID",
    description: "Local and toll-free numbers from 100+ countries. Instant provisioning with full number portability and management.",
    href: "/products/wholesale-did",
    features: ["100+ Countries", "Instant Setup", "Number Porting", "API Access"],
    gradient: "from-orange-500 to-amber-500",
    glowColor: "rgba(249, 115, 22, 0.4)",
    iconBg: "rgba(249, 115, 22, 0.15)",
  },
  {
    icon: MessageSquare,
    title: "Wholesale SMS",
    description: "Global SMS delivery with high throughput and delivery rates. Two-way messaging with delivery receipts.",
    href: "/products/wholesale-sms",
    features: ["Global Reach", "High Delivery", "Two-Way SMS", "Webhooks"],
    gradient: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.4)",
    iconBg: "rgba(16, 185, 129, 0.15)",
  },
  {
    icon: Radio,
    title: "SIP Trunking",
    description: "Scalable SIP trunk connections with unlimited channels. Seamless PBX integration with failover support.",
    href: "/products/sip-trunking",
    features: ["Unlimited Channels", "PBX Integration", "Failover", "24/7 Support"],
    gradient: "from-violet-500 to-purple-600",
    glowColor: "rgba(139, 92, 246, 0.4)",
    iconBg: "rgba(139, 92, 246, 0.15)",
  },
]

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group"
    >
      <Link href={product.href} className="block">
        {/* Card glow effect */}
        <motion.div
          className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
          style={{ background: `linear-gradient(135deg, ${product.glowColor}, transparent)` }}
        />
        
        {/* Main card */}
        <div 
          className="relative h-full p-8 rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-white/20"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Inner gradient glow */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at 50% 0%, ${product.glowColor}, transparent 70%)`,
            }}
          />

          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
              backgroundSize: "200% 100%",
            }}
            animate={{
              backgroundPosition: ["200% 0", "-200% 0"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          <div className="relative" style={{ transform: "translateZ(50px)" }}>
            {/* Icon */}
            <motion.div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: product.iconBg }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <product.icon className={`w-8 h-8 bg-gradient-to-r ${product.gradient} bg-clip-text`} style={{ color: product.glowColor.replace("0.4", "1") }} />
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300" style={{ backgroundImage: `linear-gradient(135deg, white, ${product.glowColor.replace("0.4", "1")})` }}>
              {product.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Features */}
            <div className="space-y-2 mb-6">
              {product.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
              <span style={{ color: product.glowColor.replace("0.4", "1") }}>Learn more</span>
              <ArrowRight className="w-4 h-4" style={{ color: product.glowColor.replace("0.4", "1") }} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function ProductsSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Subtle gradient orbs */}
      <PulsingGlow 
        color="rgba(6, 182, 212, 0.15)" 
        size="600px" 
        className="top-0 left-1/4" 
      />
      <PulsingGlow 
        color="rgba(249, 115, 22, 0.1)" 
        size="500px" 
        className="bottom-0 right-1/4" 
      />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-500/30 mb-8"
            style={{
              background: "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)",
              boxShadow: "0 0 20px rgba(6, 182, 212, 0.2)",
            }}
          >
            <Wifi className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-foreground">Our Products</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Enterprise Communication
            <br />
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #06b6d4 0%, #f97316 100%)",
                filter: "drop-shadow(0 0 30px rgba(6, 182, 212, 0.3))",
              }}
            >
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
        <div className="grid md:grid-cols-2 gap-8" style={{ perspective: "1000px" }}>
          {products.map((product, index) => (
            <ProductCard key={product.title} product={product} index={index} />
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 60V30C480 50 960 10 1440 30V60H0Z" fill="var(--secondary)" fillOpacity="0.3" />
        </svg>
      </div>
    </section>
  )
}
