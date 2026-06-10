import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SIP Trunking | Scalable Cloud SIP Trunk Provider",
  description:
    "Enterprise SIP trunking with unlimited channels, instant scaling, automatic failover, and TLS encryption. Connect Asterisk, FreePBX, 3CX, Teams, and any SIP PBX with 99.99% uptime.",
  keywords: [
    "SIP trunking",
    "SIP trunk provider",
    "cloud SIP trunking",
    "PBX SIP trunk",
    "VoIP SIP trunking",
    "Asterisk SIP trunk",
    "enterprise SIP trunking",
    "SIP trunk channels",
  ],
  alternates: {
    canonical: "https://alfacall.net/products/sip-trunking",
  },
  openGraph: {
    title: "Scalable SIP Trunking | AlfaCall",
    description:
      "Connect your PBX to our global network with unlimited SIP trunk channels, automatic failover, and enterprise-grade security.",
    url: "https://alfacall.net/products/sip-trunking",
  },
}

export default function SIPTrunkingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
