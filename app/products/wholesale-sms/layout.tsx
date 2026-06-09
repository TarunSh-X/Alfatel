import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wholesale SMS | Bulk A2P SMS API & Global Messaging",
  description:
    "Wholesale SMS delivery to 200+ countries with high throughput, real-time delivery reports, two-way messaging, and built-in compliance. Bulk A2P SMS API for carriers and enterprises.",
  keywords: [
    "wholesale SMS",
    "bulk SMS",
    "A2P SMS",
    "SMS API",
    "global SMS delivery",
    "SMS gateway",
    "two-way messaging",
    "international SMS",
  ],
  alternates: {
    canonical: "https://alfacall.net/products/wholesale-sms",
  },
  openGraph: {
    title: "Wholesale SMS Delivery at Scale | Alfacall",
    description:
      "Reach 200+ countries with high-throughput wholesale SMS, real-time analytics, and full compliance support.",
    url: "https://alfacall.net/products/wholesale-sms",
  },
}

export default function WholesaleSMSLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
