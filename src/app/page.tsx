"use client";

import { motion } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    question: "What exactly is Ghartha?",
    answer: "Ghartha is a comprehensive financial operating system designed for shared living in India. It centralizes rent tracking, utility bill splitting, PG fee management, and housing society dues into one unified platform."
  },
  {
    question: "How does the UPI mandate work?",
    answer: "Instead of constantly asking people to pay you back, you can set up a one-time UPI mandate. When you split a bill or issue a society maintenance charge, their share is automatically debited up to a limit they approve. No chasing, no awkward conversations."
  },
  {
    question: "Who is Ghartha built for?",
    answer: "It is built for anyone living in shared arrangements: flatmates splitting groceries, PG owners managing tenants, and RWA committees overseeing society maintenance. It scales from 3 people to 300 flats."
  },
  {
    question: "When will the platform be available?",
    answer: "We are currently in private beta, refining the core experience. Public access will be rolling out shortly. Stay tuned for our official launch announcement."
  },
  {
    question: "Will it be free to use?",
    answer: "The core tracking, splitting, and settlement features for individuals will be completely free. Premium features for advanced PG and Society management will have tailored pricing plans."
  }
];

export default function ComingSoon() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans relative overflow-hidden bg-sand selection:bg-terracotta selection:text-sand text-forest">
      
      {/* Editorial Grid Lines (Subtle background texture) */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(to right, #0F261F 1px, transparent 1px), linear-gradient(to bottom, #0F261F 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
      </div>

      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-6 py-10 flex justify-between items-center z-10 relative">
        <div className="flex items-center gap-3">
          <Image src="/icon.svg" alt="Ghartha Logo" width={32} height={32} className="w-8 h-8 rounded-sm" />
          <span className="font-display text-2xl font-bold tracking-wider uppercase text-forest">Ghartha</span>
        </div>
        <div className="text-sm font-medium tracking-widest uppercase border-b border-forest pb-1">
          Manifesto 01
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col z-10 relative px-6 py-12 md:py-24">
        <div className="w-full max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Left Column: Hero Copy */}
            <div className="lg:col-span-8 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex items-center gap-4"
              >
                <div className="h-[1px] w-12 bg-terracotta"></div>
                <span className="font-sans text-sm tracking-[0.2em] uppercase text-terracotta font-semibold">
                  Private Beta — Coming Soon
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="font-display text-5xl md:text-7xl lg:text-[7rem] font-medium leading-[0.95] tracking-tight text-forest"
              >
                Stop chasing <br />
                <span className="italic text-terracotta/90">flatmates, tenants,</span> <br />
                <span className="italic text-terracotta/90">&amp; residents</span> <br />
                for money.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-xl md:text-2xl text-forest/80 max-w-2xl leading-relaxed font-light"
              >
                Split bills automatically, track PG rent, and manage complete housing society dues—all from one unified platform.
              </motion.p>
            </div>

            {/* Right Column: Editorial Callout */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-forest/20 pt-8 lg:pt-0 lg:pl-10 flex flex-col justify-between h-full"
            >
              <div className="space-y-12">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-forest/50 mb-4">The Problem</h3>
                  <p className="font-display text-2xl leading-snug text-forest">
                    Finance apps ignore where you live. Society apps ignore your money. Splitwise doesn't know your UPI history.
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-forest/50 mb-4">The Solution</h3>
                  <p className="font-display text-2xl leading-snug text-forest">
                    The first financial operating system for Indians living independently.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="w-full max-w-7xl mx-auto mt-40"
        >
          <div className="border-t border-forest/20 mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            {[
              { 
                no: "01",
                title: "Split Instantly", 
                desc: "Scan, pay, and let the system automatically distribute costs among your flatmates." 
              },
              { 
                no: "02",
                title: "Automated via UPI", 
                desc: "Set up a UPI mandate once. Future splits and society dues automatically debit their share. No chasing." 
              },
              { 
                no: "03",
                title: "Complete Oversight", 
                desc: "From a 3-BHK flat to a 300-flat society. Manage deposits, monthly rent, and maintenance fees from a single dashboard." 
              }
            ].map((feature, i) => (
              <div key={i} className="group relative">
                <span className="text-terracotta font-sans text-sm font-bold tracking-widest mb-4 block">
                  {feature.no} //
                </span>
                <h3 className="font-display text-3xl font-medium mb-4 text-forest">{feature.title}</h3>
                <p className="text-forest/70 leading-relaxed font-light text-lg">{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <div className="w-full max-w-4xl mx-auto mt-48 mb-20">
          <div className="mb-12 flex items-baseline gap-4 border-b border-forest/20 pb-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-forest">Inquiries</h2>
            <span className="text-terracotta font-sans tracking-widest text-sm uppercase">FAQ</span>
          </div>
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="border-b border-forest/10"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-8 flex justify-between items-center text-left focus:outline-none group cursor-pointer"
                >
                  <span className="font-display text-2xl md:text-3xl font-medium text-forest/90 group-hover:text-terracotta transition-colors">
                    {faq.question}
                  </span>
                  <div className="ml-6 flex-shrink-0 text-forest/40 group-hover:text-terracotta transition-colors">
                    {openFaq === index ? <Minus size={28} strokeWidth={1.5} /> : <Plus size={28} strokeWidth={1.5} />}
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                    marginBottom: openFaq === index ? 32 : 0
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-forest/70 leading-relaxed pr-12 text-lg md:text-xl font-light">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-forest/20 mt-auto bg-parchment/30">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-2">
              <Image src="/icon.svg" alt="Ghartha Logo" width={24} height={24} className="w-6 h-6 rounded-sm grayscale opacity-80" />
              <span className="font-display text-xl font-bold tracking-widest uppercase text-forest">Ghartha</span>
            </div>
            <p className="text-forest/60 text-sm font-light">
              Your home. Your money. One place.
            </p>
            <p className="text-forest/50 text-xs mt-4">
              © {new Date().getFullYear()} Ghartha. All rights reserved.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:flex md:gap-16 gap-8">
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-forest/40">Contact</h4>
              <a href="mailto:ghartha.tech@gmail.com" className="text-forest/80 hover:text-terracotta transition-colors text-sm font-medium">ghartha.tech@gmail.com</a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-forest/40">Legal</h4>
              <Link href="/privacy-policy" className="text-forest/80 hover:text-terracotta transition-colors text-sm font-medium">Privacy Policy</Link>
              <Link href="/terms" className="text-forest/80 hover:text-terracotta transition-colors text-sm font-medium">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
