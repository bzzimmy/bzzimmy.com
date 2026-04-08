import { getAllPostsWithContent } from "@/lib/blog";
import { allDisclosures } from "@/lib/research";

const siteUrl = "https://benzimmermann.dev";

function toAbsoluteUrl(url: string): string {
  if (/^(https?:|mailto:)/.test(url)) {
    return url;
  }

  return new URL(url, siteUrl).toString();
}

function cleanMarkdownForLlms(markdown: string): string {
  return markdown
    .replace(/!\[[^\]]*]\([^)]+\)/g, "")
    .replace(/<img[^>]*>/g, "")
    .replace(/&nbsp;/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function renderResearchSection(): string {
  const lines = allDisclosures.map((item) => {
    const parts = [
      `${item.company} - ${item.title}`,
      `${item.date}`,
      `${item.severity}`,
      `${item.bounty}`,
    ];

    if (item.link) {
      parts.push(toAbsoluteUrl(item.link));
    }

    return `- ${parts.join(" | ")}: ${item.description}`;
  });

  return ["## Security Research", ...lines].join("\n");
}

function renderProjectsSection(): string {
  return [
    "## Projects",
    "- [awesome-secret-hunting](https://github.com/bzzimmy/awesome-secret-hunting): A curated list of tools, techniques, and resources for offensive secret scanning and credential discovery.",
  ].join("\n");
}

function renderBlogSection(): string {
  const posts = getAllPostsWithContent();

  if (posts.length === 0) {
    return ["## Blog", "No blog posts published yet."].join("\n");
  }

  const sections = posts.map((post) => {
    const tags = post.tags.length > 0 ? post.tags.join(", ") : "none";
    const lines = [
      `### ${post.title}`,
      `URL: ${toAbsoluteUrl(`/blog/${post.slug}`)}`,
      `Published: ${post.date}`,
      `Reading Time: ${post.readingTime}`,
      `Tags: ${tags}`,
      `Summary: ${post.summary}`,
      "",
      cleanMarkdownForLlms(post.content),
    ];

    return lines.join("\n");
  });

  return ["## Blog", ...sections].join("\n\n");
}

function renderLinksSection(): string {
  return [
    "## Links",
    "- GitHub: https://github.com/bzzimmy",
    "- LinkedIn: https://www.linkedin.com/in/benzimm/",
    "- HackerOne: https://hackerone.com/kernelrocks/",
    "- Email: mailto:kernelrocks@proton.me",
  ].join("\n");
}

export function renderLlmsTxt(): string {
  return [
    "# Ben Zimmermann",
    "",
    "> Security researcher specializing in identifying critical failures in large-scale systems. Awarded over $27,000 in bug bounties for securing critical infrastructure and the open web.",
    "",
    "Ben is a California-based security researcher with a focus on secret scanning, infrastructure security, and vulnerability disclosure. His work has been featured in TechCrunch and NPR.",
    "",
    renderResearchSection(),
    "",
    renderProjectsSection(),
    "",
    renderBlogSection(),
    "",
    renderLinksSection(),
    "",
  ].join("\n");
}
