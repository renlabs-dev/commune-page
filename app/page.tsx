import { GenericSection, Header, HeroSection } from './components'
import { sections } from './utils'

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <HeroSection />
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
      </main>
    </>
  )
}
