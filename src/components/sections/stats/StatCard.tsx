import { ReactNode } from 'react'

interface StatCardProps {
  title: string
  value: string | number
  icon?: ReactNode
  iconColor?: string
  hoverColor?: string
}

export const StatCard = ({
  title,
  value,
  icon,
  iconColor = 'text-accent-green',
  hoverColor = 'hover:border-accent-green',
}: StatCardProps) => {
  return (
    <div
      className={`bg-bg-editor border border-border-editor rounded-xl p-4 md:p-6 flex flex-col h-full items-center justify-center text-center transition-all transform duration-300 shadow-editor-card hover:-translate-y-1 ${hoverColor}`}
    >
      <div className={`text-4xl mb-4 shrink-0 ${iconColor}`}>{icon}</div>
      <h4 className="text-3xl md:text-4xl font-bold text-text-editor mb-2">
        {value}
      </h4>
      <p className="text-sm md:text-base text-text-sub">{title}</p>
    </div>
  )
}
