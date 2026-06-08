// =============================================================================
// app/products/wholesale-sms/layout.tsx
//
// SEO metadata layout for the Wholesale SMS product page.
// Drop this file next to page.tsx in app/products/wholesale-sms/
// =============================================================================

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wholesale SMS API",

  description:
    "Alfacall wholesale SMS API: send bulk SMS to 200+ countries with 99% delivery rates, two-way messaging, shortcode support, and full compliance automation. Competitive per-message pricing.",

  keywords: [
    "wholesale SMS",
    "bulk SMS API",
    "SMS gateway",
    "international SMS",
    "SMS termination wholesale",
    "two-way SMS",
    "A2P SMS",
    "SMS reseller",
    "SMS platform API",
    "transactional SMS",
  ],

  alternates: {
    canonical: "https://alfacall.net/products/wholesale-sms",
  },

  openGraph: {
    title: "Wholesale SMS API – Global Bulk Messaging | Alfacall",
    description:
      "Send SMS to 200+ countries with 99% delivery rates. Two-way messaging, shortcodes, real-time delivery reports, and compliance built-in.",
    url: "https://alfacall.net/products/wholesale-sms",
    images: [
      {
        url: "/og-wholesale-sms.png",
        width: 1200,
        height: 630,
        alt: "Alfacall Wholesale SMS API",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Wholesale SMS API | Alfacall",
    description:
      "Global bulk SMS delivery to 200+ countries. Real-time analytics, two-way messaging, and compliance automation.",
    images: ["/og-wholesale-sms.png"],
  },
}

export default function WholesaleSMSLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
