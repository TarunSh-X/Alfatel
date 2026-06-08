// =============================================================================
// app/products/wholesale-voice/layout.tsx
//
// SEO metadata layout for the Wholesale Voice product page.
// Uses Next.js 14 Metadata API — no React Helmet needed.
// Drop this file next to page.tsx in app/products/wholesale-voice/
// =============================================================================

import type { Metadata } from "next"

export const metadata: Metadata = {
  // ── Page title (renders as "Wholesale Voice Termination | Alfacall")
  title: "Wholesale Voice Termination",

  description:
    "Alfacall wholesale voice termination: global PSTN & VoIP routes to 180+ countries, HD quality, 99.99% uptime, and per-minute pricing from $0.005. Ideal for carriers, resellers, and call centres.",

  keywords: [
    "wholesale voice termination",
    "wholesale VoIP",
    "voice termination rates",
    "international voice routes",
    "PSTN termination",
    "carrier-grade voice",
    "bulk voice termination",
    "A-Z voice termination",
    "SIP voice wholesale",
    "wholesale telecom provider",
  ],

  alternates: {
    canonical: "https://alfacall.net/products/wholesale-voice",
  },

  openGraph: {
    title: "Wholesale Voice Termination – Global Routes | Alfacall",
    description:
      "Terminate voice calls to 180+ countries with carrier-grade quality and competitive per-minute rates. No minimums, real-time analytics, 24/7 NOC.",
    url: "https://alfacall.net/products/wholesale-voice",
    images: [
      {
        url: "/og-wholesale-voice.png",
        width: 1200,
        height: 630,
        alt: "Alfacall Wholesale Voice Termination",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Wholesale Voice Termination | Alfacall",
    description:
      "Global voice routes to 180+ countries. HD quality, 99.99% uptime, no monthly minimums.",
    images: ["/og-wholesale-voice.png"],
  },
}

export default function WholesaleVoiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
