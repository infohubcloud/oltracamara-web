import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Leaf, Droplets } from "lucide-react";

const PROJECTS = [
  {
    icon: Leaf,
    name: "Orcelis",
    role: "CEO & Founder",
    url: "https://orcelis.com",
    description: "Software avanzado de agricultura de precisión TODO EN UNO. Gestión de riego, fertilización, NDVI, cuaderno de campo y más. Tecnología desarrollada y utilizada en explotaciones reales durante años. Tasa de retención del 98%. Plataforma utilizada por ingenieros agrónomos, cooperativas y productores en España y Latinoamérica.",
    highlights: ["+100.000 hectáreas gestionadas", "+181.000 informes generados", "98% retención"],
    color: "#0F4C3A",
  },
  {
    icon: Droplets,
    name: "Aquafides",
    role: "Director",
    url: "https://aquafides.org",
    description: "Única empresa que certifica la Huella Hídrica bajo estándares internacionales. Certificación, formación y consultoría en sostenibilidad hídrica para empresas e instituciones. Sedes en Valencia y Andorra, presencia en Perú.",
    highlights: ["Certificación huella hídrica", "Sostenibilidad", "Internacional"],
    color: "#1E6B8A",
  },
];

export default function SocialProofSection() {
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
            Trayectoria
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold" style={{ color: "var(--dark)" }}>
            Dos líneas de impacto
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Tecnología agrícola y sostenibilidad hídrica: dos vertientes complementarias que comparten un objetivo común.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative bg-white rounded-2xl p-8 md:p-10 border border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-500 block"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: `${p.color}10` }}
                  >
                    <p.icon className="w-7 h-7" style={{ color: p.color }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: p.color }}>
                      {p.name}
                    </h3>
                    <span className="text-sm text-gray-500">{p.role}</span>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-300 group-hover:text-gray-500 transition-colors" />
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{p.description}</p>

              <div className="flex flex-wrap gap-2">
                {p.highlights.map((h, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 rounded-full text-xs font-medium border"
                    style={{ color: p.color, borderColor: `${p.color}25`, background: `${p.color}06` }}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}