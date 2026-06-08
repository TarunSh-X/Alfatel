"use client"

import { motion } from "framer-motion"
import { Code, Terminal, Zap, BookOpen, ArrowRight, Copy, Check, Blocks, Webhook } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { GlassCard, GradientBorder, PulsingGlow } from "./animated-elements"

const codeExample = `// Initialize Alfacall client
import { Alfacall } from '@alfacall/sdk';

const client = new Alfacall({
  apiKey: process.env.ALFACALL_API_KEY
});

// Send an SMS message
const message = await client.sms.send({
  to: '+1234567890',
  from: '+0987654321',
  body: 'Hello from Alfacall!'
});

console.log('Message sent:', message.id);`

const features = [
  {
    icon: Terminal,
    title: "RESTful APIs",
    description: "Clean, well-documented REST APIs with predictable resource-oriented URLs.",
    color: "#06b6d4",
  },
  {
    icon: Webhook,
    title: "Webhooks",
    description: "Real-time event notifications for call status, SMS delivery, and more.",
    color: "#f97316",
  },
  {
    icon: Blocks,
    title: "SDKs",
    description: "Official SDKs for Node.js, Python, PHP, Ruby, and more languages.",
    color: "#10b981",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Comprehensive guides, tutorials, and API references to get you started.",
    color: "#8b5cf6",
  },
]

export function DeveloperSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const highlightCode = (line: string) => {
    return line
      .replace(/(\/\/.*)/g, '<span class="text-emerald-400/80">$1</span>')
      .replace(/\b(import|from|const|await|new|process)\b/g, '<span class="text-cyan-400">$1</span>')
      .replace(/('.*?')/g, '<span class="text-amber-400">$1</span>')
      .replace(/\b(client|message|Alfacall|console|env)\b/g, '<span class="text-violet-400">$1</span>')
      .replace(/\b(sms|send|log)\b/g, '<span class="text-orange-400">$1</span>')
  }

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(17, 24, 39, 0.8) 0%, rgba(15, 23, 42, 1) 100%)",
        }}
      />
      
      {/* Gradient orbs */}
      <PulsingGlow color="rgba(249, 115, 22, 0.15)" size="600px" className="top-0 right-0" />
      <PulsingGlow color="rgba(6, 182, 212, 0.1)" size="500px" className="bottom-0 left-0" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-orange-500/30 mb-8"
              style={{
                background: "linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(249, 115, 22, 0.05) 100%)",
                boxShadow: "0 0 20px rgba(249, 115, 22, 0.2)",
              }}
            >
              <Code className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-foreground">For Developers</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Build with
              <br />
              <span 
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #f97316 0%, #06b6d4 100%)",
                  filter: "drop-shadow(0 0 30px rgba(249, 115, 22, 0.3))",
                }}
              >
                Powerful APIs
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-10"
            >
              Integrate voice, SMS, and number management into your applications 
              with our developer-friendly APIs and comprehensive SDKs.
            </motion.p>

            {/* Feature grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-4 mb-10"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <GlassCard 
                    className="p-5 h-full"
                    glowColor={`${feature.color}40`}
                    tiltEnabled={false}
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${feature.color}20` }}
                      >
                        <feature.icon className="w-5 h-5" style={{ color: feature.color }} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                  boxShadow: "0 0 30px rgba(249, 115, 22, 0.4), 0 0 60px rgba(249, 115, 22, 0.2)",
                }}
              >
                <span className="text-white">View Documentation</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Code block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {/* Developer image floating */}
            <motion.div
              className="absolute -top-8 -right-4 w-28 h-28 rounded-2xl overflow-hidden border-2 border-orange-500/30 z-20 hidden lg:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/developer-coding.png"
                alt="Developer coding"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Code card with gradient border */}
            <GradientBorder>
              <div className="relative">
                {/* Window header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-black/30">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-xs text-muted-foreground font-mono ml-2">example.js</span>
                  </div>
                  <motion.button
                    onClick={handleCopy}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-muted-foreground" />
                    )}
                  </motion.button>
                </div>
                
                {/* Code content */}
                <div 
                  className="p-6 overflow-x-auto"
                  style={{ background: "rgba(0,0,0,0.4)" }}
                >
                  <pre className="text-sm font-mono leading-7">
                    <code>
                      {codeExample.split('\n').map((line, i) => (
                        <div key={i} className="flex hover:bg-white/5 -mx-6 px-6 transition-colors">
                          <span className="text-muted-foreground/40 w-8 text-right mr-6 select-none text-xs">
                            {i + 1}
                          </span>
                          <span
                            className="text-foreground/90"
                            dangerouslySetInnerHTML={{ __html: highlightCode(line) || '&nbsp;' }}
                          />
                        </div>
                      ))}
                    </code>
                  </pre>
                </div>
              </div>
            </GradientBorder>

            {/* Glow effect behind code */}
            <div 
              className="absolute -inset-4 rounded-3xl blur-3xl -z-10"
              style={{
                background: "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 60V40C360 20 720 50 1080 30C1260 20 1380 10 1440 10V60H0Z" fill="var(--background)" />
        </svg>
      </div>
    </section>
  )
}
