"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Phone,
  Hash,
  MessageSquare,
  Radio,
  ArrowRight,
  Wifi,
  Globe,
  AudioLines,
  BarChart3,
  Tag,
  Zap,
  FileText,
  Code,
  Send,
  Webhook,
  Infinity as InfinityIcon,
  Puzzle,
  ShieldCheck,
  Headphones,
  type LucideIcon,
} from "lucide-react"

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

type Theme = {
  /** Tailwind color for the brand accent (used inline via style) */
  accent: string
  /** Soft tint used for feature icon tiles */
  tint: string
  /** Gradient for the main icon tile + learn more button */
  gradient: string
  /** Shadow color on hover for the card */
  hoverShadow: string
}

type Product = {
  icon: LucideIcon
  title: string
  description: string
  /** the word/phrase in the description to highlight in the accent color */
  highlight?: string
  href: string
  illustration: string
  features: Feature[]
  theme: Theme
}

const products: Product[] = [
  {
    icon: Phone,
    title: "Wholesale Voice",
    description:
      "High-quality voice termination with global coverage. Crystal-clear HD audio across 180+ countries with real-time analytics.",
    highlight: "180+ countries",
    href: "/products/wholesale-voice",
    illustration: "/panels/wholesale-voice.png",
    features: [
      { icon: Globe, title: "Global Coverage", description: "Connect across 180+ countries worldwide." },
      { icon: AudioLines, title: "HD Quality", description: "Crystal-clear high-definition audio." },
      { icon: BarChart3, title: "Real-time Analytics", description: "Live call analytics and reporting." },
      { icon: Tag, title: "Competitive Rates", description: "Industry-leading wholesale pricing." },
    ],
    theme: {
      accent: "#0f2744",
      tint: "rgba(15, 39, 68, 0.08)",
      gradient: "linear-gradient(135deg, #1e3a5f 0%, #0f2744 100%)",
      hoverShadow: "rgba(15, 39, 68, 0.18)",
    },
  },
  {
    icon: Hash,
    title: "Wholesale DID",
    description:
      "Local and toll-free numbers from 100+ countries. Instant provisioning with full number portability and management.",
    highlight: "100+ countries",
    href: "/products/wholesale-did",
    illustration: "/panels/wholesale-did.png",
    features: [
      { icon: Globe, title: "100+ Countries", description: "Local & toll-free numbers worldwide." },
      { icon: Zap, title: "Instant Setup", description: "Provision new numbers in minutes." },
      { icon: FileText, title: "Number Porting", description: "Full number portability support." },
      { icon: Code, title: "API Access", description: "Manage numbers via powerful APIs." },
    ],
    theme: {
      accent: "#f59e0b",
      tint: "rgba(245, 158, 11, 0.1)",
      gradient: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
      hoverShadow: "rgba(245, 158, 11, 0.22)",
    },
  },
  {
    icon: MessageSquare,
    title: "Wholesale SMS",
    description:
      "Global SMS delivery with high throughput and delivery rates. Two-way messaging with delivery receipts.",
    href: "/products/wholesale-sms",
    illustration: "/panels/wholesale-sms.png",
    features: [
      { icon: Globe, title: "Global Reach", description: "Connect with 200+ countries worldwide." },
      { icon: Send, title: "High Delivery", description: "Industry-leading delivery rates." },
      { icon: MessageSquare, title: "Two-Way SMS", description: "Engage in real-time conversations." },
      { icon: Webhook, title: "Webhooks", description: "Real-time event notifications." },
    ],
    theme: {
      accent: "#10b981",
      tint: "rgba(16, 185, 129, 0.1)",
      gradient: "linear-gradient(135deg, #34d399 0%, #10b981 100%)",
      hoverShadow: "rgba(16, 185, 129, 0.22)",
    },
  },
  {
    icon: Radio,
    title: "SIP Trunking",
    description:
      "Scalable SIP trunk connections with unlimited channels. Seamless PBX integration with failover support.",
    href: "/products/sip-trunking",
    illustration: "/panels/sip-trunking.png",
    features: [
      { icon: InfinityIcon, title: "Unlimited Channels", description: "Scale without limits on concurrent calls." },
      { icon: Puzzle, title: "PBX Integration", description: "Works with leading PBX systems." },
      { icon: ShieldCheck, title: "Failover", description: "Automatic failover for maximum uptime." },
      { icon: Headphones, title: "24/7 Support", description: "Round-the-clock expert support." },
    ],
    theme: {
      accent: "#3b82f6",
      tint: "rgba(59, 130, 246, 0.1)",
      gradient: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)",
      hoverShadow: "rgba(59, 130, 246, 0.22)",
    },
  },
]

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { theme } = product
  const highlightParts = product.highlight
    ? product.description.split(product.highlight)
    : [product.description]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative h-full"
    >
      <div
        className="relative h-full flex flex-col overflow-hidden rounded-3xl border border-border bg-white p-8 lg:p-10 transition-all duration-500 group-hover:-translate-y-2"
        style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 24px 50px -12px ${theme.hoverShadow}`
          e.currentTarget.style.borderColor = theme.accent
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)"
          e.currentTarget.style.borderColor = ""
        }}
      >
        {/* Top accent line that expands on hover */}
        <div
          className="absolute top-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ease-out"
          style={{ background: theme.gradient }}
        />

        {/* Illustration top-right */}
        <div className="pointer-events-none absolute right-4 top-6 w-40 h-40 lg:w-52 lg:h-52 opacity-90 transition-transform duration-500 group-hover:scale-105">
          <Image
            src={product.illustration || "/placeholder.svg"}
            alt=""
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 160px, 208px"
          />
        </div>

        {/* Header: icon + title + description */}
        <div className="relative z-10 max-w-[60%]">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{ background: theme.gradient, boxShadow: `0 8px 20px -6px ${theme.hoverShadow}` }}
          >
            <product.icon className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-2xl lg:text-3xl font-bold text-[#0f2744] mb-4">{product.title}</h3>
        </div>

        <p className="relative z-10 text-muted-foreground leading-relaxed mb-5 max-w-md">
          {highlightParts[0]}
          {product.highlight && (
            <span className="font-semibold" style={{ color: theme.accent }}>
              {product.highlight}
            </span>
          )}
          {highlightParts[1]}
        </p>

        {/* Accent underline */}
        <div className="relative z-10 h-1 w-12 rounded-full mb-6" style={{ background: theme.gradient }} />

        {/* Divider */}
        <div className="relative z-10 border-t border-border mb-6" />

        {/* Features 2x2 grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-8">
          {product.features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-3">
              <div
                className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: theme.tint }}
              >
                <feature.icon className="w-5 h-5" style={{ color: theme.accent }} />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-[#0f2744]">{feature.title}</div>
                <div className="text-xs text-muted-foreground leading-snug">{feature.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Learn more button */}
        <div className="relative z-10 mt-auto">
          <Link
            href={product.href}
            className="group/btn inline-flex items-center gap-3 rounded-xl px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:brightness-105"
            style={{ background: theme.gradient }}
          >
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
          </Link>
        </div>
      </div>
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
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #0f2744 0%, #b89850 100%)" }}
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
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.title} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
