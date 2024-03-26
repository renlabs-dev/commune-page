import { covered_by_your_grace, cairo } from '@/app/fonts'
import Image from 'next/image'
import Link from 'next/link'

export const HeroSection = () => {
  return (
    <div
      id='hero'
      className="flex h-auto min-h-[50vh] w-full flex-col items-center justify-center overflow-hidden bg-white bg-[url('/hero-background.svg')] bg-cover p-10 py-12 lg:flex-row"
    >
      <Image
        src='/commune-logo.svg'
        width={417}
        height={481}
        alt={`Commune's logo`}
        className='w-2/3 max-w-sm pb-10 lg:mr-28 lg:w-auto lg:max-w-none lg:pb-0'
      />
      <div className='flex h-full w-full flex-col items-center justify-center lg:w-auto lg:items-start'>
        <h1
          className={`${cairo.className} pb-16 text-center text-5xl font-bold text-title lg:pb-0 lg:text-left lg:text-6xl`}
        >
          Commune Ai
        </h1>
        <h2 className='text-center text-xl font-medium text-subtitle lg:text-left'>
          Renovating the way we build software for{' '}
          <span
            className={`${covered_by_your_grace.className} text-2xl font-normal text-[#62ABFF]`}
          >
            everyone
          </span>
          .
        </h2>
        <Link
          href='#discord'
          className='mt-8 w-full max-w-screen-sm rounded-xl border-2 border-title bg-[#FF6C6C] px-12 py-6 text-center text-sm font-bold text-title shadow-custom lg:w-auto'
        >
          <span aria-label='Get started with Commune AI'>GET STARTED NOW</span>
        </Link>
      </div>
    </div>
  )
}
