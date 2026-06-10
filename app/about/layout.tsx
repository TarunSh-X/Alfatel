import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about AlfaCall - empowering businesses with enterprise-grade telecom infrastructure since 2015. Discover our mission, values, team, and journey to serving 500+ enterprise clients globally.",
  alternates: {
    canonical: "https://alfacall.net/about",
  },
  openGraph: {
    title: "About AlfaCall - Our Mission & Team",
    description: "Empowering businesses with enterprise-grade telecom infrastructure since 2015.",
    url: "https://alfacall.net/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
