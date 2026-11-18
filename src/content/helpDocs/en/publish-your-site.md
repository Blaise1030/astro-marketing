---
title: Publish your site
description: Get a greenlight on a change and publish it to the host your site already deploys to — Cloudflare, GitHub Pages, or any static host.
category: publishing
section: publishing
order: 2
---

## Before you publish

Check the preview, then use **Review → Ask for a greenlight** on the change. The status next to it shows **Waiting for greenlight** until a teammate approves it on GitHub, then **Greenlit**.

## Publish

Choose **Publish**. Orso adds the change to your live site, and the host your repository already deploys to puts it online. The status changes to **Published**. Use **Open live site** to see it.

Orso works with any host that deploys when the live site's code changes. The Astro template deploys to Cloudflare Workers out of the box; GitHub Pages, Netlify, Vercel and others work too. For **Open live site** and preview links to appear, your deploy needs to report its address back to GitHub — the template's deploy already does.

## After it is live

Visit the live site and confirm the change looks right. If something is off, restore an earlier version from **History** and publish again.

## Custom domains

Point your domain at whichever host serves the site. For Cloudflare, use the Cloudflare dashboard; for GitHub Pages, use the repository's Pages settings. DNS changes can take a few minutes.
