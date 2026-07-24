import { getGithubStats } from '@/lib/github'
import { StatCard } from './StatCard'
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
          <StatCard
            title="Total Contributions"
            value={stats.totalContributions}
            icon={<VscFlame />}
            iconColor="text-accent-red"
            hoverColor="group hover:border-accent-red"
          />
          <StatCard
            title="Projects"
            value={stats.contributedRepos}
            icon={<VscRepo />}
            iconColor="text-accent-yellow"
            hoverColor="group hover:border-accent-yellow"
          />
          <StatCard
            title="Pull Requests"
            value={stats.pullRequests}
            icon={<VscGitPullRequest />}
            iconColor="text-accent-green"
            hoverColor="group hover:border-accent-green"
          />
          <StatCard
            title="Commits (This Year)"
            value={stats.totalCommits}
            icon={<VscGitCommit />}
            iconColor="text-accent-blue"
            hoverColor="group hover:border-accent-blue"
          />
        </div>

        <Card
          key="top-languages"
          title="Top Languages"
          icon={<VscCode />}
          iconColor="text-accent-purple"
          hoverColor="group hover:border-accent-purple"
        >
          <div className="flex h-3 w-full rounded-full overflow-hidden mb-6 bg-bg-editor">
            {stats.topLanguages.map((lang) => (
              <div
                key={lang.name}
                style={{
                  width: `${lang.percentage}%`,
                  backgroundColor: lang.color,
                }}
                className="h-full transition-all duration-500 ease-in-out"
                title={`${lang.name} ${lang.percentage}%`}
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm md:text-base">
            {stats.topLanguages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: lang.color }}
                />
                <span className="text-text-editor font-semibold">
                  {lang.name}
                </span>
                <span className="text-text-hint">{lang.percentage}%</span>
              </div>
            ))}
          </div>
        </Card>

        <p className="mt-6 text-right text-xs sm:text-sm italic text-text-hint">
          * Data fetched via GitHub GraphQL API
        </p>
      </div>
    </section>
  )
}
