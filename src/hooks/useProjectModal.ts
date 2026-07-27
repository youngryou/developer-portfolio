'use client'

import { useState, useCallback } from 'react'
import { Project } from '@/types/project'

export function useProjectModal() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isMediaLoading, setIsMediaLoading] = useState(false)

  const openModal = useCallback((project: Project) => {
    setSelectedProject(project)
    setIsOpen(true)
    setIsMediaLoading(true)

    setTimeout(() => {
      setIsMediaLoading(false)
    }, 500)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    setTimeout(() => {
      setSelectedProject(null)
      setIsMediaLoading(false)
    }, 300)
  }, [])

  return {
    selectedProject,
    isOpen,
    isMediaLoading,
    setIsMediaLoading,
    openModal,
    closeModal,
  }
}
