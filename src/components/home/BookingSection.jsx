import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, Clock, Target, FileText, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const STEPS = [
  { icon: Target, text: "Revisamos tu situación actual y objetivos concretos" },
  { icon: FileText, text: "Identificamos oportunidades y prioridades" },
  { icon: CheckCircle, text: "Recibes un resumen con plan de acción y próximos pasos" },
];

export default function BookingSection() {
  const [form, setForm] = useState({ name: "", email: "", company: "", objective: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await base44.entities.Lead.create({
      ...form,
      source: "web_form",
      status: "nuevo",
    });

    await base44.integrations.Core.SendEmail({
      to: "marcoantonio@oltracamara.es",
      subject: `Nuevo lead desde web: ${form.name}`,
      body: `
        Nuevo contacto desde el formulario web:
        
        Nombre: ${form.name}
        Email: ${form.email}
        Empresa: ${form.company || "No especificada"}
        Objetivo: ${form.objective || "No especificado"}
        
        Fuente: Formulario web (Home)
      `,
    });

    base44.analytics.track({
      eventName: "booking_form_submit",
      properties: { company: form.company, has_objective: !!form.objective },
    });

    setSending(false);
    setSent(true);
    toast.success("¡Mensaje enviado! Te contactaré pronto.");
  };

  return (
    <section id="reservar" className="py-20 md:py-28" style={{ background: "var(--bg-warm)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>
              Próximo paso
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold" style={{ color: "var(--dark)" }}>
              Reserva una reunión
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              En 25–35 minutos analizamos tu caso y definimos un camino. Sin compromiso, sin letra pequeña.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Clock className="w-5 h-5 flex-shrink-0" style={{ color: "var(--primary)" }} />
                <span>25–35 min · Videollamada o teléfono</span>
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mt-8">
                Qué obtienes en la reunión
              </h3>
              {STEPS.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#0F4C3A10" }}
                  >
                    <step.icon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pt-2">{step.text}</p>
                </div>
              ))}
            </div>

            {/* Calendly placeholder */}
            <div className="mt-10 p-6 rounded-2xl border-2 border-dashed border-gray-200 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-3 text-gray-300" />
              <p className="text-sm text-gray-500 mb-2">Calendario integrado (Calendly)</p>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium underline"
                style={{ color: "var(--primary)" }}
              >
                Agendar directamente en Calendly →
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8 md:p-10">
              <h3 className="text-lg font-semibold mb-1" style={{ color: "var(--dark)" }}>
                Escríbeme directamente
              </h3>
              <p className="text-sm text-gray-500 mb-8">
                Te respondo en menos de 24 horas laborables.
              </p>

              {sent ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-12 h-12 mx-auto mb-4" style={{ color: "var(--primary)" }} />
                  <h4 className="text-lg font-semibold mb-2">¡Recibido!</h4>
                  <p className="text-sm text-gray-500">Reviso tu mensaje y te contacto pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">Nombre *</label>
                    <Input
                      required
                      placeholder="Tu nombre completo"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="h-11"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">Email *</label>
                    <Input
                      required
                      type="email"
                      placeholder="tu@empresa.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="h-11"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">Empresa</label>
                    <Input
                      placeholder="Nombre de tu empresa"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="h-11"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">¿En qué puedo ayudarte?</label>
                    <Textarea
                      placeholder="Cuéntame brevemente tu situación o necesidad..."
                      value={form.objective}
                      onChange={(e) => setForm({ ...form, objective: e.target.value })}
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={sending}
                    className="w-full h-12 text-sm font-semibold rounded-xl text-white"
                    style={{ background: "var(--primary)" }}
                  >
                    {sending ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Enviar mensaje
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}