"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star, Quote, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react"
import { GlassCard, PulsingGlow } from "./animated-elements"
import { AnimatedWaveBackground } from "./animated-wave-bg"

const testimonials = [
  {
    content: "AlfaCall transformed our global communications infrastructure. The API integration was seamless, and we saw a 40% reduction in costs within the first quarter.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechCorp Global",
    rating: 5,
    color: "#06b6d4",
  },
  {
    content: "The 99.99% uptime they promise is real. We process millions of calls monthly, and AlfaCall has never let us down. Their support team is exceptional.",
    author: "Marcus Johnson",
    role: "VP of Engineering",
    company: "CloudSystems Inc",
    rating: 5,
    color: "#f97316",
  },
  {
    content: "Moving to AlfaCall for our SMS infrastructure was the best decision we made. Delivery rates improved dramatically, and the analytics are incredibly detailed.",
    author: "Emily Rodriguez",
    role: "Director of Operations",
    company: "DataFlow Networks",
    rating: 5,
    color: "#10b981",
  },
  {
    content: "As a small regional carrier, we needed a partner who would treat us like a priority. AlfaCall's wholesale voice routes cut our termination costs by 28% and the onboarding took just two days.",
    author: "Daniel Okafor",
    role: "Founder",
    company: "BrightLink Telecom",
    rating: 5,
    color: "#b89850",
  },
  {
    content: "We run a lean team and AlfaCall feels like an extension of it. Their support actually picks up the phone, and the call quality on our long-distance routes has been flawless.",
    author: "Priya Nair",
    role: "Operations Lead",
    company: "Sahara Voice Networks",
    rating: 5,
    color: "#8b5cf6",
  },
  {
    content: "Switching our DID and SMS traffic to AlfaCall was painless. Transparent pricing, no hidden fees, and dashboards that finally make sense. Perfect fit for a growing telecom like ours.",
    author: "Tomás Herrera",
    role: "Managing Director",
    company: "Andina Connect",
    rating: 5,
    color: "#06b6d4",
  },
]

const PAGE_SIZE = 3

export function TestimonialsSection() {
  const pageCount = Math.ceil(testimonials.length / PAGE_SIZE)
  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setPage((prev) => (prev + newDirection + pageCount) % pageCount)
  }

  const goToPage = (target: number) => {
    setDirection(target > page ? 1 : -1)
    setPage(target)
  }

  const visible = testimonials.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  return (
    <section className="py-20 relative overflow-hidden bg-secondary/30">
      {/* Background */}
      
      {/* Floating orbs */}
      <PulsingGlow color="rgba(6, 182, 212, 0.1)" size="500px" className="top-0 left-1/4" />
      <PulsingGlow color="rgba(139, 92, 246, 0.08)" size="400px" className="bottom-0 right-1/4" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-500/30 mb-8"
            style={{
              background: "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)",
              boxShadow: "0 0 20px rgba(6, 182, 212, 0.2)",
            }}
          >
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-foreground">Customer Stories</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Trusted by
            <br />
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)",
                filter: "drop-shadow(0 0 30px rgba(6, 182, 212, 0.3))",
              }}
            >
              Industry Leaders
            </span>
          </motion.h2>
        </div>

        {/* Testimonials carousel */}
        <div className="relative">
          {/* Arrow controls */}
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous testimonials"
            className="absolute -left-3 lg:-left-6 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-secondary/80 text-foreground backdrop-blur transition-all hover:scale-110 hover:border-[#b89850]/60 hover:text-[#b89850]"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next testimonials"
            className="absolute -right-3 lg:-right-6 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-secondary/80 text-foreground backdrop-blur transition-all hover:scale-110 hover:border-[#b89850]/60 hover:text-[#b89850]"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="overflow-hidden px-2">
              <motion.div
                key={page}
                initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid md:grid-cols-3 gap-8 items-stretch"
              >
                {visible.map((testimonial, index) => (
                  <div key={testimonial.author}>
                    <GlassCard 
                      className="p-8 h-full"
                      glowColor={`${testimonial.color}40`}
                    >
                      {/* Quote icon */}
                      <Quote 
                        className="w-10 h-10 mb-6 opacity-30" 
                        style={{ color: testimonial.color }}
                      />
                      
                      {/* Rating */}
                      <div className="flex gap-1 mb-6">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                          >
                            <Star className="w-5 h-5 fill-[#b89850] text-[#b89850]" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-foreground/90 leading-relaxed text-lg mb-8">
                        {`"${testimonial.content}"`}
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                        <div 
                          className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold"
                          style={{ 
                            background: `linear-gradient(135deg, ${testimonial.color}30, ${testimonial.color}10)`,
                            color: testimonial.color,
                          }}
                        >
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{testimonial.author}</div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                ))}
              </motion.div>
          </div>

          {/* Pagination dots */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToPage(i)}
                aria-label={`Go to testimonials page ${i + 1}`}
                aria-current={i === page}
                className={`h-2.5 rounded-full transition-all ${
                  i === page ? "w-8 bg-[#b89850]" : "w-2.5 bg-white/25 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Featured section with text overlaying animated wave */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Full width animated wave background */}
            <div className="relative h-[400px] lg:h-[500px]">
              <AnimatedWaveBackground />
              
              {/* Content overlay - positioned on left */}
              <div className="absolute inset-0 z-10 flex items-center">
                <div className="w-full lg:w-2/3 p-10 lg:p-16">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
                  >
                    Join{" "}
                    <span 
                      className="text-transparent bg-clip-text"
                      style={{ backgroundImage: "linear-gradient(135deg, #b89850, #b89850)" }}
                    >
                      500+ companies
                    </span>
                    <br />
                    building the future
                    <br />
                    of communication
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-white/90 max-w-lg mb-8 drop-shadow-md"
                  >
                    From startups to Fortune 500 enterprises, teams trust AlfaCall 
                    to power their global telecommunications infrastructure.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <a 
                      href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-[#0f2744] transition-all hover:scale-105"
                      style={{
                        background: "linear-gradient(135deg, #b89850, #9c8144)",
                        boxShadow: "0 4px 20px rgba(184, 152, 80, 0.5)",
                      }}
                    >
                      Get Started Today
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Glow effect */}
          <div 
            className="absolute -inset-4 rounded-3xl blur-3xl -z-10 opacity-30"
            style={{
              background: "linear-gradient(135deg, rgba(15, 39, 68, 0.4) 0%, rgba(184, 152, 80, 0.2) 100%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
