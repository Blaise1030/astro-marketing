import type { CollectionEntry } from "astro:content";
import { slugify } from "./blog";

export type Doc = CollectionEntry<"helpDocs">;

export { slugify };

/** One-line blurbs shown on the Help home cards; categories without one show their doc count. */
export const categoryBlurbs: Record<string, string> = {
  "Getting started": "Open a project, edit content, preview a change, and share it.",
};

export const sortDocs = (docs: Doc[]) =>
  [...docs].sort(
    (a, b) =>
      a.data.section.localeCompare(b.data.section) ||
      (a.data.subcategory ?? "").localeCompare(b.data.subcategory ?? "") ||
      a.data.order - b.data.order ||
      a.data.title.localeCompare(b.data.title),
  );

export const sectionsOf = (docs: Doc[]) => [...new Set(docs.map((doc) => doc.data.section))].sort();

export interface Category {
  name: string;
  slug: string;
  docs: Doc[];
  /** Docs with no subcategory, in order. */
  loose: Doc[];
  subcategories: { name: string; docs: Doc[] }[];
}

export const buildCategories = (docs: Doc[]): Category[] =>
  sectionsOf(docs).map((name) => {
    const inCategory = sortDocs(docs).filter((doc) => doc.data.section === name);
    const subNames = [...new Set(inCategory.flatMap((doc) => (doc.data.subcategory ? [doc.data.subcategory] : [])))];
    return {
      name,
      slug: slugify(name),
      docs: inCategory,
      loose: inCategory.filter((doc) => !doc.data.subcategory),
      subcategories: subNames.map((sub) => ({ name: sub, docs: inCategory.filter((doc) => doc.data.subcategory === sub) })),
    };
  });
