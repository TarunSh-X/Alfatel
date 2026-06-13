import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "AlfaCall's Privacy Policy. Learn how we collect, use, protect, and share your personal information across our wholesale voice, DID, SMS, and SIP trunking services.",
  alternates: {
    canonical: "https://alfacall.net/privacy",
  },
  openGraph: {
    title: "Privacy Policy | AlfaCall",
    description: "How AlfaCall collects, uses, and protects your personal information.",
    url: "https://alfacall.net/privacy",
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
