import { covered_by_your_grace } from '@/app/fonts'
import { sections } from '@/app/utils'
import Image from 'next/image'
import Link from 'next/link'

export const WelcomeSection = () => {
  return (
    <div
      id='welcome'
      className='relative isolate flex h-auto w-full flex-col items-center justify-center bg-[#F9EFE4] p-10 py-12 lg:py-28'
    >
      <Image
        src={'/dotted-background.svg'}
        width={250}
        height={150}
        alt=''
        className='hidden lg:block absolute -left-20 top-[36%] -z-10'
      />
      <Image
        src={'/dotted-background.svg'}
        width={250}
        height={150}
        alt=''
        className='hidden lg:block absolute bottom-[8%] right-5 -z-10'
      />
      <div className='flex flex-col items-center mb-6 text-center lg:mb-24'>
        <h3 className='mb-10 text-2xl font-bold lg:text-5xl text-title lg:mb-0'>
          Welcome to the
          <span
            className={`${covered_by_your_grace.className} -ml-3 text-4xl lg:text-6xl font-normal text-[#FF6C6C]`}
          >
            {' '}
            commune
          </span>
          !
        </h3>
        <h4 className='text-base font-medium lg:text-xl text-subtitle'>
          A place for
          <span
            className={`${covered_by_your_grace.className} text-lg lg:text-3xl -mx-1 font-normal text-[#62ABFF]`}
          >
            {' '}
            everyone
            {' '}
          </span>
          to develop design and create.
        </h4>
      </div>

      <div className='flex flex-col justify-center w-full space-y-10 lg:space-x-5 xl:space-x-8 lg:space-y-0 lg:flex-row'>
        {sections.map((section) => {
          return (
            <Link
              href='#'
              key={section.sectionName}
              className='flex flex-row-reverse items-center justify-end p-5 bg-white border-2 lg:w-1/5 lg:max-w-[200px] lg:flex-col lg:justify-between rounded-xl border-title lg:py-8 shadow-custom'
            >
              <h5 className='w-2/3 text-xl font-medium text-left lg:w-full lg:text-center lg:mb-10'>{section.title}</h5>
              <span className={`mr-5 lg:mr-0 ${section.color} rounded-full`}>
                <Image src={section.iconSrc} width={70} height={70} alt={section.sectionName} className='lg:h-[100px] lg:w-[100px]' />
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
