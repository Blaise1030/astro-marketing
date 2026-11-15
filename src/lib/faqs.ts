/** Home-page FAQ copy — shared by the accordion UI and FAQPage JSON-LD. */
export const faqs = [
  {
    question: "How is this free?",
    answer:
      "Project Orso is an open-source project, not a product with plans. Read it, fork it, run it locally — there's no paid tier and nothing behind a paywall.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "No. You describe what you want and the agent does the editing, or fill in a form for copy. If you do code, it's a plain Astro and Tailwind project you can open in any editor.",
  },
  {
    question: "Which AI agent do I need?",
    answer:
      "Claude, Cursor or Codex. If you already pay for one of them, you already have everything Orso needs.",
  },
  {
    question: "What platforms does Orso run on?",
    answer:
      "The desktop app ships for macOS first. The studio is open source, so you can also run it from source on other platforms as support lands.",
  },
  {
    question: "Can non-technical teammates edit?",
    answer:
      "Yes. Copy, posts and help articles have their own forms, and every change is previewed before it goes live. Bigger changes go through the agent, with the developer in the loop.",
  },
  {
    question: "Do my teammates need to learn GitHub?",
    answer:
      "No. Content ops run on GitHub — drafts are branches, reviews are pull requests, publishing is a merge — but Orso shows them as drafts, previews and a Publish button. Access is your GitHub team, so there's no separate CMS login to manage.",
  },
  {
    question: "Where do images go?",
    answer:
      "Into the repo, next to your content. An uploaded image is a plain file committed with the change, so there's no media library to migrate and no separate CDN bill.",
  },
  {
    question: "Is there lock-in?",
    answer:
      "None. Your site is Markdown in a Git repo you own, the output is static, and the source of the tool is public. Nothing here stops working if Orso disappears.",
  },
  {
    question: "Where does my site live?",
    answer:
      "In a Git repository you own. Orso publishes through your GitHub workflow; the starter deploys on Cloudflare Workers, or whatever host your repo already uses.",
  },
  {
    question: "Can I undo something?",
    answer: "Yes. Every save is a checkpoint, and History restores any earlier version in one click.",
  },
] as const;
