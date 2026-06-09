"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Users, Target, Award, Globe, ArrowRight, Check, Sparkles } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/page-hero"

const stats = [
  { value: "2015", label: "Founded" },
  { value: "500+", label: "Enterprise Clients" },
  { value: "180+", label: "Countries Served" },
  { value: "200+", label: "Team Members" },
]

const values = [
  {
    icon: Target,
    title: "Customer First",
    description: "We prioritize our customers' success above all else, building solutions that solve real problems.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest quality in everything we do, from code to customer support.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "We think globally, providing seamless connectivity across borders and time zones.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork, both internally and with our partners.",
  },
]

const milestones = [
  { year: "2015", event: "Alfacall founded with a mission to democratize enterprise telecom" },
  { year: "2017", event: "Reached 100+ countries coverage for voice termination" },
  { year: "2019", event: "Launched our developer API platform and SDK suite" },
  { year: "2021", event: "Expanded to 500+ enterprise clients globally" },
  { year: "2023", event: "Achieved 180+ countries coverage with 99.99% uptime" },
  { year: "2024", event: "Launched next-generation AI-powered voice features" },
]

const team = [
  { name: "Alex Thompson", role: "CEO & Co-Founder", initials: "AT" },
  { name: "Sarah Chen", role: "CTO & Co-Founder", initials: "SC" },
  { name: "Michael Rodriguez", role: "VP of Engineering", initials: "MR" },
  { name: "Emily Watson", role: "VP of Sales", initials: "EW" },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="About Alfacall"
          eyebrowIcon={Sparkles}
          title="About Alfacall"
          description="Empowering businesses with enterprise-grade telecom infrastructure since 2015"
        />

        {/* Stats */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-card border border-border"
                >
                  <div className="text-4xl font-bold text-[#0f2744]">{stat.value}</div>
                  <div className="mt-2 text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 bg-secondary/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Our Mission
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  At Alfacall, we believe that world-class telecommunications infrastructure should be accessible to businesses of all sizes. Our mission is to provide enterprise-grade voice, messaging, and number services that enable companies to connect with their customers anywhere in the world.
                </p>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  We combine cutting-edge technology with exceptional customer service to deliver reliable, scalable solutions that grow with your business.
                </p>
                <ul className="mt-8 space-y-3">
                  {["Global infrastructure spanning 180+ countries", "Developer-first API platform", "24/7 expert support and NOC", "99.99% uptime SLA guarantee"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-card border border-border"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Our Journey
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Key milestones in our growth and innovation
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="font-bold text-primary">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-px bg-border relative">
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <div className="pb-8">
                    <p className="text-foreground">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-24 bg-secondary/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Leadership Team
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Meet the people driving Alfacall&apos;s mission forward
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-card border border-border"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
                    {member.initials}
                  </div>
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Careers CTA */}
        <section id="careers" className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Join Our Team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals who are passionate about building the future of communications.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  View Open Positions
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
