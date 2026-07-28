'use client'

import { useState, useRef } from 'react'
import { useSiteStats } from '@/hooks/useSiteStats'
import { FooterStats } from './FooterStats'
import { SocialGroup } from '../common/SocialGroup'
import { TbX } from 'react-icons/tb'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { stats } = useSiteStats()
  const [showAdmin, setShowAdmin] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const handlePressStart = () => {
    timerRef.current = setTimeout(() => {
      setShowAdmin(true)
    }, 1000)
  }

  const handlePressEnd = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
  }

  return (
    <>
      <footer className="pt-4 pb-8 text-sm text-text-hint border-t border-border-editor mt-20">
        <FooterStats />

        <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto px-6 md:px-8 gap-4">
          <p
            onMouseDown={handlePressStart}
            onMouseUp={handlePressEnd}
            onTouchStart={handlePressStart}
            onTouchEnd={handlePressEnd}
            className="cursor-default select-none"
          >
            &copy; {currentYear} Young Ryou. All rights reserved.
          </p>
          <SocialGroup />
        </div>
      </footer>

      {showAdmin && stats && (
        <div
          className="fixed inset-0 z-100 bg-bg-editor flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setShowAdmin(false)}
        >
          <div
            className="relative bg-bg-editor border border-border-editor rounded-xl p-6 md:p-8 max-w-sm w-full shadow-editor-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowAdmin(false)}
              className="absolute top-4 right-4 z-10 m-1 md:m-3 text-text-sub hover:text-text-editor hover:rotate-90 transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <TbX className="text-xl" />
            </button>

            <h3 className="text-xl font-bold text-accent-green mb-4 border-b border-border-editor pb-2">
              Admin Stats
            </h3>
            <ul className="space-y-3 text-sm text-text-sub">
              <li className="flex justify-between">
                <span>CV Clicks:</span>{' '}
                <span className="text-text-editor font-bold">
                  {stats.cvClicks}
                </span>
              </li>
              <li className="flex justify-between">
                <span>GitHub Clicks:</span>{' '}
                <span className="text-text-editor font-bold">
                  {stats.githubClicks}
                </span>
              </li>
              <li className="flex justify-between">
                <span>LinkedIn Clicks:</span>{' '}
                <span className="text-text-editor font-bold">
                  {stats.linkedinClicks}
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
