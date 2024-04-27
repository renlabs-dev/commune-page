// Getting Started
import Intro from './intro.mdx' // done

// Concepts
import Basics from './basics.mdx' // TODO: timo refactor
import WeightSystem from './weight-system.mdx' // done
import Governance from './governance.mdx' // done

// Installation
import SetupCommune from './setup-commune.mdx' // done
import SetupWallet from './setup-wallet.mdx' // done

// Modules
import WhatIsModule from './what-is-a-module.mdx' // todo jairo refac
import ModuleBasics from './module-basics.mdx' // jairo todo
import ModuleCreate from './module-create.mdx' // jairo todo
import ModuleDeploy from './module-deploy.mdx' // jairo todo
import ModuleRegister from './module-register.mdx' // done
import ModuleConnect from './module-connect.mdx' // jairo todo

// Subnets
import WhatIsSubnet from './what-is-a-subnet.mdx'  // done
import ParticipatingOnSubnet from './participating-on-a-subnet.mdx'
import SubnetTemplate from './subnet-template.mdx' // TODO: honza
import DeployingSubnet from './deploying-a-subnet.mdx' // TODO: honza
import SubnetParameters from './subnet-parameters.mdx' // TODO: timo
import GeneralSubnetDao from './general-subnet-dao.mdx' // done
import YumaSubnets from './yuma-subnets.mdx' // done
import GeneralSubnet from './general-subnet.mdx' // done
import SubnetList from './subnet-list.mdx' // TODO: honza 

// Working with Keys
import KeyBasics from './key-basics.mdx' // done

// Mining
import WhatIsMining from './what-is-mining.mdx' // done
import CreateMiner from './create-miner.mdx' // TODO: jairo 
import RunMiner from './run-miner.mdx' // done

// Validating
import WhatIsValidating from './what-is-validating.mdx' // done
import CreateValidator from './create-validator.mdx' // TODO: jairo
import RunValidator from './run-validator.mdx' // TOOD: jairo

// Subspace
import RegistrationBurnMechanism from './registration-burn-mechanism.mdx' // TODO: honza
import GlobalParameters from './global-parameters.mdx' // TODO: timo
import RunningLocalNode from './running-local-node.mdx' // TODO: honza
import YumaConsensus from './yuma-consensus.mdx' // TODO: luiz add code examples
import GeneralSubnetImplementation from './general-subnet-implementation.mdx' // TODO: luiz

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

const subnetsSection = [
  {
    component: <WhatIsSubnet />,
    href: `what-is-a-subnet`,
    name: 'What is a subnet',
  },
  {
    component: <ParticipatingOnSubnet />,
    href: `participating-on-a-subnet`,
    name: 'Participating on a subnet',
  },
  {
    component: <SubnetTemplate />,
    href: `subnet-template`,
    name: 'Subnet Template',
  },
  {
    component: <DeployingSubnet />,
    href: `deploying-a-subnet`,
    name: 'Deploying a subnet',
  },
  {
    component: <SubnetParameters />,
    href: `subnet-parameters`,
    name: 'Subnet Parameters',
  },
  {
    component: <GeneralSubnetDao />,
    href: `general-subnet-dao`,
    name: 'General Subnet DAO',
  },
  {
    component: <YumaSubnets />,
    href: `yuma-subnets`,
    name: 'Yuma Subnets',
  },
  {
    component: <GeneralSubnet />,
    href: `general-subnet`,
    name: 'General Subnet',
  },
  {
    component: <SubnetList />,
    href: `subnet-list`,
    name: 'Subnet List',
  },
]

const workingWithKeysSection = [
  {
    component: <KeyBasics />,
    href: `key-basics`,
    name: 'Key Basics',
  },
]

const miningSection = [
  {
    component: <WhatIsMining />,
    href: `what-is-mining`,
    name: 'What is mining',
  },
  {
    component: <CreateMiner />,
    href: `create-miner`,
    name: 'Create a miner',
  },
  {
    component: <RunMiner />,
    href: `run-miner`,
    name: 'Run a miner',
  },
]

const validatingSection = [
  {
    component: <WhatIsValidating />,
    href: `what-is-validating`,
    name: 'What is validating',
  },
  {
    component: <CreateValidator />,
    href: `create-validator`,
    name: 'Create a validator',
  },
  {
    component: <RunValidator />,
    href: `run-validator`,
    name: 'Run a validator',
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
  {
    component: <YumaConsensus />,
    href: `yuma-consensus`,
    name: 'Yuma Consensus',
  },
  {
    component: <GeneralSubnetImplementation />,
    href: `general-network`,
    name: 'General Network',
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
    contents: subnetsSection, 
    title: 'Subnets',
    tutorialId: 'subnets' 
  },
  {
    contents: workingWithKeysSection,
    title: 'Working with Keys',
    tutorialId: 'working-with-keys',
  },
  {
    contents: miningSection,
    title: 'Mining',
    tutorialId: 'mining',
  },
  {
    contents: validatingSection,
    title: 'Validating',
    tutorialId: 'validating',
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
