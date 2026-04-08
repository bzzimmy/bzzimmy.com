"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  additionalDisclosures,
  featuredDisclosures,
  type ResearchDisclosure,
} from "@/lib/research";

function DisclosureReference({
  link,
  linkText,
}: Pick<ResearchDisclosure, "link" | "linkText">) {
  if (!link || !linkText) {
    return null;
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-400 underline underline-offset-2 hover:text-purple-300 transition-colors"
    >
      {linkText}
    </a>
  );
}

function DisclosureItem({ item }: { item: ResearchDisclosure }) {
  return (
    <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
      <div className="shrink-0 w-24 pt-1">
        <span className="font-mono text-sm text-zinc-500">{item.date}</span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-foreground">
            {item.company}
            <span className="text-muted-foreground font-normal ml-2">— {item.title}</span>
          </h3>

          <div className="shrink-0">
            <span className="font-mono text-sm font-bold text-green-400/90 bg-green-400/10 px-2 py-0.5 rounded border border-green-400/20">
              {item.bounty}
            </span>
          </div>
        </div>

        <p className="text-base leading-relaxed text-muted-foreground/80">
          <DisclosureReference link={item.link} linkText={item.linkText} />
          {item.link && item.linkText ? ". " : null}
          {item.description}
        </p>
      </div>
    </div>
  );
}

export function ResearchSection() {
  const [showMore, setShowMore] = useState(false);

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
        {featuredDisclosures.map((item, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <DisclosureItem item={item} />
          </ScrollReveal>
        ))}
      </div>

      <motion.div
        animate={{ height: showMore ? "auto" : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden"
      >
            <div className="flex flex-col gap-12 pt-12">
              {additionalDisclosures.map((item, index) => (
                <motion.div
                  key={`additional-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="w-full"
                >
                  <DisclosureItem item={item} />
                </motion.div>
              ))}
            </div>
      </motion.div>

      <div className="mt-12 flex justify-start">
        <button
          onClick={() => setShowMore(!showMore)}
          className="group flex items-center gap-2 text-base font-medium text-muted-foreground transition-colors hover:text-purple-400"
        >
          {showMore ? "Show less" : "Show more"}
          <ChevronDown className={`h-4 w-4 transition-transform ${showMore ? "rotate-180" : ""}`} />
        </button>
      </div>
    </section>
  );
}
