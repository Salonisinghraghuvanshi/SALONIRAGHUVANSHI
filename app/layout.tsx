import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
// @ts-ignore
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"]
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"]
});

export const metadata: Metadata = {
  title: 'Saloni Singh — Social Media & AI Content Strategist',
  description: 'Elevate your premium brand with cinematic videography, AI-driven content creation, Canva Pro designs, and high-converting Meta ad strategies.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en"
      className={`${playfairDisplay.variable} ${dmSans.variable}`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className="bg-white text-body-text antialiased" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}