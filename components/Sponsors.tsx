export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Patrocinadores</h2>
        <p className="text-white/50 mb-12">Empresas que hacen posible esta carrera.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-video rounded-xl bg-white/5 flex items-center justify-center border border-white/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 blur-xl" />
            </div>
          ))}
        </div>

        <p className="text-white/20 text-sm mt-8">
          ¿Quieres patrocinarnos?{" "}
          <a
            href="#footer"
            className="text-[#FF5A1F] hover:underline"
          >
            Escríbenos
          </a>
          .
        </p>
      </div>
    </section>
  );
}