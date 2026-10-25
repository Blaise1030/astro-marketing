---
version: alpha
name: Orso
description: A free studio for your site, and the agent you already pay for.
colors:
  primary: "#191919"
  secondary: "#6b6b6b"
  tertiary: "#e6e6e4"
  neutral: "#ffffff"
  brand: "#5645d4"
  brand-pressed: "#4534b3"
  on-brand: "#ffffff"
  accent: "#0075de"
  navy: "#0a1530"
  navy-deep: "#070f24"
  navy-mid: "#1a2a52"
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

Clean, confident and product-first, following Notion's published token set. White surfaces, near-black ink, a single brand purple for every action, link blue for links, and one deep navy band carrying the hero. Flat and bordered rather than shadowed: the product sketch and the closing panel are the only tinted surfaces. Nothing decorative competes with the copy.

## Tokens

`src/styles/global.css` holds this file's values in a Tailwind `@theme` block, and components use the generated utilities rather than raw palette values. The mapping:

- Colours → `bg-primary`, `text-secondary`, `border-tertiary/30`, `bg-neutral`, `bg-brand`, `text-on-brand`, `bg-navy`, `text-accent`.
- Type → `text-h1-sm`, `text-h1`, `text-h2`, `text-body`, `text-label` (each carries its line height, tracking and weight).
- Radius → `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-full`.
- Spacing → `p-sm`, `gap-md`, `py-lg` (and the other margin, padding and gap utilities).

## Colors

Roles are explicit, which is the point of adopting this set:

- `primary` (`#191919`) is ink — all headings and body copy. Never use `#000000`.
- `secondary` (`#6b6b6b`) is supporting copy.
- `tertiary` (`#e6e6e4`) is the hairline colour, used at 30% for borders and higher for placeholder shapes.
- `neutral` (`#ffffff`) is the page surface.
- `brand` (`#5645d4`) fills primary buttons and nothing else large. `brand-pressed` (`#4534b3`) is its hover state, and `on-brand` (`#ffffff`) is the text that sits on it. Always use this trio together — never `text-neutral` on a brand fill.
- `accent` (`#0075de`) is link blue, used for links and the small live-preview dot.
- `navy` (`#0a1530`) is the hero band, with `navy-deep` and `navy-mid` available for depth inside it.

In dark mode `primary`, `secondary`, `neutral` and `tertiary` flip to a dark surface (`#191919`) with ink at `#f5f5f4`, and `accent` lightens to `#4a9eff`. `brand`, `brand-pressed` and the navy band stay put — they are brand constants.

## Typography

The system sans-serif stack throughout. Headings sit at weight 600, not 700: large, quiet and tight (`-0.03em` on the hero, `-0.025em` on section headings). The hero `h1` is responsive — `text-h1-sm` (3rem / 48px) on mobile and `text-h1` (4.5rem / 72px) from the `sm` breakpoint up, with a 1.03 line height. Section `h2` headings use `text-h2` (2.25rem) at every width. Body copy is `text-body` at 1.65 line height for airiness, and buttons, navigation and labels use `text-label` at weight 500. Section eyebrows are 0.75rem, uppercase, wide-tracked and `secondary`.

## Layout

Content sits in a centred column up to 64rem wide with 2rem side padding; the header and footer use the same column. The hero is a full-bleed navy band with 6rem–8rem of top space and 4rem below; other sections are separated by 5.5rem of vertical space. Card grids wrap automatically with a 1.75rem gap and 1.75rem card padding (three columns on desktop where the content allows). Space is the main structural device — prefer a wider gap over another border. The stack band between the hero sketch and How it works is the one compact section: it sits at 3.5rem so the two blocks either side keep their full rhythm.

## Elevation & Depth

The design is flat: no shadows and no gradients. Depth comes from hairline borders (`tertiary` at 30% opacity), a 3% ink wash behind the product sketch, and a 4% brand wash with a brand-tinted border behind the closing panel. The navy hero band is the one large filled surface.

## Shapes

Buttons use 0.625rem corners, cards 0.875rem, the product sketch and the closing panel 1.25rem. Borders are 1px. Pills are reserved for the hero badge; avatars and dots use `full`.

## Components

Primary buttons are solid `brand` with `on-brand` text, darkening to `brand-pressed` on hover; secondary buttons are outlined with a hairline border that darkens on hover. Both are padded 1.25rem by 0.75rem at `text-label`. Cards are bordered boxes with `p-md` padding, reused for steps, features and FAQ items. FAQ items are native `<details>` with a plus that rotates when open. The hero product sketch is a bordered window (rail, preview, chat) built from `tertiary` opacities and two short chat bubbles. The hero closes with a single line of proof points separated by dots. The stack block pairs two bordered panels — `You already have` chips and `You stop paying for` chips struck through — so the replacement story reads as a comparison, not a feature list.

## Do's and Don'ts

Do keep one solid call-to-action per section, use the semantic colour tokens so light and dark mode stay in sync, and let whitespace separate sections. Don't add shadows, gradients, extra accent colours or custom font files without updating this file first. Don't use `brand` for body text or large surfaces, don't use `accent` for buttons, don't use `#000000` or a second purple, and don't reach for raw palette values when a token exists. Text on a brand fill is always `on-brand`.

## Voice & Tone

Plain, friendly and benefit-led, with short sentences and no jargon. Headlines state ownership and cost plainly ("Your site. Your repo. Your agent.") and buttons use direct verbs such as "Start building". Talk about changes, previews and publishing — never about branches, commits or merges, and never about CI or deploy pipelines. Say "free and open source", never "all rights reserved", and always close on ownership: your repo, your site, no lock-in.

## References

- **Format** — the frontmatter token block plus prose sections follows the convention published by [DesignMD](https://www.designmd.co). Any agent that reads a `DESIGN.md` from that catalogue can read this one.
- **Token set** — adopted from [Notion](https://www.designmd.co/d/notion) (retrieved 24 Oct 2026): colours, role naming (`brand` / `brand-pressed` / `on-brand`) and the navy hero band. The typography, spacing and component rules are ours.
- **Product** — copy and positioning live on the landing page (`src/components/sections/`); this file governs appearance, not message.
