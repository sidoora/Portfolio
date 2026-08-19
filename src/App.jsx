import ScrollTrail from './components/ScrollTrail.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import PacmanProject from './components/PacmanProject.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <ScrollTrail />
      <Nav />
      <Hero />
      <main>
        <About />
        <Skills />
        <PacmanProject />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
