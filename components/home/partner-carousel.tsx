"use client"

import { useState } from "react"

type Partner = {
  name: string
  logo?: string
  domain?: string
  // Background tone of the source logo so the card blends seamlessly
  tone?: "dark" | "light" | "orange"
}

const partners: Partner[] = [
  { name: "Bharti Airtel", logo: "/partners/airtel.png", tone: "dark" },
  { name: "Novatel", logo: "/partners/novatel.jpg", tone: "light" },
  { name: "C3ntro Telecom", logo: "/partners/c3ntro.png", tone: "dark" },
  { name: "Sify Technologies", logo: "/partners/sify.webp", tone: "dark" },
  { name: "HOT Net Internet Services", logo: "/partners/hot.png", tone: "dark" },
  { name: "China Mobile International", logo: "/partners/china-mobile.png", tone: "dark" },
  { name: "Tata Communications", logo: "/partners/tata.png", tone: "dark" },
  { name: "HKBN Enterprise Solutions", logo: "/partners/hkbn.png", tone: "light" },
  { name: "Telecom Italia Sparkle", logo: "/partners/sparkle.jpeg", tone: "light" },
  { name: "Spark Telecomm", logo: "/partners/spark-telecomm.webp", tone: "dark" },
  { name: "CITIC Telecom International", logo: "/partners/citic.png", tone: "dark" },
  { name: "Orange", logo: "/partners/orange.svg", tone: "orange" },
  { name: "Apelby Communications", domain: "apelby.com", tone: "light" },
  { name: "Deutsche Telekom", domain: "telekom.com", tone: "light" },
  { name: "Primetel PLC", domain: "primetel.com.cy", tone: "light" },
]

const toneStyles: Record<NonNullable<Partner["tone"]>, string> = {
  dark: "border-white/10 bg-[#0A1628] hover:border-white/25",
  light: "border-[#E6EAF0] bg-white hover:border-[#C8D2E0]",
  orange: "border-[#FF7900]/30 bg-[#FF7900] hover:border-[#FF7900]",
}

function PartnerLogo({ partner }: { partner: Partner }) {
  const [failed, setFailed] = useState(false)
  const tone = partner.tone ?? "light"
  const src = partner.logo ?? (partner.domain ? `https://logo.clearbit.com/${partner.domain}` : "")

  return (
    <div
      className={`group relative flex h-28 w-52 flex-shrink-0 items-center justify-center rounded-xl border px-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(10,22,40,0.18)] ${toneStyles[tone]}`}
    >
      {failed || !src ? (
        <span className={`text-center text-sm font-semibold ${tone === "light" ? "text-[#0A1628]" : "text-white"}`}>
          {partner.name}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src || "/placeholder.svg"}
          alt={`${partner.name} logo`}
          className="max-h-12 w-auto max-w-[150px] object-contain opacity-80 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
      <span
        role="tooltip"
        className="pointer-events-none absolute -bottom-9 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#0A1628] px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100"
      >
        {partner.name}
      </span>
    </div>
  )
}

export function PartnerCarousel() {
  // Duplicate the list for seamless infinite looping
  const loop = [...partners, ...partners]

  return (
    <div className="group/carousel relative overflow-hidden py-10">
      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#F7F9FC] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#F7F9FC] to-transparent" />

      <div className="flex w-max animate-partner-scroll gap-8 [animation-play-state:running] group-hover/carousel:[animation-play-state:paused]">
        {loop.map((partner, index) => (
          <PartnerLogo key={`${partner.name}-${index}`} partner={partner} />
        ))}
      </div>
    </div>
  )
}
