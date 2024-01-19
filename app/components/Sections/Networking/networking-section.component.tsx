import {
  ExclamationTriangleIcon,
  BuildingOffice2Icon,
  CodeBracketSquareIcon,
  ShareIcon,
  GlobeAltIcon,

} from '@heroicons/react/20/solid'
import { GridLines, GradientLayer } from '../..'

const features = [
  {
    // name: 'Push to deploy.',
    description: 'Our current economic landscape is characterized by fragmentation, with various sectors and industries operating independently.',
    icon: BuildingOffice2Icon,
  },
  {
    // name: 'SSL certificates.',
    description: 'Developers face challenges in integrating and working across different tools, leading to inefficiencies and time wastage.',
    icon: CodeBracketSquareIcon,
  },
  {
    // name: 'Simple queues.',
    description: 'Lack of interoperability limits innovation and collaboration within the development community',
    icon: ExclamationTriangleIcon,
  },
  {
    // name: 'Advanced security.',
    description: 'Commune is a revolutionary protocol that connects developer tools, fostering collaboration, interoperability, and innovation within the development community.',
    icon: ShareIcon,
  },
  {
    // name: 'Powerful API.',
    description: 'Designed to break down barriers and unlock the potential of shared resources, Commune revolutionizes the way developers work and collaborate.',
    icon: GlobeAltIcon,
  },
]

export const NetworkingSection = () => {
  return (
    <section id='networking' className="relative flex items-center justify-center h-full p-3 overflow-hidden bg-gray-900 lg:pt-0 isolate">
      <GridLines svgOverwriteStyle='rotate-180' />
      <GradientLayer direction='right'>
      <div
        style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
          className="
          aspect-[1108/632] w-[69.25rem] 
          scale-50
          opacity-30
          bg-gradient-to-r 
          from-blue-200
          via-blue-400
          to-transparent
          via-40%
        "
        />
      </GradientLayer>

      <div className="flex flex-col items-center justify-center px-6 py-24 mx-auto text-left md:text-left max-w-7xl lg:px-8 lg:py-40">
        <div className="max-w-2xl mx-auto text-center lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Networking & Wrapping
            Over Everything 🌎</p>
        </div>
        <dl className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-16 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
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
