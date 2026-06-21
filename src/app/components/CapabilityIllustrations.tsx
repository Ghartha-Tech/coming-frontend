"use client";

import { motion } from "framer-motion";

/**
 * Three editorial illustrations for the capabilities grid.
 * Each represents a core Ghartha feature with abstract geometric visuals.
 */

/** Capability 01 — Automated Payment Infrastructure: flowing payment streams */
export function PaymentFlowIllustration() {
  return (
    <div className="w-full aspect-[4/3] relative overflow-hidden rounded-sm">
      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
        <rect width="400" height="300" fill="#0F261F" rx="4" />

        {/* Grid underlay */}
        <defs>
          <pattern id="pgrid1" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#EFEBE0" strokeWidth="0.3" opacity="0.06" />
          </pattern>
          <linearGradient id="stream1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C2A04D" stopOpacity="0" />
            <stop offset="30%" stopColor="#C2A04D" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#C2A04D" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#C2A04D" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="stream2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C84C31" stopOpacity="0" />
            <stop offset="40%" stopColor="#C84C31" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#C84C31" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#pgrid1)" />

        {/* Central mandate node */}
        <motion.circle cx="200" cy="150" r="28" stroke="#C2A04D" strokeWidth="1.5" fill="#C2A04D" fillOpacity="0.08"
          initial={{ scale: 0 }} whileInView={{ scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.circle cx="200" cy="150" r="14" fill="#C2A04D" fillOpacity="0.2"
          initial={{ scale: 0 }} whileInView={{ scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}
        />
        <motion.text x="200" y="155" fontFamily="serif" fontSize="16" fill="#C2A04D" textAnchor="middle"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.7 }}
        >₹</motion.text>

        {/* Outward payment streams */}
        {[
          "M 228 150 Q 280 120 340 100",
          "M 228 150 Q 290 150 350 160",
          "M 228 150 Q 280 185 340 210",
          "M 172 150 Q 120 120 60 95",
          "M 172 150 Q 110 150 50 145",
          "M 172 150 Q 120 190 60 220",
        ].map((d, i) => (
          <motion.path key={i} d={d}
            stroke={i < 3 ? "url(#stream1)" : "url(#stream2)"}
            strokeWidth="1.5" fill="none" strokeLinecap="round"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.8 + i * 0.12, duration: 1.2, ease: "easeOut" }}
          />
        ))}

        {/* Endpoint nodes */}
        {[
          { cx: 340, cy: 100 }, { cx: 350, cy: 160 }, { cx: 340, cy: 210 },
          { cx: 60, cy: 95 }, { cx: 50, cy: 145 }, { cx: 60, cy: 220 },
        ].map((n, i) => (
          <motion.circle key={`en-${i}`} cx={n.cx} cy={n.cy} r="4"
            fill={i < 3 ? "#C2A04D" : "#C84C31"} fillOpacity="0.6"
            initial={{ scale: 0 }} whileInView={{ scale: 1 }}
            viewport={{ once: true }} transition={{ delay: 1.4 + i * 0.1 }}
          />
        ))}

        {/* "AUTO" label */}
        <motion.text x="200" y="270" fontFamily="sans-serif" fontSize="9" fill="#EFEBE0" textAnchor="middle"
          letterSpacing="4" opacity="0.25"
          initial={{ opacity: 0 }} whileInView={{ opacity: 0.25 }}
          viewport={{ once: true }} transition={{ delay: 2 }}
        >AUTOMATED · ZERO-CHASE</motion.text>
      </svg>
    </div>
  );
}

/** Capability 02 — Bank-Agnostic Connectivity: network of bank nodes */
export function BankConnectIllustration() {
  return (
    <div className="w-full aspect-[4/3] relative overflow-hidden rounded-sm">
      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
        <rect width="400" height="300" fill="#0F261F" rx="4" />

        <defs>
          <pattern id="pgrid2" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#EFEBE0" strokeWidth="0.3" opacity="0.06" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#pgrid2)" />

        {/* Connection lines first (behind nodes) */}
        {[
          { x1: 200, y1: 130, x2: 100, y2: 70 },
          { x1: 200, y1: 130, x2: 300, y2: 60 },
          { x1: 200, y1: 130, x2: 80, y2: 180 },
          { x1: 200, y1: 130, x2: 320, y2: 170 },
          { x1: 200, y1: 130, x2: 130, y2: 250 },
          { x1: 200, y1: 130, x2: 280, y2: 240 },
        ].map((l, i) => (
          <motion.line key={`cl-${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            stroke="#EFEBE0" strokeWidth="0.6" strokeDasharray="4 4" opacity="0.15"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.15 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
          />
        ))}

        {/* Central Ghartha hub */}
        <motion.g initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <circle cx="200" cy="130" r="32" stroke="#C84C31" strokeWidth="1.5" fill="#C84C31" fillOpacity="0.08" />
          <circle cx="200" cy="130" r="18" fill="#C84C31" fillOpacity="0.15" />
          <text x="200" y="135" fontFamily="serif" fontSize="14" fill="#C84C31" textAnchor="middle" fontWeight="700">G</text>
        </motion.g>

        {/* Bank nodes — each a different "bank" */}
        {[
          { cx: 100, cy: 70, label: "SBI" },
          { cx: 300, cy: 60, label: "HDFC" },
          { cx: 80, cy: 180, label: "ICICI" },
          { cx: 320, cy: 170, label: "AXIS" },
          { cx: 130, cy: 250, label: "KOT" },
          { cx: 280, cy: 240, label: "BOB" },
        ].map((bank, i) => (
          <motion.g key={`bank-${i}`}
            initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.8 + i * 0.12, duration: 0.5 }}
          >
            <circle cx={bank.cx} cy={bank.cy} r="20" stroke="#C2A04D" strokeWidth="1" fill="#C2A04D" fillOpacity="0.06" />
            <text x={bank.cx} y={bank.cy + 4} fontFamily="sans-serif" fontSize="8" fill="#C2A04D" textAnchor="middle" letterSpacing="1" opacity="0.7">
              {bank.label}
            </text>
          </motion.g>
        ))}

        {/* Pulse ring on hub */}
        <motion.circle cx="200" cy="130" r="32" stroke="#C84C31" strokeWidth="0.5" fill="none"
          animate={{ r: [32, 50, 32], opacity: [0.3, 0, 0.3] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />

        <motion.text x="200" y="290" fontFamily="sans-serif" fontSize="9" fill="#EFEBE0" textAnchor="middle"
          letterSpacing="4" opacity="0.25"
          initial={{ opacity: 0 }} whileInView={{ opacity: 0.25 }}
          viewport={{ once: true }} transition={{ delay: 2 }}
        >ANY BANK · ONE VIEW</motion.text>
      </svg>
    </div>
  );
}

/** Capability 03 — Privacy-First Architecture: shield/vault visualization */
export function PrivacyShieldIllustration() {
  return (
    <div className="w-full aspect-[4/3] relative overflow-hidden rounded-sm">
      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
        <rect width="400" height="300" fill="#0F261F" rx="4" />

        <defs>
          <pattern id="pgrid3" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#EFEBE0" strokeWidth="0.3" opacity="0.06" />
          </pattern>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EFEBE0" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#EFEBE0" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#pgrid3)" />

        {/* Shield shape */}
        <motion.path
          d="M200 40 L280 70 L280 160 Q280 220 200 260 Q120 220 120 160 L120 70 Z"
          stroke="#EFEBE0" strokeWidth="1.5" fill="url(#shieldGrad)"
          strokeLinejoin="round"
          initial={{ pathLength: 0, fillOpacity: 0 }}
          whileInView={{ pathLength: 1, fillOpacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Inner shield layer */}
        <motion.path
          d="M200 65 L260 88 L260 155 Q260 200 200 235 Q140 200 140 155 L140 88 Z"
          stroke="#C2A04D" strokeWidth="0.8" fill="none"
          strokeDasharray="3 6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
        />

        {/* Lock icon at center */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 1.2, duration: 0.6 }}
        >
          {/* Lock body */}
          <rect x="184" y="140" width="32" height="28" rx="3" stroke="#C2A04D" strokeWidth="1.5" fill="#C2A04D" fillOpacity="0.1" />
          {/* Lock shackle */}
          <path d="M190 140 L190 128 Q190 118 200 118 Q210 118 210 128 L210 140" stroke="#C2A04D" strokeWidth="1.5" fill="none" />
          {/* Keyhole */}
          <circle cx="200" cy="152" r="3" fill="#C2A04D" fillOpacity="0.5" />
          <rect x="199" y="152" width="2" height="6" fill="#C2A04D" fillOpacity="0.5" />
        </motion.g>

        {/* Encryption particles orbiting */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const radius = 90;
          const cx = 200 + Math.cos(angle) * radius;
          const cy = 150 + Math.sin(angle) * radius * 0.7;
          return (
            <motion.circle key={`ep-${i}`} cx={cx} cy={cy} r="2"
              fill="#EFEBE0" fillOpacity="0.2"
              initial={{ scale: 0 }} whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 + i * 0.08, duration: 0.4 }}
            />
          );
        })}

        {/* DPDPA compliance badge */}
        <motion.g
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 2, duration: 0.8 }}
        >
          <rect x="155" y="195" width="90" height="18" rx="9" stroke="#C84C31" strokeWidth="0.8" fill="#C84C31" fillOpacity="0.08" />
          <text x="200" y="207" fontFamily="sans-serif" fontSize="7" fill="#C84C31" textAnchor="middle" letterSpacing="2" opacity="0.7">
            DPDPA 2023
          </text>
        </motion.g>

        <motion.text x="200" y="285" fontFamily="sans-serif" fontSize="9" fill="#EFEBE0" textAnchor="middle"
          letterSpacing="4" opacity="0.25"
          initial={{ opacity: 0 }} whileInView={{ opacity: 0.25 }}
          viewport={{ once: true }} transition={{ delay: 2.2 }}
        >ENCRYPTED · COMPLIANT</motion.text>
      </svg>
    </div>
  );
}
