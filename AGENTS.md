# Agent guide — Astro marketing site

Static Astro site. The landing page, navigation and footer are written directly in code; Blog and Help articles live in Markdown content collections.

## Content model

- `src/content.config.ts` defines the collections and their schemas inline; each loader uses `orsoGlob` from `orso-astro`, and the `orso()` integration is registered in `astro.config.mjs`:
  - `blog` ← `src/content/blog/en/*.md`: `title`, `description`, `pubDate` (`YYYY-MM-DD`), optional `coverImage` + `coverAlt`, `tags[]`, `relatedPosts[]`.
  - `helpDocs` ← `src/content/helpDocs/en/*.md`: `title`, `description`, `section` (reference to `helpCategories`), optional `subcategory` (reference to `helpSubcategories`), `order`.
  - `helpCategories` ← `src/content/helpCategories/en/*.md`: `title`, `description` (card blurb), `order`. The entry id is the URL slug.
  - `helpSubcategories` ← `src/content/helpSubcategories/en/*.md`: `title`, `category` (reference to `helpCategories`), `order`.

## File map

- `src/site.ts` — site name, header `nav`, footer text/links and socials.
- `src/pages/index.astro` — the landing page: renders the section components in order.
- `src/components/sections/*.astro` — one component per landing-page section (`Hero`, `ProductShot`, `Stack`, `HowItWorks`, `Features`, `Faq`, `Cta`). Each holds its own copy; its root `<section id>` is the anchor used by nav links (`#how-it-works`, `#features`, …).
- `src/components/ui/*` — stock shadcn/ui primitives (Base UI + React), themed only through the token layer. `src/components/faq-list.tsx` composes the FAQ accordion into one island, `src/components/product-shot.tsx` builds the hero mock from Card/Skeleton/Badge/Bubble, and `src/lib/utils.ts` re-exports `cn`.
- `components.json`, `tsconfig.json` — shadcn/ui configuration and the `@/*` → `src/*` import alias. The React integration is registered in `astro.config.mjs`.
- `src/pages/blog/`, `src/pages/help/` — index and article routes for the collections.
- `src/layouts/Base.astro` — header and footer (from `src/site.ts`); imports `src/styles/global.css`.
- `src/styles/global.css` — Tailwind CSS v4 entry (`@import "tailwindcss"`, `shadcn/tailwind.css`, the typography plugin). Theme tokens go in an `@theme` block here; there is no `tailwind.config.js`. `@theme inline` maps shadcn/ui's semantic names onto the Orso palette.
- `src/lib/href.ts` — base-aware link helper.
- `astro.config.mjs` — reads `PUBLIC_BASE` (default `/`) for `base` and the HMR socket path (needed for the live preview proxy). Keep both. Do not hard-code absolute paths; use `import.meta.env.BASE_URL` or `href()`.

## Conventions

- Landing-page copy: edit the section component directly. Nav, footer and socials: edit `src/site.ts`.
- New landing-page section: add a component in `src/components/sections/` and render it in `src/pages/index.astro`.
- New page: add an `.astro` route in `src/pages/` wrapped in `Base`.
- Blog posts and help docs: add or edit Markdown under `src/content/blog/en/` and `src/content/helpDocs/en/`.
- Styling: use Tailwind utility classes and the shadcn/ui primitives. Prefer the semantic tokens (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`) plus the Orso palette (`bg-brand`, `text-link`, `bg-ground`, `bg-panel`, `border-hairline`). The site is dark-only: `<html class="dark">` is permanent and the `dark` variant is class-based — there is no toggle. Wrap rendered Markdown bodies in `prose prose-invert`. Avoid `<style>` blocks.
- Adding a UI primitive: run `npx shadcn@latest add <name>` (Base UI flavour, configured in `components.json`). Leave the generated component, variants and sizes as shadcn ships them; theme through the tokens in `src/styles/global.css` and pass layout classes at the call site.
- Compound Base UI components (Accordion, Dialog, …) must be composed inside a single React component and hydrated with `client:*`. Splitting their parts across `.astro` files breaks their context; see `src/components/faq-list.tsx`. Static primitives (Button, Card, Badge) need no client directive, and anchors should use `buttonVariants()` rather than an island.
- `DESIGN.md` is the design source of truth. When you change styles, update both `DESIGN.md` and the `@theme` block in `src/styles/global.css` (create it if missing).
- Keep the dev server (`npm run dev`) running as-is; it is managed externally. Edits hot-reload in the live preview — just save the files and stop. Do **not** run `npm run build` (or `astro build`) after ordinary content/component edits; a full build is only for deploy or when the user explicitly asks to verify the production build.

## Checking your work

In a orso agent session, check the live preview after editing with `"$ORSO_HOOK_EXE" ctl preview-status` (it prints JSON; `devserver` is `starting`, `ready`, or `crashed`). Edits often hot-reload; do not build. If it is `crashed`, run `"$ORSO_HOOK_EXE" ctl restart-preview` once, then tell the user in plain words what happened.

After installing dependencies or adding shadcn components while the preview is running, Vite can keep serving stale optimized deps (`504 Outdated Optimize Dep`), which makes React islands silently fail to hydrate. If an island stops responding, remove `node_modules/.vite` and run `restart-preview` once, then reload.

After adding or renaming content (or when the Content sidebar looks stale), run `"$ORSO_HOOK_EXE" ctl refresh-content` so the app reloads **collections** and entry lists, then `"$ORSO_HOOK_EXE" ctl refresh-preview` so the preview page remounts. Cursor has no turn-end hook — call both before saying you are done; other agents also get this refresh when the turn ends.

## Deployment

Push-and-live on Cloudflare Workers (static assets). `.github/workflows/deploy.yml` runs `npm ci && npm run build` and deploys `dist/` on every push to `main`, and uploads a preview of every pull request branch at a stable per-branch `workers.dev` URL (published as a GitHub deployment + sticky PR comment, see `README.md`); `wrangler.toml` names the Worker and points `[assets]` at `./dist`. Needs the `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` repo secrets. Keep the site fully static (no SSR adapter) and keep the build output in `dist/`.
