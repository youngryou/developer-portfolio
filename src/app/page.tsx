import { HeroSection } from '@/components/sections/HeroSection'
import { ProjectsSection } from '@/components/sections/projects/ProjectsSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/contact/ContactSection'
import BackToTopButton from '@/components/common/BackToTopButton'
import { StatsSection } from '@/components/sections/stats/StatsSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <BackToTopButton />
    </main>
  )
}
