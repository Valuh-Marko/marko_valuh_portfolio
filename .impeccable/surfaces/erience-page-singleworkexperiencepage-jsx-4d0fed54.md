---
version: 1
slug: "erience-page-singleworkexperiencepage-jsx-4d0fed54"
primary_target: "src/pages/single-work-experience-page/SingleWorkExperiencePage.jsx"
related_targets: ["public/data/work_experience.json","src/pages/work-experience-page/WorkExperiencePage.jsx","src/components/stacking-cards/StackingCards.jsx"]
---

# Surface brief: /work-experience and /work-experience/:name

Scope: the experience index at `/work-experience` (the stacking cards stay) and the job pages at `/work-experience/nqode`, `/epam` and `/codeplicity`. AxiomQ is index-only. Mode: Read. Audience: engineers first, then recruiters. Job: see what I actually did at each job, in my own words. Proof: only facts the owner confirmed in the interview on 2026-10-15. No employer brochure, no self-rated skills, no outcomes nobody measured. Client internals stay out: Source AG is "one of several front-end teams", Owow is "animation-heavy marketing sites" with no NDA wording, and Codeplicity names no clients. Constraints: The Terminal (DESIGN.md) is unchanged, all copy lives in `public/data/work_experience.json`, and this page shares its grammar with the case study at `/projects/:name`.

## Direction contract

THESIS: Each job page tells a different story, so each one has a different shape. NQode is one agency and three client seats. EPAM is two years on one live product, held to account by a large QA team. Codeplicity is a short first chapter. It refuses the category default: one Context / Scope / Work / Stack / Approach template stamped onto every employer, with résumé verbs and Daily/Frequent ratings.

OWN-WORLD: The Terminal with nothing added, read through the case study's grammar. Ink black and paper white, quiet white at 55% on black, dashed 1px hairlines, uppercase Suisse mono labels only (11px or larger), Helvetica content, sliced-corner frames, and one orange signal per view. The parts are reused from the case study: CaseHero, seats, points, the counted-bar table and ShotSlot. Nothing is styled from scratch that already exists there.

STORY: On the index, the visitor reads the arc in one sentence, then scrolls the stacking cards, where each excerpt is that job's hook. On a job page they read the hook and the spec lines, jump via the contents to the part they care about, and leave knowing which surfaces I owned, which I only touched, and who checked my work. Then they page to the next job.

FIRST VIEWPORT: Job pages use the black CaseHero. Company as the title, the hook in quiet white, the orange asterisk, and mono spec lines: location · period; three verified highlights in full white; the stack. NQode and EPAM get the full-height hero with a three-cell contents index pinned to the bottom (NQode: Source AG · BrightFunded · Owow; EPAM: The product · The work · The team). Codeplicity gets the short hero with no contents. The index page gets the short hero: the title "Work experience" and one arc sentence, with no stock photograph and no parallax. The only motion is the title/hook reveal and the contents cells rising, and both respect reduced motion.

FORM: Per-job form, chosen by the user in the critique follow-up. Sections are typed in the JSON (clients, points, prose, team) and each job lists its own. No seed was dealt, because this extends an established world rather than choosing a new one.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
