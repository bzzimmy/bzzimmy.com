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

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      // Validate and parse frontmatter
      const frontmatter = PostFrontmatterSchema.parse(data);

      // Calculate reading time if not provided
      const readingTime = frontmatter.readingTime || calculateReadingTime(content);

      return {
        slug,
        ...frontmatter,
        readingTime,
      };
    })
    // Filter out drafts in production
    .filter((post) => {
      if (process.env.NODE_ENV === "production") {
        return !post.draft;
      }
      return true;
    })
    // Sort by date descending
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Validate and parse frontmatter
  const frontmatter = PostFrontmatterSchema.parse(data);

  // Filter drafts in production
  if (process.env.NODE_ENV === "production" && frontmatter.draft) {
    return null;
  }

  const readingTime = frontmatter.readingTime || calculateReadingTime(content);

  return {
    slug,
    content,
    ...frontmatter,
    readingTime,
  };
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
