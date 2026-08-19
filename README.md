# Sidrah Raache — Portfolio

A React + Vite portfolio site, built to showcase CS coursework and projects for internship applications.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

This outputs a static site to `dist/`. Deploy `dist/` to any static host:

- **Vercel / Netlify**: connect the repo, they'll auto-detect Vite and run `npm run build` for you.
- **GitHub Pages**: run `npm run build`, then push the contents of `dist/` to a `gh-pages` branch (or use the `gh-pages` npm package).

## Structure

```
src/
  components/
    ScrollTrail.jsx     — signature scroll-progress "pellet trail"
    Nav.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    PacmanProject.jsx   — the tabbed Java/Python/JS Pac-Man project
    Projects.jsx        — research & other projects
    Experience.jsx
    Contact.jsx
    Footer.jsx
  App.jsx
  index.css             — all design tokens & styles live here
```
