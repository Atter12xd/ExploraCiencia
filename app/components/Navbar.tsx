"use client";

import { useState } from "react";
import Link from "next/link";
import { Atom, BookOpen, User, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-morphism"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Atom className="w-8 h-8 text-primary group-hover:rotate-180 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all" />
            </div>
            <span className="text-2xl font-bold text-gradient">
              SciencePlay
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/cursos"
              className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors duration-300"
            >
              <BookOpen className="w-5 h-5" />
              <span>Cursos</span>
            </Link>
            <Link
              href="/profesor"
              className="flex items-center gap-2 text-gray-300 hover:text-secondary transition-colors duration-300"
            >
              <User className="w-5 h-5" />
              <span>Profesor</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Abrir menú"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute inset-x-0 top-full px-4 pb-6"
          >
            <div className="glass-morphism rounded-2xl border border-white/10 p-4 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm uppercase tracking-wide text-gray-400">
                  Navegación
                </span>
                <button
                  onClick={closeMenu}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-3">
                <Link
                  href="/cursos"
                  onClick={closeMenu}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:border-primary/40 hover:bg-primary/10 transition-colors"
                >
                  <BookOpen className="w-5 h-5 text-primary" />
                  Cursos
                </Link>
                <Link
                  href="/profesor"
                  onClick={closeMenu}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:border-secondary/40 hover:bg-secondary/10 transition-colors"
                >
                  <User className="w-5 h-5 text-secondary" />
                  Profesor
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}








