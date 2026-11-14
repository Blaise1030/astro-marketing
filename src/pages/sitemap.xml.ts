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

export const GET: APIRoute = async ({ site }) => {
  const origin = originOf(site);
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

  // Dedupe by path (tag category pages can overlap with collection slugs).
  const seen = new Set<string>();
  const unique = entries.filter((entry) => {
    if (seen.has(entry.path)) return false;
    seen.add(entry.path);
    return true;
  });

  return new Response(renderSitemap(origin, unique), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
};
