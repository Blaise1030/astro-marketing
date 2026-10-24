# Resend Design Consistency Implementation Plan

> **For agentic workers:** Execute inline with superpowers:executing-plans. Steps use checkbox syntax for tracking.

**Goal:** Apply the approved continuous dark design while retaining Orso's cobalt blue raised actions.

**Architecture:** Keep existing static Astro pages and section components. Add one shared Button component for link actions; keep page content and the collection model intact. Extend the shared Base layout and theme to Blog and Help.

**Tech Stack:** Astro, Tailwind CSS v4, Markdown content collections.

## Task 1: Shared visual system

- [x] Update `src/styles/global.css`: retain the blue action colors, add readable blue accent and muted text tokens, dark neutral secondary shadows, editorial font, and shared section spacing.
- [x] Create `src/components/Button.astro`: base-aware link, primary or secondary variant, shared raised/pressed states, visible focus and reduced-motion support.
- [x] Update `src/layouts/Base.astro`: consistent dark surface, 72rem container, wrapping navigation, aligned footer and minimum-height page shell.

## Task 2: Landing-page consistency

- [x] Update `src/components/sections/Hero.astro` and `Cta.astro`: editorial serif headings, blue ambient light, shared buttons, shared section spacing.
- [x] Update `Features.astro` and `Workflow.astro`: shared containers, responsive headings, readable blue icons, matching vertical rhythm and section dividers.
- [x] Update `Comparison.astro`: three distinct bordered comparisons with blue labels and consistent supporting text.
- [x] Update `Faq.astro`: two-column introduction and native accordion on desktop, stacked mobile layout, open/focus/hover states.

## Task 3: Supporting pages and documentation

- [x] Update `src/pages/blog/index.astro`, `src/pages/help/index.astro`, and both `[slug].astro` routes: dark cards, readable metadata, consistent headings, inverted Markdown and blue link states.
- [x] Update `DESIGN.md` to describe the actual palette, typography, shared dimensions and component rules.
- [x] Mark the approved design specification as approved.

## Task 4: Verification

- [x] Run `git diff --check` and parse modified Astro components using `@astrojs/compiler-rs`; fix any errors.
- [x] Confirm managed preview status, then inspect real browser renderings at 1440px and 390px widths. Check for horizontal overflow, FAQ toggle, focus, and link destinations.
- [x] Check Blog, Help, and an article route with the shared dark shell. Capture screenshots in temporary paths.
- [x] Refresh the preview and confirm it remains ready. Do not run a production build.

No new automated tests are needed for this visual change. Browser checks verify the layout and interactions directly.
