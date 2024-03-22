import Link from 'next/link'
// import { links } from '@/app/utils'
import Image from 'next/image'

export const CallToActionSection = () => {
  return (
    <div className='flex h-auto w-full space-x-12 border-b-2 border-dashed border-black px-9 py-11'>
      <div className='w-1/2 rounded-xl border-2 border-black shadow-[-17px_0_0_0_rgba(0,0,0,1)]'>
        <div className='flex flex-row items-center justify-start rounded-tr-xl border-b-2 border-dashed border-black bg-white p-8'>
          <span className='mr-6 rounded-full border-2 border-black p-4'>
            <Image
              src={'/discord-icon-black.svg'}
              width={32}
              height={32}
              alt=''
            />
          </span>
          <span className='text-4xl font-medium text-title'>Commune Hub</span>
        </div>
        <div className='flex w-full items-center justify-center space-x-32 rounded-br-xl bg-white p-8 pb-12'>
          <Link href='' className='w-1/2 text-3xl font-normal'>
            Join <br />
            Discord →
          </Link>
          <span className='max-w-xs text-base font-normal'>
            Join Commune&apos;s Discord. Code, connect, innovate – Shape the
            future together!
          </span>
        </div>
      </div>

      <div className='w-1/2 rounded-xl border-2 border-black shadow-[-17px_0_0_0_rgba(0,0,0,1)]'>
        <div className='flex flex-row items-center justify-start rounded-tr-xl border-b-2 border-dashed border-black bg-white p-8'>
          <span className='mr-6 rounded-full border-2 border-black p-5 py-4'>
            <Image
              src={'/docs-icon-black.svg'}
              width={25}
              height={25}
              alt=''
              className=''
            />
          </span>
          <span className='text-4xl font-medium text-title'>Commune Docs</span>
        </div>
        <div className='flex items-center justify-center space-x-32 rounded-br-xl bg-white p-8 pb-12'>
          <Link href='' className='text-3xl font-normal'>
            Go to <br /> Docs →
          </Link>
          <span className='max-w-xs text-base font-normal'>
            Get started on Commune&apos;s environment – Create, and deploy your
            modules!
          </span>
        </div>
      </div>
    </div>
  )
}
