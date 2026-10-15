---
target: work experience pages
total_score: 15
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 2
target_identity: "file:C:\\My Web Projects\\portfolio-2025\\src\\pages\\single-work-experience-page\\SingleWorkExperiencePage.jsx"
target_fingerprint: "sha256:b8dbc54aaf2f84bc893c4f532f9213d3bddd6a3fad1fcd65bbf986723986f7fc"
target_path: "C:\\My Web Projects\\portfolio-2025\\src\\pages\\single-work-experience-page\\SingleWorkExperiencePage.jsx"
timestamp: 2026-10-15T20-11-48Z
slug: erience-page-singleworkexperiencepage-jsx-4d0fed54
---
# Critique: work experience pages (/work-experience, /work-experience/:name)

Method: dual-agent (A: design review · B: detector). Browser overlay skipped (user preference: no browser automation).

## Design Health Score: 15/32 (47%, Poor). Heuristics 7 and 10 n/a.

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 2 | Loader gated on a decorative stock photo; fetch failure only console.errors; no contents index |
| 2 | Match System / Real World | 2 | Résumé-speak ("pixel-perfect", "fast-paced"), "Adjacent/Daily" self-ratings |
| 3 | User Control and Freedom | 3 | Pager works; no in-page anchors, no "all experience" link |
| 4 | Consistency and Standards | 2 | nQode/NQode/Nqode; "Over 4 years" vs "5+ years"; WE/003 means Work on one page, Stack on another; present tense on past jobs |
| 5 | Error Prevention | 2 | lede/breakdown only render when exactly one project, so they silently drop elsewhere |
| 6 | Recognition Rather Than Recall | 2 | Scope abilities not tied to a client |
| 7 | Flexibility and Efficiency | n/a | Read-only content page |
| 8 | Aesthetic and Minimalist Design | 1 | Stack shown 3×; 16 self-rated tiles; generic principles; employer brochure |
| 9 | Error Recovery | 1 | Unknown slug (incl. /work-experience/axiomq) renders empty h1 and "00 / 03" pager |
| 10 | Help and Documentation | n/a | Portfolio page |

## Design Specificity Verdict
Résumé template inside a terminal frame. Every entry runs stock hero → Context (about the employer) → Scope (5–6 cards) → Work → Stack (12–16 tiles) → Approach (3 principles) → Pager, with section titles hard-coded in JSX. This is the uniform numbered rhythm the case-study brief explicitly refuses. No thesis, hook, contents index, code-drawn figure, or honesty section.

Detector: 7 advisories vs 1 on the case study baseline. 6 are the hard-coded 4rem/5rem hero titles (two copies of one block, both pages); 1 is off-palette oklch(87% 0 0) in .c-scope. Real drift, low severity; all evaporate if the hero is replaced by CaseHero.

## Priority Issues
- [P0] Copy is résumé-speak about the employer, with unverifiable claims ("measurably improved", "guaranteeing", "pixel-perfect", Outcome = "on-schedule delivery"). Fix: first-person hook per entry; every claim names client + mechanism; company shrinks to a spec-line clause. /impeccable clarify
- [P0] One template for every job, no thesis. Fix: per-entry form, titles in JSON (NQode = three engagements as three seats with BrightFunded at the centre; EPAM = one live product, team of 14; Codeplicity = compact). Drop Approach and Scope-as-cards; add an honesty section. /impeccable shape → layout
- [P1] Hero is a stock skyscraper photo + company name (alt="hero_img", h1→h3, weight 500, parallax without reduced motion). Fix: reuse CaseHero (black, hook, asterisk, spec lines, contents index). /impeccable layout
- [P1] Stack section: self-rated, triplicated, external simpleicons CDN, violates Stack Plate "no usage on the surface". Fix: delete; stack becomes a hero spec line + per-engagement tags. /impeccable distill
- [P2] Index page duplicates home section; "Over 4 years" is wrong (~5y8m); NQode card shows owow.webp; 3× "Find out more"; AxiomQ has no explanation. Fix: arc sentence or code-drawn timeline; hooks as excerpts. /impeccable clarify + layout

## Persona Red Flags
- Recruiter (30s): stock photo + wrong year count; "Sole front-end owner" buried three sections down; May–Aug 2026 gap unaddressed.
- Freelance client: no links to shipped sites; Owow motion work gets one blurb; ends on a pager with no contact prompt.
- Sam (screen reader): h1→h3, h2→h4 skips; Context section has no heading; alt="hero_img"; stack tiles read "TypeScript TypeScript Daily"; pager nav unlabelled.

## Minor Observations
border-radius on .c-context__meta; solid rules where system uses dashed; tags as grey chips not middle-dot list; 0.5 vs 0.55 quiet white; 5-item scope grid leaves a grey half-cell; "Codeplicity." trailing period; pullQuote and reportsTo fields unused; legacy CSS block (mention only).

## Questions to Consider
1. Cover the company names: what sentence could only the NQode page say?
2. Should BrightFunded (16 months, sole front-end owner) be its own case study?
3. Does a one-year first job need the full template?
4. What is a job's "Not yet"?
5. Should the index be a code-drawn 2021–2026 timeline instead of a photo + repeated cards?
