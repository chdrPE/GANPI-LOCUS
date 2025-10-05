"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EXAMPLES = [
  {
    prompt: "ganpi \"Find the 10 largest files in the current folder\"",
    command: "du -ah . | sort -rh | head -n 10",
  },
  {
    prompt: "ganpi \"Search recursively for 'TODO' in src and show line numbers\"",
    command: "rg -n \"TODO\" src",
  },
  {
    prompt: "ganpi \"Create and activate a Python venv named .venv\"",
    command: "python3 -m venv .venv && source .venv/bin/activate",
  },
  {
    prompt: "ganpi \"Compress the current folder to archive.tar.gz excluding node_modules\"",
    command: "tar --exclude='node_modules' -czf archive.tar.gz .",
  },
  {
    prompt: "ganpi \"Start a simple HTTP server on port 8080\"",
    command: "python3 -m http.server 8080",
  },
  {
    prompt: "ganpi \"Kill process listening on port 3000\"",
    command: "lsof -ti tcp:3000 | xargs kill -9",
  },
  {
    prompt: "ganpi \"Count lines of JS/TS code and show top 10\"",
    command: "find . -name '*.js' -o -name '*.ts' -o -name '*.tsx' | xargs wc -l | sort -nr | head",
  },
];

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

function TypingText({ text, speed = 50, delay = 0, onComplete }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay + speed);

      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, text, speed, delay, isComplete, onComplete]);

  return (
    <span>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-4 bg-white/90 ml-0.5"
      />
    </span>
  );
}

export default function TypingAnimation() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [promptComplete, setPromptComplete] = useState(false);
  
  const current = useMemo(() => EXAMPLES[index % EXAMPLES.length], [index]);

  useEffect(() => {
    // Ensure animation starts after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Reset states when example changes
    setPromptComplete(false);
  }, [index, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const cycle = () => {
      setIndex(prev => (prev + 1) % EXAMPLES.length);
    };

    // Start the cycle after a delay to allow current example to complete
    const timeout = setTimeout(cycle, 6000);
    return () => clearTimeout(timeout);
  }, [isVisible, index]);

  if (!isVisible) {
    return (
      <div className="px-5 py-4 font-mono text-sm/6 min-h-[112px] flex items-center justify-center">
        <div className="text-muted">Loading...</div>
      </div>
    );
  }

  return (
    <div className="px-5 py-4 font-mono text-sm/6 min-h-[112px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
        >
          <div className="text-muted">You:</div>
          <div className="truncate">
            $ {!promptComplete ? (
              <TypingText 
                text={current.prompt} 
                speed={20}
                onComplete={() => {
                  setPromptComplete(true);
                }}
              />
            ) : (
              current.prompt
            )}
          </div>
          <div className="mt-3 text-muted">Code preview:</div>
          <div className="text-white/90 break-words">
            <TypingText 
              text={promptComplete ? current.command : ""} 
              speed={3}
              delay={promptComplete ? 100 : 0}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
