"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface PageHeroProps {
  eyebrow?: string
  eyebrowIcon?: LucideIcon
  title: string
  description?: string
  align?: "center" | "left"
}

export function PageHero({
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  title,
  description,
  align = "center",
}: PageHeroProps) {
  const isCenter = align === "center"

  return (
    <section className="pt-32 pb-20 relative overflow-hidden bg-[#0f2744]">
      {/* Brand gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0f2744 0%, #16335a 55%, #0a1c33 100%)",
        }}
      />

      {/* Soft brand glows */}
      <div className="absolute -top-24 -right-16 w-96 h-96 rounded-full bg-[#FFBE32]/10 blur-3xl" />
      <div className="absolute bottom-0 -left-24 w-96 h-96 rounded-full bg-[#FFBE32]/5 blur-3xl" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.07]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="page-hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#page-hero-grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={isCenter ? "max-w-3xl mx-auto text-center" : "max-w-3xl"}>
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFBE32]/15 border border-[#FFBE32]/30 text-[#FFBE32] text-sm font-medium mb-6 ${
                isCenter ? "" : ""
              }`}
            >
              {EyebrowIcon && <EyebrowIcon className="w-4 h-4" />}
              {eyebrow}
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold text-white text-balance"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`mt-6 text-xl text-white/70 ${isCenter ? "max-w-2xl mx-auto" : ""}`}
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>

      {/* Curved divider into the white content below (matches homepage hero) */}
      <div className="absolute bottom-0 left-0 right-0 leading-[0]">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 100V60C360 80 720 40 1080 60C1260 70 1380 80 1440 80V100H0Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}
