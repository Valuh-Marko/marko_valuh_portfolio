# Marko Valuh - Portfolio

Source for [marko-valuh.com](https://marko-valuh.com). A React + Vite site with
case-study pages for client work and one full-stack project of my own.

## Stack

- Vite 6 and React 19
- React Router 7 for routing and page transitions
- Motion for animation, Lenis for smooth scroll
- Sass for styling
- React Helmet Async for per-page meta tags

## Running it

```bash
npm install
npm run dev      # dev server, usually http://localhost:5173
npm run build    # production build
npm run preview  # serve the production build locally
npm run lint     # eslint
```

Node 19 or newer.

## Layout

```
public/
  data/               # projects.json and work_experience.json drive every page
src/
  components/         # shared UI
  pages/              # one folder per route
  styles/             # global and modular SCSS
  hooks/              # custom hooks
  context/            # context providers
  App.jsx
  main.jsx
```

Page copy lives in `public/data/`, not in the components. Editing a case study
means editing JSON.

## License

Private. All rights reserved, Marko Valuh.

## Contact

marko.valuh@gmail.com
