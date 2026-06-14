import { useState } from 'react'

type Filter = 'all' | 'code' | 'concept'
type Status = 'LIVE' | 'WIP' | 'IDEA'

interface Project {
  name: string
  status: Status
  description: string
  tags: string
  filter: Filter[]
  mysterious?: boolean
}

const PROJECTS: Project[] = [
  {
    name: 'ZURI',
    status: 'LIVE',
    description:
      'WhatsApp AI assistant for my friend group. Reminders, briefings, conversation, group memory. Runs on zero-cost infra.',
    tags: 'n8n · Gemini · WhatsApp API · Google Sheets',
    filter: ['all', 'code'],
  },
  {
    name: 'SHARLETT',
    status: 'WIP',
    description:
      'AI persona with actual personality. Memory, presence, the feeling of talking to someone real.',
    tags: 'Claude API · system prompts · memory layer',
    filter: ['all', 'code'],
  },
  {
    name: 'AUTOMATION TOOLS',
    status: 'LIVE',
    description:
      'n8n workflows, Discord bots, Google Workspace hacks. Building blocks I use daily.',
    tags: 'n8n · Discord · Webhooks · Sheets',
    filter: ['all', 'code'],
  },
  {
    name: 'ZEPHYRIA',
    status: 'IDEA',
    description:
      "A world. A system. Something that's been living in my head. Details when they're ready.",
    tags: 'classification: open',
    filter: ['all', 'concept'],
    mysterious: true,
  },
]

const STATUS_COLORS: Record<Status, string> = {
  LIVE: '#5cb85c',
  WIP: '#c8a45c',
  IDEA: '#6b6b6b',
}

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'all' },
  { key: 'code', label: 'code' },
  { key: 'concept', label: 'concept' },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all')

  const filtered = PROJECTS.filter((p) => p.filter.includes(activeFilter))

  return (
    <section
      id="projects"
      className="mx-auto"
      style={{ maxWidth: '1000px', padding: '100px 24px' }}
    >
      <span
        className="font-mono block"
        style={{ fontSize: '11px', color: '#c8a45c', marginBottom: '16px' }}
      >
        // projects
      </span>

      <h2
        className="font-sans"
        style={{
          fontSize: '40px',
          fontWeight: 700,
          color: '#e8e8e6',
          letterSpacing: '-0.03em',
          marginBottom: '32px',
        }}
      >
        things I've built
      </h2>

      {/* Filter tabs */}
      <div className="flex gap-0" style={{ marginBottom: '32px' }}>
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className="font-mono transition-colors duration-200"
            style={{
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: activeFilter === f.key ? '#e8e8e6' : '#6b6b6b',
              borderBottom:
                activeFilter === f.key
                  ? '1px solid #c8a45c'
                  : '1px solid transparent',
              background: 'none',
              border: 'none',
              borderBottomWidth: '1px',
              borderBottomStyle: 'solid',
              borderBottomColor:
                activeFilter === f.key ? '#c8a45c' : 'transparent',
              padding: '8px 16px',
              cursor: 'pointer',
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2" style={{ gap: '16px' }}>
        {filtered.map((project) => (
          <div
            key={project.name}
            style={{
              background: project.mysterious ? '#111' : '#141414',
              border: `1px solid ${
                project.mysterious
                  ? 'rgba(255,255,255,0.02)'
                  : 'rgba(255,255,255,0.04)'
              }`,
              borderRadius: '8px',
              padding: '28px',
              opacity: project.mysterious ? 0.45 : 1,
              transition: project.mysterious
                ? 'none'
                : 'border-color 0.25s ease, transform 0.25s ease',
              cursor: 'default',
            }}
            onMouseEnter={(e) => {
              if (project.mysterious) return
              e.currentTarget.style.borderColor = 'rgba(200, 164, 92, 0.15)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              if (project.mysterious) return
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {/* Status badge */}
            <span
              className="font-mono"
              style={{
                fontSize: '10px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: STATUS_COLORS[project.status],
              }}
            >
              [ {project.status} ]
            </span>

            {/* Name */}
            <h3
              className="font-sans"
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#e8e8e6',
                marginTop: '12px',
              }}
            >
              {project.name}
            </h3>

            {/* Description */}
            <p
              className="font-sans"
              style={{
                fontSize: '13px',
                color: '#6b6b6b',
                lineHeight: 1.6,
                marginTop: '8px',
              }}
            >
              {project.description}
            </p>

            {/* Tags */}
            <p
              className="font-mono"
              style={{
                fontSize: '10px',
                color: '#444',
                marginTop: '12px',
              }}
            >
              {project.tags}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
