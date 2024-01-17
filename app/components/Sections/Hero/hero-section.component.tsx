import Link from 'next/link'
import { GridLines, GradientLayer } from '../..'

export const HeroSection = () => {
  return (
    <section id="hero" className="relative flex items-center justify-center h-screen px-10 overflow-hidden bg-gray-900 lg:pt-0 isolate">
      <GridLines />

      <GradientLayer direction='left'>
      <div
        style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
          className="
          aspect-[1108/632] w-[69.25rem] 
          opacity-30
          bg-gradient-to-r 
          from-sky-400
          to-sky-200
        "
        />
      </GradientLayer>

      <div className="z-50 py-0 mx-auto max-w-7xl md:flex lg:px-8 lg:py-40">
        <div className="z-50 flex flex-col items-center justify-center flex-shrink-0 max-w-2xl mx-auto lg:mx-0 lg:max-w-xl ">

          <div className='flex items-center'>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Commune AI
            </h1>
          </div>

          <p className="mt-6 text-lg leading-8 text-center text-gray-300 lg:text-left">
            Renovating the way we build software for everyone.
          </p>
          <div className="z-10 flex items-center mt-10 gap-x-6">
            <Link
              href="#networking"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Get started
            </Link>
            <Link href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
