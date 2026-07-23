import Image from 'next/image'
import { Project } from '@/types/project'
import { Badge } from '@/components/common/Badge'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
interface ProjectCardProps {
  project: Project
  onSelect: (project: Project) => void
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const thumbnail = project.images[0]

  return (
    <button
      onClick={() => onSelect(project)}
      className="group text-left w-full bg-bg-editor border border-border-editor rounded-xl overflow-hidden transition-all duration-300 shadow-editor-card hover:-translate-y-1 hover:border-accent-green cursor-pointer"
    >
      <div className="aspect-video relative bg-bg-editor/80 overflow-hidden border-b border-border-editor">
        {thumbnail ? (
          <>
            <Image
              src={thumbnail}
              alt={`${project.title} thumbnail`}
              fill
              unoptimized
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-accent-green opacity-20 mix-blend-multiply pointer-events-none transition-opacity duration-300 group-hover:opacity-0" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-text-hint text-base">
            {project.title}
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs md:text-sm text-accent-green/80 group-hover:text-accent-green">
            @ {project.company}
          </span>
          {project.date_range && (
            <span className="text-xs md:text-sm text-text-hint">
              {project.date_range}
            </span>
          )}
        </div>

        <h3 className="text-lg font-semibold text-text-editor mb-2 leading-snug">
          {project.title}
        </h3>

        <p className="text-sm text-text-sub leading-relaxed line-clamp-2">
          {project.short_description}
        </p>

        {project.tech_stack.length > 0 && (
          <div className="flex flex-wrap gap-1 md:gap-1.5 mt-4">
            {project.tech_stack.slice(0, 4).map((tech) => (
              <Badge
                key={tech}
                label={tech}
                variant="neutral"
                color="text-xs border-border-editor text-text-sub bg-bg-editor/60"
              />
            ))}

            {project.tech_stack.length > 4 && (
              <Badge
                label={`+${project.tech_stack.length - 4}`}
                variant="neutral"
                color="text-xs text-text-sub border-transparent bg-transparent"
              />
            )}
          </div>
        )}

        <div className="flex items-center justify-end gap-1 mt-4 text-sm font-semibold text-accent-green/70 group-hover:text-accent-green transition-colors">
          <span>View details</span>
          <MdKeyboardDoubleArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </button>
  )
}
