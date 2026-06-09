import Link from "next/link"

interface StaticLogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  showText?: boolean
  href?: string
  /** use white text for placement on dark backgrounds */
  variant?: "default" | "onDark"
}

export function StaticLogo({
  size = "md",
  showText = true,
  href,
  variant = "default",
}: StaticLogoProps) {
  const sizes = {
    sm: { icon: 44, text: "text-lg", tagline: "text-[8px]", letterSize: 22 },
    md: { icon: 52, text: "text-xl", tagline: "text-[10px]", letterSize: 26 },
    lg: { icon: 72, text: "text-2xl", tagline: "text-xs", letterSize: 36 },
    xl: { icon: 96, text: "text-3xl", tagline: "text-sm", letterSize: 48 },
  }

  const config = sizes[size]
  const onDark = variant === "onDark"

  const LogoContent = () => (
    <div className="flex items-center gap-3">
      {/* Icon container (static) */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: config.icon, height: config.icon }}
      >
        {/* Navy background */}
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            background: "linear-gradient(145deg, #0d1f38 0%, #152a4a 50%, #0a1628 100%)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255,255,255,0.1)",
          }}
        />
        {/* Inner highlight */}
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, transparent 50%)",
          }}
        />

        {/* AC letters (static) */}
        <div className="relative z-10 flex items-center justify-center">
          {["A", "C"].map((letter) => (
            <span
              key={letter}
              style={{
                fontSize: config.letterSize,
                color: "#FFBE32",
                textShadow: "0 0 15px rgba(255, 190, 50, 0.7), 0 2px 4px rgba(0,0,0,0.5)",
                fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Signal dots (static) */}
        <div
          className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: "#FFBE32", boxShadow: "0 0 10px rgba(255, 190, 50, 0.9)" }}
        />
        <div
          className="absolute top-1 right-3 w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: "#FFBE32", boxShadow: "0 0 6px rgba(255, 190, 50, 0.7)" }}
        />
        <div
          className="absolute top-2.5 right-5 w-1 h-1 rounded-full"
          style={{ backgroundColor: "#FFBE32", boxShadow: "0 0 4px rgba(255, 190, 50, 0.6)" }}
        />
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold ${config.text} leading-none tracking-tight`}>
            <span style={{ color: "#FFBE32" }}>Alfa</span>
            <span className={onDark ? "text-white" : "text-foreground"}>call</span>
          </span>
          <span
            className={`${config.tagline} tracking-widest uppercase ${
              onDark ? "text-white/60" : "text-muted-foreground"
            }`}
          >
            Telecom Solutions
          </span>
        </div>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="flex items-center">
        <LogoContent />
      </Link>
    )
  }

  return <LogoContent />
}
