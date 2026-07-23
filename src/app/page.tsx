import { HeroSection } from '@/components/sections/HeroSection'
import { ProjectsSection } from '@/components/sections/projects/ProjectsSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { AboutSection } from '@/components/sections/AboutSection'
import BackToTopButton from '@/components/common/BackToTopButton'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <BackToTopButton />
    </main>
  )
}
