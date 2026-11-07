---
name: SEO
description: >-
  Search-engine optimization for writing and reviewing site content. Use when
  asked to improve SEO, write or edit titles and meta descriptions, optimize
  blog or help articles for search, fix headings or alt text, plan internal
  links, choose slugs, or review a page for search visibility.
---

# SEO

Apply search-engine optimization when writing or reviewing site content. Prefer
helpful, people-first copy over keyword stuffing. Do not invent ranking
promises; optimize what the page says and how it is marked up.

This site already wires titles, descriptions, canonical URLs, Open Graph,
Twitter cards, and JSON-LD through `Base.astro` and `src/lib/seo.ts`. Content
work mainly means writing strong front matter and body copy so those layers
have something useful to publish.

## Workflow

1. Identify the page type: landing section, blog post, help article, or category.
2. Name the primary topic in plain words a visitor would search for.
3. Write or fix title, description, headings, slug, images, and internal links.
4. Check uniqueness against other pages (no duplicate titles or descriptions).
5. For a technical crawl/index audit (robots, sitemap, Lighthouse, structured
   data eligibility), use the project `seo` agent skill under `.agents/skills/seo`
   or `.claude/skills/seo` as well.

## Titles

Every page needs a unique, descriptive title.

- Lead with the topic; add the brand only when it helps. `documentTitle()` appends
  `· Orso` when the title does not already mention Orso.
- Rough length guide: about 50–60 characters before truncation in many results.
  Prefer clarity over hitting an exact count.
- Avoid generic titles (`Home`, `Page`, `Untitled`, `Blog post`).
- Match the visible page heading closely enough that search engines and people
  see one consistent topic.
- Do not bait-and-switch or exaggerate; title rewriting often follows inaccurate titles.

**Front matter:** blog and help entries use `title`. Landing copy lives in the
section component or page that passes `title` into `Base`.

## Meta descriptions

Every indexable page needs a unique `description`.

- One or two sentences that say what the page covers and why it is useful.
- Rough length guide: about 140–160 characters as a linting proxy. Search engines
  may rewrite snippets from page content.
- Include a natural call to action when it fits (`Learn how…`, `See how…`).
- Never leave empty, duplicate, or copy-pasted descriptions across posts.
- Social shares reuse this text via `og:description` and `twitter:description`.

## Headings

- One clear primary heading for the page topic (`<h1>` on landing/templates;
  the Markdown title usually supplies it for blog and help).
- Use a logical `##` / `###` hierarchy in Markdown; do not skip levels for style.
- Make headings descriptive (`## What bring-your-own means`, not `## Overview`).
- Put the main topic near the start of the first heading and first paragraph.

## Helpful content

Optimize for people who need the answer, not for a keyword density target.

- Answer the searcher's question early; expand with concrete steps, examples, or
  constraints.
- Prefer original product knowledge over rewritten generic SEO filler.
- Keep claims accurate and current; update dates and facts when content changes.
- For blog posts, open with the point of the article, not a long throat-clearing intro.
- For help docs, lead with the outcome or rule, then the steps.
- Thin pages that only restate a title hurt more than they help — expand or merge.

## Search language and intent

- Use the words customers and users would type, especially in the title, first
  heading, first paragraph, alt text, and link text.
- Match intent: help docs → how-to / troubleshooting; blog → explanation or story;
  landing → product value and next step.
- Secondary phrases belong in subheads and body copy when natural. Do not force
  synonyms into every paragraph.
- One primary topic per URL. Split unrelated topics into separate pages.

## Slugs and URLs

File names under content collections become URL slugs.

- Lowercase kebab-case only: `bring-your-own-agent`, not `Bring_Your_Own_Agent`.
- Short and readable; include the topic word when it helps (`billing-and-plans`).
- Avoid IDs, dates, or stopword-heavy paths (`post-1`, `final-final-v2`).
- Renaming a published slug changes the URL — only do it with a redirect plan, or
  treat it as a new page and retire the old one deliberately.

## Images

- Descriptive file names when adding assets (`orso-preview-change.png`).
- Alt text describes the image content for someone who cannot see it. Do not
  stuff keywords; decorative images should not fake meaning.
- Blog `coverImage` requires `coverAlt` (enforced by the content schema).
- Prefer a meaningful cover when the post will be shared; Open Graph falls back
  to `/og.png` when no page image is passed.
- Compress large images; keep dimensions honest (`width` / `height` when markup
  allows) so layout stays stable.

## Internal linking

- Link to related blog posts, help articles, and landing anchors with descriptive
  anchor text (`drafts and previews`, not `click here` or `read more`).
- Blog front matter: use `relatedPosts` with real post ids; also link in the body
  where a mention helps the reader.
- Help docs: link to sibling articles and the parent category when a next step
  exists.
- Landing sections: point CTAs at real destinations (`#features`, `/blog`, `/help`).
- Fix or remove broken links when editing a page.

## Categories, tags, and structure

- Blog: assign accurate `categories` and a few focused `tags`. Do not dump every
  possible tag.
- Help: set `section` (and `subcategory` when it fits). Order related articles so
  the index reads as a guide, not a random list.
- Category and section descriptions should be unique one-line blurbs that explain
  the group — they appear on index cards and matter for scanning and search.

## Page-type checklist

### Blog post (`src/content/blog/en/*.md`)

- [ ] Unique `title` and `description`
- [ ] Valid `pubDate` (`YYYY-MM-DD`)
- [ ] Filename slug is short and topical
- [ ] `coverImage` + `coverAlt` when a cover is used
- [ ] Clear `##` outline that matches the promise of the title
- [ ] `relatedPosts` / in-body links to relevant posts
- [ ] Body answers the title's question in the first screen of copy

### Help article (`src/content/helpDocs/en/*.md`)

- [ ] Unique `title` and `description`
- [ ] Correct `section` (and `subcategory` if needed)
- [ ] Sensible `order` among siblings
- [ ] Steps a person can follow without guessing
- [ ] Links to related help or product UI terms that match the app

### Landing page / section

- [ ] Section heading states a single job
- [ ] Supporting sentence is specific, not slogan-only
- [ ] CTA labels describe the destination
- [ ] FAQ answers are real and match visible copy if FAQ schema is used

## What this site already handles

Do not re-implement these unless the user asks to change the template:

- Canonical URL, `og:*`, and Twitter card tags in `Base.astro`
- Organization JSON-LD on every page; blog posting and FAQ JSON-LD where pages
  pass them in
- `robots.txt` and sitemap generation for crawl discovery

When editing content, focus on the fields and copy those systems consume.

## Anti-patterns

- Duplicate titles or descriptions across posts
- Keyword stuffing, hidden text, or doorway pages
- Empty or placeholder front matter left in published content
- Headings used only for visual size instead of structure
- “Click here” links and untitled images
- Promising rankings, traffic numbers, or rich-result guarantees

## Quick review output

When asked to review SEO for a page, report:

1. **Blockers** — missing/duplicate title or description, broken slug, missing
   cover alt, noindex on a page that should rank
2. **High impact** — weak title match to content, thin body, no internal links,
   vague headings
3. **Polish** — length, social preview image, related-post coverage, wording
4. **Suggested edits** — concrete replacement title, description, and heading
   outline when fixes are needed
