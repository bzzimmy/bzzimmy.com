import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { z } from "zod";

const postsDirectory = path.join(process.cwd(), "content/blog");

// Zod schema for frontmatter validation
const PostFrontmatterSchema = z.object({
  title: z.string(),
  date: z.string(), // ISO date string
  summary: z.string(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  cover: z.string().optional(),
  readingTime: z.string().optional(),
  canonicalUrl: z.string().optional(),
});

export type PostFrontmatter = z.infer<typeof PostFrontmatterSchema>;

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
}

export interface PostMeta extends PostFrontmatter {
  slug: string;
}

function toPostMeta(post: Post): PostMeta {
  return {
    slug: post.slug,
    title: post.title,
    date: post.date,
    summary: post.summary,
    tags: post.tags,
    draft: post.draft,
    cover: post.cover,
    readingTime: post.readingTime,
    canonicalUrl: post.canonicalUrl,
  };
}

function isVisiblePost(frontmatter: PostFrontmatter): boolean {
  if (process.env.NODE_ENV === "production") {
    return !frontmatter.draft;
  }

  return true;
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

function parsePostFile(fullPath: string): Post {
  const slug = path.basename(fullPath).replace(/\.(md|mdx)$/, "");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = PostFrontmatterSchema.parse(data);
  const readingTime = frontmatter.readingTime || calculateReadingTime(content);

  return {
    slug,
    content,
    ...frontmatter,
    readingTime,
  };
}

function getAllPostPaths(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => path.join(postsDirectory, fileName));
}

function sortPostsByDate<T extends { date: string }>(posts: T[]): T[] {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getAllPostsWithContent(): Post[] {
  return sortPostsByDate(
    getAllPostPaths()
      .map(parsePostFile)
      .filter((post) => isVisiblePost(post))
  );
}

export function getAllPosts(): PostMeta[] {
  const allPosts = getAllPostsWithContent().map(toPostMeta);

  return allPosts;
}

export function getPostBySlug(slug: string): Post | null {
  const mdPath = path.join(postsDirectory, `${slug}.md`);
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`);

  let fullPath: string;
  if (fs.existsSync(mdPath)) {
    fullPath = mdPath;
  } else if (fs.existsSync(mdxPath)) {
    fullPath = mdxPath;
  } else {
    return null;
  }

  const post = parsePostFile(fullPath);

  if (!isVisiblePost(post)) {
    return null;
  }

  return post;
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.(md|mdx)$/, ""));
}
