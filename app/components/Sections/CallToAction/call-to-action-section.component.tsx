import Link from 'next/link'
import { links } from '@/app/utils'
import Image from 'next/image'
import { covered_by_your_grace } from '@/app/fonts'
import { DiscordWidget } from '../..'

export const CallToActionSection = async () => {
  return (
    <div
      id='communehub'
      className='dark:border-titleDark mx-auto flex h-auto w-full flex-col items-center justify-center space-y-4 border-b-2 border-dashed border-black px-10 py-12 lg:flex-row lg:space-x-12 lg:space-y-0 dark:bg-[#131B2A]'
    >
      <div className='dark:border-titleDark w-full max-w-xl rounded-xl border-2 border-black shadow-[-17px_0_0_0_rgba(0,0,0,1)] transition duration-300 hover:scale-105 lg:w-1/2 dark:shadow-[-17px_0_0_0_rgba(59,150,255,1)]'>
        <div className='dark:border-titleDark flex flex-row items-center justify-start rounded-tr-xl border-b-2 border-dashed border-black bg-white p-4 lg:p-8 dark:bg-transparent'>
          <span className='dark:border-titleDark dark:bg-titleDark dark:bg-ti mr-6 rounded-full border-2 border-black p-4'>
            <Image src={'/discord-icon.svg'} width={32} height={32} alt='' />
          </span>
          <div>
            <span className='text-2xl font-medium text-title lg:text-4xl dark:text-white'>
              Commune Hub
            </span>
            <DiscordWidget />
          </div>
        </div>
        <div className='flex w-full flex-col items-start justify-between rounded-br-xl bg-white p-8 py-10 lg:flex-row lg:items-center dark:bg-[#131B2A] dark:text-white'>
          <Link
            href={links.discord}
            className='mb-5 text-3xl font-normal hover:underline lg:mb-0 lg:mr-10 lg:min-w-40'
            target='_blank'
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

      <div className='dark:border-titleDark relative w-full max-w-xl rounded-xl border-2 border-black shadow-[-17px_0_0_0_rgba(0,0,0,1)] transition duration-300 hover:scale-105 lg:w-1/2 dark:shadow-[-17px_0_0_0_rgba(59,150,255,1)]'>
        <div className='absolute flex h-full w-full items-center justify-center rounded-xl bg-white/[0.94] text-white dark:bg-[#131B2A]/[0.90]'>
          <span
            className={`${covered_by_your_grace.className}  text-5xl text-section-info lg:text-6xl dark:text-white`}
          >
            Coming soon
          </span>
        </div>
        <div className='dark: dark:border-titleDark flex flex-row items-center justify-start rounded-tr-xl border-b-2 border-dashed border-black bg-white p-4 lg:p-8 dark:dark:bg-[#131B2A]'>
          <span className='dark:border-titleDark dark:bg-titleDark mr-6 rounded-full border-2 border-black p-5 py-4'>
            <Image src={'/docs-icon.svg'} width={25} height={25} alt='' />
          </span>
          <span className='text-2xl font-medium text-title lg:text-4xl dark:text-white'>
            Commune Docs
          </span>
        </div>
        <div className='flex w-full flex-col items-start justify-between rounded-br-xl bg-white p-8 py-10 lg:flex-row lg:items-center dark:bg-[#131B2A] dark:text-white'>
          <Link
            // href={links.docs}
            href={'https://rb.gy/3u89fy'}
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
