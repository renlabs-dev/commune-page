'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { links } from '@/app/utils'

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
  { name: 'Docs', href: links.docs, external: false },
  { name: 'Whitepaper', href: links.whitepaper, external: true },
]

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  const commonButtonClass = 'flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100/10 text-white p-1.5 hover:bg-gray-100/[0.15]'

  return (
    <>
      <div className={`h-full w-full backdrop-blur-sm absolute z-50 ${mobileMenuOpen ? 'visible' : 'hidden'} lg:hidden animate-menu-fade`} onClick={toggleMobileMenu} >
        <nav className={`h-full w-full fixed z-50`}>
          <div className='bg-gray-800 h-auto min-w-1/4 w-[70%] sm:w-[40%] sticky top-3 right-3 ml-auto z-[50] p-5 rounded-lg'>
            <button type='button' className={`${commonButtonClass} h-8 w-8 rounded-[8px] absolute right-0 top-0 m-5`} onClick={toggleMobileMenu}>
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
            <div className='flow-root'>
              <div className='-my-6 divide-y space-y-4 divide-gray-400/20'>
                <div className='ml-2 mt-6 space-y-2'>
                  {navigation.map(({ name, href, external }) => (
                    <Link key={name} href={href} target={external ? '_blank' : '_self'} className='-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-gray-100 w-[90%] hover:bg-gray-400/10 hover:backdrop-blur-sm'>
                      {name}
                    </Link>
                  ))}
                </div>
                <div className='py-6 flex space-x-3'>
                  <HeaderLink href={links.github} icon='/github-icon-white.svg' alt="Commune's Github Link" className={`${commonButtonClass} mb-4`} />
                  <HeaderLink href={links.discord} icon='/discord-icon-white.svg' alt="Commune's Discord Link" className={commonButtonClass} />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <header className={`z-40 sticky top-0 flex flex-none w-full border-b border-gray-50/[0.06] backdrop-blur transition-colors duration-500`}>
        <nav className={`p-4 px-6 mx-auto grid w-full grid-flow-col grid-cols-3 items-center justify-between`} aria-label='Global'>
          <Link href={links.home} className={`col-span-1 ${commonButtonClass}`}>
            <span className='sr-only'>Commune AI</span>
            <Image src={'/commune-logo.svg'} width={25} height={25} alt='commune logo' priority className='mr-[3px]' />
          </Link>
          <div className='hidden justify-center lg:flex lg:gap-x-12'>
            {navigation.map(({ name, href, external }) => (
              <Link key={name} href={href} target={external ? '_blank' : '_self'} className='text-sm font-semibold leading-6 text-gray-100 hover:text-gray-400'>
                {name}
              </Link>
            ))}
          </div>
          <div className='hidden justify-end lg:flex lg:gap-x-4'>
            <HeaderLink href={links.github} icon='/github-icon-white.svg' alt="Commune's Github Link" className={commonButtonClass} />
            <HeaderLink href={links.discord} icon='/discord-icon-white.svg' alt="Commune's Discord Link" className={commonButtonClass} />
          </div>
          <div className='col-span-3 ml-auto lg:hidden '>
            <button type='button' className={`${commonButtonClass} -m-2.5`} onClick={toggleMobileMenu}>
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}