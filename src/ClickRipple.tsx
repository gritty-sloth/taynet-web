import { useEffect, useRef } from 'react'

interface Ripple {
  id: number
  x: number
  y: number
  el: HTMLDivElement
}

let nextId = 0

export default function ClickRipple() {
  const containerRef = useRef<HTMLDivElement>(null)
  const ripplesRef = useRef<Ripple[]>([])

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const container = containerRef.current
      if (!container) return

      // Skip if clicking on interactive elements
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('nav')
      ) {
        return
      }

      const id = nextId++
      const el = document.createElement('div')
      el.style.position = 'absolute'
      el.style.left = `${e.clientX}px`
      el.style.top = `${e.clientY}px`
      el.style.width = '0px'
      el.style.height = '0px'
      el.style.borderRadius = '50%'
      el.style.border = '1px solid rgba(200, 164, 92, 0.35)'
      el.style.background = 'transparent'
      el.style.transform = 'translate(-50%, -50%)'
      el.style.pointerEvents = 'none'
      el.style.transition = 'none'

      container.appendChild(el)

      const ripple: Ripple = { id, x: e.clientX, y: e.clientY, el }
      ripplesRef.current.push(ripple)

      // Animate with raf
      requestAnimationFrame(() => {
        el.style.transition = 'width 600ms ease-out, height 600ms ease-out, opacity 600ms ease-out'
        requestAnimationFrame(() => {
          el.style.width = '120px'
          el.style.height = '120px'
          el.style.opacity = '0'
        })
      })

      // Remove after animation
      setTimeout(() => {
        el.remove()
        ripplesRef.current = ripplesRef.current.filter((r) => r.id !== id)
      }, 600)
    }

    window.addEventListener('mousedown', handleClick)
    return () => window.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  )
}
