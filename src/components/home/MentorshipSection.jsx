import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";

const MENTORSHIPS = [
  {
    title: "Mentoría Asesor Experto en Huella Hídrica",
    description: "Formación especializada para posicionarte como experto en gestión del agua y sostenibilidad.",
  },
  {
    title: "Mentoría Auditor de Huella Hídrica",
    description: "Capacitación técnica para realizar auditorías de huella hídrica según estándares internacionales.",
  },
];

export default function MentorshipSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--bg-warm)" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--dark)" }}>
            Mentorías profesionales
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Formación especializada para profesionales que quieren posicionarse en sostenibilidad y agua.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {MENTORSHIPS.map((mentorship, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "#0F4C3A10" }}
              >
                <Award className="w-6 h-6" style={{ color: "var(--primary)" }} />
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--dark)" }}>
                {mentorship.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{mentorship.description}</p>
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
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full border-2 transition-all hover:bg-gray-50"
            style={{ color: "var(--primary)", borderColor: "var(--primary)" }}
          >
            <Calendar className="w-4 h-4" />
            Solicitar información
          </a>
        </motion.div>
      </div>
    </section>
  );
}