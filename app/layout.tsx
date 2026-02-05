import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: 'Best Beauty Parlour in Madurai | Apsara Makeover',
  description: 'Apsara Makeover is one of the best beauty parlours in Madurai, offering professional makeup and beauty services near Kanpalayam. 4.1★ rated. Call 098654 59229.',
  generator: 'v0.app',
  keywords: ['best beauty parlour in Madurai', 'beauty parlour near me', 'makeup artist in Madurai', 'ladies beauty parlour in Madurai', 'Apsara Makeover Madurai', 'bridal makeup Madurai', 'salon Madurai'],
  openGraph: {
    title: 'Best Beauty Parlour in Madurai | Apsara Makeover',
    description: 'Apsara Makeover is one of the best beauty parlours in Madurai, offering professional makeup and beauty services near Kanpalayam.',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://deepakchandh.github.io/apsara-makeover-website',
  },
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
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
