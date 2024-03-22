import { covered_by_your_grace } from '@/app/fonts'
import { sections } from '@/app/utils'
import Image from 'next/image'
import Link from 'next/link'

export const WelcomeSection = () => {
  return (
    <div
      id='welcome'
      className='relative isolate flex h-[50vh] w-full flex-col items-center overflow-hidden bg-[#F9EFE4] py-28'
    >
      <Image
        src={'/dotted-background.svg'}
        width={250}
        height={150}
        alt=''
        className='absolute -left-20 top-[36%] -z-10'
      />
      <Image
        src={'/dotted-background.svg'}
        width={250}
        height={150}
        alt=''
        className='absolute bottom-[8%] right-5 -z-10'
      />
      <div className='mb-24 flex flex-col items-center'>
        <h3 className='text-5xl font-bold text-title'>
          Welcome to the
          <span
            className={`${covered_by_your_grace.className} -ml-3 text-6xl font-normal text-[#FF6C6C]`}
          >
            {' '}
            commune
          </span>
          !
        </h3>
        <h4 className='text-xl font-medium text-subtitle'>
          A place for
          <span
            className={`${covered_by_your_grace.className} text-3xl font-normal text-[#62ABFF]`}
          >
            {' '}
            everyone{' '}
          </span>
          to develop design and create.
        </h4>
      </div>

      <div className='flex space-x-10'>
        {sections.map((section) => {
          return (
            <Link
              href='#'
              key={section.sectionName}
              className='flex w-full max-w-48 flex-col items-center text-pretty rounded-xl border-2 border-title bg-white px-8 py-5 text-center shadow-custom'
            >
              <h5>{section.title}</h5>
              <span className='my-auto mt-3 flex h-[130px] items-center'>
                Image
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
