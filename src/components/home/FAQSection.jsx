import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "¿Trabajas con España y Latinoamérica?",
    a: "Sí, trabajo con clientes en España, LATAM y otros mercados. Todo de forma remota (videollamada) o presencial cuando se requiere."
  },
  {
    q: "¿Qué tipo de clientes sueles atender?",
    a: "Productores agrícolas, cooperativas, empresas de ingeniería, compañías agroalimentarias, instituciones públicas y organizaciones internacionales interesadas en sostenibilidad hídrica."
  },
  {
    q: "¿Cuánto cuesta una consultoría?",
    a: "Depende del alcance y la duración. El diagnóstico express es una primera conversación sin compromiso donde estimamos juntos el formato más adecuado."
  },
  {
    q: "¿Qué entregables puedo esperar?",
    a: "Tras cada interacción recibes un resumen ejecutivo con el análisis de situación, oportunidades detectadas, plan de acción con próximos pasos concretos y, en proyectos, documentación técnica completa."
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>
            FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold" style={{ color: "var(--dark)" }}>
            Preguntas frecuentes
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-gray-100 rounded-xl overflow-hidden hover:border-gray-200 transition-colors"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex items-center justify-between w-full p-5 text-left"
              >
                <span className="text-sm font-semibold pr-4" style={{ color: "var(--dark)" }}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5">
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}