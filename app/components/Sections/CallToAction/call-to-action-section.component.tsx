import { DiscordWidget, DocsCTA, GradientLayer } from '../..'

type CTAWrapper = {
  children: React.ReactElement
  gradientColor: string
}

const CtaWrapper = ({
  children,
  gradientColor = 'blue',
}: CTAWrapper) => {
  return (
    <div
      id='discord'
      className='relative flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-gray-800/40 p-12 text-center shadow-xl md:flex-row'
    >
      <GradientLayer
        gradientColor={`from-${gradientColor}-400 via-${gradientColor}-200`}
      />
      {children}
    </div>
  )
}

export const CallToActionSection = () => {
  return (
    <section className='m-6 flex w-11/12 max-w-screen-xl flex-col gap-12 lg:flex-row'>
      <CtaWrapper gradientColor='blue'>
        <div>
          <div className='px-12'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Commune Hub
            </h2>
            <p className='mt-4 text-base leading-7 text-gray-300'>
              Join Commune&apos;s Discord. Code, connect, innovate – Shape the
              future together!
            </p>
          </div>

          <div className='mt-6 flex items-center justify-center'>
            <DiscordWidget />
          </div>
        </div>
      </CtaWrapper>

      <CtaWrapper gradientColor='red'>
        <div>
          <div className='px-12'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Commune Docs
            </h2>
            <p className='mt-4 text-base leading-7 text-gray-300'>
              Get started on Commune&apos;s environment – Create, and deploy
              your modules!
            </p>
          </div>

          <div className='mt-6 flex items-center justify-center'>
            <DocsCTA />
          </div>
        </div>
      </CtaWrapper>
    </section>
  )
}
