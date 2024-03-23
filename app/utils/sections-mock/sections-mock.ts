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
    color: 'bg-[#62ABFF]',
    features: networkingFeatures,
    iconSrc: '/networking-icon.svg',
  },
  {
    sectionName: 'reusability',
    title: 'Reusability',
    subtitle: 'Effortless Code Reuse',
    color: 'bg-[#94F99E]',
    iconSrc: '/reusability-icon.svg',
    features: reusabilityFeatures,
  },
  {
    sectionName: 'scalability',
    title: 'Scalability',
    subtitle: 'Unleash Limitless Growth',
    color: 'bg-[#FF7D7D]',
    iconSrc: '/scalability-icon.svg',
    features: scalabilityFeatures,
  },
  {
    sectionName: 'tokenomics',
    title: 'Tokenomics',
    subtitle: 'Empowering Honest and Unbiased Voting',
    color: 'bg-[#FFF58B]',
    iconSrc: '/tokenomics-icon.svg',
    features: tokenomicsFeatures,
  },
  {
    sectionName: 'validators',
    title: 'Application Validators',
    subtitle: 'Rewarding Peak-Performing Modules',
    color: 'bg-[#FFB5ED]',
    iconSrc: '/validators-icon.svg',
    features: validatorsFeatures,
  },
]
