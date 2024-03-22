import { links } from '@/app/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { HTMLAttributes } from 'react'

const navigation = {
  main: [
    { name: 'Home', href: links.home },
    { name: 'Docs', href: links.docs },
    { name: 'Whitepaper', href: links.whitepaper },
  ],

  social: [
    {
      name: 'Discord',
      href: links.discord,
      icon: (props: HTMLAttributes<HTMLElement>) => (
        <Image
          {...props}
          src={'/discord-icon-white.svg'}
          alt="Commune's Discord link"
          width={24}
          height={24}
        />
      ),
    },
    {
      name: 'X',
      href: links.x,
      icon: (props: HTMLAttributes<HTMLElement>) => (
        <Image
          {...props}
          src={'/x-icon-white.svg'}
          alt="Commune's X link"
          width={24}
          height={24}
          className='mx-auto h-5 w-5'
        />
      ),
    },
    {
      name: 'GitHub',
      href: links.github,
      icon: (props: HTMLAttributes<HTMLElement>) => (
        <Image
          {...props}
          src={'/github-icon-white.svg'}
          alt="Commune's Github link"
          width={24}
          height={24}
        />
      ),
    },
    {
      name: 'Telegram',
      href: links.telegram,
      icon: (props: HTMLAttributes<HTMLElement>) => (
        <Image
          {...props}
          src={'/telegram-icon-white.svg'}
          alt="Commune's Github link"
          width={24}
          height={24}
        />
      ),
    },
  ],
}

export const Footer = () => {
  return (
    <footer className='mt-8 bg-gray-800/90'>
      <div className='mx-auto flex max-w-7xl flex-col items-center overflow-hidden px-6 py-12 lg:px-8'>
        <nav
          className='-mb-6 columns-3 text-center sm:flex sm:justify-center sm:space-x-12'
          aria-label='Footer'
        >
          {navigation.main.map((item) => (
            <div key={item.name} className='pb-6'>
              <Link
                href={item.href}
                className='text-sm leading-6 text-gray-200 hover:text-gray-400'
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className='align-center mt-10 flex justify-center space-x-10'>
          {navigation.social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='flex items-center text-gray-200'
            >
              <span className='sr-only'>{item.name}</span>
              <item.icon className='h-6 w-6' aria-hidden='true' />
            </Link>
          ))}
        </div>
        <p className='mt-10 text-center text-xs leading-5 text-gray-300'>
          &copy; 2024 Commune, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
