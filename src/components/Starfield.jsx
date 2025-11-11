import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

// Subtle animated starfield using lightweight DOM nodes
// Generates N stars with randomized positions and twinkle timings
export default function Starfield({ density = 120 }) {
  const stars = useMemo(() => {
    const arr = []
    for (let i = 0; i < density; i++) {
      const size = Math.random() * 2 + 0.6 // 0.6px - 2.6px
      const left = Math.random() * 100
      const top = Math.random() * 100
      const delay = Math.random() * 6
      const duration = 3 + Math.random() * 5
      const blur = Math.random() > 0.7 ? 2 : 0
      arr.push({ id: i, size, left, top, delay, duration, blur })
    }
    return arr
  }, [density])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((s) => (
        <motion.span
          key={s.id}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.2, 0.9, 0.2] }}
          transition={{ repeat: Infinity, duration: s.duration, delay: s.delay, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            borderRadius: '9999px',
            filter: s.blur ? `blur(${s.blur}px)` : 'none',
            background:
              'radial-gradient(circle, rgba(235,235,255,0.95) 0%, rgba(185,185,255,0.65) 35%, rgba(140,140,255,0.15) 70%, rgba(0,0,0,0) 80%)',
          }}
        />
      ))}

      {/* Subtle drifting constellations lines */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
        initial={{ opacity: 0.1 }}
        animate={{ opacity: [0.05, 0.12, 0.05] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
        style={{ mixBlendMode: 'screen' }}
      >
        <motion.g
          initial={{ x: 0, y: 0 }}
          animate={{ x: [0, 2, -2, 0], y: [0, -1, 1, 0] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'easeInOut' }}
          stroke="url(#glow)"
          strokeWidth="0.2"
          fill="none"
        >
          <path d="M10 20 L25 30 L35 18 L50 28 L65 22 L80 35" />
          <path d="M15 70 L30 60 L45 75 L60 68 L75 80" />
          <path d="M5 45 L20 50 L40 40 L60 50 L85 45" />
        </motion.g>
        <defs>
          <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#bda4ff" />
            <stop offset="100%" stopColor="#9cc3ff" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  )
}
