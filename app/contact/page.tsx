"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, Check, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/page-hero"

const contactMethods = [
  {
    icon: Phone,
    title: "Sales",
    description: "Talk to our sales team about your requirements",
    contact: "+1-800-ALFACALL",
    action: "Call us",
    href: "tel:+18002532225",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us an email and we'll respond within 24 hours",
    contact: "sales@alfacall.net",
    action: "Email us",
    href: "mailto:sales@alfacall.net",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    contact: "Available 24/7",
    action: "Start chat",
    href: "#contact-form",
  },
]

const offices = [
  {
    city: "New York",
    address: "350 Fifth Avenue, Suite 4500",
    country: "United States",
  },
  {
    city: "London",
    address: "30 St Mary Axe",
    country: "United Kingdom",
  },
  {
    city: "Singapore",
    address: "1 Raffles Place, Tower 2",
    country: "Singapore",
  },
]

const faqs = [
  {
    question: "What are your minimum volume requirements?",
    answer: "We have no minimum volume requirements. Our pricing scales with your usage, making us suitable for businesses of all sizes.",
  },
  {
    question: "How quickly can I get started?",
    answer: "Most customers are up and running within 24 hours. API access is instant, and number provisioning is typically completed in minutes.",
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! We offer a free trial with $25 in credits so you can test our platform before committing.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 support via phone, email, and live chat. Enterprise customers also get a dedicated account manager.",
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Contact Us"
          eyebrowIcon={MessageSquare}
          title="Let's Build Something Together"
          highlightLastWord
          description="Get in touch with our team to discuss your telecom needs. We typically respond within 24 hours."
          align="left"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Contact", href: "/contact" },
          ]}
          highlights={["24/7 Support", "Global Offices", "Dedicated Account Manager"]}
        />

        {/* Contact Methods */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group block p-6 rounded-2xl bg-card border border-border text-center hover:border-[#FFBE32]/40 hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0f2744]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0f2744] transition-colors duration-300">
                    <method.icon className="w-6 h-6 text-[#0f2744] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-foreground">{method.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{method.description}</p>
                  <p className="mt-3 font-medium text-[#0f2744]">{method.contact}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#0f2744] group-hover:gap-2 transition-all">
                    {method.action}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form + Offices */}
        <section id="contact-form" className="py-24 bg-secondary/50 scroll-mt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-foreground">Send us a message</h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="mt-8 p-8 rounded-2xl bg-card border border-border text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Message sent!</h3>
                    <p className="mt-2 text-muted-foreground">
                      Thank you for reaching out. Our team will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          value={formState.company}
                          onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-2">
                        I&apos;m interested in *
                      </label>
                      <select
                        id="interest"
                        required
                        value={formState.interest}
                        onChange={(e) => setFormState({ ...formState, interest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="">Select an option</option>
                        <option value="wholesale-voice">Wholesale Voice</option>
                        <option value="wholesale-did">Wholesale DID</option>
                        <option value="wholesale-sms">Wholesale SMS</option>
                        <option value="sip-trunking">SIP Trunking</option>
                        <option value="api">APIs & Integration</option>
                        <option value="enterprise">Enterprise Solutions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                )}
              </motion.div>

              {/* Offices */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-foreground">Our Offices</h2>
                <p className="mt-2 text-muted-foreground">
                  Visit us at one of our global office locations.
                </p>
                <div className="mt-8 space-y-6">
                  {offices.map((office) => (
                    <div key={office.city} className="p-6 rounded-2xl bg-card border border-border">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{office.city}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">{office.address}</p>
                          <p className="text-sm text-muted-foreground">{office.country}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Support Hours</span>
                  </div>
                  <p className="text-muted-foreground">
                    Our support team is available 24/7 to assist you with any questions or issues.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Quick answers to common questions
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border"
                >
                  <h3 className="font-semibold text-foreground">{faq.question}</h3>
                  <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
