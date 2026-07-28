'use client'

import { useSiteStats } from '@/hooks/useSiteStats'
import { Button } from './Button'
import { TbBrandGithubFilled, TbBrandLinkedinFilled } from 'react-icons/tb'

interface SocialGroupProps {
  className?: string
}

export const SocialGroup = ({ className = '' }: SocialGroupProps) => {
  const { trackAction } = useSiteStats()

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <Button
        variant="link"
        label="GitHub"
        icon={TbBrandGithubFilled}
        href="https://github.com/youngryou"
        hoverColorClass="group-hover:text-accent-green"
        onClick={() => trackAction('github_click')}
      />
      <span className="text-text-hint/30 font-mono text-xs select-none">|</span>
      <Button
        variant="link"
        label="LinkedIn"
        icon={TbBrandLinkedinFilled}
        href="https://www.linkedin.com/in/young-ryou/"
        hoverColorClass="group-hover:text-accent-blue"
        onClick={() => trackAction('linkedin_click')}
      />
    </div>
  )
}
