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
  metadataBase: new URL("https://bzzimmy.vercel.app"),
  title: "Ben Zimmermann - Security Researcher",
  description: "16-year-old security researcher specializing in bug bounty hunting and vulnerability disclosure. $20K GitHub bounty recipient.",
  themeColor: "#a855f7",
  openGraph: {
    title: "Ben Zimmermann - Security Researcher",
    description: "16-year-old security researcher specializing in bug bounty hunting and vulnerability disclosure. $20K GitHub bounty recipient.",
    url: "https://bzzimmy.vercel.app",
    siteName: "Ben Zimmermann",
    images: [
      {
        url: "/images/seo.jpg",
        width: 1200,
        height: 630,
        alt: "Ben Zimmermann - Security Researcher",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ben Zimmermann - Security Researcher",
    description: "16-year-old security researcher specializing in bug bounty hunting and vulnerability disclosure. $20K GitHub bounty recipient.",
    images: ["/images/seo.jpg"],
  },
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
