import React from "react";
import { motion } from "framer-motion";
import { Calendar, Search, Lightbulb, CheckCircle } from "lucide-react";

const STEPS = [
  {
    number: "1",
    icon: Calendar,
    title: "Reunión estratégica inicial",
    description: "Analizamos tu situación actual y objetivos concretos.",
  },
  {
    number: "2",
    icon: Search,
    title: "Auditoría y diagnóstico técnico",
    description: "Evaluación técnica exhaustiva de tu caso.",
  },
  {
    number: "3",
    icon: Lightbulb,
    title: "Identificación de oportunidades de ahorro",
    description: "Detectamos dónde puedes reducir consumo de agua.",
  },
  {
    number: "4",
    icon: CheckCircle,
    title: "Plan de acción e implementación",
    description: "Desarrollo e implementación del proyecto.",
  },
];

export default function WorkingProcess() {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--bg-warm)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--dark)" }}>
            Cómo trabajamos juntos
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all"
            >
              <div
                className="absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold"
                style={{ background: "var(--primary)" }}
              >
                {step.number}
              </div>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 mt-2"
                style={{ background: "#0F4C3A08" }}
              >
                <step.icon className="w-6 h-6" style={{ color: "var(--primary)" }} />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--dark)" }}>
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}