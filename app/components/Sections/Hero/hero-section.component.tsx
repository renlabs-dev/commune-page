import { applicationsList } from '@/app/utils'
import Image from 'next/image'
import Link from 'next/link'


const networkSpecs = [
  {
    title: 'Active Miners',
    info: '345.850'
  },
  {
    title: 'Active Validators',
    info: '128.250'
  },
  {
    title: 'Subnets',
    info: '34'
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
          <span className='w-2 h-2 bg-green-400 rounded-2xl' />
          <p>{presence_count} Online (Discord)
          </p>
        </div>
      )
    }
    return <p>{description}</p>
  }

  return (
    <div
      id='hero'
      className="flex flex-col justify-center w-full overflow-hidden text-gray-400"
    >
      <div className='flex flex-col-reverse lg:flex-row min-h-[55dvh]'>
        <div className='flex flex-col lg:border-r w-full lg:max-w-[60%] border-white justify-between'>
          <div className='flex flex-col justify-center w-full h-full px-6 py-20 space-y-4 border-b border-white lg:p-20 lg:py-50'>
            <p className='text-xl font-medium'>
              <span className='text-green-400'>
                Peer-to-peer {' '}
              </span>
              incentivized coordination network.
            </p>
            <h1 className='text-4xl text-green-500 lg:text-7xl'>COMMUNE AI</h1>
            <p className=''>
              Commune AI is a peer-to-peer protocol with a stake-based market of Modules, linking on-chain identifiers to off-chain computable objects via APIs. This setup supports complex computations and diverse applications, from AI models to storage solutions, independent of the blockchain.
            </p>
          </div>

          <div className='flex justify-between w-full'>
            {networkSpecs.map((spec, index) => {
              return (
                <div key={index} className='flex items-center justify-center w-1/3 py-8 border-white border-x first:border-none last:border-none'>
                  <div className='flex flex-col items-start justify-start w-auto'>
                    <p className='text-2xl font-semibold text-white lg:text-3xl'>
                      {spec.info}
                      <span className='text-green-500'>
                        +
                      </span>
                    </p>
                    <p className='text-sm text-left'>{spec.title}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className='relative p-6 0 lg:p-0 lg:w-[45%] border-b border-white lg:border-none flex-col lg:flex-row flex items-center justify-center'>
          <Image
            src='/hero-image.svg'
            height={100}
            width={100}
            className='w-full opacity-60'
            alt={''}
          />
          <button className='flex items-center justify-center w-full px-5 py-3 border border-gray-200 lg:w-auto lg:absolute lg:left-8 lg:justify-start lg:bottom-8 hover:border-white hover:text-gray-200 hover:bg-gray-200/5'>
            View More
            <Image src={'/arrow-down-icon.svg'} alt='Community icon' width={75} height={75} className='w-5 ml-1' />
          </button>
        </div>
      </div>

      <div className='flex flex-col justify-between border-t border-white lg:flex-row'>
        {applicationsList.map((app, index) => {
          return (
            <Link
              key={index}
              href={app.href}
              className='w-full p-10 px-6 border-b border-white lg:p-16 lg:py-10 lg:border-b-0 lg:border-l lg:border-r lg:first:border-none last:border-none hover:bg-gray-200/5 hover:text-gray-300'
            >
              {app.icon}
              <div className='flex justify-between'>
                <div>
                  <p className='text-white'>{app.title}</p>
                  {handleDescription(app.description)}
                </div>
                <Image src={'/arrow-link-icon.svg'} alt='link icon' width={75} height={75} className='w-12 p-3 border border-green-500' />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
