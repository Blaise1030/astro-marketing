---
title: "Your content is Markdown, and that is the point"
description: "Forms are a convenience. The file on disk is the contract — plain Markdown in a repo you own, readable by you, your editor and your agent."
pubDate: "2026-10-28"
categories:
  - guides
tags: [content, markdown]
relatedPosts: [welcome, bring-your-own-agent, drafts-and-previews]
---

## A form is a view, not a store

In the Orso studio, every post, help article and line of page copy starts life as a file:

```
src/content/blog/en/your-post.md
```

The editor you fill in is a view onto that file — title, description, date, tags, body. Save the form and the front matter changes, nothing more. Open the same file in any editor and you see exactly what was written: a short block of front matter, a blank line, then prose.

That order matters. If the friendly form were the source of truth, your words would live in a database somewhere and the Markdown would be an export. Here it is the other way round. The file is authoritative, and every surface is a reader of it.

## What that buys you

- **Portability.** The site builds to static files. There is no runtime, no API to keep alive, no account to renew. Any static host can serve the output — GitHub Pages, Cloudflare, or the host you already use.
- **Review.** Content changes show up like any other change. You can read them, comment on them, or send them back before they go live.
- **Search.** `grep` finds a typo across a hundred posts in milliseconds. So do Claude, Cursor or Codex.
- **Recovery.** It is a git repository. The last good version of anything is one restore away, with or without the studio.
- **Structure you can check.** The schema in `src/content.config.ts` validates every entry at build time: a date has to be a real date, a cover image has to have alt text, tags have to be a list. Bad content fails loudly instead of shipping quietly.

## The part that is not a compromise

Plain text is also the friendliest format for a coding agent. When you ask for "a post about our new preview builds, same shape as the last one", the agent does not need an integration or an SDK. It reads the directory, copies the shape of a nearby file, and writes a new one. No lock-in in either direction: the same file works for a person typing in a form and for a model editing it in a terminal.

## Try it

Add a `.md` file under `src/content/blog/en/`, give it a title, a description and a `pubDate` in `YYYY-MM-DD`, then write below the second `---`. The post is in the listing on the next reload. Everything else — the URL, the tags, the related posts — follows from the file itself.

That is the whole content model. One directory, one schema, one format that outlives the tool that wrote it.
