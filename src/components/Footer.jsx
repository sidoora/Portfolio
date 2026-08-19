export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>Sidrah Raache</span>
        <span className="footer-dim">Built with React · {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
