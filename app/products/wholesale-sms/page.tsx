"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MessageSquare, Globe, Zap, BarChart3, Shield, ArrowLeftRight, Check, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/page-hero"

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Send SMS to 200+ countries with localized sender IDs and compliance.",
  },
  {
    icon: Zap,
    title: "High Throughput",
    description: "Process thousands of messages per second with our scalable infrastructure.",
  },
  {
    icon: BarChart3,
    title: "Delivery Reports",
    description: "Real-time delivery confirmations and detailed analytics dashboard.",
  },
  {
    icon: Shield,
    title: "Compliance Built-in",
    description: "Automatic handling of opt-outs, DND lists, and regional regulations.",
  },
  {
    icon: ArrowLeftRight,
    title: "Two-Way Messaging",
    description: "Full support for inbound SMS with webhook notifications.",
  },
  {
    icon: MessageSquare,
    title: "Shortcode Support",
    description: "Dedicated and shared shortcodes for high-volume campaigns.",
  },
]

const useCases = [
  {
    title: "Transactional SMS",
    description: "OTPs, alerts, notifications, and confirmations with high deliverability.",
    examples: ["Two-factor authentication", "Order confirmations", "Appointment reminders"],
  },
  {
    title: "Marketing Campaigns",
    description: "Promotional messages with targeting, scheduling, and analytics.",
    examples: ["Product launches", "Flash sales", "Loyalty programs"],
  },
  {
    title: "Conversational",
    description: "Two-way messaging for customer support and engagement.",
    examples: ["Customer support", "Surveys and feedback", "Chatbots"],
  },
]

export default function WholesaleSMSPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Wholesale SMS"
          eyebrowIcon={MessageSquare}
          title="Global SMS Delivery at Scale"
          highlightLastWord
          description="Reach customers in 200+ countries with exceptional delivery rates. High throughput, real-time analytics, and full compliance support."
          align="left"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Products", href: "/products" },
            { name: "Wholesale SMS", href: "/products/wholesale-sms" },
          ]}
          highlights={["200+ Countries", "High Throughput", "Delivery Reports", "Two-Way Messaging"]}
        />

        {/* Features */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Enterprise SMS Infrastructure
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to send messages at scale with confidence.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-[#b89850]/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0f2744]/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-[#0f2744]" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-24 bg-secondary/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Built for Every Use Case
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From transactional alerts to marketing campaigns, we have you covered.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-card border border-border"
                >
                  <h3 className="text-xl font-semibold text-foreground">{useCase.title}</h3>
                  <p className="mt-2 text-muted-foreground">{useCase.description}</p>
                  <ul className="mt-6 space-y-3">
                    {useCase.examples.map((example) => (
                      <li key={example} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-[#b89850]" />
                        <span className="text-foreground">{example}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Start messaging today
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Get access to our global SMS network with competitive rates and powerful APIs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
