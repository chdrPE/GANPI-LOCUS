import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
