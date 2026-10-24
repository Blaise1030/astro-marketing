---
version: alpha
name: Orso
description: Keep your Astro site current with a Markdown CMS, an AI agent, and live preview.
colors:
  primary: "#245ee0"
  secondary: "#5d6471"
  tertiary: "#d7dbe3"
  neutral: "#fcfcfd"
  accent: "#1748b6"
  actionTop: "#396fed"
  actionEdge: "#1748b6"
  sectionInk: "#fcfcfd"
  sectionPanel: "#ffffff"
  sectionLine: "#d7dbe3"
  material: "#f0f2f6"
darkColors:
  foreground: "#f5f5f5"
  secondary: "#a6a9b0"
  accent: "#8aafff"
  sectionInk: "#0b0d12"
  sectionPanel: "#15171c"
  sectionLine: "#2b2e36"
  material: "#101216"
typography:
  h1:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 5rem)"
    fontWeight: 600
    lineHeight: 1.04
  h2:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: 3rem
    fontWeight: 600
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
  panel: 1.25rem
  full: 9999px
spacing:
  sm: 1rem
  md: 1.5rem
  lg: 4rem
  sectionWide: 6.5rem
---

## Overview

A calm product-led landing page with a centred promise, blue editorial accents, one primary workspace showcase, and a clear story from editing to publishing. The composition uses generous whitespace, soft surfaces, and restrained borders. It follows system light and dark preferences automatically and keeps cobalt blue actions. The layout prioritizes the product and avoids repeating the same UI illustration across multiple sections.

## Colors

`primary`, `actionTop`, and `actionEdge` retain the supplied cobalt blue in both themes. White text stays on primary buttons. Other palette tokens use CSS `light-dark()` and inherit the root `color-scheme: light dark`; the page responds immediately to system preference changes without a script, reload, or forced theme class.

| Role | Light | Dark |
| --- | --- | --- |
| Foreground | #181b22 | #f5f5f5 |
| Body copy | #454b57 | #d4d4d4 |
| Muted copy | #5d6471 | #a6a9b0 |
| Blue accent / focus | #1748b6 | #8aafff |
| Page canvas | #fcfcfd | #0b0d12 |
| Panel | #ffffff | #15171c |
| Border | #d7dbe3 | #2b2e36 |
| Material | #f0f2f6 | #101216 |
| UI fill | #e8ebf1 | #22252c |
| Secondary button top | #ffffff | #262626 |
| Secondary button edge | #aeb6c4 | #050505 |

The palette and theme-aware shadows are defined together in `src/styles/global.css`. Secondary actions use a neutral surface with foreground text. Editor illustrations follow the page theme; the small website previews retain their own light canvas as separate illustrative sites. Blog and Help article bodies use regular prose in light mode and `dark:prose-invert` in dark mode.

## Typography

System sans-serif is the base for navigation, body copy, and section headings. The hero uses the shared `display` token: clamp(2.75rem, 6vw, 5rem), 1.04 line height, and -0.035em tracking. Its first line is foreground and the second line is the blue accent, both semibold sans-serif; the same accent treatment repeats in the closing heading. No serif or italic type is used. Section headings are semibold and grow from 1.875rem to 3rem. Small eyebrows are 0.75rem, semibold, with 0.12em tracking. Monospace appears only inside illustrative files and code. Supporting copy uses relaxed line height; buttons remain 0.875rem semibold.

## Layout

The landing page uses full-width backgrounds with 72rem interior containers and 1.5rem/2rem responsive side padding. It no longer uses the full-page vertical frame, numbered section rails, blueprint icon columns, or hatch strips. Section padding is 4rem on mobile and 6.5rem on larger screens.

The centred hero has one heading, concise supporting copy, primary and secondary actions, and three small benefit labels. Its product illustration is the main visual, up to 64rem wide. The editor and sidebar are shown on desktop; mobile presents a compact preview with the workspace toolbar and file status.

Two benefit cards explain the Markdown CMS and site agent through small, distinct illustrations. A softly tinted workflow section reduces the journey to three steps: make a change, review a preview, then share/publish. An ownership section retains comparisons with WordPress, visual builders, and Builder.io. A two-column FAQ and a centred closing card complete the page. Grids stack on mobile. The sticky header and footer keep the same inner alignment. Blog and Help retain their current page structure and share the theme tokens.

## Elevation & Depth

One large product surface anchors the hero with a faint inset highlight and a soft, wide shadow. A quiet radial blue wash sits behind it. Smaller benefit and comparison cards use thin borders with no heavy shadows. A tinted workflow background provides section rhythm without a full border grid. Main surfaces use a 1.25rem radius; the closing panel uses 1.75rem.

Buttons use a flat fill with a hairline shadow, a 98% press scale, and native active feedback with a 75ms response. Hover and release use a 200ms ease-out. Secondary buttons use a neutral theme-aware edge. Reduced-motion settings remove spatial movement. There are no automatic or looping animations.

## Shapes

Primary and secondary actions use 0.5rem corners. Product, benefit, and comparison surfaces use the shared `panel` radius of 1.25rem; nested UI uses smaller radii. Circular step indicators and a small pill-shaped hero label provide restrained accents. FAQ rows retain simple straight dividers.

## Components

`Button.astro` owns the primary and secondary link treatments. The hero and closing card share the primary action label, linking to the workflow. The secondary hero action links directly to the CMS benefits. All navigation and actions retain visible keyboard focus.

`ProductPreview.astro` is a decorative HTML illustration with a visible caption. It shows a more complete workspace: project sidebar, structured content fields, an editor body, a website preview, and file status. It is not a functioning editor or screenshot. Desktop shows the editing and preview panes together; mobile shows the preview pane.

`Features.astro` has two benefit cards. Its Markdown excerpt and agent conversation are illustrative, hidden from assistive technology, and described by nearby headings and copy. They do not present a real session or customer proof. `Workflow.astro` explains three steps and mentions history separately. `Comparison.astro` keeps the original competitor choices in readable cards. FAQ remains native details elements with keyboard operation and visible open state.

## User preferences

Reduced-motion settings remove button translation and scaling and stop FAQ icon rotation; color and open-state feedback remain. The `surface-glass` utility uses a near-solid theme-aware material with 24px backdrop blur. Reduced-transparency settings replace it with a solid surface and remove the blur. Increased-contrast settings use the solid surface with a defined outline. No animation blocks navigation or content interaction.

## Do's and Don'ts

Do keep calls to action visually consistent and text readable in both themes. Reserve solid cobalt for actions; use dark blue accents on light surfaces and brighter blue accents on dark surfaces. Keep actions flat with a hairline shadow, and content cards flat with thin borders. Treat illustrative UI as a visual explanation, not a screenshot or proof of a feature not present in the product. Update this file and the CSS theme together when adding visual tokens.

## Voice & Tone

Direct, precise and professional: state what the product does in plain terms, with no whimsy or figurative language. Lead with the practical outcome of keeping an Astro site current. Explain that the CMS updates Markdown files in configured Astro content collections and that an agent handles broader site changes. Do not imply that every repository is CMS-editable or claim customer proof, pricing, or a public download that has not been verified. Buttons describe the action they take.
