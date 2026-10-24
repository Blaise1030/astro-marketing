---
version: alpha
name: Orso
description: Keep your Astro site current with a Markdown CMS, an AI agent, and live preview.
colors:
  primary: "#245ee0"
  secondary: "#5d6471"
  tertiary: "#d7dbe3"
  neutral: "#f9fafb"
  accent: "#1748b6"
  actionTop: "#396fed"
  actionEdge: "#1748b6"
  sectionInk: "#f9fafb"
  sectionPanel: "#ffffff"
  sectionLine: "#d7dbe3"
  material: "#f0f2f6"
darkColors:
  foreground: "#f5f5f5"
  secondary: "#a6a9b0"
  accent: "#8aafff"
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

A site that follows the visitor's system light or dark preference, with cobalt blue actions, precise system typography, and a compact bordered layout inspired by the current https://zed.dev/ page. A two-column introduction presents Orso's CMS and site agent above a large workspace illustration. Numbered sections and thin grid lines organize the page. The interaction feedback and accessibility preferences from the apple-design pass remain in place.

## Colors

`primary`, `actionTop`, and `actionEdge` retain the supplied cobalt blue in both themes. White text stays on primary buttons. Other palette tokens use CSS `light-dark()` and inherit the root `color-scheme: light dark`; the page responds immediately to system preference changes without a script, reload, or forced theme class.

| Role | Light | Dark |
| --- | --- | --- |
| Foreground | #181b22 | #f5f5f5 |
| Body copy | #454b57 | #d4d4d4 |
| Muted copy | #5d6471 | #a6a9b0 |
| Blue accent / focus | #1748b6 | #8aafff |
| Page canvas | #f9fafb | #0a0a0a |
| Panel | #ffffff | #15171c |
| Border | #d7dbe3 | #2b2e36 |
| Material | #f0f2f6 | #101216 |
| UI fill | #e8ebf1 | #22252c |
| Secondary button top | #ffffff | #262626 |
| Secondary button edge | #aeb6c4 | #050505 |

The palette and theme-aware shadows are defined together in `src/styles/global.css`. Secondary actions use a neutral surface with foreground text. Editor illustrations follow the page theme; the small website previews retain their own light canvas as separate illustrative sites. Blog and Help article bodies use regular prose in light mode and `dark:prose-invert` in dark mode.

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

`Hero.astro` presents the CMS and agent as two equal parts of one product; the centred hero actions link to existing content and workflow sections. `ProductPreview.astro` fills the framed showcase area. It is a decorative HTML illustration with a visible caption, not a functioning editor or screenshot. Other product illustrations are also hidden from assistive technology, with their purpose stated in nearby headings. FAQ uses native details elements with a rotating plus indicator and blue open state.

## User preferences

Reduced-motion settings remove button translation and scaling and stop FAQ icon rotation; color and open-state feedback remain. The `surface-glass` utility uses a near-solid theme-aware material with 24px backdrop blur. Reduced-transparency settings replace it with a solid surface and remove the blur. Increased-contrast settings use the solid surface with a defined outline. No animation blocks navigation or content interaction.

## Do's and Don'ts

Do keep calls to action visually consistent and text readable in both themes. Reserve solid cobalt for actions; use dark blue accents on light surfaces and brighter blue accents on dark surfaces. Use the raised treatment for actions, while content cards remain flat. Treat illustrative UI as a visual explanation, not a screenshot or proof of a feature not present in the product. Update this file and the CSS theme together when adding visual tokens.

## Voice & Tone

Plain, friendly and benefit-led, with short sentences and no jargon. Lead with the practical outcome of keeping an Astro site current. Explain that the CMS updates Markdown files in configured Astro content collections and that an agent handles broader site changes. Do not imply that every repository is CMS-editable or claim customer proof, pricing, or a public download that has not been verified. Buttons describe the action they take.
