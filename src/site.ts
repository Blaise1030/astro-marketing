/** Site-wide name, navigation and footer, rendered by `layouts/Base.astro`. */
export const site = {
  name: "Orso",
  description: "Keep your Astro site current with a Markdown CMS, an AI agent, and live preview.",
  nav: [
    { label: "CMS", href: "#content" },
    { label: "How it works", href: "#workflow" },
    { label: "Why Orso", href: "#why-orso" },
    { label: "FAQ", href: "#faq" },
    { label: "Blog", href: "/blog/" },
  ],
  /** Right side of the header: a quiet link and the primary action. */
  actions: {
    link: { label: "Help", href: "/help/" },
    cta: { label: "Download", href: "/download/" },
  },
  /** Set `url` to the app installer; the download page shows a "coming soon" note while it is empty. */
  download: { url: "", platform: "macOS" },
  footer: {
    text: "© 2026 Orso",
    links: [{ label: "How it works", href: "#workflow" }],
  },
  socials: [],
};
