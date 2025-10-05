"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { downloadUrl } from "@/lib/config";
import TypingAnimation from "@/components/TypingAnimation";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const features = [
  {
    title: "Natural Language Processing",
    desc: "Convert English instructions into precise shell commands.",
    icon: "🧠",
  },
  { title: "Safety First", desc: "Built-in checks and confirmations.", icon: "🔒" },
  { title: "Fast Execution", desc: "C++ performance with AI smarts.", icon: "🚀" },
  { title: "Interactive Mode", desc: "Chat with your terminal in real-time.", icon: "🔄" },
  { title: "Command Preview", desc: "See what runs before it runs.", icon: "📝" },
  { title: "Easy Setup", desc: "Configure your API key in minutes.", icon: "⚙️" },
];

// Simple typing animation component for the title
function TypingTitle({ text, speed = 100, delay = 0 }: { text: string; speed?: number; delay?: number }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay + speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, delay]);

  return (
    <span className="text-transparent bg-clip-text" style={{
      backgroundImage: "linear-gradient(90deg, rgba(255,90,246,1), rgba(93,135,255,1))",
    }}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Home() {
  const href = downloadUrl ?? "#";
  const pathname = usePathname();

  return (
    <main className="relative min-h-screen overflow-hidden" key={pathname}>
      {/* Background */}
      <div className="hero-background">
        <div className="hero-grid" />
        <div className="brand-gradient absolute inset-0 opacity-70" />
      </div>

      {/* Content */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-24 pb-12 sm:pt-32 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted">
            <span className="select-none">New</span>
            <span className="h-1 w-1 rounded-full" style={{ backgroundColor: "rgb(255 90 246)" }} />
            <span>Gemini‑powered CLI</span>
          </div>

          <h1 className="mt-6 text-pretty text-3xl font-semibold sm:text-4xl md:text-6xl tracking-tight">
            <span className="align-middle mr-2">🧠</span>
            <TypingTitle 
              text="Gemini‑Assisted Natural Processing Interface" 
              speed={5} 
              delay={100} 
            />
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted max-w-2xl mx-auto px-4 sm:px-0">
            Talk to your terminal like a human. GANPI converts natural language into safe, precise shell commands — with previews before execution.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 px-4 sm:px-0">
            <Link
              href={href}
              className="button-shine inline-flex items-center justify-center rounded-full px-8 py-3 text-sm sm:text-base font-bold text-white w-full sm:w-auto"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(255,90,246,1), rgba(93,135,255,1))",
              }}
              aria-disabled={!downloadUrl}
              prefetch={false}
            >
              Download GANPI
            </Link>
          </div>
          {!downloadUrl && (
            <p className="mt-2 text-xs text-muted">
              Set NEXT_PUBLIC_DOWNLOAD_URL to enable the download button.
            </p>
          )}
        </motion.div>

        {/* Animated examples carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mx-auto mt-12 w-full max-w-3xl rounded-2xl glass border-default shadow-[0_10px_60px_rgba(0,0,0,0.35)] mx-4 sm:mx-auto"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-default/70">
            <div className="flex items-center gap-1.5">
              <span className="size-3 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
              <span className="size-3 rounded-full" style={{ backgroundColor: "#febc2e" }} />
              <span className="size-3 rounded-full" style={{ backgroundColor: "#28c840" }} />
            </div>
            <span className="text-xs text-muted">GANPI – Terminal</span>
          </div>
          <TypingAnimation />
        </motion.div>

        {/* Features */}
        <section id="learn-more" className="mt-16 sm:mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
          {features.map((f, index) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="rounded-2xl bg-card border border-default p-5 hover:shadow-[0_10px_40px_rgba(93,135,255,0.15)] transition-shadow"
            >
              <div className="text-2xl">{f.icon}</div>
              <h3 className="mt-3 font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted">{f.desc}</p>
            </motion.div>
          ))}
        </section>
      </section>

      <footer className="relative border-t border-default/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 text-sm text-muted flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
          <span>© {new Date().getFullYear()} GANPI</span>
          <span>
            Built with Next.js • Colors: Purple, Blue, White
          </span>
        </div>
      </footer>
    </main>
  );
}
