import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Young Ryou | Full-Stack Developer',
  description:
    'Portfolio of Young Ryou, a Full-Stack Web Developer based in Auckland, New Zealand. View my latest projects and technical skills.',
  keywords: [
    'Young Ryou',
    'Full-Stack Developer',
    'Web Developer',
    'Auckland',
    'TypeScript',
    'React',
    'Node.js',
  ],
  authors: [{ name: 'Young Ryou' }],
  openGraph: {
    title: 'Young Ryou | Developer Portfolio',
    description:
      'Portfolio of Young Ryou, a Full-Stack Web Developer based in Auckland, New Zealand.',
    url: 'https://youngryou.com',
    siteName: 'Young Ryou Portfolio',
    images: [
      {
        url: '/page-thumbnail.webp',
        width: 1200,
        height: 630,
        alt: 'Page Thumbnail',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
