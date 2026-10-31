---
title: "A darker look, built on design tokens"
description: "Our latest update turns the site into a near-black ledger — one source of truth for colour, type, radius and spacing."
pubDate: "2026-10-27"
tags: [design, news]
relatedPosts: [welcome]
---

## A sharper theme

Earlier this year we shipped a refresh of the Orso site. It now reads like a ledger: white ink on one near-black ground, hairline rules instead of shadows, a grey second line on every heading, and a single inverted action colour — white. Same product, sharper clothes.

## One source of truth

The design used to live in components as raw values — hex codes, Tailwind palette numbers, and a `dark:` variant for every colour. Want to change a button? You knew where to look, but the design itself had no home.

So we wrote it down. The design now lives in `DESIGN.md` and in the Tailwind theme that powers the site.

Every colour, size, radius and spacing decision now has a name:

- Colours: `ground`, `panel`, `raised`, `ink`, `muted-ink`, `faint`, `hairline`, `live`, `brand`
- Type: `text-h1`, `text-h2`, `text-h3`, `text-body`, `text-label`, `text-eyebrow`
- Radius, the section rhythm and the mono stack, too.

Components now use the generated utilities — `bg-ground`, `text-muted-foreground`, `border-hairline`, `rounded-lg`, `py-section` — instead of raw values. The UI primitives come from shadcn/ui and are mapped onto the same tokens, so change a token once and the change ripples across the whole site.

## Dark only, on purpose

This is not a light theme with the lights turned off. The palette is one ground, one ink and a few greys; there is no light mode and no toggle to maintain. `color-scheme: dark` is set at the root, and the shadcn primitives follow the class-based `dark` variant. Fewer states, fewer places for the design to drift.

The one colour signal is a soft green for live previews and connected agents. Everything else is earned by spacing, hairlines and type.

## Why it matters

A design system means the quiet look we wanted is now a system we can keep — and improve — without guessing. Want tighter headings? Change one token. Want a softer rule? Change one token. Want the hero horizon to breathe? Change one mask.

## What you will see

A new hero with a dotted horizon, a product window that shows the agent and the preview side by side, a geometric feature band, a terminal split, a ruled "one app instead of three subscriptions" ledger, and a closing call to action over a second horizon. Nothing broke, and everything got quieter.
