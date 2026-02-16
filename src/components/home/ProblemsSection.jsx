import React from "react";
import { motion } from "framer-motion";
import { Sprout, Droplets, TrendingUp } from "lucide-react";

const PROBLEMS = [
  {
    icon: Sprout,
    title: "Digitalización agrícola",
    description: "Transformo datos de campo en decisiones operativas: riego, fertilización, seguimiento de cultivos y optimización de costes con agricultura de precisión.",
    accent: "#0F4C3A",
  },
  {
    icon: Droplets,
    title: "Eficiencia y huella hídrica",
    description: "Diseño estrategias de sostenibilidad hídrica, certificación de huella hídrica y cumplimiento normativo para empresas agrícolas e industriales.",
    accent: "#1E6B8A",
  },
  {
    icon: TrendingUp,
    title: "Estrategia y crecimiento",
    description: "Dirección de producto SaaS, adopción tecnológica y escalabilidad de soluciones agtech. Metodología probada en mercados internacionales.",
    accent: "#C8A951",
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--bg-warm)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>
            Áreas de impacto
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold" style={{ color: "var(--dark)" }}>
            Problemas que resuelvo
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Más de 15 años de experiencia conectando tecnología, agricultura y sostenibilidad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: `${p.accent}10` }}
              >
                <p.icon className="w-6 h-6" style={{ color: p.accent }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--dark)" }}>
                {p.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">{p.description}</p>
              <div
                className="absolute bottom-0 left-8 right-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: p.accent }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}