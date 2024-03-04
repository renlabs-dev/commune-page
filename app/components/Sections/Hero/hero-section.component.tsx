import Link from 'next/link'
import { GridLines, GradientLayer } from '../..'

export const HeroSection = () => {
  return (
    <div
      id='hero'
      className='relative isolate flex h-[75vh] w-full items-center justify-center overflow-hidden bg-gray-900 px-10 lg:pt-0'
    >
      <GridLines />
      <GradientLayer gradientColor='from-sky-400 to-sky-200 scale-75' wrapperOverwriteStyle='md:top-[calc(55%-30rem)] top-[calc(60%-30rem)]' />

      <div className='py-0 max-w-7xl lg:px-8 lg:py-40'>
        <div className='flex flex-col items-center justify-center flex-shrink-0 max-w-2xl mx-auto lg:mx-0 lg:max-w-xl '>
          <div className='flex items-center'>
            <h1 className='text-5xl font-bold tracking-tight text-transparent bg-gradient-to-br animate-scale-down-md from-sky-300 to-white bg-clip-text'>
              commune ai
            </h1>
          </div>
          <p className='mt-6 text-xl leading-relaxed tracking-tight text-center text-gray-100 animate-scale-down-md font-extralight lg:text-center'>
            Renovating the way we build software.
          </p>
          <div className='z-10 flex items-center mt-10 animate-scale-down-md gap-x-6'>
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
