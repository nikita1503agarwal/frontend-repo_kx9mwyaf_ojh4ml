import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import Navbar from './components/Navbar'
import Starfield from './components/Starfield'
import SectionDivider from './components/SectionDivider'

function PillButton({ href, children, variant = 'primary' }) {
  const base = 'inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400/60 ring-offset-transparent'
  const styles = {
    primary:
      'bg-indigo-400/20 text-indigo-100 border border-indigo-300/20 hover:bg-indigo-400/30',
    ghost:
      'bg-white/5 text-white border border-white/10 hover:bg-white/10',
  }
  return (
    <a href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </a>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0b14] text-white selection:bg-indigo-500/40 selection:text-white">
      <div className="relative min-h-[100svh] overflow-hidden">
        <Navbar />

        {/* Hero background layers */}
        <div className="absolute inset-0">
          {/* Galaxy gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_20%,rgba(124,58,237,0.35)_0%,rgba(17,24,39,0)_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_70%_10%,rgba(99,102,241,0.25)_0%,rgba(17,24,39,0)_70%)]" />
          <Starfield density={160} />

          {/* Spline cover */}
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>

          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b14]/30 via-[#0a0b14]/40 to-[#0a0b14] pointer-events-none" />
        </div>

        {/* Hero content */}
        <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-28">
          <motion.h1
            initial={fadeUp.hidden}
            animate={fadeUp.show}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-white/95"
          >
            Exploring creativity across the digital universe.
          </motion.h1>
          <motion.p
            initial={fadeUp.hidden}
            animate={fadeUp.show}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="mt-6 text-lg md:text-xl text-indigo-100/80 max-w-2xl"
          >
            I design and develop human-centered digital experiences.
          </motion.p>
          <motion.div
            initial={fadeUp.hidden}
            animate={fadeUp.show}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="mt-8 flex items-center gap-3"
          >
            <PillButton href="#projects">View My Work</PillButton>
            <PillButton href="#contact" variant="ghost">Get in Touch</PillButton>
          </motion.div>
        </section>

        <SectionDivider variant="bottom" />
      </div>

      {/* About */}
      <section id="about" className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white/95">About</h2>
              <p className="mt-5 text-indigo-100/80 leading-relaxed">
                I'm a multidisciplinary creative working at the intersection of design and engineering. I love crafting elegant interfaces, building delightful interactions, and telling stories through digital products. My journey spans brand systems, web apps, and immersive experiences.
              </p>
            </div>
            <div className="relative h-64 md:h-80">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500/30 via-violet-500/20 to-sky-400/20" />
              <div className="absolute inset-3 rounded-3xl border border-white/10 backdrop-blur-xl" />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" />
              <div className="absolute -inset-1 rounded-3xl blur-3xl bg-indigo-500/20" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="w-28 h-28 rounded-full border border-white/20 bg-white/5" />
              </div>
            </div>
          </motion.div>
        </div>
        <SectionDivider variant="bottom" />
      </section>

      {/* Skills */}
      <section id="skills" className="relative py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={fadeUp.hidden}
            whileInView={fadeUp.show}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-white/95"
          >
            Skills
          </motion.h2>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Design", "Frontend", "Backend", "Motion", "Brand", "3D"].map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative group rounded-2xl border border-white/10 p-5 bg-white/[0.03] hover:bg-white/[0.06] transition-colors overflow-hidden"
              >
                <div className="absolute -inset-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(40% 40% at 50% 50%, rgba(168, 85, 247, 0.35) 0%, rgba(99, 102, 241, 0.0) 70%)' }} />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-400/30 to-violet-400/30 border border-white/10" />
                  <p className="mt-4 font-medium text-indigo-50/90">{label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <SectionDivider variant="bottom" />
      </section>

      {/* Projects */}
      <section id="projects" className="relative py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={fadeUp.hidden}
            whileInView={fadeUp.show}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-white/95"
          >
            Selected Projects
          </motion.h2>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.a
                key={i}
                href="#"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-indigo-500/20 via-violet-500/20 to-sky-400/20" />
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-indigo-50/90">Project {i + 1}</p>
                    <span className="text-xs text-white/60">UI, Web</span>
                  </div>
                  <p className="mt-1 text-sm text-white/60">A clean interface with smooth motion and thoughtful details.</p>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(60% 40% at 50% 50%, rgba(168, 85, 247, 0.25) 0%, rgba(99, 102, 241, 0.0) 70%)' }} />
              </motion.a>
            ))}
          </div>
        </div>
        <SectionDivider variant="bottom" />
      </section>

      {/* Contact */}
      <footer id="contact" className="relative">
        <div className="absolute inset-0 -z-0">
          <Starfield density={120} />
          <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_0%,rgba(99,102,241,0.2)_0%,rgba(10,11,20,0)_60%)]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.h2
            initial={fadeUp.hidden}
            whileInView={fadeUp.show}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-white/95"
          >
            Get in touch
          </motion.h2>

          <form className="mt-8 grid sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Your name" className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/40" />
            <input type="email" placeholder="Email" className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/40" />
            <textarea rows="4" placeholder="Message" className="sm:col-span-2 w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/40" />
            <div className="sm:col-span-2">
              <PillButton href="#" variant="primary">Send Message</PillButton>
            </div>
          </form>

          <div className="mt-10 flex items-center gap-4 text-white/70 text-sm">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <span className="opacity-30">•</span>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <span className="opacity-30">•</span>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>

          <p className="mt-8 text-xs text-white/40">© {new Date().getFullYear()} Nightfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
