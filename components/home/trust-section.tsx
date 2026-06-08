"use client"

import { motion } from "framer-motion"
import { Globe, Users, TrendingUp, Headphones, Zap, Shield } from "lucide-react"
import { AnimatedCounter, GlassCard, PulsingGlow } from "./animated-elements"

const logos = [
  { name: "TechCorp", initials: "TC" },
  { name: "GlobalNet", initials: "GN" },
  { name: "CloudSystems", initials: "CS" },
  { name: "DataFlow", initials: "DF" },
  { name: "NetWorks", initials: "NW" },
  { name: "CommHub", initials: "CH" },
]

const stats = [
  { icon: Globe, value: 180, suffix: "+", label: "Countries Covered", color: "#06b6d4", gradient: "from-cyan-500 to-blue-500" },
  { icon: Users, value: 500, suffix: "+", label: "Enterprise Clients", color: "#f97316", gradient: "from-orange-500 to-amber-500" },
  { icon: TrendingUp, value: 99.99, suffix: "%", label: "Uptime Guarantee", color: "#10b981", gradient: "from-emerald-500 to-teal-500" },
  { icon: Headphones, value: 24, suffix: "/7", label: "Expert Support", color: "#8b5cf6", gradient: "from-violet-500 to-purple-500" },
]

export function TrustSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(30, 41, 59, 0.3) 0%, rgba(15, 23, 42, 0.5) 100%)",
        }}
      />

      {/* Floating orbs */}
      <PulsingGlow color="rgba(6, 182, 212, 0.1)" size="400px" className="top-0 left-0" />
      <PulsingGlow color="rgba(249, 115, 22, 0.08)" size="350px" className="bottom-0 right-0" />

      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

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
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
            Powering Communications for{" "}
            <span 
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #06b6d4, #f97316)" }}
            >
              Fortune 500 Companies
            </span>
          </h2>
        </motion.div>

        {/* Logo cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-20"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center justify-center h-16 rounded-xl border border-white/10 text-muted-foreground font-bold text-lg hover:text-cyan-400 hover:border-cyan-500/30 transition-all cursor-pointer"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                backdropFilter: "blur(10px)",
              }}
            >
              {logo.initials}
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Grid with Glassmorphism */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <GlassCard 
                className="p-8 text-center h-full"
                glowColor={`${stat.color}40`}
              >
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}10)`,
                    boxShadow: `0 0 30px ${stat.color}20`,
                  }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <stat.icon className="w-7 h-7" style={{ color: stat.color }} />
                </motion.div>

                {/* Animated counter */}
                <div 
                  className="text-4xl lg:text-5xl font-bold mb-2"
                  style={{ 
                    color: stat.color,
                    textShadow: `0 0 40px ${stat.color}60`,
                  }}
                >
                  <AnimatedCounter 
                    end={stat.value} 
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </GlassCard>
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
              <item.icon className="w-4 h-4 text-cyan-400" />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
