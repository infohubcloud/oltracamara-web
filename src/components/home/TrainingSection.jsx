import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users, Award, ArrowRight } from "lucide-react";

const AREAS = [
  {
    icon: GraduationCap,
    title: "Formación especializada",
    description: "Cursos y talleres en huella hídrica, agricultura de precisión y sostenibilidad.",
  },
  {
    icon: Users,
    title: "Mentorías",
    description: "Acompañamiento individualizado para profesionales del sector agro y sostenibilidad.",
  },
  {
    icon: Award,
    title: "Certificaciones",
    description: "Preparación para certificaciones internacionales en gestión hídrica.",
  },
];

export default function TrainingSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>
            Formación
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold" style={{ color: "var(--dark)" }}>
            Formación y mentorías especializadas
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Formo a profesionales que quieren especializarse en huella hídrica y sostenibilidad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {AREAS.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "#0F4C3A10" }}
              >
                <area.icon className="w-6 h-6" style={{ color: "var(--primary)" }} />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--dark)" }}>
                {area.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#reservar"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full border-2 transition-all hover:bg-gray-50"
            style={{ color: "var(--primary)", borderColor: "var(--primary)" }}
          >
            Quiero información
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}