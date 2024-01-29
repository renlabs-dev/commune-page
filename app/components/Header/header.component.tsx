'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

type THeaderLinkProps = {
  href: string
  target: string
  icon: string
  alt: string
  className: string
}

const HeaderLink = ({
  href,
  target = '_blank',
  icon,
  alt,
  className,
}: THeaderLinkProps) => {
  return (
    <Link href={href} target={target} className={className}>
      {/* <span className='sr-only'>{alt}</span> */}
      <Image src={icon} width={32} height={32} alt={alt} />
    </Link>
  )
}

const navigation = [
  { name: 'Docs', href: '#', external: false },
  {
    name: 'Whitepaper',
    href: 'https://ai-secure.github.io/DMLW2022/assets/papers/7.pdf',
    external: true,
  },
  { name: 'Modules', href: '#', external: false },
]

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='fixed z-50 w-full'>
      <nav
        className={`mx-auto ${mobileMenuOpen && 'hidden'} grid w-full grid-flow-col grid-cols-3 items-center justify-between bg-gray-900/10 p-6 backdrop-blur-sm lg:px-[5%]`}
        aria-label='Global'
      >
        <Link
          href='#'
          className={`col-span-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100/10 p-1.5 hover:bg-gray-100/[0.15]`}
        >
          <span className='sr-only'>Commune AI</span>
          <Image
            src={'./commune-v2.svg'}
            width={32}
            height={32}
            alt='commune logo'
            className='mr-[3px] h-8'
            priority
          />
        </Link>
        <div className='hidden justify-center lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <Link
              target={item.external ? '_blank' : '_self'}
              key={item.name}
              href={item.href}
              className='text-sm font-semibold leading-6 text-gray-100 hover:text-gray-400'
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className='hidden justify-end lg:flex lg:gap-x-4'>
          <HeaderLink
            href='https://github.com/commune-ai'
            target='_blank'
            icon='./github-icon-white.svg'
            alt="Commune's Github Link"
            className={`p-1.5 ${mobileMenuOpen && 'opacity-0'} flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100/10 hover:bg-gray-100/[0.15]`}
          />
          <HeaderLink
            href='https://discord.com/invite/A8JGkZ9Dmm'
            target='_blank'
            icon='./discord-icon-white.svg'
            alt="Commune's Discord Link"
            className={`p-1.5 ${mobileMenuOpen && 'opacity-0'} flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100/10 hover:bg-gray-100/[0.15]`}
          />
        </div>
        <div className='col-span-3 flex justify-end lg:hidden'>
          <button
            type='button'
            className='-m-2.5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100/10 p-1.5 text-gray-100 hover:bg-gray-100/[0.15]'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
      </nav>

      <nav className={`lg:hidden ${mobileMenuOpen ? 'visible' : 'hidden'}`}>
        <div className='fixed inset-0 z-10' />
        <div className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900/50 px-6 py-6 backdrop-blur-sm sm:ring-1 sm:ring-white/10'>
          <div className='flex items-center justify-between'>
            <Link
              href='#'
              className='flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100/10 p-1.5 hover:bg-gray-100/[0.15]'
            >
              <span className='sr-only'>Commune</span>
              <Image
                src={'./commune-v2.svg'}
                width={32}
                height={32}
                alt='commune logo'
                className='mr-[3px] h-8'
              />
            </Link>
            <button
              type='button'
              className='-m-2.5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100/10 p-1.5 text-gray-100 hover:bg-gray-100/[0.15]'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-400/20'>
              <div className='ml-2 mt-10 space-y-2 py-6'>
                {navigation.map((item) => (
                  <Link
                    target={item.external ? '_blank' : '_self'}
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-400/10 hover:backdrop-blur-sm'
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className='py-6'>
                <HeaderLink
                  href='https://github.com/commune-ai'
                  target='_blank'
                  icon='./github-icon-white.svg'
                  alt="Commune's Github Link"
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100/10 p-1.5 hover:bg-gray-100/[0.15]`}
                />
                <HeaderLink
                  href='https://discord.com/invite/A8JGkZ9Dmm'
                  target='_blank'
                  icon='./discord-icon-white.svg'
                  alt="Commune's Discord Link"
                  className='flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100/10 p-1.5 hover:bg-gray-100/[0.15]'
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
