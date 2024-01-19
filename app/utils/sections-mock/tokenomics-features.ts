import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/20/solid'

export const tokenomicsFeatures = [
  {
    description: 'The modules will vote on each block at regular intervals.',
    icon: CloudArrowUpIcon,
  },
  {
    description: 'Tokens are allocated per vote every 6 seconds.',
    icon: LockClosedIcon,
  },
  {
    description:
      "The module's vote weight is determined by the amount staked on it.",
    icon: ArrowPathIcon,
  },
  {
    description:
      'Voters are incentivized to be Honest by Receiving Part of the Reward.',
    icon: FingerPrintIcon,
  },
  {
    description:
      'Half of the incentive that goes to the voted model gets distributed back to the voters based on their vote (stake*weight).',
    icon: FingerPrintIcon,
  },
  {
    description: 'This helps ensure honest voting to remove bias.',
    icon: FingerPrintIcon,
  },
]
