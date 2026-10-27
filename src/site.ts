/** Site-wide name, navigation and footer, rendered by `layouts/Base.astro`. */
export const site = {
  name: "Orso",
  description:
    "Orso is a free, open-source studio for Astro sites that runs on the coding agent you already have. Edit content, preview every change, publish to GitHub Pages — no lock-in.",
  nav: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "FAQ", href: "#faq" },
    { label: "Blog", href: "/blog/" },
    { label: "Help", href: "/help/" },
  ],
  repo: "https://github.com/Blaise1030/cms",
  footer: {
    text: "© 2026 Orso. Free and open source.",
    tagline:
      "A free studio for your site, running on the agent you already pay for. Your content stays Markdown in a repo you own.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "How it works", href: "#how-it-works" },
          { label: "Features", href: "#features" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Blog", href: "/blog/" },
          { label: "Help", href: "/help/" },
          { label: "GitHub", href: "https://github.com/Blaise1030/cms", external: true },
        ],
      },
      {
        title: "Project",
        links: [
          { label: "Source", href: "https://github.com/Blaise1030/cms", external: true },
          { label: "Issues", href: "https://github.com/Blaise1030/cms/issues", external: true },
          { label: "License", href: "https://github.com/Blaise1030/cms/blob/main/LICENSE", external: true },
        ],
      },
    ],
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
  socials: [
    { label: "X", href: "https://x.com" },
    { label: "GitHub", href: "https://github.com/Blaise1030/cms" },
  ],
};
