/** Site-wide name, navigation and footer, rendered by `layouts/Base.astro`. */
export const site = {
  name: "Orso",
  description: "Orso is a site builder with a coding agent inside: describe a change, preview it, and publish when it's right.",
  nav: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "FAQ", href: "#faq" },
    { label: "Blog", href: "/blog/" },
    { label: "Help", href: "/help/" },
  ],
  footer: {
    text: "© 2026 Orso. All rights reserved.",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
  socials: [
    { label: "X", href: "https://x.com" },
    { label: "GitHub", href: "https://github.com" },
  ],
};
