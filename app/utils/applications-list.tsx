import Image from "next/image"
import { links } from "."

export const applicationsList =
  [
    {
      title: 'Governance',
      description: 'Community Proposals',
      href: links.governance,
      icon: <Image src={'/governance-icon.svg'} alt='Governance icon' width={75} height={75} className='w-10 mb-5' />,
    },
    {
      title: 'Docs',
      description: 'Dev Documentation',
      href: links.docs,
      icon: <Image src={'/docs-icon.svg'} alt='Docs icon' width={75} height={75} className='w-10 mb-5' />,
    },
    // {
    //   title: 'Updates',
    //   description: 'Stay current',
    //   href: links.updates,
    //   icon: <Image src={'/updates-icon.svg'} alt='Updates icon' width={75} height={75} className='w-10 mb-5' />,
    // },
    {
      title: 'Join Community',
      description: null,
      href: links.discord,
      icon: <Image src={'/community-icon.svg'} alt='Community icon' width={75} height={75} className='w-10 mb-5' />,
    },
  ]