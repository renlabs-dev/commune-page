import { modularFeatures } from './reusability-features'
import { scalabilityFeatures } from './scalability-features'
import { tokenomicsFeatures } from './tokenomics-features'
import { validatorsFeatures } from './validators-features'

export const sections = [
  {
    sectionName: 'modular',
    title: 'Modular',
    subtitle: 'Composable architecture',
    iconSrc: '/reusability-icon.svg',
    features: modularFeatures,
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
