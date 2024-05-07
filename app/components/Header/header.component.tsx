'use client'
import Image from 'next/image'
import { useState } from 'react'
import {
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { links } from '@/app/utils'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

type THeaderLinkProps = {
  href: string
  target?: string
  icon: string
  alt: string
  className?: string
}

const HeaderLink = ({
  href,
  target = '_blank',
  icon,
  alt,
  className = '',
}: THeaderLinkProps) => (
  <Link href={href} target={target} className={className}>
    <Image src={icon} width={25} height={25} alt={alt} />
  </Link>
)

const navigation = [
  // { name: 'Docs', href: links.docs, external: false },
  { name: 'Governance', href: links.governance, external: true },
  { name: 'Whitepaper', href: links.whitepaper, external: true },
  { name: 'Join Community', href: links.discord, external: true, border: true },
]

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  const commonButtonClass =
    'flex h-12 w-12 items-center justify-center text-white p-1.5 hover:bg-gray-400/[0.10]'

  return (
    <>
      <div
        className={`absolute z-50 h-full w-full backdrop-blur-sm ${mobileMenuOpen ? 'visible' : 'hidden'} animate-menu-fade lg:hidden`}
      >
        <nav className={`fixed z-40 h-full w-full`}>
          <div className={`min-w-1/4 sticky right-3 top-3 z-[50] ml-auto h-auto w-[30%]  bg-[url('/bg-pattern.svg')] border border-white bg-cover p-5`}>
            <button
              type='button'
              className={`${commonButtonClass} absolute right-0 top-0 m-5 h-8 w-8 `}
              onClick={toggleMobileMenu}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon
                className='h-6 w-6 text-white'
                aria-hidden='true'
              />
            </button>
            <div className='flow-root'>
              <div className='-my-6 space-y-4 divide-y divide-gray-200/40'>
                <div className='ml-2 mt-6 space-y-2'>
                  {navigation.map(({ name, href, external }) => (
                    <Link
                      key={name}
                      href={href}
                      onClick={toggleMobileMenu}
                      target={external ? '_blank' : '_self'}
                      className='-mx-3 block w-[80%] px-3 py-1 text-base font-semibold leading-7 text-white hover:bg-gray-400/10 hover:backdrop-blur-sm'
                    >
                      {name}
                    </Link>
                  ))}
                </div>
                <div className='flex space-x-3 py-4'>
                  <HeaderLink
                    href={links.discord}
                    icon='/discord-icon.svg'
                    alt="Commune's Discord Link"
                    className={commonButtonClass}
                  />
                  <HeaderLink
                    href={links.github}
                    icon='/github-icon.svg'
                    alt="Commune's Github Link"
                    className={`${commonButtonClass} mb-4`}
                  />
                  <HeaderLink
                    href={links.telegram}
                    icon='/telegram-icon.svg'
                    alt="Commune's Telegram Link"
                    className={`${commonButtonClass} pr-2`}
                  />
                  <HeaderLink
                    href={links.x}
                    icon='/x-icon.svg'
                    alt="Commune's X Link"
                    className={`${commonButtonClass} p-3.5`}
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <header
        className={`sticky top-0 z-40 flex w-full flex-none border-b border-white bg-black bg-opacity-75 backdrop-blur transition-colors duration-500`}
      >
        <nav
          className={`mx-auto grid w-full grid-flow-col grid-cols-2 p-4 px-20`}
          aria-label='Global'
        >
          <Link href={links.home} className={`col-span-1 flex items-center w-fit`}>
            <Image
              src={'/commune-logo.svg'}
              width={37}
              height={45}
              alt='commune logo'
              priority
              className='mr-[3px]'
            />
            <span
              className={`ml-2 text-xl font-semibold text-gray-400`}
            >
              Commune Ai
            </span>
          </Link>
          <div className='relative hidden items-center justify-end lg:flex lg:gap-x-6'>
            {navigation.map(({ name, href, external, border = false }) => (
              <Link
                key={name}
                href={href}
                target={external ? '_blank' : '_self'}
                className={`${border && 'border border-gray-200 px-5 py-3 hover:border-white hover:text-white hover:bg-gray-200/5'} flex flex-col items-center text-lg font-normal leading-6 text-gray-400 hover:text-gray-300 active:animate-squeeze`}
              >
                {name}
              </Link>
            ))}
          </div >
          <div className='col-span-3 ml-auto self-center lg:hidden '>
            <button
              type='button'
              className={`${commonButtonClass} -m-2.5`}
              onClick={toggleMobileMenu}
            >
              <span className='sr-only'>Open main menu</span>
              <EllipsisVerticalIcon className='h-6 w-6 fill-white' aria-hidden='true' />
            </button>
          </div>
        </nav >
      </header >
    </>
  )
}
