'use client'

import { useSiteStats } from '@/hooks/useSiteStats'
import { TbHeartFilled, TbHeart, TbUsers, TbMail } from 'react-icons/tb'
import { PiEye } from 'react-icons/pi'

export function FooterStats() {
  const { stats, hasLiked, isLoading, handleLike } = useSiteStats()

  if (isLoading || !stats) {
    return <div className="h-6" />
  }

  const itemClass =
    'flex items-center gap-1.5 px-2 md:px-3 text-text-sub hover:text-text-editor transition-colors select-none'

  return (
    <div className="flex items-center justify-center mb-6 md:mb-8">
      <div className="inline-flex items-center text-xs md:text-sm overflow-hidden">
        <div
          className={itemClass}
          title={`Today's Visitors: ${stats.todayVisitors.toLocaleString()}`}
        >
          <PiEye className="text-accent-blue" />
          <span>Today {stats.todayVisitors.toLocaleString()}</span>
        </div>

        <div className="w-px h-3.5 bg-border-editor" />

        <div
          className={itemClass}
          title={`Total Visitors: ${stats.totalVisitors.toLocaleString()}`}
        >
          <TbUsers className="text-accent-green" />
          <span>Total {stats.totalVisitors.toLocaleString()}</span>
        </div>

        <div className="w-px h-3.5 bg-border-editor" />

        <div
          className={itemClass}
          title={`Contacts: ${stats.contactCount.toLocaleString()}`}
        >
          <TbMail className="text-accent-yellow" />
          <span>Contact {stats.contactCount.toLocaleString()}</span>
        </div>

        <div className="w-px h-3.5 bg-border-editor" />

        <button
          onClick={handleLike}
          disabled={hasLiked}
          className={`flex items-center gap-1.5 px-3 py-1.5 transition-colors select-none ${
            hasLiked
              ? 'text-accent-red cursor-default'
              : 'text-text-sub hover:text-accent-red cursor-pointer'
          }`}
          title={
            hasLiked ? "You've already liked this!" : 'Like this portfolio'
          }
        >
          {hasLiked ? (
            <TbHeartFilled className="text-sm text-accent-red" />
          ) : (
            <TbHeart className="animate-pulse" />
          )}
          <span>Likes {stats.totalLikes.toLocaleString()}</span>
        </button>
      </div>
    </div>
  )
}
