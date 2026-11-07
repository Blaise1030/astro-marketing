---
name: Design
description: >-
  Visual and interaction design for this site's dark/light ledger look. Use when
  building or changing landing sections, layout, typography, color, spacing,
  components, motion, or when asked to improve UI, restyle a page, or match the
  Orso design system.
---

# Design

Follow this site's visual direction when building or changing UI. Prefer helpful,
quiet craft over decoration. Do not invent a second brand look.

`DESIGN.md` is the source of truth for tokens and decisions. Read it before
changing styles, and update both `DESIGN.md` and the `@theme` / `:root` /
`.dark` values in `src/styles/global.css` when you change the system.

For a greenfield redesign of a new surface (new aesthetic from scratch), also
read the project `frontend-design` skill under `.agents/skills/frontend-design`.
This Orso Design skill wins when the work should stay on the existing ledger.

## What this site looks like

A dark, editorial ledger (with a matching light theme): near-black or off-white
ground, white or near-black ink, hairline rules instead of shadows, and one blue
action colour. Quiet and technical — mono labels, generous space, dotted horizon
under the hero and closing CTA. One visual idea per section; copy does the rest.

## Workflow

1. Read `DESIGN.md` for the relevant tokens (color, type, layout, components).
2. Reuse existing section components, shadcn/ui primitives, and utility classes
   before inventing new patterns.
3. Edit the section or page in place; keep root `<section id>` anchors stable.
4. Check the change in **both** themes (header toggle, or
   `localStorage.setItem("orso-theme", "light")` then reload).
5. For spring/gesture-heavy motion, use `.agents/skills/apple-design`. For token
   or Tailwind v4 system work, use `.agents/skills/tailwind-design-system`.

## Layout

- One centred column: `.shell` (`max-w-7xl`, consistent side padding). Header,
  landing sections, articles, and footer share it.
- Sections use `py-section` (7rem from `sm` up; ~5rem on phones). One job, one
  headline, one short supporting sentence per section.
- Hero and closing CTA are the only full-bleed atmospheric moments (dotted
  globe / terrain). Do not add inset hero cards, floating media tiles, or
  collages unless `DESIGN.md` already requires that pattern.
- Feature and ledger grids separate with 1px `hairline` gaps, not raised card
  stacks.

## Color and surfaces

- Use semantic tokens: `bg-ground`, `bg-panel`, `bg-raised`, `text-ink`,
  `text-muted-ink`, `text-faint`, `border-hairline`, `bg-brand`, `text-on-brand`,
  `text-link`, plus shadcn names (`bg-background`, `text-foreground`, …).
- One blue (`brand`) for primary actions — not body text or large fills.
- `live` is a small green signal only; `danger` only for destructive/invalid.
- Never hard-code `white` / `black` / raw `rgb()` for decorative surfaces —
  use `bg-wash`, `bg-glow`, `text-mark`, `--dot`, or `--globe-*` so both themes
  keep working.
- Flat elevation: no drop shadows on page content (exceptions: mobile menu,
  Help search, `.btn-gloss` lift). Depth = hairlines + `ground` → `panel` →
  `raised`.

## Typography

- System sans throughout. Headings weight 500; body 400. Use `text-h1` /
  `text-h2` / `text-h3` / `text-body` / `text-label` / `text-eyebrow`.
- Signature heading: two lines — first `ink`, second `muted-ink`.
- Body usually capped ~28–32rem. Eyebrows are small, uppercase, wide-tracked,
  `faint`. Mono only for machine labels (paths, diffs, status).
- Avoid generic AI typography tells: single-word accent colors in headlines,
  middle-dot meta rows, emoji, or a second display face unless `DESIGN.md` adds
  one.

## Components

- Stock shadcn/ui (Base UI) in `src/components/ui`, themed only through tokens.
  Leave generated variants/sizes alone; pass layout classes at the call site.
- Primary CTAs: `buttonVariants` + `.btn-gloss`, often `rounded-full`. Nav is
  never a button.
- Cards for blog/help tiles and empty states — not for every block of content.
  Prefer hairlines and space over card chrome when interaction does not need a
  container.
- Compound Base UI pieces (Accordion, Dialog, …) live in one React island with
  `client:*` (see `faq-list.tsx`). Static Button/Card/Badge need no island;
  anchors that look like buttons use `buttonVariants()`.
- New primitive: `npx shadcn@latest add <name>`, then theme via tokens.

## Motion

Almost none by default. Accordion ~200ms; link color transitions; hero arrow
nudges on hover. No parallax, scroll-driven section reveals, or auto-advancing
carousels. Respect `prefers-reduced-motion`.

## Voice on the page

Plain, friendly, ownership-led. Talk about changes, previews, and publishing —
not branches, commits, or merges. Buttons use direct verbs ("Start building").
Mono labels may be technical; surrounding copy stays human.

## Anti-patterns

- Purple-on-white / indigo glow kits, warm-cream + terracotta serif kits, or
  broadsheet newspaper kits that fight this ledger
- SaaS card walls, soft grey shadows under every block, gradient washes as
  decoration
- A second accent colour, brand-colored body text, or pure `#000` / `#fff` ground
- Rewriting `DESIGN.md` tokens in components as one-off hex values
- Shipping UI that only works in dark (or only in light)

## Quick review output

When asked to review design for a page or section, report:

1. **Blockers** — broken theme tokens, unreadable contrast, layout that escapes
   `.shell`, missing states (empty/loading/error)
2. **High impact** — hierarchy, spacing, off-brand color/type, card clutter
3. **Polish** — hairlines, muted second headline line, CTA gloss, both themes
4. **Suggested edits** — concrete class or structure changes, not vague taste notes
