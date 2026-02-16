import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Linkedin, Mail, Calendar } from "lucide-react";
import { useI18n } from "../i18n";

export default function FooterSection() {
  const { t } = useI18n();
  
  return (
    <footer style={{ background: "var(--dark)" }} className="text-white">
      {/* Final conversion section */}
      <div className="border-b border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">{t("footer_cta_title")}</h3>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            {t("footer_cta_desc")}
          </p>
          <a
            href={createPageUrl("Home") + "#reservar"}
            onClick={(e) => {
              const isHome = window.location.pathname === '/' || window.location.pathname.includes('/Home');
              if (isHome) {
                e.preventDefault();
                document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full transition-all hover:scale-[1.02] shadow-lg"
            style={{ background: "var(--accent)", color: "var(--dark)" }}
            >
            <Calendar className="w-5 h-5" />
            {t("cta_book_meeting")}
            </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698a0a1210a3cce1f4f8cbc4/ba9741525_LOGOMAOCWEB2.png"
                alt="Marco Antonio Oltra Cámara"
                className="h-28 w-auto"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              {t("footer_brand_desc")}
            </p>
            </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">{t("footer_navigation")}</h4>
            <div className="space-y-2">
              {[
                { label: t("nav_home"), page: "Home" },
                { label: t("nav_services"), page: "Servicios" },
                { label: t("nav_about"), page: "SobreMi" },
                { label: t("nav_projects"), page: "Proyectos" },
                { label: t("nav_contact"), page: "Contacto" },
              ].map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className="block text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">{t("footer_contact")}</h4>
            <div className="space-y-3">
              <a
                href="mailto:marcoantonio@oltracamara.es"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                marcoantonio@oltracamara.es
              </a>
              <a
                href="https://www.linkedin.com/in/oltracamara/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                linkedin.com/in/oltracamara
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Marco Antonio Oltra Cámara. {t("footer_rights")}
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">
              {t("footer_legal")}
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">
              {t("footer_privacy")}
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">
              {t("footer_cookies")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}