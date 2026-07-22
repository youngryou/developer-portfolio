import { Project } from '@/types/project'
import { Badge } from '@/components/common/Badge'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const thumbnail = project.images[0]

  return (
    <button className="group text-left w-full bg-bg-editor border border-border-editor rounded-xl overflow-hidden transition-all duration-300 shadow-editor-card hover:-translate-y-1 hover:border-accent-green cursor-pointer">
      <div className="aspect-video bg-bg-editor/80 overflow-hidden border-b border-border-editor">
        {thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumbnail}
            alt={`${project.title} thumbnail`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
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
