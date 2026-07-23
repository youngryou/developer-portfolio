'use client'

import { useState, useCallback } from 'react'
import { Project } from '@/types/project'

export function useProjectModal() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const openModal = useCallback((project: Project) => {
    setSelectedProject(project)
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }, [])

  return {
    selectedProject,
    isOpen,
    openModal,
    closeModal,
  }
}
