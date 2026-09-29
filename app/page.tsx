import { HeroSection } from '@/components/home/hero-section'
import { ServicesSection } from '@/components/home/services-section'
import { GlobalReachSection } from '@/components/home/global-reach-section'
import { WhyChooseSection } from '@/components/home/why-choose-section'
import { CtaBanner } from '@/components/cta-banner'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <GlobalReachSection />
      <WhyChooseSection />
      <CtaBanner />
    </main>
  )
}
