/** Home-page FAQ copy — shared by the accordion UI and FAQPage JSON-LD. */
export const faqs = [
  {
    question: "Who is Project Orso for?",
    answer:
      "Teams where developers own the repo but marketers, writers and founders own the words. It gives the second group the tools the first already uses — drafts, previews, reviews and a coding agent — without asking them to learn Git commands.",
  },
  {
    question: "Does my team need to know Git or code?",
    answer:
      "No. Copy, posts and help articles have forms, and anything bigger can go to the agent in plain English. They see drafts, previews and a Publish button, never branches or commits.",
  },
  {
    question: "Does everyone need a GitHub account?",
    answer:
      "Yes, and that's the only GitHub they'll touch. Access is your GitHub team, so there's no second login to manage and no separate list of who can publish.",
  },
  {
    question: "Do I have to migrate my content?",
    answer:
      "No. Orso reads the Markdown already in your repo. Open the repo and your posts and docs show up as collections.",
  },
  {
    question: "Who sets it up?",
    answer:
      "A developer, once: install Orso, open the Astro repo and connect GitHub. After that, everyone else just edits — and developers keep working in the same repo with their usual tools.",
  },
  {
    question: "Can someone break the live site?",
    answer:
      "Changes stay in a draft until you publish. Preview them first, and restore an earlier version if needed.",
  },
  {
    question: "Which AI agent do I need?",
    answer: "Claude, Cursor or Codex. Use your existing agent setup; any agent subscription or usage charges are separate from Orso.",
  },
  {
    question: "Where do images go?",
    answer:
      "Into the repo, next to your content. Images are saved with the change and published with your site.",
  },
  {
    question: "How is this free?",
    answer:
      "Project Orso is an open-source project, not a product with plans. Read it, fork it, run it locally — there's no paid tier and nothing behind a paywall.",
  },
  {
    question: "What happens if we stop using Orso?",
    answer:
      "Nothing changes. Your content was always Markdown in your own repo, every change is already in its history, and the site is plain static files.",
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
