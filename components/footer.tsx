"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export function Footer() {
  return (
    <footer className="w-full max-w-2xl px-6 py-12 mx-auto">
      <BlurFade delay={BLUR_FADE_DELAY * 18}>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row border-t border-zinc-800 pt-12">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <span className="text-sm font-medium text-foreground">
              © 2025 Ben Zimmermann
            </span>
            <span className="text-xs text-muted-foreground font-mono">
              Cogito, ergo sum
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/bzzimmy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/benzimm/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:kernelrocks@proton.me"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </BlurFade>
    </footer>
  );
}
