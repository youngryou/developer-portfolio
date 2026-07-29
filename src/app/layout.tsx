import type { Metadata } from 'next'
import './globals.css'

import { GoogleAnalytics } from '@next/third-parties/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Providers } from '@/context/Providers'

export const metadata: Metadata = {
  metadataBase: new URL('https://youngryou.com'),
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
        url: '/page-thumbnail.png',
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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <div className="bg-fixed-layer" />
        <div className="glow-spot-1" />
        <div className="glow-spot-2" />
        <Providers>
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </Providers>

        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  )
}
