import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center font-sans pt-32 sm:pt-40">
      <main className="flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-8xl font-bold tracking-tight sm:text-9xl">
            <AuroraText colors={["#c084fc", "#a855f7", "#e879f9", "#ffffff"]} speed={0.5}>
              404
            </AuroraText>
          </h1>

          <p className="text-xl font-medium text-zinc-400">
            Page not found
          </p>

          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            This page doesn&apos;t exist or has been moved. Let&apos;s get you back to safety.
          </p>

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
