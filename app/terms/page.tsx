"use client"

import { FileText } from "lucide-react"
import { LegalPage, type LegalSection } from "@/components/legal-page"

const sections: LegalSection[] = [
  {
    heading: "1. Acceptance of Terms",
    body: [
      "These Terms of Service (\"Terms\") govern your access to and use of AlfaCall's website, products, and services. By accessing or using our services, you agree to be bound by these Terms. If you are entering into these Terms on behalf of a company, you represent that you have authority to bind that company.",
    ],
  },
  {
    heading: "2. Services",
    body: [
      "AlfaCall provides wholesale telecommunications services including voice termination, DID numbers, SMS messaging, and SIP trunking. The specific services, rates, and commercial terms applicable to you are set out in your service order or master services agreement.",
    ],
  },
  {
    heading: "3. Account Registration",
    body: [
      "To use certain services, you must register for an account and provide accurate, complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.",
    ],
  },
  {
    heading: "4. Acceptable Use",
    body: ["You agree not to use our services to:"],
    bullets: [
      "Transmit fraudulent, unlawful, or unsolicited communications, including spam.",
      "Infringe the intellectual property or privacy rights of others.",
      "Generate artificially inflated traffic or engage in traffic pumping.",
      "Interfere with or disrupt the integrity or performance of our network.",
    ],
  },
  {
    heading: "5. Fees and Payment",
    body: [
      "You agree to pay all fees for the services in accordance with the rates and payment terms set out in your service order. Late payments may result in suspension of service and the application of interest charges as permitted by law.",
    ],
  },
  {
    heading: "6. Service Levels",
    body: [
      "AlfaCall targets a 99.99% network uptime. Specific service level commitments, including remedies for downtime, are described in our Service Level Agreement (SLA), which forms part of these Terms.",
    ],
  },
  {
    heading: "7. Intellectual Property",
    body: [
      "All content, trademarks, and technology associated with the services are the property of AlfaCall or its licensors. These Terms do not grant you any right, title, or interest in our intellectual property except as expressly set out herein.",
    ],
  },
  {
    heading: "8. Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, AlfaCall shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising out of or related to your use of the services.",
    ],
  },
  {
    heading: "9. Termination",
    body: [
      "We may suspend or terminate your access to the services if you breach these Terms or engage in conduct that may harm AlfaCall, its users, or third parties. Upon termination, your right to use the services will immediately cease.",
    ],
  },
  {
    heading: "10. Governing Law and Jurisdiction",
    body: [
      "These Terms, and any dispute or claim arising out of or in connection with them or their subject matter (including non-contractual disputes or claims), are governed by and construed in accordance with the laws of the State of Wyoming, United States, where AlfaCall maintains its registered office, without regard to its conflict of laws principles. The United Nations Convention on Contracts for the International Sale of Goods does not apply.",
      "The parties agree that the state and federal courts located in Sheridan County, Wyoming shall have exclusive jurisdiction to settle any such dispute or claim, and each party irrevocably submits to the jurisdiction of those courts. Notwithstanding the foregoing, AlfaCall may seek injunctive or other equitable relief to protect its intellectual property or confidential information in any court of competent jurisdiction. Where required by mandatory local law, nothing in this section limits the statutory rights of consumers.",
    ],
  },
  {
    heading: "11. Changes to These Terms",
    body: [
      "We may modify these Terms from time to time. Material changes will be communicated through our website or directly to you. Continued use of the services after changes take effect constitutes acceptance of the revised Terms.",
    ],
  },
]

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      eyebrowIcon={FileText}
      title="Terms of Service"
      description="Please read these terms carefully. They govern your access to and use of all AlfaCall services."
      lastUpdated="June 13, 2026"
      sections={sections}
    />
  )
}
