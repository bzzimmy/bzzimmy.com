"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Github, Plane, FileCode, Puzzle, ChevronDown, Home } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const mainDisclosures = [
  {
    company: "TechCrunch",
    title: "Home Depot Exposure",
    bounty: "Featured",
    severity: "Critical",
    description: "A leaked GitHub token granted access to hundreds of private repositories, cloud infrastructure, and order fulfillment systems.",
    icon: Home,
    date: "Dec 2025",
    link: "https://techcrunch.com/2025/12/12/home-depot-exposed-access-to-internal-systems-for-a-year-says-researcher/",
    linkText: "Featured in TechCrunch",
  },
  {
    company: "GitHub",
    title: "Critical Infrastructure Access",
    bounty: "$20,000",
    severity: "Critical",
    description: "Discovered a leaked OAuth token granting write access to 'github/github' and 74,000+ private repositories.",
    icon: Github,
    date: "Nov 2025",
  },
  {
    company: "TripAdvisor",
    title: "Sensitive Data Exposure",
    bounty: "$1,500",
    severity: "High",
    description: "Identified a publicly exposed employee token with 'repo' and 'workflow' scopes, allowing access to source code and build pipelines.",
    icon: Plane,
    date: "Nov 2025",
  },
  {
    company: "Vue.js",
    title: "Admin API Key Exposure",
    bounty: "Hall of Fame",
    severity: "Critical",
    description: "Found a leaked Algolia Admin API key with write access to the official documentation search index.",
    icon: FileCode,
    date: "Oct 2025",
    link: "https://github.com/vuejs/core/blob/main/SECURITY.md",
    linkText: "Acknowledged in the Vue.js Security Hall of Fame",
  },
];

const additionalDisclosures = [
  {
    company: "Chrome Extensions",
    title: "AI Auth Bypass",
    bounty: "Resolved",
    severity: "High",
    description: "Reverse-engineered popular AI extensions to bypass client-side authentication, enabling free access to premium LLM APIs.",
    icon: Puzzle,
    date: "Sep 2025",
  },
  {
    company: "Margelo",
    title: "Exposed Credentials",
    bounty: "Resolved",
    severity: "Medium",
    description: "Discovered publicly exposed credentials that could compromise development infrastructure.",
    icon: FileCode,
    date: "Aug 2025",
  },
  {
    company: "Popsa",
    title: "Security Misconfiguration",
    bounty: "Resolved",
    severity: "Medium",
    description: "Identified misconfigurations that could lead to unauthorized access to user data.",
    icon: FileCode,
    date: "Jul 2025",
  },
  {
    company: "NPR",
    title: "Early Security Research",
    bounty: "Recognition",
    severity: "Low",
    description: "Discovered a Google Family Link security bypass at age 9, marking the beginning of my security research journey.",
    icon: FileCode,
    date: "Apr 2018",
    link: "https://www.npr.org/2018/06/18/620005246/a-guide-to-parental-controls-for-kids-tech-use",
    linkText: "Featured on NPR",
  },
];

export function ResearchSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="research" className="w-full max-w-2xl px-6 py-24 sm:py-32">
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <div className="mb-12 flex flex-col items-center text-center sm:items-start sm:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Security Research
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I specialize in identifying critical failures in large-scale systems.
            Here are some of my most significant disclosures.
          </p>
        </div>
      </BlurFade>

      <div className="flex flex-col gap-12">
        {mainDisclosures.map((item, index) => (
          <BlurFade key={index} delay={BLUR_FADE_DELAY * 6 + index * 0.05}>
            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
              {/* Date Column */}
              <div className="shrink-0 w-24 pt-1">
                <span className="font-mono text-sm text-zinc-500">
                  {item.date}
                </span>
              </div>

              {/* Content Column */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.company}
                    <span className="text-muted-foreground font-normal ml-2">
                       — {item.title}
                    </span>
                  </h3>

                  <div className="shrink-0">
                    <span className="font-mono text-sm font-bold text-green-400/90 bg-green-400/10 px-2 py-0.5 rounded border border-green-400/20">
                      {item.bounty}
                    </span>
                  </div>
                </div>

                <p className="text-base leading-relaxed text-muted-foreground/80">
                  {item.link && item.linkText && (
                    <>
                      <a
                        href={item.link}
                        className="text-purple-400 underline underline-offset-2 hover:text-purple-300 transition-colors"
                      >
                        {item.linkText}
                      </a>
                      {". "}
                    </>
                  )}
                  {item.description}
                </p>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>

      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-12 pt-12">
              {additionalDisclosures.map((item, index) => (
                <motion.div
                  key={`additional-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8"
                >
                  {/* Date Column */}
                  <div className="shrink-0 w-24 pt-1">
                    <span className="font-mono text-sm text-zinc-500">
                      {item.date}
                    </span>
                  </div>

                  {/* Content Column */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.company}
                        <span className="text-muted-foreground font-normal ml-2">
                           — {item.title}
                        </span>
                      </h3>

                      <div className="shrink-0">
                        <span className="font-mono text-sm font-bold text-green-400/90 bg-green-400/10 px-2 py-0.5 rounded border border-green-400/20">
                          {item.bounty}
                        </span>
                      </div>
                    </div>

                    <p className="text-base leading-relaxed text-muted-foreground/80">
                      {item.link && item.linkText && (
                        <>
                          <a
                            href={item.link}
                            className="text-purple-400 underline underline-offset-2 hover:text-purple-300 transition-colors"
                          >
                            {item.linkText}
                          </a>
                          {". "}
                        </>
                      )}
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BlurFade delay={BLUR_FADE_DELAY * 10}>
        <div className="mt-12 flex justify-start">
          <button
            onClick={() => setShowMore(!showMore)}
            className="group flex items-center gap-2 text-base font-medium text-muted-foreground transition-colors hover:text-purple-400"
          >
            <span>{showMore ? "Show less" : "Show more"}</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${showMore ? "rotate-180" : ""}`} />
          </button>
        </div>
      </BlurFade>
    </section>
  );
}
