"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { IconType } from "react-icons";
import {
  SiPython,
  SiGnubash,
  SiCplusplus,
  SiBurpsuite,
  SiWireshark,
  SiDiscord,
  SiGithub,
} from "react-icons/si";

const BLUR_FADE_DELAY = 0.04;

type Tool = {
  name: string;
  icon: IconType;
};

const stack: Array<{
  category: string;
  description: string;
  tools: Tool[];
}> = [
  {
    category: "Automation & Scripting",
    description: "Building custom scanners and automation tooling",
    tools: [
      { name: "Python", icon: SiPython },
      { name: "Bash", icon: SiGnubash },
      { name: "C++", icon: SiCplusplus },
    ],
  },
  {
    category: "Security Operations",
    description: "Network analysis, interception, and reverse engineering",
    tools: [
      { name: "Burp Suite", icon: SiBurpsuite },
      { name: "Wireshark", icon: SiWireshark },
    ],
  },
  {
    category: "Platforms",
    description: "Where I deploy code and engage with the community",
    tools: [
      { name: "Discord", icon: SiDiscord },
      { name: "GitHub", icon: SiGithub },
    ],
  },
];

export function StackSection() {
  return (
    <section id="stack" className="w-full max-w-2xl px-6 py-24 sm:py-32">
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <div className="mb-12 flex flex-col items-center text-center sm:items-start sm:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tech Stack
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The languages and tools I use to uncover vulnerabilities.
          </p>
        </div>
      </BlurFade>

      <div className="flex flex-col">
        {stack.map((group, index) => (
          <BlurFade key={index} delay={BLUR_FADE_DELAY * 12 + index * 0.1}>
            <div
              className={`group flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between ${
                index !== stack.length - 1 ? "border-b border-zinc-800" : ""
              }`}
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-foreground transition-colors">
                  {group.category}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {group.description}
                </p>
              </div>

              <div className="flex items-center gap-6 flex-wrap">
                {group.tools.map((tool, tIndex) => (
                  <div
                    key={tIndex}
                    className="h-9 w-9 flex items-center justify-center"
                  >
                    <tool.icon className="h-full w-full text-zinc-400" />
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
