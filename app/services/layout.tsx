import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Developer Services & APIs",
  description: "Build powerful voice and messaging applications with Alfacall developer-friendly APIs and SDKs. Voice API, Messaging API, and Number Management for modern communications.",
  alternates: {
    canonical: "https://alfacall.net/services",
  },
  openGraph: {
    title: "Alfacall Developer Services & APIs",
    description: "Build voice and messaging apps with our developer-friendly APIs and SDKs.",
    url: "https://alfacall.net/services",
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
