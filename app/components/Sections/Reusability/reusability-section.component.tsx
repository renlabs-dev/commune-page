import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/20/solid'
import { GridLines, GradientLayer } from '../..'

const features = [
  {
    // name: 'Push to deploy.',
    description: 'Commune supports a modular architecture that encourages code reuse.',
    icon: CloudArrowUpIcon,
  },
  {
    // name: 'SSL certificates.',
    description: 'Developers can create self-contained modules that can be easily integrated into multiple projects, enhancing scalability and maintainability.',
    icon: LockClosedIcon,
  },
  {
    // name: 'Simple queues.',
    description: 'Commune facilitates easy sharing and discovery of reusable modules among developers.',
    icon: ArrowPathIcon,
  },
  {
    // name: 'Advanced security.',
    description: 'Developers can contribute their own modules and benefit from the shared pool of resources, saving time and effort.',
    icon: FingerPrintIcon,
  },
  {
    // name: 'Powerful API.',
    description: 'Reusing code and components from the Commune ecosystem reduces development time and effort.',
    icon: Cog6ToothIcon,
  },
  {
    // name: 'Powerful API.',
    description: 'Developers can build upon tested and reliable solutions, ensuring consistent quality and accelerating their project timelines',
    icon: Cog6ToothIcon,
  },
]

export const ReusabilitySection = () => {
  return (
    <section id='reusability' className="relative flex items-center justify-center h-screen p-3 overflow-hidden bg-gray-900 lg:pt-0 isolate">
      <GridLines svgOverwriteStyle='opacity-90 rotate-360' />
      <GradientLayer direction='left'>
      <div
        style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
          className="
          aspect-[1108/632] w-[69.25rem] 
          opacity-30
          bg-gradient-to-r 
          from-green-200
          via-green-400
        "
        />
      </GradientLayer>
      <div className="flex flex-col items-center justify-center w-full px-6 py-24 mx-auto text-left md:text-left max-w-7xl lg:px-8 lg:py-40">
        <div className="max-w-2xl mx-auto text-center lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Effortless Code Reuse</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Reusability 🔄</p>
        </div>
        <dl className="grid w-full max-w-2xl grid-cols-1 gap-8 mx-auto mt-16 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          {features.map((feature, index) => (
            <div key={index} className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <feature.icon className="absolute w-5 h-5 text-indigo-500 left-1 top-1" aria-hidden="true" />
              </dt>
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
        </div>
    </section>
  )
}
