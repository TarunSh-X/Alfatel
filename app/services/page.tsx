"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, MessageSquare, Hash, Code, Terminal, Zap, BookOpen, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "voice-api",
    icon: Phone,
    title: "Voice API",
    description: "Build voice applications with programmable call control, IVR, recording, and real-time transcription.",
    features: [
      "Programmable call control",
      "Interactive Voice Response (IVR)",
      "Call recording and storage",
      "Real-time transcription",
      "Conference calling",
      "Call analytics and CDRs",
    ],
    codeExample: `// Make an outbound call
const call = await alfacall.calls.create({
  to: '+1234567890',
  from: '+0987654321',
  url: 'https://your-app.com/call-handler'
});`,
  },
  {
    id: "messaging-api",
    icon: MessageSquare,
    title: "Messaging API",
    description: "Send and receive SMS, MMS, and WhatsApp messages globally with powerful delivery tracking.",
    features: [
      "SMS and MMS support",
      "Two-way messaging",
      "Delivery webhooks",
      "Message templates",
      "Shortcode support",
      "Unicode and concatenation",
    ],
    codeExample: `// Send an SMS message
const message = await alfacall.messages.create({
  to: '+1234567890',
  from: '+0987654321',
  body: 'Hello from Alfacall!'
});`,
  },
  {
    id: "number-management",
    icon: Hash,
    title: "Number Management",
    description: "Search, provision, and manage phone numbers programmatically across 100+ countries.",
    features: [
      "Number search and filtering",
      "Instant provisioning",
      "Number configuration",
      "Porting management",
      "Regulatory compliance",
      "Number lifecycle management",
    ],
    codeExample: `// Search available numbers
const numbers = await alfacall.numbers.search({
  country: 'US',
  type: 'local',
  areaCode: '212'
});`,
  },
]

const sdks = [
  { name: "Node.js", icon: "JS" },
  { name: "Python", icon: "PY" },
  { name: "PHP", icon: "PHP" },
  { name: "Ruby", icon: "RB" },
  { name: "Java", icon: "JV" },
  { name: "C#", icon: "C#" },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section 
          className="pt-32 pb-20 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)" }}
        >
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6"
            >
              <Code className="w-4 h-4" />
              Developer Services
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold text-white text-balance"
            >
              APIs for Modern Communications
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-xl text-white/70 max-w-2xl mx-auto"
            >
              Build powerful voice and messaging applications with our developer-friendly APIs and SDKs.
            </motion.p>
          </div>
        </section>

        {/* Services */}
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-24 ${index % 2 === 0 ? "bg-background" : "bg-secondary/50"}`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={index % 2 === 1 ? "lg:order-2" : ""}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-foreground">
                        <Zap className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button size="lg" asChild className="mt-8">
                    <Link href="/contact">
                      Get API Access
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={index % 2 === 1 ? "lg:order-1" : ""}
                >
                  <div className="rounded-2xl bg-[#1a1a2e] border border-foreground/10 overflow-hidden shadow-2xl">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-foreground/10">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      <span className="ml-4 text-xs text-foreground/40 font-mono">example.js</span>
                    </div>
                    <div className="p-6 overflow-x-auto">
                      <pre className="text-sm font-mono text-foreground/80 whitespace-pre-wrap">
                        {service.codeExample}
                      </pre>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {/* SDKs */}
        <section id="developer" className="py-24 bg-foreground text-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Official SDKs
              </h2>
              <p className="mt-4 text-lg text-background/70">
                Get started quickly with our official libraries for your favorite language.
              </p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {sdks.map((sdk) => (
                <motion.div
                  key={sdk.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-background/10 border border-background/20 text-center hover:bg-background/20 transition-colors"
                >
                  <div className="text-2xl font-mono font-bold text-primary mb-2">{sdk.icon}</div>
                  <div className="text-sm text-background/70">{sdk.name}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {[
                { icon: Terminal, title: "RESTful APIs", description: "Clean, well-documented REST APIs with predictable resource-oriented URLs." },
                { icon: Zap, title: "Webhooks", description: "Real-time event notifications for call status, message delivery, and more." },
                { icon: BookOpen, title: "Documentation", description: "Comprehensive guides, tutorials, and API references." },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-background/60">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Ready to start building?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Sign up for a free account and start integrating voice and messaging into your applications.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get API Access
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
