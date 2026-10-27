---
title: "Every edit gets its own draft"
description: "How drafts, live previews, one-click publishing and History keep a bad idea from ever reaching the live site."
pubDate: "2026-10-28"
tags: [workflow, product]
relatedPosts: [design-tokens, welcome]
---

## Editing directly on live is a workflow, not a feature

Most small sites are edited in place: open the page, change a sentence, hit save, hope. It works right up until the moment it does not — a half-finished rewrite goes public, a heading breaks on mobile, or someone saves over a colleague's work.

Orso treats every change as a draft with its own preview. Nothing touches the published site until you say so.

## The four steps

**Write or ask.** Small changes go through a form: a headline, a post, a help article. Larger ones are a sentence to the agent — "move the pricing note under the hero and soften the border" — and it edits the code and styles.

**Preview.** The draft rebuilds as you work, desktop and mobile side by side. You are looking at the real site at a real URL, not a mock-up of it.

**Publish.** One click sends the draft to GitHub Pages. The published site is static files, so there is no server to warm up and nothing to restart.

**Undo.** Every save is a checkpoint. History lists them, and restoring an earlier one is a single click — which makes trying something risky cheap.

## Why previews are worth the extra step

A preview answers the questions that a text editor cannot: does this heading wrap at 375px, does the new paragraph push the call to action below the fold, does the cover image crop badly on a phone. Those are exactly the mistakes that survive a careful proofread and embarrass you in public.

Because the draft is real, the thing you approve is the thing that ships. There is no gap between "looks right in the editor" and "looks right live" for something to fall into.

## Small teams, same rules

On a team the same model does the quiet work: a writer drafts the post, a developer reviews the diff, and the publish step stays deliberate. Non-technical teammates never need a terminal, and developers never lose the ability to open the repository and work in it directly. Same site, same repo, two doors into it.

## A habit worth keeping

Publish smaller, more often. A draft that lives for an hour is easy to reason about; a branch that lives for a week is a negotiation. With every change previewed and every save checkpointed, the safe move is also the quick one.
