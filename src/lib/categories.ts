import { getCollection, getEntry } from "astro:content";

/** Resolve a category reference, failing the build when it points at a missing entry. */
export async function category<C extends "blogCategories" | "helpCategories">(collection: C, id: string, from: string) {
  const entry = await getEntry(collection, id);
  if (!entry) throw new Error(`${from} references missing category "${id}"`);
  return entry;
}

/** Blog categories by title, and posts newest first with their category resolved. */
export async function loadBlog() {
  const categories = (await getCollection("blogCategories")).sort((a, b) => a.data.title.localeCompare(b.data.title));
  const sorted = (await getCollection("blog")).sort((a, b) => b.data.pubDate.localeCompare(a.data.pubDate) || a.id.localeCompare(b.id));
  const posts = await Promise.all(sorted.map(async (post) => ({
    post,
    category: post.data.category === undefined ? undefined : await category("blogCategories", post.data.category, `blog/${post.id}`),
  })));
  return { categories, posts };
}

/** Help categories in display order, each with its docs; empty categories are omitted. */
export async function loadHelp() {
  const categories = (await getCollection("helpCategories")).sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
  const docs = await getCollection("helpDocs");
  await Promise.all(docs.map((doc) => category("helpCategories", doc.data.category, `helpDocs/${doc.id}`)));
  return categories
    .map((entry) => ({
      category: entry,
      docs: docs.filter((doc) => doc.data.category === entry.id).sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title)),
    }))
    .filter((group) => group.docs.length > 0);
}
