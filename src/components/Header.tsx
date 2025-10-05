"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/tutorial", label: "Tutorial" },
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="brand-gradient absolute inset-0 opacity-60 -z-10" />
      <div className="backdrop-blur-xl border-b border-default/60 bg-background/60">
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold">
            <motion.span
              className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, rgba(255,90,246,1), rgba(93,135,255,1))",
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              🧠 GANPI
            </motion.span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-6 text-xs sm:text-sm">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-2 sm:px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/5"
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-500/30"
                      layoutId="activeTab"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 transition-colors duration-200 ${
                    isActive 
                      ? "text-transparent bg-clip-text font-semibold" 
                      : "text-muted hover:text-foreground"
                  }`} style={isActive ? {
                    backgroundImage: "linear-gradient(90deg, rgba(255,90,246,1), rgba(93,135,255,1))",
                  } : {}}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
