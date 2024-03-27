import { cairo } from '@/app/fonts'
import { links } from '@/app/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navigation = {
  main: [
    { name: 'Home', href: links.home },
    // { name: 'Docs', href: links.docs },
    { name: 'Whitepaper', href: links.whitepaper },
  ],

  social: [
    {
      name: 'Discord',
      href: links.discord,
    },
    {
      name: 'X',
      href: links.x,
    },
    {
      name: 'GitHub',
      href: links.github,
    },
    {
      name: 'Telegram',
      href: links.telegram,
    },
  ],
}

export const Footer = () => {
  return (
    <footer className="bg-white bg-[url('/footer-background.svg')] bg-cover">
      <div className='flex flex-col items-center gap-12 px-6 py-12 pt-32 mx-auto overflow-hidden max-w-7xl lg:px-8'>
        <Link href={links.home} className={`col-span-1 flex items-center`}>
          <Image
            src={'/commune-logo.svg'}
            width={37}
            height={45}
            alt='commune logo'
            priority
            className='mr-[3px]'
          />
          <span className={`${cairo.className} ml-2 text-2xl font-semibold`}>
            Commune Ai
          </span>
        </Link>
        <div className='flex flex-col gap-6 text-center md:flex-row md:gap-12'>
          <nav className='flex flex-row gap-3' aria-label='Footer'>
            <p className='font-semibold text-title'>Resources:</p>
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='leading-6 text-md text-subtitle hover:text-gray-800 hover:underline'
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <nav className='flex flex-row gap-3' aria-label='Footer'>
            <p className='font-semibold text-title'>Links:</p>
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='leading-6 text-md text-subtitle hover:text-gray-800 hover:underline'
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className='flex justify-center w-full border-t-2 border-black md:justify-between'>
          <p className='hidden mt-3 text-xs leading-5 text-right text-title md:block'>
            Renovating the way we build software for everyone.
          </p>
          <p className='mt-3 text-xs leading-5 text-center text-title'>
            &copy; 2024 Commune, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
