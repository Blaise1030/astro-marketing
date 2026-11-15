---
title: Use Orso with an existing site
description: Prepare an Astro site that wasn't made from the Orso template, with your coding assistant doing the setup.
category: getting-started
section: getting-started
order: 3
---

## What your site needs

Sites made from the Orso template work straight away. An existing Astro site needs a few things first:

| Needs | For |
| --- | --- |
| Main branch called `main` | Changes, Get latest and publishing |
| Astro 7, with a `dev` script | Live preview |
| The site reads its base path from Orso | Preview inside Orso |
| Orso's Astro integration in `integrations/orso/` | The **Content** tab |
| Content collections loaded with `orsoGlob` | Editable posts and pages |
| A `DESIGN.md` file | The **Design** tab |
| A deploy that reports its address to GitHub | **Preview** and **Open live site** links |

## Let your coding assistant set it up

Orso ships a skill — instructions your coding assistant can follow — that checks your site and makes these changes on a separate branch for you to review. Install it in your site's repository:

```sh
npx skills add Blaise1030/cms --skill setup-orso
```

Then ask your assistant (Claude Code, Codex, Cursor or OpenCode) to "set up this site for Orso". It reports what it found, wires everything in, checks that the preview and content work, and tells you anything you need to do yourself — like adding deploy secrets.

The same skill updates sites that use the older `orso-astro` package to the current setup.

## Open it in Orso

Once the setup is published, choose **New project** in Orso and pick the repository from GitHub. If the project is already open, Orso picks up the changes on its own.

For day-to-day editing rules, install the companion skill too:

```sh
npx skills add Blaise1030/cms --skill working-in-orso
```
