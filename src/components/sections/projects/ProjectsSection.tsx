import { getAllProjects } from '@/lib/queries'
import { Project } from '@/types/project'
import { Card } from '@/components/common/Card'
import { SocialGroup } from '@/components/common/SocialGroup'
import { RiAlarmWarningLine } from 'react-icons/ri'

export const ProjectsSection = async () => {
  let projects: Project[] = []
  let isError = false

  try {
    projects = await getAllProjects()
  } catch {
    isError = true
  }

  const projectError = {
    title: 'Projects are currently unavailable',
    description:
      'Please visit my GitHub or LinkedIn to see the details of my recent works.',
    icon: <RiAlarmWarningLine />,
  }

  return (
    <section
      id="projects"
      className="pt-18 pb-12 md:pt-28 md:pb-18 bg-accent-blue/2"
    >
      <div className="mb-18 max-w-5xl mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Projects</h2>

        {isError ? (
          <Card
            key={projectError.title}
            title={projectError.title}
            description={projectError.description}
            icon={projectError.icon}
            iconColor="text-accent-yellow"
            hoverColor="group hover:border-accent-yellow"
          >
            <SocialGroup className="mt-6" />
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="text-text-editor border border-border-editor p-4 rounded"
              >
                <p>
                  Ready to render:{' '}
                  <span className="text-accent-blue font-semibold">
                    {project.title}
                  </span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
