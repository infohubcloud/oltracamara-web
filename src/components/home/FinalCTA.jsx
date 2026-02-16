import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#0F4C3A] to-[#1A6B52] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
            ¿Quieres desarrollar un proyecto de alto impacto?
          </h2>
          <p className="text-lg opacity-90 leading-relaxed max-w-2xl mx-auto">
            Analizamos tu caso y vemos cómo puedo ayudarte a reducir consumo de agua y mejorar la toma de decisiones.
          </p>
          <a
            href="#reservar"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 mt-8 px-10 py-5 text-lg font-semibold bg-white rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl"
            style={{ color: "var(--primary)" }}
          >
            <Calendar className="w-5 h-5" />
            Reservar reunión
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}