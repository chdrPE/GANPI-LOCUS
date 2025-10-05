"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

const founders = [
  {
    name: "Cesar Villegas",
    role: "Hacker",
    quote: "Making technology accessible through natural language is the future of human-computer interaction.",
    image: "/founder-placeholder.jpg",
    instagram: "https://www.instagram.com/_cesar.vm_?igsh=bHJiYWkwcG13ZWpn&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/cesar-villegas-7657a9388/"
  },
  {
    name: "Rodrigo Fidel",
    role: "Hacker", 
    quote: "We're bridging the gap between human intent and machine execution, one command at a time.",
    image: "/founder-placeholder.jpg",
    instagram: "https://www.instagram.com/r_fidel_?igsh=MWcxZzNtanRtYTB3dA%3D%3D&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/rodrigo-fidel-b69468237/"
  },
  {
    name: "Raul Romero",
    role: "Hacker",
    quote: "The terminal should understand you as naturally as you speak to a colleague.",
    image: "/founder-placeholder.jpg",
    instagram: "https://www.instagram.com/raulsgc/",
    linkedin: "https://www.linkedin.com/in/raul-gomero-51579630a/"
  },
  {
    name: "Javier Deng",
    role: "Hacker",
    quote: "Building the future of AI-powered development tools, one line of code at a time.",
    image: "/founder-placeholder.jpg",
    instagram: "https://www.instagram.com/renovatedfromheaven",
    linkedin: "https://www.linkedin.com/in/javier-deng-65b000284"
  }
];


export default function Page() {
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
        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted mb-6">
            <span className="select-none">Vision</span>
            <span className="h-1 w-1 rounded-full" style={{ backgroundColor: "rgb(255 90 246)" }} />
            <span>Our Mission</span>
          </div>

          <h1 className="text-3xl font-semibold sm:text-4xl md:text-6xl tracking-tight mb-6">
            <span className="text-transparent bg-clip-text" style={{
              backgroundImage: "linear-gradient(90deg, rgba(255,90,246,1), rgba(93,135,255,1))",
            }}>Our Vision</span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-base sm:text-lg text-muted leading-relaxed px-4 sm:px-0">
              At GANPI, our vision is to make computers understand human language as naturally as we speak it. 
              We aim to bridge the gap between command-line tools and human intent — creating an AI-driven 
              terminal experience that empowers developers and everyday users alike.
            </p>
          </motion.div>
        </motion.div>

        {/* Founders Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 sm:mb-20"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              <span className="text-transparent bg-clip-text" style={{
                backgroundImage: "linear-gradient(90deg, rgba(255,90,246,1), rgba(93,135,255,1))",
              }}>Meet the Team</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              The passionate team behind GANPI, working to revolutionize how we interact with technology.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="rounded-2xl glass border-default p-6 hover:shadow-[0_10px_40px_rgba(93,135,255,0.15)] transition-all duration-300"
              >
                <div className="text-center flex flex-col h-full">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={`/${founder.name.toLowerCase().split(' ')[0]}.jpg`}
                      alt={founder.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{founder.name}</h3>
                  <p className="text-sm text-muted mb-4">{founder.role}</p>
                  <p className="text-sm text-muted italic leading-relaxed mb-4 flex-grow">
                    &ldquo;{founder.quote}&rdquo;
                  </p>
                  
                  {/* Social Media Links */}
                  <div className="flex justify-center items-center gap-4 mt-auto">
                    <motion.a
                      href={founder.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pink-500/20 hover:bg-pink-500/30 transition-colors"
                      title="Instagram"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span className="text-xs text-muted">Instagram</span>
                    </motion.a>
                    <motion.a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/20 hover:bg-blue-500/30 transition-colors"
                      title="LinkedIn"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span className="text-xs text-muted">LinkedIn</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Group Photo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16 sm:mb-20"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              <span className="text-transparent bg-clip-text" style={{
                backgroundImage: "linear-gradient(90deg, rgba(255,90,246,1), rgba(93,135,255,1))",
              }}>The GANPI Team</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Meet the passionate hackers behind GANPI, working together to revolutionize how we interact with technology.
            </p>
          </div>

          {/* Group Photo Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="max-w-4xl mx-auto rounded-2xl glass border-default overflow-hidden shadow-[0_10px_60px_rgba(0,0,0,0.35)]"
          >
            <div className="aspect-[16/10] relative">
              <Image
                src="/group-photo.jpg.jpg"
                alt="GANPI Team Group Photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Future Goals Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="rounded-2xl glass border-default p-6 sm:p-8"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              <span className="text-transparent bg-clip-text" style={{
                backgroundImage: "linear-gradient(90deg, rgba(255,90,246,1), rgba(93,135,255,1))",
              }}>Future Goals</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg text-muted leading-relaxed text-center">
              We&apos;re building toward a future where every developer can harness the full power of their terminal 
              through natural conversation. Our roadmap includes advanced context awareness, multi-language support, 
              seamless IDE integration, and a thriving open-source community. We envision GANPI becoming the 
              standard interface for human-AI collaboration in development workflows, making complex technical 
              tasks accessible to everyone while maintaining the precision and power that developers need.
            </p>
            
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: "🌍", title: "Global Community", desc: "Building a worldwide network of developers" },
                { icon: "🔧", title: "Advanced Features", desc: "IDE integration and enhanced AI capabilities" },
                { icon: "📚", title: "Education", desc: "Comprehensive tutorials and learning resources" },
                { icon: "🤝", title: "Open Source", desc: "Community-driven development and contributions" }
              ].map((goal, index) => (
                <motion.div
                  key={goal.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="text-2xl mb-2">{goal.icon}</div>
                  <h3 className="font-semibold text-sm mb-1">{goal.title}</h3>
                  <p className="text-xs text-muted">{goal.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

