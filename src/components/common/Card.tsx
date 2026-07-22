import { ReactNode } from 'react'

type CardProps = {
  title: string
  description: string
  icon: ReactNode
  iconColor?: string
  hoverColor?: string
}

export const Card = ({
  title,
  description,
  icon,
  iconColor = 'text-accent-blue',
  hoverColor = 'hover:border-accent-blue',
}: CardProps) => {
  return (
    <div
      className={`bg-bg-editor border border-border-editor rounded-xl p-6 flex flex-col h-full transition-all transform duration-300 shadow-editor-card hover:-translate-y-1 ${hoverColor}`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`text-3xl shrink-0 ${iconColor}`}>{icon}</div>
        <h4 className="text-lg font-semibold text-text-editor m-0 leading-tight">
          {title}
        </h4>
      </div>
      <p className="text-text-sub text-sm leading-relaxed grow">
        {description}
      </p>
    </div>
  )
}
