'use client'

import { Project } from '@/types/project'
import { useProjectModal } from '@/hooks/useProjectModal'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

interface ProjectsGridProps {
  projects: Project[]
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const { selectedProject, isOpen, openModal, closeModal } = useProjectModal()

  if (projects.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-text-hint text-base">No projects to display yet.</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={openModal}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isOpen}
          onClose={closeModal}
        />
      )}
    </>
  )
}
