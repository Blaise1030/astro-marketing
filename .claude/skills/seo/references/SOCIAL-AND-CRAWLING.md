# Social metadata, redirects, and indexing extras

## Open Graph and Twitter cards

Social previews are not a Google ranking factor, but they affect click-through
from shares and should stay consistent with the HTML title and description.

```html
<meta property="og:title" content="Page title">
<meta property="og:description" content="Unique summary of the page.">
<meta property="og:url" content="https://example.com/page">
<meta property="og:type" content="website"><!-- or article -->
<meta property="og:image" content="https://example.com/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="en_US">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Page title">
<meta name="twitter:description" content="Unique summary of the page.">
<meta name="twitter:image" content="https://example.com/og.png">
```

**Guidelines:**
- Reuse the same unique title/description logic as the document meta tags
- Prefer ~1200×630 share images with meaningful alt text when markup allows
- Absolute image URLs only
- `og:type` = `article` for blog/news posts when appropriate
- Validate with platform debuggers after deploy (Facebook Sharing Debugger,
  Twitter/X Card Validator, LinkedIn Post Inspector)

## Redirects and HTTPS

```text
# Prefer permanent redirects when a URL has permanently moved
HTTP/1.1 301 Moved Permanently
Location: https://example.com/new-path
```

- Use HTTPS site-wide; fix mixed-content assets
- Prefer one host (www vs apex) and one trailing-slash policy; canonicalize
- Chain redirects as little as possible (A → B, not A → B → C → D)
- Soft 404s (200 OK with “not found” body) should become real 404/410 responses
- Temporary (302/307) only when the move is genuinely temporary

## Indexation signals beyond Lighthouse

Inspect when auditing:

| Signal | What to verify |
|--------|----------------|
| `robots.txt` | Does not block required HTML or critical rendering assets |
| Meta robots / `X-Robots-Tag` | No accidental `noindex` on money pages |
| Canonical | Self-canonical on indexable templates; consistent absolute URLs |
| Sitemap | Only canonical, indexable URLs; fresh `lastmod` when content changes |
| Status codes | Important URLs return 200; gone URLs return 404/410 |
| HTML language | `<html lang>` matches the page language |
| Crawlable links | Internal navigation uses real `<a href>` destinations |

Search Console (when the user has access) remains the source of truth for
coverage, enhancements, and query performance. Lab tools cannot prove indexation.

## JavaScript and rendered content

- Critical title, headings, and primary body copy should appear in the initial
  HTML when possible (SSG/SSR preferred over client-only injection)
- If content depends on JS, verify the rendered DOM still exposes it to crawlers
- Do not hide the main content behind login, infinite scroll-only UIs, or
  non-crawlable click handlers without a linked paginated equivalent

## Pagination and parameters

- Paginated series need crawlable next/previous links
- Faceted or filtered URLs often deserve `noindex` or canonicalization back to
  a clean parent URL — pick one strategy and apply it consistently
- Avoid indexing infinite combinations of sort/filter query strings
