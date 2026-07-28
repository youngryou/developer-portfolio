import { useContext } from 'react'
import { SiteStatsContext } from '@/context/SiteStatsContext'

export function useSiteStats() {
  const context = useContext(SiteStatsContext)
  if (context === undefined) {
    throw new Error('useSiteStats must be used within a SiteStatsProvider')
  }
  return context
}
