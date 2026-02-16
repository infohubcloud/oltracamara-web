import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Calendar, ArrowRight, TrendingUp, FileText, Globe, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "../i18n";

export default function HeroSection() {
  const { t } = useI18n();
  
  const METRICS = [
    { icon: TrendingUp, text: t("hero_metric_hectares") || "+100.000 hectáreas gestionadas con tecnología Orcelis" },
    { icon: FileText, text: t("hero_metric_reports") || "+181.000 informes agronómicos generados" },
    { icon: Globe, text: t("hero_metric_projects") || "Proyectos en 5 países" },
    { icon: Award, text: t("hero_metric_training") || "+2.000 técnicos formados" },
  ];
  
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAF7] via-white to-[#F0F7F4]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04]"
           style={{ background: "radial-gradient(circle, #0F4C3A 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03]"
           style={{ background: "radial-gradient(circle, #C8A951 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-32 md:pb-28 w-full">
        <div className="max-w-5xl">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]"
            style={{ color: "var(--dark)" }}
          >
            {t("hero_title") || "Ayudo a empresas agrícolas, industriales y de inversión a optimizar su consumo de agua y avanzar en sostenibilidad con impacto medible"}
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed"
          >
            <p>
              {t("hero_description") || "Ingeniero Agrónomo (PhD) · CEO de Orcelis · Director de Aquafides · Especialista en agricultura de precisión, huella hídrica y uso eficiente del agua"}
            </p>
          </motion.div>

          {/* Metrics - visual impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 grid sm:grid-cols-2 gap-4"
          >
            {METRICS.map((metric, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/60 border border-gray-100">
                <metric.icon className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "var(--primary)" }} />
                <span className="text-sm font-medium text-gray-700 leading-relaxed">{metric.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#reservar"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#0F4C3A]/20"
              style={{ background: "var(--primary)" }}
            >
              <Calendar className="w-5 h-5" />
              {t("hero_cta_primary") || "Reservar reunión estratégica (25 min)"}
            </a>
            <Link
              to={createPageUrl("Servicios")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full border-2 transition-all hover:bg-gray-50"
              style={{ color: "var(--primary)", borderColor: "var(--primary)" }}
            >
              {t("hero_cta_secondary") || "Ver servicios"}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}