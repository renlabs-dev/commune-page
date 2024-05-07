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
          <span className='h-2 w-2  rounded-2xl bg-green-400' />
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
      className="flex flex-col w-full overflow-hidden text-gray-400 justify-center"
    >
      <div className='flex min-h-[55dvh]'>
        <div className='flex flex-col border-r w-full max-w-[60%] border-white justify-between'>
          <div className='border-b border-white h-full space-y-4 w-full px-20 py-50 flex flex-col justify-center'>
            <p className='text-xl font-medium'>
              <span className='text-green-400'>
                Peer-to-peer {' '}
              </span>
              incentivized coordination network.
            </p>
            <h1 className='text-green-500 text-7xl'>COMMUNE AI</h1>
            <p className=''>
              Commune AI is a peer-to-peer protocol with a stake-based market of Modules, linking on-chain identifiers to off-chain computable objects via APIs. This setup supports complex computations and diverse applications, from AI models to storage solutions, independent of the blockchain.
            </p>
          </div>

          <div className='flex w-full justify-between'>
            {networkSpecs.map((spec, index) => {
              return (
                <div key={index} className='flex justify-center items-center border-x border-white first:border-none last:border-none w-1/3 py-8 space-y-1'>
                  <div className='flex flex-col justify-start items-start w-auto'>
                    <p className='font-semibold text-3xl text-white'>
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
        <div className='relative w-[45%] flex items-center justify-center'>
          <Image
            src='/hero-image.svg'
            height={100}
            width={100}
            className='w-full opacity-60'
            alt={''}
          />
          <button className='absolute left-8 bottom-8 flex items-center border border-gray-200 px-5 py-3 hover:border-white hover:text-gray-200 hover:bg-gray-200/5'>
            View More
            <Image src={'/arrow-down-icon.svg'} alt='Community icon' width={75} height={75} className='w-5 ml-1' />
          </button>
        </div>
      </div>

      <div className='flex justify-between border-t border-white'>
        {applicationsList.map((app, index) => {
          return (
            <Link
              key={index}
              href={app.href}
              className='p-16 py-10 w-full border-white border-r border-l first:border-none last:border-none hover:bg-gray-200/5 hover:text-gray-300'
            >
              {app.icon}
              <div className='flex justify-between'>
                <div>
                  <p className='text-white'>{app.title}</p>
                  {handleDescription(app.description)}
                </div>
                <Image src={'/arrow-link-icon.svg'} alt='link icon' width={75} height={75} className='w-12 border-green-500 border p-3' />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
