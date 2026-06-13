"use client"

import { motion, type Variants } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

interface Breadcrumb {
  name: string
  href: string
}

interface PageHeroProps {
  eyebrow?: string
  eyebrowIcon?: LucideIcon
  title: string
  /** Highlight the last word of the title in gold */
  highlightLastWord?: boolean
  description?: string
  align?: "center" | "left"
  breadcrumbs?: Breadcrumb[]
  /** small feature chips shown under the description */
  highlights?: string[]
  /** optional slot rendered above the eyebrow (e.g. a logo) */
  topSlot?: ReactNode
  /** optional slot rendered to the right on large screens */
  aside?: ReactNode
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function PageHero({
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  title,
  highlightLastWord = false,
  description,
  align = "center",
  breadcrumbs,
  highlights,
  topSlot,
  aside,
}: PageHeroProps) {
  const isCenter = align === "center"
  const words = title.split(" ")

  return (
    <section className="pt-28 pb-24 relative overflow-hidden bg-[#0f2744]">
      {/* Brand gradient base */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #0f2744 0%, #16335a 55%, #0a1c33 100%)" }}
      />

      {/* Light animated brand glows (replaces the blocky grid pattern) */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-32 -right-20 w-[28rem] h-[28rem] rounded-full bg-[#b89850]/10 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-sky-400/10 blur-3xl"
        animate={{ x: [0, -24, 0], y: [0, -18, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-[#b89850]/5 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Soft animated diagonal sheen */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.6) 50%, transparent 70%)",
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["120% 0%", "-20% 0%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center gap-1.5 text-sm text-white/50 mb-8 ${isCenter ? "justify-center" : ""}`}
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-white/30" />}
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-[#b89850]">{crumb.name}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.name}
                  </Link>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <div className={`grid gap-12 items-center ${aside ? "lg:grid-cols-2" : "lg:grid-cols-1"}`}>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className={isCenter && !aside ? "max-w-3xl mx-auto text-center" : "max-w-2xl"}
          >
            {topSlot && (
              <motion.div variants={item} className={`mb-6 flex ${isCenter && !aside ? "justify-center" : ""}`}>
                {topSlot}
              </motion.div>
            )}

            {eyebrow && (
              <motion.div
                variants={item}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#b89850]/15 border border-[#b89850]/30 text-[#b89850] text-sm font-medium mb-6"
              >
                {EyebrowIcon && <EyebrowIcon className="w-4 h-4" />}
                {eyebrow}
              </motion.div>
            )}

            <h1 className="text-4xl lg:text-6xl font-bold text-white text-balance leading-[1.05]">
              {words.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  variants={item}
                  className={`inline-block mr-[0.25em] ${
                    highlightLastWord && i === words.length - 1 ? "text-[#b89850]" : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {description && (
              <motion.p
                variants={item}
                className={`mt-6 text-lg lg:text-xl text-white/70 leading-relaxed ${
                  isCenter && !aside ? "max-w-2xl mx-auto" : ""
                }`}
              >
                {description}
              </motion.p>
            )}

            {highlights && highlights.length > 0 && (
              <motion.ul
                variants={item}
                className={`mt-8 flex flex-wrap gap-3 ${isCenter && !aside ? "justify-center" : ""}`}
              >
                {highlights.map((h) => (
                  <li
                    key={h}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b89850]" />
                    {h}
                  </li>
                ))}
              </motion.ul>
            )}
          </motion.div>

          {aside && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              {aside}
            </motion.div>
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
