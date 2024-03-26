import Image from 'next/image'
import { ForwardRefExoticComponent, SVGProps } from 'react'

type Feature = {
  description: string
  icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>
}

type GenericSectionProps = {
  title: string
  subtitle: string
  sectionName: string
  features: Feature[]
  bgColor: string
  index: number
  color: string
  iconSrc: string
}

export const GenericSection = ({
  title,
  subtitle,
  sectionName,
  features,
  bgColor,
  index,
  color,
  iconSrc,
}: GenericSectionProps) => {
  return (
    <section
      id={sectionName}
      className={`${index % 2 === 1 ? bgColor : ''} flex h-full w-full items-center justify-center p-4 py-6 lg:p-9`}
    >
      <div
        className={`w-full max-w-screen-sm rounded-xl bg-white lg:max-w-screen-2xl ${index % 2 === 1 ? 'border-2 border-title shadow-custom' : ''} px-4 py-10 lg:px-14 lg:py-24`}
      >
        <div className='relative flex flex-col bg-clip-border text-left'>
          <div className='flex items-center'>
            <div className={`mr-6 ${bgColor} rounded-full`}>
              <Image
                src={iconSrc}
                width={70}
                height={70}
                alt={sectionName}
                className='min-h-[80px] min-w-[80px] lg:h-[110px] lg:w-[110px]'
              />
            </div>
            <div className='flex flex-col justify-center'>
              <p className='mt-2 text-left text-2xl font-bold tracking-tight text-title sm:text-4xl lg:text-6xl'>
                {title}
              </p>
              <h2
                className={`text-left text-base font-medium lg:text-3xl ${color}`}
              >
                {subtitle}
              </h2>
            </div>
          </div>
          <dl className='mx-auto mt-16 grid grid-cols-1 gap-8 text-base leading-7 text-subtitle sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16'>
            {features.map((feature, index) => (
              <div key={index} className='relative pl-9'>
                <dt className='inline font-semibold text-white'>
                  <feature.icon
                    className='absolute left-1 top-1 h-5 w-5 text-subtitle'
                    aria-hidden='true'
                  />
                </dt>
                <dd className='inline'>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
