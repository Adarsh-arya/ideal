import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({ subsets: [], weight: '400' })

export const metadata: Metadata = {
  title: 'Ideal e Designs',
  description: 'Grow Your Business WithIdeal e Designs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  )
}
