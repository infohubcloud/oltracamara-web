import React from "react";
import { motion } from "framer-motion";
import { Award, GraduationCap, Globe, Users } from "lucide-react";

const RECOGNITIONS = [
  "Profesional del Water Footprint Network",
  "Profesor colaborador con TÜV SÜD",
  "Docente en máster internacional en sostenibilidad y ESG",
  "Participación en proyectos internacionales de agua y agricultura",
];

const ICONS = [Award, GraduationCap, Globe, Users];

export default function AuthoritySection() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--dark)" }}>
            Reconocimiento y colaboraciones
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {RECOGNITIONS.map((text, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#0F4C3A10" }}
                >
                  <Icon className="w-6 h-6" style={{ color: "var(--primary)" }} />
                </div>
                <span className="text-sm font-medium text-gray-700">{text}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}