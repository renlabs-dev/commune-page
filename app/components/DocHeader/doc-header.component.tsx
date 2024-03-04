import Image from 'next/image'
// import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { links } from '@/app/utils'

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
      <Image src={icon} width={32} height={32} alt={alt} />
    </Link>
  )
}

const navigation = [
  {
    name: 'Docs',
    href: links.docs,
    external: false,
  },
  {
    name: 'Whitepaper',
    href: links.whitepaper,
    external: true,
  },
]

export const DocHeader = () => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className={`sticky top-0 p-4 px-8  w-full  flex
 backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75
    `}>
      <nav
        className={`mx-auto grid w-full grid-flow-col grid-cols-3 items-center justify-between bg-gray-900/10  backdrop-blur-sm`}
        aria-label='Global'
      >
        <Link
          href={links.home}
          className={`col-span-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100/10 p-1.5 hover:bg-gray-100/[0.15]`}
        >
          <span className='sr-only'>Commune AI</span>
          <Image
            src={'/commune-logo.svg'}
            width={25}
            height={25}
            alt='commune logo'
            className='mr-[3px]'
            priority
          />
        </Link>
        <div className='justify-center hidden lg:flex lg:gap-x-12'>
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
        <div className='justify-end hidden lg:flex lg:gap-x-4'>
          <HeaderLink
            href={links.github}
            target='_blank'
            icon='/github-icon-white.svg'
            alt="Commune's Github Link"
            className={`p-1.5  flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100/10 hover:bg-gray-100/[0.15]`}
          />
          <HeaderLink
            href={links.discord}
            target='_blank'
            icon='/discord-icon-white.svg'
            alt="Commune's Discord Link"
            className={`p-1.5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100/10 hover:bg-gray-100/[0.15]`}
          />
        </div>
        <div className='col-span-3 ml-auto lg:hidden'>
          <button
            type='button'
            className='-m-2.5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100/10 p-1.5 text-gray-100 hover:bg-gray-100/[0.15]'
          // onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='w-6 h-6' aria-hidden='true' />
          </button>
        </div>
      </nav>
    </header>
  )
}
