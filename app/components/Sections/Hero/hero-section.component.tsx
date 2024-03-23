import { covered_by_your_grace } from '@/app/fonts'
import Image from 'next/image'
import Link from 'next/link'

export const HeroSection = () => {
  return (
    <div
      id='hero'
      className='relative isolate flex h-auto min-h-[50vh] w-full items-center justify-center overflow-hidden bg-white px-10 lg:pt-0'
    >
      <Image
        src='/commune-logo.svg'
        width={417}
        height={481}
        alt={`Commune's logo`}
        className='mr-28'
      />
      <div className='flex h-full flex-col items-start justify-center'>
        <h1 className='text-7xl font-bold tracking-tight text-title'>
          commune ai
        </h1>
        <h2 className='text-xl font-medium leading-relaxed tracking-tight text-subtitle'>
          Renovating the way we build software for{' '}
          <span
            className={`${covered_by_your_grace.className} text-3xl font-normal text-[#62ABFF]`}
          >
            everyone
          </span>
          .
        </h2>
        <Link
          href='#discord'
          className='mt-10 rounded-xl border-2 border-title bg-[#FF6C6C] px-16 py-6 text-center text-sm font-bold text-white shadow-custom'
        >
          <span aria-label='Get started with Commune AI' className='text-white'>
            GET STARTED NOW
          </span>
        </Link>
      </div>
    </div>
  )
}
