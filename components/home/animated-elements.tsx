"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({ 
  end, 
  suffix = "", 
  prefix = "", 
  duration = 2,
  className = "" 
}: AnimatedCounterProps) {
  // Initialize to the final value so the server-rendered HTML (and first client
  // render) contain the real number. This keeps the value visible to crawlers
  // and avoids hydration mismatches. The count-up animation runs after mount.
  const [count, setCount] = useState(end)
  const [mounted, setMounted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const hasAnimated = useRef(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && inView && !hasAnimated.current) {
      hasAnimated.current = true
      setCount(0)
      const startTime = Date.now()
      const endTime = startTime + duration * 1000

      const updateCount = () => {
        const now = Date.now()
        const progress = Math.min((now - startTime) / (duration * 1000), 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(easeOutQuart * end)
        
        setCount(currentCount)

        if (now < endTime) {
          requestAnimationFrame(updateCount)
        } else {
          setCount(end)
        }
      }

      requestAnimationFrame(updateCount)
    }
  }, [mounted, inView, end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

// Glassmorphism card component with 3D tilt effect
interface GlassCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
  tiltEnabled?: boolean
}

export function GlassCard({ 
  children, 
  className = "", 
  glowColor = "rgba(6, 182, 212, 0.3)",
  tiltEnabled = true 
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltEnabled || !cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const tiltX = (y - centerY) / 20
    const tiltY = (centerX - x) / 20
    
    setTilt({ x: tiltX, y: tiltY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative rounded-2xl backdrop-blur-xl border border-white/10 transition-all duration-300 ${className}`}
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        boxShadow: isHovered 
          ? `0 25px 50px -12px rgba(0,0,0,0.5), 0 0 50px ${glowColor}, inset 0 1px 0 rgba(255,255,255,0.1)` 
          : "0 10px 30px -10px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Inner glow on hover */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${glowColor}, transparent 70%)`,
          opacity: isHovered ? 0.5 : 0,
        }}
      />
      {children}
    </motion.div>
  )
}

// Animated gradient border
export function GradientBorder({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative p-[1px] rounded-2xl overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, #06b6d4, #f97316, #06b6d4)",
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative bg-card rounded-2xl overflow-hidden">
        {children}
      </div>
    </div>
  )
}

// Pulsing glow effect
export function PulsingGlow({ 
  color = "rgba(6, 182, 212, 0.4)", 
  size = "400px",
  className = "" 
}: { 
  color?: string
  size?: string
  className?: string 
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}
