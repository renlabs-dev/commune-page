import { applicationsList, links } from '@/app/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const socialList = [
  {
    name: 'Discord',
    href: links.discord,
    icon: (
      <Image
        src='/discord-icon.svg'
        width={26}
        height={26}
        alt='Discord icon'
      />
    ),
  },
  {
    name: 'X',
    href: links.x,
    icon: <Image src='/x-icon.svg' width={22} height={22} alt='X icon' />,
  },
  {
    name: 'GitHub',
    href: links.github,
    icon: (
      <Image src='/github-icon.svg' width={23} height={23} alt='Github icon' />
    ),
  },
  {
    name: 'Telegram',
    href: links.telegram,
    icon: (
      <Image
        src='/telegram-icon.svg'
        width={22}
        height={22}
        alt='Telegram icon'
      />
    ),
  },
]

const serverId = '941362322000203776'
const uri = `https://discord.com/api/guilds/${serverId}/widget.json`

async function getDiscordWidgetData() {
  try {
    const res = await fetch(uri, { next: { revalidate: 5000 } })
    return res.json()
  } catch (error) {
    return null
  }
}

export const Footer = async () => {
  const { presence_count } = await getDiscordWidgetData()

  const handleDescription = (description: string | null) => {
    if (!presence_count && !description) return <p>loading...</p>
    if (!description) {
      return (
        <div className='flex items-center gap-1'>
          <span className='h-2 w-2 rounded-2xl bg-green-400' />
          <p>{presence_count} Online (Discord)</p>
        </div>
      )
    }
    return <p>{description}</p>
  }

  return (
    <footer className='flex flex-col'>
      <div className='px-4 lg:px-20'>
        <div className='mx-auto max-w-screen-2xl space-y-12'>
          <div className='flex flex-col gap-6 pt-10 lg:flex-row lg:items-center lg:gap-16 lg:pt-20'>
            <div className='space-y-5'>
              <h3 className='text-3xl text-white lg:text-5xl'>
                Join the revolution of Incentive-driven Decentralized AI
              </h3>
            </div>
          </div>
          <div className='flex flex-col justify-between space-y-4 pb-10 lg:flex-row lg:space-x-4 lg:space-y-0 lg:pb-20'>
            {applicationsList.map((app, index) => {
              return (
                <Link
                  key={index}
                  href={app.href}
                  className='w-full border border-gray-500 bg-black/50 p-8 text-gray-400 transition duration-200 hover:bg-green-950/15 hover:text-gray-300'
                >
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='text-white'>{app.title}</p>
                    </div>
                    <Image
                      src={'/arrow-link-icon.svg'}
                      alt='link icon'
                      width={75}
                      height={75}
                      className='w-12 border border-green-500 p-3'
                    />
                  </div>
                  {handleDescription(app.description)}
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <div className='border-t border-gray-500 bg-black/50 px-4 lg:px-20'>
        <div className='mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-between gap-6 p-6 lg:flex-row lg:gap-0'>
          <p className='hidden text-left text-sm leading-5 text-gray-400 lg:block'>
            Making decentralized AI for everyone, for blockchain data{' '}
            <Link href={links.stats} className='text-green-500 hover:underline'>
              visit explorer
            </Link>
            .
          </p>
          <div className='flex space-x-5 px-4'>
            {socialList.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='leading-6 text-subtitle hover:text-gray-800 hover:underline dark:text-white'
              >
                {item.icon}
              </Link>
            ))}
          </div>

          <p className='text-center text-sm leading-5 text-gray-400 '>
            &copy; 2024 Commune, Inc. No rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
