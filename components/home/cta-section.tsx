"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Zap, Globe, Shield } from "lucide-react"
import { PulsingGlow } from "./animated-elements"

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background with gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0c1929 0%, #0a1628 50%, #0f172a 100%)",
        }}
      />

      {/* Animated gradient mesh */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 80% 50%, rgba(249, 115, 22, 0.2) 0%, transparent 50%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-500/30 mb-8"
            style={{
              background: "linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(6, 182, 212, 0.05) 100%)",
              boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </motion.div>
            <span className="text-sm font-medium text-foreground">Start Building Today</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Ready to Transform Your
            <br />
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #06b6d4 0%, #22d3ee 30%, #f97316 70%, #fb923c 100%)",
                filter: "drop-shadow(0 0 40px rgba(6, 182, 212, 0.4))",
              }}
            >
              Communications?
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Join 500+ enterprises using Alfacall to power their global communications. 
            Start with our free tier and scale as you grow.
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm text-muted-foreground"
          >
            {[
              { icon: Zap, text: "No setup fees" },
              { icon: Globe, text: "Pay as you go" },
              { icon: Shield, text: "Enterprise security" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-cyan-400" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-10 py-5 font-bold text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
                boxShadow: "0 0 40px rgba(6, 182, 212, 0.5), 0 0 80px rgba(6, 182, 212, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
            >
              <span className="relative z-10 text-white">Get Started Free</span>
              <ArrowRight className="relative z-10 w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-orange-400 to-cyan-400"
                style={{ backgroundSize: "200% 100%" }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 0%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-5 font-semibold text-lg rounded-2xl border border-white/20 text-foreground hover:bg-white/5 hover:border-cyan-500/50 transition-all duration-300"
            >
              Contact Sales
            </Link>
          </motion.div>

          {/* Trust text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            No credit card required. Free tier includes 1,000 API calls/month.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
