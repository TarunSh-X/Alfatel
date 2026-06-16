import { NextResponse } from "next/server"

export const runtime = "nodejs"

const TO_EMAIL = "info@alfacall.net"
// Use Resend's shared onboarding sender until a verified domain is configured.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "AlfaCall Website <onboarding@resend.dev>"

type ContactPayload = {
  fullName?: string
  company?: string
  email?: string
  countryCode?: string
  phone?: string
  subject?: string
  message?: string
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function POST(request: Request) {
  let body: ContactPayload
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const fullName = body.fullName?.trim() || ""
  const email = body.email?.trim() || ""
  const subject = body.subject?.trim() || "General Inquiry"
  const message = body.message?.trim() || ""
  const company = body.company?.trim() || ""
  const phone = [body.countryCode?.trim(), body.phone?.trim()].filter(Boolean).join(" ").trim()

  // Basic server-side validation
  if (!fullName || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log("[v0] RESEND_API_KEY is not set — cannot send contact email.")
    return NextResponse.json(
      { error: "Email service is not configured. Please try again later." },
      { status: 500 },
    )
  }

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #0f2744; line-height: 1.6;">
      <h2 style="margin: 0 0 16px; color: #0f2744;">New Contact Form Submission</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
        <tr><td style="padding: 6px 0; font-weight: bold; width: 140px;">Name</td><td style="padding: 6px 0;">${escapeHtml(fullName)}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: bold;">Email</td><td style="padding: 6px 0;">${escapeHtml(email)}</td></tr>
        ${company ? `<tr><td style="padding: 6px 0; font-weight: bold;">Company</td><td style="padding: 6px 0;">${escapeHtml(company)}</td></tr>` : ""}
        ${phone ? `<tr><td style="padding: 6px 0; font-weight: bold;">Phone</td><td style="padding: 6px 0;">${escapeHtml(phone)}</td></tr>` : ""}
        <tr><td style="padding: 6px 0; font-weight: bold;">Subject</td><td style="padding: 6px 0;">${escapeHtml(subject)}</td></tr>
      </table>
      <h3 style="margin: 20px 0 8px; color: #0f2744;">Message</h3>
      <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(message)}</p>
    </div>
  `

  const text = `New contact form submission

Name: ${fullName}
Email: ${email}
${company ? `Company: ${company}\n` : ""}${phone ? `Phone: ${phone}\n` : ""}Subject: ${subject}

Message:
${message}
`

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `[Contact] ${subject} — ${fullName}`,
        html,
        text,
      }),
    })

    if (!res.ok) {
      const detail = await res.text()
      console.log("[v0] Resend API error:", res.status, detail)
      return NextResponse.json({ error: "Failed to send message." }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.log("[v0] Contact route exception:", err)
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 })
  }
}
