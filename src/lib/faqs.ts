/** Home-page FAQ copy — shared by the accordion UI and FAQPage JSON-LD. */
export const faqs = [
  {
    question: "Who is Project Orso for?",
    answer:
      "Teams where developers own the repo but marketers, writers and founders own the words. It gives the second group the tools the first already uses — drafts, previews, reviews and a coding agent — without asking them to learn any of it.",
  },
  {
    question: "Does my team need to know Git or code?",
    answer:
      "No. Copy, posts and help articles have forms, and anything bigger can go to the agent in plain English. Underneath, drafts are branches, reviews are pull requests and Publish is a merge, but nobody has to see that. Access is your GitHub team, so there's no separate CMS login to manage.",
  },
  {
    question: "Who sets it up?",
    answer:
      "A developer, once: install Orso, open the Astro repo and connect GitHub. After that, everyone else just edits — and developers keep working in the same repo with their usual tools.",
  },
  {
    question: "Can someone break the live site?",
    answer:
      "Not by accident. Every change lands in a draft with its own preview, nothing goes live until someone hits Publish, and every save is a checkpoint you can roll back in one click.",
  },
  {
    question: "Which AI agent do I need?",
    answer: "Claude, Cursor or Codex. If your team already pays for one of them, that's everything Orso needs.",
  },
  {
    question: "Where do images go?",
    answer:
      "Into the repo, next to your content. An uploaded image is a plain file committed with the change, so there's no media library to migrate and no separate CDN bill.",
  },
  {
    question: "How is this free?",
    answer:
      "Project Orso is an open-source project, not a product with plans. Read it, fork it, run it locally — there's no paid tier and nothing behind a paywall.",
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
    question: "What platforms does Orso run on?",
    answer:
      "The desktop app ships for macOS first. The studio is open source, so you can also run it from source on other platforms as support lands.",
  },
] as const;
