---
version: alpha
name: Orso
description: Keep your Astro site current with a Markdown CMS, an AI agent, and live preview.
colors:
  primary: "oklch(52% 0.22 268)"
  secondary: "#5d6471"
  tertiary: "#d7dbe3"
  neutral: "oklch(98.8% 0.006 275)"
  inverse: "oklch(16% 0.05 270)"
  accent: "oklch(52% 0.22 268)"
  actionTop: "oklch(60% 0.2 268)"
  actionEdge: "oklch(44% 0.2 268)"
  sectionInk: "oklch(98.8% 0.006 275)"
  sectionPanel: "oklch(100% 0 0)"
  sectionLine: "oklch(91% 0.016 275)"
  material: "oklch(97.2% 0.01 275)"
darkColors:
  foreground: "oklch(96% 0.01 275)"
  secondary: "oklch(72% 0.02 275)"
  accent: "oklch(76% 0.13 268)"
  sectionInk: "oklch(14% 0.03 275)"
  sectionPanel: "oklch(18% 0.035 275)"
  sectionLine: "oklch(28% 0.03 275)"
  material: "oklch(16.5% 0.035 275)"
typography:
  h1:
    fontFamily: "Geist Variable, -apple-system, sans-serif"
    fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.05
  h2:
    fontFamily: "Geist Variable, system-ui, sans-serif"
    fontSize: 3rem
    fontWeight: 400
    lineHeight: 1.12
  body-md:
    fontFamily: "Geist Variable, system-ui, sans-serif"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Geist Variable, system-ui, sans-serif"
    fontSize: 1rem
    fontWeight: 600
    lineHeight: 1.5
rounded:
  sm: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  panel: 0.75rem
  full: 9999px
spacing:
  sm: 1rem
  md: 1.5rem
  lg: 4rem
  sectionWide: 7rem
---

## Overview

A calm, structured product page in the style of Navy by Lexington Themes: a cool indigo-tinted canvas, one vivid indigo accent, a deep navy hero and closing band, light-weight headings, and hairline rules instead of heavy cards. It follows system light and dark preferences automatically.

## Colors

Neutrals carry a faint violet-blue tint (hue 275). `primary`/`actionTop`/`actionEdge` are the single indigo accent used for actions; `inverse` (deep navy) is constant in both themes and used for the hero and closing bands. Palette tokens use CSS `light-dark()` in `src/styles/global.css`.

| Role | Light | Dark |
| --- | --- | --- |
| Foreground | oklch(20% .04 275) | oklch(96% .01 275) |
| Body copy | oklch(34% .035 275) | oklch(86% .015 275) |
| Muted copy | oklch(48% .03 275) | oklch(72% .02 275) |
| Accent text | oklch(52% .22 268) | oklch(76% .13 268) |
| Canvas | oklch(98.8% .006 275) | oklch(14% .03 275) |
| Panel | white | oklch(18% .035 275) |
| Border | oklch(91% .016 275) | oklch(28% .03 275) |
| Material (muted band) | oklch(97.2% .01 275) | oklch(16.5% .035 275) |
| Navy (inverse) | oklch(16% .05 270) | same |

## Typography

Geist (variable, self-hosted via `@fontsource-variable/geist`) throughout, with Geist Mono for code and system sans-serif as the fallback. Headings are normal weight (400) with tight tracking and `text-balance`: h1 uses the `display` token, section headings run 1.875rem to 3rem. Section labels are 0.75rem, medium, in sentence case (no all-caps), prefixed with a `///` marker. Only the logo wordmark is uppercase. Card and item titles are 1rem medium. Body is small and relaxed. No serif or italic type.

## Layout

A 85rem container with 1.5rem/2rem side padding. The header is fixed: transparent with white text over the navy hero, then a blurred solid bar once scrolled (a small inline script sets `data-solid`); other pages use a solid header. Sections are separated by hairline rules and alternate between canvas, `muted` and `inverse` bands. Section padding is 4rem mobile / 7rem desktop. Comparison is a ruled table that stacks on mobile; the workflow is three rule-topped items; the FAQ is a two-column accordion.

## Elevation & Depth

Almost flat. Panels use a 0.75rem radius and a thin border; only the hero product window carries a soft wide shadow. The hero and closing band use a faint indigo glow (`hero-glow`) at the bottom edge.

## Components

The reusable library lives in `src/components/ui/`; section components compose it.

- `Container` — max-width wrapper with responsive padding.
- `Section` — full-width band; props `id`, `tone` (`default | muted | inverse`), `rule`; wraps content in `Container` with section padding.
- `SectionHeader` — `///` label, heading (default slot), description, `align`, `tone`, `level`, and an `actions` slot.
- `Button` — `variant` (`primary | secondary | inverse`) and `size` (`sm | md`); compact gradient buttons, 98% press scale, visible focus.
- `Badge` — small pill label, `tone` default or inverse.
- `RuleItem` — rule-topped item with optional index, title and description.
- `Panel` — bordered surface.
- `Accordion` — native `details` list from `{question, answer}` items.

`ProductPreview.astro` is a decorative illustration of the workspace, not a screenshot or proof of a feature. New sections should be built from these components; add a new one to `ui/` when a pattern repeats.

## User preferences

Reduced motion removes press scaling and the header and icon transitions. Reduced transparency makes the scrolled header solid. No animation blocks interaction.

## Do's and Don'ts

Reserve indigo for actions and small accents. Prefer rules and whitespace to boxed cards. Keep headings light. Treat illustrative UI as illustration. Update this file and `@theme` together when adding visual tokens.

## Voice & Tone

Direct, precise and professional: state what the product does in plain terms, with no whimsy or figurative language. Explain that the CMS updates Markdown in configured Astro content collections and that an agent handles broader site changes. Do not imply every repository is CMS-editable or claim customer proof, pricing, or a public download that has not been verified. Buttons describe the action they take.
