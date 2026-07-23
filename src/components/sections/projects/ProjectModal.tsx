'use client'

import { useEffect, useCallback } from 'react'
import { IconType } from 'react-icons'
import { Project } from '@/types/project'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'
import ProjectImageSlider from './ProjectImageSlider'
import { TbX, TbExternalLink, TbBrandGithubFilled } from 'react-icons/tb'
import { PiGlobeSimple, PiGlobeSimpleX } from 'react-icons/pi'
import { BiCoinStack, BiDetail, BiLink, BiPlayCircle } from 'react-icons/bi'

interface ProjectModalProps {
  project: Project
  isOpen: boolean
  onClose: () => void
}

interface LinkStyles {
  icon: IconType
  color: string
}

function getLinkIcon(labelName: string | null): LinkStyles {
  switch (labelName) {
    case 'GitHub Repo':
      return {
        icon: TbBrandGithubFilled,
        color: 'text-accent-green',
      }
    case 'Live Demo':
      return {
        icon: PiGlobeSimple,
        color: 'text-accent-blue',
      }
    case 'Launch Pending':
      return {
        icon: PiGlobeSimpleX,
        color: 'text-accent-yellow',
      }
    default:
      return {
        icon: TbExternalLink,
        color: 'text-text-sub',
      }
  }
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose],
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  return (
    <>
      <div
        className={`fixed inset-0 z-60 bg-accent-green/2 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 z-70 h-full w-full max-w-3xl bg-bg-editor/80 border-l border-border-editor shadow-2xl transform transition-transform duration-300 ease-out overflow-y-auto scrollbar-thumb-accent-green scrollbar-thin ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-bg-editor/90 border border-border-editor text-text-sub hover:text-text-editor hover:border-text-hint hover:rotate-90 transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <TbX className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8 pt-16 md:pt-18">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm md:text-base text-accent-green">
              @ {project.company}
            </span>
            {project.date_range && (
              <span className="text-xs md:text-base text-text-hint">
                {project.date_range}
              </span>
            )}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-text-editor mb-4">
            {project.title}
          </h2>

          <p className="text-sm text-text-sub leading-relaxed mb-6">
            {project.short_description}
          </p>

          {project.images.length > 0 && (
            <div className="mb-6">
              <ProjectImageSlider images={project.images} />
            </div>
          )}

          {project.demo_source && (
            <div className="border-t border-border-editor pt-6 my-6">
              <h4 className="text-base font-semibold text-text-editor mb-3 flex items-center gap-2">
                <BiPlayCircle className="w-4 h-4 text-accent-green" />
                Demo Video
              </h4>
              <div className="rounded-lg overflow-hidden border border-border-editor bg-black/80">
                <video
                  controls
                  className="w-full aspect-video"
                  poster={project.images[0] ?? undefined}
                >
                  <source src={project.demo_source} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}

          {project.tech_stack.length > 0 && (
            <div className="border-t border-border-editor pt-6 my-6">
              <h4 className="text-base font-semibold text-text-editor mb-3 flex items-center gap-2">
                <BiCoinStack className="w-4 h-4 text-accent-green" />
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech_stack.map((tech) => (
                  <Badge
                    key={tech}
                    label={tech}
                    variant="neutral"
                    color="border-border-editor text-text-sub bg-bg-editor/60"
                  />
                ))}
              </div>
            </div>
          )}

          {project.details.length > 0 && (
            <div className="border-t border-border-editor pt-6 my-6">
              <h4 className="text-base font-semibold text-text-editor mb-3 flex items-center gap-2">
                <BiDetail className="w-4 h-4 text-accent-green" />
                Details
              </h4>
              <ul className="space-y-2">
                {project.details.map((detail, index) => (
                  <li
                    key={`${detail}-${index}`}
                    className="flex gap-2 text-sm text-text-sub leading-relaxed"
                  >
                    <span className="text-accent-green shrink-0">▸</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.links.length > 0 && (
            <div className="border-t border-border-editor pt-6 mt-8">
              <h4 className="text-base font-semibold text-text-editor mb-3 flex items-center gap-2">
                <BiLink className="w-4 h-4 text-accent-green" />
                Project Links
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.links.map((link, index) => {
                  const { icon: LinkIcon, color: linkColor } = getLinkIcon(
                    link.label,
                  )

                  return (
                    <Button
                      key={`${link.url}-${index}`}
                      variant="secondary"
                      label={link.label}
                      icon={LinkIcon}
                      href={link.url}
                      hoverColorClass={linkColor}
                    />
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
