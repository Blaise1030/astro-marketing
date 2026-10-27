---
version: beta
name: Orso
description: A free studio for your site, running on the agent you already pay for.
colors:
  ground: "#080808"
  panel: "#0c0c0c"
  raised: "#121212"
  ink: "#f5f5f5"
  muted-ink: "#9a9a9a"
  faint: "#7a7a7a"
  hairline: "#232323"
  hairline-strong: "#383838"
  live: "#86e7b0"
  brand: "#f5f5f5"
  brand-pressed: "#d6d6d6"
  on-brand: "#080808"
  link: "#f5f5f5"
  danger: "#ff6467"
  focus-ring: "#6b6b6b"
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

A dark, editorial ledger. White ink on one near-black ground, hairline rules instead of shadows, and a single inverted action colour: white. The page is quiet and technical rather than decorative — small mono labels, generous negative space, and a dotted 1-bit horizon under the hero and the closing call to action. There is one visual idea per section, and the copy does the rest.

The direction is adapted from Lexington's Buio theme: near-black ground, white ink, a grey second line on every heading, and hairline ledgers. The Orso palette is monochrome (no blue primary) and the voice stays plain and ownership-led.

The site is **dark only**. `<html class="dark">` is permanent; there is no light theme and no theme toggle. `color-scheme: dark` is set on the root so form controls and scrollbars match.

## Tokens

`src/styles/global.css` holds this file's values in a Tailwind `@theme` block, and components use the generated utilities rather than raw palette values. `@theme inline` then maps shadcn/ui's semantic names onto the same values, so the palette and the component library cannot drift apart. The mapping:

- Palette → `bg-ground`, `bg-panel`, `bg-raised`, `text-ink`, `text-muted-ink`, `text-faint`, `border-hairline`, `border-hairline-strong`, `bg-live`, `bg-brand`, `text-on-brand`, `text-link`.
- shadcn/ui → `bg-background`, `text-foreground`, `text-muted-foreground`, `bg-primary`, `text-primary-foreground`, `border-border`, `bg-card`, `ring-ring`, `bg-muted`, `bg-secondary`.
- Type → `text-h1`, `text-h2`, `text-h3`, `text-body`, `text-label`, `text-eyebrow` (each carries its line height, tracking and weight), and `font-mono` for machine labels.
- Radius → `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-full`.
- Spacing → `py-section` (7rem), plus numeric utilities for everything else. Only one named spacing token exists, because named spacing values also answer `max-w-*` lookups and would collapse the container widths.

In shadcn/ui vocabulary `primary` is the white action colour, `primary-foreground` is the ground, `foreground` is ink, `secondary` / `muted` / `accent` are `raised` surfaces, and `card` / `popover` are `panel`.

## Colors

Roles are explicit:

- `ground` (`#080808`) is the page. Never use `#000000`.
- `panel` (`#0c0c0c`) is the card and popover fill; `raised` (`#121212`) is quiet surfaces and inputs.
- `ink` (`#f5f5f5`) is headings and body copy. `muted-ink` (`#9a9a9a`) is supporting copy and the second line of every heading. `faint` (`#7a7a7a`) is only for mono metadata, labels and decorative detail.
- `hairline` (`#232323`) is every 1px rule and border; `hairline-strong` (`#383838`) is the rare emphasised edge.
- `brand` (`#f5f5f5`) fills primary buttons and nothing else large; primary buttons carry the `.btn-gloss` gradient (`#ffffff` → `#f4f4f4` → `#d4d4d4` top to bottom) with `on-brand` (`#080808`) text. `brand-pressed` (`#d6d6d6`) is the pressed end of that gradient. Always use this trio together.
- `link` is the same white ink as text: links are signalled by underline or an arrow, not by a second colour.
- `live` (`#86e7b0`) is a single green signal: live previews, connected agents and "you already have" checks. It is never a large surface.
- `danger` (`#ff6467`) exists only for shadcn/ui's `destructive` and invalid form states.
- `focus-ring` (`#6b6b6b`) is the neutral focus outline; in shadcn/ui it is `ring`.

## Typography

The system sans-serif stack throughout, at weight 500 for headings and 400 for body. Headings are large, tight and quiet (`-0.045em` on the hero, `-0.04em` on section headings) and use a clamped size: `text-h1` runs from 2.9rem to 4.75rem, `text-h2` from 2.1rem to 3.25rem. The signature headline pattern is two lines where the first line is `ink` and the second is `muted-ink`.

Body copy is `text-body` (0.9375rem) at 1.65 line height, usually capped at 28–32rem. Labels and navigation are `text-label` (0.8125rem), and eyebrows are `text-eyebrow`: 0.6875rem, uppercase, wide-tracked, `faint`.

Machine content — file paths, diffs, terminal prompts, status and the product mock — uses `font-mono` at 11–12.5px. It is the only place where monospace appears.

## Layout

Content sits in one centred column, `.shell`: `max-w-7xl` (80rem) with 1.5rem side padding, and 2rem from `sm` up. The header, every landing section, the article pages and the footer use the same column, so the logo, section headings and card edges line up.

The header is 4rem tall, sticky and translucent (`bg-ground/80` with a backdrop blur) with a 1px bottom hairline. The hero is centred with 6rem–9rem of top space. Each section carries `py-section` (7rem) at `sm` and up, and 5rem on phones, so the visual gap between sections is roughly 14rem. Feature and ledger grids are separated by 1px `hairline` gaps rather than raised cards, and text columns sit under the shape band with a 2rem gap.

The hero and the closing call to action are the only full-bleed moments: the hero carries the dotted planet, the CTA carries a smaller dotted terrain. Both are decorative, `aria-hidden`, and clip at the section edge.

## Elevation & Depth

Flat. No drop shadows on page content, no gradients as backgrounds except the faint radial washes behind the shape band, the terminal and the dotted horizons, plus the primary button's gloss (`.btn-gloss`), which uses a short inset highlight and a soft lift to read as a physical key. Depth comes from hairlines, a one-step surface lift (`ground` → `panel` → `raised`) and the dot fields. The product mock is the main exception: it floats with a large, soft black shadow to read as a window. The mobile menu panel also carries a shadow so it separates from the page.

## Shapes

Buttons use `rounded-lg` (0.5rem) in the shadcn default, but the two hero/CTA actions are full pills (`rounded-full`). Cards and panels use `rounded-xl` (0.75rem); badges are pills; the product mock and terminal use `rounded-xl`. Borders are 1px `hairline`; cards keep shadcn's 1px foreground ring at 10% instead of a shadow. Geometric feature marks are 1px outline SVGs at 30% white.

## Components

The UI uses stock shadcn/ui components (Base UI flavour) from `src/components/ui`. They are themed only through the token layer in `src/styles/global.css`; the component code, variants and sizes are left as generated. Landing-page sections and content routes compose them:

- **Button** — the stock `default` (white fill, dark ink) and `link` variants. Every `default` button also carries `.btn-gloss`: a white-to-grey vertical gradient with an inset top highlight, a hairline bottom shade and a soft lift, brightening on hover and inverting slightly when pressed. CTAs pass `btn-gloss h-10 rounded-full px-5 text-[0.82rem]`; header and article links are plain anchors or `buttonVariants()` when they need button metrics. Navigation is never a button.
- **Card** — the stock card with its ring, used for the product mock window, blog/help tiles and empty states. The product mock overrides padding to `p-0!` and the ring to `ring-0`, then owns its own hairlines.
- **Badge** — the stock pill in `outline` for the hero status, live-preview labels, tags and section labels. It is always a small signal, never a CTA.
- **Accordion** — the stock Base UI accordion in one React island. The built-in chevrons are hidden in `faq-list.tsx` in favour of a plus/minus mark; the trigger is 0.9375rem, normal weight, with 1.25rem vertical padding and `border-b` hairlines.
- **Separator** — the rule above the footer's bottom bar.
- **Empty** — the “no posts / no help docs yet” states.
- **Skeleton** and **Bubble** — the product mock: a `Card` window, a `Skeleton` preview and the conversation in `Bubble`s.
- **Links** — anchors that look like buttons use `buttonVariants()` rather than a React island, so the static HTML stays JavaScript-free; article body links ride the `prose prose-invert` typography.

Compound Base UI components must be composed inside a single React component and hydrated with `client:*`; splitting their parts across `.astro` files breaks their context (see `src/components/faq-list.tsx`). Static primitives need no client directive, and anchors should use `buttonVariants()` rather than an island.

## Motion

Almost none. The accordion animates open and closed over 200ms; links transition colour; the hero arrow nudges on hover. There is no parallax, no scroll animation and no auto-advancing content. `prefers-reduced-motion` disables smooth scrolling, and the dotted fields are static CSS.

## Do's and Don'ts

Do keep one white action per section, use the semantic tokens (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`) and the stock shadcn/ui primitives. Do use hairlines and space to separate things. Do write headings as two lines with the second in `muted-ink`. Do use `.shell` for every full-width section.

Don't add shadows (except the product mock, the mobile menu and the button gloss), colour accents, gradients or a light theme without updating this file first. Don't use `brand` for body text or large surfaces, don't invent a second accent colour, and don't reach for raw palette values when a token exists. Text on a white fill is always `on-brand`. Add a new primitive with `npx shadcn@latest add <name>` and leave the generated variants, sizes and component code alone; theme it through the token layer and pass layout classes at the call site.

## Voice & Tone

Plain, friendly and benefit-led, with short sentences and no jargon. Headlines state ownership and cost plainly ("Your site. Your repo. Your agent.") and buttons use direct verbs such as "Start building". Talk about changes, previews and publishing — never about branches, commits or merges, and never about CI or deploy pipelines. Say "free and open source", never "all rights reserved", and always close on ownership: your repo, your site, no lock-in.

Small mono labels can be technical ("src/pages/index.astro", "Preview rebuilt in 0.8s") because they illustrate the product, but surrounding copy stays human.

## References

- **Format** — the frontmatter token block plus prose sections follows the convention published by [DesignMD](https://www.designmd.co).
- **Direction** — adapted from [Buio by Lexington Themes](https://lexingtonthemes.com/templates/buio): near-black ground, white ink, grey second lines, hairline ledgers, dotted horizons and a terminal split. The palette, type scale, layout and component rules are Orso's own.
- **Components** — [shadcn/ui for Astro](https://ui.shadcn.com/docs/installation/astro), Base UI flavour. Primitives live in `src/components/ui`, configuration in `components.json`, and the semantic mapping in `src/styles/global.css`.
- **Product** — copy and positioning live on the landing page (`src/components/sections/`); this file governs appearance, not message.
