'use client'

import { useEffect, useRef, useState } from 'react'

interface Language {
  name: string
  percentage: number
  color: string
}

export const StatGraph = ({ languages }: { languages: Language[] }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [percentages, setPercentages] = useState<Record<string, number>>({})
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)

      const newPercentages: Record<string, number> = {}
      languages.forEach((lang) => {
        newPercentages[lang.name] = Number(
          (lang.percentage * easeOut).toFixed(1),
        )
      })

      setPercentages(newPercentages)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, languages])

  return (
    <div ref={ref}>
      <div className="flex h-3 w-full rounded-full overflow-hidden mb-6 bg-bg-editor">
        {languages.map((lang) => (
          <div
            key={lang.name}
            style={{
              width: isVisible ? `${lang.percentage}%` : '0%',
              backgroundColor: lang.color,
            }}
            className="h-full transition-all duration-1000 ease-out"
            title={`${lang.name} ${lang.percentage}%`}
          />
        ))}
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm md:text-base">
        {languages.map((lang, index) => (
          <div
            key={lang.name}
            style={{ transitionDelay: `${index * 150}ms` }}
            className={`flex items-center gap-2 transition-all duration-500 ease-out ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-4'
            }`}
          >
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: lang.color }}
            />
            <span className="text-text-editor font-semibold">{lang.name}</span>
            <span className="text-text-hint">
              <span className="inline-block min-w-10">
                {percentages[lang.name] !== undefined
                  ? percentages[lang.name]
                  : 0}
              </span>
              %
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
