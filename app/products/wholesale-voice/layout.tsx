import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wholesale Voice Termination | A-Z VoIP Carrier Routes",
  description:
    "Premium wholesale voice termination to 180+ countries. Competitive A-Z rates, HD voice quality, real-time CDRs, fraud protection, and 99.99% uptime for carriers and enterprises.",
  keywords: [
    "wholesale voice",
    "voice termination",
    "wholesale VoIP",
    "A-Z voice routes",
    "international call termination",
    "wholesale voice carrier",
    "VoIP termination rates",
    "SIP voice termination",
  ],
  alternates: {
    canonical: "https://alfacall.net/products/wholesale-voice",
  },
  openGraph: {
    title: "Wholesale Voice Termination Worldwide | Alfacall",
    description:
      "High-quality wholesale voice termination to 180+ countries with competitive A-Z rates, HD voice, and 24/7 NOC support.",
    url: "https://alfacall.net/products/wholesale-voice",
  },
}

export default function WholesaleVoiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
