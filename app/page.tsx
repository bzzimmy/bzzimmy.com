import { Github, Linkedin, Mail } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-center font-sans pt-32 sm:pt-40">
      <main className="flex w-full max-w-2xl flex-col items-center justify-center gap-8 px-6 text-center sm:text-left">
        
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
              <AuroraText colors={["#c084fc", "#a855f7", "#e879f9", "#ffffff"]} speed={0.5}>
                Ben Zimmermann
              </AuroraText>
            </h1>
            <h2 className="text-xl font-medium text-zinc-400 sm:text-2xl">
              Security Researcher
            </h2>
          </div>
          
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground mt-2">
            Hey, I'm Ben. I'm a 16-year-old security researcher from California. 
            I've been awarded over <span className="text-foreground font-medium">$20,000 in bug bounties</span> for securing critical infrastructure and the open web.
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/bzzimmy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border bg-background/50 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/bzzimmy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border bg-background/50 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:kernelrocks@proton.me"
              className="flex items-center gap-2 rounded-lg border border-border bg-background/50 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}
