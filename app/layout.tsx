import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

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
  metadataBase: new URL("https://benzimmermann.dev"),
  title: "Ben Zimmermann - Security Researcher",
  description: "Security researcher specializing in bug bounty hunting and vulnerability disclosure.",
  openGraph: {
    title: "Ben Zimmermann - Security Researcher",
    description: "Security researcher specializing in bug bounty hunting and vulnerability disclosure.",
    url: "https://benzimmermann.dev",
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
    description: "Security researcher specializing in bug bounty hunting and vulnerability disclosure.",
    images: ["/images/seo.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#a855f7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head dangerouslySetInnerHTML={{
        __html: '<!-- ⠛⠕ ⠞⠕ ⠃⠑⠝⠵⠊⠍⠍⠑⠗⠍⠁⠝⠝⠲⠙⠑⠧⠌⠏⠕⠗⠞⠁⠇ -->'
      }} />
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
