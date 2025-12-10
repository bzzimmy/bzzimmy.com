"use client";

import Image from "next/image";

const stack = [
  {
    category: "Automation & Scripting",
    description: "Building custom scanners and automation tooling",
    tools: [
      { name: "Python", icon: "/images/python.png" },
      { name: "Bash", icon: "/images/bash.png" },
      { name: "C++", icon: "/images/cplusplus.png" },
    ],
  },
  {
    category: "Security Operations",
    description: "Network analysis, interception, and reverse engineering",
    tools: [
      { name: "Burp Suite", icon: "/images/burpsuite.png" },
      { name: "Wireshark", icon: "/images/wireshark.png" },
    ],
  },
  {
    category: "Platforms",
    description: "Where I deploy code and engage with the community",
    tools: [
      { name: "Discord", icon: "/images/discord.png", className: "scale-[1.7]" }, 
      { name: "GitHub", icon: "/images/github.png", className: "invert opacity-70 hover:opacity-100 scale-[1.7]" }, 
    ],
  },
];

export function StackSection() {
  return (
    <section id="stack" className="w-full max-w-2xl px-6 py-24 sm:py-32">
      <div className="mb-12 flex flex-col items-center text-center sm:items-start sm:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Tech Stack
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          The languages and tools I use to uncover vulnerabilities.
        </p>
      </div>

      <div className="flex flex-col">
        {stack.map((group, index) => (
          <div
            key={index}
            className={`group flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between ${
              index !== stack.length - 1 ? "border-b border-zinc-800" : ""
            }`}
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-purple-100 transition-colors">
                {group.category}
              </h3>
              <p className="text-sm text-muted-foreground">
                {group.description}
              </p>
            </div>

            <div className="flex items-center gap-6">
              {group.tools.map((tool, tIndex) => (
                <div 
                  key={tIndex} 
                  className="group/tool relative h-10 w-10 flex items-center justify-center"
                >
                  <div className={`relative h-full w-full ${tool.className || ""}`}>
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      fill
                      className="object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                    />
                  </div>
                  
                  {/* Custom Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900 px-2 py-1 text-xs font-medium text-zinc-200 opacity-0 shadow-lg ring-1 ring-zinc-800 transition-all duration-200 delay-500 group-hover/tool:-top-8 group-hover/tool:opacity-100">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
