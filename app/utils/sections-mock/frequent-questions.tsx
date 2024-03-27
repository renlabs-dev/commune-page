import Link from "next/link";
import { links } from "..";

type THyperLink = {
  children?: React.ReactNode,
  href: string
}

const Hyperlink = (props: THyperLink) => {
  const {
    children,
    href
  } = props;

  return (
    <Link
      target="_blank"
      href={href}
      className="text-blue-600 hover:underline"
    >
      {children}
    </Link>
  )
}

export const faqData = [
  {
    question: 'What is Commune and its philosophy?',
    answer:
      'Commune is a censorship resistant peer to peer protocol leveraging cryptoeconomic incentives for the decentralized creation and access of machine intelligence and other digital commodities. Commune follows a radically OpenSource and modular design philosophy centered around cooperation, sharing and reusability of resources.',
  },
  {
    question: 'Who is founder of CommuneAI?',
    answer:
      'CommuneAI follows a zero bureaucracy only code, zero founders only devs philosophy and is community driven at its heart. That being said, originator and core developer is Sal Vivona, a physicist and machine learning engineer who quit big tech 3 years ago to fulltime focus on Commune. He discovered Bittensor and joined the OpenTensor foundation as a developer until he eventually quit to pursue Commune fully again.',
  },
  {
    question: 'What makes commune unusual compared to other projects?',
    answer: 'Commune is cypherpunk at heart, wild and fully organic. There is no bureaucracy, foundation or VCs. only opensource code and developers making public contributions.',
  },
  {
    question: 'How can AI and Blockchain work together at scale on Commune?',
    answer:
      `Commune's blockchain only tracks the economic information of the AI activity rather than the AI activity itself. The AI validation happens offchain and only its results are submitted to the chain. This separates the computation heavy elements from the chain.`,
  },
  {
    question: 'What is the utility of $COMAI?',
    answer:
      "COMAI Validator Stake controls the incentive landscape of miners. Stake is essentially ownership over the workforce of miners, making them compete around serving the demands of Stakeholders with supply. Giving Stake access to an ever changing and growing array of digital commodities like AI.",
  },
  {
    question: 'How to buy $COMAI?',
    answer:
      <span>Currently you can buy COMAI on <Hyperlink href="https://app.uniswap.org/explore/tokens/ethereum/0xc78b628b060258300218740b1a7a5b3c82b3bd9f">uniswap (WCOMAI)</Hyperlink>, <Hyperlink href="https://comswap.io/">Comswap</Hyperlink>, and <Hyperlink href="https://www.mexc.com/price/COMAI?calculatorTab=trade">MEXC</Hyperlink>.</span>,
  },
  {
    question: 'How to set up a wallet, stake and unstake COM Tokens?',
    answer: <span>Please refer to <Hyperlink href="https://www.youtube.com/watch?v=JrQKG7ko14M&t=2s">Omnipotent Labs&apos; Tutorial</Hyperlink>.</span>,
  },
  {
    question: 'What are the tokenomics of $COMAI?',
    answer: "COMAI launched fairly without premine, meaning the founder mines in the open network like everyone else. Emissions are split 50/50 between validators and miners. validators earn dividends on stake for producing evaluations of miners, while miners earn incentive by receiving good evaluations from validators.",
  },
  {
    question: 'What is the emission schedule for $COMAI?',
    answer:
      'Halvings happen every 250m mined coins, first halving is on 19th december 2025.',
  },
  {
    question: 'What is the current token emission?',
    answer:
      `It's 250k tokens/daily.`,
  },
  {
    question: 'What is the total supply of COM tokens?',
    answer:
      `It's 1 billion.`,
  },
  {
    question: 'How can I get started?',
    answer:
      <span>Please refer to our <Hyperlink href="https://commune-t.pages.dev/docs/next/Introduction">introduction page</Hyperlink> where you can find all details.</span>,
  },
  {
    question: 'Are there YouTube videos about Commune?',
    answer:
      <span>Yes! <Hyperlink href="https://www.youtube.com/@omnipotentlabs">Omnipotent Labs</Hyperlink> produces regular Commune content to stay up to date.</span>,
  },
  {
    question: 'What is the roadmap of Commune?',
    answer:
      `Commune is emerging in a decentralised manner, meaning it is formed by the contributions of many different independent people who commit code or try to convince the community to implement an idea. This makes the conventional concept of a roadmap unapplicable. However the goal for the community will always be to increase the prosperity of the protocol by improving its mechanisms and the value produced by miners and validators, while keeping it as fair and decentralized as possible. So at large we will likely always work towards that direction.`,
  },
  {
    question: 'How can I help?',
    answer:
      <span>There are many creative ways to help Commune, join our <Hyperlink href={links.discord}>Discord</Hyperlink> and start a discussion! </span>,
  },
]
