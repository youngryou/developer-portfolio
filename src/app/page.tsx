export const dynamic = 'force-dynamic'

import { Suspense } from 'react'

import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/stats/StatsSection'
import { ProjectsSection } from '@/components/sections/projects/ProjectsSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/contact/ContactSection'
import { SiteStatsButton } from '@/components/layout/SiteStatsButton'
import BackToTopButton from '@/components/common/BackToTopButton'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Suspense
        fallback={
          <div className="h-96 flex items-center justify-center">
            Loading Stats...
          </div>
        }
      >
        <StatsSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-96 flex items-center justify-center">
            Loading Projects...
          </div>
        }
      >
        <ProjectsSection />
      </Suspense>

      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <SiteStatsButton />
      <BackToTopButton />
    </main>
  )
}
