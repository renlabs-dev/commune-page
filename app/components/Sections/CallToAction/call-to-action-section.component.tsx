import Link from 'next/link'
import { links } from '@/app/utils'
import Image from 'next/image'

export const CallToActionSection = async () => {
  return (
    <div id='communehub' className='flex flex-col items-center justify-center w-full h-auto px-10 py-12 mx-auto space-y-4 border-b-2 border-black border-dashed lg:flex-row lg:space-x-12 lg:space-y-0'>
      <div className='w-full max-w-xl rounded-xl border-2 border-black shadow-[-17px_0_0_0_rgba(0,0,0,1)] lg:w-1/2'>
        <div className='flex flex-row items-center justify-start p-4 bg-white border-b-2 border-black border-dashed rounded-tr-xl lg:p-8'>
          <span className='p-4 mr-6 border-2 border-black rounded-full'>
            <Image
              src={'/discord-icon-black.svg'}
              width={32}
              height={32}
              alt=''
            />
          </span>
          <span className='text-2xl font-medium text-title lg:text-4xl'>
            Commune Hub
          </span>
        </div>
        <div className='flex flex-col items-start justify-between w-full p-8 py-10 bg-white rounded-br-xl lg:flex-row lg:items-center'>
          <Link
            href={links.discord}
            className='mb-5 text-3xl font-normal lg:mb-0 lg:mr-10 lg:min-w-40'
            target='_blank'
          >
            Join <br />
            Discord →
          </Link>
          <span className='w-full text-base font-normal max-w-72 lg:w-full'>
            Join Commune&apos;s Discord. Code, connect, innovate – Shape the
            future together!
          </span>
        </div>
      </div>

      <div className='w-full max-w-xl rounded-xl border-2 border-black shadow-[-17px_0_0_0_rgba(0,0,0,1)] lg:w-1/2'>
        <div className='flex flex-row items-center justify-start p-4 bg-white border-b-2 border-black border-dashed rounded-tr-xl lg:p-8'>
          <span className='p-5 py-4 mr-6 border-2 border-black rounded-full'>
            <Image src={'/docs-icon-black.svg'} width={25} height={25} alt='' />
          </span>
          <span className='text-2xl font-medium text-title lg:text-4xl'>
            Commune Docs
          </span>
        </div>
        <div className='flex flex-col items-start justify-between w-full p-8 py-10 bg-white rounded-br-xl lg:flex-row lg:items-center'>
          <Link
            href={links.docs}
            className='mb-5 text-3xl font-normal lg:mb-0 lg:mr-10 lg:min-w-40'
          >
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
