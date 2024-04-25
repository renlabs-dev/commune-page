// Getting Started
import Intro from './intro.mdx'

// Concepts
import Basics from './basics.mdx'
import WeightSystem from './weight-system.mdx'
import Governance from './governance.mdx'

// Installation
import SetupCommune from './setup-commune.mdx'
import SetupWallet from './setup-wallet.mdx'

// Modules
import WhatIsModule from './what-is-a-module.mdx'
import Requirments from './requirments.mdx'
import ModuleBasics from './module-basics.mdx'
import ModuleCreate from './module-create.mdx'
import ModuleDeploy from './module-deploy.mdx'
import ModuleRegister from './module-register.mdx'
import ModuleConnect from './module-connect.mdx'

// Working with Keys
import KeyBasics from './key-basics.mdx'

// Mining and Validating
import WhatIsMining from './what-is-mining.mdx'
import WhatIsValidating from './what-is-validating.mdx'
import ParticipatingOnSubnet from './participating-on-a-subnet.mdx'
import RunMiner from './run-miner.mdx'
import RunValidator from './run-validator.mdx'
import CreateValidator from './create-validator.mdx'
import CreateMiner from './create-miner.mdx'

// Subspace
import SubspaceNodeList from './subspace-node-list.mdx'
import RegistrationBurnMechanism from './registration-burn-mechanism.mdx'
import GlobalParameters from './global-parameters.mdx'
import RunningLocalNode from './running-local-node.mdx'

const gettingStartedSection = [
  {
    component: <Intro />,
    href: `intro`,
    name: 'Introduction',
  },
]

const conceptsSection = [
  {
    component: <Basics />,
    href: `basics`,
    name: 'Basics',
  },
  {
    component: <WeightSystem />,
    href: `weight-system`,
    name: 'Weight System',
  },
  {
    component: <Governance />,
    href: `governance`,
    name: 'Governance',
  },
]

const installationSection = [
  {
    component: <Requirments />,
    href: `requirments`,
    name: 'Requirements',
  },
  {
    component: <SetupCommune />,
    href: `setup-commune`,
    name: 'Setup Commune',
  },
  {
    component: <SetupWallet />,
    href: `setup-wallet`,
    name: 'Setup Wallet',
  },
]

const modulesSection = [
  {
    component: <WhatIsModule />,
    href: `what-is-a-module`,
    name: 'What is a module',
  },
  {
    component: <ModuleBasics />,
    href: `module-basics`,
    name: 'Module Basics ',
  },
  {
    component: <ModuleCreate />,
    href: `module-create`,
    name: 'Create a Module',
  },
  {
    component: <ModuleDeploy />,
    href: `module-deploy`,
    name: 'Deploy a Module',
  },
  {
    component: <ModuleRegister />,
    href: `module-register`,
    name: 'Register a Module',
  },
  {
    component: <ModuleConnect />,
    href: `module-connect`,
    name: 'Connect to a Module',
  },
]

const workingWithKeysSection = [
  {
    component: <KeyBasics />,
    href: `key-basics`,
    name: 'Key Basics',
  },
]

const miningAndValidatingSection = [
  {
    component: <WhatIsMining />,
    href: `what-is-mining`,
    name: 'What is mining',
  },
  {
    component: <WhatIsValidating />,
    href: `what-is-validating`,
    name: 'What is validating',
  },
  {
    component: <ParticipatingOnSubnet />,
    href: `participating-on-a-subnet`,
    name: 'Participating on a subnet as validator or miner',
  },
  {
    component: <RunMiner />,
    href: `run-miner`,
    name: 'How to run a miner',
  },
  {
    component: <RunValidator />,
    href: `run-validator`,
    name: 'How to run a validator',
  },
  {
    component: <CreateValidator />,
    href: `create-validator`,
    name: 'How to Create and Deploy a Validator',
  },
  {
    component: <CreateMiner />,
    href: `create-miner`,
    name: 'How to Create and Deploy a Miner',
  },
]

// const subnetsSection = [
//   {
//     component: <SubnetBasics />,
//     href: `subnet-basics`,
//     name: 'Subnet Basics',
//   },
//   {
//     component: <CreateSubnet />,
//     href: `create-subnet`,
//     name: 'Create a subnet',
//   },
//   {
//     component: <DeploySubnet />,
//     href: `deploy-subnet`,
//     name: 'Deploy a subnet',
//   },
//   {
//     component: <SubnetList />,
//     href: `subnet-list`,
//     name: 'Subnet List',
//   },
//   {
//     component: <StakeThresholdCalcualtion />,
//     href: `subnet-threshold-calculation`,
//     name: 'Stake threshold calcualtion',
//   },
//   {
//     component: <GeneralNetwork />,
//     href: `general-network`,
//     name: 'General Network',
//   },
//   {
//     component: <GeneralNetworkGovernance />,
//     href: `general-network-governance`,
//     name: 'General network governance',
//   },
//   {
//     component: <SubnetParameters />,
//     href: `subnet-parameters`,
//     name: 'Subnet parameters',
//   },
// ]

const subspaceSection = [
  {
    component: <SubspaceNodeList />,
    href: `subspace-node-list`,
    name: 'Subspace Node List',
  },
  {
    component: <RegistrationBurnMechanism />,
    href: `registration-burn-mechanism`,
    name: 'Registration Burn Mechanism',
  },
  {
    component: <GlobalParameters />,
    href: `global-parameters`,
    name: 'Global Parameters',
  },
  {
    component: <RunningLocalNode />,
    href: `running-local-node`,
    name: 'Running a Local Node',
  },
]

export const tutorials = [
  {
    contents: gettingStartedSection,
    title: 'Getting Started',
    tutorialId: 'getting-started',
  },
  {
    contents: conceptsSection,
    title: 'Concepts',
    tutorialId: 'concepts',
  },
  {
    contents: installationSection,
    title: 'Installation',
    tutorialId: 'installation',
  },
  {
    contents: modulesSection,
    title: 'Modules',
    tutorialId: 'modules',
  },
  {
    contents: workingWithKeysSection,
    title: 'Working with Keys',
    tutorialId: 'working-with-keys',
  },
  {
    contents: miningAndValidatingSection,
    title: 'Mining and Validating',
    tutorialId: 'mining-and-validating',
  },
  // {
  //   contents: subnetsSection,
  //   title: 'Subnets',
  //   tutorialId: 'subnets',
  // },
  {
    contents: subspaceSection,
    title: 'Subspace',
    tutorialId: 'subspace',
  },
]
