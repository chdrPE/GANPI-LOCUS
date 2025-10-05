"use client";

import { motion } from "framer-motion";

const faqData = [
  {
    category: "Getting Started",
    icon: "🚀",
    questions: [
      {
        question: "What is GANPI?",
        answer: "GANPI (Gemini-Assisted Natural Processing Interface) is a CLI tool that converts natural language into precise shell commands using Google's Gemini AI. It's designed to make terminal interactions more intuitive and accessible."
      },
      {
        question: "How do I install GANPI?",
        answer: "Download the latest release for your platform from our releases page. Extract the binary, add it to your PATH, and run 'ganpi setup' to configure your Gemini API key. The setup process takes less than 2 minutes."
      },
      {
        question: "Do I need a Gemini API key?",
        answer: "Yes, GANPI requires a Gemini API key to function. You can get one free from Google AI Studio. The free tier includes generous usage limits that should cover most personal use cases."
      }
    ]
  },
  {
    category: "Usage & Features",
    icon: "⚡",
    questions: [
      {
        question: "How does GANPI work?",
        answer: "Simply type your request in natural language, and GANPI uses Gemini AI to convert it into the appropriate shell command. It shows you a preview before execution and can require confirmation for safety."
      },
      {
        question: "What types of commands can GANPI generate?",
        answer: "GANPI can handle file operations, text processing, system administration, development tasks, network operations, and more. It understands context and can work with complex multi-step operations."
      },
      {
        question: "Can I use GANPI interactively?",
        answer: "Yes! GANPI has an interactive mode where you can have a conversation with your terminal. Just run 'ganpi chat' to start an interactive session that remembers context."
      },
      {
        question: "Does GANPI support command history?",
        answer: "Absolutely. GANPI maintains a history of your commands and can reference previous operations to provide better context-aware suggestions."
      }
    ]
  },
  {
    category: "Safety & Security",
    icon: "🔒",
    questions: [
      {
        question: "Is GANPI safe to use?",
        answer: "Yes, safety is our top priority. GANPI always shows you a preview of commands before execution, supports confirmation prompts, and includes built-in safety checks to prevent dangerous operations."
      },
      {
        question: "Can GANPI execute dangerous commands?",
        answer: "GANPI is designed to be cautious with potentially destructive operations. It will warn you about commands that could delete files, modify system settings, or affect network configurations."
      },
      {
        question: "What data does GANPI send to Gemini?",
        answer: "Only your natural language requests are sent to Gemini. Your actual file contents, system information, or personal data are never transmitted. Commands are generated locally based on the AI response."
      }
    ]
  },
  {
    category: "Platform & Compatibility",
    icon: "💻",
    questions: [
      {
        question: "Which platforms are supported?",
        answer: "GANPI supports macOS, Linux, and Windows (via WSL or compatible shells). We provide pre-built binaries for the most common architectures."
      },
      {
        question: "What shells are compatible?",
        answer: "GANPI works with bash, zsh, fish, and PowerShell. It automatically detects your shell and adapts command syntax accordingly."
      },
      {
        question: "Can I use GANPI in CI/CD pipelines?",
        answer: "Yes, GANPI can be integrated into automated workflows. Use the '--non-interactive' flag to disable prompts and ensure smooth automation."
      }
    ]
  },
  {
    category: "Troubleshooting",
    icon: "🔧",
    questions: [
      {
        question: "GANPI isn't generating the right commands. What should I do?",
        answer: "Try being more specific in your requests. Include context about your operating system, current directory, or specific tools you want to use. You can also use 'ganpi explain' to understand why a command was generated."
      },
      {
        question: "I'm getting API rate limit errors. How can I fix this?",
        answer: "Rate limits are usually temporary. Wait a few minutes and try again. For heavy usage, consider upgrading your Gemini API plan or using GANPI's caching features to reduce API calls."
      },
      {
        question: "The command preview looks wrong. Should I execute it?",
        answer: "Never execute commands you don't understand. Use 'ganpi explain' to get a detailed breakdown, or modify your request to be more specific about what you want to achieve."
      },
      {
        question: "How do I update GANPI?",
        answer: "Download the latest release and replace your current binary. Your configuration and history will be preserved. You can also use 'ganpi version' to check your current version."
      }
    ]
  }
];

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="hero-background">
        <div className="hero-grid" />
        <div className="brand-gradient absolute inset-0 opacity-70" />
      </div>

      {/* Content */}
      <section className="relative mx-auto max-w-6xl px-6 pt-28 pb-16 sm:pt-32 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted mb-6">
            <span className="select-none">Help</span>
            <span className="h-1 w-1 rounded-full" style={{ backgroundColor: "rgb(255 90 246)" }} />
            <span>Frequently Asked Questions</span>
          </div>

          <h1 className="text-4xl font-semibold sm:text-6xl tracking-tight mb-6">
            <span className="text-transparent bg-clip-text" style={{
              backgroundImage: "linear-gradient(90deg, rgba(255,90,246,1), rgba(93,135,255,1))",
            }}>FAQ</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Everything you need to know about GANPI. Can&apos;t find what you&apos;re looking for? 
            <a href="mailto:support@ganpi.dev" className="text-white hover:underline ml-1">Contact us</a>.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="rounded-2xl glass border-default p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h2 className="text-2xl font-semibold">{category.category}</h2>
              </div>
              
              <div className="space-y-6">
                {category.questions.map((faq, faqIndex) => (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: faqIndex * 0.05 }}
                    className="border-b border-default/30 pb-6 last:border-b-0 last:pb-0"
                  >
                    <h3 className="font-semibold text-lg mb-2 text-white/90">
                      {faq.question}
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl glass border-default p-8">
            <h2 className="text-2xl font-semibold mb-4">Still need help?</h2>
            <p className="text-muted mb-6 max-w-2xl mx-auto">
              Our community and support team are here to help you get the most out of GANPI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@ganpi.dev"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white border border-default hover:bg-white/5 transition-colors"
              >
                📧 Contact Support
              </a>
              <a
                href="https://github.com/ganpi/ganpi"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white border border-default hover:bg-white/5 transition-colors"
              >
                🐙 GitHub Issues
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

