/** Homepage questions, shared by the accordion and FAQPage structured data. */
export const faqs = [
  {
    question: "Which websites does Orso work with?",
    answer: "Orso is built for Astro sites. Start with its marketing template, or have a developer or coding agent prepare an existing Astro project. Orso runs locally on macOS and Linux and opens in your browser.",
  },
  {
    question: "Does my team need to know Git or code?",
    answer: "Writers and marketers can edit content in forms and describe bigger changes to an agent in plain English. Developers prepare the project and maintain its foundations. Everyday editing uses drafts, previews and publishing controls rather than Git commands.",
  },
  {
    question: "Who sets up the project and the agent?",
    answer: "A developer or technical teammate connects the Astro project, GitHub and the publishing workflow. Each person using an agent needs their own supported agent setup, such as Claude, Cursor or Codex. Existing sites need the Orso integration; the setup guide walks through it.",
  },
  {
    question: "How do teammates work on the same project?",
    answer: "Each teammate installs Orso and opens the same GitHub repository on their own computer. Everyone needs GitHub access to that repository. Changes are shared through GitHub; preview links let reviewers check the result. Use Get latest to bring published changes into your work.",
  },
  {
    question: "How do review and publishing work?",
    answer: "Work stays in a draft until you publish. Check it locally, share a deployed preview for feedback, then get a greenlight before publishing. Shared previews update when you send your changes. The project keeps a history so you can return to an earlier version if needed.",
  },
  {
    question: "What does Orso cost?",
    answer: "Orso is free and open source, with no paid tier or editor seats to buy. Agent subscriptions, usage and hosting are separate. Your code, Markdown content and images stay in your own repository and remain usable if you stop using Orso.",
  },
] as const;
