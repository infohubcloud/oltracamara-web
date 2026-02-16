import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Briefcase, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    tag: "Rápido",
    title: "Diagnóstico Express",
    time: "30–60 min",
    description: "Revisión de tu caso concreto y plan de acción con los siguientes pasos. Ideal para validar ideas, resolver dudas puntuales o evaluar la viabilidad de un proyecto.",
    features: ["Análisis de situación actual", "Identificación de oportunidades", "Hoja de ruta con próximos pasos"],
    icon: Clock,
    cta: "Reservar diagnóstico",
  },
  {
    tag: "Proyecto",
    title: "Implementación",
    time: "1–6 meses",
    description: "Acompañamiento integral en la digitalización de explotaciones agrícolas, implementación de huella hídrica o lanzamiento de producto agtech.",
    features: ["Estrategia y planificación", "Implementación técnica", "Seguimiento y optimización"],
    icon: Briefcase,
    cta: "Solicitar propuesta",
    featured: true,
  },
  {
    tag: "Continuo",
    title: "Advisory / Colaboración",
    time: "Mensual",
    description: "Soporte recurrente como asesor externo: dirección de innovación, revisión de producto, estrategia de crecimiento o mentoring para equipos técnicos.",
    features: ["Reuniones periódicas", "Revisión estratégica", "Acceso directo y prioritario"],
    icon: Users,
    cta: "Explorar opciones",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>
            Cómo puedo ayudarte
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold" style={{ color: "var(--dark)" }}>
            Servicios
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Tres formatos adaptados a lo que necesitas, desde una sesión puntual hasta colaboración continua.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl ${
                s.featured
                  ? "border-[#0F4C3A]/20 bg-gradient-to-b from-[#0F4C3A]/[0.02] to-white ring-1 ring-[#0F4C3A]/10"
                  : "border-gray-100 bg-white hover:border-gray-200"
              }`}
            >
              {s.featured && (
                <div className="absolute -top-3 left-8 px-3 py-1 rounded-full text-xs font-semibold text-white"
                     style={{ background: "var(--primary)" }}>
                  Más solicitado
                </div>
              )}

              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                  {s.tag}
                </span>
                <span className="text-xs text-gray-400">·</span>
                <span className="text-xs text-gray-500">{s.time}</span>
              </div>

              <s.icon className="w-8 h-8 mb-4" style={{ color: "var(--primary)" }} />

              <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--dark)" }}>
                {s.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">{s.description}</p>

              <ul className="space-y-2 mb-8">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to={createPageUrl("Contacto")}
                className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                  s.featured ? "text-white px-5 py-2.5 rounded-full" : ""
                }`}
                style={s.featured
                  ? { background: "var(--primary)" }
                  : { color: "var(--primary)" }
                }
              >
                <Calendar className="w-4 h-4" />
                {s.cta}
                {!s.featured && <ArrowRight className="w-3.5 h-3.5" />}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#reservar"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#0F4C3A]/20"
            style={{ background: "var(--primary)" }}
          >
            <Calendar className="w-4 h-4" />
            Reservar reunión
          </a>
          <div className="mt-6">
            <Link
              to={createPageUrl("Servicios")}
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
            >
              Ver todos los detalles de servicios
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}