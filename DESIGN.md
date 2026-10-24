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
    fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.08
  h2:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: 3rem
    fontWeight: 500
    lineHeight: 1.12
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
  lg: 3rem
  sectionWide: 5rem
---

## Overview

A near-black marketing site with cobalt blue actions, precise system typography, and a compact bordered layout inspired by the current https://zed.dev/ page. A two-column introduction presents Orso's CMS and site agent above a large workspace illustration. Numbered sections and thin grid lines organize the page. The interaction feedback and accessibility preferences from the apple-design pass remain in place.

## Colors

`primary` is the cobalt blue base of the main call to action, sampled from the supplied reference. `actionTop` is a slightly darker blue than the image's brightest edge so white button text remains readable; `actionEdge` is the deeper blue ledge below it. `accent` is a brighter blue for readable small labels, icons, links, and focus indicators on dark surfaces. `secondary` is the muted grey for supporting copy; `tertiary` and `sectionLine` define subtle borders. `neutral` and `sectionInk` are the near-black canvas; `sectionPanel` is the slightly lifted surface for cards and illustrative UI. These values are mirrored in the `@theme` block of `src/styles/global.css`.

## Typography

The landing page uses the platform system sans-serif stack, beginning with -apple-system and BlinkMacSystemFont. Hero and closing headlines use the shared `display` size: clamp(2.25rem, 4.5vw, 3.5rem), 1.08 line height, and -0.035em tracking. The hero is semibold; the closing headline and section headings use medium weight. Product headings grow from 1.875rem to 3rem with 1.12 line height. Body copy is 1rem; compact product introductions are 0.875rem. The hero description, section numbers, labels, and illustration caption use monospace typography. Blog and Help retain serif article titles via `font-editorial`. Buttons are 0.875rem semibold.

## Layout

The landing page is a centred 72rem frame with vertical borders that continue through the header, main content, and footer. `Base` exposes an optional `framed` prop for this treatment; Blog and Help keep their existing layout. Interior padding is 1.5rem on mobile and 2rem at larger widths. Section spacing is 3rem on mobile and 5rem on larger screens.

The hero centres its label, heading, supporting text, and primary/secondary action row. Its `hero` spacing token provides 4rem vertical padding on mobile, growing to the `hero-wide` token at 6rem. Two equal CMS and site-agent panels with square blue icon rails follow the hero introduction. A diagonal hatch strip separates them from the full-width workspace illustration. CMS and preview details follow in paired panels. Desktop section introductions pair headings on the left with descriptions on the right. The capability and comparison sections use contiguous grids with shared borders. FAQ keeps its two-column layout, and the closing action pairs a left-aligned heading with supporting copy and a blue button. All multi-column layouts stack on mobile.

The sticky translucent header retains 44px navigation targets. Numbered monospace labels provide wayfinding, while decorative blueprint grids and hatch strips are hidden from assistive technology.

## Elevation & Depth

The layout emphasizes crisp shared borders and subtle graphite surfaces. Product illustrations use a faint inset highlight and a restrained shadow. Main panels use the shared 0.5rem radius; contiguous feature and comparison grids have square edges. Blueprint grids appear only behind the hero's blue icons; diagonal hatch strips mark major transitions. Ambient hero and closing glows have been removed in favor of the architectural frame.

Raised buttons retain their four-pixel lower edge, three-pixel press movement, 98% press scale, and instant native active feedback with a 75ms response. Hover and release use a 200ms ease-out. Secondary buttons use a neutral dark lower edge. Reduced-motion settings remove spatial movement. There are no automatic or looping animations.

## Shapes

Buttons and standalone panels use 0.5rem corners. Contiguous capability and comparison grids use shared straight borders. Hero icon rails are square and align with their neighboring content panels. Small illustrative status badges can use rounded corners. FAQ uses straight row dividers.

## Components

`Button.astro` owns the raised primary and secondary link treatments. Blue is used for primary actions, hero emphasis, icons, labels, and text links. Navigation, buttons, and FAQ summaries retain visible focus.

`Hero.astro` presents the CMS and agent as two equal parts of one product; the panels link to existing content and workflow sections. `ProductPreview.astro` fills the framed showcase area. It is a decorative HTML illustration with a visible caption, not a functioning editor or screenshot. Other product illustrations are also hidden from assistive technology, with their purpose stated in nearby headings. FAQ uses native details elements with a rotating plus indicator and blue open state.

## User preferences

Reduced-motion settings remove button translation and scaling and stop FAQ icon rotation; color and open-state feedback remain. The `surface-glass` utility uses a near-solid graphite material with 24px backdrop blur. Reduced-transparency settings replace it with a solid surface and remove the blur. Increased-contrast settings use the solid surface with a defined outline. No animation blocks navigation or content interaction.

## Do's and Don'ts

Do keep calls to action visually consistent and text readable against the dark canvas. Reserve solid cobalt for actions and use the brighter accent for small blue text. Use the raised treatment for actions, while content cards remain flat. Treat illustrative UI as a visual explanation, not a screenshot or proof of a feature not present in the product. Update this file and the CSS theme together when adding visual tokens.

## Voice & Tone

Plain, friendly and benefit-led, with short sentences and no jargon. Lead with the practical outcome of keeping an Astro site current. Explain that the CMS updates Markdown files in configured Astro content collections and that an agent handles broader site changes. Do not imply that every repository is CMS-editable or claim customer proof, pricing, or a public download that has not been verified. Buttons describe the action they take.
