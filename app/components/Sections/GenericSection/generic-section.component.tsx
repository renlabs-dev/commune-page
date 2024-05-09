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
}: GenericSectionProps) => {
  return (
    <div className='border-b lg:px-20'>
      <section
        id={sectionName}
        className={`flex-col lg:flex-row lg:divide-x flex h-full w-full items-center justify-center max-w-screen-2xl mx-auto`}

      >
        <div className={`flex flex-col w-full border-white border-b lg:border-none lg:w-1/3 gap-2 px-4 py-8 lg:pr-8 lg:px-0`}>
          <p className='mt-2 text-3xl font-semibold tracking-tight text-left text-white'>
            {title}
          </p>
          <h2
            className={`text-left text-base font-medium text-gray-400`}
          >
            {subtitle}
          </h2>
        </div>

        <div className='flex flex-col justify-center w-full gap-4 p-4 text-base text-gray-400 lg:p-20 py-8'>
          {features.map((feature, index) => (
            <div key={index} className='relative flex items-center justify-start gap-4 px-3'>
              <div
                className='inline font-semibold text-white'
              >
                <feature.icon
                  className='absolute w-5 h-5 left-0 top-1 fill-green-500'
                  aria-hidden='true'
                />
              </div>
              <p className='inline'>{feature.description}</p>
            </div>
          ))}
        </div>
      </section >
    </div>
  )
}
