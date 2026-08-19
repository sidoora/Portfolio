const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-logo">SR<span className="nav-logo-dot">.</span></a>
        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}
