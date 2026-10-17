---
version: alpha
name: Acme
description: Ship your product story faster with Acme.
colors:
  primary: '#1f2329'
  secondary: '#6b7280'
  tertiary: '#d1d5db'
  neutral: '#ffffff'
  accent: '#3366ff'
  accent-soft: '#eef2ff'
  surface: '#f6f7f9'
  note: '#fbe8d3'
  success: '#22c55e'
  danger: '#ef4444'
typography:
  h1:
    fontFamily: Inter, ui-sans-serif, system-ui, sans-serif
    fontSize: 3.5rem
    fontWeight: 600
    lineHeight: 1.05
  h2:
    fontFamily: Inter, ui-sans-serif, system-ui, sans-serif
    fontSize: 1.875rem
    fontWeight: 600
    lineHeight: 1.2
  body-md:
    fontFamily: Inter, ui-sans-serif, system-ui, sans-serif
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: Inter, ui-sans-serif, system-ui, sans-serif
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: Inter, ui-sans-serif, system-ui, sans-serif
    fontSize: 0.875rem
    fontWeight: 500
    lineHeight: 1.4
  caption:
    fontFamily: Inter, ui-sans-serif, system-ui, sans-serif
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.35
rounded:
  sm: 0.375rem
  md: 0.5rem
  lg: 0.75rem
  full: 9999px
spacing:
  sm: 1rem
  md: 1.5rem
  lg: 4rem
---

## Overview

A calm, productive SaaS look borrowed from our inbox app: white canvas, soft grey panels, crisp 1px dividers and a single bright blue accent. It should feel like a well-organised workspace — dense with information but never noisy — so marketing pages look like a natural extension of the product.

## Colors

`primary` is a soft near-black for headings and body text. `secondary` is a cool grey for metadata, timestamps and supporting copy. `tertiary` is the light grey for borders and dividers. `neutral` is the white page and card background, and `surface` is the faint grey used for side panels, hovered rows and selected list items.

`accent` is the brand blue: primary buttons, links, active tabs (with a 2px underline), the selected nav icon and focus rings. `accent-soft` is its tint for selected states and icon chips. `note` is a warm peach reserved for highlighted message-style callouts (like the call summary cards). `success` and `danger` are only for status: online dots, call icons, unread counts and alerts — never decoration.

In dark mode, `neutral` inverts to near-black, `surface` to a slightly lighter charcoal, and `accent` stays the same blue.

## Typography

Inter (falling back to the system sans-serif stack) throughout. Headings are semibold (600), not bold, which keeps the tone friendly. The hero `h1` is 2.25rem on mobile and 3.5rem from `sm` up; section `h2` is 1.875rem. Body copy is 1rem on marketing pages; product-style UI such as lists, cards and tables uses `body-sm`. Names, list titles and button text use `label` (medium, 500); timestamps and counts use `caption` in `secondary`.

## Layout

Content sits in a centred column up to 64rem wide with 2rem side padding, and sections are separated by 4rem. Product mockups and feature panels use the app's multi-pane layout: a narrow icon rail, a list column, the main content and an optional right-hand panel, separated by 1px `tertiary` dividers rather than gaps. Card grids wrap automatically with a 1.5rem gap.

## Elevation & Depth

Mostly flat. Structure comes from 1px `tertiary` borders and `surface` backgrounds, not shadows. The only shadow is a soft one (`0 4px 12px rgb(0 0 0 / 0.08)`) on floating elements such as dropdowns, popovers and the floating action button.

## Shapes

Buttons, inputs and tabs use `md` (0.5rem) corners; cards, panels and message bubbles use `lg` (0.75rem). Avatars, status dots, count badges and tag chips are fully round (`full`). Icons are outlined, 1.5px stroke, at 18–20px.

## Components

- **Primary button:** solid `accent`, white `label` text, padded 1rem by 0.5rem, `md` corners.
- **Secondary button:** white with a 1px `tertiary` border and `primary` text; hover fills with `surface`.
- **Text link / ghost action:** `accent` text with an optional leading icon, no background (like "Summarize" or "AI Assist").
- **Tabs:** `label` text in `secondary`; the active tab turns `accent` with a 2px underline.
- **List row:** avatar on the left, bold name with a `caption` timestamp on the right, a one-line preview in `secondary` and an optional tag chip below. The selected row gets a `surface` or `accent-soft` background.
- **Tag chip:** fully round, `surface` background, `caption` text, optional emoji or icon prefix.
- **Count badge:** fully round `accent` with white `caption` text for unread counts; a plain `secondary` number for totals.
- **Card:** white with a 1px `tertiary` border, `lg` corners and 1.25rem padding — used for features, testimonials, pricing and FAQ items.
- **Callout bubble:** `note` background, `lg` corners and `body-sm` text, for highlighted examples or quotes.
- **Empty state:** centred icon, a `label` heading and one `secondary` line of help text.

## Do's and Don'ts

Do keep one `accent` call-to-action per section, use `surface` and dividers for hierarchy, and add `dark:` variants for every colour. Don't use `accent` for large backgrounds, use `success`/`danger` decoratively, add heavy shadows or gradients, or add more accent colours without updating this file first.

## Voice & Tone

Plain, friendly and benefit-led, with short sentences and no jargon. Headlines promise an outcome ("Launch your story, not your backlog") and buttons use direct verbs such as "Get started".
