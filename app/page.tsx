import { Suspense } from 'react'
import {
  GenericSection,
  HeroSection,
  FrequentQuestions,
} from './components'
import { CallToActionSection } from './components/Sections/CallToAction'
import Loading from './loading'
import { sections } from './utils'

export default async function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <HeroSection />
      <div className='mx-8 flex flex-col items-center'>
        <CallToActionSection />
        {sections.map((section, index) => {
          return (
            <GenericSection
              key={index}
              sectionName={section.sectionName}
              title={section.title}
              subtitle={section.subtitle}
              color={section.color}
              features={section.features}
              gradientColor={section.gradientColor}
            />
          )
        })}
        <FrequentQuestions />
      </div>
    </Suspense>
  )
}
