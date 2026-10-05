---
target: tech stack section (home page)
total_score: 17
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
target_identity: "file:C:\\My Web Projects\\portfolio-2025\\src\\components\\tech-stack-section\\TechStackSection.jsx"
target_fingerprint: "sha256:49366a547ce8781dcd88679046d724300399cff81cac70ff04b603faf027464a"
target_path: "C:\\My Web Projects\\portfolio-2025\\src\\components\\tech-stack-section\\TechStackSection.jsx"
timestamp: 2026-10-05T19-37-55Z
slug: s-tech-stack-section-techstacksection-jsx-fa9f9efe
---
# Critique — TechStackSection (home page, first section after hero)
Method: dual-agent (A: design review · B: detector)

## Design Health Score — 17/32 (53%, Acceptable). n/a: 7, 10
1 Visibility 2 — CDN icons, no load/fail state
2 Real world 2 — React missing, MongoDB present; contradicts site data
3 Control 3 — tiles lead nowhere
4 Consistency 2 — Nest.js vs NestJS; h3 under h1; tile CSS lives in another page's stylesheet
5 Error prevention 2 — STACK + ICON_SLUGS dual source of truth
6 Recognition 3 — overlaps with AccompanyStack
7 n/a
8 Aesthetic 2 — clean but empty, low information density
9 Error recovery 1 — no onError; broken glyph + duplicate alt
10 n/a

## Design Specificity Verdict
Category-interchangeable logo grid. On-system tile, but makes no claim (no years/usage/where). AccompanyStackSection (next) is the authored one. Detector: component + _sections.scss clean; src/styles 13 findings all FP (Helvetica @font-face, fluid root sizes). Out-of-scope TPs: 4rem/5rem titles single-work-experience-page.scss:34-44; untokened oklch(87% 0 0) at :181. Browser overlay skipped (user preference).

## Priority Issues
- [P1] Stack contradicts site evidence: React absent (4x projects.json, AxiomQ), MongoDB in no JSON, PostgreSQL called default next section, WordPress/PHP missing. Fix: derive from JSON, align naming. clarify
- [P1] Logo wall not evidential. Fix: mono meta (DAILY · 4.3 YRS), shipped-in line, link to work. shape
- [P1] Two consecutive stack sections delay work ~2 screens, overlapping lists, different grouping logic. Fix: merge into one /Stack, consider after WorkExperience. distill → layout
- [P2] Third-party CDN icons: fragile, privacy leak, alt duplicates name, divs not list. Fix: local icons (react-icons via TechIcon), alt="", ul/li, single data array. harden
- [P2] .c-stack-tile styles in single-work-experience-page.scss:550-591; works only via eager imports; h3→h2. harden

## Persona Red Flags
Rita (recruiter): no React, no seniority signal. Chris (client): jargon, misrepresents client stacks. Sam: double announcement, no list semantics, orphan h3. Casey: full-screen 2x3 grid, six cold CDN requests, then a second tools section.

## Minor Observations
justify-content no-op (_sections.scss:73); BEM break .c-section-icon-wrapper; hard <br/>; 0a0a0a vs ink token; no entrance motion; AccompanyStack panel radius 0.25rem violates system; "Auxiliary" label jargon.

## Questions
Would this earn the slot after the hero? Why does primary stack have no opinions? Is React omitted deliberately? What makes a tile verifiable?
Directions: A stack ledger (ls -l rows, JSON-derived); B cross-referenced linked tiles; C merge/regroup/move after WorkExperience.
