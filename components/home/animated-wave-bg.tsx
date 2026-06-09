"use client"

import { motion } from "framer-motion"

export function AnimatedWaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#0f2744] via-[#1a365d] to-[#0f2744]">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(255, 190, 50, 0.4) 0%, transparent 70%)",
          top: "-20%",
          right: "-10%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(255, 190, 50, 0.3) 0%, transparent 70%)",
          bottom: "10%",
          left: "20%",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Animated wave lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 190, 50, 0)" />
            <stop offset="50%" stopColor="rgba(255, 190, 50, 0.5)" />
            <stop offset="100%" stopColor="rgba(255, 190, 50, 0)" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 190, 50, 0)" />
            <stop offset="50%" stopColor="rgba(255, 190, 50, 0.3)" />
            <stop offset="100%" stopColor="rgba(255, 190, 50, 0)" />
          </linearGradient>
          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.1)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>
        </defs>
        
        {/* Wave 1 */}
        <motion.path
          d="M0,200 Q150,150 300,200 T600,200 T900,200 T1200,200 T1500,200"
          fill="none"
          stroke="url(#waveGradient1)"
          strokeWidth="2"
          initial={{ pathOffset: 0 }}
          animate={{ pathOffset: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            filter: "blur(1px)",
          }}
        />
        
        {/* Wave 2 */}
        <motion.path
          d="M0,250 Q200,200 400,250 T800,250 T1200,250 T1600,250"
          fill="none"
          stroke="url(#waveGradient2)"
          strokeWidth="3"
          animate={{
            d: [
              "M0,250 Q200,200 400,250 T800,250 T1200,250 T1600,250",
              "M0,250 Q200,300 400,250 T800,250 T1200,250 T1600,250",
              "M0,250 Q200,200 400,250 T800,250 T1200,250 T1600,250",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Wave 3 */}
        <motion.path
          d="M0,300 Q250,250 500,300 T1000,300 T1500,300"
          fill="none"
          stroke="url(#waveGradient3)"
          strokeWidth="1.5"
          animate={{
            d: [
              "M0,300 Q250,250 500,300 T1000,300 T1500,300",
              "M0,300 Q250,350 500,300 T1000,300 T1500,300",
              "M0,300 Q250,250 500,300 T1000,300 T1500,300",
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </svg>
      
      {/* Floating particles - using fixed positions to avoid hydration issues */}
      {[
        { size: 4, gold: true, left: 15, top: 20, duration: 4, delay: 0 },
        { size: 3, gold: false, left: 25, top: 45, duration: 5, delay: 0.5 },
        { size: 5, gold: true, left: 40, top: 15, duration: 3.5, delay: 1 },
        { size: 2, gold: false, left: 55, top: 70, duration: 4.5, delay: 0.3 },
        { size: 6, gold: true, left: 70, top: 35, duration: 5.5, delay: 1.5 },
        { size: 3, gold: false, left: 85, top: 55, duration: 4, delay: 0.8 },
        { size: 4, gold: true, left: 30, top: 80, duration: 5, delay: 1.2 },
        { size: 5, gold: false, left: 60, top: 25, duration: 3.8, delay: 0.6 },
        { size: 2, gold: true, left: 80, top: 85, duration: 4.2, delay: 1.8 },
        { size: 4, gold: false, left: 45, top: 60, duration: 5.2, delay: 0.4 },
        { size: 3, gold: true, left: 10, top: 50, duration: 4.8, delay: 1.1 },
        { size: 5, gold: false, left: 90, top: 30, duration: 3.6, delay: 0.7 },
      ].map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            background: particle.gold ? "rgba(255, 190, 50, 0.6)" : "rgba(255, 255, 255, 0.3)",
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 190, 50, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 190, 50, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
      
      {/* Bottom wave shape */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ height: "80px" }}
      >
        <motion.path
          fill="rgba(255, 190, 50, 0.1)"
          animate={{
            d: [
              "M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z",
              "M0,60 C360,0 720,120 1080,60 C1260,30 1380,90 1440,60 L1440,120 L0,120 Z",
              "M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          fill="rgba(255, 255, 255, 0.05)"
          animate={{
            d: [
              "M0,80 C480,40 960,120 1440,80 L1440,120 L0,120 Z",
              "M0,80 C480,120 960,40 1440,80 L1440,120 L0,120 Z",
              "M0,80 C480,40 960,120 1440,80 L1440,120 L0,120 Z",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </svg>
    </div>
  )
}
