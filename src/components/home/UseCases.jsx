import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const CASES = [
  "Reducción consumo de agua en cítricos e invernaderos",
  "Implantación de agricultura de precisión",
  "Auditorías de huella hídrica corporativa",
  "Estrategias de sostenibilidad empresarial",
];

export default function UseCases() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--dark)" }}>
            Ejemplos de proyectos
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {CASES.map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3 p-5 rounded-xl bg-gray-50 border border-gray-100"
            >
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "var(--primary)" }} />
              <span className="text-base text-gray-700">{useCase}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}