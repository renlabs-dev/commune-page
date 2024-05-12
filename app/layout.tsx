import './globals.css'

import { Header } from './components'
import type { Metadata } from 'next'
import { cairo } from './fonts'

export const metadata: Metadata = {
  title: 'Commune AI',
  description:
    'Commune AI: Revolutionizing software development with seamless connectivity, effortless code reuse, limitless scalability, and honest, unbiased voting. Join us!',
  robots: 'all',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${cairo.className}`}>
      <body className="relative h-full animate-fade-in-up bg-black bg-[url('/bg-pattern.svg')] bg-cover">
        <header>
          <link rel='icon' href='/commune-logo.svg' sizes='any' />
        </header>
        <Header />
        {children}
      </body>
    </html>
  )
}
