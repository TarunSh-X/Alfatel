"use client"

import { type LucideIcon } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"

export interface LegalSection {
  heading: string
  /** Paragraphs of body text */
  body?: string[]
  /** Optional bullet list */
  bullets?: string[]
}

interface LegalPageProps {
  eyebrow: string
  eyebrowIcon: LucideIcon
  title: string
  description: string
  lastUpdated: string
  sections: LegalSection[]
}

export function LegalPage({
  eyebrow,
  eyebrowIcon,
  title,
  description,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow={eyebrow}
          eyebrowIcon={eyebrowIcon}
          title={title}
          highlightLastWord
          description={description}
          align="left"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: title, href: "#" },
          ]}
        />

        <section className="py-20 bg-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>

            <div className="mt-10 space-y-10">
              {sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground">
                    {section.heading}
                  </h2>
                  {section.body?.map((paragraph, i) => (
                    <p key={i} className="mt-4 text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-4 space-y-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#b89850] shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div className="rounded-2xl bg-secondary/50 border border-border p-6">
                <h2 className="text-lg font-semibold text-foreground">Questions?</h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  If you have any questions about this document, contact us at{" "}
                  <a href="mailto:info@alfacall.net" className="text-[#b89850] hover:underline">
                    info@alfacall.net
                  </a>{" "}
                  or call{" "}
                  <a href="tel:+12082447477" className="text-[#b89850] hover:underline">
                    +1 (208) 244-7477
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
