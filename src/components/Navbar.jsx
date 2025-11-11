import React from 'react'
import { Menu, Mail, Github, Linkedin } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="text-white/90 hover:text-white font-semibold tracking-tight text-lg">
          <span className="align-middle">✦</span> Nightfolio
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex text-xs font-medium px-3 py-1.5 rounded-full bg-indigo-400/20 text-indigo-100 border border-indigo-300/20 hover:bg-indigo-400/30 transition-colors">Get in touch</a>
          <button className="md:hidden text-white/80" aria-label="Menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
