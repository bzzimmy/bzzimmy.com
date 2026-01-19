import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { BlurFade } from "@/components/ui/blur-fade";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Blog - Ben Zimmermann",
  description: "Security research insights, vulnerability write-ups, and technical deep-dives from Ben Zimmermann.",
  openGraph: {
    title: "Blog - Ben Zimmermann",
    description: "Security research insights, vulnerability write-ups, and technical deep-dives from Ben Zimmermann.",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="flex min-h-screen flex-col items-center font-sans pt-32 sm:pt-40">
      <main className="flex w-full max-w-2xl flex-col items-center justify-center px-6">
        {/* Back Link */}
        <BlurFade delay={BLUR_FADE_DELAY} className="w-full">
          <div className="w-full mb-8 flex justify-start">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to home
            </Link>
          </div>
        </BlurFade>

        {/* Header */}
        <BlurFade delay={BLUR_FADE_DELAY * 2} className="w-full">
          <div className="w-full mb-12 flex flex-col items-center text-center sm:items-start sm:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Blog
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Security research insights, technical write-ups, and lessons learned from bug bounty hunting.
            </p>
          </div>
        </BlurFade>

        {/* Posts List */}
        {posts.length === 0 ? (
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="text-muted-foreground text-center py-12">
              No posts yet. Check back soon!
            </p>
          </BlurFade>
        ) : (
          <div className="w-full flex flex-col gap-8">
            {posts.map((post, index) => (
              <BlurFade
                key={post.slug}
                delay={BLUR_FADE_DELAY * 3 + index * 0.05}
                className="w-full"
                blur="4px"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group relative flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-8 transition-opacity hover:opacity-100"
                >
                  {/* Date Column */}
                  <div className="shrink-0 w-32 pt-1">
                    <span 
                      className="font-mono text-sm text-zinc-500 group-hover:text-purple-400 transition-colors flex items-center gap-1.5"
                      suppressHydrationWarning
                    >
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        timeZone: "UTC",
                      })}
                    </span>
                  </div>

                  {/* Content Column */}
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="text-lg font-semibold text-foreground group-hover:text-purple-100 transition-colors">
                        {post.title}
                      </h2>
                      <ArrowUpRight className="shrink-0 h-4 w-4 text-zinc-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-400 opacity-0 sm:opacity-100 mt-1" />
                    </div>

                    <p className="text-base leading-relaxed text-muted-foreground/80 group-hover:text-muted-foreground transition-colors">
                      {post.summary}
                    </p>

                    <div className="flex items-center gap-4 mt-1">
                      {post.readingTime && (
                        <span className="font-mono text-xs text-zinc-500 flex items-center gap-1 whitespace-nowrap">
                          <Clock className="h-3 w-3" />
                          {post.readingTime}
                        </span>
                      )}
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-xs text-purple-400/70 bg-purple-400/10 px-2 py-0.5 rounded whitespace-nowrap"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        )}
      </main>

      <div className="mt-auto w-full">
        <Footer delay={BLUR_FADE_DELAY * 4} />
      </div>
    </div>
  );
}
