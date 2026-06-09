import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Alfacall telecom products: Wholesale Voice, DID Numbers, SMS API, SIP Trunking, Voice API, and Messaging API. Complete telecom infrastructure for enterprises.",
  alternates: {
    canonical: "https://alfacall.net/products",
  },
  openGraph: {
    title: "Alfacall Products - Telecom Solutions",
    description: "Complete telecom infrastructure: Wholesale Voice, DID, SMS API, and SIP Trunking.",
    url: "https://alfacall.net/products",
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
