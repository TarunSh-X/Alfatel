// =============================================================================
// app/products/sip-trunking/layout.tsx
//
// SEO metadata layout for the SIP Trunking product page.
// Drop this file next to page.tsx in app/products/sip-trunking/
// =============================================================================

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SIP Trunking Service",

  description:
    "Alfacall SIP trunking: unlimited channels, 99.99% uptime SLA, TLS/SRTP encryption, automatic failover, and integrations with Asterisk, FreePBX, 3CX, Cisco, and Microsoft Teams. 60% cheaper than PSTN.",

  keywords: [
    "SIP trunking",
    "SIP trunk provider",
    "cloud SIP trunking",
    "hosted SIP trunk",
    "VoIP SIP trunk",
    "SIP trunking service",
    "business SIP trunks",
    "SIP trunk Asterisk",
    "SIP trunk 3CX",
    "replace PSTN SIP",
  ],

  alternates: {
    canonical: "https://alfacall.net/products/sip-trunking",
  },

  openGraph: {
    title: "SIP Trunking Service – Unlimited Channels | Alfacall",
    description:
      "Replace costly PSTN lines with Alfacall SIP trunking. Unlimited channels, TLS encryption, automatic failover, and 60% average savings vs traditional lines.",
    url: "https://alfacall.net/products/sip-trunking",
    images: [
      {
        url: "/og-sip-trunking.png",
        width: 1200,
        height: 630,
        alt: "Alfacall SIP Trunking Service",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SIP Trunking Service | Alfacall",
    description:
      "Unlimited SIP channels, TLS/SRTP encryption, automatic failover, and seamless PBX integration.",
    images: ["/og-sip-trunking.png"],
  },
}

export default function SIPTrunkingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
