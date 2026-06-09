import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ProductsSection } from "@/components/home/products-section"
import { TrustSection } from "@/components/home/trust-section"
import { DeveloperSection } from "@/components/home/developer-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"
import { NetworkBackground } from "@/components/home/network-background"

export const metadata: Metadata = {
  title: "Alfacall - Global Telecom Solutions | Wholesale Voice, DID, SMS & SIP Trunking",
  description: "Enterprise-grade wholesale voice termination, DID numbers, SMS API, and SIP trunking solutions. Connect globally with 99.99% uptime, powerful APIs, and 24/7 support across 180+ countries.",
  alternates: {
    canonical: "https://alfacall.net",
  },
}

export default function HomePage() {
  return (
    <>
      <NetworkBackground />
      <Header />
      <main className="relative">
        <HeroSection />
        <ProductsSection />
        <TrustSection />
        <DeveloperSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
