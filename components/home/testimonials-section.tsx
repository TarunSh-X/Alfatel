"use client"

import { motion } from "framer-motion"
import { Star, Quote, MessageSquare } from "lucide-react"
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
]

export function TestimonialsSection() {
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

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
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
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + i * 0.05 }}
                    >
                      <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
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
            </motion.div>
          ))}
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
                      style={{ backgroundImage: "linear-gradient(135deg, #FFBE32, #FFD700)" }}
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
                        background: "linear-gradient(135deg, #FFBE32, #e5a82e)",
                        boxShadow: "0 4px 20px rgba(255, 190, 50, 0.5)",
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
              background: "linear-gradient(135deg, rgba(15, 39, 68, 0.4) 0%, rgba(255, 190, 50, 0.2) 100%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
