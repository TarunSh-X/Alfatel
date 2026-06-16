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
      accent: "#b89850",
      tint: "rgba(184, 152, 80, 0.1)",
      gradient: "linear-gradient(135deg, #cbac63 0%, #b89850 100%)",
      hoverShadow: "rgba(184, 152, 80, 0.22)",
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
      { icon: Globe, title: "Global Reach", description: "Connect with 180+ countries worldwide." },
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
        className="relative h-full flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all duration-500 group-hover:-translate-y-1.5"
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
        <div className="pointer-events-none absolute right-3 top-4 w-28 h-28 lg:w-32 lg:h-32 opacity-90 transition-transform duration-500 group-hover:scale-105">
          <Image
            src={product.illustration || "/placeholder.svg"}
            alt=""
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 112px, 128px"
          />
        </div>

        {/* Header: icon + title + description */}
        <div className="relative z-10 max-w-[62%]">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{ background: theme.gradient, boxShadow: `0 8px 20px -6px ${theme.hoverShadow}` }}
          >
            <product.icon className="w-6 h-6 text-white" />
          </div>

          <h3 className="text-xl lg:text-2xl font-bold text-[#0f2744] mb-2">{product.title}</h3>
        </div>

        <p className="relative z-10 text-sm text-muted-foreground leading-relaxed mb-3 max-w-md">
          {highlightParts[0]}
          {product.highlight && (
            <span className="font-semibold" style={{ color: theme.accent }}>
              {product.highlight}
            </span>
          )}
          {highlightParts[1]}
        </p>

        {/* Accent underline */}
        <div className="relative z-10 h-1 w-12 rounded-full mb-4" style={{ background: theme.gradient }} />

        {/* Divider */}
        <div className="relative z-10 border-t border-border mb-4" />

        {/* Features 2x2 grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-5">
          {product.features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-2.5">
              <div
                className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: theme.tint }}
              >
                <feature.icon className="w-4 h-4" style={{ color: theme.accent }} />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-[#0f2744] leading-tight">{feature.title}</div>
                <div className="text-xs text-muted-foreground leading-snug">{feature.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Learn more button */}
        <div className="relative z-10 mt-auto">
          <Link
            href={product.href}
            className="group/btn inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:brightness-105"
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
    <section className="py-16 relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-secondary mb-5"
          >
            <Wifi className="w-4 h-4 text-[#0f2744]" />
            <span className="text-sm font-medium text-[#0f2744]">Our Products</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-[#0f2744] mb-4"
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
            className="text-base text-muted-foreground max-w-2xl mx-auto"
          >
            Everything you need to build, scale, and manage global telecommunications
            with enterprise-grade reliability and performance.
          </motion.p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.title} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
