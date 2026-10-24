---
version: alpha
name: Orso
description: Keep your Astro site current with a Markdown CMS, an AI agent, and live preview.
colors:
  primary: "#245ee0"
  secondary: "#a3a3a3"
  tertiary: "#303030"
  neutral: "#0a0a0a"
  accent: "#8aafff"
  actionTop: "#396fed"
  actionEdge: "#1748b6"
  sectionInk: "#0a0a0a"
  sectionPanel: "#171717"
  sectionLine: "#303030"
typography:
  h1:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: 6rem
    fontWeight: 400
    lineHeight: 1.05
  h2:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: 3.75rem
    fontWeight: 400
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

A continuous near-black marketing site with generous whitespace, editorial headlines, quiet product panels, and cobalt blue actions. Inspired by the structure and restraint of Resend's marketing page, with Orso's own blue identity. The shared dark shell applies to the landing page, Blog, Help, and articles regardless of system color preference.

## Colors

`primary` is the cobalt blue base of the main call to action, sampled from the supplied reference. `actionTop` is a slightly darker blue than the image's brightest edge so white button text remains readable; `actionEdge` is the deeper blue ledge below it. `accent` is a brighter blue for readable small labels, icons, links, and focus indicators on dark surfaces. `secondary` is the muted grey for supporting copy; `tertiary` and `sectionLine` define subtle borders. `neutral` and `sectionInk` are the near-black canvas; `sectionPanel` is the slightly lifted surface for cards and illustrative UI. These values are mirrored in the `@theme` block of `src/styles/global.css`.

## Typography

The hero and closing headlines use the `font-editorial` system serif stack: Georgia, Times New Roman, serif. The hero grows from 3rem on mobile to 6rem on desktop; the closing headline grows from 3rem to 4.5rem. Product section headings use the system sans-serif stack at regular weight, 2.25rem on mobile through 3.75rem on desktop, with tight tracking and optional muted second lines. FAQ headings top out at 3rem. Body copy is 1rem with generous line height; introductory copy is 1.125rem. Eyebrows are 0.75rem, uppercase and widely tracked. Buttons are 0.875rem semibold.

## Layout

All sections, header, and footer share a centred 72rem container. Side padding is 1.5rem on mobile and 2rem from the small breakpoint. Sections use the shared `section` spacing token (5rem vertical padding), growing to `section-wide` (8rem) on larger screens. Thin full-width dividers establish the page rhythm. A centred hero leads to paired CMS and preview illustrations, an open three-column capability grid, three comparison cards, a two-column FAQ, and a centred closing action. Grids collapse on mobile. The header navigation wraps with visible spacing; the footer follows the same alignment. Blog and Help use the same containers and dark panel treatment. Markdown is always rendered with inverted typography.

## Elevation & Depth

Product illustrations sit in softly bordered dark panels with subtle depth; the capability grid has no boxes. Comparison cards and FAQ rows stay flat with thin, low-contrast borders. Restrained blue radial lighting supports the hero and closing action. Buttons look raised through a four-pixel lower edge and a soft ambient shadow. On press, they move down three pixels and the edge becomes one pixel high. Secondary buttons use a neutral dark lower edge. The raised and pressed shadows are recorded in the CSS theme.

## Shapes

Actions are separate buttons with 0.75rem corners and space between them. Cards and product frames use 1rem corners and 1px borders. Pill shapes are reserved for illustrative status badges and small preview controls. FAQ rows use straight dividers.

## Components

`Button.astro` owns the shared raised link treatment. The primary variant is cobalt blue; the secondary variant is neutral charcoal. Both have a subtle vertical gradient, a lower edge, and a pressed state. Blue also marks the preview illustration's action, workflow icons, eyebrows, and text links. Navigation, buttons, and FAQ summaries have visible keyboard focus, and reduced-motion settings remove movement. The CMS and preview illustrations use simple HTML shapes; they are hidden from assistive technology, with their purpose stated in nearby headings and copy. The workflow uses unboxed icon-and-text items. Comparisons use three separate cards. FAQ uses native details elements with a rotating plus indicator and blue open state.

## Do's and Don'ts

Do keep calls to action visually consistent and text readable against the dark canvas. Reserve solid cobalt for actions and use the brighter accent for small blue text. Use the raised treatment for actions, while content cards remain flat. Treat illustrative UI as a visual explanation, not a screenshot or proof of a feature not present in the product. Update this file and the CSS theme together when adding visual tokens.

## Voice & Tone

Plain, friendly and benefit-led, with short sentences and no jargon. Lead with the practical outcome of keeping an Astro site current. Explain that the CMS updates Markdown files in configured Astro content collections and that an agent handles broader site changes. Do not imply that every repository is CMS-editable or claim customer proof, pricing, or a public download that has not been verified. Buttons describe the action they take.
