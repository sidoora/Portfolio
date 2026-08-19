import { useState } from 'react'

const VERSIONS = [
  {
    id: 'java',
    label: 'Java',
    paradigm: 'Object-Oriented',
    color: '--gold',
    summary:
      'Full MVC architecture with an abstract Sprite base class. Tile, Ghost, Fruit, and MsPacman all extend it and override draw/update/marshal polymorphically — the View never has to know which subclass it\'s drawing.',
    details: [
      'Abstract Sprite class with polymorphic draw(), update(), and marshal() methods',
      'Hand-written JSON parser/serializer (no library) for saving and loading maps',
      'In-game level editor — click to place tiles, ghosts, and fruit, with a live preview box',
      'Collision detection and a 4-state ghost disappearance sequence (Normal → Blue → White → Eyes)',
    ],
  },
  {
    id: 'python',
    label: 'Python',
    paradigm: 'OOP + Pygame',
    color: '--mint',
    summary:
      'Ported the same class hierarchy to Pygame, then extended it: a pellet system with click-and-drag placement in the editor, plus a live score HUD tracking ghosts, fruit, and pellets collected.',
    details: [
      'Same Sprite → Tile/Ghost/Fruit/MsPacman hierarchy, adapted to Pygame\'s render loop',
      'New Pellet sprite with drag-to-draw placement in edit mode',
      'On-screen score HUD updating in real time as the game runs',
      'JSON map format extended to support the new pellet type',
    ],
  },
  {
    id: 'js',
    label: 'JavaScript',
    paradigm: 'Functional / Canvas',
    color: '--cherry',
    summary:
      'The same game with none of the classes — rebuilt in a functional style on an HTML5 canvas, using factory functions instead of inheritance, plus drag-and-drop JSON map loading straight in the browser.',
    details: [
      'No class hierarchy — sprites are plain objects returned by factory functions',
      'Runs entirely client-side on an HTML5 canvas game loop',
      'Drag-and-drop file API to load a map.json straight into the browser tab',
      'Real-time scoring rendered directly on canvas',
    ],
  },
]

export default function PacmanProject() {
  const [active, setActive] = useState('java')
  const current = VERSIONS.find((v) => v.id === active)

  return (
    <section id="work">
      <div className="container">
        <div className="eyebrow">Signature project</div>
        <div className="section-heading-row">
          <h2 className="section-heading">Ms. Pac-Man, three ways</h2>
          <span className="repo-note">Private repo — happy to share on request</span>
        </div>
        <p className="section-lede">
          Same game engine, rebuilt from scratch across a semester in three languages —
          object-oriented Java, Pygame, and functional JavaScript on canvas. Same collision
          logic, same JSON map format, three completely different ways of getting there.
        </p>

        <div className="paradigm-tabs" role="tablist" aria-label="Pac-Man language version">
          {VERSIONS.map((v) => (
            <button
              key={v.id}
              role="tab"
              aria-selected={active === v.id}
              className={`paradigm-tab ${active === v.id ? 'active' : ''}`}
              style={{ '--tab-color': `var(${v.color})` }}
              onClick={() => setActive(v.id)}
            >
              {v.label}
            </button>
          ))}
        </div>

        <div className="paradigm-panel card" style={{ '--tab-color': `var(${current.color})` }}>
          <div className="paradigm-panel-head">
            <span className="paradigm-tag">{current.paradigm}</span>
          </div>
          <p className="paradigm-summary">{current.summary}</p>
          <ul className="paradigm-details">
            {current.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
