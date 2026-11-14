import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { categoriesOf, slugify, sortPosts } from "../lib/blog";
import { loadHelp } from "../lib/help";

const FALLBACK_ORIGIN = "https://astro-marketing.blaisetiong-dev.workers.dev";

/** Production origin only — never the /preview/… base used in the live preview. */
function originOf(site: URL | undefined): string {
  return (site?.origin ?? FALLBACK_ORIGIN).replace(/\/$/, "");
}

function loc(origin: string, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${origin}${normalized}`;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

type SitemapEntry = { path: string; lastmod?: string };

function renderSitemap(origin: string, entries: SitemapEntry[]): string {
  const urls = entries
    .map(({ path, lastmod }) => {
      const lastmodTag = lastmod ? `\n    <lastmod>${escapeXml(lastmod)}</lastmod>` : "";
      return `  <url>\n    <loc>${escapeXml(loc(origin, path))}</loc>${lastmodTag}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

/** Human-readable table for the live preview (which parses this route as HTML). */
function renderPreviewHtml(origin: string, entries: SitemapEntry[]): string {
  const rows = entries
    .map(({ path, lastmod }) => {
      const href = escapeHtml(loc(origin, path));
      const date = lastmod ? escapeHtml(lastmod) : "—";
      return `<tr><td><a href="${href}">${href}</a></td><td>${date}</td></tr>`;
    })
    .join("\n");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex" />
  <title>Sitemap · Orso</title>
  <style>
    :root { color-scheme: dark; }
    body { margin: 0; font: 15px/1.5 ui-sans-serif, system-ui, sans-serif; background: #0c0d10; color: #e8eaef; }
    main { max-width: 56rem; margin: 0 auto; padding: 2.5rem 1.25rem 4rem; }
    h1 { margin: 0; font-size: 1.5rem; font-weight: 600; letter-spacing: -0.02em; }
    p { margin: 0.75rem 0 0; color: #9aa3b5; }
    table { width: 100%; margin-top: 2rem; border-collapse: collapse; }
    th, td { padding: 0.65rem 0.75rem; text-align: left; border-bottom: 1px solid #242830; vertical-align: top; }
    th { color: #9aa3b5; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; }
    td:last-child { width: 8rem; white-space: nowrap; color: #9aa3b5; }
    a { color: #8eb4ff; text-decoration: none; word-break: break-all; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <main>
    <h1>Sitemap</h1>
    <p>${entries.length} URLs · search engines read the XML at this same address on the live site.</p>
    <table>
      <thead><tr><th>URL</th><th>Lastmod</th></tr></thead>
      <tbody>
${rows}
      </tbody>
    </table>
  </main>
</body>
</html>
`;
}

async function collectEntries(): Promise<SitemapEntry[]> {
  const [posts, blogCategories, helpDocsCategories, help] = await Promise.all([
    getCollection("blog"),
    getCollection("blogCategories"),
    getCollection("helpDocsCategories"),
    loadHelp(getCollection),
  ]);

  const sortedPosts = sortPosts(posts);
  const tagCategories = categoriesOf(sortedPosts);

  const entries: SitemapEntry[] = [
    { path: "/" },
    { path: "/download/" },
    { path: "/privacy/" },
    { path: "/terms/" },
    { path: "/blog/" },
    { path: "/blog/categories/" },
    { path: "/help/" },
    { path: "/help/categories/" },
    ...sortedPosts.map((post) => ({
      path: `/blog/${post.id}/`,
      lastmod: post.data.pubDate,
    })),
    ...blogCategories.map((category) => ({
      path: `/blog/categories/${category.data.slug}/`,
    })),
    ...tagCategories.map((category) => ({
      path: `/blog/category/${slugify(category)}/`,
    })),
    ...help.docs.map((doc) => ({
      path: `/help/${doc.id}/`,
    })),
    ...helpDocsCategories.map((category) => ({
      path: `/help/categories/${category.data.slug}/`,
    })),
    ...help.categories.map((section) => ({
      path: `/help/section/${section.slug}/`,
    })),
  ];

  const seen = new Set<string>();
  return entries.filter((entry) => {
    if (seen.has(entry.path)) return false;
    seen.add(entry.path);
    return true;
  });
}

/**
 * Orso live preview runs under `/preview/{id}/` and shows this route as HTML,
 * which turns raw XML into a wall of URLs. Production builds use base `/`, so
 * `dist/sitemap.xml` stays real XML for crawlers.
 */
function wantsPreviewHtml(): boolean {
  return (import.meta.env.BASE_URL || "/").includes("/preview/");
}

export const GET: APIRoute = async ({ site }) => {
  const origin = originOf(site);
  const entries = await collectEntries();

  if (wantsPreviewHtml()) {
    return new Response(renderPreviewHtml(origin, entries), {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  }

  return new Response(renderSitemap(origin, entries), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
};
