---
version: alpha
name: Orso
description: Keep your Astro site current with a Markdown CMS, an AI agent, and live preview.
colors:
  primary: "#245ee0"
  secondary: "#a6a9b0"
  tertiary: "#2b2e36"
  neutral: "#0a0a0a"
  accent: "#8aafff"
  actionTop: "#396fed"
  actionEdge: "#1748b6"
  sectionInk: "#0a0a0a"
  sectionPanel: "#15171c"
  sectionLine: "#2b2e36"
  material: "#101216"
typography:
  h1:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(2.75rem, 6.5vw, 5rem)"
    fontWeight: 600
    lineHeight: 1.04
  h2:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: 3.75rem
    fontWeight: 600
    lineHeight: 1.08
  body-md:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: 1rem
    fontWeight: 600
    lineHeight: 1.5
rounded:
  sm: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  full: 9999px
spacing:
  sm: 1rem
  md: 1.5rem
  lg: 5rem
  sectionWide: 8rem
---

## Overview

A continuous near-black marketing site with generous whitespace, precise system typography, graphite product surfaces, and cobalt blue actions. The landing page applies the apple-design skill's principles of clarity, spatial consistency, materials, and immediate feedback. A prominent workspace illustration connects the content files to the rendered site. The shared dark shell applies to the landing page, Blog, Help, and articles regardless of system color preference.

## Colors

`primary` is the cobalt blue base of the main call to action, sampled from the supplied reference. `actionTop` is a slightly darker blue than the image's brightest edge so white button text remains readable; `actionEdge` is the deeper blue ledge below it. `accent` is a brighter blue for readable small labels, icons, links, and focus indicators on dark surfaces. `secondary` is the muted grey for supporting copy; `tertiary` and `sectionLine` define subtle borders. `neutral` and `sectionInk` are the near-black canvas; `sectionPanel` is the slightly lifted surface for cards and illustrative UI. These values are mirrored in the `@theme` block of `src/styles/global.css`.

## Typography

The landing page uses the platform system sans-serif stack, beginning with -apple-system and BlinkMacSystemFont. Hero and closing headlines use the shared `display` size: clamp(2.75rem, 6.5vw, 5rem), semibold weight, 1.04 line height, and -0.045em tracking. Optical sizing follows the font. Product headings are semibold, 2.25rem on mobile through 3.75rem on desktop, with -0.035em tracking and optional muted second lines. FAQ headings top out at 3rem. Body copy is 1rem with generous line height; introductory copy grows to 1.25rem in the hero. Small labels use positive tracking. Blog and Help retain serif article titles via `font-editorial` as a reading-focused treatment. Buttons are 0.875rem semibold.

## Layout

All sections, header, and footer share a centred 72rem container. Side padding is 1.5rem on mobile and 2rem from the small breakpoint. Sections use the shared `section` spacing token (5rem vertical padding), growing to `section-wide` (8rem) on larger screens. Thin full-width dividers establish the page rhythm. The centred hero includes a 64rem workspace illustration showing content and preview in one frame. It leads to paired CMS and preview illustrations, an open three-column capability grid, three comparison cards, a two-column FAQ, and a centred closing action. Grids collapse on mobile. The sticky header is a translucent functional layer with a soft shadow rather than a hard divider; navigation wraps with 44px touch targets. The footer follows the same alignment. Blog and Help use the same containers and dark panel treatment. Markdown is always rendered with inverted typography.

## Elevation & Depth

Product illustrations sit in graphite panels with a faint inset highlight and soft ambient shadow. The capability grid has no outer boxes; blue icon tiles group each capability. Comparison cards and FAQ rows stay flat with subtle borders. Restrained blue radial lighting supports the hero and closing action. Buttons look raised through a four-pixel lower edge and a soft ambient shadow. On press, they move down three pixels, scale to 98%, and the edge becomes one pixel high; feedback begins through the native active state with a 75ms response. Hover and release use a restrained 200ms ease-out. Secondary buttons use a neutral dark lower edge. The raised and pressed shadows are recorded in the CSS theme. There are no automatic or looping animations.

## Shapes

Actions are separate buttons with 0.75rem corners and space between them. Main product surfaces and comparison cards use the shared `panel` radius of 1.75rem; nested UI surfaces use smaller radii to preserve hierarchy. Pill shapes are reserved for the hero label and illustrative status badges. FAQ rows use straight dividers.

## Components

`Button.astro` owns the shared raised link treatment. The primary variant is cobalt blue; the secondary variant is neutral charcoal. Blue also marks key headline text, preview actions, workflow icons, labels, and text links. Navigation, buttons, and FAQ summaries have visible keyboard focus. `ProductPreview.astro` is a decorative HTML workflow illustration with a visible caption, not a functioning editor or a screenshot. The other CMS and preview illustrations are also hidden from assistive technology, with their purpose stated in nearby headings and copy. FAQ uses native details elements with a rotating plus indicator and blue open state.

## User preferences

Reduced-motion settings remove button translation and scaling and stop FAQ icon rotation; color and open-state feedback remain. The `surface-glass` utility uses a near-solid graphite material with 24px backdrop blur. Reduced-transparency settings replace it with a solid surface and remove the blur. Increased-contrast settings use the solid surface with a defined outline. No animation blocks navigation or content interaction.

## Do's and Don'ts

Do keep calls to action visually consistent and text readable against the dark canvas. Reserve solid cobalt for actions and use the brighter accent for small blue text. Use the raised treatment for actions, while content cards remain flat. Treat illustrative UI as a visual explanation, not a screenshot or proof of a feature not present in the product. Update this file and the CSS theme together when adding visual tokens.

## Voice & Tone

Plain, friendly and benefit-led, with short sentences and no jargon. Lead with the practical outcome of keeping an Astro site current. Explain that the CMS updates Markdown files in configured Astro content collections and that an agent handles broader site changes. Do not imply that every repository is CMS-editable or claim customer proof, pricing, or a public download that has not been verified. Buttons describe the action they take.
