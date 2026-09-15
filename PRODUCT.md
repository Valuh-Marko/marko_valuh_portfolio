# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, roughly equal priority: hiring managers/recruiters evaluating Marko for full-time or contract roles, and potential freelance/agency clients evaluating him for project work. Both should come away convinced of his craft and be prompted to reach out.

## Product Purpose

Personal portfolio for Marko Valuh (marko-valuh.com) showcasing client case-study work and one full-stack personal project, plus work experience. Success means a visitor from either audience understands his skill level quickly and takes a next step (contact, inquiry).

## Positioning

Not yet fixed to a single narrative — let it emerge from the work experience and project content rather than forcing a tagline. The one confirmed differentiator: the site itself should demonstrate that Marko is technical ("techy") *and* has real design sense — the portfolio is evidence of the design skill, not just a container for it.

## Operating Context

Content-driven: page copy for case studies and work experience lives in `public/data/projects.json` and `public/data/work_experience.json`, not hardcoded in components. Editing a case study means editing JSON, not JSX.

## Capabilities and Constraints

- React 19 + Vite 6, React Router 7 for routing/page transitions, Motion for animation, Lenis for smooth scroll, Sass for styling.
- Case study pages and a work-experience section are driven by the two JSON data files above.

## Brand Commitments

This is a **refinement of the incumbent visual system, not a replacement**. Confirmed by the user:

- Keep and extend: the overall "techy but well-designed" aesthetic; the column-based breakdown of content used across screens; the sliding cards sections (interaction pattern is "top notch" as-is).
- Must change: the hero section — explicitly disliked, needs a real redesign.
- Must change: how images are presented within the sliding cards, and how skills are displayed there.
- Do not treat the current look as disposable anti-reference — treat it as the base identity to polish and extend, except for the hero and the flagged card content.

## Evidence on Hand

- `public/data/projects.json` — real case study content (client work + one full-stack personal project).
- `public/data/work_experience.json` — real work history content.
- Live incumbent implementation across `src/components/` (hero-section, stacking-cards, tech-stack-section, work-experience, etc.) and `src/pages/` — treat as current design authority for anything not explicitly flagged above.
- No DESIGN.md yet; incumbent system is undocumented but real and functioning.

## Product Principles

1. The site is proof-of-craft, not just a resume — every visual decision should read as intentional design work, not template defaults.
2. Refine within the existing visual language; don't discard what's already working (columns, sliding cards).
3. The hero is the one section explicitly failing its job and gets full redesign license.
4. Card content (images, skills) should present work more legibly/compellingly than it currently does.
5. Serve recruiters and clients equally — avoid leaning the whole site toward one audience's expectations only.
