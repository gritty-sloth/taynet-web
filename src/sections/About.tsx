const IDENTITY_LINES = [
  { key: 'name', value: 'Ayush Yadav', accent: false },
  { key: 'alias', value: 'Arizen', accent: true },
  { key: 'handle', value: 'Gritty Sloth', accent: false },
  { key: 'twitter', value: '@gritty_sloth', accent: false },
  { key: 'github', value: 'gritty-sloth', accent: false },
  { key: 'status', value: 'building', accent: false, live: true },
]

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto"
      style={{ maxWidth: '1000px', padding: '100px 24px' }}
    >
      {/* Label */}
      <span
        className="font-mono block"
        style={{ fontSize: '11px', color: '#c8a45c', marginBottom: '16px' }}
      >
        // about
      </span>

      {/* Heading */}
      <h2
        className="font-sans"
        style={{
          fontSize: '40px',
          fontWeight: 700,
          color: '#e8e8e6',
          letterSpacing: '-0.03em',
          lineHeight: 1.2,
          marginBottom: '48px',
        }}
      >
        I go by
        <br />
        <span style={{ color: '#c8a45c' }}>Arizen</span> online
      </h2>

      {/* Two columns */}
      <div className="flex flex-col gap-12 md:flex-row" style={{ gap: '48px' }}>
        {/* Left — bio */}
        <div className="md:w-[55%]">
          <p
            className="font-sans"
            style={{ fontSize: '15px', color: '#e8e8e6', lineHeight: 1.7 }}
          >
            Most people know me as Arizen. I build tools — mostly for myself and
            my friends at first, then for anyone who finds them useful. Started
            with Discord bots and n8n workflows, now building AI assistants that
            actually feel like someone.
          </p>
          <p
            className="font-sans"
            style={{
              fontSize: '15px',
              color: '#e8e8e6',
              lineHeight: 1.7,
              marginTop: '16px',
            }}
          >
            Everything I make starts at zero cost. Free tiers, clever workarounds,
            good taste. I don't pay for what I can build.
          </p>
        </div>

        {/* Right — identity card */}
        <div className="md:w-[45%]">
          {IDENTITY_LINES.map((line) => (
            <div
              key={line.key}
              className="font-mono flex items-baseline gap-2"
              style={{
                fontSize: '12px',
                marginBottom: '8px',
                opacity: 0.7,
              }}
            >
              <span style={{ color: '#444' }}>{line.key}:</span>
              <span
                style={{
                  color: line.accent
                    ? '#c8a45c'
                    : line.live
                    ? '#5cb85c'
                    : '#6b6b6b',
                }}
              >
                {line.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy line */}
      <p
        className="font-mono"
        style={{
          fontSize: '12px',
          fontStyle: 'italic',
          color: '#c8a45c',
          opacity: 0.6,
          marginTop: '48px',
          textAlign: 'center',
        }}
      >
        build first, ask for budget later
      </p>
    </section>
  )
}
