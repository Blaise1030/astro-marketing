/** Home-page FAQ copy — shared by the accordion UI and FAQPage JSON-LD. */
export const faqs = [
  {
    question: "How is this free?",
    answer:
      "The Orso studio is open source and free to use — read it, fork it, run it locally. A paid tier, if we add one, would only cover hosted extras like shared editing for teammates who don't want to run the app. The studio itself does not go behind a paywall.",
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
    question: "Is there lock-in?",
    answer:
      "None. Your site is Markdown in a Git repo you own, the output is static, and the source of the tool is public. Nothing here stops working if Orso disappears.",
  },
  {
    question: "Where does my site live?",
    answer:
      "In a Git repository you own. Orso publishes static files — GitHub Pages, Cloudflare, or any other static host you already use.",
  },
  {
    question: "Can I undo something?",
    answer: "Yes. Every save is a checkpoint, and History restores any earlier version in one click.",
  },
] as const;
