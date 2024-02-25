import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Inter, Poppins, Krona_One } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Providers } from './providers'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['500', '600', '700'],
})
const krona = Krona_One({
  subsets: ['latin'],
  variable: '--font-krona',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'CMA Digital Music',
  description:
    'CMA é uma plataforma de distribuição musical que aproxima o artista com o público e as princiais plataformas digitais.',
  keywords: [
    'distribuição musical, music distribution, música, musical, music, digital, artista, artist',
  ],
  authors: [
    {
      name: 'Pietro Rhyan',
      url: 'https://www.rhyann.com/',
    },
    {
      name: 'Carlos Mathias de Amorim',
    },
  ],
  category: 'Distribuidora Musical',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/cma-shortcut.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${poppins.variable} ${krona.variable} flex flex-col justify-between min-h-screen text-black bg-white`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
