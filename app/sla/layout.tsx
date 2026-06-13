import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Service Level Agreement",
  description:
    "AlfaCall's Service Level Agreement (SLA). Review our uptime commitments, support response times, and service credits for wholesale voice, DID, SMS, and SIP trunking.",
  alternates: {
    canonical: "https://alfacall.net/sla",
  },
  openGraph: {
    title: "Service Level Agreement | AlfaCall",
    description: "AlfaCall's uptime commitments, support response times, and service credits.",
    url: "https://alfacall.net/sla",
  },
}

export default function SLALayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
