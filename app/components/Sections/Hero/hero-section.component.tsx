import Link from 'next/link'
import Image from 'next/image'
import { applicationsList } from '@/app/utils'
//app/components/Animation/index.jsx
import Animation from '@/app/components/Animation'

const networkSpecs = [
  {
    title: 'Active Miners',
    info: '345.850',
  },
  {
    title: 'Active Validators',
    info: '128.250',
  },
  {
    title: 'Subnets',
    info: '34',
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

export const HeroSection = async () => {
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
    <div
      id='hero'
      className='flex w-full flex-col justify-center overflow-hidden text-gray-400'
    >
      <div className='flex min-h-[55dvh] flex-col-reverse lg:flex-row'>
        <div className='flex w-full flex-col justify-between border-white lg:max-w-[60%] lg:border-r'>
          <div className='lg:py-50 flex h-full w-full flex-col justify-center space-y-4 border-b border-white px-4 py-20 lg:p-20'>
            <p className='text-xl font-medium'>
              <span className='text-green-400'>Peer-to-peer </span>
              incentivized coordination network.
            </p>
            <Image
              src='/logo-asci.svg'
              width={200}
              height={100}
              alt='Commune ai logo'
              className='w-full py-4'
            />
            <p className='font-normal'>
              Commune AI is a peer-to-peer protocol with a stake-based market of
              Modules, linking on-chain identifiers to off-chain computable
              objects via APIs. This setup supports complex computations and
              diverse applications, from AI models to storage solutions,
              independent of the blockchain.
            </p>
          </div>

          <div className='flex w-full justify-between'>
            {networkSpecs.map((spec, index) => {
              return (
                <div
                  key={index}
                  className='flex w-1/3 items-center justify-center border-x border-white py-8 first:border-none last:border-none lg:border-none'
                >
                  <div className='flex w-auto flex-col items-start justify-start'>
                    <p className='text-2xl font-semibold text-white lg:text-3xl'>
                      {spec.info}
                      <span className='text-green-500'>+</span>
                    </p>
                    <p className='text-left text-sm font-normal'>
                      {spec.title}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className='0 relative flex flex-col items-center justify-center border-b border-white p-4 lg:w-[45%] lg:flex-row lg:border-none lg:p-0'>
          <div className='-z-50'>
            <Animation />
          </div>

          <Link
            href={'#welcome'}
            className='mb-4 flex w-full items-center justify-center border  border-gray-200 px-5 py-3 hover:border-white hover:bg-gray-200/5 hover:text-gray-200 lg:absolute lg:bottom-8 lg:left-8 lg:mb-0 lg:w-auto lg:justify-start'
          >
            View More
            <Image
              src={'/arrow-down-icon.svg'}
              alt='Community icon'
              width={75}
              height={75}
              className='ml-1 w-5'
            />
          </Link>
        </div>
      </div>

      <div className='flex flex-col justify-between border-t border-white lg:flex-row'>
        {applicationsList.map((app, index) => {
          return (
            <Link
              key={index}
              href={app.href}
              className='w-full border-b border-white p-10 px-4 last:border-none hover:bg-gray-200/5 hover:text-gray-300 lg:border-b-0 lg:border-l lg:border-r lg:p-16 lg:py-10 lg:first:border-none'
            >
              {app.icon}
              <div id='welcome' className='flex justify-between'>
                <div>
                  <p className='text-white'>{app.title}</p>
                  {handleDescription(app.description)}
                </div>
                <Image
                  src={'/arrow-link-icon.svg'}
                  alt='link icon'
                  width={75}
                  height={75}
                  className='w-12 border border-green-500 p-3'
                />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
