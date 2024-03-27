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
    subtitle: 'Parallelize Usecases ',
    lightColor: 'bg-[#F8D24C]',
    bgColor: 'bg-[#FF7D7D]',
    color: 'text-[#FF7D7D]',
    iconSrc: '/scalability-icon.svg',
    features: scalabilityFeatures,
  },
  {
    sectionName: 'tokenomics',
    title: 'Tokenomics',
    subtitle: 'No Premine, Meritocratic Distribution',
    lightColor: 'bg-[#FFFBD2]',
    bgColor: 'bg-[#F5D666]',
    color: 'text-[#F5D666]',
    iconSrc: '/tokenomics-icon.svg',
    features: tokenomicsFeatures,
  },
  {
    sectionName: 'validators',
    title: 'Validators',
    subtitle: `Managing protocol's incentives`,
    lightColor: 'bg-[#CBCBCB]',
    bgColor: 'bg-[#FE84E0]',
    color: 'text-[#FE84E0]',
    iconSrc: '/validators-icon.svg',
    features: validatorsFeatures,
  },
]
