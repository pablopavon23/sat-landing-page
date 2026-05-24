"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { raceData } from "@/data/race";

export default function Hero() {
  const eventDate = new Date(raceData.date + "T00:00:00");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0B0B0B]" />
      <div className="absolute inset-0 bg-[#FF5A1F]/5" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#FF5A1F] text-sm md:text-base font-medium tracking-widest uppercase mb-4"
        >
          {raceData.city}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-2"
        >
          {raceData.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl md:text-3xl lg:text-4xl font-light text-white/70 mb-6"
        >
          {raceData.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {raceData.heroTitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={raceData.registrationUrl}
            className="bg-[#FF5A1F] text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-[#e04d17] transition-colors w-full sm:w-auto"
          >
            Inscribirse
          </a>
          <a
            href="#route"
            className="border border-white/30 text-white font-medium px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-colors w-full sm:w-auto"
          >
            Ver recorrido
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-white/40 w-8 h-8 animate-bounce" />
      </motion.div>
    </section>
  );
}