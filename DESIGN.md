---
version: alpha
name: Orso
description: A free studio for your site, and the agent you already pay for.
colors:
  primary: "#1f1d1a"
  secondary: "#6b665e"
  tertiary: "#d9d3c7"
  neutral: "#faf7f2"
  accent: "#3a5a78"
typography:
  h1-sm:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: 3rem
    fontWeight: 600
    lineHeight: 1.03
  h1:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: 4.5rem
    fontWeight: 600
    lineHeight: 1.03
  h2:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: 2.25rem
    fontWeight: 600
    lineHeight: 1.15
  body:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: 0.875rem
    fontWeight: 500
    lineHeight: 1.5
rounded:
  sm: 0.25rem
  md: 0.5rem
  lg: 0.625rem
  xl: 0.875rem
  2xl: 1.25rem
  full: 9999px
spacing:
  sm: 1rem
  md: 1.75rem
  lg: 5.5rem
---

## Overview

Warm, quiet and uncluttered: the page is a sheet of warm paper, not a white screen. Soft near-black ink, one muted fjord blue accent, hairline borders and a lot of air. Scandinavian in the functional sense — natural materials, restrained colour, nothing decorative competing with the copy or the product sketch. The calm is the point.

## Tokens

`src/styles/global.css` holds this file's values in a Tailwind `@theme` block, and components use the generated utilities rather than raw palette values. The mapping:

- Colours → `bg-primary`, `text-primary`, `text-secondary`, `border-tertiary/30`, `bg-neutral`, `text-accent`.
- Type → `text-h1-sm`, `text-h1`, `text-h2`, `text-body`, `text-label` (each carries its line height, tracking and weight).
- Radius → `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-full`.
- Spacing → `p-sm`, `gap-md`, `py-lg` (and the other margin, padding and gap utilities).

## Colors

`primary` is a warm near-black (`#1f1d1a`) and fills the main call-to-action; `secondary` is a warm mid grey for supporting copy; `tertiary` is warm sand, used at low opacity for hairline borders and at higher opacity for placeholder shapes; `neutral` is warm paper (`#faf7f2`), the page surface. `accent` is a single muted fjord blue, used only for small signals — the hero badge dot, step numbers, the send button in the product sketch. Never use it for large fills.

In dark mode `primary`, `secondary` and `neutral` flip to warm charcoal (`#141311`) with ink at `#ede9e1` through a `prefers-color-scheme` override, so a component written with tokens needs no `dark:` colour classes. `tertiary` stays put, the accent lightens to `#8aa8c4` for legibility, and surfaces that need a slight lift use `bg-primary/[0.03]`.

Never use pure black or pure white. Warmth is what separates this palette from a default grey interface.

## Typography

The system sans-serif stack throughout. Headings sit at weight 600, not 700: large, quiet and tight (`-0.03em` on the hero, `-0.025em` on section headings). The hero `h1` is responsive — `text-h1-sm` (3rem / 48px) on mobile and `text-h1` (4.5rem / 72px) from the `sm` breakpoint up, with a 1.03 line height. Section `h2` headings use `text-h2` (2.25rem) at every width. Body copy is `text-body` at 1.65 line height for airiness, and buttons, navigation and labels use `text-label` at weight 500. Section eyebrows are 0.75rem, uppercase, wide-tracked and `secondary`.

## Layout

Content sits in a centred column up to 64rem wide with 2rem side padding; the header and footer use the same column. The hero is centred with 6rem–8rem of top space; other sections are separated by 5.5rem of vertical space. Card grids wrap automatically with a 1.75rem gap and 1.75rem card padding (three columns on desktop where the content allows). Space is the main structural device — prefer a wider gap over another border. The stack band between the hero sketch and How it works is the one compact section: it sits at 3.5rem so the two blocks either side keep their full rhythm.

## Elevation & Depth

The design is flat: no shadows and no gradients. Depth comes from warm hairline borders (`tertiary` at 30% opacity) and a barely-there ink wash (`primary` at 3–4%) behind the product sketch and the closing call-to-action.

## Shapes

Buttons use 0.625rem corners, cards 0.875rem, the product sketch and the closing panel 1.25rem. Borders are 1px. Pills are reserved for the hero badge; avatars and dots use `full`.

## Components

Primary buttons are solid `primary` with `neutral` text; secondary buttons are outlined with a hairline border that darkens on hover. Both are padded 1.25rem by 0.75rem at `text-label`. Cards are bordered boxes with `p-md` padding, reused for steps, features and FAQ items. FAQ items are native `<details>` with a plus that rotates when open. The hero product sketch is a bordered window (rail, preview, chat) built from `tertiary` opacities and two short chat bubbles. The hero closes with a single line of proof points separated by dots. The stack block pairs two bordered panels — `You already have` chips and `You stop paying for` chips struck through — so the replacement story reads as a comparison, not a feature list.

## Do's and Don'ts

Do keep one solid call-to-action per section, use the semantic colour tokens so light and dark mode stay in sync, and let whitespace separate sections. Don't add shadows, gradients, extra accent colours or custom font files without updating this file first. Don't use the accent for buttons or backgrounds, don't use pure black or pure white, and don't reach for raw palette values like `neutral-600` when a token exists.

## Voice & Tone

Plain, friendly and benefit-led, with short sentences and no jargon. Headlines state ownership and cost plainly ("A free studio for your site. And the agent you already pay for.") and buttons use direct verbs such as "Start building". Talk about changes, previews and publishing — never about branches, commits or merges, and never about CI or deploy pipelines. Say "free and open source", never "all rights reserved", and always close on ownership: your repo, your site, no lock-in.
