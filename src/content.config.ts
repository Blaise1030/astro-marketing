import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { orsoGlob } from "orso-astro";

const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use a lowercase slug like getting-started");

const blogCategories = defineCollection({
  loader: orsoGlob({ base: "./src/content/blogCategories/en", pattern: "*.md" }),
  schema: z.object({
    title: z.string(),
    slug,
    description: z.string().optional(),
  }),
});

const helpDocsCategories = defineCollection({
  loader: orsoGlob({ base: "./src/content/helpDocsCategories/en", pattern: "*.md" }),
  schema: z.object({
    title: z.string(),
    slug,
    description: z.string().optional(),
    order: z.number().default(0),
  }),
});

const blog = defineCollection({
  loader: orsoGlob({ base: "./src/content/blog/en", pattern: "*.md" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD").refine((value) => {
      const date = new Date(`${value}T00:00:00Z`);
      return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
    }, "Use a valid calendar date").meta({ editor: { type: "date", knownRefinement: true } }),
    coverImage: image().meta({ editor: { type: "image" } }).optional(),
    coverAlt: z.string().optional(),
    categories: z.array(z.string().meta({ editor: { type: "reference", collection: "blogCategories" } })).default([]),
    tags: z.array(z.string()).default([]),
    relatedPosts: z.array(z.string().meta({ editor: { type: "reference", collection: "blog" } })).default([]),
  }).superRefine((post, ctx) => {
    if (post.coverImage && !post.coverAlt?.trim()) {
      ctx.addIssue({ code: "custom", path: ["coverAlt"], message: "Describe the cover image" });
    }
  }).meta({ editor: { knownRefinement: true } }),
});

const helpCategories = defineCollection({
  loader: orsoGlob({ base: "./src/content/helpCategories/en", pattern: "*.md" }),
  schema: z.object({
    title: z.string(),
    /** One-line blurb shown on the Help home card and the category page. */
    description: z.string(),
    order: z.number(),
  }),
});

const helpSubcategories = defineCollection({
  loader: orsoGlob({ base: "./src/content/helpSubcategories/en", pattern: "*.md" }),
  schema: z.object({
    title: z.string(),
    category: z.string().meta({ editor: { type: "reference", collection: "helpCategories" } }),
    order: z.number(),
  }),
});

const helpDocs = defineCollection({
  loader: orsoGlob({ base: "./src/content/helpDocs/en", pattern: "*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().meta({ editor: { type: "reference", collection: "helpDocsCategories" } }).optional(),
    /** Top-level help category, shown as a card on the Help home. */
    section: z.string().meta({ editor: { type: "reference", collection: "helpCategories" } }),
    /** Optional group inside the category. */
    subcategory: z.string().meta({ editor: { type: "reference", collection: "helpSubcategories" } }).optional(),
    order: z.number(),
  }),
});

export const collections = { blogCategories, helpDocsCategories, blog, helpCategories, helpSubcategories, helpDocs };
