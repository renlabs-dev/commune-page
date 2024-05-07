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
  index: number
  iconSrc: string
}

export const GenericSection = ({
  title,
  subtitle,
  sectionName,
  features,
  index,
  iconSrc,
}: GenericSectionProps) => {
  return (
    <section
      id={sectionName}
      className={`${index % 2 === 1 ? `lg:flex-row-reverse lg:divide-x-reverse` : 'lg:flex-row lg:divide-x'} flex-col lg:divide-x flex h-full w-full items-center justify-center border-b boder-white`}
    >
      <div className={`flex flex-col justify-center w-full p-10 px-6 border-b lg:border-none border-white lg:w-1/3 gap-2 lg:p-20`}>
        <Image
          src={iconSrc}
          width={60}
          height={60}
          alt={sectionName}
          className='min-h-[60px] min-w-[60px]'
        />
        <p className='mt-2 text-3xl font-semibold tracking-tight text-left text-white'>
          {title}
        </p>
        <h2
          className={`text-left text-base font-medium text-gray-400`}
        >
          {subtitle}
        </h2>
      </div>

      <div className='flex flex-col justify-center w-full gap-4 p-10 px-6 text-base text-gray-400 lg:p-20'>
        {features.map((feature, index) => (
          <div key={index} className='relative flex items-center justify-start gap-3 p-8 border border-white'>
            <div
              className='inline font-semibold text-white'
            >
              <feature.icon
                className='absolute w-5 h-5 left-4 top-9 fill-green-500'
                aria-hidden='true'
              />
            </div>
            <p className='inline'>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
