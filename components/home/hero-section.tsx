"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Play, Globe, Zap, Activity, Sparkles } from "lucide-react"
import { AnimatedCounter } from "./animated-elements"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Light gradient background like BTS/Twilio */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #f0f9ff 30%, #e0f2fe 60%, #f0f9ff 100%)",
        }}
      />

      {/* Subtle geometric shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#b89850]/10 blur-3xl" />
      <div className="absolute bottom-40 left-10 w-96 h-96 rounded-full bg-[#0f2744]/5 blur-3xl" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0f2744" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white rounded-full shadow-soft border border-border">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-[#b89850]" />
                </motion.div>
                <span className="text-sm font-medium text-foreground">Enterprise-Grade Infrastructure</span>
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight"
            >
              <span className="text-[#0f2744]">Global</span>
              <br />
              <span 
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #0f2744 0%, #1e3a5f 50%, #b89850 100%)",
                  WebkitBackgroundClip: "text",
                }}
              >
                Telecom
              </span>
              <br />
              <span className="text-[#0f2744]">Solutions</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              Enterprise-grade voice, SMS, and SIP solutions powering millions of 
              connections worldwide. Build the future of communication.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-start gap-4"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 bg-[#0f2744] text-white shadow-medium"
              >
                <span className="relative z-10">Get Started Free</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold rounded-xl border border-border bg-white text-[#0f2744] shadow-soft transition-all duration-300 hover:scale-105 hover:border-[#b89850]/40"
              >
                <Play className="w-4 h-4 text-[#b89850] fill-[#b89850]" />
                <span>Book a Demo</span>
              </Link>
            </motion.div>

            {/* Stats with animated counters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 grid grid-cols-3 gap-6"
            >
              {[
                { end: 180, suffix: "+", label: "Countries", color: "text-[#0f2744]" },
                { end: 99.99, suffix: "%", label: "Uptime SLA", color: "text-emerald-600" },
                { end: 100, suffix: "K+", label: "API Calls/Day", color: "text-[#b89850]" },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className={`text-2xl lg:text-3xl font-bold ${stat.color}`}>
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right content - Hero image - BIGGER and more prominent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-4"
          >
            {/* Main image container - LARGER */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero-call-center.jpg"
                alt="Professional call center team with headsets"
                width={800}
                height={600}
                className="w-full h-[400px] sm:h-[450px] lg:h-[520px] object-cover"
                priority
              />
              
              {/* Subtle gradient overlay for better card visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              {/* Floating cards - repositioned */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute top-6 left-6"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#0f2744]">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0f2744]">Global Network</div>
                      <div className="text-xs text-muted-foreground">180+ Countries</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-24 right-6"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#b89850]">
                      <Zap className="w-5 h-5 text-[#0f2744]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0f2744]">Ultra Fast</div>
                      <div className="text-xs text-muted-foreground">{"<50ms Latency"}</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-sm text-[#0f2744]">Live API Status</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm font-medium text-emerald-600">All Systems Operational</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
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
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  )
}
