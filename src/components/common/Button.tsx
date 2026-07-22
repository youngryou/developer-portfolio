import { IconType } from 'react-icons'

interface ButtonProps {
  variant: 'primary' | 'outline' | 'secondary' | 'link'
  label: string
  icon?: IconType
  href?: string
  onClick?: () => void
  hoverColorClass?: string
}

export const Button = ({
  variant,
  label,
  icon: Icon,
  href,
  onClick,
  hoverColorClass = '',
}: ButtonProps) => {
  const baseClass =
    'group font-mono text-sm inline-flex items-center gap-2 rounded transition-all duration-300 transform select-none cursor-pointer'

  const variantClasses = {
    primary:
      'px-6 py-3 bg-accent-green text-bg-editor font-semibold border border-accent-green hover:bg-transparent hover:text-accent-green hover:-translate-y-0.5 shadow-[0_0_20px_rgba(89,218,130,0.15)] hover:shadow-[0_0_25px_rgba(89,218,130,0.3)]',
    outline:
      'px-6 py-3 border border-accent-green/80 text-accent-green/90 font-semibold bg-transparent hover:bg-accent-green hover:text-bg-editor hover:border-accent-green hover:-translate-y-0.5 shadow-[0_0_15px_rgba(89,218,130,0.02)] hover:shadow-[0_0_25px_rgba(89,218,130,0.3)]',
    secondary:
      'px-4 py-2 border border-border-editor bg-bg-editor/40 text-text-sub hover:text-text-editor hover:border-text-hint',
    link: 'px-2 py-1 text-text-hint hover:text-text-editor bg-transparent',
  }

  const className = `${baseClass} ${variantClasses[variant]}`

  const renderContent = () => (
    <>
      {Icon && (
        <Icon
          className={`w-5 h-5 transition-colors duration-300 ${hoverColorClass || 'text-current'}`}
        />
      )}
      {label}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {renderContent()}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={className}>
      {renderContent()}
    </button>
  )
}
