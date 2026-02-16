import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, FileText, Globe, Award } from "lucide-react";
import { useI18n } from "../i18n";

export default function ImpactMetrics() {
  const { t } = useI18n();
  
  const METRICS = [
    {
      icon: TrendingUp,
      value: t("impact_hectares") || "100.000+",
      label: t("impact_hectares_desc") || "Hectáreas gestionadas",
    },
    {
      icon: FileText,
      value: t("impact_reports") || "181.000+",
      label: t("impact_reports_desc") || "Informes generados",
    },
    {
      icon: Globe,
      value: t("impact_projects") || "+20",
      label: t("impact_projects_desc") || "Proyectos internacionales",
    },
    {
      icon: Award,
      value: t("impact_training") || "+2.000",
      label: t("impact_training_desc") || "Técnicos formados",
    },
  ];

  return (
    <section className="py-16 md:py-24" style={{ background: "var(--bg-warm)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--dark)" }}>
            {t("impact_title") || "Impacto real en proyectos"}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {METRICS.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: "#0F4C3A10" }}
              >
                <metric.icon className="w-8 h-8" style={{ color: "var(--primary)" }} />
              </div>
              <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: "var(--primary)" }}>
                {metric.value}
              </div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}