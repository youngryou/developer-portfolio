import { NextResponse } from 'next/server'
import {
  getSiteStats,
  incrementVisit,
  incrementLike,
  incrementClick,
} from '@/lib/queries'

export async function GET() {
  try {
    const stats = await getSiteStats()
    return NextResponse.json(stats)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 },
    )
  }
}

export async function POST(request: Request) {
  try {
    const { action } = await request.json()

    if (action === 'visit') {
      await incrementVisit()
    } else if (action === 'like') {
      await incrementLike()
    } else if (action === 'cv_click') {
      await incrementClick('cv_clicks')
    } else if (action === 'github_click') {
      await incrementClick('github_clicks')
    } else if (action === 'linkedin_click') {
      await incrementClick('linkedin_clicks')
    }

    const updatedStats = await getSiteStats()
    return NextResponse.json(updatedStats)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update stats' },
      { status: 500 },
    )
  }
}
