---
title: Getting started with Orso
description: Install Orso, open an Astro site in your browser, edit content, and get a change ready to publish.
category: getting-started
section: getting-started
order: 1
---

## What Orso is

Orso is a free, open-source site builder for Astro sites. It runs on your own computer (macOS or Linux) and opens in your browser. Edit content in forms, or ask a coding assistant for bigger changes, and preview every change before it goes live. Your site stays in a GitHub repository you own.

## Install

On a Mac, install with Homebrew, then start Orso:

```sh
brew install blaise1030/tap/orso
orso serve --open
```

On Linux (or a Mac without Homebrew), use the installer script from the [Orso README](https://github.com/Blaise1030/cms#install). Orso opens in your browser; keep the terminal open while you work.

## Open a project

Choose **New project**, then start from the Astro marketing template or pick a repository from GitHub. Sign in to GitHub when asked. Orso installs what the site needs and starts a live preview.

## Set up an existing Astro site

Sites made from the template are ready to go. For your own Astro site, add Orso to `astro.config.mjs` so the preview works inside Orso and your content shows up under **Content**:

```js
import { defineConfig } from "astro/config";
import { orso } from "./integrations/orso/index.js";

// Orso serves the live preview under /preview/{project}/.
const base = process.env.PUBLIC_BASE ?? "/";
const hmrPort = Number(process.env.ORSO_DEV_PORT || process.env.ORSO_PROXY_PORT || 0);

export default defineConfig({
  base,
  integrations: [/* your integrations */, orso()],
  vite: {
    server: {
      hmr: {
        path: `${base}vite-hmr`.replace(/\/{2,}/g, "/"),
        ...(hmrPort > 0 ? { clientPort: hmrPort } : {}),
      },
    },
  },
});
```

That also needs Orso's integration copied into `integrations/orso/`, its packages installed, links that respect the base path, and content collections loaded with `orsoGlob`. You don't have to do this by hand — let your coding assistant do it with the Orso setup skill:

```sh
npx skills add Blaise1030/cms --skill setup-orso
```

Then ask your assistant (Claude Code, Codex, Cursor or OpenCode) to "set up this site for Orso". It checks your site, makes the changes on a separate branch for you to review, and confirms the preview and content work. [Use Orso with an existing site](/help/use-orso-with-an-existing-site/) lists everything it sets up.

## Edit content

Open **Content** to browse the site's collections. Select a post or help article, edit its fields and body, and save. Orso updates the Markdown file in the project.

## Make a larger change

Every edit happens on a **change**, never directly on the live site. Give it a title and, if you like, a short description of what it's for — whoever greenlights it sees both.

Open the assistant and describe what you want in plain English, then check the result in **Preview**. When it's ready, use **Share preview**, get a **greenlight**, and **Publish**.
