import { getAllProjects } from '@/lib/queries'

export const ProjectsSection = async () => {
  const projects = await getAllProjects()

  return (
    <section
      id="projects"
      className="pt-18 pb-12 md:pt-28 md:pb-18 bg-accent-blue/2"
    >
      <div className="mb-18 max-w-5xl mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Projects</h2>

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
      </div>
    </section>
  )
}
