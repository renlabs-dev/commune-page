import Link from 'next/link'
// import { links } from '@/app/utils'
import Image from 'next/image'

export const CallToActionSection = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-auto px-10 py-12 mx-auto space-y-4 border-b-2 border-black border-dashed lg:space-y-0 lg:space-x-12 lg:flex-row'>
      <div className='w-full lg:w-1/2 rounded-xl border-2 border-black shadow-[-17px_0_0_0_rgba(0,0,0,1)]'>
        <div className='flex flex-row items-center justify-start p-4 bg-white border-b-2 border-black border-dashed lg:p-8 rounded-tr-xl'>
          <span className='p-4 mr-6 border-2 border-black rounded-full'>
            <Image
              src={'/discord-icon-black.svg'}
              width={32}
              height={32}
              alt=''
            />
          </span>
          <span className='text-2xl font-medium lg:text-4xl text-title'>Commune Hub</span>
        </div>
        <div className='flex flex-col items-start justify-between w-full p-8 py-10 bg-white lg:items-center lg:flex-row rounded-br-xl'>
          <Link href='' className='mb-5 text-3xl font-normal lg:mb-0 lg:mr-10 lg:min-w-40'>
            Join <br />
            Discord →
          </Link>
          <span className='w-full text-base font-normal max-w-72 lg:w-full'>
            Join Commune&apos;s Discord. Code, connect, innovate – Shape the
            future together!
          </span>
        </div>
      </div>

      <div className='w-full lg:w-1/2 rounded-xl border-2 border-black shadow-[-17px_0_0_0_rgba(0,0,0,1)]'>
        <div className='flex flex-row items-center justify-start p-4 bg-white border-b-2 border-black border-dashed lg:p-8 rounded-tr-xl'>
          <span className='p-5 py-4 mr-6 border-2 border-black rounded-full'>
            <Image
              src={'/docs-icon-black.svg'}
              width={25}
              height={25}
              alt=''
            />
          </span>
          <span className='text-2xl font-medium lg:text-4xl text-title'>Commune Docs</span>
        </div>
        <div className='flex flex-col items-start justify-between w-full p-8 py-10 bg-white lg:items-center lg:flex-row rounded-br-xl'>
          <Link href='' className='mb-5 text-3xl font-normal lg:mb-0 lg:mr-10 lg:min-w-40'>
            Go to <br /> Docs →
          </Link>
          <span className='w-full text-base font-normal max-w-72 lg:w-full'>
            Get started on Commune&apos;s environment – Create, and deploy your
            modules!
          </span>
        </div>
      </div>
    </div>
  )
}
