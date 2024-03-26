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
  iconSrc
}: GenericSectionProps) => {

  return (
    <section
      id={sectionName}
      className={`${index % 2 === 1 ? bgColor : ''} w-full h-full p-4 py-6 lg:p-9 flex items-center justify-center`}
    >
      <div className={`bg-white rounded-xl max-w-screen-sm lg:max-w-screen-2xl w-full ${index % 2 === 1 ? 'shadow-custom border-2 border-title' : ''} px-4 py-10 lg:py-24 lg:px-14`}>
        <div className='relative flex flex-col text-left bg-clip-border'>
          <div className='flex items-center'>
            <div className={`mr-6 ${bgColor} rounded-full`}>
              <Image src={iconSrc} width={70} height={70} alt={sectionName} className='lg:h-[110px] lg:w-[110px] min-h-[80px] min-w-[80px]' />
            </div>
            <div className='flex flex-col justify-center'>
              <p className='mt-2 text-2xl font-bold tracking-tight text-left lg:text-6xl text-title sm:text-4xl'>
                {title}
              </p>
              <h2 className={`text-base lg:text-3xl font-medium text-left ${color}`}>
                {subtitle}
              </h2>
            </div>
          </div>
          <dl className='grid grid-cols-1 gap-8 mx-auto mt-16 text-base leading-7 text-subtitle sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16'>
            {features.map((feature, index) => (
              <div key={index} className='relative pl-9'>
                <dt className='inline font-semibold text-white'>
                  <feature.icon
                    className='absolute w-5 h-5 text-subtitle left-1 top-1'
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
