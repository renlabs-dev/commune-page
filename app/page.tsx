import { HeroSection, NamespacesSection, NetworkingSection, ReusabilitySection, ScalabilitySection, TokenomicsSection, ValidatorsSection } from "./components";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <NetworkingSection />
      <ReusabilitySection />
      <ScalabilitySection />
      <NamespacesSection />
      <TokenomicsSection />
      <ValidatorsSection />
    </main>
  )
}
