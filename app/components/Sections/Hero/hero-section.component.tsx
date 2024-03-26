import { covered_by_your_grace, cairo } from '@/app/fonts'
import Image from 'next/image'
import Link from 'next/link'

export const HeroSection = () => {
  return (
    <div
      id='hero'
      className='flex h-auto min-h-[50vh] w-full flex-col lg:flex-row items-center justify-center overflow-hidden bg-white p-10 py-12'
    >
      <Image
        src='/commune-logo.svg'
        width={417}
        height={481}
        alt={`Commune's logo`}
        className='w-2/3 max-w-sm pb-10 lg:max-w-none lg:pb-0 lg:w-auto lg:mr-28'
      />
      <div className='flex flex-col items-center justify-center w-full h-full lg:w-auto lg:items-start'>
        <h1 className={`${cairo.className} pb-16 text-5xl font-bold text-center lg:text-7xl text-title lg:pb-0 lg:text-left`}>
          commune ai
        </h1>
        <h2 className='text-base font-medium text-center text-subtitle lg:text-left'>
          Renovating the way we build software for{' '}
          <span
            className={`${covered_by_your_grace.className} text-lg font-normal text-[#62ABFF]`}
          >
            everyone
          </span>
          .
        </h2>
        <Link
          href='#discord'
          className='mt-10 w-full max-w-screen-sm lg:w-auto rounded-xl border-2 border-title bg-[#FF6C6C] px-16 py-6 text-center text-sm font-bold text-white shadow-custom'
        >
          <span aria-label='Get started with Commune AI' className='text-white'>
            GET STARTED NOW
          </span>
        </Link>
      </div>
    </div>
  )
}
