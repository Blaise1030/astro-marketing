---
title: "Bring the agent you already pay for"
description: "Orso does not ship its own model. It runs on Claude, Cursor or Codex — the tools already open on your machine — and stays out of the way."
pubDate: "2026-10-28"
tags: [agents, product]
relatedPosts: [welcome, design-tokens]
---

## The missing layer

If you already work with a coding agent, you have noticed the gap. The agent can write a component, refactor a layout, and explain a stack trace — but it has no idea what your homepage is supposed to say, and no safe way to show you a change before it lands.

The usual answers are a hosted page builder with its own editor, or a CMS with its own accounts and its own model of your content. Both ask you to move your site into their world and pay monthly for the privilege.

Orso fills the gap without asking you to move anything: it is the studio around the agent, not another agent.

## What "bring your own" means in practice

- You keep the subscription you already pay for. Claude, Cursor and Codex all work.
- The agent edits a normal Astro and Tailwind project. No plugin, no proprietary format, no SDK to learn.
- When the agent is not the right tool, you open the same repository in your own editor. It is just code.
- When you want to leave, you take the repository. Markdown content, static output, public source.

Nothing in that list is a feature we had to build. It is what falls out of not owning your content.

## Write, or ask

The split is deliberate. Copy, posts and help articles have forms, because a form is faster and safer than a prompt for a two-word change and it keeps the front matter valid. Everything structural — a new section, a restyle, a component — goes to the agent, because that is what agents are good at.

A developer can do either. A teammate who does not code uses the forms, and the occasional bigger request goes through a developer with the diff in front of them. One project, two levels of access.

## The escape hatch is the product

Open source and self-hostable is not a marketing line here; it is the reason the rest works. If Orso disappeared tomorrow, the site would still build, still deploy and still be editable by hand or by an agent. Your site was never the thing being rented — only the convenience was.

That is the trade we are making: keep the agent, keep the repo, borrow the studio.
