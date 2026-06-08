"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let nodes: Node[] = []
    const nodeCount = 50
    const connectionDistance = 150
    const mouseRadius = 200

    const mouse = { x: -1000, y: -1000 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createNodes = () => {
      nodes = []
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx
        node.y += node.vy

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Draw connections
        nodes.forEach((other, j) => {
          if (i === j) return
          const dx = other.x - node.x
          const dy = other.y - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.3
            ctx.beginPath()
            ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`
            ctx.lineWidth = 1
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        })

        // Mouse interaction
        const dx = mouse.x - node.x
        const dy = mouse.y - node.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseRadius) {
          const opacity = (1 - distance / mouseRadius) * 0.6
          ctx.beginPath()
          ctx.strokeStyle = `rgba(249, 115, 22, ${opacity})`
          ctx.lineWidth = 1.5
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }

        // Draw node
        ctx.beginPath()
        ctx.fillStyle = `rgba(6, 182, 212, 0.6)`
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationId = requestAnimationFrame(draw)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    resize()
    createNodes()
    draw()

    window.addEventListener("resize", () => {
      resize()
      createNodes()
    })
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  )
}

// Animated wave pattern SVG
export function WavePattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute w-full h-auto ${className}`}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      fill="none"
    >
      <motion.path
        d="M0 60L48 65C96 70 192 80 288 82.7C384 85.3 480 80.7 576 73.3C672 66 768 56 864 56.7C960 57.3 1056 68.7 1152 71.7C1248 74.7 1344 69.3 1392 66.7L1440 64V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
        fill="url(#wave-gradient)"
        initial={{ d: "M0 60L48 65C96 70 192 80 288 82.7C384 85.3 480 80.7 576 73.3C672 66 768 56 864 56.7C960 57.3 1056 68.7 1152 71.7C1248 74.7 1344 69.3 1392 66.7L1440 64V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z" }}
        animate={{
          d: [
            "M0 60L48 65C96 70 192 80 288 82.7C384 85.3 480 80.7 576 73.3C672 66 768 56 864 56.7C960 57.3 1056 68.7 1152 71.7C1248 74.7 1344 69.3 1392 66.7L1440 64V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z",
            "M0 70L48 67C96 64 192 58 288 58.7C384 59.3 480 66.7 576 70C672 73.3 768 72.7 864 68.7C960 64.7 1056 57.3 1152 55.7C1248 54 1344 58 1392 60L1440 62V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V70Z",
            "M0 60L48 65C96 70 192 80 288 82.7C384 85.3 480 80.7 576 73.3C672 66 768 56 864 56.7C960 57.3 1056 68.7 1152 71.7C1248 74.7 1344 69.3 1392 66.7L1440 64V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <defs>
        <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="0">
          <stop offset="0%" stopColor="rgba(6, 182, 212, 0.1)" />
          <stop offset="50%" stopColor="rgba(249, 115, 22, 0.05)" />
          <stop offset="100%" stopColor="rgba(6, 182, 212, 0.1)" />
        </linearGradient>
      </defs>
    </svg>
  )
}

// Section divider with curve
export function SectionDivider({ 
  flip = false, 
  color = "bg-card" 
}: { 
  flip?: boolean
  color?: string 
}) {
  return (
    <div className={`relative h-20 -mt-1 ${flip ? "rotate-180" : ""}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 80V30C240 60 480 80 720 70C960 60 1200 30 1440 20V80H0Z"
          className={`fill-current ${color.replace("bg-", "text-")}`}
        />
      </svg>
    </div>
  )
}
