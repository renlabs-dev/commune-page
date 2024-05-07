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
          <span className='h-2 w-2  rounded-2xl bg-green-400' />
          <p>{presence_count} Online (Discord)
          </p>
        </div>
      )
    }
    return <p>{description}</p>
  }

  return (
    <footer className="flex flex-col">
      <div className='px-20 border-t border-white space-y-12'>
        <div className='flex items-center gap-16 pt-20'>
          <Image src='/commune-logo.svg' width={116} height={145} alt='Telegram icon' />
          <div className='space-y-5'>
            <h3 className='text-white text-5xl'>Join a Incentive-driven Coordination System for AI</h3>
            <p className='text-gray-400'>Empowering Collaborative Solutions through Shared Resources</p>
          </div>
        </div>
        <div className='flex justify-between space-x-4 pb-20'>
          {applicationsList.map((app, index) => {
            return (
              <Link
                key={index}
                href={app.href}
                className='p-8 w-full border-white border hover:bg-gray-200/5 text-gray-400 hover:text-gray-300'
              >
                <div className='flex justify-between items-center mb-3'>
                  <div>
                    <p className='text-white'>{app.title}</p>
                  </div>
                  <Image src={'/arrow-link-icon.svg'} alt='link icon' width={75} height={75} className='w-12 border-green-500 border p-3' />
                </div>
                {handleDescription(app.description)}
              </Link>
            )
          })}
        </div>
      </div>
      <div className='px-20 p-8 border-t border-white flex w-full justify-between items-center  '>
        <p className='text-left text-sm leading-5 text-gray-400'>
          Renovating the way we build software for everyone.
        </p>
        <div className='space-x-5 flex px-4'>
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
          &copy; 2024 Commune, Inc. All rights reserved.
        </p>
      </div>

    </footer>
  )
}
