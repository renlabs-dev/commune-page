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

      <div className='max-w-7xl py-0 lg:px-8 lg:py-40'>
        <div className='mx-auto flex max-w-2xl flex-shrink-0 flex-col items-center justify-center lg:mx-0 lg:max-w-xl '>
          <div className='flex items-center'>
            <h1 className='bg-gradient-to-br from-sky-300 to-white bg-clip-text text-4xl font-bold tracking-tight text-transparent'>
              Commune AI
            </h1>
          </div>

          <p className='mt-6 text-center text-2xl leading-relaxed tracking-tight text-gray-100 lg:text-center'>
            Renovating the way we build software for everyone.
          </p>
          <div className='z-10 mt-10 flex items-center gap-x-6'>
            <Link href='#discord'>
              <span
                className='rounded-3xl bg-gradient-to-br from-indigo-500 to-blue-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all ease-in hover:from-indigo-500 hover:to-blue-900 hover:ease-in focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400'
                aria-label='Get started with Commune AI'
              >
                Get started
              </span>
            </Link>
            <Link
              href='#networking'
              className='text-sm font-semibold leading-6 text-white'
              aria-label='Learn more about Commune AI'  >
              <span>

                Learn more <span aria-hidden='true'>→</span>
              </span>

            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
