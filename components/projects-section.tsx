"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

const projects = [
  {
    title: "EasyApex",
    description: "Automated Chrome extension for solving Apex Learning quizzes using Vision AI. Handles text, images, and drag-and-drop questions with human-like delays.",
    tech: ["TypeScript", "React", "Vision AI"],
    link: "https://github.com/bzzimmy/easyapex",
    stats: "Open Source",
  },
  {
    title: "CodePen Scraper",
    description: "High-performance GraphQL harvester that enumerated 600k+ users and 8M+ pens for secret scanning. Features concurrent workers, proxy rotation, and SQLite state tracking.",
    tech: ["Python", "GraphQL", "SQLite"],
    link: "#",
    stats: "Private",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full max-w-2xl px-6 py-24 sm:py-32">
      <BlurFade delay={BLUR_FADE_DELAY * 15}>
        <div className="mb-12 flex flex-col items-center text-center sm:items-start sm:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Open source tools and scanners I've built to automate the hunt.
          </p>
        </div>
      </BlurFade>

      <div className="flex flex-col gap-12">
        {projects.map((project, index) => (
          <BlurFade key={index} delay={BLUR_FADE_DELAY * 16 + index * 0.1}>
            {project.link === "#" ? (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>

                    <span className="shrink-0 font-mono text-xs font-medium text-zinc-500">
                      {project.stats}
                    </span>
                  </div>

                  <p className="text-base leading-relaxed text-muted-foreground/80">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-3 mt-1">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono text-purple-400/80"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                href={project.link}
                className="group flex flex-col gap-4 transition-opacity hover:opacity-100"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-purple-100 transition-colors flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight className="h-4 w-4 text-zinc-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-400 opacity-0 sm:opacity-100" />
                    </h3>

                    <span className="shrink-0 font-mono text-xs font-medium text-zinc-500 group-hover:text-zinc-400">
                      {project.stats}
                    </span>
                  </div>

                  <p className="text-base leading-relaxed text-muted-foreground/80 group-hover:text-muted-foreground transition-colors">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-3 mt-1">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono text-purple-400/80 group-hover:text-purple-400"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            )}
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
