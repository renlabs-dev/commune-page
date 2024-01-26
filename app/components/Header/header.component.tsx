'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Docs', href: '#' },
  { name: 'Whitepaper', href: '#' },
  { name: 'Modules', href: '#' },
]

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='fixed z-50 w-full'>
      <nav
        className='mx-auto flex w-full items-center justify-between bg-gray-900/10 p-6 backdrop-blur-sm lg:px-[5%]'
        aria-label='Global'
      >
        <a
          href='#'
          className={`-m-1.5 p-1.5 ${mobileMenuOpen && 'opacity-0'} flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100/10`}
        >
          <span className='sr-only'>Commune AI</span>
          <Image
            src={'./commune-v2.svg'}
            width={32}
            height={32}
            alt='commune logo'
            id='teste'
            className='mr-[3px] h-8'
          />
        </a>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-sm font-semibold leading-6 text-gray-100 hover:text-gray-400'
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      <div
        className={`lg:hidden ${mobileMenuOpen ? 'visible' : 'hidden'}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div className='fixed inset-0 z-10' />
        <div className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900/50 px-6 py-6 backdrop-blur-sm sm:ring-1 sm:ring-white/10'>
          <div className='flex items-center justify-between'>
            <a
              href='#'
              className='-m-1.5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100/10 p-1.5'
            >
              <span className='sr-only'>Commune</span>
              <Image
                src={'./commune-v2.svg'}
                width={32}
                height={32}
                alt='commune logo'
                className='mr-[3px] h-8'
              />
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-100'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-400/10'>
              <div className='mt-10 space-y-2 py-6'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-900/10 hover:backdrop-blur-sm'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
