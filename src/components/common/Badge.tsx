import { ReactNode } from 'react'

type BadgeProps = {
  label: string
  variant?: 'primary' | 'outline' | 'secondary' | 'neutral'
  color?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

export const Badge = ({
  label,
  variant = 'neutral',
  color = '',
  icon,
  iconPosition = 'left',
}: BadgeProps) => {
  const baseClass =
    'font-mono text-sm font-semibold inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md transition-all duration-300 border select-none'

  const variantClasses = {
    primary:
      'bg-accent-green/10 text-accent-green border-accent-green/30 hover:bg-accent-green/20',
    outline:
      'bg-transparent text-accent-green/90 border-accent-green/50 hover:border-accent-green hover:text-accent-green',
    secondary:
      'bg-accent-blue/10 text-accent-blue border-accent-blue/30 hover:bg-accent-blue/20',
    neutral:
      'bg-bg-editor/60 text-text-sub border-border-editor hover:border-text-hint hover:text-text-editor',
  }

  const selectedClass = color || variantClasses[variant]
  const className = `${baseClass} ${selectedClass}`

  return (
    <span className={className}>
      {icon && iconPosition === 'left' && (
        <span className="text-base shrink-0 flex items-center">{icon}</span>
      )}

      <span className="leading-none">{label}</span>

      {icon && iconPosition === 'right' && (
        <span className="text-base shrink-0 flex items-center">{icon}</span>
      )}
    </span>
  )
}
