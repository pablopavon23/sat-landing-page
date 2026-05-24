import { raceData } from "@/data/race";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Sobre la carrera</h2>
        <div className="space-y-6 text-lg text-white/70 leading-relaxed">
          <p>{raceData.aboutText}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
            <div>
              <p className="text-[#FF5A1F] text-2xl font-bold">{raceData.modalities.length}</p>
              <p className="text-white/40 text-sm">Modalidades</p>
            </div>
            <div>
              <p className="text-[#FF5A1F] text-2xl font-bold">2</p>
              <p className="text-white/40 text-sm">Ediciones</p>
            </div>
            <div>
              <p className="text-[#FF5A1F] text-2xl font-bold">8+</p>
              <p className="text-white/40 text-sm">Organizadores</p>
            </div>
            <div>
              <p className="text-[#FF5A1F] text-2xl font-bold">La Mancha</p>
              <p className="text-white/40 text-sm">Terreno</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}