import { networkingFeatures } from './networking-features'
import { reusabilityFeatures } from './reusability-features'
import { scalabilityFeatures } from './scalability-features'
import { tokenomicsFeatures } from './tokenomics-features'
import { validatorsFeatures } from './validators-features'

export const sections = [
  {
    sectionName: 'networking',
    title: 'Networking & Wrapping',
    subtitle: 'Everything you need',
    features: networkingFeatures,
    iconSrc: '/networking-icon.svg',
  },
  {
    sectionName: 'reusability',
    title: 'Reusability',
    subtitle: 'Effortless Code Reuse',
    iconSrc: '/reusability-icon.svg',
    features: reusabilityFeatures,
  },
  {
    sectionName: 'scalability',
    title: 'Scalability',
    subtitle: 'Parallelize Usecases ',
    iconSrc: '/scalability-icon.svg',
    features: scalabilityFeatures,
  },
  {
    sectionName: 'tokenomics',
    title: 'Tokenomics',
    subtitle: 'No Premine, Meritocratic Distribution',
    iconSrc: '/tokenomics-icon.svg',
    features: tokenomicsFeatures,
  },
  {
    sectionName: 'validators',
    title: 'Validators',
    subtitle: `Managing protocol's incentives`,
    iconSrc: '/validators-icon.svg',
    features: validatorsFeatures,
  },
]
