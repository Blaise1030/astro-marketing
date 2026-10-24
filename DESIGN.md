---
version: alpha
name: Orso
description: Describe your site. Orso builds it.
colors:
  primary: "#171717"
  secondary: "#525252"
  tertiary: "#a3a3a3"
  neutral: "#ffffff"
  accent: "#2563eb"
typography:
  h1:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: 4.5rem
    fontWeight: 700
    lineHeight: 1.05
  h2:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 1.2
  body-md:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: 0.875rem
    fontWeight: 600
    lineHeight: 1.5
rounded:
  sm: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  2xl: 1rem
  full: 9999px
spacing:
  sm: 1rem
  md: 1.5rem
  lg: 4rem
---

## Overview

The site mirrors the product: a quiet, light interface where the work is the star. Near-black type on white, one restrained blue accent, thin borders and generous whitespace. No decoration competes with the copy or the product sketch.

## Colors

`primary` is near-black and fills the main call-to-action; `secondary` is a mid grey for supporting copy; `tertiary` is a light grey for hairline borders and placeholder shapes; `neutral` is the white page background (near-black in dark mode). `accent` is a single blue, used only for small signals — the hero badge dot, step numbers, the send button in the product sketch. Never use it for large fills.

## Typography

The system sans-serif stack throughout. The hero `h1` is responsive: 3rem (48px) on mobile and 4.5rem (72px) from the `sm` breakpoint up, at weight 700 with tight tracking and a 1.05 line height. Section `h2` headings are 2.25rem at every width. Body copy is regular 1rem, and buttons and labels are semibold 0.875rem. Section eyebrows are 0.75rem, uppercase, wide-tracked and grey.

## Layout

Content sits in a centred column up to 64rem wide with 2rem side padding; the header and footer use the same column. The hero is centred with 5rem–7rem of top space; other sections are separated by 4rem of vertical space. Card grids wrap automatically with a 1.5rem gap (three columns on desktop where the content allows).

## Elevation & Depth

The design is flat: no shadows and no gradients. Depth comes from hairline borders (1px, `tertiary` at low opacity) and a light grey section fill (`neutral-50`) behind the closing call-to-action.

## Shapes

Buttons use 0.5rem corners, cards 0.75rem, the product sketch and the closing panel 1rem. Borders are 1px. Pills are reserved for the hero badge; avatars and dots use `full`.

## Components

Primary buttons are solid `primary` with white text; secondary buttons are outlined with a hairline border that darkens on hover. Both are padded 1.25rem by 0.75rem at 0.875rem. Cards are bordered boxes with 1.5rem padding, reused for steps, features and FAQ items. FAQ items are native `<details>` with a plus that rotates when open. The hero product sketch is a bordered two-pane window (rail, preview, chat) built from neutral blocks and two short chat bubbles.

## Do's and Don'ts

Do keep one solid call-to-action per section, use utility classes with `dark:` variants for every colour, and let whitespace separate sections. Don't add shadows, gradients, extra accent colours or custom font files without updating this file first. Don't use the accent for buttons or backgrounds.

## Voice & Tone

Plain, friendly and benefit-led, with short sentences and no jargon. Headlines promise an outcome ("Describe your site. Orso builds it.") and buttons use direct verbs such as "Start building". Talk about changes, previews and publishing — never about branches, commits or merges.
