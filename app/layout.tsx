import type { Metadata } from 'next'
import './globals.css'
import { Header } from './components'
import { inter } from './fonts'

export const metadata: Metadata = {
  title: 'Commune AI',
  description:
    'Decentralized. Permissionless. Composable. Collaborative. Incentivized. Adaptable. OpenSource. Untrademarked. join us!',
  robots: 'all',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${inter.className}`}>
      <body className='relative h-full animate-fade-in-up bg-white'>
        <header>
          <link rel='icon' href='/commune-logo.svg' sizes='any' />
        </header>
        <Header />
        {children}
      </body>
    </html>
  )
}
