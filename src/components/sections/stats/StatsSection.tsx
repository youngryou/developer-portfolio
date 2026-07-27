import { getGithubStats } from '@/lib/github'
import { StatCard } from './StatCard'
import { StatGraph } from './StatGraph'
import { ScrollReveal } from '@/components/common/ScrollReveal'
import { Card } from '@/components/common/Card'
import {
  VscRepo,
  VscGitPullRequest,
  VscFlame,
  VscCode,
  VscGitCommit,
} from 'react-icons/vsc'

export const StatsSection = async () => {
  const stats = await getGithubStats()

  if (!stats) return null

  const statItems = [
    {
      title: 'Total Contributions',
      value: stats.totalContributions,
      icon: <VscFlame />,
      iconColor: 'text-accent-red',
      hoverColor: 'group hover:border-accent-red',
    },
    {
      title: 'Projects',
      value: stats.contributedRepos,
      icon: <VscRepo />,
      iconColor: 'text-accent-yellow',
      hoverColor: 'group hover:border-accent-yellow',
    },
    {
      title: 'Pull Requests',
      value: stats.pullRequests,
      icon: <VscGitPullRequest />,
      iconColor: 'text-accent-green',
      hoverColor: 'group hover:border-accent-green',
    },
    {
      title: 'Commits (This Year)',
      value: stats.totalCommits,
      icon: <VscGitCommit />,
      iconColor: 'text-accent-blue',
      hoverColor: 'group hover:border-accent-blue',
    },
  ]

  return (
    <section id="stats" className="py-18 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="mb-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            By the Numbers
          </h3>
          <p className="text-base sm:text-lg text-text-sub">
            A quantifiable look at my contributions and development activity.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {statItems.map((item, statIndex) => (
            <ScrollReveal
              key={item.title}
              direction="left"
              delay={statIndex * 100}
            >
              <StatCard {...item} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={100}>
          <Card
            key="top-languages"
            title="Top Languages"
            icon={<VscCode />}
            iconColor="text-accent-purple"
            hoverColor="group hover:border-accent-purple"
          >
            <StatGraph languages={stats.topLanguages} />
          </Card>

          <p className="mt-6 text-right text-xs sm:text-sm italic text-text-hint">
            * Data fetched via GitHub GraphQL API
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
