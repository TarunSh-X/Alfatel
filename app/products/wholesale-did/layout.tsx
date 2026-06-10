import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wholesale DID Numbers | Local, Toll-Free & Mobile DIDs",
  description:
    "Wholesale DID numbers from 100+ countries. Provision local, toll-free, and mobile DIDs instantly via API with number portability, voice & SMS channels, and 99.99% availability.",
  keywords: [
    "wholesale DID",
    "DID numbers",
    "virtual phone numbers",
    "local DID numbers",
    "toll-free numbers",
    "mobile DID",
    "DID provisioning API",
    "international phone numbers",
  ],
  alternates: {
    canonical: "https://alfacall.net/products/wholesale-did",
  },
  openGraph: {
    title: "Wholesale DID Numbers On Demand | AlfaCall",
    description:
      "Local, toll-free, and mobile DID numbers from 100+ countries with instant API provisioning and full number management.",
    url: "https://alfacall.net/products/wholesale-did",
  },
}

export default function WholesaleDIDLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
