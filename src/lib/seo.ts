import { site } from "@/site";

const FALLBACK_ORIGIN = "https://astro-marketing.blaisetiong-dev.workers.dev";

/** Strip Astro `base` (e.g. Orso `/preview/{id}/`) so public URLs use site-root paths. */
export function sitePathname(pathname: string, base = import.meta.env.BASE_URL): string {
  const normalizedBase = (base || "/").replace(/\/?$/, "/") || "/";
  let path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (normalizedBase !== "/" && path.startsWith(normalizedBase)) {
    path = `/${path.slice(normalizedBase.length)}`;
  }
  path = path.replace(/\/{2,}/g, "/");
  return path || "/";
}

function siteOrigin(): string {
  return (import.meta.env.SITE || FALLBACK_ORIGIN).replace(/\/$/, "");
}

/** Absolute URL for the current page on the public site origin (never the preview mount). */
export function canonicalUrl(pageUrl: URL): string {
  const path = `${sitePathname(pageUrl.pathname)}${pageUrl.search}`;
  if (import.meta.env.SITE) {
    return new URL(path, import.meta.env.SITE).href;
  }
  return new URL(path, pageUrl.origin).href;
}

/** Absolute asset / path URL under the configured site origin (site-root paths, not `base`). */
export function absoluteUrl(path: string): string {
  const origin = siteOrigin();
  if (/^https?:\/\//i.test(path)) {
    try {
      const url = new URL(path);
      return new URL(`${sitePathname(url.pathname)}${url.search}`, origin).href;
    } catch {
      return path;
    }
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(sitePathname(normalized), origin).href;
}

/** Keep brand in the document title when the page title omits it. */
export function documentTitle(title: string): string {
  return /orso/i.test(title) ? title : `${title} · Orso`;
}

export function organizationJsonLd(pageUrl: URL) {
  const origin = import.meta.env.SITE
    ? new URL(import.meta.env.SITE).origin
    : new URL(canonicalUrl(pageUrl)).origin;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: origin,
    description: site.description,
    sameAs: site.socials.map((s) => s.href),
  };
}

export function faqPageJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function blogPostingJsonLd(input: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    mainEntityOfPage: input.url,
    url: input.url,
    ...(input.image ? { image: input.image } : {}),
    author: { "@type": "Organization", name: site.name },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: import.meta.env.SITE || FALLBACK_ORIGIN,
    },
  };
}
