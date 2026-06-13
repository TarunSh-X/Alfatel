import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "AlfaCall's Terms of Service. Review the terms and conditions governing the use of our wholesale voice, DID, SMS, and SIP trunking services.",
  alternates: {
    canonical: "https://alfacall.net/terms",
  },
  openGraph: {
    title: "Terms of Service | AlfaCall",
    description: "The terms and conditions governing the use of AlfaCall services.",
    url: "https://alfacall.net/terms",
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
