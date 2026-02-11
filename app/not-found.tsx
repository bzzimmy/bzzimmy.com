import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/footer";

const asciiArt = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠷⠛⠿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣷⠼⠶⠳⠾⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣏⣤⣄⣶⡤⢤⣹⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠏⠁⠉⠁⡀⠀⡈⠛⠹⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡟⠓⠚⠓⠘⠋⠘⠛⠙⠓⢿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⠤⣴⢦⡦⠄⠾⠇⢸⡷⣤⣤⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡾⠗⠾⢋⣀⡀⠀⣤⡄⢀⣀⣀⣉⠈⢳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡿⠗⠈⣭⣄⣀⣤⣤⣤⣄⠀⣤⣙⡛⠻⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣯⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⡟⠛⠻⡟⠋⠉⠉⠉⢉⣽⡿⠛⠻⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣟⠻⠷⡆⢀⣀⣀⣀⣤⣤⣾⣁⣀⣀⡴⠋⣈⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣟⣿⢿⣋⣻⠿⠚⠛⠉⠁⠀⠤⠀⠺⠦⠬⣽⣿⣦⣾⡋⠀⠹⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣷⡾⠋⠁⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⡀⠀⠉⢙⠻⣿⣷⣤⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⠃⠀⠀⢀⣠⣤⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣝⠾⣝⠿⣿⠿⡄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⣾⡿⠀⢁⣠⣴⣿⡟⣿⣽⢻⡇⠀⢰⣿⣿⣿⣿⢸⡿⢹⢻⣿⣿⣿⡶⣾⣿⣳⡄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⡞⠉⣣⣶⣿⣿⣯⢻⡇⢹⣷⣟⢷⣦⣬⣽⣿⣿⢏⣿⢇⡏⠘⠋⢻⣿⣿⣿⣿⠹⣿⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣾⠛⠛⢿⣿⣿⡿⡜⡄⢻⡌⠻⣝⠃⢉⠛⠛⠋⣵⣿⣫⠟⢰⡆⢀⣾⣿⣿⣯⡿⢿⣆⢳⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣼⣅⠈⢻⠶⠆⠀⠉⠳⣽⠄⠙⠦⠈⠓⠾⠦⠽⠿⠷⠋⠁⠀⠏⠀⠘⢛⣿⣵⣿⠿⣶⡌⠛⢷⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣼⣥⣿⣏⡋⠀⠦⠀⣀⡀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣤⡴⣺⣿⣷⠻⠿⠆⠋⣈⣳⣬⣧⠀⠀⠀⠀
⠀⠀⠀⢰⣉⣹⣯⠉⠙⠒⢠⣀⠈⠁⠀⠀⠈⠛⠓⠒⠒⠒⠒⠛⠛⠉⠩⣥⢾⣻⣥⣬⡿⠄⠀⠒⢾⡉⢀⣉⣹⣧⠀⠀⠀
⠀⠀⢰⢻⣧⣉⠉⢻⣿⠦⢤⣉⣈⠉⠛⠒⠲⠶⠶⠶⣶⠶⣶⠶⠶⠶⣾⣛⣛⣙⣽⣿⡷⠴⠶⠲⡟⠉⠻⣧⡀⠘⣇⠀⠀
⠀⢠⣿⡙⠛⠛⣿⣿⢦⡀⠀⣈⡉⠀⠉⢻⡟⠛⠶⠶⠟⠿⢾⡿⠚⡛⠛⢛⣋⠉⣠⣤⠀⣤⡦⠼⠿⠶⣿⡛⢿⢻⣿⣆⠀
⠠⣿⣬⣽⣿⣴⣿⣯⣬⣤⣤⣽⣿⣦⣤⣴⣥⣤⣧⣦⣴⣴⣿⣷⣤⣯⣤⣾⣿⣦⣿⣧⣤⣥⣴⣤⣤⣤⣤⣽⣿⣿⣿⣿⡆`;

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center font-sans">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="flex flex-col items-center gap-6">
          <pre className="text-[0.45rem] leading-[0.5rem] sm:text-[0.55rem] sm:leading-[0.6rem] md:text-xs md:leading-[0.75rem] text-zinc-400 select-none" aria-hidden="true">
            {asciiArt}
          </pre>

          <h1 className="font-mono text-lg tracking-widest uppercase text-zinc-400 sm:text-xl">
            page not found
          </h1>

          <Link
            href="/"
            className="group mt-4 flex items-center gap-2 rounded-xl rounded-tr-none rounded-bl-none border border-border bg-background/50 px-5 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground hover:rounded-bl-xl hover:rounded-tr-xl hover:rounded-tl-none hover:rounded-br-none"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            <span>Back to home</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
