import { ForwardRefExoticComponent, SVGProps } from 'react'
import { GridLines, GradientLayer } from '../..'

type TGenericSectionProps = {
  title: string
  subtitle: string
  sectionName: string
  features: Array<{
    description: string
    icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>
  }>
  color: string
  gradientColor?: string
  gradientStyle?: string
  direction?: string
}

export const GenericSection = ({
  title,
  subtitle,
  sectionName,
  features,
  color,
  gradientColor,
  gradientStyle,
}: TGenericSectionProps) => {
  return (
    <section
      id={sectionName}
      className={`${color} relative isolate m-6 w-full max-w-screen-2xl overflow-hidden rounded-xl bg-gray-800 text-center shadow-2xl drop-shadow-xl sm:rounded-3xl lg:m-8`}
    >
      <GridLines />
      <GradientLayer
        gradientColor={gradientColor}
        gradientStyle={gradientStyle}
      />

      <div className='mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 text-left md:text-left lg:px-8 lg:py-40'>
        <div className='mx-auto max-w-2xl text-center lg:mx-0'>
          <h2 className='text-base font-semibold leading-7 text-indigo-400'>
            {subtitle}
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            {title}
          </p>
        </div>
        <dl className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16'>
          {features.map((feature, index) => (
            <div key={index} className='relative pl-9'>
              <dt className='inline font-semibold text-white'>
                <feature.icon
                  className='absolute left-1 top-1 h-5 w-5 text-indigo-500'
                  aria-hidden='true'
                />
              </dt>
              <dd className='inline'>{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
