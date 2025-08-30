# Personal site (Hugo + PaperMod)

Standalone Hugo site using the PaperMod theme.

Run locally
- Install Hugo Extended: https://gohugo.io/installation/
- From this folder: hugo server -D
- Open http://localhost:1313

Deploy to GitHub Pages
- Base URL is set to https://taciturn2021.github.io/
- Add a GitHub Actions workflow to build and deploy on push (see below).

Project structure
- content/: pages and posts
- layouts/: custom templates
- assets/: CSS/JS processed by Hugo Pipes
- static/: static files (favicon, legacy calculator)
- data/: data files (semesters)
- config.yaml: site configuration
- go.mod: Hugo modules (PaperMod)

Notes
- Do not commit public/ or server/ folders (see .gitignore).
