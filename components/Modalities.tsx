"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, TrendingUp } from "lucide-react";
import { raceData } from "@/data/race";

export default function Modalities() {
  return (
    <section id="modalities" className="py-20 px-4 bg-black/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Modalidades</h2>
        <p className="text-white/50 mb-12">Elige tu nivel y disfruta del campo.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {raceData.modalities.map((mod, i) => (
            <motion.div
              key={mod.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`relative rounded-2xl p-8 border ${
                mod.type === "competitiva"
                  ? "border-[#FF5A1F]/50 bg-[#FF5A1F]/5"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{mod.name}</h3>
                  <span className="text-xs uppercase tracking-wider text-white/40">{mod.type}</span>
                </div>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${
                    mod.type === "competitiva"
                      ? "bg-[#FF5A1F] text-white"
                      : "bg-white/10 text-white/70"
                  }`}
                >
                  {mod.difficulty}
                </span>
              </div>

              <p className="text-white/60 mb-6">{mod.description}</p>

              <div className="flex gap-6 text-sm text-white/50">
                <span className="flex items-center gap-2">
                  <MapPin size={14} className="text-[#FF5A1F]" />
                  {mod.distance}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={14} className="text-[#FF5A1F]" />
                  {mod.startTime}
                </span>
                <span className="flex items-center gap-2">
                  <TrendingUp size={14} className="text-[#FF5A1F]" />
                  {mod.elevation}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}