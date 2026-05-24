"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { raceData } from "@/data/race";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Recorrido", href: "#route" },
  { label: "Modalidades", href: "#modalities" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold tracking-tight text-white hover:text-[#FF5A1F] transition-colors">
          {raceData.name}
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-white/80 hover:text-[#FF5A1F] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={raceData.registrationUrl}
              className="bg-[#FF5A1F] text-white text-sm px-5 py-2 rounded-full font-medium hover:bg-[#e04d17] transition-colors"
            >
              Inscribirse
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black/95 border-b border-white/10"
          >
            <ul className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-[#FF5A1F] transition-colors block py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={raceData.registrationUrl}
                  className="bg-[#FF5A1F] text-white text-sm px-5 py-3 rounded-full font-medium hover:bg-[#e04d17] transition-colors inline-block"
                >
                  Inscribirse
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}