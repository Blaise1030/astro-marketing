/** Site-wide name, navigation and footer, rendered by `layouts/Base.astro`. */
export const site = {
  name: "Project Orso",
  description:
    "Bring code, content and AI agents into one Git-based workspace for your Astro website. Create pages, preview changes and review before publishing. Free and open source.",
  nav: [
    { label: "How it works", href: "/#how-it-works" },
    { label: "For developers", href: "/#setup" },
    { label: "Blog", href: "/blog/" },
    { label: "Help", href: "/help/" },
  ],
  repo: "https://github.com/Blaise1030/cms",
  /** Credit link in the footer. */
  author: { label: "blaisetiong.dev", href: "https://blaisetiong.dev" },
  /** Right side of the header on some pages; download page reads `download`. */
  actions: {
    link: { label: "Help", href: "/help/" },
    cta: { label: "Download Orso", href: "/download/" },
  },
  /** Install commands for the download page. */
  download: {
    installCommand:
      "curl -fsSL https://raw.githubusercontent.com/Blaise1030/cms/main/scripts/install.sh | sh",
    runCommand: "orso serve --open",
    platforms: "macOS and Linux",
  },
  footer: {
    text: "© 2026 Project Orso. Free and open source.",
    tagline:
      "A shared workspace for your website. Code, content and AI agents in a Git-based project you own.",
    columns: [
      {
        title: "Project",
        links: [
          { label: "What you can build", href: "/#handoff" },
          { label: "How it works", href: "/#how-it-works" },
          { label: "FAQ", href: "/#faq" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Blog", href: "/blog/" },
          { label: "Help", href: "/help/" },
          { label: "Setup guide", href: "/help/getting-started/" },
          { label: "GitHub", href: "https://github.com/Blaise1030/cms", external: true },
        ],
      },
      {
        title: "Open source",
        links: [
          { label: "Source", href: "https://github.com/Blaise1030/cms", external: true },
          { label: "Issues", href: "https://github.com/Blaise1030/cms/issues", external: true },
          { label: "License", href: "https://github.com/Blaise1030/cms/blob/main/LICENSE", external: true },
        ],
      },
    ],
    links: [
      { label: "Privacy", href: "/privacy/" },
      { label: "Terms", href: "/terms/" },
    ],
  },
  socials: [{ label: "GitHub", href: "https://github.com/Blaise1030/cms" }],
};
