"use client"

import { useState } from "react"

type Partner = {
  name: string
  logo: string
}

// Only partners that have an actual logo asset are shown.
const partners: Partner[] = [
  { name: "Bharti Airtel", logo: "/partners/airtel.png" },
  { name: "Novatel", logo: "/partners/novatel.jpg" },
  { name: "C3ntro Telecom", logo: "/partners/c3ntro.png" },
  { name: "Sify Technologies", logo: "/partners/sify.webp" },
  { name: "HOT Net Internet Services", logo: "/partners/hot.png" },
  { name: "China Mobile International", logo: "/partners/china-mobile.png" },
  { name: "Tata Communications", logo: "/partners/tata.png" },
  { name: "HKBN Enterprise Solutions", logo: "/partners/hkbn.png" },
  { name: "Telecom Italia Sparkle", logo: "/partners/sparkle.jpeg" },
  { name: "Spark Telecomm", logo: "/partners/spark-telecomm.webp" },
  { name: "CITIC Telecom International", logo: "/partners/citic.png" },
  { name: "Orange", logo: "/partners/orange.svg" },
]

function PartnerLogo({ partner }: { partner: Partner }) {
  const [failed, setFailed] = useState(false)

  return (
    <div
      className="group/item relative flex h-28 w-52 flex-shrink-0 items-center justify-center rounded-xl border border-[#E6EAF0] bg-white px-8 opacity-70 shadow-sm transition-all duration-300 hover:z-20 hover:-translate-y-1 hover:scale-105 hover:border-[#b89850] hover:opacity-100 hover:shadow-[0_14px_34px_rgba(10,22,40,0.18)] group-hover/carousel:opacity-40 hover:group-hover/carousel:opacity-100"
    >
      {failed ? (
        <span className="text-center text-sm font-semibold text-[#0A1628]">{partner.name}</span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={partner.logo || "/placeholder.svg"}
          alt={`${partner.name} logo`}
          className="max-h-12 w-auto max-w-[150px] object-contain transition-transform duration-300 group-hover/item:scale-105"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
      <span
        role="tooltip"
        className="pointer-events-none absolute -bottom-9 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#0A1628] px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover/item:opacity-100"
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
