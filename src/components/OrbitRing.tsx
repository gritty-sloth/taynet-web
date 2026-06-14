const KEYWORDS = [
  'n8n', 'Gemini', 'WhatsApp API', 'Discord', 'React',
  'TypeScript', 'Automation', 'AI', 'Claude', 'Node.js',
  'Python', 'Google Sheets',
]

export default function OrbitRing() {
  const count = KEYWORDS.length

  return (
    <div
      className="pointer-events-none absolute"
      style={{
        top: '50%',
        left: '50%',
        width: 'clamp(280px, 44vw, 600px)',
        height: 'clamp(280px, 44vw, 600px)',
        transform: 'translate(-50%, -55%)',
        animation: 'orbit 30s linear infinite',
        zIndex: 1,
      }}
      aria-hidden="true"
    >
      {KEYWORDS.map((word, i) => {
        const angle = (2 * Math.PI / count) * i
        const r = 50
        const x = 50 + r * Math.cos(angle)
        const y = 50 + r * Math.sin(angle)

        return (
          <span
            key={word}
            className="font-mono absolute whitespace-nowrap"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.06em',
              textTransform: 'uppercase' as const,
              color: '#3a3a3a',
              animation: 'counter-orbit 30s linear infinite',
            }}
          >
            {word}
          </span>
        )
      })}
    </div>
  )
}
