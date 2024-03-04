import { Suspense } from 'react'
import {
  GenericSection,
  HeroSection,
  CallToActionSection,
  FrequentQuestions,
  Header,
  Footer,
} from './components'
import Loading from './loading'
import { sections } from './utils'

export default async function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <div className='flex flex-col items-center'>
        <HeroSection />

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
      <Footer />
    </Suspense>
  )
}
