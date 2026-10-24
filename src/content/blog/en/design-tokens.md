---
title: "A new look, built on design tokens"
description: "Our latest update gives the site a real design system — one source of truth for color, type, radius and spacing, with dark mode handled automatically."
pubDate: "2026-10-24"
tags: [design, news]
relatedPosts: [welcome]
---

## A calmer theme

Earlier this week we shipped a refresh of the Orso site. The palette went a little softer, the type scaled a little more gently, and the spacing breathed a little more. Same product, calmer clothes.

## One source of truth

The design used to live in components as raw values — hex codes, Tailwind palette numbers, and a `dark:` variant for every colour. Want to change a button? You knew where to look, but the design itself had no home.

So we wrote it down. The design now lives in `DESIGN.md` and in the Tailwind theme that powers the site.

Every colour, size, radius and spacing decision now has a name:

- Colours: `primary`, `secondary`, `tertiary`, `neutral`, `accent`
- Type: `text-h1`, `text-h2`, `text-body`, `text-label`
- Radius and spacing tokens, too.

Components now use the generated utilities — `bg-primary`, `text-secondary`, `rounded-lg`, `p-md` — instead of raw values. Change a token once and the change ripples across the whole site.

## Dark mode, handled

Dark mode used to mean a stack of `dark:` variants per component. Now the theme flips automatically with the visitor's system setting, so light and dark stay in sync without a single variant in sight.

## Why it matters

A design system means the quiet look we wanted is now a system we can keep — and improve — without guessing. Want tighter headings? Change one token. Want a new hairline border? Change one token.

## What you will see

Nothing broke, and everything got calmer.
