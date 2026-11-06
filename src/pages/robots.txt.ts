import type { APIRoute } from "astro";

const robots = (sitemapURL: URL) => `User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site ?? "https://astro-marketing.blaisetiong-dev.workers.dev");
  return new Response(robots(sitemapURL), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
