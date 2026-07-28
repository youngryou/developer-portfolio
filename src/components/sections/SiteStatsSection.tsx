'use client'

import { useSiteStats } from '@/hooks/useSiteStats'
import { LuUserCheck, LuUsers, LuHeart, LuMessageSquare } from 'react-icons/lu'

export function SiteStatsSection() {
  const { stats, hasLiked, isLoading, handleLike } = useSiteStats()

  if (isLoading || !stats) {
    return <div className="h-6" />
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-text-hint font-mono mt-8 mb-4">
      <span className="flex items-center gap-1.5" title="Today's Visitors">
        <LuUserCheck className="text-sm md:text-base text-accent-green" />
        <span>Today: {stats.todayVisitors.toLocaleString()}</span>
      </span>

      <span className="hidden sm:inline text-border-editor">|</span>

      <span className="flex items-center gap-1.5" title="Total Visitors">
        <LuUsers className="text-sm md:text-base" />
        <span>Total: {stats.totalVisitors.toLocaleString()}</span>
      </span>

      <span className="hidden sm:inline text-border-editor">|</span>

      <button
        onClick={handleLike}
        disabled={hasLiked}
        className={`flex items-center gap-1.5 transition-colors duration-300 ${
          hasLiked
            ? 'text-accent-red cursor-default'
            : 'hover:text-accent-red cursor-pointer'
        }`}
        title={hasLiked ? "You've already liked this!" : 'Like this portfolio'}
      >
        <LuHeart
          className={`text-sm md:text-base text-accent-red transition-all duration-300 ${
            hasLiked ? 'fill-accent-red scale-110' : 'animate-pulse'
          }`}
        />
        <span>Likes: {stats.totalLikes.toLocaleString()}</span>
      </button>
      <span className="hidden sm:inline text-border-editor">|</span>

      <span className="flex items-center gap-1.5" title="Total Contacts">
        <LuMessageSquare className="text-sm md:text-base" />
        <span>Contacts: {stats.contactCount.toLocaleString()}</span>
      </span>
    </div>
  )
}
