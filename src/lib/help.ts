import type { CollectionEntry } from "astro:content";
import { slugify } from "./blog";

export type Doc = CollectionEntry<"helpDocs">;

export { slugify };

export const sortDocs = (docs: Doc[]) =>
  [...docs].sort((a, b) => a.data.section.localeCompare(b.data.section) || a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));

export const sectionsOf = (docs: Doc[]) => [...new Set(docs.map((doc) => doc.data.section))].sort();
