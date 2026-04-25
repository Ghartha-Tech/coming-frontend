"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    question: "What exactly is Ghartha?",
    answer: "Ghartha is a comprehensive financial operating system designed for shared living in India. It centralizes rent tracking, utility bill splitting, PG fee management, and housing society dues into one unified platform."
  },
  {
    question: "How do automated mandates work?",
    answer: "Instead of constantly asking people to pay you back, you can set up a one-time payment mandate. When you split a bill or issue a society maintenance charge, their share is automatically debited up to a limit they approve. No chasing, no awkward conversations."
  },
  {
    question: "Do I need to switch my bank account?",
    answer: "Not at all. Ghartha is completely bank-agnostic. It connects securely to the bank accounts you already use to provide real-time transaction tracking and predictive cash flow insights without requiring you to switch providers."
  },
  {
    question: "Who is Ghartha built for?",
    answer: "It is built for anyone living in shared arrangements: flatmates splitting groceries, PG owners managing tenants, and RWA committees overseeing society maintenance. The system is designed to scale with you from a 3-person flat to a 300-flat society."
  },
  {
    question: "Is my financial data secure?",
    answer: "Absolutely. We operate on a strict privacy-first architecture in full compliance with India's digital data protection laws. We never store raw bank credentials, and your residential data is completely isolated from any advertising networks."
  }
];

export default function ComingSoon() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col font-sans relative overflow-hidden bg-sand selection:bg-terracotta selection:text-sand text-forest">
      
      {/* Editorial Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]" 
           style={{ backgroundImage: 'linear-gradient(to right, #0F261F 1px, transparent 1px), linear-gradient(to bottom, #0F261F 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
      </div>

      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-[90rem] mx-auto px-6 py-10 flex justify-between items-center z-20 relative"
      >
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="overflow-hidden rounded-sm w-8 h-8 relative">
            <Image src="/icon.svg" alt="Ghartha Logo" fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
          </div>
          <span className="font-display text-2xl font-bold tracking-widest uppercase text-forest">Ghartha</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-medium tracking-widest uppercase border-b border-forest pb-1 hover:text-terracotta hover:border-terracotta transition-colors cursor-default">
            Manifesto 01
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col z-10 relative">
        <div className="w-full max-w-[90rem] mx-auto px-6 pt-12 md:pt-20 pb-32">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start relative">
            
            {/* Left Column: Hero Copy */}
            <motion.div style={{ y: yParallax }} className="lg:col-span-8 space-y-14 z-10">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-6"
              >
                <div className="h-px w-16 bg-terracotta origin-left"></div>
                <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-terracotta font-bold">
                  Private Beta — Coming Soon
                </span>
              </motion.div>

              <div className="relative">
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-6xl md:text-[6.5rem] lg:text-[8rem] font-medium leading-[0.9] tracking-tight text-forest"
                >
                  Stop chasing <br />
                  <span className="italic font-light text-terracotta/90 relative inline-block group">
                    flatmates,
                    <span className="absolute -bottom-2 left-0 w-full h-px bg-terracotta/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
                  </span> <br />
                  <span className="italic font-light text-terracotta/90">tenants,</span> &amp; <br />
                  <span className="italic font-light text-terracotta/90">residents</span> <br />
                  <span className="text-forest/80">for money.</span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl md:text-2xl text-forest/70 max-w-2xl leading-relaxed font-light"
              >
                The financial operating system for shared living. Connect your existing bank accounts, automate expense splits via secure payment mandates, and track property dues—all from one unified ledger.
              </motion.p>
            </motion.div>

            {/* Right Column: Editorial Callout */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 border-l border-forest/10 pl-8 lg:pl-12 flex flex-col justify-between h-full relative"
            >
              <div className="space-y-16 mt-4 lg:mt-0">
                <div className="relative group">
                  <div className="absolute -left-12 top-0 h-full w-[2px] bg-terracotta scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                  <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-forest/40 mb-6 flex items-center gap-2">
                    <span className="w-4 h-px bg-forest/20"></span> The Core Problem
                  </h3>
                  <p className="font-display text-2xl md:text-3xl leading-snug text-forest/90">
                    Finance apps ignore where you live. Society apps ignore your money. Expense apps don&apos;t connect to your real bank history.
                  </p>
                </div>
                <div className="relative group">
                  <div className="absolute -left-12 top-0 h-full w-[2px] bg-terracotta scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                  <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-forest/40 mb-6 flex items-center gap-2">
                    <span className="w-4 h-px bg-forest/20"></span> The Lifecycle
                  </h3>
                  <p className="font-display text-2xl md:text-3xl leading-snug text-forest/90">
                    Built to scale with you. From a PG room, to a rented flat, to owning a home in a society.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Marquee Divider */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full border-y border-forest/10 bg-forest/5 py-4 overflow-hidden flex whitespace-nowrap"
        >
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-8 items-center"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="font-display text-2xl italic text-forest/40 tracking-widest uppercase flex items-center gap-8">
                Rent <span className="w-2 h-2 rounded-full bg-terracotta/30"></span> 
                Bills <span className="w-2 h-2 rounded-full bg-terracotta/30"></span> 
                Mandates <span className="w-2 h-2 rounded-full bg-terracotta/30"></span> 
                Society Dues <span className="w-2 h-2 rounded-full bg-terracotta/30"></span>
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Engineering & Capabilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[90rem] mx-auto px-6 py-32"
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="font-display text-5xl md:text-6xl font-medium text-forest leading-tight">
              Engineered for Scale.<br/>
              <span className="italic text-forest/50">Designed for Humans.</span>
            </h2>
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-terracotta max-w-[200px] text-right">
              System Intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 border-t border-forest/20 pt-16">
            {[
              { 
                no: "01",
                title: "Automated Payment Infrastructure", 
                desc: "Set a secure payment limit once, and future splits automatically debit. Zero manual chasing, mathematically verified ledger balancing." 
              },
              { 
                no: "02",
                title: "Bank-Agnostic Connectivity", 
                desc: "No need to switch banks. We securely aggregate your existing financial data to provide predictive cash flow, subscription tracking, and real-time anomaly alerts." 
              },
              { 
                no: "03",
                title: "Privacy-First Architecture", 
                desc: "Built on high-performance frameworks with granular row-level security. Your residential data is isolated, encrypted, and strictly compliant with national data protection laws." 
              }
            ].map((feature, i) => (
              <div key={i} className="group relative pr-8">
                <span className="text-terracotta font-sans text-xs font-bold tracking-[0.2em] mb-6 block border-b border-forest/10 pb-4">
                  CAPABILITY {feature.no}
                </span>
                <h3 className="font-display text-3xl font-medium mb-6 text-forest group-hover:text-terracotta transition-colors duration-300">{feature.title}</h3>
                <p className="text-forest/70 leading-relaxed font-light text-lg">{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <div className="w-full max-w-4xl mx-auto px-6 py-20 mb-20">
          <div className="mb-16 flex items-baseline gap-6 border-b border-forest/20 pb-8">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-forest">Inquiries</h2>
            <span className="text-terracotta font-sans tracking-[0.2em] text-xs font-bold uppercase">System FAQ</span>
          </div>
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-forest/10"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-10 flex justify-between items-center text-left focus:outline-none group cursor-pointer"
                >
                  <span className="font-display text-2xl md:text-3xl font-medium text-forest/90 group-hover:text-terracotta transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div className="ml-6 flex-shrink-0 text-forest/30 group-hover:text-terracotta transition-colors duration-300 relative">
                    <div className={`transition-transform duration-500 ${openFaq === index ? "rotate-180 opacity-0" : "rotate-0 opacity-100"} absolute inset-0`}>
                      <Plus size={28} strokeWidth={1} />
                    </div>
                    <div className={`transition-transform duration-500 ${openFaq === index ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"}`}>
                      <Minus size={28} strokeWidth={1} />
                    </div>
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                    marginBottom: openFaq === index ? 40 : 0
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-forest/70 leading-relaxed pr-8 md:pr-24 text-lg md:text-xl font-light">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-forest/20 mt-auto bg-parchment/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sand/40 via-transparent to-transparent"></div>
        <div className="max-w-[90rem] mx-auto px-6 py-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 relative z-10">
          <div className="flex flex-col gap-6 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm overflow-hidden relative grayscale opacity-70">
                <Image src="/icon.svg" alt="Ghartha Logo" fill className="object-cover" />
              </div>
              <span className="font-display text-2xl font-bold tracking-widest uppercase text-forest">Ghartha</span>
            </div>
            <p className="text-forest/60 text-lg font-light leading-relaxed">
              Your home. Your money.<br/> One place.
            </p>
            <p className="text-forest/40 text-xs mt-8 tracking-widest uppercase font-bold">
              © {new Date().getFullYear()} Ghartha Systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:flex md:gap-24 gap-12">
            <div className="flex flex-col gap-5">
              <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-forest/40">Contact Command</h4>
              <a href="mailto:ghartha.tech@gmail.com" className="text-forest/80 hover:text-terracotta transition-colors text-base font-medium">ghartha.tech@gmail.com</a>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-forest/40">Legal Directive</h4>
              <Link href="/privacy-policy" className="text-forest/80 hover:text-terracotta transition-colors text-base font-medium">Privacy Policy</Link>
              <Link href="/terms" className="text-forest/80 hover:text-terracotta transition-colors text-base font-medium">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
