"use client";

import { motion } from "framer-motion";

export default function TutorialContent() {
  return (
    <main className="relative min-h-[60vh] overflow-hidden">
      {/* Background */}
      <div className="hero-background">
        <div className="hero-grid" />
        <div className="brand-gradient absolute inset-0 opacity-70" />
      </div>

      <section className="relative mx-auto max-w-4xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-3xl font-semibold">
            <span className="text-transparent bg-clip-text" style={{
              backgroundImage: "linear-gradient(90deg, rgba(255,90,246,1), rgba(93,135,255,1))",
            }}>Tutorial</span>
          </h1>
          <p className="mt-3 text-muted">
            Learn how to install, configure, and use GANPI effectively with our step-by-step video guide.
          </p>
        </motion.div>
        
        {/* YouTube Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-8 rounded-2xl glass border-default overflow-hidden shadow-[0_10px_60px_rgba(0,0,0,0.35)]"
        >
          <div className="aspect-video bg-card flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
            <div className="text-center relative z-10">
              <motion.div 
                className="text-6xl mb-4"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                📺
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text" style={{
                backgroundImage: "linear-gradient(90deg, rgba(255,90,246,1), rgba(93,135,255,1))",
              }}>
                GANPI Tutorial Video
              </h3>
              <p className="text-muted text-sm">
                YouTube video will be embedded here
              </p>
              <motion.div 
                className="mt-4 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs text-muted"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span 
                  className="h-2 w-2 rounded-full bg-red-500"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span>Coming Soon</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </section>
    </main>
  );
}
