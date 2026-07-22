import BackToTopButton from '@/components/common/BackToTopButton'
import { AboutSection } from '@/components/sections/AboutSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { SkillsSection } from '@/components/sections/SkillsSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <BackToTopButton />
    </main>
  )
}
