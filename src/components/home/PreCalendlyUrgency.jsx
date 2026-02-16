import React from "react";
import { motion } from "framer-motion";
import { Clock, Calendar } from "lucide-react";

export default function PreCalendlyUrgency() {
  return (
    <section className="py-16 md:py-20" style={{ background: "var(--bg-warm)" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: "var(--dark)" }}>
            Con quién trabajo
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto">
            Trabajo en <strong>proyectos empresariales y colaboraciones estratégicas</strong> con empresas medianas, grandes y multinacionales.
          </p>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            No realizo servicios puntuales para proyectos personales o pequeños negocios.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-6">
            <Clock className="w-4 h-4" />
            <span>Reuniones estratégicas: 25–35 minutos · Videollamada o teléfono</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}