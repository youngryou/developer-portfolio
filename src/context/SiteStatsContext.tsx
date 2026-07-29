'use client'

import React, { createContext, useState, useEffect, useCallback } from 'react'

export interface SiteStats {
  totalVisitors: number
  totalLikes: number
  contactCount: number
  todayVisitors: number
  cvClicks: number
  githubClicks: number
  linkedinClicks: number
}

interface SiteStatsContextType {
  stats: SiteStats | null
  hasLiked: boolean
  isLoading: boolean
  handleLike: () => Promise<void>
  trackAction: (
    action: 'cv_click' | 'github_click' | 'linkedin_click',
  ) => Promise<void>
  fetchStats: () => Promise<void>
}

export const SiteStatsContext = createContext<SiteStatsContextType | undefined>(
  undefined,
)

export function SiteStatsProvider({ children }: { children: React.ReactNode }) {
  const [stats, setStats] = useState<SiteStats | null>(null)
  const [hasLiked, setHasLiked] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const fetchStats = useCallback(async () => {
    const today = new Date().toISOString().split('T')[0]
    const lastVisit = localStorage.getItem('site_last_visit')
    const liked = localStorage.getItem('site_has_liked') === 'true'

    try {
      if (lastVisit !== today) {
        const res = await fetch('/api/stats', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'visit' }),
        })
        if (res.ok) {
          localStorage.setItem('site_last_visit', today)
          setStats(await res.json())
        }
      } else {
        const res = await fetch('/api/stats')
        if (res.ok) setStats(await res.json())
      }
    } catch (error) {
      console.error('Failed to initialise site stats:', error)
    } finally {
      if (liked) setHasLiked(true)
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    const init = async () => {
      await fetchStats()
    }
    init()
  }, [fetchStats])

  const handleLike = useCallback(async () => {
    if (hasLiked) return

    setHasLiked(true)
    setStats((prev) =>
      prev ? { ...prev, totalLikes: prev.totalLikes + 1 } : null,
    )

    try {
      const res = await fetch('/api/stats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'like' }),
      })

      if (res.ok) {
        localStorage.setItem('site_has_liked', 'true')
        setStats(await res.json())
      } else {
        throw new Error('Failed to update likes')
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setHasLiked(false)
      setStats((prev) =>
        prev ? { ...prev, totalLikes: prev.totalLikes - 1 } : null,
      )
    }
  }, [hasLiked])

  const trackAction = useCallback(
    async (action: 'cv_click' | 'github_click' | 'linkedin_click') => {
      setStats((prev) => {
        if (!prev) return prev
        const key =
          action === 'cv_click'
            ? 'cvClicks'
            : action === 'github_click'
              ? 'githubClicks'
              : 'linkedinClicks'
        return { ...prev, [key]: prev[key] + 1 }
      })

      fetch('/api/stats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action }),
      }).catch(console.error)
    },
    [],
  )

  return (
    <SiteStatsContext.Provider
      value={{
        stats,
        hasLiked,
        isLoading,
        handleLike,
        trackAction,
        fetchStats,
      }}
    >
      {children}
    </SiteStatsContext.Provider>
  )
}
