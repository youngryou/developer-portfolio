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
