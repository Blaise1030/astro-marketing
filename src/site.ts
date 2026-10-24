/** Site-wide name, navigation and footer, rendered by `layouts/Base.astro`. */
export const site = {
  name: "Orso",
  description: "Orso is a free, open-source studio for Astro sites that runs on the coding agent you already have. Edit content, preview every change, publish to GitHub Pages — no lock-in.",
  nav: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "FAQ", href: "#faq" },
    { label: "Blog", href: "/blog/" },
    { label: "Help", href: "/help/" },
  ],
  footer: {
    text: "© 2026 Orso. Free and open source.",
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
