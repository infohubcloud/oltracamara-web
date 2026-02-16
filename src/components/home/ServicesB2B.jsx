import React from "react";
import { motion } from "framer-motion";
import { Sprout, Droplets, Briefcase, GraduationCap, Calendar } from "lucide-react";
import { useI18n } from "../i18n";

export default function ServicesB2B() {
  const { t } = useI18n();
  
  const SERVICES = [
    {
      icon: Sprout,
      title: t("services_precision_title") || "Agricultura de precisión",
      description: t("services_precision_desc") || "Optimización del riego y fertilización mediante datos satelitales, sensores y modelos agronómicos.",
    },
    {
      icon: Droplets,
      title: t("services_footprint_title") || "Huella hídrica y sostenibilidad",
      description: t("services_footprint_desc") || "Auditorías, certificación y estrategia hídrica empresarial.",
    },
    {
      icon: Briefcase,
      title: "Desarrollo de proyectos técnicos",
      description: "Colaboración con empresas e ingenierías en proyectos de alto impacto.",
    },
    {
      icon: GraduationCap,
      title: "Formación y mentoring profesional",
      description: "Cursos, másteres y mentorías técnicas especializadas.",
    },
  ];

  return (
    <section className="py-20 md:py-28" style={{ background: "var(--bg-section)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>
            {t("nav_services") || "Servicios"}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold" style={{ color: "var(--dark)" }}>
            {t("services_title") || "Cómo puedo ayudarte"}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "#0F4C3A10" }}
              >
                <service.icon className="w-7 h-7" style={{ color: "var(--primary)" }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--dark)" }}>
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              <a
                href="#reservar"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: "var(--primary)" }}
              >
                <Calendar className="w-4 h-4" />
                {t("cta_book_meeting") || "Solicitar reunión"}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}