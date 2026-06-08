"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Play, Globe, Zap, Shield, Sparkles, Activity } from "lucide-react"
import { AnimatedCounter, GlassCard, PulsingGlow } from "./animated-elements"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Deep gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #030712 0%, #0a1628 30%, #0f172a 50%, #0a1628 70%, #030712 100%)",
        }}
      />

      {/* Animated gradient orbs */}
      <PulsingGlow 
        color="rgba(6, 182, 212, 0.3)" 
        size="800px" 
        className="top-0 -left-40" 
      />
      <PulsingGlow 
        color="rgba(249, 115, 22, 0.2)" 
        size="600px" 
        className="bottom-0 -right-40" 
      />
      <PulsingGlow 
        color="rgba(139, 92, 246, 0.15)" 
        size="500px" 
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Floating network lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
            style={{
              width: `${30 + i * 10}%`,
              top: `${15 + i * 18}%`,
              left: `${i * 5}%`,
            }}
            animate={{
              x: ["-100%", "200%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard 
                className="inline-flex items-center gap-2 px-4 py-2 mb-8"
                glowColor="rgba(6, 182, 212, 0.4)"
                tiltEnabled={false}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </motion.div>
                <span className="text-sm font-medium text-foreground/90">Enterprise-Grade Infrastructure</span>
              </GlassCard>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
            >
              <span className="text-foreground">Global</span>
              <br />
              <span 
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #06b6d4 0%, #22d3ee 50%, #f97316 100%)",
                  WebkitBackgroundClip: "text",
                  filter: "drop-shadow(0 0 30px rgba(6, 182, 212, 0.5))",
                }}
              >
                Telecom
              </span>
              <br />
              <span className="text-foreground">Solutions</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              Enterprise-grade voice, SMS, and SIP solutions powering millions of 
              connections worldwide. Build the future of communication.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-start gap-4"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
                  boxShadow: "0 0 30px rgba(6, 182, 212, 0.4), 0 0 60px rgba(6, 182, 212, 0.2)",
                }}
              >
                <span className="relative z-10 text-white">Get Started Free</span>
                <ArrowRight className="relative z-10 w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-orange-400"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
              
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-white/10 hover:border-cyan-500/50 hover:bg-white/5 transition-all duration-300"
              >
                <motion.div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(249, 115, 22, 0.2) 0%, rgba(249, 115, 22, 0.1) 100%)",
                    boxShadow: "0 0 20px rgba(249, 115, 22, 0.3)",
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Play className="w-5 h-5 text-orange-400 fill-orange-400 ml-0.5" />
                </motion.div>
                <span className="text-foreground font-medium">Watch Demo</span>
              </Link>
            </motion.div>

            {/* Stats with animated counters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-14 grid grid-cols-3 gap-8"
            >
              {[
                { end: 180, suffix: "+", label: "Countries", color: "text-cyan-400" },
                { end: 99.99, suffix: "%", label: "Uptime SLA", color: "text-emerald-400" },
                { end: 10, suffix: "B+", label: "API Calls/Day", color: "text-orange-400" },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className={`text-3xl lg:text-4xl font-bold ${stat.color}`} style={{ textShadow: `0 0 30px currentColor` }}>
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right content - Hero image with glassmorphism cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Glowing backdrop */}
            <div 
              className="absolute inset-0 rounded-3xl blur-3xl"
              style={{
                background: "linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(249, 115, 22, 0.1) 100%)",
                transform: "scale(1.1)",
              }}
            />

            {/* Main image container */}
            <GlassCard className="relative p-1 overflow-hidden" glowColor="rgba(6, 182, 212, 0.4)">
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/hero-telecom.png"
                  alt="Professional using telecom solutions"
                  width={700}
                  height={550}
                  className="w-full h-auto object-cover"
                  priority
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Floating glass cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute top-8 left-8"
              >
                <GlassCard className="p-4" glowColor="rgba(6, 182, 212, 0.5)" tiltEnabled={false}>
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, rgba(6, 182, 212, 0.3) 0%, rgba(6, 182, 212, 0.1) 100%)" }}
                    >
                      <Globe className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">Global Network</div>
                      <div className="text-xs text-muted-foreground">180+ Countries</div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-24 right-8"
              >
                <GlassCard className="p-4" glowColor="rgba(249, 115, 22, 0.5)" tiltEnabled={false}>
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, rgba(249, 115, 22, 0.3) 0%, rgba(249, 115, 22, 0.1) 100%)" }}
                    >
                      <Zap className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">Ultra Fast</div>
                      <div className="text-xs text-muted-foreground">{"<50ms Latency"}</div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-8 left-8 right-8"
              >
                <GlassCard className="p-4" glowColor="rgba(16, 185, 129, 0.4)" tiltEnabled={false}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-sm text-foreground">Live API Status</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm font-medium text-emerald-400">All Systems Operational</span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      {/* Curved section divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100V60C360 80 720 40 1080 60C1260 70 1380 80 1440 80V100H0Z"
            fill="var(--background)"
          />
        </svg>
      </div>
    </section>
  )
}
