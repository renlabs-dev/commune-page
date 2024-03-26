import { Suspense } from 'react'
import {
  GenericSection,
  HeroSection,
  CallToActionSection,
  FrequentQuestions,
  Footer,
} from './components'
import Loading from './loading'
import { sections } from './utils'
import { WelcomeSection } from './components/Sections'

export default async function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <HeroSection />
      <WelcomeSection />
      <CallToActionSection />
      {sections.map((section, index) => {
        return (
          <GenericSection
            key={index}
            index={index}
            sectionName={section.sectionName}
            title={section.title}
            subtitle={section.subtitle}
            bgColor={section.bgColor}
            color={section.color}
            features={section.features}
            iconSrc={section.iconSrc}
          />
        )
      })}
      <FrequentQuestions />
      {/* <Footer /> */}
    </Suspense>
  )
}
