import React from "react";
import { motion } from "framer-motion";
import { Droplets, TrendingDown, FileCheck, Target, Globe, Users, Lightbulb, Calendar } from "lucide-react";

const METRICS = [
  { number: "+100.000 ha", text: "Hectáreas gestionadas mediante agricultura de precisión", icon: Target },
  { number: "+181.000", text: "Informes agronómicos generados con Orcelis", icon: FileCheck },
  { number: "20–40%", text: "Ahorro potencial de agua en auditorías hídricas empresariales", icon: Droplets },
  { number: ">30%", text: "Reducción media de consumo de agua en proyectos agrícolas", icon: TrendingDown },
];

const TRUST_BULLETS = [
  "Proyectos en España, Venezuela, Ecuador, Chile y México",
  "Colaboración con consultoras ESG y fondos de inversión",
  "Participación en proyectos de sostenibilidad y uso eficiente del agua",
  "Miembro de la Water Footprint Network",
];

const BUSINESS_IMPACT = [
  {
    icon: TrendingDown,
    title: "Reducción de costes operativos",
    text: "Las auditorías hídricas permiten detectar ineficiencias y reducir significativamente el gasto anual en agua y energía.",
  },
  {
    icon: Target,
    title: "Ventaja competitiva ESG",
    text: "Las empresas mejoran su posicionamiento en sostenibilidad y cumplimiento regulatorio.",
  },
  {
    icon: Lightbulb,
    title: "Decisiones basadas en datos",
    text: "Uso de datos, sensores e inteligencia artificial para optimizar recursos y planificar inversiones.",
  },
];

export default function ResultadosSection() {
  return (
    <section className="py-16 md:py-24" style={{ background: "var(--bg-section)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--dark)" }}>
            Resultados reales en proyectos de agua y sostenibilidad
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trabajo con empresas que necesitan reducir costes, optimizar recursos hídricos y avanzar en sostenibilidad con impacto medible.
          </p>
        </motion.div>

        {/* Métricas clave */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {METRICS.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                   style={{ background: "#0F4C3A10" }}>
                <metric.icon className="w-6 h-6" style={{ color: "var(--primary)" }} />
              </div>
              <p className="text-4xl font-bold mb-3" style={{ color: "var(--primary)" }}>
                {metric.number}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">{metric.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Confían en mi trabajo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-10 mb-16 border border-gray-100"
        >
          <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: "var(--dark)" }}>
            Empresas y organizaciones con las que he colaborado
          </h3>
          <p className="text-gray-600 text-center mb-6 max-w-3xl mx-auto">
            He trabajado con multinacionales del sector agroalimentario, fertilizantes, sostenibilidad y certificación, participando en proyectos en Europa y Latinoamérica.
          </p>
          <div className="grid md:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {TRUST_BULLETS.map((bullet, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "var(--primary)" }} />
                <p className="text-sm text-gray-600">{bullet}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Impacto directo en negocio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-10 text-center" style={{ color: "var(--dark)" }}>
            Impacto directo en negocio
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {BUSINESS_IMPACT.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                     style={{ background: "#0F4C3A10" }}>
                  <item.icon className="w-6 h-6" style={{ color: "var(--primary)" }} />
                </div>
                <h4 className="font-semibold mb-3" style={{ color: "var(--dark)" }}>{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Micro-CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-2xl p-10 border border-gray-100 shadow-sm"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: "var(--dark)" }}>
            ¿Quieres saber cuánto podría ahorrar tu empresa?
          </h3>
          <p className="text-gray-600 mb-6">
            En una reunión de 25 minutos analizamos tu caso sin compromiso.
          </p>
          <a
            href="#reservar"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-full shadow-lg hover:scale-[1.02] transition-transform"
            style={{ background: "var(--primary)" }}
          >
            <Calendar className="w-4 h-4" />
            Reservar reunión
          </a>
        </motion.div>
      </div>
    </section>
  );
}