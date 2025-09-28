import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kickoff Eindhoven - Brainport\'s First Startup Club',
  description: 'Brainport\'s first startup and entrepreneur club for students by students',
  keywords: ['startup club', 'entrepreneur', 'students', 'Eindhoven', 'Brainport', 'networking', 'innovation', 'business', 'startup community'],
  authors: [{ name: 'Kickoff Eindhoven' }],
  creator: 'Kickoff Eindhoven',
  publisher: 'Kickoff Eindhoven',
  robots: 'index, follow',

  // Open Graph tags for social sharing (WhatsApp, Facebook, etc.)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kickoffeindhoven.com', // Update with your actual domain
    siteName: 'Kickoff Eindhoven',
    title: 'Kickoff Eindhoven - Brainport\'s First Startup Club',
    description: 'Brainport\'s first startup and entrepreneur club for students by students',
    images: [
      {
        url: '/KickoffLogo.png',
        width: 1200,
        height: 630,
        alt: 'Kickoff Eindhoven Logo',
      },
    ],
  },

  // Twitter Card tags
  twitter: {
    card: 'summary_large_image',
    title: 'Kickoff Eindhoven - Brainport\'s First Startup Club',
    description: 'Brainport\'s first startup and entrepreneur club for students by students',
    images: ['/KickoffLogo.png'],
  },

  // Favicon and app icons
  icons: {
    icon: '/KickoffLogo.png',
    shortcut: '/KickoffLogo.png',
    apple: '/KickoffLogo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}