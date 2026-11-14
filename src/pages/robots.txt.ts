import type { APIRoute } from "astro";

const FALLBACK_ORIGIN = "https://astro-marketing.blaisetiong-dev.workers.dev";

const robots = (sitemapURL: URL) => `User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL(FALLBACK_ORIGIN);
  const sitemapURL = new URL("/sitemap.xml", origin);
  return new Response(robots(sitemapURL), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
};
