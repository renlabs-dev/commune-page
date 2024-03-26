import Link from 'next/link'
// import { links } from '@/app/utils'
import Image from 'next/image'

export const CallToActionSection = () => {
  return (
    <div className='mx-auto flex h-auto w-full flex-col items-center justify-center space-y-4 border-b-2 border-dashed border-black px-10 py-12 lg:flex-row lg:space-x-12 lg:space-y-0'>
      <div className='w-full max-w-xl rounded-xl border-2 border-black shadow-[-17px_0_0_0_rgba(0,0,0,1)] lg:w-1/2'>
        <div className='flex flex-row items-center justify-start rounded-tr-xl border-b-2 border-dashed border-black bg-white p-4 lg:p-8'>
          <span className='mr-6 rounded-full border-2 border-black p-4'>
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
        <div className='flex w-full flex-col items-start justify-between rounded-br-xl bg-white p-8 py-10 lg:flex-row lg:items-center'>
          <Link
            href=''
            className='mb-5 text-3xl font-normal lg:mb-0 lg:mr-10 lg:min-w-40'
          >
            Join <br />
            Discord →
          </Link>
          <span className='w-full max-w-72 text-base font-normal lg:w-full'>
            Join Commune&apos;s Discord. Code, connect, innovate – Shape the
            future together!
          </span>
        </div>
      </div>

      <div className='w-full max-w-xl rounded-xl border-2 border-black shadow-[-17px_0_0_0_rgba(0,0,0,1)] lg:w-1/2'>
        <div className='flex flex-row items-center justify-start rounded-tr-xl border-b-2 border-dashed border-black bg-white p-4 lg:p-8'>
          <span className='mr-6 rounded-full border-2 border-black p-5 py-4'>
            <Image src={'/docs-icon-black.svg'} width={25} height={25} alt='' />
          </span>
          <span className='text-2xl font-medium text-title lg:text-4xl'>
            Commune Docs
          </span>
        </div>
        <div className='flex w-full flex-col items-start justify-between rounded-br-xl bg-white p-8 py-10 lg:flex-row lg:items-center'>
          <Link
            href=''
            className='mb-5 text-3xl font-normal lg:mb-0 lg:mr-10 lg:min-w-40'
          >
            Go to <br /> Docs →
          </Link>
          <span className='w-full max-w-72 text-base font-normal lg:w-full'>
            Get started on Commune&apos;s environment – Create, and deploy your
            modules!
          </span>
        </div>
      </div>
    </div>
  )
}
