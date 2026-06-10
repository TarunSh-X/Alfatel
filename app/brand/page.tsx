"use client"

import { Download } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface Asset {
  title: string
  description: string
  src: string
  download: string
  /** preview background: light or dark */
  bg: "light" | "dark"
}

const assets: Asset[] = [
  {
    title: "Animated Logo (GIF)",
    description: "Home-page style animated mark. Great for email signatures, LinkedIn featured posts, and presentations.",
    src: "/brand/alfacall-logo-animated.gif",
    download: "alfacall-logo-animated.gif",
    bg: "dark",
  },
  {
    title: "Static Logo (PNG, transparent)",
    description: "Full horizontal lockup with transparent background. Use on dark surfaces and the About page.",
    src: "/brand/alfacall-logo.png",
    download: "alfacall-logo.png",
    bg: "dark",
  },
  {
    title: "Static Logo (PNG, white background)",
    description: "Same lockup on a solid white background for light-themed emails and documents.",
    src: "/brand/alfacall-logo-white-bg.png",
    download: "alfacall-logo-white-bg.png",
    bg: "light",
  },
  {
    title: "Icon Only (PNG, transparent)",
    description: "Square app-style icon. Ideal for avatars, favicons, and social profile images.",
    src: "/brand/alfacall-icon.png",
    download: "alfacall-icon.png",
    bg: "dark",
  },
]

export default function BrandPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Brand Assets
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Download the official AlfaCall logos for use in email templates, LinkedIn, and other
              marketing materials. Right-click and &ldquo;Save image&rdquo; or use the download button on
              each asset.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {assets.map((asset) => (
              <div
                key={asset.title}
                className="rounded-2xl border border-border bg-card overflow-hidden flex flex-col"
              >
                <div
                  className={`flex items-center justify-center p-10 min-h-[220px] ${
                    asset.bg === "dark" ? "bg-[#0f2744]" : "bg-white"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset.src || "/placeholder.svg"}
                    alt={asset.title}
                    className="max-h-[140px] w-auto object-contain"
                  />
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex-1">
                    <h2 className="font-semibold text-foreground">{asset.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {asset.description}
                    </p>
                  </div>
                  <a
                    href={asset.src}
                    download={asset.download}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0f2744] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#152a4a] transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
