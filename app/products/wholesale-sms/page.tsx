"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  MessageSquare,
  Globe,
  Zap,
  BarChart3,
  Shield,
  ArrowLeftRight,
  ArrowRight,
  ShieldCheck,
  Bell,
  Megaphone,
  Repeat,
  PhoneCall,
  Users,
  Landmark,
  Gamepad2,
  ShoppingCart,
  Share2,
  Truck,
  type LucideIcon,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/page-hero"

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Send SMS to 180+ countries with localized sender IDs and compliance.",
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

type ServiceItem = {
  icon: LucideIcon
  name: string
  description: string
}

const productItems: ServiceItem[] = [
  { icon: ShieldCheck, name: "Verification SMS", description: "OTP and 2FA codes with industry-leading delivery." },
  { icon: Bell, name: "Notification SMS", description: "Alerts, reminders, and transactional updates." },
  { icon: Megaphone, name: "Marketing SMS", description: "Promotional campaigns with targeting and scheduling." },
  { icon: Repeat, name: "Two-way SMS", description: "Interactive, conversational messaging at scale." },
  { icon: PhoneCall, name: "Voice Verification Code", description: "Voice OTP delivery as a reliable fallback." },
  { icon: Users, name: "Voice Group Call", description: "Broadcast voice messages to large groups instantly." },
]

const solutionItems: ServiceItem[] = [
  { icon: Landmark, name: "FinTech", description: "Secure verification and fraud alerts for finance." },
  { icon: Gamepad2, name: "Game", description: "Player onboarding, retention, and event notifications." },
  { icon: ShoppingCart, name: "E-commerce", description: "Order confirmations, shipping, and promotions." },
  { icon: Share2, name: "Social Entertainment", description: "Account security and real-time engagement." },
  { icon: Truck, name: "Logistics", description: "Delivery tracking and dispatch notifications." },
]

function ServiceColumn({
  title,
  subtitle,
  items,
}: {
  title: string
  subtitle: string
  items: ServiceItem[]
}) {
  return (
    <div className="rounded-2xl bg-card border border-border p-8 lg:p-10">
      <div className="flex items-center gap-3">
        <span className="h-7 w-1.5 rounded-full bg-[#b89850]" />
        <h3 className="text-2xl font-bold text-[#0f2744]">{title}</h3>
      </div>
      <p className="mt-3 text-muted-foreground">{subtitle}</p>

      <ul className="mt-8 space-y-2">
        {items.map((item) => (
          <li key={item.name}>
            <div className="group flex items-start gap-4 rounded-xl p-4 -mx-2 transition-colors hover:bg-secondary cursor-default">
              <span className="shrink-0 w-11 h-11 rounded-xl bg-[#0f2744] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#b89850]">
                <item.icon className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-[#0f2744]" />
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold text-foreground transition-colors group-hover:text-[#0f2744]">
                    {item.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#b89850] opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground leading-snug">{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

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
          description="Reach customers in 180+ countries with exceptional delivery rates. High throughput, real-time analytics, and full compliance support."
          align="left"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Products", href: "/products" },
            { name: "Wholesale SMS", href: "/products/wholesale-sms" },
          ]}
          highlights={["180+ Countries", "High Throughput", "Delivery Reports", "Two-Way Messaging"]}
        />

        {/* Features */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Enterprise SMS Infrastructure</h2>
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
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-[#b89850]/40 hover:shadow-soft transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0f2744] flex items-center justify-center mb-4 group-hover:bg-[#b89850] transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-white group-hover:text-[#0f2744] transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SMS Services: Products & Solution */}
        <section className="py-24 bg-secondary/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card mb-6">
                <MessageSquare className="w-4 h-4 text-[#b89850]" />
                <span className="text-sm font-medium text-[#0f2744]">SMS Services</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">SMS Products &amp; Solutions</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A complete SMS suite, organized by product capability and by the industries we serve.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <ServiceColumn
                title="Products"
                subtitle="Messaging products built for reliability and scale."
                items={productItems}
              />
              <ServiceColumn
                title="Solution"
                subtitle="Tailored SMS solutions for every industry."
                items={solutionItems}
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Start messaging today</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Get access to our global SMS network with competitive rates and powerful APIs.
            </p>
            <div className="mt-8 flex items-center justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
