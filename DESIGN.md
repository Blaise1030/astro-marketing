---
version: beta
name: Orso
description: A free studio for Astro sites, running on the agent you already pay for.
themes:
  dark:
    ground: "#0b0b0c"
    panel: "#161618"
    raised: "#101012"
    ink: "#ededee"
    muted-ink: "#a1a1a6"
    faint: "#76767b"
    hairline: "#1b1b1d"
    hairline-strong: "#29292c"
    live: "#86e7b0"
    brand: "#2f6cec"
    brand-pressed: "#1f5cd8"
    brand-ink: "#8fb0ff"
    on-brand: "#ffffff"
    link: "#ededee"
    danger: "#ff6467"
    focus-ring: "#7d9df0"
  light:
    ground: "#fcfcfc"
    panel: "#ffffff"
    raised: "#f6f6f7"
    ink: "#1d1d1f"
    muted-ink: "#6b6b70"
    faint: "#8e8e93"
    hairline: "#ededee"
    hairline-strong: "#e1e1e3"
    live: "#0f7a45"
    brand: "#2f6cec"
    brand-pressed: "#1f5cd8"
    brand-ink: "#1f5cd8"
    on-brand: "#ffffff"
    link: "#1d1d1f"
    danger: "#d92d20"
    focus-ring: "#1f5cd8"
typography:
  h1:
    fontFamily: "Geist Variable, Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.03
  h2:
    fontFamily: "Geist Variable, Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.125rem, 3.6vw, 2.625rem)"
    fontWeight: 500
    lineHeight: 1.08
  h3:
    fontFamily: "Geist Variable, Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: 1.1875rem
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: "Geist Variable, Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: 0.9375rem
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Geist Variable, Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: 0.8125rem
    fontWeight: 500
    lineHeight: 1.5
  eyebrow:
    fontFamily: "Geist Variable, Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: 0.6875rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.08em
  mono:
    fontFamily: "Geist Mono Variable, Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
rounded:
  sm: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  2xl: 1rem
  full: 9999px
spacing:
  section: 7rem
---

## Overview

A bright, framed product page in the manner of Aceternity's product landing template. One centred column (`max-w-6xl`) runs between double hairline rails; sections stack edge to edge inside it, separated by a hairline with a ringed dot pinned to each rail. Everything is set in Geist: headlines are left-aligned at medium weight (an accent phrase is marked with `Accent.astro` but shares the same face), and small mono labels in Geist Mono carry metadata. Product UI is shown in framed trays — an outer translucent tray with a hairline ring holding an inner surface — and illustrations float as small white cards on a dotted well. One blue action colour (`brand`), used for buttons, tags, selection boxes and nothing decorative.

## Themes

Light is the default. The theme is a class on `<html>`: no class for light, `.dark` for the night variant. An inline script in `src/layouts/Base.astro` resolves it before first paint — a stored choice in `localStorage` (`orso-theme`) wins, otherwise light — then sets `color-scheme` and the `theme-color` meta. The header toggle flips the class and writes the choice back.

Tokens are runtime custom properties, not build-time constants:

- `--palette-*` holds every colour, defined in `:root` (light) and overridden in `.dark`.
- `--wash`, `--wash-strong`, `--glow`, `--glow-soft`, `--mark`, `--dot`, `--globe-*` and `--btn-lift` hold the decorative surfaces that would otherwise be literal white — they flip with the theme, and utilities such as `bg-wash`, `bg-glow`, `text-mark`, `.wash-top`, `.halo`, `.dot-field` and `.btn-gloss` read them. The `--globe-*` group is the one decorative set tinted toward brand blue: the hero Three.js point globe reads `--globe-dot`, and the closing CSS terrain still uses the full set.
- `@theme inline` maps both vocabularies straight onto those variables, so `bg-ground`, `text-ink`, `bg-primary` and every shadcn/ui primitive follow `.dark` at runtime. Never point a `--color-*` at another `--color-*`: `@theme inline` inlines the value, and the chain breaks the moment the class flips.

Because `.dark` lives on `<html>`, every token inherits from the root element.

## Tokens

`src/styles/global.css` holds this file's values in `:root` / `.dark` and in a Tailwind `@theme` block, and components use the generated utilities rather than raw palette values. `@theme inline` then maps shadcn/ui's semantic names onto the same variables, so the palette and the component library cannot drift apart. The mapping:

- Palette → `bg-ground`, `bg-panel`, `bg-raised`, `text-ink`, `text-muted-ink`, `text-faint`, `border-hairline`, `border-hairline-strong`, `bg-live`, `bg-brand`, `text-on-brand`, `text-link`, plus `bg-wash`, `bg-wash-strong`, `bg-glow` and `text-mark` for theme-aware decorative fills.
- shadcn/ui → `bg-background`, `text-foreground`, `text-muted-foreground`, `bg-primary`, `text-primary-foreground`, `border-border`, `bg-card`, `ring-ring`, `bg-muted`, `bg-secondary`.
- Type → `text-h1`, `text-h2`, `text-h3`, `text-body`, `text-label`, `text-eyebrow` (each carries its line height, tracking and weight), and `font-mono` for machine labels.
- Radius → `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-full`.
- Spacing → `py-section` (7rem), plus numeric utilities for everything else. Only one named spacing token exists, because named spacing values also answer `max-w-*` lookups and would collapse the container widths.

In shadcn/ui vocabulary `primary` is the blue action colour, `primary-foreground` is white, `foreground` is ink, `secondary` / `muted` / `accent` are `raised` surfaces, and `card` / `popover` are `panel`.

## Colors

Roles are explicit; values are given dark / light and both live in the frontmatter:

- `ground` (`#080808` / `#f7f7f5`) is the page. Never use pure `#000000` or `#ffffff` for it.
- `panel` (`#0c0c0c` / `#ffffff`) is the card and popover fill; `raised` (`#121212` / `#eeedeb`) is quiet surfaces and inputs.
- `ink` (`#f5f5f5` / `#0b0b0b`) is headings and body copy. `muted-ink` (`#9a9a9a` / `#565656`) is supporting copy and the second line of every heading. `faint` (`#7a7a7a` / `#6e6e6e`) is only for mono metadata, labels and decorative detail.
- `hairline` (`#232323` / `#e2e1dd`) is every 1px rule and border; `hairline-strong` (`#383838` / `#c8c7c2`) is the rare emphasised edge.
- `brand` (`#2f6cec`, the same in both themes) fills primary buttons and nothing else large; primary buttons carry the `.btn-gloss` gradient (`#4576ee` → `#2f6cec` → `#2160e2` top to bottom) with white `on-brand` text. `brand-pressed` (`#1f5cd8`) is the pressed end of that gradient. Always use this trio together.
- `link` is the same ink as text: links are signalled by underline or an arrow, not by a second colour.
- `live` (`#86e7b0` / `#0f7a45`) is a single green signal: live previews, connected agents and "you already have" checks. It is never a large surface.
- `danger` (`#ff6467` / `#d92d20`) exists only for shadcn/ui's `destructive` and invalid form states.
- `focus-ring` (`#7d9df0` / `#1f5cd8`) is the focus outline; in shadcn/ui it is `ring`. In dark it is a lighter tint of the blue so it reads on both the ground and a blue button; in light it is the pressed blue, dark enough to separate from the page and from the button fill.
- The decorative variables follow the same rule: `--wash` and `--wash-strong` are white at low alpha in dark and black at low alpha in light, `--glow` is white in dark and a faint blue sky-glow above the horizon in light, and `--mark` and `--dot` are the same idea applied to the outline marks and dotted fields. The `--globe-*` quartet (`dot`, `wash`, `line`, `inner`) is the deliberate exception: it keeps the hero point globe and the closing terrain a step toward `brand` blue in both themes, always quiet enough to read as atmosphere rather than a solid object.

## Typography

Geist throughout (self-hosted via `@fontsource-variable/geist`), Geist Mono for labels, dates and code — no other faces. Headings are weight 500, body 400. `text-h1` runs from 2.75rem to 4rem (`-0.04em`), `text-h2` from 2.125rem to 2.625rem (`-0.035em`); both are left-aligned and balanced. A headline may mark one accent phrase with `Accent.astro`, which renders in the same face.

Body copy is `text-body` (0.9375rem) at 1.65 line height, usually capped at 28–32rem. Labels and navigation are `text-label` (0.8125rem), and eyebrows are `text-eyebrow`: 0.6875rem, uppercase, lightly tracked, `faint`.

Machine content — file paths, diffs, terminal prompts and status — uses `font-mono` at 11–12.5px. It is the only place where monospace appears.

## Layout

Content sits in one centred column, `.shell`: `max-w-7xl` (80rem) with 1.5rem side padding, and 2rem from `sm` up. The header, every landing section, the article pages and the footer use the same column, so the logo, section headings and card edges line up.

The header is 4rem tall, sticky, and uses `.header-fade`: a top-to-bottom ground gradient with a soft blur, taller than the bar so content scrolling underneath dissolves instead of hitting a hard edge. No rule under it. The hero is centred with 6rem–9rem of top space. Each section carries `py-section` (7rem) at `sm` and up, and 5rem on phones, so the visual gap between sections is roughly 14rem. Feature and ledger grids are separated by 1px `hairline` gaps rather than raised cards, and text columns sit under the shape band with a 2rem gap.

The hero and the closing call to action are the only full-bleed moments: the hero carries a Three.js point globe (`HeroGlobe`, hydrated with `client:visible`) that slowly turns under the copy, and the CTA carries a smaller dotted CSS terrain. Both use the `--globe-*` blue tint, stay decorative (`aria-hidden`, `pointer-events-none`), and fade into the ground. The hero globe clips at its band; the CTA terrain uses `overflow-x-clip` on the section so the wide arc isn't cut sideways, and a `overflow-clip` wrapper around `<main>` + `<footer>` in `Base.astro` lets the dotted arc fade behind the footer without extending the page past the footer's bottom edge — the footer is `relative` so its text stays above the arc.

## Elevation & Depth

Flat. No drop shadows on page content, no gradients as backgrounds except the faint radial washes behind the shape band, the terminal and the dotted horizons, plus the primary button's gloss (`.btn-gloss`), which uses a short inset highlight and a soft lift to read as a physical key. Depth comes from hairlines, a one-step surface lift (`ground` → `panel` → `raised`) and the dot fields. The mobile menu panel and the Help search input are the surfaces that carry a shadow, so they separate from the page. In light mode the washes and halo flip to low-alpha black, so nothing turns muddy grey.

## Shapes

Buttons are full pills (`rounded-full`) at every size. Cards and panels use `rounded-xl` (0.75rem); badges are pills; the terminal window uses `rounded-xl`. Borders are 1px `hairline`; cards keep shadcn's 1px foreground ring at 10% instead of a shadow. Geometric feature marks are 1px outline SVGs in `text-mark` (30% white in dark, 20% black in light).

## Logo

A walking bear in silhouette, facing right: a pronounced shoulder hump, a back that slopes down to a low rump, a low-carried head with a small round ear and a pointed snout, and four thick legs with broad paws. The mark is monochrome only, one solid path in `currentColor` (`src/components/landing/Logo.astro`, viewBox about 41:24), so it is sized by height (`h-5 w-auto`). Use `text-ink` next to the wordmark "<span faint>project</span> orso"; never fill it with `brand` or put it on a coloured tile. `public/favicon.svg` uses the same path centred in a square and switches between near-black and near-white with `prefers-color-scheme`.

## Components

The UI uses stock shadcn/ui components (Base UI flavour) from `src/components/ui`. They are themed only through the token layer in `src/styles/global.css`; the component code, variants and sizes are left as generated. Landing-page sections and content routes compose them:

- **Button** — the stock `default` (blue fill, white ink) and `link` variants, always pill-shaped (`rounded-full`). Every `default` button also carries `.btn-gloss`: a blue vertical gradient with an inset top highlight, a hairline bottom shade and a soft blue lift, brightening on hover and darkening when pressed. CTAs pass `btn-gloss h-10 px-5 text-[0.82rem]`; header and article links are plain anchors or `buttonVariants()` when they need button metrics. Navigation is never a button.
- **Card** — the stock card with its ring, used for blog/help tiles and empty states.
- **Badge** — the stock pill in `outline` for the hero status, live-preview labels, tags and section labels. It is always a small signal, never a CTA.
- **Accordion** — the stock Base UI accordion in one React island. The built-in chevrons are hidden in `faq-list.tsx` in favour of a plus/minus mark; the trigger is 0.9375rem, normal weight, with 1.25rem vertical padding and `border-b` hairlines.
- **Separator** — the stock hairline rule; the footer no longer uses one, so its top edge and bottom bar are separated by whitespace alone.
- **Empty** — the “no posts / no help docs yet” states.
- **Links** — anchors that look like buttons use `buttonVariants()` rather than a React island, so the static HTML stays JavaScript-free; article body links ride the `prose dark:prose-invert` typography.
- **Theme toggle** — a plain round icon button in the header (`#theme-toggle`), built from two inline SVGs: a sun that shows in dark, a moon that shows in light. It is wired to the inline script at the end of the layout, so it needs no island and no hydration.
- **HelpSearch** — Pagefind UI themed in `global.css` (no `pagefind-ui.css`): `panel` fill, theme ink, hairline border, soft `--help-search-shadow` (tuned per theme), and no focus outline. A static shell matching the input paints first so mounting Pagefind does not flash or shift the page. Results open in a `panel` dropdown with a hairline border, anchored under the bar (`position: absolute; top: 100%`) so the help grid below does not shift.
- **HeroGlobe** — a Three.js point sphere in `src/components/hero-globe.tsx`. Not currently rendered on the landing page.

Compound Base UI components must be composed inside a single React component and hydrated with `client:*`; splitting their parts across `.astro` files breaks their context (see `src/components/faq-list.tsx`). Static primitives need no client directive, and anchors should use `buttonVariants()` rather than an island.

## Motion

Quiet. Pill, headline, copy, CTAs and the product window rise in with a blur-to-sharp entrance (`animate-hero-in`, 900ms, expo-out, staggered). The headline's selection-box label cycles agent / claude → cursor → codex with a 200ms blur swap. The label is drawn with CSS (`content: attr(data-label)`) and rotated by a small script at the end of `Hero.astro`, so no island or script sits inside the `<h1>` and the heading text stays clean. Below the hero, sections reveal once on scroll (`data-reveal` + `IntersectionObserver` in `Base.astro`, optional `--d` stagger). If `public/hero-demo.webm` / `.mp4` exist, the recording plays over the product mockup. The accordion animates over 200ms; links transition colour; arrows nudge on hover. CSS motion is disabled under `prefers-reduced-motion`. No parallax, no scroll-linked transforms, no glow effects.

## Page frame

- **Rails and dividers:** `.rails` draws an 8px double hairline down each side of the column (header, landing page and footer all use it). `components/landing/Divider.astro` is the section rule with its two ringed dots.
- **Section intro:** `components/landing/SectionIntro.astro` — a tag (`Tag.astro`: `bg-brand/[0.08] text-brand-ink`, `rounded-md`, 12.5px), an `h2` (`text-h2`, medium, balanced) and an optional 15.5px lead. Accent phrases use `Accent.astro` (Geist, same as the headline).
- **Selection box:** `components/landing/Selection.astro` frames a word with a brand outline, four 7px corner handles and a mono label (top or bottom). Used once in the hero and once in the closing CTA.
- **Surfaces:** `.frame` + `.frame-inner` (22px tray, 16px inner) for product windows and code; `.dot-well` for illustration wells; `.float-card` for the small UI pieces inside them.
- **Grids:** feature cells, lists and stat rows are divided by dashed `hairline-strong` rules, not boxed.
- **Buttons:** 36px tall, 10px radius, 13.5px medium. `.btn-gloss` is the blue key with a 1px darker ring; `.btn-quiet` is the surface key with a hairline ring.
- **Blog and Help:** every page sits in `Rails.astro` and opens with `PageHeader.astro` (back link in mono, tag, 52px headline with an optional accent, lead). Posts are framed `BlogCard`s whose fallback cover is a floating Markdown card on a dotted well; topics use `TopicCard.astro`; doc lists use `DocRows.astro` (numbered, dashed rules). Blog filters are a sticky segmented control. Rendered Markdown uses `proseClass` from `src/lib/prose.ts`.
- **Order:** Hero (pill, headline with selection box, CTAs, product window) → tools strip ("Underneath…") → About (dev tool → what the team sees, why it matters) → Possibilities (CMS limits vs what the team can ask an agent for) → Studio features (3×2) → Workflow steps + agent window → Why GitHub (6 reasons, each tagged with the GitHub feature behind it) → Why now (quote, reasons, results, the catch) → Compare → FAQ → CTA → footer.

## Do's and Don'ts

Do keep one blue action per section, use the semantic tokens (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`) and the stock shadcn/ui primitives. Do use hairlines and space to separate things. Do write headings as two lines with the second in `muted-ink`. Do use `.shell` for every full-width section. Do check every change in both themes — the header toggle, or `localStorage.setItem("orso-theme", "light")` in the console.

Don't add shadows (except the mobile menu, the Help search input, and the button gloss), colour accents or gradients without updating this file first. Don't use `brand` for body text or large surfaces, don't invent a second accent colour, and don't reach for raw palette values when a token exists. Never hard-code `white`, `black` or a raw `rgb()` for a decorative surface: use `bg-wash`, `bg-glow`, `text-mark`, `--dot` or the `--globe-*` variables so both themes keep working. Text on a blue fill is always `on-brand`. Add a new primitive with `npx shadcn@latest add <name>` and leave the generated variants, sizes and component code alone; theme it through the token layer and pass layout classes at the call site.

## Voice & Tone

Plain, friendly and benefit-led, with short sentences and no jargon. Headlines state ownership and cost plainly ("Your site. Your repo. Your agent.") and buttons use direct verbs such as "Start building". Talk about changes, previews and publishing — never about branches, commits or merges, and never about CI or deploy pipelines. Say "free and open source", never "all rights reserved", and always close on ownership: your repo, your site, no lock-in.

Small mono labels can be technical ("src/pages/index.astro", "Preview rebuilt in 0.8s") because they illustrate the product, but surrounding copy stays human.

## References

- **Format** — the frontmatter token block plus prose sections follows the convention published by [DesignMD](https://www.designmd.co).
- **Components** — [shadcn/ui for Astro](https://ui.shadcn.com/docs/installation/astro), Base UI flavour. Primitives live in `src/components/ui`, configuration in `components.json`, and the semantic mapping in `src/styles/global.css`.
- **Product** — copy and positioning live on the landing page (`src/components/sections/`); this file governs appearance, not message.
