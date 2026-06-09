"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg"
  showText?: boolean
  href?: string
}

export function AnimatedLogo({ size = "md", showText = true, href = "/" }: AnimatedLogoProps) {
  const sizes = {
    sm: { icon: 44, text: "text-lg", tagline: "text-[8px]", letterSize: 22 },
    md: { icon: 52, text: "text-xl", tagline: "text-[10px]", letterSize: 26 },
    lg: { icon: 72, text: "text-2xl", tagline: "text-xs", letterSize: 36 },
  }

  const config = sizes[size]

  // Signal wave rings animation
  const waveRingVariants = {
    animate: (i: number) => ({
      scale: [1, 1.5, 1.9],
      opacity: [0.6, 0.25, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeOut",
        delay: i * 0.5,
      },
    }),
  }

  // Glow pulse animation
  const glowVariants = {
    animate: {
      opacity: [0.6, 1, 0.6],
      scale: [1, 1.02, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  const LogoContent = () => (
    <div className="flex items-center gap-3 group">
      {/* Animated Icon Container */}
      <motion.div
        className="relative flex items-center justify-center"
        style={{ width: config.icon, height: config.icon }}
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {/* Animated wave rings emanating outward */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-xl"
            style={{ border: "2px solid rgba(255, 190, 50, 0.5)" }}
            custom={i}
            variants={waveRingVariants}
            animate="animate"
          />
        ))}

        {/* Main icon background - Deep Navy Blue */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{
            background: "linear-gradient(145deg, #0d1f38 0%, #152a4a 50%, #0a1628 100%)",
            boxShadow: "0 0 30px rgba(255, 190, 50, 0.35), 0 4px 20px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255,255,255,0.1)",
          }}
          variants={glowVariants}
          animate="animate"
        />

        {/* Inner highlight */}
        <div 
          className="absolute inset-0 rounded-xl"
          style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, transparent 50%)",
          }}
        />

        {/* AC Letters - Bold, Large, Separated with Wave Animation */}
        <div className="relative z-10 flex items-center justify-center">
          {/* Letter A */}
          <motion.span
            style={{ 
              fontSize: config.letterSize,
              color: "#FFBE32",
              textShadow: "0 0 15px rgba(255, 190, 50, 0.7), 0 2px 4px rgba(0,0,0,0.5)",
              fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
            animate={{
              y: [0, -3, 0, 3, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            A
          </motion.span>
          
          {/* Letter C */}
          <motion.span
            style={{ 
              fontSize: config.letterSize,
              color: "#FFBE32",
              textShadow: "0 0 15px rgba(255, 190, 50, 0.7), 0 2px 4px rgba(0,0,0,0.5)",
              fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
            animate={{
              y: [0, 3, 0, -3, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.25,
            }}
          >
            C
          </motion.span>
        </div>

        {/* Signal dots - top right */}
        <motion.div
          className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full"
          style={{ 
            backgroundColor: "#FFBE32",
            boxShadow: "0 0 10px rgba(255, 190, 50, 0.9)",
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1 right-3 w-1.5 h-1.5 rounded-full"
          style={{ 
            backgroundColor: "#FFBE32",
            boxShadow: "0 0 6px rgba(255, 190, 50, 0.7)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
        <motion.div
          className="absolute top-2.5 right-5 w-1 h-1 rounded-full"
          style={{ 
            backgroundColor: "#FFBE32",
            boxShadow: "0 0 4px rgba(255, 190, 50, 0.6)",
          }}
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
        />

        {/* Shimmer effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 overflow-hidden"
        />
      </motion.div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <motion.span
            className={`font-bold text-foreground ${config.text} leading-none tracking-tight`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span style={{ color: "#FFBE32" }}>Alfa</span>
            <span className="text-foreground">call</span>
          </motion.span>
          <motion.span
            className={`${config.tagline} text-muted-foreground tracking-widest uppercase`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Telecom Solutions
          </motion.span>
        </div>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="flex items-center">
        <LogoContent />
      </Link>
    )
  }

  return <LogoContent />
}
