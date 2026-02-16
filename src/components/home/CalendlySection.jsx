import React from "react";
import { InlineWidget } from "react-calendly";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useI18n } from "../i18n";

export default function CalendlySection() {
  const { t, lang } = useI18n();
  
  const BENEFITS = [
    t("calendly_benefit_1") || "Analizaremos tu caso real",
    t("calendly_benefit_2") || "Recibirás orientación accionable",
    t("calendly_benefit_3") || "Sin compromiso",
  ];

  // Mapeo de idiomas para Calendly (usa códigos ISO estándar)
  const calendlyLocale = {
    es: 'es',
    en: 'en',
    fr: 'fr',
    de: 'de',
    pt: 'pt'
  }[lang] || 'es';

  return (
    <section id="reservar" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--dark)" }}>
            {t("calendly_title") || "Reserva una reunión estratégica"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            {t("calendly_subtitle") || "25-35 minutos para analizar tu situación y explorar oportunidades"}
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {BENEFITS.map((benefit, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" style={{ color: "var(--primary)" }} />
                <span className="text-sm font-medium text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl shadow-xl border border-gray-200"
          style={{ background: "var(--bg-warm)", overflow: "visible" }}
        >
          <InlineWidget
            url={`https://calendly.com/oltracamara/nueva-reunion?locale=${calendlyLocale}`}
            styles={{
              height: window.innerWidth < 768 ? '1200px' : '1000px',
              minWidth: '100%',
              overflow: 'visible',
            }}
            pageSettings={{
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: '0F4C3A',
              textColor: '1A1A2E',
            }}
          />
        </motion.div>

        {/* Urgencia suave */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-6 text-sm text-gray-500 italic"
        >
          {t("calendly_note") || "La mayoría de reuniones se reservan con 1–2 semanas de antelación."}
        </motion.p>
      </div>
    </section>
  );
}