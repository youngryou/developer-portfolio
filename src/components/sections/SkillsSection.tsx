import { Badge } from '../common/Badge'
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiAstro,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiSupabase,
  SiClerk,
  SiDigitalocean,
  SiWordpress,
  SiHtml5,
  SiCss,
  SiNextdotjs,
  SiKnexdotjs,
} from 'react-icons/si'

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages',
      color:
        'bg-accent-yellow/10 text-accent-yellow border-accent-yellow/30 hover:bg-accent-yellow/20',
      items: [
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'HTML5', icon: <SiHtml5 /> },
        { name: 'CSS3', icon: <SiCss /> },
        { name: 'PHP', icon: <SiPhp /> },
      ],
    },
    {
      title: 'Frontend',
      color:
        'bg-accent-blue/10 text-accent-blue border-accent-blue/30 hover:bg-accent-blue/20',
      items: [
        { name: 'React', icon: <SiReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'Astro', icon: <SiAstro /> },
      ],
    },
    {
      title: 'Backend & DB',
      color:
        'bg-accent-green/10 text-accent-green border-accent-green/30 hover:bg-accent-green/20',
      items: [
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'Knex.js', icon: <SiKnexdotjs /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'MySQL', icon: <SiMysql /> },
      ],
    },
    {
      title: 'Tools & Platforms',
      color:
        'bg-accent-purple/10 text-accent-purple border-accent-purple/30 hover:bg-accent-purple/20',
      items: [
        { name: 'Git', icon: <SiGit /> },
        { name: 'GitHub', icon: <SiGithub /> },
        { name: 'Supabase', icon: <SiSupabase /> },
        { name: 'Clerk', icon: <SiClerk /> },
        { name: 'DigitalOcean', icon: <SiDigitalocean /> },
        { name: 'WordPress', icon: <SiWordpress /> },
      ],
    },
  ]

  return (
    <section id="skills" className="pt-22 pb-12 md:pt-28 md:pb-18">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Skills</h2>

        <div className="space-y-10">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="flex flex-col md:flex-row md:items-center gap-4 border-b border-border-editor/40 pb-6 mb-6 last:border-0"
            >
              <h3 className="text-lg font-semibold min-w-35 text-text-editor">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <li key={skill.name}>
                    <Badge
                      label={skill.name}
                      icon={skill.icon}
                      color={category.color}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
