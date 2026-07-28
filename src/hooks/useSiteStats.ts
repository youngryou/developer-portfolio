'use client'

import { useState, useEffect, useCallback } from 'react'

export interface SiteStats {
  totalVisitors: number
  totalLikes: number
  contactCount: number
  todayVisitors: number
}

export function useSiteStats() {
  const [stats, setStats] = useState<SiteStats | null>(null)
  const [hasLiked, setHasLiked] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
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
        console.error('Failed to initialize site stats:', error)
      } finally {
        if (liked) setHasLiked(true)
        setIsLoading(false)
      }
    }

    fetchStats()

    const handleRefresh = async () => {
      try {
        const res = await fetch('/api/stats')
        if (res.ok) setStats(await res.json())
      } catch (error) {
        console.error('Failed to refresh stats:', error)
      }
    }
    window.addEventListener('refresh_site_stats', handleRefresh)
    return () => window.removeEventListener('refresh_site_stats', handleRefresh)
  }, [])

  const handleLike = useCallback(async () => {
    if (hasLiked) return

    setHasLiked(true)
    setStats((prev) =>
      prev ? { ...prev, totalLikes: prev.totalLikes + 1 } : null,
    )

    const res = await fetch('/api/stats', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'like' }),
    })

    if (res.ok) {
      localStorage.setItem('site_has_liked', 'true')
      const updatedStats = await res.json()
      setStats(updatedStats)

      window.dispatchEvent(new Event('refresh_site_stats'))
    } else {
      setHasLiked(false)
      setStats((prev) =>
        prev ? { ...prev, totalLikes: prev.totalLikes - 1 } : null,
      )
    }
  }, [hasLiked])

  return { stats, hasLiked, isLoading, handleLike }
}
