"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "¿Cuál es la edad mínima para participar?",
    answer:
      "Para la modalidad competitiva es necesario tener 16 años el día de la carrera. Para el senderismo no hay límite de edad, pero los menores de 14 deben ir acompañados de un adulto.",
  },
  {
    question: "¿Hay avituallamientos durante el recorrido?",
    answer:
      "Sí, habrá avituallamientos líquido y sólido en los puntos marcados del recorrido. También habrá un avituallamiento final en meta.",
  },
  {
    question: "¿Dónde puedo recoger mi dorsal?",
    answer:
      "La recogida de dorsales se realizará el día anterior a la carrera en horario de tarde y la mañana del mismo día en la zona de meta. Habrá que presentar DNI.",
  },
  {
    question: "¿Se puede cancelar la inscripción?",
    answer:
      "Las cancelaciones están sujetas a las condiciones del organizador. Consulta el reglamento completo para más detalles.",
  },
  {
    question: "¿Dónde se puede aparcar?",
    answer:
      "Hay zonas de aparcamiento público en Puerto Lápice muy cerca de la zona de salida y meta. Recomendamos llegar temprano el día de la carrera.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 bg-black/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Preguntas frecuentes</h2>
        <p className="text-white/50 mb-12">Todo lo que necesitas saber antes de inscribirte.</p>

        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <div key={i} className="border border-white/10 rounded-xl overflow-hidden">
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between bg-white/5 hover:bg-white/10 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-white font-medium pr-4">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#FF5A1F] flex-shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 py-5 text-white/60 text-sm leading-relaxed border-t border-white/10">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}