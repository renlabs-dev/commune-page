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
    lightColor: 'bg-[#62ABFF]',
    bgColor: 'bg-[#62ABFF]',
    color: 'text-[#62ABFF]',
    features: networkingFeatures,
    iconSrc: '/networking-icon.svg',
  },
  {
    sectionName: 'reusability',
    title: 'Reusability',
    subtitle: 'Effortless Code Reuse',
    lightColor: 'bg-[#E9FFEB]',
    bgColor: 'bg-[#94F99E]',
    color: 'text-[#94F99E]',
    iconSrc: '/reusability-icon.svg',
    features: reusabilityFeatures,
  },
  {
    sectionName: 'scalability',
    title: 'Scalability',
    subtitle: 'Unleash Limitless Growth',
    lightColor: 'bg-[#F8D24C]',
    bgColor: 'bg-[#FF7D7D]',
    color: 'text-[#FF7D7D]',
    iconSrc: '/scalability-icon.svg',
    features: scalabilityFeatures,
  },
  {
    sectionName: 'tokenomics',
    title: 'Tokenomics',
    subtitle: 'Empowering Honest and Unbiased Voting',
    lightColor: 'bg-[#FFFBD2]',
    bgColor: 'bg-[#FFF58B]',
    color: 'text-[#FFF58B]',
    iconSrc: '/tokenomics-icon.svg',
    features: tokenomicsFeatures,
  },
  {
    sectionName: 'validators',
    title: 'Application Validators',
    subtitle: 'Rewarding Peak-Performing Modules',
    lightColor: 'bg-[#CBCBCB]',
    bgColor: 'bg-[#FFB5ED]',
    color: 'text-[#FFB5ED]',
    iconSrc: '/validators-icon.svg',
    features: validatorsFeatures,
  },
]
