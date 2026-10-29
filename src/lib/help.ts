import type { CollectionEntry } from "astro:content";

export type Doc = CollectionEntry<"helpDocs">;
export type CategoryEntry = CollectionEntry<"helpCategories">;
export type SubcategoryEntry = CollectionEntry<"helpSubcategories">;

const byOrder = (a: { data: { order: number; title: string } }, b: { data: { order: number; title: string } }) =>
  a.data.order - b.data.order || a.data.title.localeCompare(b.data.title);

/** Docs in reading order: category, then subcategory, then doc order (previous/next navigation follows this). */
export const sortDocs = (docs: Doc[], categories: CategoryEntry[], subcategories: SubcategoryEntry[]) => {
  const categoryRank = new Map([...categories].sort(byOrder).map((c, i) => [c.id, i]));
  const subRank = new Map([...subcategories].sort(byOrder).map((s, i) => [s.id, i]));
  return [...docs].sort(
    (a, b) =>
      (categoryRank.get(a.data.section) ?? 0) - (categoryRank.get(b.data.section) ?? 0) ||
      (a.data.subcategory ? subRank.get(a.data.subcategory) ?? 0 : -1) - (b.data.subcategory ? subRank.get(b.data.subcategory) ?? 0 : -1) ||
      byOrder(a, b),
  );
};

export interface Category {
  /** Entry id, also the URL slug. */
  slug: string;
  name: string;
  description: string;
  docs: Doc[];
  /** Docs with no subcategory, in order. */
  loose: Doc[];
  subcategories: { slug: string; name: string; docs: Doc[] }[];
}

export const buildCategories = (docs: Doc[], categories: CategoryEntry[], subcategories: SubcategoryEntry[]): Category[] => {
  const sorted = sortDocs(docs, categories, subcategories);
  return [...categories].sort(byOrder).map((category) => {
    const inCategory = sorted.filter((doc) => doc.data.section === category.id);
    return {
      slug: category.id,
      name: category.data.title,
      description: category.data.description,
      docs: inCategory,
      loose: inCategory.filter((doc) => !doc.data.subcategory),
      subcategories: subcategories
        .filter((sub) => sub.data.category === category.id)
        .sort(byOrder)
        .map((sub) => ({ slug: sub.id, name: sub.data.title, docs: inCategory.filter((doc) => doc.data.subcategory === sub.id) }))
        .filter((sub) => sub.docs.length > 0),
    };
  }).filter((category) => category.docs.length > 0);
};

export const loadHelp = async (getCollection: typeof import("astro:content").getCollection) => {
  const [docs, categories, subcategories] = await Promise.all([getCollection("helpDocs"), getCollection("helpCategories"), getCollection("helpSubcategories")]);
  return { docs: sortDocs(docs, categories, subcategories), categories: buildCategories(docs, categories, subcategories), subcategories };
};
