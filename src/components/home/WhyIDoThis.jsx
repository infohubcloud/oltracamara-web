import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function WhyIDoThis() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6"
               style={{ background: "#0F4C3A10" }}>
            <Heart className="w-6 h-6" style={{ color: "var(--primary)" }} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: "var(--dark)" }}>
            Por qué hago esto
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            <p>
              Crecí rodeado de agricultura y siempre me fascinó cómo algo tan esencial para la vida 
              dependía tanto de decisiones tomadas con información limitada.
            </p>
            <p>
              El agua es un recurso crítico y finito. La agricultura consume la mayor parte del agua 
              dulce del planeta. Optimizar su uso no es solo eficiencia — es responsabilidad.
            </p>
            <p>
              Por eso dedico mi carrera a crear herramientas, metodologías y conocimiento que ayuden 
              a profesionales y organizaciones a tomar mejores decisiones con datos reales y con 
              impacto medible en sostenibilidad.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}