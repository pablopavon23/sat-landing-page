import { Image } from "lucide-react";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 bg-black/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Galería</h2>
        <p className="text-white/50 mb-12">Momentos de ediciones anteriores.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-xl bg-white/5 flex items-center justify-center border border-white/10"
            >
              <div className="text-center">
                <Image className="w-8 h-8 text-white/20 mx-auto mb-2" />
                <p className="text-white/30 text-xs">Placeholder</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}