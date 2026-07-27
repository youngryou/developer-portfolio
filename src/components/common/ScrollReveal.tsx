'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right'
  className?: string
}

export const ScrollReveal = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.15 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const getTransform = () => {
    if (isVisible) return 'translate-x-0 translate-y-0'
    switch (direction) {
      case 'up':
        return 'translate-y-12'
      case 'left':
        return '-translate-x-12'
      case 'right':
        return 'translate-x-12'
      default:
        return 'translate-y-12'
    }
  }

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${getTransform()} ${className}`}
    >
      {children}
    </div>
  )
}
