"use client"

import { ShieldCheck } from "lucide-react"
import { LegalPage, type LegalSection } from "@/components/legal-page"

const sections: LegalSection[] = [
  {
    heading: "1. Introduction",
    body: [
      "AlfaCall (\"AlfaCall\", \"we\", \"us\", or \"our\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our wholesale voice, DID, SMS, and SIP trunking services.",
      "By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue use of our services.",
    ],
  },
  {
    heading: "2. Information We Collect",
    body: ["We collect information that you provide directly to us and information generated through your use of our services, including:"],
    bullets: [
      "Contact details such as your name, company, email address, and phone number.",
      "Account and billing information required to provision and invoice services.",
      "Technical data such as call detail records (CDRs), IP addresses, and traffic logs.",
      "Communications you send to us, including support requests and inquiries.",
    ],
  },
  {
    heading: "3. How We Use Your Information",
    body: ["We use the information we collect to:"],
    bullets: [
      "Provide, operate, and maintain our telecommunications services.",
      "Process transactions and send related billing information.",
      "Respond to inquiries, provide support, and communicate service updates.",
      "Detect, prevent, and address fraud, abuse, and security incidents.",
      "Comply with legal and regulatory obligations.",
    ],
  },
  {
    heading: "4. Sharing of Information",
    body: [
      "We do not sell your personal information. We may share information with trusted service providers, interconnect carriers, and regulatory authorities where required to deliver services or comply with applicable law. All such parties are bound by appropriate confidentiality obligations.",
    ],
  },
  {
    heading: "5. Data Security",
    body: [
      "We implement administrative, technical, and physical safeguards designed to protect your information, including encryption in transit, access controls, and continuous monitoring. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "6. Data Retention",
    body: [
      "We retain personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Call detail records are retained in accordance with applicable telecommunications regulations.",
    ],
  },
  {
    heading: "7. Your Rights",
    body: [
      "Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict the processing of your personal information. To exercise these rights, please contact us using the details below.",
    ],
  },
  {
    heading: "8. International Transfers",
    body: [
      "As a global telecommunications provider, we may transfer and process your information in countries other than your own. We take appropriate measures to ensure your information receives an adequate level of protection wherever it is processed.",
    ],
  },
  {
    heading: "9. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated \"Last updated\" date. We encourage you to review this policy periodically.",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      eyebrowIcon={ShieldCheck}
      title="Privacy Policy"
      description="Your privacy matters. This policy explains how AlfaCall collects, uses, and protects your information."
      lastUpdated="June 13, 2026"
      sections={sections}
    />
  )
}
