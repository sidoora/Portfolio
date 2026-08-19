import { useEffect, useRef, useState } from 'react'

const DOT_COUNT = 28

export default function ScrollTrail() {
  const [progress, setProgress] = useState(0)
  const ticking = useRef(false)

  useEffect(() => {
    function onScroll() {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        const doc = document.documentElement
        const scrollable = doc.scrollHeight - doc.clientHeight
        const pct = scrollable > 0 ? window.scrollY / scrollable : 0
        setProgress(Math.min(1, Math.max(0, pct)))
        ticking.current = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const eatenCount = Math.round(progress * DOT_COUNT)
  const pacmanPct = progress * 100

  return (
    <div className="scroll-trail" role="progressbar" aria-label="Scroll progress" aria-valuenow={Math.round(progress * 100)} aria-valuemin={0} aria-valuemax={100}>
      <div className="scroll-trail-track">
        {Array.from({ length: DOT_COUNT }).map((_, i) => (
          <span key={i} className={`dot ${i < eatenCount ? 'eaten' : ''}`} />
        ))}
        <div className="pacman" style={{ left: `calc(${pacmanPct}% - 8px)` }} aria-hidden="true">
          <div className="pacman-jaw pacman-jaw-top" />
          <div className="pacman-jaw pacman-jaw-bottom" />
        </div>
      </div>
    </div>
  )
}
