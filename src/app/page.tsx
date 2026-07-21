import BackToTopButton from '@/components/common/BackToTopButton'
import { AboutSection } from '@/components/sections/AboutSection'
import { HeroSection } from '@/components/sections/HeroSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <BackToTopButton />
    </main>
  )
}
