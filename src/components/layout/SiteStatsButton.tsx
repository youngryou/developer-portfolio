'use client'

import { useEffect, useState } from 'react'
import { useSiteStats } from '@/hooks/useSiteStats'
import { TbHeartFilled, TbHeart, TbUsers, TbMail } from 'react-icons/tb'
import { PiEye } from 'react-icons/pi'

export function SiteStatsButton() {
  const { stats, hasLiked, isLoading, handleLike } = useSiteStats()
  const [isOpen, setIsOpen] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleShowButton = () => {
      setShow(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleShowButton)
    return () => window.removeEventListener('scroll', handleShowButton)
  }, [])

  if (!show) return null
  if (isLoading || !stats) return null

  return (
    <div
      className="fixed bottom-6 left-6 flex flex-col items-start gap-2 z-50"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`absolute bottom-full left-0 mb-2 md:mb-3 bg-bg-editor border border-border-editor rounded-xl p-4 shadow-2xl transition-all duration-300 flex flex-col gap-3 min-w-40 ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="flex items-center gap-2 text-text-sub">
            <PiEye className="text-sm text-accent-blue" /> Today
          </span>
          <span className="font-mono text-text-editor font-medium">
            {stats.todayVisitors.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="flex items-center gap-2 text-text-sub">
            <TbUsers className="text-sm text-accent-green" /> Total
          </span>
          <span className="font-mono text-text-editor font-medium">
            {stats.totalVisitors.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="flex items-center gap-2 text-text-sub">
            <TbMail className="text-sm text-accent-yellow" /> Contacts
          </span>
          <span className="font-mono text-text-editor font-medium">
            {stats.contactCount.toLocaleString()}
          </span>
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation()
          if (hasLiked) {
            setIsOpen(!isOpen)
            return
          }
          handleLike()
        }}
        className={`flex items-center p-2 md:p-3 rounded-xl border shadow-xl transition-all duration-300 ${
          hasLiked
            ? 'bg-bg-editor border-accent-red/20 text-accent-red cursor-pointer'
            : 'bg-bg-editor border-border-editor text-text-sub hover:text-accent-red hover:border-accent-red/30 cursor-pointer'
        }`}
        aria-label="Like this portfolio"
      >
        {hasLiked ? (
          <TbHeartFilled className="text-lg md:text-xl" />
        ) : (
          <TbHeart className="text-lg md:text-xl animate-pulse" />
        )}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out flex items-center ${
            isOpen ? 'max-w-25 opacity-100 ml-2' : 'max-w-0 opacity-0 ml-0'
          }`}
        >
          <span className="text-sm whitespace-nowrap">
            Likes {stats.totalLikes.toLocaleString()}
          </span>
        </div>
      </button>
    </div>
  )
}
