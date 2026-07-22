'use client'

import Link from 'next/link'
import { useScrollToTop } from '@/hooks/useScrollToTop'

interface LogoProps {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  const scrollToTop = useScrollToTop()

  return (
    <Link
      href="/"
      onClick={(e) => {
        e.preventDefault()
        scrollToTop()
      }}
      className={`flex items-center font-mono text-xl md:text-2xl font-medium tracking-tight select-none cursor-pointer ${className}`}
    >
      <span className="text-accent-green mr-2 font-bold">&gt;</span>

      <span className="text-text-editor hover:text-accent-green font-semibold">
        Young Ryou
      </span>

      <span className="text-text-hint ml-1.5 font-light text-xs md:text-sm">
        Portfolio
      </span>

      <span className="text-accent-green ml-1 font-bold animate-blink">_</span>
    </Link>
  )
}
