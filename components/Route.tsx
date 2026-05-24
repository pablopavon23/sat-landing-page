"use client";

import { MapPin, Download } from "lucide-react";
import { raceData } from "@/data/race";

export default function Route() {
  return (
    <section id="route" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Recorrido</h2>
        <p className="text-white/50 mb-12">{raceData.routeDescription}</p>

        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-video flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-[#FF5A1F] mx-auto mb-4" />
            <p className="text-white/40 text-sm">Mapa del recorrido</p>
            <p className="text-white/30 text-xs mt-1">Próximamente</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            Descarga el track para tu dispositivo
          </p>
          <button
            disabled
            className="flex items-center gap-2 bg-white/10 text-white/40 px-6 py-3 rounded-full text-sm cursor-not-allowed"
          >
            <Download size={16} />
            GPX (próximamente)
          </button>
        </div>
      </div>
    </section>
  );
}