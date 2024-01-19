export const CallToActionSection = () => {
  return (
    <section
      className={`relative isolate m-8 flex w-full max-w-screen-2xl flex-col items-center overflow-hidden rounded-xl bg-gray-800 px-6 py-12 text-center shadow-2xl drop-shadow-xl sm:rounded-3xl lg:m-8`}
    >
      {/* <div className="relative isolate overflow-hidden w-full m-8 bg-gray-800 px-6 py-24 text-center shadow-2xl sm:rounded-3xl"> */}
      <h2 className='max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl'>
        Join our Commune on Discord
      </h2>
      <p className='mt-6 max-w-xl text-lg leading-8 text-gray-300'>
        Connect, innovate, and shape the future of software development.
      </p>
      <a
        target='_blank'
        className='relative isolate mt-6 max-w-sm overflow-hidden rounded-xl px-12 py-2 text-center text-white shadow-2xl outline drop-shadow-xl hover:text-gray-300 hover:outline-gray-300 sm:rounded-3xl lg:m-8'
        href='https://discord.com/invite/A8JGkZ9Dmm'
        //  className="rounded-md bg-gray-100 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Join now <span aria-hidden='true'>→</span>
      </a>
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
