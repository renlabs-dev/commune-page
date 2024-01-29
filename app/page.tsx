import { GenericSection, Header, HeroSection } from './components'
import { CallToActionSection } from './components/Sections/CallToAction'
import { sections } from './utils'

export default async function Home() {
  return (
    <>
      <Header />
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
      </div>
    </>
  )
}
