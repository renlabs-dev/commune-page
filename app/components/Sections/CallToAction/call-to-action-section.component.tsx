import { DiscordWidget, GradientLayer } from '../..'

export const CallToActionSection = () => {
  return (
    <section id='discord' className='m-6 flex w-11/12 max-w-screen-xl flex-col items-center overflow-hidden rounded-3xl bg-gray-800/20 p-6 py-12 text-center shadow-xl lg:m-8'>
      <GradientLayer gradientColor='from-blue-400 via-blue-200' />

      <div className='max-w-2xl'>
        <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>Commune Hub</h2>
        <p className='mt-4 text-base leading-7 text-gray-300'>
          Join Commune&apos;s Discord. Code, connect, innovate – Shape the Future Together! 🚀
        </p>
      </div>

      <div className='mt-6'>
        <DiscordWidget />
      </div>
    </section>
  )
}
