import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { createHighlighter } from "shiki";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { Footer } from "@/components/footer";

const highlighter = await createHighlighter({
  themes: ["github-dark-default"],
  langs: ["python", "javascript", "typescript", "json", "bash", "shell"],
});

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found - Ben Zimmermann",
    };
  }

  return {
    title: `${post.title} - Ben Zimmermann`,
    description: post.summary,
    openGraph: {
      title: `${post.title} - Ben Zimmermann`,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      ...(post.cover && { images: [{ url: post.cover }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} - Ben Zimmermann`,
      description: post.summary,
    },
    ...(post.canonicalUrl && { alternates: { canonical: post.canonicalUrl } }),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col items-center font-sans pt-32 sm:pt-40">
      <article className="flex w-full max-w-2xl flex-col px-6">
        {/* Back Link */}
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="font-mono flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
                timeZone: "UTC",
              })}
            </span>

            {post.readingTime && (
              <span className="font-mono flex items-center gap-1.5 whitespace-nowrap">
                <Clock className="h-3.5 w-3.5" />
                {post.readingTime}
              </span>
            )}
          </div>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-purple-400/70 bg-purple-400/10 px-2 py-0.5 rounded whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <div className="prose">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              pre({ children }) {
                const codeEl = children as React.ReactElement<{
                  className?: string;
                  children?: React.ReactNode;
                }>;
                const className = codeEl?.props?.className || "";
                const match = /language-(\w+)/.exec(className);
                if (match) {
                  const code = String(codeEl?.props?.children || "").replace(
                    /\n$/,
                    ""
                  );
                  const html = highlighter.codeToHtml(code, {
                    lang: match[1],
                    theme: "github-dark-default",
                  });
                  return (
                    <div
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                  );
                }
                return <pre>{children}</pre>;
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        </article>

      <div className="mt-auto w-full">
        <Footer />
      </div>
    </div>
  );
}
