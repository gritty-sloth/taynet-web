import { useEffect, useState } from 'react'

interface DockNavProps {
  lenisRef: React.MutableRefObject<any>
}

const NAV_ITEMS = [
  { label: 'about', target: 'about' },
  { label: 'projects', target: 'projects' },
  { label: 'github', target: 'github' },
  { label: 'contact', target: 'contact' },
]

export default function DockNav({ lenisRef }: DockNavProps) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-35% 0px -55% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  function scrollTo(target: string) {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(`#${target}`, { offset: -20, duration: 1.2 })
    }
  }

  return (
    <nav
      className="fixed bottom-8 left-1/2 z-[100] flex items-center gap-1"
      style={{
        transform: 'translateX(-50%)',
        background: 'rgba(20, 20, 20, 0.9)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '16px',
        padding: '10px 20px',
      }}
    >
      {NAV_ITEMS.map((item, i) => (
        <div key={item.target} className="flex items-center">
          <button
            onClick={() => scrollTo(item.target)}
            className="transition-all duration-200 hover:scale-105"
            style={{
              fontFamily: '"Inter", system-ui, sans-serif',
              fontWeight: 500,
              fontSize: '13px',
              color: activeSection === item.target ? '#e8e8e6' : '#6b6b6b',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px 12px',
              borderRadius: '8px',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              if (activeSection !== item.target) {
                e.currentTarget.style.color = '#e8e8e6'
              }
            }}
            onMouseLeave={(e) => {
              if (activeSection !== item.target) {
                e.currentTarget.style.color = '#6b6b6b'
              }
            }}
          >
            {item.label}
          </button>
          {i < NAV_ITEMS.length - 1 && (
            <span
              style={{
                color: '#333',
                fontSize: '10px',
                margin: '0 2px',
                userSelect: 'none',
              }}
            >
              ·
            </span>
          )}
        </div>
      ))}
    </nav>
  )
}
