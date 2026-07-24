const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'youngryou'

export interface LanguageStat {
  name: string
  color: string
  percentage: number
}

export interface GithubStats {
  totalContributions: number
  contributedRepos: number
  pullRequests: number
  totalCommits: number
  topLanguages: LanguageStat[]
}

export async function getGithubStats(): Promise<GithubStats | null> {
  if (!GITHUB_TOKEN) {
    console.error('GitHub Token is not set.')
    return null
  }

  const query = `
    query($userName: String!) {
      user(login: $userName) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
          }
          totalCommitContributions
        }
        repositoriesContributedTo(first: 1, contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]) {
          totalCount
        }
        pullRequests(first: 1) {
          totalCount
        }
        repositories(first: 100, ownerAffiliations: OWNER, isFork: false, orderBy: {field: PUSHED_AT, direction: DESC}) {
          nodes {
            languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
              edges {
                size
                node {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
  `

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { userName: GITHUB_USERNAME },
      }),
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub data.')
    }

    const json = await response.json()
    const user = json.data?.user

    if (!user) return null

    const languageMap = new Map<string, { size: number; color: string }>()
    let totalSize = 0

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user.repositories.nodes.forEach((repo: any) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      repo.languages.edges.forEach((edge: any) => {
        const { size, node } = edge

        if (['HTML', 'CSS'].includes(node.name)) return
        // if (node.name === 'HTML') return

        const currentSize = languageMap.get(node.name)?.size || 0
        languageMap.set(node.name, {
          size: currentSize + size,
          color: node.color,
        })
        totalSize += size
      })
    })

    const topLanguages: LanguageStat[] = Array.from(languageMap.entries())
      .map(([name, { size, color }]) => ({
        name,
        color,
        percentage: Number(((size / totalSize) * 100).toFixed(1)),
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 5)

    return {
      totalContributions:
        user.contributionsCollection.contributionCalendar.totalContributions,
      contributedRepos: user.repositoriesContributedTo.totalCount,
      pullRequests: user.pullRequests.totalCount,
      totalCommits: user.contributionsCollection.totalCommitContributions,
      topLanguages,
    }
  } catch (error) {
    console.error('GitHub Stats Error:', error)
    return null
  }
}
