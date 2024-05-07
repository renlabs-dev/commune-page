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
      className={`${index % 2 === 1 ? `flex-row-reverse divide-x-reverse` : 'flex-row divide-x'} divide-x flex h-full w-full items-center justify-center border-b boder-white`}
    >
      <div className={`flex flex-col justify-center w-1/3 gap-2 p-20`}>
        <Image
          src={iconSrc}
          width={60}
          height={60}
          alt={sectionName}
          className='min-h-[60px] min-w-[60px]'
        />
        <p className='mt-2 text-left font-semibold tracking-tight text-white text-3xl'>
          {title}
        </p>
        <h2
          className={`text-left text-base font-medium text-gray-400`}
        >
          {subtitle}
        </h2>
      </div>

      <div className='text-base text-gray-400 flex flex-col justify-center w-full gap-4 p-20'>
        {features.map((feature, index) => (
          <div key={index} className='relative flex justify-start items-center gap-3 border border-white p-8'>
            <div
              className='inline font-semibold text-white'
            >
              <feature.icon
                className='absolute left-4 top-9 h-5 w-5'
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
