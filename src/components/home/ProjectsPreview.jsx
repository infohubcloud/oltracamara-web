import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { motion } from "framer-motion";
import { ArrowRight, Mic, FileText, Monitor, Newspaper, Users, Award } from "lucide-react";

const ITEMS = [
  {
    icon: Mic,
    type: "Charla",
    title: "SIBIH – III Symposium Ibérico de Ingeniería Hortícola",
    description: "Ponencia sobre Smart Farming y agricultura de precisión.",
    link: "#",
  },
  {
    icon: Monitor,
    type: "Webinar",
    title: "Digitalización del riego en cultivos mediterráneos",
    description: "Sesión técnica sobre modelos de riego y toma de decisiones.",
    link: "#",
  },
  {
    icon: FileText,
    type: "Publicación",
    title: "Optimización de la huella hídrica en producción agroindustrial",
    description: "Artículo sobre metodología de cálculo y certificación.",
    link: "#",
  },
  {
    icon: Newspaper,
    type: "Prensa",
    title: "Orcelis patrocina Smart Farming 2022",
    description: "Cobertura mediática del evento y soluciones presentadas.",
    link: "https://orcelis.com/orcelis-patrocina-smart-farming-2022/",
  },
  {
    icon: Users,
    type: "Colaboración",
    title: "Alianza Aquafides – MH Consulting (Perú)",
    description: "Expansión de certificación de huella hídrica en Latinoamérica.",
    link: "https://aquafides.org/peru-avanza-hacia-la-eficiencia-hidrica-la-alianza-que-marcara-un-antes-y-un-despues/",
  },
  {
    icon: Award,
    type: "Reconocimiento",
    title: "Festival de Cine Solidario de Guadalajara – FESCIGU",
    description: "La huella hídrica como protagonista en el evento cultural.",
    link: "https://aquafides.org/festival-de-cine-solidario-de-guadalajara/",
  },
];

export default function ProjectsPreview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16"
        >
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>
              Portfolio
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold" style={{ color: "var(--dark)" }}>
              Proyectos, charlas y publicaciones
            </h2>
          </div>
          <Link
            to={createPageUrl("Proyectos")}
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: "var(--primary)" }}
          >
            Ver todos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ITEMS.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex flex-col p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-gray-50 group-hover:bg-[#0F4C3A]/5 transition-colors">
                  <item.icon className="w-4 h-4 text-gray-500 group-hover:text-[#0F4C3A] transition-colors" />
                </div>
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">{item.type}</span>
              </div>
              <h3 className="font-semibold text-sm mb-2" style={{ color: "var(--dark)" }}>
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{item.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}