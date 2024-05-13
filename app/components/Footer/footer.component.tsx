import { applicationsList, links } from '@/app/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const socialList = [
  {
    name: 'Discord',
    href: links.discord,
    icon: <Image src='/discord-icon.svg' width={26} height={26} alt='Discord icon' />
  },
  {
    name: 'X',
    href: links.x,
    icon: <Image src='/x-icon.svg' width={22} height={22} alt='X icon' />
  },
  {
    name: 'GitHub',
    href: links.github,
    icon: <Image src='/github-icon.svg' width={23} height={23} alt='Github icon' />

  },
  {
    name: 'Telegram',
    href: links.telegram,
    icon: <Image src='/telegram-icon.svg' width={22} height={22} alt='Telegram icon' />
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
          <span className='w-2 h-2 bg-green-400 rounded-2xl' />
          <p>{presence_count} Online (Discord)
          </p>
        </div>
      )
    }
    return <p>{description}</p>
  }

  return (
    <footer className="flex flex-col">
      <div className='px-4 lg:px-20'>
        <div className='space-y-12 max-w-screen-2xl mx-auto'>
          <div className='flex flex-col gap-6 pt-10 lg:gap-16 lg:items-center lg:flex-row lg:pt-20'>
            <Image src='/commune-logo.svg' width={116} height={145} className='w-12 h-16 lg:w-auto lg:h-auto' alt='Telegram icon' />
            <div className='space-y-5'>
              <h3 className='text-3xl text-white lg:text-5xl'>Join a Incentive-driven Coordination System for AI</h3>
              <p className='text-gray-400'>Empowering Collaborative Solutions through Shared Resources</p>
            </div>
          </div>
          <div className='flex flex-col justify-between pb-10 space-y-4 lg:pb-20 lg:space-y-0 lg:space-x-4 lg:flex-row'>
            {applicationsList.map((app, index) => {
              return (
                <Link
                  key={index}
                  href={app.href}
                  className='w-full p-8 text-gray-400 border border-gray-500 bg-black/50 hover:bg-black/70 hover:text-gray-300'
                >
                  <div className='flex items-center justify-between mb-3'>
                    <div>
                      <p className='text-white'>{app.title}</p>
                    </div>
                    <Image src={'/arrow-link-icon.svg'} alt='link icon' width={75} height={75} className='w-12 p-3 border border-green-500' />
                  </div>
                  {handleDescription(app.description)}
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <div className='border-t px-4 lg:px-20'>
        <div className='flex flex-col items-center justify-between w-full gap-6 p-6 lg:gap-0 lg:flex-row max-w-screen-2xl mx-auto'>
          <p className='hidden text-sm leading-5 text-left text-gray-400 lg:block'>
            Renovating the way we build software for everyone.
          </p>
          <div className='flex px-4 space-x-5'>
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

          <p className='text-sm leading-5 text-center text-gray-400 '>
            &copy; 2024 Commune, Inc. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  )
}
