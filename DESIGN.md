---
version: alpha
name: Orso
description: Keep your Astro site current with a Markdown CMS, an AI agent, and live preview.
colors:
  primary: "#171717"
  secondary: "#525252"
  tertiary: "#a3a3a3"
  neutral: "#ffffff"
  actionTop: "#4b4b4b"
  actionEdge: "#080808"
  sectionInk: "#0a0a0a"
  sectionPanel: "#171717"
  sectionLine: "#303030"
typography:
  h1:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: 3.75rem
    fontWeight: 700
    lineHeight: 1
  h2:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: 1.875rem
    fontWeight: 700
    lineHeight: 1.2
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
  lg: 4rem
---

## Overview

A clean, neutral marketing site: generous whitespace, a single dark accent and a light or dark scheme that follows the visitor's system setting. It reads as confident and unfussy so the copy does the work.

## Colors

`primary` is the charcoal base of the main call to action. `actionTop` is its lighter top surface and `actionEdge` is the darker ledge below it. `sectionInk`, `sectionPanel`, and `sectionLine` define the near-black product-story sections. These values are mirrored in the `@theme` block of `src/styles/global.css`. `secondary` is a mid grey for supporting copy; `tertiary` is a light grey used for soft card borders; `neutral` is the white page background (it inverts to near-black in dark mode).

## Typography

The site uses the system sans-serif stack throughout. The hero `h1` is bold and responsive: 2.25rem (36px) on mobile and 3.75rem from the `sm` breakpoint up. The dark product-story sections use lighter-weight display headings that grow from 3rem to 4.5rem, with the second line in muted grey. Other section headings remain bold at 1.875rem. Body copy is regular weight at 1rem, and buttons and labels are semibold.

## Layout

The landing page moves from a centred product promise into a full-width dark story, then back to light sections for product fit, FAQ, and the closing call to action. The dark story contains two distinct layouts: a two-column pair of product illustrations for CMS editing and live preview, followed by an open three-column capability grid without card boxes. Inner content is centred up to 72rem wide with 2rem side padding, and both layouts collapse at smaller widths.

## Elevation & Depth

The product illustrations sit in softly bordered dark panels with subtle depth; the capability grid has no boxes. Comparison and FAQ items stay flat with thin, low-contrast borders. Buttons look raised through a four-pixel lower edge and a soft ambient shadow. On press, they move down three pixels and the edge becomes one pixel high. The raised and pressed shadows are recorded in the CSS theme.

## Shapes

Hero actions are separate buttons with 0.75rem corners and space between them. The closing call to action has the same radius. Cards use 0.75rem corners and 1px borders. No pill shapes are used today; `full` is there for future badges and avatars.

## Components

The hero has a charcoal primary action and a lighter secondary action. Both have a subtle vertical gradient, a distinct lower edge, and a pressed state. The closing action repeats the primary treatment. Links retain visible keyboard focus, and reduced-motion settings remove movement. The dark CMS and preview illustrations use simple HTML shapes as explanatory visuals; they are hidden from assistive technology, with their purpose stated in the nearby headings and copy. The workflow uses unboxed icon-and-text items. Product fit and FAQ retain bordered boxes.

## Do's and Don'ts

Do keep calls to action visually consistent and keep text readable in light and dark modes. Use the raised treatment for actions, while content cards remain flat. Treat illustrative UI as a visual explanation, not a screenshot or proof of a feature not present in the product. Update this file and the CSS theme together when adding visual tokens.

## Voice & Tone

Plain, friendly and benefit-led, with short sentences and no jargon. Lead with the practical outcome of keeping an Astro site current. Explain that the CMS updates Markdown files in configured Astro content collections and that an agent handles broader site changes. Do not imply that every repository is CMS-editable or claim customer proof, pricing, or a public download that has not been verified. Buttons describe the action they take.
