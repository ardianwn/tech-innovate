import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: 'TechInnovate - Leading Technology Solutions',
  description: 'TechInnovate is a cutting-edge technology company delivering innovative solutions for digital transformation, cloud services, and enterprise software development.',
  keywords: ['technology', 'software development', 'cloud services', 'digital transformation', 'IT consulting'],
  authors: [{ name: 'TechInnovate' }],
  openGraph: {
    title: 'TechInnovate - Leading Technology Solutions',
    description: 'Innovative technology solutions for modern businesses',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
