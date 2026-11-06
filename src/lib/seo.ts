import { site } from "@/site";

/** Absolute URL for the current page (honours `site` + `base`). */
export function canonicalUrl(pageUrl: URL): string {
  const path = `${pageUrl.pathname}${pageUrl.search}`;
  if (import.meta.env.SITE) {
    return new URL(path, import.meta.env.SITE).href;
  }
  return pageUrl.href;
}

/** Absolute asset / path URL under the configured site origin. */
export function absoluteUrl(path: string): string {
  const origin = import.meta.env.SITE || "https://astro-marketing.blaisetiong-dev.workers.dev";
  if (/^https?:\/\//i.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/?$/, "/");
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return new URL(`${base}${normalized}`.replace(/\/{2,}/g, "/"), origin).href;
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
      url: import.meta.env.SITE || "https://astro-marketing.blaisetiong-dev.workers.dev",
    },
  };
}
