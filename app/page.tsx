import { Github, Linkedin, Mail } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";
import { ResearchSection } from "@/components/research-section";
import { ProjectsSection } from "@/components/projects-section";
import { StackSection } from "@/components/stack-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center font-sans pt-32 sm:pt-40">
      <main className="flex w-full max-w-2xl flex-col items-center justify-center gap-8 px-6 text-center sm:text-left">
        
        {/* Hero Section */}
        <div className="flex w-full flex-col items-center gap-4 sm:items-start">
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

          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/bzzimmy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl rounded-tr-none rounded-bl-none border border-border bg-background/50 px-5 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground hover:rounded-bl-xl hover:rounded-tr-xl hover:rounded-tl-none hover:rounded-br-none"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/bzzimmy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl rounded-tr-none rounded-bl-none border border-border bg-background/50 px-5 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground hover:rounded-bl-xl hover:rounded-tr-xl hover:rounded-tl-none hover:rounded-br-none"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:kernelrocks@proton.me"
              className="flex items-center gap-2 rounded-xl rounded-tr-none rounded-bl-none border border-border bg-background/50 px-5 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground hover:rounded-bl-xl hover:rounded-tr-xl hover:rounded-tl-none hover:rounded-br-none"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </a>
          </div>

          {/* In-Page Navigation */}
          <nav className="mt-12 flex items-center gap-6 sm:gap-8">
            <a
              href="#research"
              className="group flex items-center gap-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="h-2 w-2 rounded-full bg-zinc-700 transition-all group-hover:bg-purple-500 group-hover:shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
              Research
            </a>

            <span className="text-zinc-700 select-none">/</span>

            <a
              href="#stack"
              className="group flex items-center gap-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="h-2 w-2 rounded-full bg-zinc-700 transition-all group-hover:bg-purple-500 group-hover:shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
              Tech Stack
            </a>

            <span className="text-zinc-700 select-none">/</span>

            <a
              href="#projects"
              className="group flex items-center gap-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="h-2 w-2 rounded-full bg-zinc-700 transition-all group-hover:bg-purple-500 group-hover:shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
              Projects
            </a>
          </nav>
        </div>

      </main>
      
      <ResearchSection />
      <StackSection />
      <ProjectsSection />
      <Footer />
      
    </div>
  );
}
