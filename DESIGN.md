---
version: alpha
name: Orso
description: Keep your Astro site current with a Markdown CMS, an AI agent, and live preview.
colors:
  primary: "#1d57e8"
  secondary: "#525252"
  tertiary: "#a3a3a3"
  neutral: "#ffffff"
  actionTop: "#5b8cf6"
  actionBorder: "#7fa5f7"
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

`primary` is the deeper blue at the bottom of the call-to-action gradient. `actionTop` is its lighter top stop and `actionBorder` defines its edge. These values are mirrored in the `@theme` block of `src/styles/global.css`. `secondary` is a mid grey for supporting copy; `tertiary` is a light grey used for soft card borders; `neutral` is the white page background (it inverts to near-black in dark mode).

## Typography

The site uses the system sans-serif stack throughout. Headings are bold with tight tracking. The hero `h1` is responsive: 2.25rem (36px) on mobile and 3.75rem from the `sm` breakpoint up, and the `h1` token records the larger size; landing-page section `h2` headings are a fixed 1.875rem at every width. Body copy is regular weight at 1rem, and buttons and labels are semibold.

## Layout

Content sits in a centred column up to 64rem wide with 2rem side padding. The landing page moves from the product promise through CMS features, the three-step workflow, product fit, FAQ, and a closing call to action. Sections are separated by 4rem of vertical space, and card grids wrap automatically with a 1.5rem gap.

## Elevation & Depth

Cards and FAQ items stay flat with thin, low-contrast borders. Calls to action have a small blue-tinted shadow, recorded as `--shadow-action` in the CSS theme.

## Shapes

The paired hero actions share one 1rem rounded outline, with a thin divider between them. The closing call to action has the same radius. Cards use 0.75rem corners and 1px borders. No pill shapes are used today; `full` is there for future badges and avatars.

## Components

The hero actions form one joined blue gradient control with white line icons and labels. The closing action repeats the gradient as a single button. Links retain visible keyboard focus. The `@theme` block in `src/styles/global.css` records the action colours, shadow, and neutral tokens. Cards are bordered boxes with 1.25rem padding and the same shape is reused for features, workflow steps, product fit and FAQ items.

## Do's and Don'ts

Do keep calls to action visually consistent and keep text readable in light and dark modes. Use the blue gradient only for primary actions. Update this file and the CSS theme together when adding visual tokens.

## Voice & Tone

Plain, friendly and benefit-led, with short sentences and no jargon. Lead with the practical outcome of keeping an Astro site current. Explain that the CMS updates Markdown files in configured Astro content collections and that an agent handles broader site changes. Do not imply that every repository is CMS-editable or claim customer proof, pricing, or a public download that has not been verified. Buttons describe the action they take.
