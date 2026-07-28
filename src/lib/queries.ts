import { Project } from '@/types/project'
import { query } from './db'

export async function getAllProjects(): Promise<Project[]> {
  const projectsResult = await query(
    'SELECT * FROM projects ORDER BY sort_order ASC',
  )

  const projects: Project[] = projectsResult.rows.map((row) => ({
    id: row.id,
    sort_order: row.sort_order,
    title: row.title,
    company: row.company,
    date_range: row.date_range,
    short_description: row.short_description,
    demo_source: row.demo_source,
    category: row.category ?? [],
    tech_stack: row.tech_stack ?? [],
    details: row.details ?? [],
    images: row.images ?? [],
    links: row.links ?? [],
    created_at: row.created_at,
    updated_at: row.updated_at,
  }))

  return projects
}

export async function getProjectById(id: number): Promise<Project | null> {
  const projectResult = await query('SELECT * FROM projects WHERE id = $1', [
    id,
  ])

  if (projectResult.rows.length === 0) {
    return null
  }

  const row = projectResult.rows[0]

  return {
    id: row.id,
    sort_order: row.sort_order,
    title: row.title,
    company: row.company,
    date_range: row.date_range,
    short_description: row.short_description,
    demo_source: row.demo_source,
    category: row.category ?? [],
    tech_stack: row.tech_stack ?? [],
    details: row.details ?? [],
    images: row.images ?? [],
    links: row.links ?? [],
    created_at: row.created_at,
    updated_at: row.updated_at,
  }
}

export async function getSiteStats() {
  const globalResult = await query('SELECT * FROM global_stats WHERE id = 1')
  const dailyResult = await query(
    'SELECT visitors_count FROM daily_visitors WHERE visit_date = CURRENT_DATE',
  )

  return {
    totalVisitors: globalResult.rows[0]?.total_visitors || 0,
    totalLikes: globalResult.rows[0]?.total_likes || 0,
    contactCount: globalResult.rows[0]?.contact_count || 0,
    todayVisitors: dailyResult.rows[0]?.visitors_count || 0,
  }
}

export async function incrementVisit() {
  await query(
    'UPDATE global_stats SET total_visitors = total_visitors + 1 WHERE id = 1',
  )
  await query(`
    INSERT INTO daily_visitors (visit_date, visitors_count) 
    VALUES (CURRENT_DATE, 1) 
    ON CONFLICT (visit_date) 
    DO UPDATE SET visitors_count = daily_visitors.visitors_count + 1
  `)
}

export async function incrementLike() {
  await query(
    'UPDATE global_stats SET total_likes = total_likes + 1 WHERE id = 1',
  )
}

export async function incrementContactCount() {
  await query(
    'UPDATE global_stats SET contact_count = contact_count + 1 WHERE id = 1',
  )
}
