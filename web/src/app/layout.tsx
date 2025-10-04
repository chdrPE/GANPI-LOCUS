import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GANPI – Gemini-Assisted Natural Processing Interface",
  description:
    "Talk to your terminal like a human. GANPI turns natural language into precise shell commands using Google’s Gemini AI.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "GANPI – Talk to your terminal like a human",
    description:
      "Convert plain English into safe, precise shell commands. Preview before running. C++ fast. Gemini smart.",
    url: "https://example.com",
    siteName: "GANPI",
  },
  twitter: {
    card: "summary_large_image",
    title: "GANPI – Talk to your terminal like a human",
    description:
      "Convert plain English into safe, precise shell commands. Preview before running.",
  },
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-background text-foreground`}
      >
        <header className="sticky top-0 z-50 w-full">
          <div className="brand-gradient absolute inset-0 opacity-60 -z-10" />
          <div className="backdrop-blur-xl border-b border-default/60 bg-background/60">
            <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
              <Link href="/" className="font-semibold">
                GANPI
              </Link>
              <div className="flex items-center gap-6 text-sm">
                <Link href="/" className="hover:opacity-80 transition-opacity">Home</Link>
                <Link href="/tutorial" className="hover:opacity-80 transition-opacity">Tutorial</Link>
                <Link href="/faq" className="hover:opacity-80 transition-opacity">FAQ</Link>
                <Link href="/about" className="hover:opacity-80 transition-opacity">About Us</Link>
              </div>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
