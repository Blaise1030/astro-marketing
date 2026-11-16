/** Homepage questions, shared by the accordion and FAQPage structured data. */
export const faqs = [
  {
    question: "Does my team need to know Git or code?",
    answer: "No Git commands are needed for everyday editing. Use forms for content and ask an agent for bigger changes. Developers prepare the project and maintain its foundations.",
  },
  {
    question: "Who sets it up?",
    answer: "A developer or technical teammate connects your Astro site, GitHub and publishing workflow. Start from the template, or prepare an existing site with the setup guide.",
  },
  {
    question: "How does my team share the project?",
    answer: "Each teammate installs Orso and opens the same GitHub repository locally. Everyone needs GitHub access. Share changes through GitHub and send preview links for feedback.",
  },
  {
    question: "Do I need to migrate my content?",
    answer: "Your Markdown stays in the repository. Existing Astro sites need the Orso integration and collection setup so content appears in editable forms.",
  },
  {
    question: "What if a change needs fixing?",
    answer: "Check drafts in a preview and get a greenlight before publishing. Earlier versions stay in the project’s history, so you can return to one when needed.",
  },
  {
    question: "What does Orso cost?",
    answer: "Orso is free and open source, with no editor seats to buy. Bring your own agent setup, such as Claude, Cursor or Codex. Agent usage and hosting costs are separate.",
  },
  {
    question: "What happens if we stop using Orso?",
    answer: "Your site, code, content and images stay in your repository. Developers can keep working on the project and publishing through your existing hosting workflow.",
  },
] as const;
