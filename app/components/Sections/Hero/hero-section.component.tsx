import { covered_by_your_grace, cairo } from '@/app/fonts'
import { links } from '@/app/utils'
import Image from 'next/image'
import Link from 'next/link'

export const HeroSection = () => {
  return (
    <div
      id='hero'
      className="flex h-auto min-h-[50vh] w-full flex-col items-center justify-center overflow-hidden bg-white bg-[url('/hero-background.svg')] bg-cover p-10 py-12 dark:bg-[#131B2A] dark:bg-[url('/hero-background-dark-mode.svg')] lg:flex-row"
    >
      <Image
        src='/commune-logo.svg'
        width={417}
        height={481}
        alt={`Commune's logo`}
        className='w-2/3 max-w-sm pb-10 lg:mr-24 lg:w-auto lg:max-w-none lg:pb-0'
      />
      <div className='flex h-full w-full flex-col items-center justify-center lg:w-auto lg:items-start'>
        <h1
          className={`${cairo.className} pb-16 text-center text-5xl font-bold text-title dark:text-white lg:pb-0 lg:text-left lg:text-6xl`}
        >
          Commune Ai
        </h1>
        <h2 className='text-center text-xl font-medium text-subtitle dark:text-gray-200 lg:text-left'>
          Renovating the way we build software for{' '}
          <span
            className={`${covered_by_your_grace.className} text-2xl font-normal text-[#62ABFF] dark:text-titleDark`}
          >
            everyone
          </span>
          .
        </h2>
        <div className='flex gap-4 mt-8 flex-col w-full lg:flex-row items-center'>
          <Link
            href='#welcome'
            className=' w-full max-w-screen-sm rounded-xl border-2 border-title bg-white px-8 py-4 text-center text-sm font-bold text-title shadow-custom transition duration-300 hover:animate-squeeze hover:bg-gray-200 dark:border-titleDark dark:bg-[#131B2A] dark:text-titleDark dark:shadow-custom-dark-active lg:w-auto'
          >
            <span aria-label='Get started with Commune AI'>GET STARTED NOW</span>
          </Link>
          <Link
            href={links.discord}
            target='_blank'
            className='w-full max-w-screen-sm rounded-xl border-2 border-title bg-[#FF6C6C] px-8 py-4 text-center text-sm font-bold text-title shadow-custom transition duration-300 hover:animate-squeeze hover:bg-red-500 dark:border-blue-500 dark:bg-[#131B2A] dark:shadow-custom-blue lg:w-auto'
          >
            <span
              aria-label='Get started with Commune AI'
              className='text-header-links dark:text-blue-500'
            >
              JOIN COMMUNITY
            </span>
          </Link>
        </div>

      </div>
    </div>
  )
}
