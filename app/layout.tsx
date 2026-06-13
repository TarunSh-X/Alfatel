import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  variable: '--font-inter', 
  subsets: ['latin'],
  display: 'swap',
})

// Only the real production deployment should be indexable by search engines.
const isProduction = process.env.VERCEL_ENV === 'production'

export const metadata: Metadata = {
  metadataBase: new URL('https://alfacall.net'),
  title: {
    default: 'AlfaCall - Global Telecom Solutions | Wholesale Voice, DID, SMS & SIP',
    template: '%s | AlfaCall',
  },
  description: 'Enterprise-grade wholesale voice, DID numbers, SMS API, and SIP trunking solutions. Connect globally with 99.99% uptime, powerful APIs, and 24/7 support.',
  authors: [{ name: 'AlfaCall' }],
  creator: 'AlfaCall',
  publisher: 'AlfaCall',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'AlfaCall - Global Telecom Solutions',
    description: 'Enterprise-grade wholesale voice, DID, SMS, and SIP trunking solutions. Connect globally with 99.99% uptime.',
    url: 'https://alfacall.net',
    siteName: 'AlfaCall',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AlfaCall - Global Telecom Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AlfaCall - Global Telecom Solutions',
    description: 'Enterprise-grade wholesale voice, DID, SMS, and SIP trunking solutions.',
    images: ['/og-image.png'],
  },
  robots: isProduction
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      }
    : {
        index: false,
        follow: false,
      },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
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
