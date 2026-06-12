// Generates brand-accurate AlfaCall logo assets (static PNG + animated GIF)
// matching components/static-logo.tsx and components/animated-logo.tsx.
// Run: node scripts/generate-logos.mjs
import { Resvg } from "@resvg/resvg-js"
import gifenc from "gifenc"
const { GIFEncoder, quantize, applyPalette } = gifenc
import { writeFileSync, mkdirSync } from "node:fs"

const GOLD = "#FFBE32"
const OUT = "public/brand"
mkdirSync(OUT, { recursive: true })

// Layout constants (scaled up 4x from the 72px "lg" component for crisp output)
const S = 4
const ICON = 72 * S // 288
const PAD = 16 * S // padding around everything
const GAP = 12 * S // gap between icon and text
const TEXT_SIZE = 52 * S // "AlfaCall" wordmark size (visually ~text-2xl scaled)
const TEXT_W = 250 * S // approx width reserved for wordmark "AlfaCall"
const LETTER = 36 * S // AC letter size

// Builds the inner icon SVG group at a given top-left (x,y).
// dotScale/dotOpacity arrays drive the 3 signal dots; letterDY drives A/C wave.
function iconGroup(x, y, { dots, letterDY }) {
  const r = 14 * S // rounded corners (rounded-xl ~ 0.75rem)
  // letters baseline: center of icon
  const cx = x + ICON / 2
  const cy = y + ICON / 2
  // Two letters side by side, centered.
  // Center-to-center spacing of ~0.72*LETTER matches the natural Arial Black
  // glyph advance, so the A/C sit tight together exactly like the
  // adjacent flex spans in components/static-logo.tsx (contact page).
  const aDX = -LETTER * 0.36
  const cDX = LETTER * 0.36
  const letterStyle = `font-family:'Arial','Helvetica Neue',sans-serif;font-weight:900;font-size:${LETTER}px;fill:${GOLD};letter-spacing:-0.02em;`

  // signal dots positions relative to icon top-right (matching component)
  // dot1: -top-0.5 -right-0.5 w-2.5  => ~10px dia, at corner
  // dot2: top-1 right-3 w-1.5        => ~6px
  // dot3: top-2.5 right-5 w-1        => ~4px
  const dot1 = { cx: x + ICON - 1 * S, cy: y + 1 * S, r: 5 * S }
  const dot2 = { cx: x + ICON - 14 * S, cy: y + 7 * S, r: 3 * S }
  const dot3 = { cx: x + ICON - 22 * S, cy: y + 12.5 * S, r: 2 * S }
  const dotDefs = [dot1, dot2, dot3]

  const dotEls = dotDefs
    .map((d, i) => {
      const sc = dots[i].scale
      const op = dots[i].opacity
      const rr = d.r * sc
      return `<circle cx="${d.cx}" cy="${d.cy}" r="${rr}" fill="${GOLD}" opacity="${op}" filter="url(#dotGlow)"/>`
    })
    .join("")

  return `
    <g>
      <rect x="${x}" y="${y}" width="${ICON}" height="${ICON}" rx="${r}" fill="url(#navy)" filter="url(#cardShadow)"/>
      <rect x="${x}" y="${y}" width="${ICON}" height="${ICON}" rx="${r}" fill="url(#innerHi)"/>
      <g filter="url(#letterGlow)" text-anchor="middle" dominant-baseline="central">
        <text x="${cx + aDX}" y="${cy + letterDY[0]}" style="${letterStyle}">A</text>
        <text x="${cx + cDX}" y="${cy + letterDY[1]}" style="${letterStyle}">C</text>
      </g>
      ${dotEls}
    </g>`
}

function svgDoc({ width, height, withText, frameState, bg }) {
  const iconX = PAD
  const iconY = (height - ICON) / 2
  const textX = iconX + ICON + GAP
  const textY = height / 2
  const wordmark = withText
    ? `<text x="${textX}" y="${textY}" dominant-baseline="central" style="font-family:'Arial','Helvetica Neue',sans-serif;font-weight:700;font-size:${TEXT_SIZE}px;fill:${GOLD};letter-spacing:-0.02em;">AlfaCall</text>`
    : ""
  const bgRect = bg ? `<rect width="${width}" height="${height}" fill="${bg}"/>` : ""
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="navy" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0d1f38"/>
      <stop offset="50%" stop-color="#152a4a"/>
      <stop offset="100%" stop-color="#0a1628"/>
    </linearGradient>
    <linearGradient id="innerHi" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.08"/>
      <stop offset="50%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
    <filter id="cardShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="${4 * S}" stdDeviation="${5 * S}" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
    <filter id="letterGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="0" stdDeviation="${3 * S}" flood-color="${GOLD}" flood-opacity="0.7"/>
    </filter>
    <filter id="dotGlow" x="-150%" y="-150%" width="400%" height="400%">
      <feDropShadow dx="0" dy="0" stdDeviation="${2 * S}" flood-color="${GOLD}" flood-opacity="0.9"/>
    </filter>
  </defs>
  ${bgRect}
  ${iconGroup(iconX, iconY, frameState)}
  ${wordmark}
</svg>`
}

function renderPNG(svg, width) {
  const r = new Resvg(svg, { fitTo: { mode: "width", value: width } })
  return r.render()
}

// ---- Static logo (transparent + white-bg versions) ----
const staticState = {
  dots: [
    { scale: 1, opacity: 0.95 },
    { scale: 1, opacity: 0.8 },
    { scale: 1, opacity: 0.65 },
  ],
  letterDY: [0, 0],
}

// icon-only square
const sqW = ICON + PAD * 2
{
  const svg = svgDoc({ width: sqW, height: sqW, withText: false, frameState: staticState })
  writeFileSync(`${OUT}/alfacall-icon.png`, renderPNG(svg, sqW).asPng())
}
// horizontal lockup (transparent)
const hW = PAD + ICON + GAP + TEXT_W + PAD
const hH = ICON + PAD * 2
{
  const svg = svgDoc({ width: hW, height: hH, withText: true, frameState: staticState })
  writeFileSync(`${OUT}/alfacall-logo.png`, renderPNG(svg, hW).asPng())
  // white background variant (good for email/LinkedIn light themes)
  const svgWhite = svgDoc({ width: hW, height: hH, withText: true, frameState: staticState, bg: "#ffffff" })
  writeFileSync(`${OUT}/alfacall-logo-white-bg.png`, renderPNG(svgWhite, hW).asPng())
}

console.log("Static logos written.")

// ---- Animated GIF (matches animated-logo wave + pulsing dots) ----
const FRAMES = 30
const DUR_MS = 1600 // matches 1.6s letter cycle
const delay = Math.round(DUR_MS / FRAMES)
const gifW = Math.round(hW / 2) // keep file size reasonable
const gifScale = gifW / hW

function lerpDots(t, phase) {
  // pulse 1s cycle: scale 1 -> peak -> 1
  const cycle = (t * (DUR_MS / 1000)) // seconds elapsed in this frame
  const p = ((cycle - phase) % 1 + 1) % 1
  const tri = 1 - Math.abs(p * 2 - 1) // 0..1..0
  return tri
}

const enc = GIFEncoder()
for (let f = 0; f < FRAMES; f++) {
  const t = f / FRAMES // 0..1 over 1.6s
  // letter wave: A = [0,-3,0,3,0], C offset by 0.25/1.6 with opposite-ish phase
  const aDY = -3 * S * Math.sin(2 * Math.PI * t)
  const cDY = 3 * S * Math.sin(2 * Math.PI * t)
  // dots pulse over 1s cycles with delays 0,0.2,0.4
  const peaks = [1.4, 1.5, 1.6]
  const opLow = [0.9, 0.7, 0.5]
  const phases = [0, 0.2, 0.4]
  const dots = peaks.map((peak, i) => {
    const tri = lerpDots(t * (DUR_MS / 1000) === undefined ? t : t, phases[i])
    // recompute properly: elapsed seconds = t*1.6
    const elapsed = t * (DUR_MS / 1000)
    const p = (((elapsed - phases[i]) % 1) + 1) % 1
    const triangle = 1 - Math.abs(p * 2 - 1)
    return {
      scale: 1 + (peak - 1) * triangle,
      opacity: opLow[i] + (1 - opLow[i]) * triangle,
    }
  })
  const state = { dots, letterDY: [aDY, cDY] }
  const svg = svgDoc({ width: hW, height: hH, withText: true, frameState: state })
  const png = renderPNG(svg, gifW)
  const { width, height, pixels } = png // pixels = RGBA buffer
  const data = new Uint8ClampedArray(pixels.buffer, pixels.byteOffset, pixels.length)
  const palette = quantize(data, 256, { format: "rgba4444" })
  const index = applyPalette(data, palette, "rgba4444")
  enc.writeFrame(index, width, height, { palette, delay, transparent: true, transparentIndex: 0 })
}
enc.finish()
writeFileSync(`${OUT}/alfacall-logo-animated.gif`, enc.bytes())
console.log("Animated GIF written:", gifW, "x", Math.round(hH * gifScale))
