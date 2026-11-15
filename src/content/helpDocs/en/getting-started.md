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

A site that wasn't made from the template needs a little setup first — see [Use Orso with an existing site](/help/use-orso-with-an-existing-site/).

## Edit content

Open **Content** to browse the site's collections. Select a post or help article, edit its fields and body, and save. Orso updates the Markdown file in the project.

## Make a larger change

Every edit happens on a **change**, never directly on the live site. Give it a title and, if you like, a short description of what it's for — whoever greenlights it sees both.

Open the assistant and describe what you want in plain English, then check the result in **Preview**. When it's ready, use **Share preview**, get a **greenlight**, and **Publish**.
