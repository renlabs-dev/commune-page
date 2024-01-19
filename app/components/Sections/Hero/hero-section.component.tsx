import Link from 'next/link'
import { GridLines, GradientLayer } from '../..'

export const HeroSection = () => {
  return (
    <section
      id='hero'
      className='relative isolate flex h-screen items-center justify-center overflow-hidden bg-gray-900 px-10 lg:pt-0'
    >
      <GridLines />
      <GradientLayer gradientColor='from-sky-400 to-sky-200' />

      <div className='z-50 mx-auto max-w-7xl py-0 md:flex lg:px-8 lg:py-40'>
        <div className='z-50 mx-auto flex max-w-2xl flex-shrink-0 flex-col items-center justify-center lg:mx-0 lg:max-w-xl '>
          <div className='flex items-center'>
            {/* <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl"> */}
            <h1 className='bg-gradient-to-br from-sky-300 to-white bg-clip-text text-4xl font-bold tracking-tight text-transparent'>
              commune ai
            </h1>
          </div>

          <p className='mt-6 text-center text-2xl leading-relaxed tracking-tight text-gray-100 lg:text-center'>
            Renovating the way we build software for everyone.
          </p>
          <div className='z-10 mt-10 flex items-center gap-x-6'>
            <Link
              href='#networking'
              className='rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400'
            >
              Get started
            </Link>
            <Link
              href='#'
              className='text-sm font-semibold leading-6 text-white'
            >
              Learn more <span aria-hidden='true'>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
