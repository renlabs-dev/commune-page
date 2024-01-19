import { gradientSectionColors } from './gradientSectionColors'
import { namespacesFeatures } from './namespaces-features'
import { networkingFeatures } from './networking-features'
import { reusabilityFeatures } from './reusability-features'
import { scalabilityFeatures } from './scalability-features'
import { tokenomicsFeatures } from './tokenomics-features'
import { validatorsFeatures } from './validators-features'

export const sections = [
  {
    sectionName: 'networking',
    title: 'Networking & Wrapping Over Everything 🌎',
    subtitle: 'Everything you need',
    color: 'bg-blue-400/5',
    features: networkingFeatures,
    gradientColor: gradientSectionColors.blue,
  },
  {
    sectionName: 'reusability',
    title: 'Reusability 🔄',
    subtitle: 'Effortless Code Reuse',
    color: 'bg-green-400/5',
    gradientColor: gradientSectionColors.green,
    features: reusabilityFeatures,
  },
  {
    sectionName: 'scalability',
    title: 'Scalability ⚖️',
    subtitle: 'Unleash Limitless Growth',
    color: 'bg-yellow-400/5',
    gradientColor: gradientSectionColors.yellow,
    features: scalabilityFeatures,
  },
  {
    sectionName: 'namespaces',
    title: 'Module Namespaces 🖥️',
    subtitle: 'Simplify Connectivity',
    color: 'bg-red-400/5',
    gradientColor: gradientSectionColors.red,
    features: namespacesFeatures,
  },
  {
    sectionName: 'tokenomics',
    title: 'Tokenomics 🪙',
    subtitle: 'Empowering Honest and Unbiased Voting',
    color: 'bg-pink-400/5',
    gradientColor: gradientSectionColors.pink,
    features: tokenomicsFeatures,
  },
  {
    sectionName: 'validators',
    title: 'Application Validators ✅',
    subtitle: 'Rewarding Peak-Performing Modules',
    color: 'bg-cyan-400/5',
    gradientColor: gradientSectionColors.cyan,
    features: validatorsFeatures,
  },
]
