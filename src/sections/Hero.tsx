import { useState, useEffect } from 'react'
import OrbitRing from '../components/OrbitRing'

function getTimeStr() {
  const now = new Date()
  const h = String(now.getHours()).padStart(2, '0')
  const m = String(now.getMinutes()).padStart(2, '0')
  return `${h}:${m}`
}

export default function Hero() {
  const [time, setTime] = useState(getTimeStr)

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeStr()), 60000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: '100vh', background: '#0a0a0a' }}
    >
      {/* Top bar */}
      <div
        className="absolute left-6 right-6 top-6 flex items-center justify-between"
        style={{ zIndex: 10 }}
      >
        <span
          className="font-mono"
          style={{ fontSize: '11px', color: '#c8a45c' }}
        >
          // taynet
        </span>

        <span
          className="font-sans"
          style={{ fontSize: '13px', color: '#6b6b6b' }}
        >
          {time}
        </span>

        <div className="font-mono" style={{ fontSize: '11px' }}>
          <a
            href="https://github.com/gritty-sloth"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-[#e8e8e6]"
            style={{ color: '#6b6b6b' }}
          >
            gh
          </a>
          <span style={{ color: '#333', margin: '0 6px' }}>·</span>
          <a
            href="https://x.com/gritty_sloth"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-[#e8e8e6]"
            style={{ color: '#6b6b6b' }}
          >
            x
          </a>
        </div>
      </div>

      {/* Center content */}
      <div className="relative flex flex-col items-center" style={{ zIndex: 5 }}>
        <OrbitRing />

        {/* Name */}
        <h1
          className="font-sans select-none"
          style={{
            fontSize: 'clamp(72px, 15vw, 200px)',
            fontWeight: 900,
            color: '#e8e8e6',
            letterSpacing: '-0.04em',
            lineHeight: 0.9,
            textAlign: 'center',
          }}
        >
          AYUSH
        </h1>
        <p
          className="font-sans select-none"
          style={{
            fontSize: 'clamp(14px, 2.5vw, 32px)',
            fontWeight: 400,
            color: '#6b6b6b',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginTop: '8px',
          }}
        >
          yadav
        </p>

        {/* Typewriter line */}
        <div
          className="font-mono"
          style={{
            fontSize: '13px',
            color: '#c8a45c',
            marginTop: '40px',
          }}
        >
          {'> building things with code'}
          <span
            aria-hidden="true"
            style={{
              animation: 'blink 1.06s step-end infinite',
            }}
          >
            _
          </span>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 flex flex-col items-center"
        style={{ transform: 'translateX(-50%)', zIndex: 10 }}
      >
        <span
          className="font-mono"
          style={{ fontSize: '10px', color: '#333', marginBottom: '8px', letterSpacing: '0.1em' }}
        >
          scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '24px',
            background: '#333',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: '1px',
              height: '8px',
              background: '#c8a45c',
              animation: 'scroll-line 1.5s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </section>
  )
}
