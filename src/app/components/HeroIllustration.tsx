"use client";

import { motion } from "framer-motion";

/**
 * Hero illustration — editorial geometric composition of a home silhouette
 * with abstract financial data visualization elements (flowing lines, nodes).
 * Matches the sand/forest/terracotta palette. Pure SVG, no external assets.
 */
export default function HeroIllustration() {
  return (
    <div className="relative w-full h-full min-h-[420px] lg:min-h-[560px]">
      <svg
        viewBox="0 0 480 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        <defs>
          {/* Grain texture */}
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" mode="multiply" />
          </filter>

          {/* Warm gradient for the house form */}
          <linearGradient id="houseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F261F" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0F261F" stopOpacity="0.6" />
          </linearGradient>

          {/* Terracotta accent gradient */}
          <linearGradient id="accentGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C84C31" />
            <stop offset="100%" stopColor="#C84C31" stopOpacity="0.3" />
          </linearGradient>

          {/* Gold flow gradient */}
          <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C2A04D" stopOpacity="0" />
            <stop offset="50%" stopColor="#C2A04D" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C2A04D" stopOpacity="0" />
          </linearGradient>

          {/* Parchment fill */}
          <linearGradient id="parchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EFEBE0" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#EFEBE0" stopOpacity="0.05" />
          </linearGradient>

          <clipPath id="houseClip">
            <path d="M240 60 L80 180 L80 480 L400 480 L400 180 Z" />
          </clipPath>
        </defs>

        {/* Background architectural grid inside house silhouette */}
        <g clipPath="url(#houseClip)" opacity="0.06">
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`vg-${i}`} x1={80 + i * 28} y1="60" x2={80 + i * 28} y2="480" stroke="#0F261F" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 15 }).map((_, i) => (
            <line key={`hg-${i}`} x1="80" y1={60 + i * 30} x2="400" y2={60 + i * 30} stroke="#0F261F" strokeWidth="0.5" />
          ))}
        </g>

        {/* Main house silhouette — outline only, editorial weight */}
        <motion.path
          d="M240 60 L80 180 L80 480 L400 480 L400 180 Z"
          stroke="#0F261F"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="url(#parchGrad)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />

        {/* Chimney */}
        <motion.rect
          x="320" y="80" width="30" height="80"
          stroke="#0F261F" strokeWidth="1.5" fill="none"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        />

        {/* Window grid — 2x2 */}
        {[
          { x: 130, y: 230, w: 80, h: 90 },
          { x: 270, y: 230, w: 80, h: 90 },
          { x: 130, y: 360, w: 80, h: 90 },
          { x: 270, y: 360, w: 80, h: 90 },
        ].map((win, i) => (
          <motion.g key={`win-${i}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 + i * 0.15, duration: 0.6 }}
          >
            <rect x={win.x} y={win.y} width={win.w} height={win.h}
              stroke="#0F261F" strokeWidth="1.5" fill="#0F261F" fillOpacity="0.04" />
            {/* Cross bars */}
            <line x1={win.x + win.w / 2} y1={win.y} x2={win.x + win.w / 2} y2={win.y + win.h}
              stroke="#0F261F" strokeWidth="0.8" />
            <line x1={win.x} y1={win.y + win.h / 2} x2={win.x + win.w} y2={win.y + win.h / 2}
              stroke="#0F261F" strokeWidth="0.8" />

            {/* Warm glow inside one window */}
            {i === 1 && (
              <motion.rect x={win.x + 3} y={win.y + 3} width={win.w - 6} height={win.h / 2 - 4}
                fill="#C2A04D" fillOpacity="0.12"
                animate={{ fillOpacity: [0.08, 0.18, 0.08] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
            )}
          </motion.g>
        ))}

        {/* Door */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <rect x="205" y="380" width="70" height="100" rx="3"
            stroke="#0F261F" strokeWidth="2" fill="#0F261F" fillOpacity="0.08" />
          <circle cx="265" cy="435" r="3" fill="#C2A04D" />
        </motion.g>

        {/* === Financial data visualization elements === */}

        {/* Flowing transaction lines — curved paths representing money flow */}
        <motion.path
          d="M 40 300 Q 80 280 120 310 Q 160 340 200 290 Q 240 240 280 270"
          stroke="url(#flowGrad)" strokeWidth="1.5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 2.2, duration: 2, ease: "easeOut" }}
        />
        <motion.path
          d="M 200 500 Q 260 470 320 490 Q 380 510 440 480"
          stroke="url(#flowGrad)" strokeWidth="1.5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 2.5, duration: 2, ease: "easeOut" }}
        />

        {/* Data nodes — connection points */}
        {[
          { cx: 40, cy: 300 },
          { cx: 120, cy: 310 },
          { cx: 200, cy: 290 },
          { cx: 280, cy: 270 },
          { cx: 200, cy: 500 },
          { cx: 320, cy: 490 },
          { cx: 440, cy: 480 },
        ].map((node, i) => (
          <motion.circle key={`node-${i}`}
            cx={node.cx} cy={node.cy} r="3"
            fill="#C84C31"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2.4 + i * 0.1, duration: 0.4 }}
          />
        ))}

        {/* Floating ₹ currency symbols */}
        <motion.text x="60" y="268" fontFamily="serif" fontSize="18" fill="#C2A04D" opacity="0.35"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.35, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >₹</motion.text>
        <motion.text x="420" y="460" fontFamily="serif" fontSize="24" fill="#C2A04D" opacity="0.25"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.25, y: 0 }}
          transition={{ delay: 3.2, duration: 1 }}
        >₹</motion.text>
        <motion.text x="360" y="170" fontFamily="serif" fontSize="14" fill="#C2A04D" opacity="0.2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ delay: 3.4, duration: 1 }}
        >₹</motion.text>

        {/* Terracotta accent bar — editorial separator */}
        <motion.rect x="100" y="520" width="280" height="3" rx="1.5"
          fill="url(#accentGrad)"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "100px 521px" }}
        />

        {/* Small "INDEX 01" editorial label */}
        <motion.text x="100" y="545" fontFamily="sans-serif" fontSize="9" fill="#0F261F" opacity="0.3"
          letterSpacing="3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 3, duration: 1 }}
        >MANIFESTO 01</motion.text>
      </svg>

      {/* Floating ambient orb — CSS-only */}
      <motion.div
        className="absolute top-[15%] right-[10%] w-24 h-24 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(200,76,49,0.08) 0%, transparent 70%)",
        }}
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[5%] w-32 h-32 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(194,160,77,0.06) 0%, transparent 70%)",
        }}
        animate={{
          y: [0, 10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}
