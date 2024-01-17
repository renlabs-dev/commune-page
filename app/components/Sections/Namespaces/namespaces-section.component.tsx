import {
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/20/solid'
import { GridLines, GradientLayer } from '../..'

const features = [
  {
    // name: 'Push to deploy.',
    description: 'We do not want to work with IP and ports as it can get confusing.',
    icon: CloudArrowUpIcon,
  },
  {
    // name: 'SSL certificates.',
    description: 'We want to map the name of the module with the endpoint that server is on',
    icon: LockClosedIcon,
  },
]

export const NamespacesSection = () => {
  return (
    <section id='namespaces' className="relative flex items-center justify-center h-screen p-3 overflow-hidden bg-gray-900 lg:pt-0 isolate">
      <GridLines svgOverwriteStyle='opacity-90 rotate-360' />
      <GradientLayer direction='left' >
      <div
        style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
          className="
          aspect-[1108/632] w-[69.25rem] 
          opacity-30
          rotate-45
          bg-gradient-to-r 
          from-blue-400
          via-red-400
          to-transparent
          via-40%
        "
        />
      </GradientLayer>

      <div className="flex flex-col items-center justify-center w-full px-6 py-24 mx-auto text-left md:text-left max-w-7xl lg:px-8 lg:py-40">
        <div className="max-w-2xl mx-auto text-center lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Simplify Connectivity</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Module Namespaces 🖥️</p>
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
