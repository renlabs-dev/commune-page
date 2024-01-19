import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Commune AI',
  description: "Commune AI: Revolutionizing software development with seamless connectivity, effortless code reuse, limitless scalability, and honest, unbiased voting. Join us!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-gray-900`}>{children}</body>
    </html>
  )
}
