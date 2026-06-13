// Generates the AlfaCall CEO business card (wide layout) as a high-res PNG.
// Matches the brand system: navy #0f2744, gold #FFBE32, cream background,
// the AC logo lockup from components/static-logo.tsx, Great Vibes script name,
// and Inter for title/contact text.
// Run: node scripts/generate-business-card.mjs
import { Resvg } from "@resvg/resvg-js"
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"

const OUT = "public/brand"
mkdirSync(OUT, { recursive: true })

// ---- Brand palette ----
const NAVY = "#0f2744"
const NAVY_DEEP = "#0a1628"
const GOLD = "#FFBE32"
const CREAM = "#f7f1e8"
const CREAM_HI = "#fbf7f0"
const INK = "#1f2937"
const MUTED = "#6b7280"
const LINE = "#d9cdbb"

// ---- Person / contact details ----
const PERSON = {
  name: "Rohit Ojha",
  title: "Chief Executive Officer",
  email: "rohit@alfacall.net",
  website: "www.alfacall.net",
  phone: "+91 99104 08404",
  addressLine1: "RM 603, 6/F, South China Industrial Building 1",
  addressLine2: "Chun Pin Street, Kwai Chung, Hong Kong",
}

// ---- Canvas (business-card-style wide ratio, high res) ----
const W = 2100
const H = 1200
const S = 2 // logo internal scale factor

// ---- Embed headshot as data URI ----
const headshot = readFileSync("assets/people/rohit-headshot.png").toString("base64")
const headshotURI = `data:image/png;base64,${headshot}`

// =================== AC logo group (from generate-logos.mjs) ===================
const ICON = 56 * S
const LETTER = 28 * S
function iconGroup(x, y) {
  const r = 11 * S
  const cx = x + ICON / 2
  const cy = y + ICON / 2
  const aDX = -LETTER * 0.36
  const cDX = LETTER * 0.36
  const letterStyle = `font-family:'Arial','Helvetica Neue',sans-serif;font-weight:900;font-size:${LETTER}px;fill:${GOLD};letter-spacing:-0.02em;`
  const dot1 = { cx: x + ICON - 1 * S, cy: y + 1 * S, r: 4 * S }
  const dot2 = { cx: x + ICON - 11 * S, cy: y + 5.5 * S, r: 2.4 * S }
  const dot3 = { cx: x + ICON - 17 * S, cy: y + 10 * S, r: 1.6 * S }
  const dots = [dot1, dot2, dot3]
    .map(
      (d, i) =>
        `<circle cx="${d.cx}" cy="${d.cy}" r="${d.r}" fill="${GOLD}" opacity="${[0.95, 0.8, 0.65][i]}" filter="url(#dotGlow)"/>`,
    )
    .join("")
  return `
    <g>
      <rect x="${x}" y="${y}" width="${ICON}" height="${ICON}" rx="${r}" fill="url(#navy)" filter="url(#cardShadow)"/>
      <rect x="${x}" y="${y}" width="${ICON}" height="${ICON}" rx="${r}" fill="url(#innerHi)"/>
      <g filter="url(#letterGlow)" text-anchor="middle" dominant-baseline="central">
        <text x="${cx + aDX}" y="${cy}" style="${letterStyle}">A</text>
        <text x="${cx + cDX}" y="${cy}" style="${letterStyle}">C</text>
      </g>
      ${dots}
    </g>`
}

// AlfaCall wordmark next to the icon. "Alfa" navy, "Call" gold (matches site).
function logoLockup(x, y) {
  const textX = x + ICON + 14 * S
  const ty = y + ICON / 2
  const wm = 30 * S
  return `
    ${iconGroup(x, y)}
    <text x="${textX}" y="${ty}" dominant-baseline="central" style="font-family:'Inter';font-weight:700;font-size:${wm}px;letter-spacing:-0.01em;">
      <tspan fill="${NAVY}">Alfa</tspan><tspan fill="${GOLD}">Call</tspan>
    </text>`
}

// =================== Contact row icons (gold circle + glyph) ===================
function contactIcon(type, cx, cy) {
  const r = 22
  const circle = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${NAVY}"/>`
  const g = GOLD
  let glyph = ""
  if (type === "mail") {
    glyph = `<g stroke="${g}" stroke-width="2.4" fill="none" stroke-linejoin="round" stroke-linecap="round">
      <rect x="${cx - 11}" y="${cy - 8}" width="22" height="16" rx="2.5"/>
      <path d="M ${cx - 11} ${cy - 6} L ${cx} ${cy + 3} L ${cx + 11} ${cy - 6}"/>
    </g>`
  } else if (type === "web") {
    glyph = `<g stroke="${g}" stroke-width="2.2" fill="none">
      <circle cx="${cx}" cy="${cy}" r="11"/>
      <ellipse cx="${cx}" cy="${cy}" rx="4.5" ry="11"/>
      <line x1="${cx - 11}" y1="${cy}" x2="${cx + 11}" y2="${cy}"/>
    </g>`
  } else if (type === "phone") {
    glyph = `<path d="M ${cx - 9} ${cy - 10} q -2 0 -2.5 2.2 c -1.5 9 7 17.5 16 16 q 2.2 -0.5 2.2 -2.5 l 0 -4 q 0 -1.6 -1.6 -2 l -3.4 -0.8 q -1.4 -0.3 -2.2 0.8 l -0.8 1.1 q -3.4 -1.8 -5.3 -5.3 l 1.1 -0.8 q 1.1 -0.8 0.8 -2.2 l -0.8 -3.4 q -0.4 -1.6 -2 -1.6 z" fill="${g}"/>`
  } else if (type === "pin") {
    glyph = `<g fill="none" stroke="${g}" stroke-width="2.4" stroke-linejoin="round">
      <path d="M ${cx} ${cy - 12} c 5.5 0 9 4 9 9 c 0 6 -9 15 -9 15 c 0 0 -9 -9 -9 -15 c 0 -5 3.5 -9 9 -9 z"/>
      <circle cx="${cx}" cy="${cy - 3}" r="3.2" fill="${g}" stroke="none"/>
    </g>`
  }
  return circle + glyph
}

// =================== Decorative concentric arcs ===================
function arcs(cx, cy, color, count, base, step, opacity) {
  let out = ""
  for (let i = 0; i < count; i++) {
    const rr = base + i * step
    out += `<circle cx="${cx}" cy="${cy}" r="${rr}" fill="none" stroke="${color}" stroke-width="2" opacity="${opacity}"/>`
  }
  return out
}

// =================== Layout coordinates ===================
const photoCX = 430
const photoCY = 470
const photoR = 250

const dividerX = 870
const rightX = 980

const nameY = 300
const titleY = 430

const contactStartY = 600
const contactGap = 132
const iconX = rightX + 28
const textX = rightX + 80

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${CREAM_HI}"/>
      <stop offset="100%" stop-color="${CREAM}"/>
    </linearGradient>
    <linearGradient id="navy" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0d1f38"/>
      <stop offset="50%" stop-color="#152a4a"/>
      <stop offset="100%" stop-color="${NAVY_DEEP}"/>
    </linearGradient>
    <linearGradient id="innerHi" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.08"/>
      <stop offset="50%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
    <filter id="cardShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="${4 * S}" stdDeviation="${5 * S}" flood-color="#000000" flood-opacity="0.45"/>
    </filter>
    <filter id="letterGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="0" stdDeviation="${3 * S}" flood-color="${GOLD}" flood-opacity="0.7"/>
    </filter>
    <filter id="dotGlow" x="-150%" y="-150%" width="400%" height="400%">
      <feDropShadow dx="0" dy="0" stdDeviation="${2 * S}" flood-color="${GOLD}" flood-opacity="0.9"/>
    </filter>
    <filter id="photoShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="10" stdDeviation="22" flood-color="${NAVY}" flood-opacity="0.28"/>
    </filter>
    <clipPath id="photoClip"><circle cx="${photoCX}" cy="${photoCY}" r="${photoR}"/></clipPath>
  </defs>

  <!-- background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- decorative arcs -->
  <g clip-path="inset(0)">
    ${arcs(70, 150, GOLD, 6, 60, 46, 0.18)}
    ${arcs(W - 30, H - 40, GOLD, 8, 80, 52, 0.16)}
    ${arcs(W - 80, 120, LINE, 5, 50, 40, 0.4)}
  </g>

  <!-- headshot -->
  <circle cx="${photoCX}" cy="${photoCY}" r="${photoR + 8}" fill="#ffffff" filter="url(#photoShadow)"/>
  <image href="${headshotURI}" x="${photoCX - photoR}" y="${photoCY - photoR}" width="${photoR * 2}" height="${photoR * 2}" clip-path="url(#photoClip)" preserveAspectRatio="xMidYMid slice"/>
  <circle cx="${photoCX}" cy="${photoCY}" r="${photoR}" fill="none" stroke="${GOLD}" stroke-width="6" opacity="0.9"/>

  <!-- logo lockup under photo -->
  ${logoLockup(photoCX - 150, photoCY + photoR + 70)}

  <!-- vertical divider -->
  <line x1="${dividerX}" y1="170" x2="${dividerX}" y2="${H - 170}" stroke="${LINE}" stroke-width="2"/>

  <!-- name (script) -->
  <text x="${rightX}" y="${nameY}" style="font-family:'Great Vibes';font-size:170px;fill:${NAVY};">${PERSON.name}</text>

  <!-- title -->
  <text x="${rightX + 6}" y="${titleY}" style="font-family:'Inter';font-weight:500;font-size:40px;fill:${MUTED};letter-spacing:0.22em;">${PERSON.title.toUpperCase()}</text>

  <!-- contact rows -->
  ${contactIcon("mail", iconX, contactStartY)}
  <text x="${textX}" y="${contactStartY + 13}" style="font-family:'Inter';font-weight:500;font-size:42px;fill:${INK};">${PERSON.email}</text>

  ${contactIcon("web", iconX, contactStartY + contactGap)}
  <text x="${textX}" y="${contactStartY + contactGap + 13}" style="font-family:'Inter';font-weight:500;font-size:42px;fill:${INK};">${PERSON.website}</text>

  ${contactIcon("phone", iconX, contactStartY + contactGap * 2)}
  <text x="${textX}" y="${contactStartY + contactGap * 2 + 13}" style="font-family:'Inter';font-weight:500;font-size:42px;fill:${INK};">${PERSON.phone}</text>

  ${contactIcon("pin", iconX, contactStartY + contactGap * 3 + 6)}
  <text x="${textX}" y="${contactStartY + contactGap * 3}" style="font-family:'Inter';font-weight:500;font-size:38px;fill:${INK};">${PERSON.addressLine1}</text>
  <text x="${textX}" y="${contactStartY + contactGap * 3 + 50}" style="font-family:'Inter';font-weight:500;font-size:38px;fill:${INK};">${PERSON.addressLine2}</text>
</svg>`

const resvg = new Resvg(svg, {
  fitTo: { mode: "width", value: W },
  font: {
    fontFiles: [
      "assets/fonts/GreatVibes-Regular.ttf",
      "assets/fonts/Inter-Variable.ttf",
      "assets/fonts/Inter-Regular.ttf",
      "assets/fonts/Inter-Bold.ttf",
    ],
    loadSystemFonts: false,
    defaultFontFamily: "Inter",
  },
})
writeFileSync(`${OUT}/alfacall-business-card-rohit-ojha.png`, resvg.render().asPng())
console.log("Business card written:", W, "x", H)
