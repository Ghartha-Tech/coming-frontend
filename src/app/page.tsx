"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "What exactly is Ghartha?",
    answer: "Ghartha is a comprehensive financial operating system designed for shared living in India. It centralizes rent tracking, utility bill splitting, PG fee management, and everyday shared expenses into one unified platform."
  },
  {
    question: "Who is Ghartha built for?",
    answer: "It is built for anyone living in shared arrangements: flatmates, PG residents, society members, and property managers who want a transparent, zero-friction way to handle collective finances."
  },
  {
    question: "When will the platform be available?",
    answer: "We are currently in private beta, refining the core experience. Public access will be rolling out shortly. Stay tuned for our official launch announcement."
  },
  {
    question: "Will it be free to use?",
    answer: "The core tracking, splitting, and settlement features will be completely free for users. We believe basic financial transparency should not be behind a paywall."
  }
];

export default function ComingSoon() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans relative overflow-hidden selection:bg-terracotta selection:text-sand">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-forest blur-[120px] opacity-10" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-terracotta blur-[150px] opacity-10" />
      </div>

      {/* Header */}
      <header className="w-full max-w-6xl mx-auto px-6 py-8 flex justify-between items-center z-10 relative">
        <div className="flex items-center gap-3">
          <Image src="/icon.svg" alt="Ghartha Logo" width={32} height={32} className="w-8 h-8 rounded-md" />
          <span className="font-display text-2xl font-semibold tracking-wide text-forest">Ghartha</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center z-10 relative px-6 py-20">
        <div className="w-full max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-forest/20 rounded-full bg-forest/5 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
            <span className="text-sm font-medium tracking-widest uppercase text-forest/80">Coming Soon</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight text-forest"
          >
            Your Home, <br className="hidden md:block" /> Your Money. <br className="hidden md:block" /> <span className="italic text-terracotta">One Place.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-forest/70 max-w-2xl mx-auto leading-relaxed"
          >
            The comprehensive financial operating system for shared living. Track UPI spends, split bills seamlessly, and manage PG or society expenses without the usual friction.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="w-full max-w-6xl mx-auto mt-32 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { title: "Split Instantly", desc: "Scan, pay, and let the system automatically distribute costs among your flatmates." },
            { title: "Zero Friction", desc: "No more awkward conversations or forgotten debts. Everything is logged transparently." },
            { title: "Complete Oversight", desc: "Manage deposits, monthly rent, and maintenance fees from a single, unified dashboard." }
          ].map((feature, i) => (
            <div key={i} className="group p-8 rounded-2xl border border-forest/10 hover:border-terracotta/30 transition-colors duration-300 bg-sand/50 backdrop-blur-sm">
              <h3 className="font-display text-2xl font-medium mb-3 text-forest group-hover:text-terracotta transition-colors">{feature.title}</h3>
              <p className="text-forest/70 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <div className="w-full max-w-3xl mx-auto mt-40">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-forest">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="border-b border-forest/10 last:border-0"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-6 flex justify-between items-center text-left focus:outline-none group cursor-pointer"
                >
                  <span className="font-display text-xl md:text-2xl font-medium text-forest group-hover:text-terracotta transition-colors">
                    {faq.question}
                  </span>
                  <div className="ml-4 flex-shrink-0 text-forest/50 group-hover:text-terracotta transition-colors">
                    {openFaq === index ? <Minus size={24} /> : <Plus size={24} />}
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                    marginBottom: openFaq === index ? 24 : 0
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-forest/70 leading-relaxed pr-12 text-lg">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-forest/10 mt-20 z-10 relative bg-sand/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Image src="/icon.svg" alt="Ghartha Logo" width={24} height={24} className="w-6 h-6 rounded" />
            <span className="font-display text-xl font-medium text-forest">Ghartha</span>
          </div>
          <p className="text-forest/60 text-sm">
            © {new Date().getFullYear()} Ghartha. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-forest/60 hover:text-terracotta transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-forest/60 hover:text-terracotta transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
