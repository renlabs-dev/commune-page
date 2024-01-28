import { Suspense } from 'react'
import { GenericSection, Header, HeroSection } from './components'
import { CallToActionSection } from './components/Sections/CallToAction'
import { sections } from './utils'
import Loading from './loading'

export default async function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Suspense fallback={<Loading />} >
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
        </div>
      </Suspense>
    </>
  )
}
