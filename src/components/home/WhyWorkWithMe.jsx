import React from "react";
import { motion } from "framer-motion";
import { Award, Code, Globe, Sprout, Users } from "lucide-react";

const REASONS = [
  {
    icon: Award,
    text: "Combino experiencia científica, técnica y empresarial",
  },
  {
    icon: Code,
    text: "He desarrollado software utilizado en explotaciones reales",
  },
  {
    icon: Globe,
    text: "Experiencia en proyectos internacionales de sostenibilidad",
  },
  {
    icon: Sprout,
    text: "Entiendo tanto el campo como la tecnología",
  },
  {
    icon: Users,
    text: "Trabajo con pocas empresas a la vez",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="py-16 md:py-24" style={{ background: "var(--bg-section)" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--dark)" }}>
            Por qué colaboran conmigo
          </h2>
        </motion.div>

        <div className="space-y-4">
          {REASONS.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "#0F4C3A10" }}
              >
                <reason.icon className="w-5 h-5" style={{ color: "var(--primary)" }} />
              </div>
              <p className="text-base text-gray-700 leading-relaxed pt-2">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}