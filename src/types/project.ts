export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  id: number
  sort_order: number
  title: string
  company: string
  date_range: string
  short_description: string
  demo_source: string
  category: string[]
  tech_stack: string[]
  details: string[]
  images: string[]
  links: ProjectLink[]
  created_at: string
  updated_at: string
}
