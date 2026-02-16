import React from "react";
import { motion } from "framer-motion";
import { Sprout, Factory, Building2 } from "lucide-react";

const CLIENTS = [
  {
    icon: Sprout,
    title: "Empresas agroalimentarias",
    description: "Optimización del riego y producción mediante datos y modelos.",
  },
  {
    icon: Factory,
    title: "Industria y sostenibilidad",
    description: "Auditoría de huella hídrica y reducción del consumo de agua.",
  },
  {
    icon: Building2,
    title: "Consultoras ESG y fondos de inversión",
    description: "Soporte técnico experto en proyectos de sostenibilidad.",
  },
];

export default function TargetClients() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--dark)" }}>
            Trabajo con organizaciones que quieren reducir su consumo de agua de forma real
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {CLIENTS.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ background: "#0F4C3A10" }}
              >
                <client.icon className="w-8 h-8" style={{ color: "var(--primary)" }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--dark)" }}>
                {client.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{client.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-base text-gray-600 font-medium"
        >
          Trabajo principalmente con empresas medianas, grandes y multinacionales.
        </motion.p>
      </div>
    </section>
  );
}