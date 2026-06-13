"use client"

import { motion } from "framer-motion"
import { Globe, Users, TrendingUp, Headphones, Zap, Shield } from "lucide-react"
import { AnimatedCounter } from "./animated-elements"
import { PartnerCarousel } from "./partner-carousel"

const stats = [
  { icon: Globe, value: 180, suffix: "+", label: "Countries Covered", color: "#0f2744" },
  { icon: Users, value: 500, suffix: "+", label: "Enterprise Clients", color: "#b89850" },
  { icon: TrendingUp, value: 99.99, suffix: "%", label: "Uptime Guarantee", color: "#10b981" },
  { icon: Headphones, value: 24, suffix: "/7", label: "Expert Support", color: "#3b82f6" },
]

export function TrustSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground font-medium mb-4">
            Trusted by Industry Leaders Worldwide
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#0f2744]">
            Powering Communications for{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #0f2744, #b89850)" }}>
              Fortune 500 Companies
            </span>
          </h2>
        </motion.div>

        {/* Partner logo carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-20"
        >
          <PartnerCarousel />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="p-8 text-center h-full bg-white rounded-2xl border border-border shadow-soft card-hover">
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}15` }}
                  whileHover={{ scale: 1.1 }}
                >
                  <stat.icon className="w-7 h-7" style={{ color: stat.color }} />
                </motion.div>

                {/* Animated counter */}
                <div className="text-4xl lg:text-5xl font-bold mb-2" style={{ color: stat.color }}>
                  <AnimatedCounter 
                    end={stat.value} 
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
        >
          {[
            { icon: Shield, text: "SOC 2 Compliant" },
            { icon: Zap, text: "99.99% SLA Guaranteed" },
            { icon: Globe, text: "ISO 27001 Certified" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-[#0f2744]" />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
