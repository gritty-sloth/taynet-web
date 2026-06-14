import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import ClickRipple from './components/ClickRipple'
import DockNav from './components/DockNav'
import Hero from './sections/Hero'
import About from './sections/About'
import GitHubStats from './sections/GitHubStats'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function App() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <ClickRipple />
      <DockNav lenisRef={lenisRef} />
      <main>
        <Hero />
        <About />
        <GitHubStats />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
