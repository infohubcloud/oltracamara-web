import React from "react";
import { motion } from "framer-motion";
import { Leaf, Droplets, Satellite, FileText, TrendingUp, ExternalLink } from "lucide-react";

const FEATURES = [
  {
    icon: Droplets,
    text: "Riego inteligente basado en datos",
  },
  {
    icon: Satellite,
    text: "Imágenes satelitales y NDVI",
  },
  {
    icon: FileText,
    text: "Informes automáticos",
  },
  {
    icon: TrendingUp,
    text: "Decisiones agronómicas basadas en datos",
  },
];

export default function OrcelisShowcase() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ background: "#0F4C3A10" }}
              >
                <Leaf className="w-7 h-7" style={{ color: "var(--primary)" }} />
              </div>
              <div>
                <h2 className="text-3xl font-bold" style={{ color: "var(--primary)" }}>
                  Software Orcelis
                </h2>
                <span className="text-sm text-gray-500">Agricultura de precisión</span>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Plataforma de agricultura de precisión usada para gestionar más de 100.000 hectáreas.
            </p>
            <div className="space-y-4 mb-8">
              {FEATURES.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "#0F4C3A08" }}
                  >
                    <feature.icon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                  </div>
                  <span className="text-base text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
            <a
              href="https://orcelis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-full transition-all hover:scale-[1.02] shadow-lg"
              style={{ background: "var(--primary)" }}
            >
              Solicitar demo de Orcelis
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl"
            style={{ background: "linear-gradient(135deg, #0F4C3A 0%, #1A6B52 100%)" }}
          >
            <div className="aspect-[4/3] flex items-center justify-center p-12">
              <div className="text-center text-white">
                <Leaf className="w-20 h-20 mx-auto mb-4 opacity-80" />
                <div className="text-2xl font-bold mb-2">Orcelis</div>
                <div className="text-sm opacity-80">Plataforma de agricultura de precisión</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}