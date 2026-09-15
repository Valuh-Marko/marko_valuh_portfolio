---
name: Marko Valuh Portfolio
description: A monochrome developer-terminal aesthetic with one rare signal color and precise, rectilinear geometry.
colors:
  ink-black: "oklch(0% 0 0)"
  paper-white: "oklch(100% 0.00011 271.152)"
  quiet-gray: "oklch(72.838% 0.00008 271.152)"
  hairline-gray: "oklch(95.824% 0.00426 271.37)"
  panel-gray: "oklch(91.592% 0.0043 271.368)"
  signal-orange: "oklch(67.25% 0.16706 41.474)"
typography:
  display:
    fontFamily: "Helvetica Now Display, sans-serif"
    fontSize: "clamp(2.5rem, 3.4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Helvetica Now Display, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1
  body:
    fontFamily: "Helvetica Now Display, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Suisse Int'l Mono, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  button: "0.25rem"
  none: "0"
spacing:
  xs: "1rem"
  sm: "2rem"
  md: "3rem"
  lg: "4rem"
  xl: "6rem"
  xxl: "8rem"
components:
  button-filled-black:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.button}"
    padding: "1em 2em"
  button-filled-black-hover:
    backgroundColor: "transparent"
    textColor: "{colors.ink-black}"
  button-transparent-black:
    backgroundColor: "transparent"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.button}"
  button-transparent-black-hover:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.paper-white}"
---

# Design System: Marko Valuh Portfolio

## Overview

**Creative North Star: "The Terminal"**

The site reads like a developer's console rendered as a portfolio: a plain ink-black ground, a monospace label vocabulary lifted straight from a CLI, and a 12-column rhythm that structures every view like a schematic rather than a marketing page. Against that cold, precise base sits exactly one warm signal — the orange accent — used the way a terminal uses a status light: rare, deliberate, and always meaningful when it appears. This is a system built to prove technical fluency through restraint, not decoration.

Geometry stays rectilinear. Buttons carry a functional 0.25rem radius (kept purely so click targets don't read as visually sharp edges to the touch, not as a stylistic softening), and card visuals are cut with angular clip-path corners rather than rounded. The home hero carries two user-pinned exceptions — a circular portrait and 0.5rem-radius project frames — recorded in Shapes as the hero's own, not as a licence to soften anything else. The system is flat by default: depth comes from black/white contrast and hairline rings and dividers, not shadows.

**Key Characteristics:**
- Ink-black and paper-white as the only structural colors; gray steps exist only for hairlines, muted text, and inactive fills.
- Signal orange appears in single, load-bearing moments: one small separator glyph, a hover/focus ring, the tooltip fill — never as a surface fill or background.
- Monospace (Suisse Int'l Mono) for every label, tag, and meta value; Helvetica Now Display for anything meant to be read as content.
- Angular, sliced clip-path corners as the signature cut; no border-radius outside the functional button exception and the hero's two pinned exceptions.
- Flat by default; the one shadow in the system (tooltip) is a targeted utility, not a systemic elevation language.

## Colors

Two structural neutrals, a narrow gray scale for hairlines and quiet text, and a single accent held in reserve.

### Primary
- **Signal Orange** (`oklch(67.25% 0.16706 41.474)`): the system's only accent. Appears as the hero's small asterisk separator, the hero portrait's hover ring, the keyboard focus ring on hero frame links, text selection inside the hero, and the tooltip's fill. Never used as a large surface fill or a default interactive state — its scarcity is what gives it signal value.

### Neutral
- **Ink Black** (`oklch(0% 0 0)`): primary text, primary button fill, hero background.
- **Paper White** (`oklch(100% 0.00011 271.152)`): primary background, primary button text, card container background; primary text and the filled-button fill on the black hero.
- **Quiet Gray** (`oklch(72.838% 0.00008 271.152)`): tech-tag text, dashed dividers, secondary/muted labels on white.
- **Hairline Gray** (`oklch(95.824% 0.00426 271.37)`): card visual placeholder fill, lightest surface.
- **Panel Gray** (`oklch(91.592% 0.0043 271.368)`): secondary panel surface, one step darker than hairline gray.
- **Quiet White** (white at 55% alpha, `rgba(255, 255, 255, 0.55)`): the single quiet-text value on the black ground — hero email link, intro sentence, references line. Hairline rings on black use white at 14–18% alpha at rest, brightening to 45% on hover.

### Named Rules
**The One Signal Rule.** Orange never fills a surface larger than a glyph, a ring, or the floating tooltip. If it needs to cover a card, a button, or a section, it is being used wrong.

**The Quiet White Rule.** Secondary text on the black ground is white at 55% alpha, not a gray token. One alpha value per view; do not stack multiple opacities of quiet text.

## Typography

**Display Font:** Helvetica Now Display (with sans-serif fallback)
**Label/Mono Font:** Suisse Int'l Mono (with sans-serif fallback)

**Character:** A heavy, confident display sans for anything meant to be felt (hero role, section titles) paired with an uppercase monospace for anything meant to be scanned (labels, tags, meta data) — the pairing itself does the work of separating "content" from "system chrome."

### Hierarchy
- **Display** (700, `clamp(2.5rem, 3.4vw, 3rem)`, line-height 1.05, letter-spacing -0.02em): hero role line ("Frontend Engineer") only. Sized to sit as a calling card, not a masthead.
- **Headline** (700, 3rem/`$font-h3`, line-height 1): section titles.
- **Title** (500, 2rem/`$font-h5`, line-height 2rem): card titles.
- **Body** (400, 1.25rem/`$font-lg`, line-height 1.45–1.5): hero intro sentence (max-width 30rem, `text-wrap: balance`) and longer-form copy.
- **Label** (400, 0.75rem/`$font-xs`, letter-spacing 0.06–0.14em, uppercase): section labels, tech tags, tooltip meta, hero email and references. Always monospace; uppercase except the email address, which stays lowercase because it is an address.

### Named Rules
**The Mono-Means-Meta Rule.** Any text set in Suisse Int'l Mono + uppercase is system chrome (a label, tag, or meta value), never primary content. If it's something the visitor is meant to read as prose, it goes in Helvetica Now Display.

**The 11px Floor Rule.** Because the root font-size is fluid down to 11px, mono labels are set at `max($font-xs, 11px)` so they never fall below 11px on the smallest viewports.

## Layout

A 12-column grid at `md` and above (single column below, 2.5rem gap; 4rem gap at `md`+), with a `.c-section` pattern that reserves the first 2 columns for a mono label and the remaining columns for content — this is the "column-like breakdown" that structures every section. Container max-width is 1920px with inline padding that steps from 1rem to 2rem at `lg`. Base font-size itself is fluid via `html { font-size }` stepping 11px → 16px across breakpoints (480 / 640 / 768 / 1024 / 1280 / 1440), so the whole rem-based type and spacing scale grows with viewport rather than being fixed per breakpoint.

The home hero is a full-viewport (`100dvh`, min 44rem) two-row grid: a vertically centered text column on grid columns 4–9 (`grid-column: 4 / span 6`), then a shelf row whose element widths are derived from the same 12-column geometry — one column = `(min(100vw, 1920px) − 2×2rem padding − 11×4rem gutters) / 12`; the three frames share the container width equally. Below `md` only the middle frame renders, at full container width.

Spacing runs on a 1rem-to-8rem scale (`$spacing-1` … `$spacing-8`) used consistently for section padding, grid gaps, and column gaps. Inside the hero stack the rhythm is tighter: 0.75–1.5rem steps between elements.

## Elevation & Depth

Flat by default. Depth is conveyed through black/white contrast, hairline rings and dashed dividers (`border-top: 1px dashed`) rather than shadows. The one exception is the tooltip, which carries a soft drop shadow to lift it above page content since it's a floating, cursor-following element — a targeted utility for a genuinely floating surface, not a systemic elevation language the rest of the system follows.

On the black ground, a 1px spread-only `box-shadow` (no offset, no blur) is used as a hairline ring around the hero's project frames. It is a border, not depth: it stands in for `border` so the ring never eats into the frame's box or fights the transform Motion writes on mount. Hover on a frame lifts it 0.5rem via the CSS `translate` property and brightens the ring; the lift is a position change, not a shadow change.

### Shadow Vocabulary
- **Tooltip float** (`box-shadow: 0 0.25rem 0.5rem color-mix(in oklch, black 35%, transparent)`): used only on the cursor-following tooltip panel, to separate it from whatever it's floating over.
- **Hairline ring** (`box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.14)`, hover `0.45`): a border drawn with spread. Not a shadow; carries no offset or blur and must never gain one.

### Named Rules
**The Flat Ground Rule.** Sections, cards, and buttons never cast a shadow. If something needs to read as "above" the page, that's what the tooltip's floating treatment is for — not a precedent to extend. A spread-only ring is a border and does not count.

## Shapes

Rectilinear — no border-radius softening anywhere except the functional button and the hero's two pinned exceptions below. The signature move is the sliced corner: card visuals and the header/work-experience panels are cut with a `clip-path: polygon(...)` that shaves one corner off at an angle, giving images an engineered, cut-plate silhouette instead of a soft crop.

- **Buttons**: 0.25rem radius — kept only so click targets don't feel visually sharp to the touch; not a stylistic softening and not a precedent for rounding anything else.
- **Hero portrait** (user-pinned, 2026-09-15): a 3.5rem circle (`border-radius: 50%`) with a 1px inset white outline at 18% alpha (`outline`, not `box-shadow`, so the reveal mask cannot clip it) that turns signal-orange on hover. The circle marks a person, not a panel.
- **Hero project frames** (user-pinned, 2026-09-15): `0.5rem` radius with a 1px hairline ring, reading as browser windows. Copied from the user's reference image; this radius belongs to the hero shelf only.
- **Everything else**: hard corners or the angular clip-path cut.

### Named Rules
**The Sliced Corner Rule.** When an image or panel needs a distinctive edge, cut one corner at an angle via clip-path. Don't round it. The only rounded exceptions are the hero portrait circle and the hero's 0.5rem project frames; they are the hero's own and do not extend to cards, panels, or images elsewhere.

## Components

Precise and utilitarian: clean borders, mono labels, minimal ornamentation. Every component reads as tooling rather than marketing chrome.

### Buttons
- **Shape:** 0.25rem radius, mono uppercase label, generous horizontal padding (`1em` with `2em` internal gap).
- **Filled (black/white variants):** solid fill + matching border; on hover, fill drops to transparent and text/border invert to the fill color — an inversion, not a color change. On the black hero the filled-white variant is the single action.
- **Transparent (black/white variants):** border-only at rest; on hover, fills solid with the inverse of its border color.
- **Sizes:** `sm` (2xs label), default, `lg` (sm label) — scale only changes label size, not shape or padding logic.
- **Link behaviour:** a `to` value beginning `mailto:` or `http(s):` renders a plain `<a>`; internal paths render a router `Link`. Same visual either way.

### Cards (Stacking Cards)
- **Corner Style:** rectilinear card container; the card's visual panel is clip-path-sliced on one corner.
- **Background:** paper-white container on a dashed-gray top border; visual panel defaults to a diagonal hairline hatch over hairline-gray until an image loads.
- **Shadow Strategy:** none — see Elevation & Depth.
- **Layout:** two-column split at `md`+ (content left, sliced visual right), collapsing to stacked/content-only below `md`.
- **Tech tags:** mono uppercase list, middle-dot separated, quiet-gray.

### Tooltip
- **Style:** fixed-position, cursor-following panel with a signal-orange fill and black foreground text; the one place accent color fills a real surface, justified by its floating, secondary nature (see The One Signal Rule). In the hero it is triggered by hovering the portrait.
- **Shadow:** soft drop shadow (see Elevation & Depth) — the system's only shadow use.
- **Content:** an ID card. The portrait bleeds edge to edge across the top (4:3, top-anchored, full colour), then a caption: name at 700, and a two-row mono uppercase meta grid (Based in, Experience). Role is omitted because the panel opens over the hero headline that already states it.

### Hero Stack
A centered calling card on grid columns 4–9, everything text-aligned center. Top to bottom: circular portrait (3.5rem, tooltip trigger) → mono email link (lowercase, quiet-white, 0.06em tracking; underlines and goes full white on hover/focus) → role line in Display → intro sentence in Body at quiet-white, max-width 30rem, balanced → orange asterisk separator (a 0.75rem inline SVG on `currentColor`, the view's one signal) → mono uppercase references line (0.14em tracking, quiet-white) → one filled-white button. Reveals on load with the existing text-reveal/mask stagger.

### Hero Shelf
- **Structure:** a `.container` flex row of three project screenshot frames under the stack, filling the container width as equal shares (`flex: 1`, 3rem gap) at `md`+; below `md` only the middle frame renders, at full container width. Each frame links to the project's live site in a new tab. The row is shorter than the frames (`clamp(12rem, 30vh, 24rem)` at `md`+, `clamp(9rem, 24vh, 16rem)` below) so the hero's bottom edge cuts every frame.
- **Frames:** 16:10, 0.5rem radius, 4% white fill under a top-anchored `object-fit: cover` screenshot, 1px hairline ring at 14% white.
- **Hover:** `translate: 0 -0.5rem` over 0.5s on the site's standard ease, ring brightens to 45% white. Keyboard focus draws a 2px signal-orange outline offset 2px.
- **Motion:** frames rise from below (`y: 40%` → 0, 0.6s) staggered left to right by 60ms from 0.3s, as the stack lands; reduced-motion renders them in place.

## Do's and Don'ts

### Do:
- **Do** keep orange to a single glyph, ring, or floating-tooltip moment per view — never a fill for a static, always-visible surface.
- **Do** use the sliced clip-path corner for any new image or visual panel that needs a distinctive edge.
- **Do** set all labels, tags, and meta text in uppercase Suisse Int'l Mono, floored at 11px.
- **Do** keep sections flat; let the dashed hairline, hairline rings, and black/white contrast carry separation.
- **Do** set quiet text on the black ground at white 55% alpha.

### Don't:
- **Don't** round any corner beyond the button's functional 0.25rem, except the hero portrait circle and the hero's 0.5rem project frames.
- **Don't** add a drop shadow to a card, section, or button — that vocabulary belongs to the floating tooltip only. A spread-only 1px ring is a border, not a shadow, and must never gain offset or blur.
- **Don't** use signal-orange as a background fill for a large or persistent surface.
- **Don't** set body copy in the mono font — it's reserved for system chrome (labels, tags, meta).
- **Don't** add textures (grids, crosshairs, glows) to the black ground; it is plain.
