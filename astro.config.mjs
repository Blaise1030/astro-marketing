import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import siteFiles from "@casoon/astro-site-files";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { orso } from "./integrations/orso/index.js";
import { siteCollections } from "./src/orso.collections.mjs";

// The orso dev server proxies the site under /preview/{id}/.
const base = process.env.PUBLIC_BASE ?? "/";
// Absolute origin for canonical URLs and the sitemap. Override with PUBLIC_SITE_URL for a custom domain.
const site = process.env.PUBLIC_SITE_URL ?? "https://astro-marketing.blaisetiong-dev.workers.dev";
// The browser's HMR socket: the dev server's own port when the preview is framed directly
// (orso's Vite dev UI), otherwise the daemon that proxies the preview.
const hmrPort = Number(
  process.env.ORSO_DEV_PORT || process.env.ORSO_PROXY_PORT || process.env.WORKBENCH_PROXY_PORT || 0,
);

/** Drop Orso’s `/preview/{id}/` mount so sitemap/robots URLs match the public site. */
function publicPathname(pathname) {
  return pathname.replace(/^\/preview\/[^/]+(?=\/|$)/, "") || "/";
}

export default defineConfig({
  site,
  base,
  integrations: [
    mdx(),
    react(),
    // Before orso so `astro:build:done` writes sitemap/robots before orso’s site check.
    siteFiles({
      robots: {
        // Allow everything; point crawlers at the generated sitemap.
        sitemap: new URL("/sitemap.xml", site).href,
      },
      sitemap: {
        output: { mode: "single", filename: "sitemap.xml" },
        serialize(entry) {
          const url = new URL(entry.loc);
          url.pathname = publicPathname(url.pathname);
          return { ...entry, loc: url.href };
        },
      },
    }),
    orso({ collections: siteCollections }),
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      // Astro keeps Vite's own base at "/", so without this the HMR socket would connect to
      // the proxy root instead of the /preview/{id}/ prefix. clientPort points it at this dev
      // server (direct preview) or at the orso daemon that proxies it.
      hmr: {
        path: `${base}vite-hmr`.replace(/\/{2,}/g, "/"),
        ...(hmrPort > 0 ? { clientPort: hmrPort } : {}),
      },
    },
  },
});
