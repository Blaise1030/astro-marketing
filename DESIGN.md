---
version: alpha
name: Orso
description: A free studio for your site, and the agent you already pay for.
colors:
  ink: "#0a0a0a"
  muted-ink: "#737373"
  tertiary: "#e5e5e5"
  quiet: "#f5f5f5"
  surface: "#ffffff"
  neutral: "#ffffff"
  brand: "#1447e6"
  brand-pressed: "#193cb8"
  brand-ink: "#1447e6"
  on-brand: "#eff6ff"
  link: "#0075de"
  danger: "#e7000b"
  focus-ring: "#a1a1a1"
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

Clean, confident and product-first, following shadcn/ui's neutral theme. White surfaces, near-black ink, a single brand blue for every action, a lighter link blue for links, and one deep navy band carrying the hero. Flat and bordered rather than shadowed: the product sketch and the closing panel are the only tinted surfaces. Nothing decorative competes with the copy.

## Tokens

`src/styles/global.css` holds this file's values in a Tailwind `@theme` block, and components use the generated utilities rather than raw palette values. `@theme inline` then maps shadcn/ui's semantic names onto the same values, so the palette and the component library can never drift apart. The mapping:

- Palette → `bg-ink`, `text-muted-ink`, `border-tertiary/30`, `bg-quiet`, `bg-surface`, `bg-neutral`, `bg-brand`, `text-on-brand`, `bg-navy`, `text-link`.
- shadcn/ui → `bg-background`, `text-foreground`, `text-muted-foreground`, `bg-primary`, `text-primary-foreground`, `border-border`, `bg-card`, `ring-ring`.
- Type → `text-h1-sm`, `text-h1`, `text-h2`, `text-body`, `text-label` (each carries its line height, tracking and weight).
- Radius → `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-full`.
- Spacing → `p-sm`, `gap-md`, `py-lg` (and the other margin, padding and gap utilities).

In shadcn/ui vocabulary `primary` is the brand action colour, `foreground` is ink, `secondary` / `muted` / `accent` are quiet `quiet` surfaces, and `card` / `popover` are `surface`. That is why the palette token for text is called `ink`, not `primary`.

## Colors

Roles are explicit, which is the point of adopting this set:

- `ink` (`#0a0a0a`) is all headings and body copy. Never use `#000000`.
- `muted-ink` (`#737373`) is supporting copy.
- `tertiary` (`#e5e5e5`) is the hairline colour, used at 30% for borders and higher for placeholder shapes.
- `quiet` (`#f5f5f5`) backs shadcn/ui's quiet surfaces (`secondary`, `muted`, `accent`).
- `surface` (`#ffffff`) is the card and popover fill; `neutral` (`#ffffff`) is the page surface (`background`).
- `brand` (`#1447e6`) fills primary buttons and nothing else large; in shadcn/ui it is `primary`. `brand-pressed` (`#193cb8`) is its hover state, `brand-ink` is the accessible brand colour for small text, and `on-brand` (`#eff6ff`) is the text that sits on it. Always use this trio together — never `text-neutral` on a brand fill.
- `link` (`#0075de`) is the lighter link blue, used for links and the small live-preview dot. It is a different job from `brand`; never use it for buttons.
- `danger` (`#e7000b`) exists only for shadcn/ui's `destructive` and invalid form states; the marketing site has no destructive actions.
- `focus-ring` (`#a1a1a1`) is the neutral focus outline; in shadcn/ui it is `ring`.
- `navy` (`#0a1530`) is the hero band, with `navy-deep` and `navy-mid` available for depth inside it.

In dark mode `ink`, `muted-ink`, `neutral`, `tertiary`, `quiet` and `surface` flip to shadcn's dark ramp: the page becomes `#0a0a0a`, cards `#171717`, quiet surfaces and hairlines `#262626`, ink `#fafafa` and muted ink `#a1a1a1`. `link` lightens to `#4a9eff`, `danger` to `#ff6467`, `focus-ring` to `#737373`, and `brand-ink` to `#2b7fff` so small brand text stays legible. `brand`, `brand-pressed`, `on-brand` and the navy band stay put — they are brand constants. Dark mode follows the visitor's system setting (a `prefers-color-scheme` media query), not a `.dark` class.

## Typography

The system sans-serif stack throughout. Headings sit at weight 600, not 700: large, quiet and tight (`-0.03em` on the hero, `-0.025em` on section headings). The hero `h1` is responsive — `text-h1-sm` (3rem / 48px) on mobile and `text-h1` (4.5rem / 72px) from the `sm` breakpoint up, with a 1.03 line height. Section `h2` headings use `text-h2` (2.25rem) at every width. Body copy is `text-body` at 1.65 line height for airiness, and buttons, navigation and labels use `text-label` at weight 500. Section eyebrows are 0.75rem, uppercase, wide-tracked and `text-muted-foreground`.

## Layout

Content sits in a centred column up to 64rem wide with 2rem side padding; the header and footer use the same column. The hero is a full-bleed navy band with 6rem–8rem of top space and 4rem below; other sections are separated by 5.5rem of vertical space. Card grids wrap automatically with a 1.75rem gap and shadcn's default 1rem card padding (three columns on desktop where the content allows). Space is the main structural device — prefer a wider gap over another border. The stack band between the hero sketch and How it works is the one compact section: it sits at 3.5rem so the two blocks either side keep their full rhythm.

## Elevation & Depth

The design is flat: no gradients and no drop shadows. Depth comes from hairline borders (`tertiary` at 30% opacity) and shadcn's default 1px foreground ring on cards. The product sketch keeps its 3% ink wash, and the closing panel is a default card. The navy hero band is the one large filled surface.

## Shapes

Buttons use 0.625rem corners (`rounded-lg`), cards 0.875rem (`rounded-xl`), and the product sketch follows the card radius. Borders are 1px, plus the default card ring. Pills are reserved for badges; dots use `full`.

## Components

The UI uses stock shadcn/ui components (Base UI flavour) from `src/components/ui`. They are themed only through the token layer in `src/styles/global.css`; the component code, variants and sizes are left as generated. Landing-page sections and content routes compose them:

- **Button** — the stock `default`, `outline` and `link` variants and sizes. Header, footer and article links are plain anchors, because a navigation link is not a button.
- **Card** — the stock card with its ring, `--card-spacing` and default type scale, used for steps, features, stack panels, blog/help tiles and the closing panel.
- **Badge** — the stock pill, in `secondary` for the hero status and `outline` for stack chips, tags and article section labels.
- **Accordion** — the stock Base UI accordion: chevrons, `border-b` dividers and several items open at once.
- **Separator** — the rules under the header and above the footer.
- **Empty** — the “no posts / no help docs yet” states.
- **Skeleton** and **Bubble** — the hero product sketch: a `Card` window, a `Skeleton` preview and the conversation in `Bubble`s.
- **Links** — anchors that look like buttons use `buttonVariants()` rather than a React island, so the static HTML stays JavaScript-free; article body links ride the `prose` typography.

The hero closes with a single line of proof points separated by dots. The stack block pairs two cards — `You already have` chips and `You stop paying for` chips struck through — so the replacement story reads as a comparison, not a feature list. Structural HTML (sections, headings, paragraphs, lists, the article wrapper) stays semantic rather than being wrapped in components.

## Do's and Don'ts

Do keep one solid call-to-action per section, use the semantic colour tokens (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`) and the stock shadcn/ui primitives so light and dark mode stay in sync, and let whitespace separate sections. Don't add shadows, gradients, extra accent colours or custom font files without updating this file first. Don't use `brand` for body text or large surfaces, don't use `link` for buttons, don't use `#000000` or a second accent colour, and don't reach for raw palette values when a token exists. Text on a brand fill is always `on-brand`. Add a new primitive with `npx shadcn@latest add <name>` and leave the generated variants, sizes and component code alone; theme it through the token layer and pass layout classes at the call site.

## Voice & Tone

Plain, friendly and benefit-led, with short sentences and no jargon. Headlines state ownership and cost plainly ("Your site. Your repo. Your agent.") and buttons use direct verbs such as "Start building". Talk about changes, previews and publishing — never about branches, commits or merges, and never about CI or deploy pipelines. Say "free and open source", never "all rights reserved", and always close on ownership: your repo, your site, no lock-in.

## References

- **Format** — the frontmatter token block plus prose sections follows the convention published by [DesignMD](https://www.designmd.co). Any agent that reads a `DESIGN.md` from that catalogue can read this one.
- **Token set** — shadcn/ui's generated neutral theme with its blue primary (oklch values, retrieved 27 Oct 2026), extended with the role naming (`brand` / `brand-pressed` / `on-brand`), `quiet` and `surface` surfaces, and the navy hero band. The typography, spacing and component rules are ours.
- **Components** — [shadcn/ui for Astro](https://ui.shadcn.com/docs/installation/astro), Base UI flavour. Primitives live in `src/components/ui`, configuration in `components.json`, and the semantic mapping in `src/styles/global.css`.
- **Product** — copy and positioning live on the landing page (`src/components/sections/`); this file governs appearance, not message.
