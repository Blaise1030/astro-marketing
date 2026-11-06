# Astro marketing site

Static Astro site styled with Tailwind CSS v4 and shadcn/ui — the marketing sections compose stock React primitives from
`src/components/ui/`, while only the interactive FAQ ships an island. The landing page lives in
`src/components/sections/` and `src/site.ts`; Blog and Help articles live in `src/content/` (see `AGENTS.md` and
`DESIGN.md`).

```bash
npm ci
npm run dev     # local dev server
npm run build   # static build into ./dist
```

## Deploys (Cloudflare Workers)

`.github/workflows/deploy.yml` builds the site and deploys `dist/` to Cloudflare Workers as static
assets (no Worker script; `wrangler.toml` points `[assets]` at `./dist`):

- **Push to `main`** → production deploy (`wrangler deploy`), served at
  `https://<worker>.<subdomain>.workers.dev`. The workflow records a GitHub **deployment**
  for the push commit (`environment: production`) and sets its status to `success` with
  `environment_url` = the live site URL (from `PUBLIC_SITE_URL` / wrangler output).
- **Pull request** (opened, updated, reopened, marked ready) → preview of the PR head commit
  (`wrangler versions upload --preview-alias=<alias>`). The alias comes from the head branch
  (`content/launch-week` → `content-launch-week`), made safe and short enough by
  `.github/scripts/preview-alias.sh`, so every branch keeps one stable preview URL:
  `https://<alias>-<worker>.<subdomain>.workers.dev`. Previews never touch production. The
  workflow then:
  - records a GitHub **deployment** for the PR head commit and sets its status to `success`
    with `environment_url` = the preview URL (or `failure` if the upload failed);
  - posts one **sticky PR comment** with the preview link, updated on every push.

  The CMS orso reads those deployments: a **Preview** link beside the PR status
  ("Draft · Checks pending", "Open · Checks passing", …), and **Open live site** in the
  header when you are on `main`.

### One-time setup

1. Set `name` in `wrangler.toml` to your Worker's name (the first deploy creates it). Keep
   `workers_dev` and `preview_urls` on: preview URLs live on `workers.dev`.
2. In the GitHub repo, **Settings → Secrets and variables → Actions**:
   - secret `CLOUDFLARE_API_TOKEN` — API token with the *Workers Scripts: Edit* permission;
   - secret `CLOUDFLARE_ACCOUNT_ID`;
   - variable `CLOUDFLARE_WORKER_NAME` (optional; defaults to `astro-marketing`);
   - variable `PUBLIC_SITE_URL` (optional; canonical live origin for a custom domain).

The job asks for its own token permissions (`contents: read`, `deployments: write`,
`pull-requests: write`); nothing else needs enabling. Pull requests from forks get no secrets,
so they are skipped.
