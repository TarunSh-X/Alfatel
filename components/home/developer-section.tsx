"use client"

import { motion } from "framer-motion"
import { Code, Terminal, Zap, BookOpen, ArrowRight, Copy, Check, Blocks, Webhook, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const codeExample = `// Initialize AlfaCall client
import { AlfaCall } from '@alfacall/sdk';

const client = new AlfaCall({
  apiKey: process.env.ALFACALL_API_KEY
});

// Send an SMS message
const message = await client.sms.send({
  to: '+1234567890',
  from: '+0987654321',
  body: 'Hello from AlfaCall!'
});

console.log('Message sent:', message.id);`

const apiFeatures = [
  {
    number: "01",
    title: "RESTful APIs",
    description: "Clean, well-documented REST APIs with predictable resource-oriented URLs and comprehensive error handling.",
    icon: Terminal,
  },
  {
    number: "02",
    title: "Webhooks",
    description: "Real-time event notifications for call status, SMS delivery, and more. Never miss an update.",
    icon: Webhook,
  },
  {
    number: "03",
    title: "SDKs & Libraries",
    description: "Official SDKs for Node.js, Python, PHP, Ruby, Go, and Java. Get started in minutes.",
    icon: Blocks,
  },
  {
    number: "04",
    title: "Documentation",
    description: "Comprehensive guides, tutorials, code samples, and API references to accelerate your development.",
    icon: BookOpen,
  },
]

const quickLinks = [
  { label: "API Reference", href: "/services" },
  { label: "Quick Start Guide", href: "/services" },
  { label: "Code Samples", href: "/services" },
  { label: "SDKs", href: "/services" },
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
      .replace(/(\/\/.*)/g, '<span class="text-slate-500">$1</span>')
      .replace(/\b(import|from|const|await|new|process)\b/g, '<span class="text-blue-600">$1</span>')
      .replace(/('.*?')/g, '<span class="text-amber-600">$1</span>')
      .replace(/\b(client|message|AlfaCall|console|env)\b/g, '<span class="text-violet-600">$1</span>')
      .replace(/\b(sms|send|log)\b/g, '<span class="text-emerald-600">$1</span>')
  }

  return (
    <section className="py-20 relative overflow-x-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-50">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(15, 39, 68, 0.03) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f2744]/5 border border-[#0f2744]/10 mb-6"
          >
            <Code className="w-4 h-4 text-[#0f2744]" />
            <span className="text-sm font-medium text-[#0f2744]">For Developers</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-[#0f2744] mb-6"
          >
            Build with{" "}
            <span 
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #b89850, #9e8344)" }}
            >
              Powerful APIs
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Integrate voice, SMS, and number management into your applications 
            with our developer-friendly APIs and comprehensive SDKs.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: API Features with numbers like BTS */}
          <div className="space-y-8 overflow-hidden">
            {apiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-4 sm:gap-6 pr-2">
                  {/* Number */}
                  <div className="flex-shrink-0 w-10 sm:w-16">
                    <span 
                      className="text-3xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text"
                      style={{ backgroundImage: "linear-gradient(180deg, #0f2744 0%, rgba(15, 39, 68, 0.2) 100%)" }}
                    >
                      {feature.number}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0 pt-1">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 flex-wrap">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#b89850]/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#b89850]" />
                      </div>
                      <h3 className="text-sm sm:text-xl font-bold text-[#0f2744]">{feature.title}</h3>
                    </div>
                    <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    {/* Underline accent */}
                    <div className="mt-4 h-px bg-gradient-to-r from-[#b89850]/50 via-[#0f2744]/10 to-transparent w-full" />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-8"
            >
              <div className="flex flex-wrap gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#0f2744] bg-white border border-[#0f2744]/10 rounded-lg hover:border-[#b89850] hover:bg-[#b89850]/5 transition-all duration-300"
                  >
                    {link.label}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Code block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative lg:sticky lg:top-32"
          >
            {/* Code card */}
            <div className="relative rounded-2xl overflow-hidden border border-[#0f2744]/10 shadow-xl bg-[#0f2744]">
              {/* Window header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#0a1929]">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-white/50 font-mono ml-2">example.js</span>
                </div>
                <motion.button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xs text-white/70"
                  whileTap={{ scale: 0.95 }}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy code</span>
                    </>
                  )}
                </motion.button>
              </div>
              
              {/* Code content */}
              <div className="p-6 overflow-x-auto bg-[#0f2744]">
                <pre className="text-sm font-mono leading-7">
                  <code>
                    {codeExample.split('\n').map((line, i) => (
                      <div key={i} className="flex hover:bg-white/5 -mx-6 px-6 transition-colors">
                        <span className="text-white/20 w-8 text-right mr-6 select-none text-xs">
                          {i + 1}
                        </span>
                        <span
                          className="text-white/90"
                          dangerouslySetInnerHTML={{ __html: highlightCode(line) || '&nbsp;' }}
                        />
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>

            {/* CTA below code */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-center"
            >
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl text-[#0f2744] transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #b89850, #9e8344)",
                  boxShadow: "0 4px 20px rgba(184, 152, 80, 0.3)",
                }}
              >
                <span>View Documentation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Decorative glow */}
            <div 
              className="absolute -inset-4 rounded-3xl blur-3xl -z-10 opacity-20"
              style={{
                background: "linear-gradient(135deg, rgba(15, 39, 68, 0.3) 0%, rgba(184, 152, 80, 0.15) 100%)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
