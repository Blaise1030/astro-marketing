import type { CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

export const categoryOf = (post: Post) => post.data.tags[0] ?? "general";

export const formatDate = (value: string) =>
  new Date(`${value}T00:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

export const sortPosts = (posts: Post[]) =>
  [...posts].sort((a, b) => b.data.pubDate.localeCompare(a.data.pubDate) || a.id.localeCompare(b.id));
