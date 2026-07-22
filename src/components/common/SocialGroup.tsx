import { TbBrandGithubFilled, TbBrandLinkedinFilled } from 'react-icons/tb'
import { Button } from './Button'

interface SocialGroupProps {
  className?: string
}

export const SocialGroup = ({ className = '' }: SocialGroupProps) => {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <Button
        variant="link"
        label="GitHub"
        icon={TbBrandGithubFilled}
        href="https://github.com/youngryou"
        hoverColorClass="group-hover:text-accent-green"
      />
      <span className="text-text-hint/30 font-mono text-xs select-none">|</span>
      <Button
        variant="link"
        label="LinkedIn"
        icon={TbBrandLinkedinFilled}
        href="https://www.linkedin.com/in/young-ryou/"
        hoverColorClass="group-hover:text-accent-blue"
      />
    </div>
  )
}
