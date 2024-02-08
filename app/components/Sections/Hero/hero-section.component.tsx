import Link from 'next/link'
import { GridLines, GradientLayer } from '../..'

export const HeroSection = () => {
  return (
    <div
      id='hero'
      className='relative isolate flex h-[75vh] items-center justify-center overflow-hidden bg-gray-900 px-10 lg:pt-0'
    >
      <GridLines />
      <GradientLayer gradientColor='from-sky-400 to-sky-200 scale-75' />

      <div className='max-w-7xl py-0 lg:px-8 lg:py-40'>
        <div className='mx-auto flex max-w-2xl flex-shrink-0 flex-col items-center justify-center lg:mx-0 lg:max-w-xl '>
          <div className='flex items-center'>
            <h1 className='bg-gradient-to-br animate-scale-down-md  from-sky-300 to-white bg-clip-text text-5xl font-bold tracking-tight text-transparent'>
              commune ai
            </h1>
          </div>
          <p className='mt-6 text-center text-xl animate-scale-down-md font-extralight leading-relaxed tracking-tight text-gray-100 lg:text-center'>
            Renovating the way we build software.
          </p>
          <div className='z-10 mt-10 flex animate-scale-down-md items-center gap-x-6'>
            <Link
              href='#discord'
              className='font-base rounded-3xl  hover:animate-scale-up-sm bg-gradient-to-br from-indigo-500 to-blue-800 px-3.5 py-2.5 text-sm text-white shadow-sm  hover:from-indigo-500 hover:to-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400'
            >
              <span aria-label='Get started with Commune AI'>Start</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
