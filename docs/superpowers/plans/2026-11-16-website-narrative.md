# Orso Website Narrative and Structure Plan

**Goal:** Explain Orso as a shared Git-based workspace that enables more teammates to build and run an Astro website, with review before publishing.

**Architecture:** Retain the existing static Astro site, section components, Blog and Help collections. Consolidate the homepage narrative, reuse existing product footage and screenshots, and align navigation, download guidance and metadata. This is a proposed content structure; implementation follows review.

**Tech stack:** Astro, Markdown collections, existing Tailwind tokens and landing components.

## Positioning

- Category: a shared Git-based workspace for building and running Astro websites.
- Primary outcome: more people can carry an idea through to publication with fewer handoffs.
- How: content forms and coding agents operating on the same project, with previews and review.
- Structural benefit: code and content stay together in a repository the team owns.
- Buyer/enabler: a developer or technical founder who prepares the project.
- Everyday users: writers, marketers, founders and developers.
- Scope: Astro sites; free and open source; runs locally, with GitHub sharing and access.
- Avoid promising fewer employees, zero handoffs, simultaneous editing, automatic safety or zero setup.
- Fewer systems means no separate CMS content store to synchronize; hosting, GitHub and agent setup still exist.

## Proposed homepage order

### 1. Hero: explain the product

Headline: A shared workspace for everyone who builds your website.

Lead: Bring code, content and AI agents into one Git-based project. Give writers and marketers the freedom to create pages and make changes, with shared previews and review before publishing. From first idea to live site, with fewer handoffs.

Scope line: For Astro sites · Free and open source.

Primary action: Download Orso. Secondary action: Watch the 35-second demo, connected to the existing recording rather than a generic workflow jump.

Keep the existing product video directly beneath the copy. Add a plain caption describing its actual sequence: ask for a change, edit content, preview, publish. Explain local operation and GitHub sharing in setup and FAQ, with a short local-app label near the download action if needed for clarity.

### 2. Possibilities: show what changes for the team

Headline: Take the idea further yourself.

Lead: Update the words in a form. Ask an agent when the idea needs a new page, a different layout or changes across the site.

Reuse three existing tasks: a campaign landing page using existing components, customer questions turned into help articles, and links updated across multiple posts. Each example should show request, result and preview. Role labels illustrate possible users, not permissions or fixed responsibilities.

Remove the four-item negative comparison with forms. State positively that forms handle routine edits and agents extend what the team can change. Keep file paths secondary to the visible page/result.

### 3. Workflow: explain the guardrails

Headline: More people can build. Every change gets reviewed.

Steps: Make a change → Preview and share → Get a greenlight and publish.

Use one coherent example through the sequence, ideally the existing campaign page. Show the real product states. Explain that shared preview links update after the author sends an update; do not imply live collaborative editing. Avoid claims that previews guarantee correctness.

### 4. Shared project: explain the structural benefit

Headline: One project for the whole website.

Lead: Your content lives alongside your pages and components. Writers, developers and agents work from the same source, without a separate CMS content store to keep in sync.

Three supporting points:
- One source of truth: code and content in the same GitHub repository.
- One history: changes are recorded and earlier versions remain available.
- One publishing process: shared previews and review through the project's existing workflow.

Show a simple project diagram connecting content, page components and assets to a change, preview and publication. Explain that each teammate opens the project locally and shares changes through GitHub. Retain ownership and portability reassurance. Move detailed Git vocabulary into Help.

### 5. Setup and compatibility: help visitors assess fit

Headline: Start with an Astro site. Bring your agent.

Explain two paths: start from the ready-to-use template; or have a developer/agent prepare an existing Astro project. Link to the existing setup guide. Explain GitHub accounts, local installation, agent setup and existing hosting.

Reuse tool logos as compatibility labels here, not social proof. Verify operating system availability before rewriting copy: download/getting-started currently say macOS and Linux, while FAQ says macOS first. Keep support claims consistent with the actual release.

### 6. FAQ: answer purchase/adoption objections

Keep six homepage questions: supported sites, Git/code knowledge, setup responsibility, GitHub access and teammate workflow, draft/review/recovery, and free/open-source pricing including separate agent costs.

Cover local operation in setup and FAQ. Link to Help for image storage, detailed hosting, overlapping changes and other operational questions. Preserve useful existing answers in Help rather than deleting information outright.

### 7. Closing action

Headline: Give your next idea a path to live.

Lead: Create, review and publish from the same Git-based project. Your team can do more, and your site stays yours.

Actions: Download Orso; view GitHub source. Repeat the Astro/free/open-source scope briefly. Avoid introducing a new promise here.

## Existing section disposition

| Existing file | Planned treatment |
| --- | --- |
| Hero.astro | Replace heading and lead with the agreed direction; retain recording. |
| HeroVideo.astro | Keep existing accessible player; connect the hero secondary action if implemented. |
| Stack.astro | Rework into positive, concrete possibilities; retain strongest requests. |
| HowItWorks.astro | Use actual make/preview/greenlight/publish workflow. |
| About.astro | Consolidate shared-project explanation here; retain ownership and no-ticket ideas where useful. |
| WhyRepo.astro | Fold distinct source/history/ownership benefits into About; stop rendering a separate repeated grid. |
| Features.astro | Redistribute useful screenshots into possibilities/workflow; stop rendering standalone generic feature grid. |
| Tools.astro | Place compatibility logos alongside setup guidance. |
| Statement.astro | Move founder context into a Blog article; remove standalone trend/quote section from homepage. |
| Comparison.astro | Remove from homepage initially; retain source for later evidence-backed comparison content. |
| Faq.astro and src/lib/faqs.ts | Shorten homepage objections and correct setup/platform inconsistencies. |
| Cta.astro | Close with the same outcome and ownership promise. |
| src/pages/index.astro | Compose the seven sections and align page title/description. |

## Supporting site structure

Keep the existing routes. Do not add a separate page for every homepage section.

Header: How it works (workflow anchor), For developers (setup anchor), Blog, Help; Download Orso as primary action. Keep GitHub secondary if space permits. Update desktop/mobile navigation together and check every anchor after consolidation.

Download (/download/): explain what runs locally, supported systems, prerequisites and installation; provide template and existing-site next steps; link to setup and team-sharing guides. Match platform statements across the site.

Help (/help/): prioritize a task-based path using existing articles: install → open/start project → edit or ask agent → preview/share → greenlight/publish → work with teammates/resolve overlaps. Keep content and publishing references available.

Blog (/blog/): carry the larger thesis about changing roles, why code and content belong together, and concrete walkthroughs. Publish only demonstrated examples; use the maker's note here rather than asking homepage visitors to read a manifesto.

Footer: product/workflow links, setup/help, Blog, GitHub/license, legal. Align the tagline with the shared-project positioning rather than the current developer-tools category.

## Implementation sequence

- [ ] Review this content structure and proposed wording.
- [ ] Update Hero, Stack and HowItWorks first; check that the first three sections answer what it is, what users can do, and how changes reach publication.
- [ ] Consolidate About/WhyRepo and repurpose screenshots from Features; preserve links/anchors or update their references.
- [ ] Add the compact setup/compatibility section and shorten homepage FAQ; align local/team/platform explanations with actual behavior.
- [ ] Update CTA, index composition, header/mobile navigation, footer and page/site metadata together.
- [ ] Align Download and Help entry paths; keep Blog changes separate from the homepage launch.
- [ ] Update DESIGN.md's section order and obsolete hero-motion description when the page is implemented. No token changes are needed for copy/order changes; any later visual styling changes must update DESIGN.md and global.css together.
- [ ] Check the live preview status and rendered page, desktop/mobile layout, demo action, all anchors/download links and FAQ interaction. Verify light/dark themes if visuals change. Do not run a production build for these ordinary edits.
- [ ] Refresh content and preview if articles are added or renamed.

## Acceptance criteria

A new visitor can identify that Orso is for Astro websites, who it helps, what they can do, how review/publishing works and how to get started. Every section introduces a distinct point. Product examples substantiate the headline. Shared workspace is explained as a common Git-based project, without implying hosted real-time co-editing. Setup/platform/agent-cost statements agree. Existing navigation, content routes, base-aware links and the externally managed preview remain functional.
