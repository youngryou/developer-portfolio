export const dynamic = 'force-dynamic'

import { Suspense } from 'react'

import { HeroSection } from '@/components/sections/HeroSection'
import { ProjectsSection } from '@/components/sections/projects/ProjectsSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/contact/ContactSection'
import BackToTopButton from '@/components/common/BackToTopButton'
import { StatsSection } from '@/components/sections/stats/StatsSection'
import { SiteStatsSection } from '@/components/sections/SiteStatsSection'

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
      <SiteStatsSection />
      <BackToTopButton />
    </main>
  )
}
