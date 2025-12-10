import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { FluidBackground } from "@/components/ui/fluid-background";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ben Zimmermann - Security Researcher",
  description: "16-year-old security researcher specializing in bug bounty hunting and vulnerability disclosure. $20K GitHub bounty recipient.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <FluidBackground />
        {children}
      </body>
    </html>
  );
}
