'use client'

import React from 'react'
import { SiteStatsProvider } from './SiteStatsContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return <SiteStatsProvider>{children}</SiteStatsProvider>
}
