// =============================================================================
// app/products/wholesale-did/layout.tsx
//
// SEO metadata layout for the Wholesale DID product page.
// Drop this file next to page.tsx in app/products/wholesale-did/
// =============================================================================

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wholesale DID Numbers",

  description:
    "Buy wholesale DID numbers from 100+ countries. Local, toll-free, and mobile virtual phone numbers with instant API provisioning, number portability, and 99.99% uptime.",

  keywords: [
    "wholesale DID numbers",
    "virtual phone numbers",
    "DID number provider",
    "buy DID numbers",
    "direct inward dialing",
    "toll-free numbers wholesale",
    "local phone numbers API",
    "virtual numbers bulk",
    "number portability",
    "international DID",
  ],

  alternates: {
    canonical: "https://alfacall.net/products/wholesale-did",
  },

  openGraph: {
    title: "Wholesale DID Numbers – 100+ Countries | Alfacall",
    description:
      "Instant virtual phone numbers from 100+ countries. Local, toll-free, and mobile DIDs with full API management and number portability.",
    url: "https://alfacall.net/products/wholesale-did",
    images: [
      {
        url: "/og-wholesale-did.png",
        width: 1200,
        height: 630,
        alt: "Alfacall Wholesale DID Numbers",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Wholesale DID Numbers | Alfacall",
    description:
      "Virtual phone numbers from 100+ countries. Instant API provisioning, number portability, 99.99% uptime.",
    images: ["/og-wholesale-did.png"],
  },
}

export default function WholesaleDIDLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
