---
version: 1
slug: "single-project-page-singleprojectpage-jsx-e8f13213"
primary_target: "src/pages/single-project-page/SingleProjectPage.jsx"
related_targets: ["public/data/projects.json"]
---

# Surface brief: /projects/:name (single project / case study page)

Scope: the case-study surface at `/projects/upravnik-platform` (other projects use the same route and fall back to a lighter hero with title, excerpt and stack). Mode: Read. Audience: engineers first, then recruiters. Job: understand what was built and how judgement was exercised. Proof: verified repo facts only, with no invented users or deployments. Constraints: The Terminal (DESIGN.md) is unchanged; all copy lives in `public/data/projects.json`.

## Direction contract

THESIS: One building seen from three seats (resident, upravnik, super admin), then the engineer's seat underneath that explains how those seats are kept apart and how the money stays honest. It refuses the category default: a uniform stack of numbered "Overview / Problem / Architecture / Results" blocks in one rhythm.

OWN-WORLD: The Terminal with nothing added. Ink black and paper white, quiet white at 55% on black, dashed 1px hairlines, uppercase Suisse mono labels only (11px or larger), Helvetica content, sliced-corner frames, and one orange signal per view. The parts specific to this surface are figures drawn in code (domain tree, access matrix, ledger with a storno pair, growth deltas) and hatched SCREENSHOT PENDING slots with mono captions.

STORY: The visitor learns the domain (Platform → Complex → Building → Unit → Account) and sees what each role does and what protects it. Then they read the deny-by-default access model, the immutable finance ledger, provisioning, process and tests. They come away convinced that one engineer made careful, honest tradeoffs, and either click through to the next project or keep the page open.

FIRST VIEWPORT: A full-height black hero with no meta line above the title. The title block sits centred both ways in the space above the contents: the title "Upravnik Platform" (48–72px), the domain hook in quiet white, the one orange asterisk, and three mono spec lines at 55% white. The spec lines are: PRE-1.0 · Jul–Oct 2026; three verified product highlights in full white, split by slashes (IPS QR payments / Auto-matched bank statements / Built on Serbian housing law); and the stack. No counts of models, endpoints or tests in the hero, and never big-number cards. Pinned to the bottom edge is the primary action: a three-cell contents index (Three seats · Access · Money; a fourth was tried and rejected), split by dashed hairlines, stacked below sm, one row from sm. Each cell is an anchor with a down arrow and a one-line note, and Lenis glides to the section (immediate under reduced motion). The only motion is the title/hook reveal and the cells rising left to right.

FORM: Three seats. It was #5 on my ordered grounded list (1 Datasheet + chapters, 2 Follow the money, 3 Release log, 4 Docs index, 5 Three seats, 6 Diff view), was dealt in the surface round and chosen by the user. Seed key 1d89e508.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
