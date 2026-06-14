import { useEffect, useState } from 'react'

interface GitHubUser {
  login: string
  name: string
  public_repos: number
  followers: number
  following: number
  created_at: string
  html_url: string
  avatar_url: string
}

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  private: boolean
}

function getAccountAge(createdAt: string): string {
  const created = new Date(createdAt)
  const now = new Date()
  const years = now.getFullYear() - created.getFullYear()
  if (years < 1) {
    const months = now.getMonth() - created.getMonth() + (now.getFullYear() - created.getFullYear()) * 12
    return `${Math.max(1, months)}mo`
  }
  return `${years}y`
}

const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  'Jupyter Notebook': '#DA5B0B',
  Shell: '#89e051',
  null: '#6b6b6b',
}

export default function GitHubStats() {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch('https://api.github.com/users/gritty-sloth', {
            headers: { Accept: 'application/vnd.github.v3+json' },
          }),
          fetch('https://api.github.com/users/gritty-sloth/repos?sort=updated', {
            headers: { Accept: 'application/vnd.github.v3+json' },
          }),
        ])

        if (!userRes.ok || !reposRes.ok) {
          throw new Error('GitHub API error')
        }

        const userData = await userRes.json()
        const reposData = await reposRes.json()

        setUser(userData)
        setRepos(reposData.filter((r: GitHubRepo) => !r.private))
      } catch {
        setError('github data unavailable')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <section
        id="github"
        className="mx-auto"
        style={{ maxWidth: '1000px', padding: '100px 24px' }}
      >
        <span
          className="font-mono block"
          style={{ fontSize: '11px', color: '#c8a45c', marginBottom: '16px' }}
        >
          // github
        </span>
        <h2
          className="font-sans"
          style={{
            fontSize: '40px',
            fontWeight: 700,
            color: '#e8e8e6',
            letterSpacing: '-0.03em',
            marginBottom: '48px',
          }}
        >
          my code lives here
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4" style={{ gap: '16px' }}>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              style={{
                background: '#141414',
                border: '1px solid rgba(255,255,255,0.04)',
                borderRadius: '8px',
                padding: '20px 24px',
              }}
            >
              <div
                className="font-sans"
                style={{
                  fontSize: '28px',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  background:
                    'linear-gradient(90deg, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 1.5s infinite',
                  borderRadius: '4px',
                  width: '40px',
                  height: '32px',
                }}
              />
              <div
                className="font-mono"
                style={{
                  fontSize: '10px',
                  color: '#1a1a1a',
                  marginTop: '8px',
                  background:
                    'linear-gradient(90deg, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 1.5s infinite',
                  borderRadius: '2px',
                  width: '60px',
                  height: '12px',
                }}
              />
            </div>
          ))}
        </div>
      </section>
    )
  }

  if (error || !user) {
    return (
      <section
        id="github"
        className="mx-auto"
        style={{ maxWidth: '1000px', padding: '100px 24px' }}
      >
        <span
          className="font-mono block"
          style={{ fontSize: '11px', color: '#c8a45c', marginBottom: '16px' }}
        >
          // github
        </span>
        <p className="font-mono" style={{ fontSize: '13px', color: '#6b6b6b' }}>
          {error} — try refreshing
        </p>
      </section>
    )
  }

  const stats = [
    { num: user.public_repos, label: 'repos' },
    { num: user.followers, label: 'followers' },
    { num: user.following, label: 'following' },
    { num: getAccountAge(user.created_at), label: 'on github' },
  ]

  return (
    <section
      id="github"
      className="mx-auto"
      style={{ maxWidth: '1000px', padding: '100px 24px' }}
    >
      <span
        className="font-mono block"
        style={{ fontSize: '11px', color: '#c8a45c', marginBottom: '16px' }}
      >
        // github
      </span>

      <h2
        className="font-sans"
        style={{
          fontSize: '40px',
          fontWeight: 700,
          color: '#e8e8e6',
          letterSpacing: '-0.03em',
          marginBottom: '48px',
        }}
      >
        my code lives here
      </h2>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4" style={{ gap: '16px', marginBottom: '48px' }}>
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              background: '#141414',
              border: '1px solid rgba(255,255,255,0.04)',
              borderRadius: '8px',
              padding: '20px 24px',
            }}
          >
            <div
              className="font-sans"
              style={{
                fontSize: '28px',
                fontWeight: 700,
                color: '#e8e8e6',
              }}
            >
              {s.num}
            </div>
            <div
              className="font-mono"
              style={{
                fontSize: '10px',
                color: '#6b6b6b',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginTop: '4px',
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Repos list */}
      {repos.length > 0 && (
        <div style={{ marginBottom: '32px' }}>
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-colors duration-200"
              style={{
                background: '#0f0f0f',
                borderBottom: '1px solid rgba(255,255,255,0.03)',
                padding: '16px 0',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#141414'
                const name = e.currentTarget.querySelector('.repo-name') as HTMLElement
                if (name) name.style.color = '#c8a45c'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0f0f0f'
                const name = e.currentTarget.querySelector('.repo-name') as HTMLElement
                if (name) name.style.color = '#e8e8e6'
              }}
            >
              <div
                className="repo-name font-sans transition-colors duration-200"
                style={{ fontSize: '15px', fontWeight: 500, color: '#e8e8e6' }}
              >
                {repo.name}
              </div>
              {repo.description && (
                <div
                  className="font-sans"
                  style={{
                    fontSize: '13px',
                    color: '#6b6b6b',
                    marginTop: '4px',
                  }}
                >
                  {repo.description}
                </div>
              )}
              <div
                className="font-mono flex items-center gap-4"
                style={{
                  fontSize: '11px',
                  color: '#6b6b6b',
                  marginTop: '8px',
                }}
              >
                {repo.language && (
                  <span className="flex items-center gap-1.5">
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background:
                          LANG_COLORS[repo.language] || '#6b6b6b',
                        display: 'inline-block',
                      }}
                    />
                    {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && (
                  <span>★ {repo.stargazers_count}</span>
                )}
                {repo.forks_count > 0 && (
                  <span>⑂ {repo.forks_count}</span>
                )}
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Profile link */}
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-sans inline-block transition-colors duration-200 hover:text-[#c8a45c]"
        style={{ fontSize: '13px', color: '#6b6b6b' }}
      >
        view full profile →
      </a>
    </section>
  )
}
