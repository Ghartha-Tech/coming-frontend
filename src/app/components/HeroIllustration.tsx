"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/**
 * A realistic phone mockup showing a scrolling Ghartha app preview.
 * Pure CSS/HTML — no images needed. Shows actual product UI to build desire.
 */

const TRANSACTIONS = [
  { name: "Swiggy", amount: "-₹348", time: "Today, 1:42 PM", type: "debit", emoji: "🍕", tag: "Food" },
  { name: "Rent Split · Arjun", amount: "+₹8,500", time: "Today, 10:00 AM", type: "credit", emoji: "🏠", tag: "Rent" },
  { name: "Amazon Prime", amount: "-₹199", time: "Yesterday", type: "debit", emoji: "📦", tag: "Subscription" },
  { name: "Electricity Bill", amount: "-₹1,240", time: "Yesterday", type: "debit", emoji: "⚡", tag: "Utility" },
  { name: "Mandate · Priya", amount: "+₹2,100", time: "Jun 18", type: "credit", emoji: "🔄", tag: "Auto-Split" },
  { name: "Zepto Groceries", amount: "-₹567", time: "Jun 18", type: "debit", emoji: "🥬", tag: "Groceries" },
  { name: "Society Maintenance", amount: "-₹4,500", time: "Jun 17", type: "debit", emoji: "🏢", tag: "Society" },
  { name: "Uber Auto", amount: "-₹89", time: "Jun 17", type: "debit", emoji: "🛺", tag: "Transport" },
];

const SPLIT_MEMBERS = [
  { name: "You", paid: true, amount: "₹4,200", avatar: "A" },
  { name: "Arjun", paid: true, amount: "₹4,200", avatar: "R" },
  { name: "Priya", paid: false, amount: "₹4,200", avatar: "P" },
];

export default function HeroIllustration() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const [mouseInside, setMouseInside] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [6, -6]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-6, 6]), { stiffness: 200, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!phoneRef.current) return;
    const rect = phoneRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setMouseInside(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      className="relative w-full flex items-center justify-center py-4"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setMouseInside(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient glow behind phone */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[280px] h-[400px] rounded-[60px] opacity-30"
          style={{
            background: "radial-gradient(ellipse at center, rgba(200,76,49,0.15) 0%, rgba(194,160,77,0.08) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <motion.div
        ref={phoneRef}
        style={{
          rotateX: mouseInside ? rotateX : 0,
          rotateY: mouseInside ? rotateY : 0,
          transformPerspective: 1200,
        }}
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[260px] lg:w-[280px]"
      >
        {/* Phone frame */}
        <div
          className="rounded-[36px] p-[3px] relative"
          style={{
            background: "linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 30%, #1a1a1a 60%, #333 100%)",
            boxShadow: "0 25px 60px rgba(0,0,0,0.25), 0 8px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {/* Screen bezel */}
          <div className="rounded-[33px] overflow-hidden bg-[#0B1613] relative">

            {/* Status bar */}
            <div className="flex justify-between items-center px-6 pt-3 pb-1 text-[9px] text-[#EFEBE0]/60 font-medium relative z-20">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <div className="flex gap-[2px] items-end">
                  <div className="w-[2px] h-[4px] bg-[#EFEBE0]/40 rounded-[1px]" />
                  <div className="w-[2px] h-[6px] bg-[#EFEBE0]/40 rounded-[1px]" />
                  <div className="w-[2px] h-[8px] bg-[#EFEBE0]/50 rounded-[1px]" />
                  <div className="w-[2px] h-[10px] bg-[#EFEBE0]/60 rounded-[1px]" />
                </div>
                <span className="text-[8px] ml-1">5G</span>
                <div className="w-[18px] h-[8px] border border-[#EFEBE0]/30 rounded-[2px] ml-1 relative">
                  <div className="absolute inset-[1px] right-[3px] bg-[#4ade80]/70 rounded-[1px]" />
                </div>
              </div>
            </div>

            {/* Dynamic island */}
            <div className="flex justify-center pt-0.5 pb-2 relative z-20">
              <div className="w-[90px] h-[24px] bg-black rounded-full" />
            </div>

            {/* App Content — scrolling */}
            <div className="h-[440px] lg:h-[480px] overflow-hidden relative">
              <motion.div
                animate={{ y: [0, -320, -320, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 12,
                  ease: "easeInOut",
                  times: [0, 0.35, 0.65, 1],
                }}
                className="px-4"
              >
                {/* ── Screen 1: Dashboard ── */}
                <div className="pb-6">
                  {/* Greeting */}
                  <div className="mb-5">
                    <p className="text-[10px] text-[#EFEBE0]/40 tracking-widest uppercase font-medium">Good afternoon</p>
                    <h2 className="text-[18px] text-[#EFEBE0] font-semibold tracking-tight mt-0.5" style={{ fontFamily: "Georgia, serif" }}>
                      Aarav Mehta
                    </h2>
                  </div>

                  {/* Balance card */}
                  <div
                    className="rounded-2xl p-4 mb-4 relative overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, #162B22 0%, #1C3A2E 50%, #1A2F25 100%)",
                      border: "1px solid rgba(239,235,224,0.06)",
                    }}
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10"
                      style={{ background: "radial-gradient(circle, #C2A04D, transparent)" }} />
                    <p className="text-[9px] text-[#EFEBE0]/40 tracking-widest uppercase mb-1">Net Balance</p>
                    <p className="text-[26px] text-[#EFEBE0] font-bold tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
                      ₹47,832
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
                        <span className="text-[8px] text-[#4ade80]/80">+₹12,600 in</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C84C31]" />
                        <span className="text-[8px] text-[#C84C31]/80">-₹6,943 out</span>
                      </div>
                    </div>
                  </div>

                  {/* Active mandates pill */}
                  <div
                    className="rounded-xl px-3 py-2.5 mb-4 flex items-center justify-between"
                    style={{
                      background: "rgba(194,160,77,0.06)",
                      border: "1px solid rgba(194,160,77,0.12)",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[12px]">🔄</span>
                      <div>
                        <p className="text-[9px] text-[#C2A04D] font-semibold">3 Active Mandates</p>
                        <p className="text-[7px] text-[#EFEBE0]/30 mt-0.5">Next auto-split in 2 days</p>
                      </div>
                    </div>
                    <div className="text-[8px] text-[#C2A04D]/60">→</div>
                  </div>

                  {/* Transaction list header */}
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-[10px] text-[#EFEBE0]/50 tracking-widest uppercase font-semibold">Recent</h3>
                    <span className="text-[8px] text-[#C84C31]/60 font-medium">View all →</span>
                  </div>

                  {/* Transaction items */}
                  {TRANSACTIONS.map((tx, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2.5 border-b border-[#EFEBE0]/[0.04] last:border-0"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[12px]"
                          style={{ background: "rgba(239,235,224,0.04)" }}>
                          {tx.emoji}
                        </div>
                        <div>
                          <p className="text-[10px] text-[#EFEBE0]/80 font-medium">{tx.name}</p>
                          <p className="text-[7px] text-[#EFEBE0]/25 mt-0.5">{tx.time} · {tx.tag}</p>
                        </div>
                      </div>
                      <span className={`text-[11px] font-semibold tabular-nums ${
                        tx.type === "credit" ? "text-[#4ade80]/80" : "text-[#EFEBE0]/50"
                      }`}>
                        {tx.amount}
                      </span>
                    </div>
                  ))}
                </div>

                {/* ── Screen 2: Bill Split Detail ── */}
                <div className="pb-8 mt-4">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[9px] text-[#EFEBE0]/30">←</span>
                    <h3 className="text-[12px] text-[#EFEBE0]/70 font-semibold" style={{ fontFamily: "Georgia, serif" }}>
                      June Rent Split
                    </h3>
                  </div>

                  {/* Split card */}
                  <div
                    className="rounded-2xl p-4 mb-4"
                    style={{
                      background: "linear-gradient(135deg, rgba(200,76,49,0.08) 0%, rgba(200,76,49,0.02) 100%)",
                      border: "1px solid rgba(200,76,49,0.1)",
                    }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="text-[9px] text-[#EFEBE0]/30 tracking-widest uppercase">Total Rent</p>
                        <p className="text-[22px] text-[#EFEBE0] font-bold" style={{ fontFamily: "Georgia, serif" }}>₹12,600</p>
                      </div>
                      <div className="px-2 py-1 rounded-full text-[7px] font-semibold"
                        style={{ background: "rgba(194,160,77,0.12)", color: "#C2A04D" }}>
                        ⅓ SPLIT
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full h-1.5 rounded-full bg-[#EFEBE0]/[0.06] mb-3 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: "linear-gradient(90deg, #4ade80, #C2A04D)" }}
                        initial={{ width: "0%" }}
                        animate={{ width: "66%" }}
                        transition={{ delay: 5, duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                    <p className="text-[7px] text-[#EFEBE0]/25">2 of 3 paid · ₹8,400 collected</p>
                  </div>

                  {/* Members */}
                  {SPLIT_MEMBERS.map((m, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-[#EFEBE0]/[0.04] last:border-0">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold"
                          style={{
                            background: m.paid ? "rgba(74,222,128,0.1)" : "rgba(200,76,49,0.1)",
                            color: m.paid ? "#4ade80" : "#C84C31",
                          }}>
                          {m.avatar}
                        </div>
                        <div>
                          <p className="text-[10px] text-[#EFEBE0]/80 font-medium">{m.name}</p>
                          <p className="text-[7px] text-[#EFEBE0]/25 mt-0.5">
                            {m.paid ? "Paid via mandate" : "Pending · reminder sent"}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-[#EFEBE0]/50 font-semibold">{m.amount}</span>
                        <div className={`text-[7px] mt-0.5 font-medium ${m.paid ? "text-[#4ade80]/60" : "text-[#C84C31]/60"}`}>
                          {m.paid ? "✓ Done" : "Pending"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Fade overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                style={{ background: "linear-gradient(to top, #0B1613, transparent)" }} />
            </div>

            {/* Bottom nav bar */}
            <div className="flex justify-around items-center py-2.5 px-4 border-t border-[#EFEBE0]/[0.04]"
              style={{ background: "rgba(11,22,19,0.95)" }}>
              {[
                { icon: "⬡", label: "Home", active: true },
                { icon: "⇆", label: "Splits", active: false },
                { icon: "⊞", label: "Mandates", active: false },
                { icon: "◉", label: "Profile", active: false },
              ].map((tab, i) => (
                <div key={i} className="flex flex-col items-center gap-0.5">
                  <span className={`text-[14px] ${tab.active ? "text-[#C84C31]" : "text-[#EFEBE0]/20"}`}>
                    {tab.icon}
                  </span>
                  <span className={`text-[6px] tracking-wider uppercase font-medium ${
                    tab.active ? "text-[#C84C31]/80" : "text-[#EFEBE0]/15"
                  }`}>
                    {tab.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Home indicator */}
            <div className="flex justify-center py-2">
              <div className="w-[100px] h-[4px] bg-[#EFEBE0]/15 rounded-full" />
            </div>
          </div>
        </div>

        {/* Reflection/sheen effect */}
        <motion.div
          className="absolute inset-0 rounded-[36px] pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div
            className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] pointer-events-none"
            style={{
              background: "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 55%, transparent 60%)",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Floating labels around the phone */}
      <motion.div
        className="absolute -left-4 top-[30%] hidden lg:block"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="flex items-center gap-2">
          <div className="h-px w-8 bg-terracotta/30" />
          <span className="text-[8px] tracking-[0.2em] uppercase text-forest/30 font-bold whitespace-nowrap">Live Feed</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-4 top-[55%] hidden lg:block"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.3, duration: 1 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-[8px] tracking-[0.2em] uppercase text-forest/30 font-bold whitespace-nowrap">Auto-Split</span>
          <div className="h-px w-8 bg-gold/30" />
        </div>
      </motion.div>
    </div>
  );
}
