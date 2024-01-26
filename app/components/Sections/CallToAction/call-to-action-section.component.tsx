import { DiscordWidget } from '../..'

export const CallToActionSection = () => {
  return (
    <section
      id='discord'
      className={`relative isolate m-6 flex w-11/12 max-w-screen-xl flex-col items-center overflow-hidden rounded-3xl bg-gray-800  p-6 text-center shadow-2xl drop-shadow-xl lg:m-8`}
    >
      <h2 className='max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-3xl'>
        Commune Hub
      </h2>
      <p className='mt-6 max-w-xl text-base leading-8 text-gray-300'>
        Join Commune&apos;s Discord. Code, connect, innovate – Shape the Future
        Together! 🚀
      </p>
      <DiscordWidget />
      <svg
        viewBox='0 0 1024 1024'
        className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]'
        aria-hidden='true'
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill='url(#827591b1-ce8c-4110-b064-7cb85a0b1217)'
          fillOpacity='0.7'
        />
        <defs>
          <radialGradient id='827591b1-ce8c-4110-b064-7cb85a0b1217'>
            <stop stopColor='#7775D6' />
            <stop offset={1} stopColor='#E935C1' />
          </radialGradient>
        </defs>
      </svg>
      {/* </div> */}
    </section>
  )
}
