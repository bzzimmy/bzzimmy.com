"use client";

import { Badge } from "@/components/ui/badge";
import { Github, Plane, FileCode, Puzzle, ArrowUpRight } from "lucide-react";

const disclosures = [
  {
    company: "GitHub",
    title: "Critical Infrastructure Access",
    bounty: "$20,000",
    severity: "Critical",
    description:
      "Discovered a leaked OAuth token granting write access to the 'github/github' repository and 74,000+ other private repositories. Provided administrative control over core production codebase.",
    icon: Github,
    date: "Nov 2025",
    link: "#",
  },
  {
    company: "TripAdvisor",
    title: "Sensitive Data Exposure",
    bounty: "$1,500",
    severity: "High",
    description:
      "Identified a publicly exposed employee token with 'repo' and 'workflow' scopes. Allowed unauthorized access to source code, internal build pipelines, and infrastructure.",
    icon: Plane,
    date: "Nov 2025",
    link: "#",
  },
  {
    company: "Vue.js",
    title: "Admin API Key Exposure",
    bounty: "Hall of Fame",
    severity: "Critical",
    description:
      "Found a leaked Algolia Admin API key with full write access to the official documentation search index. Acknowledged in the Vue.js Security Hall of Fame.",
    icon: FileCode,
    date: "Oct 2025",
    link: "#",
  },
  {
    company: "Chrome Extensions",
    title: "AI Auth Bypass",
    bounty: "Resolved",
    severity: "High",
    description:
      "Reverse-engineered popular AI extensions to bypass client-side authentication, allowing unlimited free access to premium LLM APIs (GPT-4, Claude 3) for 100k+ users.",
    icon: Puzzle,
    date: "Sep 2025",
    link: "#",
  },
];

export function ResearchSection() {
  return (
    <section id="research" className="w-full max-w-2xl px-6 py-24 sm:py-32">
      <div className="mb-12 flex flex-col items-center text-center sm:items-start sm:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Security Research
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          I specialize in identifying critical failures in large-scale systems. 
          Here are some of my most significant disclosures.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {disclosures.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="group relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8 transition-opacity hover:opacity-100"
          >
            {/* Date Column */}
            <div className="shrink-0 pt-1">
              <span className="font-mono text-sm text-zinc-500 group-hover:text-purple-400 transition-colors">
                {item.date}
              </span>
            </div>

            {/* Content Column */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-purple-100 transition-colors flex items-center gap-2">
                  {item.company}
                  <span className="text-muted-foreground font-normal">
                     — {item.title}
                  </span>
                </h3>
                
                <div className="shrink-0 flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-green-400/90 bg-green-400/10 px-2 py-0.5 rounded border border-green-400/20">
                    {item.bounty}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-zinc-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-400 opacity-0 sm:opacity-100" />
                </div>
              </div>
              
              <p className="text-base leading-relaxed text-muted-foreground/80 group-hover:text-muted-foreground transition-colors">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
