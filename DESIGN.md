---
version: beta
name: Orso
description: A free studio for your site, running on the agent you already pay for.
themes:
  dark:
    ground: "#080808"
    panel: "#0c0c0c"
    raised: "#121212"
    ink: "#f5f5f5"
    muted-ink: "#9a9a9a"
    faint: "#7a7a7a"
    hairline: "#232323"
    hairline-strong: "#383838"
    live: "#86e7b0"
    brand: "#2f6cec"
    brand-pressed: "#1f5cd8"
    on-brand: "#ffffff"
    link: "#f5f5f5"
    danger: "#ff6467"
    focus-ring: "#7d9df0"
  light:
    ground: "#f7f7f5"
    panel: "#ffffff"
    raised: "#eeedeb"
    ink: "#0b0b0b"
    muted-ink: "#565656"
    faint: "#6e6e6e"
    hairline: "#e2e1dd"
    hairline-strong: "#c8c7c2"
    live: "#0f7a45"
    brand: "#2f6cec"
    brand-pressed: "#1f5cd8"
    on-brand: "#ffffff"
    link: "#0b0b0b"
    danger: "#d92d20"
    focus-ring: "#1f5cd8"
typography:
  h1:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.9rem, 6.8vw, 4.75rem)"
    fontWeight: 500
    lineHeight: 1.02
  h2:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.1rem, 4.2vw, 3.25rem)"
    fontWeight: 500
    lineHeight: 1.04
  h3:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: 1.1875rem
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: 0.9375rem
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: 0.8125rem
    fontWeight: 500
    lineHeight: 1.5
  eyebrow:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: 0.6875rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.18em
  mono:
    fontFamily: "ui-monospace, SF Mono, SFMono-Regular, Menlo, Consolas, monospace"
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

A dark, editorial ledger. White ink on one near-black ground, hairline rules instead of shadows, and a single blue action colour: primary blue. The page is quiet and technical rather than decorative — small mono labels, generous negative space, and a dotted 1-bit horizon under the hero and the closing call to action. There is one visual idea per section, and the copy does the rest.

The direction is adapted from Lexington's Buio theme: near-black ground, white ink, a grey second line on every heading, and hairline ledgers. The Orso palette is monochrome apart from one blue primary, which is reserved for actions, and the voice stays plain and ownership-led.

The site ships in **two themes**. Dark is the signature ledger: near-black ground, white ink. Light is the same ledger in daylight: off-white ground, near-black ink, the same hairlines, the same blue, and the same dotted horizons drawn in dark ink. Neither is a filter of the other — each palette is tuned on its own, so the light theme keeps contrast without looking like an inverted screenshot.

## Themes

The theme is a class on `<html>`: `.dark` for the ledger, no class for daylight. The server renders `.dark` as the default, so a reader with JavaScript disabled keeps the signature dark page. An inline script in `src/layouts/Base.astro` then resolves the theme before first paint — a stored choice in `localStorage` (`orso-theme`, `light` or `dark`) wins, otherwise the OS `prefers-color-scheme` decides — and removes or keeps the class accordingly, then sets `color-scheme` and the `theme-color` meta so scrollbars and browser chrome match. The header toggle flips the class, writes the choice back, swaps its sun/moon icon and updates its label. It is the only JavaScript the layout ships.

Tokens are runtime custom properties, not build-time constants:

- `--palette-*` holds every colour, defined in `:root` (light) and overridden in `.dark`.
- `--wash`, `--wash-strong`, `--glow`, `--glow-soft`, `--mark`, `--dot`, `--globe-*` and `--btn-lift` hold the decorative surfaces that would otherwise be literal white — they flip with the theme, and utilities such as `bg-wash`, `bg-glow`, `text-mark`, `.wash-top`, `.halo`, `.dot-field` and `.btn-gloss` read them. The `--globe-*` group is the one decorative set tinted toward brand blue: it draws both the hero globe and the closing terrain.
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
- The decorative variables follow the same rule: `--wash` and `--wash-strong` are white at low alpha in dark and black at low alpha in light, `--glow` is white in dark and a faint blue sky-glow above the horizon in light, and `--mark` and `--dot` are the same idea applied to the outline marks and dotted fields. The `--globe-*` quartet (`dot`, `wash`, `line`, `inner`) is the deliberate exception: it keeps both the hero globe and the closing terrain a step toward `brand` blue in both themes, always at alpha low enough to stay a whisper, and both sit at `opacity: 0.26` so they read as atmosphere rather than solid objects.

## Typography

The system sans-serif stack throughout, at weight 500 for headings and 400 for body. Headings are large, tight and quiet (`-0.045em` on the hero, `-0.04em` on section headings) and use a clamped size: `text-h1` runs from 2.9rem to 4.75rem, `text-h2` from 2.1rem to 3.25rem. The signature headline pattern is two lines where the first line is `ink` and the second is `muted-ink`.

Body copy is `text-body` (0.9375rem) at 1.65 line height, usually capped at 28–32rem. Labels and navigation are `text-label` (0.8125rem), and eyebrows are `text-eyebrow`: 0.6875rem, uppercase, wide-tracked, `faint`.

Machine content — file paths, diffs, terminal prompts and status — uses `font-mono` at 11–12.5px. It is the only place where monospace appears.

## Layout

Content sits in one centred column, `.shell`: `max-w-7xl` (80rem) with 1.5rem side padding, and 2rem from `sm` up. The header, every landing section, the article pages and the footer use the same column, so the logo, section headings and card edges line up.

The header is 4rem tall, sticky and translucent (`bg-ground/80` with a backdrop blur) with no rule under it — the blur alone separates it from the page. The hero is centred with 6rem–9rem of top space. Each section carries `py-section` (7rem) at `sm` and up, and 5rem on phones, so the visual gap between sections is roughly 14rem. Feature and ledger grids are separated by 1px `hairline` gaps rather than raised cards, and text columns sit under the shape band with a 2rem gap.

The hero and the closing call to action are the only full-bleed moments: the hero carries the dotted planet and the CTA carries a smaller dotted terrain, both drawn with the same `--globe-*` blue tint. Both are decorative, `aria-hidden` and `pointer-events-none`. The hero globe clips at its band; the CTA terrain uses `overflow-x-clip` on the section so the wide arc isn't cut sideways, and a `overflow-clip` wrapper around `<main>` + `<footer>` in `Base.astro` lets the dotted arc fade behind the footer without extending the page past the footer's bottom edge — the footer is `relative` so its text stays above the arc.

## Elevation & Depth

Flat. No drop shadows on page content, no gradients as backgrounds except the faint radial washes behind the shape band, the terminal and the dotted horizons, plus the primary button's gloss (`.btn-gloss`), which uses a short inset highlight and a soft lift to read as a physical key. Depth comes from hairlines, a one-step surface lift (`ground` → `panel` → `raised`) and the dot fields. The mobile menu panel is the one surface that carries a shadow, so it separates from the page. In light mode the washes and halo flip to low-alpha black, so nothing turns muddy grey.

## Shapes

Buttons use `rounded-lg` (0.5rem) in the shadcn default, but the two hero/CTA actions are full pills (`rounded-full`). Cards and panels use `rounded-xl` (0.75rem); badges are pills; the terminal window uses `rounded-xl`. Borders are 1px `hairline`; cards keep shadcn's 1px foreground ring at 10% instead of a shadow. Geometric feature marks are 1px outline SVGs in `text-mark` (30% white in dark, 20% black in light).

## Components

The UI uses stock shadcn/ui components (Base UI flavour) from `src/components/ui`. They are themed only through the token layer in `src/styles/global.css`; the component code, variants and sizes are left as generated. Landing-page sections and content routes compose them:

- **Button** — the stock `default` (blue fill, white ink) and `link` variants. Every `default` button also carries `.btn-gloss`: a blue vertical gradient with an inset top highlight, a hairline bottom shade and a soft blue lift, brightening on hover and darkening when pressed. CTAs pass `btn-gloss h-10 rounded-full px-5 text-[0.82rem]`; header and article links are plain anchors or `buttonVariants()` when they need button metrics. Navigation is never a button.
- **Card** — the stock card with its ring, used for blog/help tiles and empty states.
- **Badge** — the stock pill in `outline` for the hero status, live-preview labels, tags and section labels. It is always a small signal, never a CTA.
- **Accordion** — the stock Base UI accordion in one React island. The built-in chevrons are hidden in `faq-list.tsx` in favour of a plus/minus mark; the trigger is 0.9375rem, normal weight, with 1.25rem vertical padding and `border-b` hairlines.
- **Separator** — the stock hairline rule; the footer no longer uses one, so its top edge and bottom bar are separated by whitespace alone.
- **Empty** — the “no posts / no help docs yet” states.
- **Links** — anchors that look like buttons use `buttonVariants()` rather than a React island, so the static HTML stays JavaScript-free; article body links ride the `prose dark:prose-invert` typography.
- **Theme toggle** — a plain round icon button in the header (`#theme-toggle`), built from two inline SVGs: a sun that shows in dark, a moon that shows in light. It is wired to the inline script at the end of the layout, so it needs no island and no hydration.

Compound Base UI components must be composed inside a single React component and hydrated with `client:*`; splitting their parts across `.astro` files breaks their context (see `src/components/faq-list.tsx`). Static primitives need no client directive, and anchors should use `buttonVariants()` rather than an island.

## Motion

Almost none. The accordion animates open and closed over 200ms; links transition colour; the hero arrow nudges on hover. There is no parallax, no scroll animation and no auto-advancing content. `prefers-reduced-motion` disables smooth scrolling, and the dotted fields are static CSS.

## Do's and Don'ts

Do keep one blue action per section, use the semantic tokens (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`) and the stock shadcn/ui primitives. Do use hairlines and space to separate things. Do write headings as two lines with the second in `muted-ink`. Do use `.shell` for every full-width section. Do check every change in both themes — the header toggle, or `localStorage.setItem("orso-theme", "light")` in the console.

Don't add shadows (except the mobile menu and the button gloss), colour accents or gradients without updating this file first. Don't use `brand` for body text or large surfaces, don't invent a second accent colour, and don't reach for raw palette values when a token exists. Never hard-code `white`, `black` or a raw `rgb()` for a decorative surface: use `bg-wash`, `bg-glow`, `text-mark`, `--dot` or the `--globe-*` variables so both themes keep working. Text on a blue fill is always `on-brand`. Add a new primitive with `npx shadcn@latest add <name>` and leave the generated variants, sizes and component code alone; theme it through the token layer and pass layout classes at the call site.

## Voice & Tone

Plain, friendly and benefit-led, with short sentences and no jargon. Headlines state ownership and cost plainly ("Your site. Your repo. Your agent.") and buttons use direct verbs such as "Start building". Talk about changes, previews and publishing — never about branches, commits or merges, and never about CI or deploy pipelines. Say "free and open source", never "all rights reserved", and always close on ownership: your repo, your site, no lock-in.

Small mono labels can be technical ("src/pages/index.astro", "Preview rebuilt in 0.8s") because they illustrate the product, but surrounding copy stays human.

## References

- **Format** — the frontmatter token block plus prose sections follows the convention published by [DesignMD](https://www.designmd.co).
- **Direction** — adapted from [Buio by Lexington Themes](https://lexingtonthemes.com/templates/buio): near-black ground, white ink, grey second lines, hairline ledgers, dotted horizons and a terminal split. The palette, type scale, layout and component rules are Orso's own.
- **Components** — [shadcn/ui for Astro](https://ui.shadcn.com/docs/installation/astro), Base UI flavour. Primitives live in `src/components/ui`, configuration in `components.json`, and the semantic mapping in `src/styles/global.css`.
- **Product** — copy and positioning live on the landing page (`src/components/sections/`); this file governs appearance, not message.
