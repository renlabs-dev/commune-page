import Intro from './intro.mdx'
import SetupCommune from './setup-commune.mdx'
import CreateCommune from './create-commune.mdx'


const gettingStartedSection = [
  {
    component: <Intro />,
    href: `intro`,
    name: 'Introduction'
  },
  {
    component: <SetupCommune />,
    href: `setup-commune`,
    name: 'Setup Commune'
  },
]



const basicsSection = [
  {
    component: <CreateCommune />,
    href: `create-commune`,
    name: 'Create Commune'
  }
]


export const tutorials = [
  {
    contents: gettingStartedSection,
    title: 'Getting Started',
    tutorialId: 'getting-started'
  },
  {
    contents: basicsSection,
    title: 'Basics',
    tutorialId: 'basics'
  },
  {
    contents: [...basicsSection, ...gettingStartedSection],
    title: 'Mock',
    tutorialId: 'mocked'
  },
  {
    contents: [...basicsSection, ...gettingStartedSection],
    title: 'Mock',
    tutorialId: 'mocked'
  },
  {
    contents: [...basicsSection, ...gettingStartedSection],
    title: 'Mock',
    tutorialId: 'mocked'
  },
  {
    contents: [...basicsSection, ...gettingStartedSection],
    title: 'Mock',
    tutorialId: 'mocked'
  },
  {
    contents: [...basicsSection, ...gettingStartedSection],
    title: 'Mock',
    tutorialId: 'mocked'
  },
  {
    contents: [...basicsSection, ...gettingStartedSection],
    title: 'Mock',
    tutorialId: 'mocked'
  },
  {
    contents: [...basicsSection, ...gettingStartedSection],
    title: 'Mock',
    tutorialId: 'mocked'
  },
]
