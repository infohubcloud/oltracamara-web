import React from "react";
import { motion } from "framer-motion";
import { Sprout, Droplets, Building, GraduationCap } from "lucide-react";
import { useI18n } from "../i18n";

export default function ClientTypes() {
  const { t } = useI18n();
  
  const CLIENTS = [
    {
      icon: Sprout,
      title: t("clients_agriculture_title") || "Empresas agrícolas y agroindustria",
      description: t("clients_agriculture_desc") || "Optimización de riego, fertirrigación y toma de decisiones basada en datos.",
    },
    {
      icon: Droplets,
      title: t("clients_industry_title") || "Empresas del agua y sostenibilidad",
      description: t("clients_industry_desc") || "Huella hídrica, certificación y estrategia ESG.",
    },
    {
      icon: Building,
      title: t("clients_investment_title") || "Ingenierías y consultoras ambientales",
      description: t("clients_investment_desc") || "Colaboración técnica en proyectos complejos de alto impacto.",
    },
    {
      icon: GraduationCap,
      title: "Universidades y centros formativos",
      description: "Cursos, másteres y formación técnica especializada.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--dark)" }}>
            {t("clients_title") || "¿Con quién trabajo?"}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {CLIENTS.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "#0F4C3A10" }}
              >
                <client.icon className="w-7 h-7" style={{ color: "var(--primary)" }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--dark)" }}>
                {client.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{client.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}