"use client"

import { Activity } from "lucide-react"
import { LegalPage, type LegalSection } from "@/components/legal-page"

const sections: LegalSection[] = [
  {
    heading: "1. Overview",
    body: [
      "This Service Level Agreement (\"SLA\") describes the service availability commitments AlfaCall provides for its wholesale voice, DID, SMS, and SIP trunking services. This SLA forms part of, and is governed by, our Terms of Service.",
    ],
  },
  {
    heading: "2. Uptime Commitment",
    body: [
      "AlfaCall commits to a monthly network availability of 99.99% for its core platform, measured as the percentage of total minutes in a calendar month during which the service is available, excluding scheduled maintenance and events outside our reasonable control.",
    ],
  },
  {
    heading: "3. Scheduled Maintenance",
    body: [
      "We perform routine maintenance to keep our network reliable and secure. Whenever practical, scheduled maintenance is performed during off-peak hours, and we provide advance notice of at least 48 hours for any maintenance expected to impact service.",
    ],
  },
  {
    heading: "4. Support Response Times",
    body: ["Our Network Operations Center (NOC) operates 24/7. Target response times by severity are:"],
    bullets: [
      "Critical (service outage): response within 15 minutes.",
      "High (major degradation): response within 1 hour.",
      "Medium (partial impact): response within 4 hours.",
      "Low (general inquiry): response within 1 business day.",
    ],
  },
  {
    heading: "5. Service Credits",
    body: [
      "If we fail to meet the monthly uptime commitment, you may be eligible for service credits applied against future invoices. Credits are calculated as a percentage of the monthly fees for the affected service:",
    ],
    bullets: [
      "99.0% to 99.99% availability: 5% service credit.",
      "95.0% to 98.99% availability: 10% service credit.",
      "Below 95.0% availability: 25% service credit.",
    ],
  },
  {
    heading: "6. Claiming Credits",
    body: [
      "To request a service credit, you must submit a claim to our support team within 30 days of the incident, including relevant details and supporting information. Credits are your sole and exclusive remedy for any failure to meet the SLA.",
    ],
  },
  {
    heading: "7. Exclusions",
    body: ["This SLA does not apply to unavailability resulting from:"],
    bullets: [
      "Scheduled or emergency maintenance with appropriate notice.",
      "Factors outside our reasonable control, including force majeure events.",
      "Issues arising from your equipment, configurations, or third-party networks.",
      "Suspension or termination of service due to breach of our Terms.",
    ],
  },
  {
    heading: "8. Changes to This SLA",
    body: [
      "We may update this SLA from time to time to reflect changes to our services. Material changes will be communicated through our website or directly to you.",
    ],
  },
]

export default function SLAPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      eyebrowIcon={Activity}
      title="Service Level Agreement"
      description="Our commitment to reliability — uptime targets, support response times, and service credits."
      lastUpdated="June 13, 2026"
      sections={sections}
    />
  )
}
