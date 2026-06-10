import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with AlfaCall. Contact our sales team for wholesale voice, DID, SMS API, and SIP trunking solutions. 24/7 support available via phone, email, and live chat.",
  alternates: {
    canonical: "https://alfacall.net/contact",
  },
  openGraph: {
    title: "Contact AlfaCall - Get in Touch",
    description: "Contact our sales team for enterprise telecom solutions. 24/7 support available.",
    url: "https://alfacall.net/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
