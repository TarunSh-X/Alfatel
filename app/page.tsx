import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ProductsSection } from "@/components/home/products-section"
import { TrustSection } from "@/components/home/trust-section"
import { DeveloperSection } from "@/components/home/developer-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"
import { NetworkBackground } from "@/components/home/network-background"

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
