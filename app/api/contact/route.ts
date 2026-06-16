import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

const TO_EMAIL = "info@alfacall.net"

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

  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASSWORD

  if (!host || !user || !pass) {
    console.log("[v0] SMTP not configured. Missing SMTP_HOST, SMTP_USER, or SMTP_PASSWORD.")
    return NextResponse.json(
      { error: "Email service is not configured yet. Please try again later." },
      { status: 503 },
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
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465 (SSL), false for 587/25 (STARTTLS)
      auth: { user, pass },
    })

    await transporter.sendMail({
      from: `"AlfaCall Website" <${process.env.SMTP_FROM || user}>`,
      to: TO_EMAIL,
      replyTo: `"${fullName}" <${email}>`,
      subject: `[Contact] ${subject} — ${fullName}`,
      text,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.log("[v0] Contact route SMTP error:", err instanceof Error ? err.message : err)
    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 })
  }
}
