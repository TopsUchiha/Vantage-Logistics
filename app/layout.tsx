import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SiteChrome } from '@/components/site-chrome'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Vantage Logistics | Your Cargo. Our Priority.',
    template: '%s | Vantage Logistics',
  },
  description:
    'Vantage Logistics delivers reliable, efficient, and secure shipping solutions for businesses and individuals across the globe. Air freight, ocean freight, warehousing, customs clearance and more.',
  generator: 'v0.app',
  keywords: [
    'logistics',
    'freight',
    'shipping',
    'air freight',
    'ocean freight',
    'supply chain',
    'warehousing',
    'customs clearance',
  ],
  openGraph: {
    title: 'Vantage Logistics | Your Cargo. Our Priority.',
    description:
      'Reliable, efficient, and secure global shipping solutions for businesses and individuals.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1b2c4f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${inter.variable}`}>
      <body className="antialiased font-sans flex min-h-screen flex-col bg-background text-foreground">
        <SiteChrome header={<SiteHeader />} footer={<SiteFooter />}>
          {children}
        </SiteChrome>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
