import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  variable: '--font-inter', 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Alfacall - Global Telecom Solutions',
  description: 'Enterprise-grade wholesale voice, DID, SMS, and SIP trunking solutions. Connect globally with 99.99% uptime and powerful APIs.',
  keywords: 'wholesale voice, DID numbers, SMS API, SIP trunking, telecom, VoIP, cloud communications',
  openGraph: {
    title: 'Alfacall - Global Telecom Solutions',
    description: 'Enterprise-grade wholesale voice, DID, SMS, and SIP trunking solutions.',
    url: 'https://alfacall.net',
    siteName: 'Alfacall',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
