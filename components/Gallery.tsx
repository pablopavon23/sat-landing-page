"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/gallery/panoramica_molinos.jpg", alt: "Panorámica de los molinos" },
  { src: "/gallery/I_foto_mochila.jpg", alt: "Foto de espalda participantes" },
  { src: "/gallery/II_post_carrera.jpg", alt: "Post carrera" },
  { src: "/gallery/II_trofeos.jpg", alt: "Trofeos" },
  { src: "/gallery/II_voluntarios.jpg", alt: "Voluntarios" },
  { src: "/gallery/III_camiseta.jpg", alt: "Camiseta edición III" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 bg-black/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Galería</h2>
        <p className="text-white/50 mb-12">Momentos de ediciones anteriores.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}