"use client"

import { useState } from "react"

type Partner = {
  name: string
  domain: string
}

const partners: Partner[] = [
  { name: "Apelby Communications", domain: "apelby.com" },
  { name: "Bharti Airtel (UK)", domain: "airtel.com" },
  { name: "C3ntro", domain: "c3ntro.com" },
  { name: "China Mobile International", domain: "cmi.chinamobile.com" },
  { name: "CITIC Telecom International", domain: "citictel.com" },
  { name: "Deutsche Telekom", domain: "telekom.com" },
  { name: "HOT Net Internet Services", domain: "hot.net.il" },
  { name: "Novatel", domain: "novatel.com" },
  { name: "Orange Romania", domain: "orange.ro" },
  { name: "Primetel PLC", domain: "primetel.com.cy" },
  { name: "Sify Technologies", domain: "sify.com" },
  { name: "Spark Telecomm", domain: "sparktelecomm.com" },
  { name: "Telecom Italia Sparkle", domain: "tisparkle.com" },
  { name: "Tata Communications", domain: "tatacommunications.com" },
  { name: "HKBN Enterprise Solutions", domain: "hkbn.net" },
]

function PartnerLogo({ partner }: { partner: Partner }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="group relative flex-shrink-0">
      <div className="flex h-20 min-w-[180px] items-center justify-center rounded-lg bg-white px-8 shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
        {failed ? (
          <span className="text-center text-sm font-semibold text-[#0A1628]">
            {partner.name}
          </span>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`https://logo.clearbit.com/${partner.domain}`}
            alt={`${partner.name} logo`}
            className="max-h-12 w-auto max-w-[140px] object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      {/* Tooltip */}
      <span
        role="tooltip"
        className="pointer-events-none absolute -bottom-9 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-3 py-1.5 text-xs font-medium text-[#0A1628] opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100"
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
    <div className="group/carousel relative overflow-hidden rounded-3xl bg-[#0A1628] py-12">
      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0A1628] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0A1628] to-transparent" />

      <div className="flex w-max animate-partner-scroll gap-[60px] [animation-play-state:running] hover:[animation-play-state:paused]">
        {loop.map((partner, index) => (
          <PartnerLogo key={`${partner.domain}-${index}`} partner={partner} />
        ))}
      </div>
    </div>
  )
}
