# Orso design consistency proposal

Status: proposed; awaiting selection of the overall page treatment.

## Reference and findings

Reviewed https://resend.com/ visually on 2026-10-24. https://resend.dev/ is a separate email testing information page.

Resend's marketing page uses a continuous near-black canvas, spacious sections, restrained panel borders, large editorial hero and closing headlines, sans-serif product headings, and product illustrations that carry the story. Alternating centered and left-aligned compositions provide variety within a shared visual system.

Orso currently changes from a white hero to dark product sections and back to white comparison, FAQ, and closing sections. The header and footer span a different width from the content. The hero and lower sections use much smaller, heavier headings than the dark sections. Comparison content sits in one dense box while the workflow is spacious and open.

## Recommended direction

Extend the existing dark product treatment across the landing page and shared site shell. Keep cobalt blue as Orso's primary action color. A lighter alternative would preserve the white sections while unifying typography, containers, and borders; it would retain the stronger background changes visible today.

## Shared system

- Canvas: #0a0a0a; panels: #171717; borders: #303030.
- Primary action: #245ee0, top surface #396fed, lower edge #1748b6.
- Add a brighter blue accent for small text and icons against dark backgrounds, with readable contrast.
- Use one 72rem content width, 1.5rem horizontal padding on mobile and 2rem on larger screens.
- Use consistent section spacing of 5rem on mobile and 8rem on desktop.
- Hero and closing headline: system serif, balanced lines and generous scale. Product section headings: system sans-serif, regular weight, tight tracking, with muted secondary lines.
- Preserve the separate raised primary and secondary actions. Use a neutral dark secondary surface and neutral shadows rather than blue secondary shadows.

## Page treatment

1. Header: dark surface, aligned container, clear Orso wordmark, quiet navigation, visible keyboard focus, wrapping mobile navigation.
2. Hero: centered editorial headline, narrow supporting copy, raised blue action and neutral secondary action, restrained blue ambient lighting.
3. CMS and preview: preserve paired product illustrations; align their containers, heading scale, spacing, and panel treatment with the overall system.
4. Workflow: preserve the open six-item grid, with blue icons and consistent text spacing.
5. Comparison: large heading and three separate comparison rows/cards, using the same subtle borders and readable text as the product sections.
6. FAQ: desktop two-column introduction and questions; mobile stacked layout; native details controls with visible open and keyboard focus states.
7. Closing action: generous spacing, editorial headline, blue raised button, restrained ambient lighting.
8. Footer: shared width, quiet text, top divider and consistent link states.

The shared shell applies to Blog and Help. Their cards, links, headings, and rendered Markdown should remain readable against the shared dark canvas. Existing positioning, destinations, Markdown content, and collection behavior remain the basis of the site.

## Implementation and verification

Use existing Astro section components and Tailwind utilities. Consolidate repeated raised action styling into a small shared button component if needed. Update DESIGN.md and the global @theme together.

Check the rendered landing page at desktop and mobile widths, including navigation wrapping, horizontal overflow, FAQ operation, keyboard focus, and button states. Check Blog and Help with the shared shell. Confirm the managed preview is ready. Do not run a production build for these style changes.
