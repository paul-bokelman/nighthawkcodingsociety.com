import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

type Items = {
  title?: string;
  date?: string;
  slug?: string;
  author?: string;
  content?: string;
  ogImage?: string;
  coverImage?: string;
  undefined?: any;
};

type Fields =
  | ["title", "date", "slug", "author", "content", "ogImage", "coverImage"]
  | [];

interface GetPostBySlug {
  route: string;
  slug: string;
  fields: Fields;
}

const postsDirectory = join(process.cwd(), "_markdown");

export function getPostSlugs({ route }: { route: string }): string[] {
  return fs.readdirSync(join(postsDirectory, route));
}

export function getPostBySlug({
  route,
  slug,
  fields = [],
}: GetPostBySlug): Items {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, route, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: Items = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts({
  route,
  fields = [],
}: {
  route: string;
  fields: Fields;
}): Items[] {
  const slugs = getPostSlugs({ route });
  const posts = slugs.map((slug) => getPostBySlug({ route, slug, fields }));
  // .sort(({ post1, post2 }) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
