/** Loader paths are project-relative; consumed by Astro and the content helper. */
export const collectionRegistry = {
  blog: { loader: { base: "./src/content/blog/en", pattern: "*.md" }, kind: "markdown" },
  helpDocs: { loader: { base: "./src/content/helpDocs/en", pattern: "*.md" }, kind: "markdown" },
  blogCategories: { loader: { base: "./src/content/blogCategories/en", pattern: "*.md" }, kind: "markdown" },
  helpCategories: { loader: { base: "./src/content/helpCategories/en", pattern: "*.md" }, kind: "markdown" },
};

/** Inject Astro's Zod and image context, or Zod alone for Node validation. */
export function createCollectionSchemas({ z, image = () => z.string() }) {
  const blog = z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().optional(),
    category: z.string().meta({ editor: { type: "reference", collection: "blogCategories" } }).optional(),
    pubDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD").refine((value) => {
      const date = new Date(`${value}T00:00:00Z`);
      return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
    }, "Use a valid calendar date").meta({ editor: { type: "date", knownRefinement: true } }),
    coverImage: image().meta({ editor: { type: "image" } }).optional(),
    coverAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    relatedPosts: z.array(z.string().meta({ editor: { type: "reference", collection: "blog" } })).default([]),
  }).superRefine((post, ctx) => {
    if (post.coverImage && !post.coverAlt?.trim()) {
      ctx.addIssue({ code: "custom", path: ["coverAlt"], message: "Describe the cover image" });
    }
  }).meta({ editor: { knownRefinement: true } });
  const helpDocs = z.object({
    title: z.string(), description: z.string(),
    category: z.string().meta({ editor: { type: "reference", collection: "helpCategories" } }),
    order: z.number(),
  });
  const blogCategories = z.object({ title: z.string(), description: z.string().optional() });
  const helpCategories = z.object({ title: z.string(), description: z.string().optional(), order: z.number().default(0) });
  return { blog, helpDocs, blogCategories, helpCategories };
}
