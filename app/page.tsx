import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <Image
          className="invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">
            Dark Theme Preview
          </h1>
          <p className="max-w-md text-lg leading-8 text-muted-foreground">
            This is the dark theme with{" "}
            <span className="font-medium bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">
              purple to white gradient text
            </span>{" "}
            and{" "}
            <span className="font-medium bg-gradient-to-r from-purple-600 via-purple-400 to-white bg-clip-text text-transparent">
              solid purple buttons
            </span>{" "}
            for Ben's portfolio.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-primary-foreground transition-colors hover:opacity-90 md:w-[158px]"
            href="#"
          >
            Primary Button
          </a>
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-5 text-accent-foreground transition-colors hover:opacity-90 md:w-[158px]"
            href="#"
          >
            Accent Button
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-border px-5 text-foreground transition-colors hover:bg-card md:w-[158px]"
            href="#"
          >
            Outline Button
          </a>
        </div>
      </main>
    </div>
  );
}
