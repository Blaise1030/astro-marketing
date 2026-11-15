import { createRequire } from "node:module";
import { orsoGlob } from "../integrations/orso/index.js";

const require = createRequire(import.meta.url);
const getZod = () => require("astro/zod").z;

/** @param {{ loader: unknown, schema: unknown }} config */
function contentCollection(config) {
  return { ...config, type: "content_layer" };
}

const blogCategories = contentCollection({
  loader: orsoGlob({ base: "./src/content/blogCategories/en", pattern: "*.md" }),
  schema: () => {
    const z = getZod();
    const slug = z
      .string()
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use a lowercase slug like getting-started");
    return z.object({
      title: z.string(),
      slug,
      description: z.string().optional(),
    });
  },
});

const helpDocsCategories = contentCollection({
  loader: orsoGlob({ base: "./src/content/helpDocsCategories/en", pattern: "*.md" }),
  schema: () => {
    const z = getZod();
    const slug = z
      .string()
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use a lowercase slug like getting-started");
    return z.object({
      title: z.string(),
      slug,
      description: z.string().optional(),
      order: z.number().default(0),
    });
  },
});

const blog = contentCollection({
  loader: orsoGlob({ base: "./src/content/blog/en", pattern: "*.md" }),
  schema: ({ image }) => {
    const z = getZod();
    return z
      .object({
        title: z.string(),
        description: z.string(),
        pubDate: z
          .string()
          .regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD")
          .refine((value) => {
            const date = new Date(`${value}T00:00:00Z`);
            return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
          }, "Use a valid calendar date")
          .meta({ editor: { type: "date", knownRefinement: true } }),
        coverImage: image().meta({ editor: { type: "image" } }).optional(),
        coverAlt: z.string().optional(),
        categories: z
          .array(z.string().meta({ editor: { type: "reference", collection: "blogCategories" } }))
          .default([]),
        tags: z.array(z.string()).default([]),
        relatedPosts: z
          .array(z.string().meta({ editor: { type: "reference", collection: "blog" } }))
          .default([]),
      })
      .superRefine((post, ctx) => {
        if (post.coverImage && !post.coverAlt?.trim()) {
          ctx.addIssue({ code: "custom", path: ["coverAlt"], message: "Describe the cover image" });
        }
      })
      .meta({ editor: { knownRefinement: true } });
  },
});

const helpCategories = contentCollection({
  loader: orsoGlob({ base: "./src/content/helpCategories/en", pattern: "*.md" }),
  schema: () => {
    const z = getZod();
    return z.object({
      title: z.string(),
      description: z.string(),
      order: z.number(),
    });
  },
});

const helpSubcategories = contentCollection({
  loader: orsoGlob({ base: "./src/content/helpSubcategories/en", pattern: "*.md" }),
  schema: () => {
    const z = getZod();
    return z.object({
      title: z.string(),
      category: z.string().meta({ editor: { type: "reference", collection: "helpCategories" } }),
      order: z.number(),
    });
  },
});

const helpDocs = contentCollection({
  loader: orsoGlob({ base: "./src/content/helpDocs/en", pattern: "*.md" }),
  schema: () => {
    const z = getZod();
    return z.object({
      title: z.string(),
      description: z.string(),
      category: z
        .string()
        .meta({ editor: { type: "reference", collection: "helpDocsCategories" } })
        .optional(),
      section: z.string().meta({ editor: { type: "reference", collection: "helpCategories" } }),
      subcategory: z
        .string()
        .meta({ editor: { type: "reference", collection: "helpSubcategories" } })
        .optional(),
      order: z.number(),
    });
  },
});

/**
 * Site collections for `orso({ collections })`.
 * `slug` in previewPath is always the entry id (filename).
 */
export const siteCollections = {
  blogCategories: {
    collection: blogCategories,
    previewPath: ({ slug }) => `/blog/categories/${slug}/`,
  },
  helpDocsCategories: {
    collection: helpDocsCategories,
    previewPath: ({ slug }) => `/help/categories/${slug}/`,
  },
  blog: {
    collection: blog,
    previewPath: ({ slug }) => `/blog/${slug}/`,
  },
  helpCategories: {
    collection: helpCategories,
    previewPath: ({ slug }) => `/help/section/${slug}/`,
  },
  helpSubcategories: {
    collection: helpSubcategories,
  },
  helpDocs: {
    collection: helpDocs,
    previewPath: ({ slug }) => `/help/${slug}/`,
  },
};
