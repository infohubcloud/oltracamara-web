import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "./utils";
import { Menu, X, Calendar, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSelector from "./components/LanguageSelector";

const NAV_ITEMS = [
  { label: "Inicio", page: "Home" },
  { label: "Servicios", page: "Servicios" },
  { label: "Sobre mí", page: "SobreMi" },
  { label: "Proyectos", page: "Proyectos" },
  { label: "Contacto", page: "Contacto" },
];

export default function Layout({ children, currentPageName }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
        <style>{`
        :root {
          --primary: #0F4C3A;
          --primary-light: #1A6B52;
          --accent: #C8A951;
          --accent-light: #D4BC72;
          --dark: #1A1A2E;
          --bg-warm: #FAFAF7;
          --bg-section: #F4F1EB;
        }
        * { font-family: 'Inter', system-ui, -apple-system, sans-serif; }
        html { scroll-behavior: smooth; }
        `}</style>

        {/* Header */}
        <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-2">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698a0a1210a3cce1f4f8cbc4/a12b6b998_LOGOMAOCWEB.png"
                alt="Marco Antonio Oltra Cámara"
                className="h-14 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    currentPageName === item.page
                      ? "text-[#0F4C3A] bg-[#0F4C3A]/5"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <LanguageSelector />
            </nav>

            {/* CTA + Mobile */}
            <div className="flex items-center gap-3">
              <a
                href={currentPageName === "Home" ? "#reservar" : createPageUrl("Home") + "#reservar"}
                onClick={(e) => {
                  if (currentPageName === "Home") {
                    e.preventDefault();
                    document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#0F4C3A]/20"
                style={{ background: "var(--primary)" }}
              >
                <Calendar className="w-4 h-4" />
                Reservar reunión estratégica
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      currentPageName === item.page
                        ? "text-[#0F4C3A] bg-[#0F4C3A]/5"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={currentPageName === "Home" ? "#reservar" : createPageUrl("Home") + "#reservar"}
                  onClick={(e) => {
                    setMobileOpen(false);
                    if (currentPageName === "Home") {
                      e.preventDefault();
                      document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block w-full text-center mt-3 px-5 py-3 text-sm font-semibold text-white rounded-full"
                  style={{ background: "var(--primary)" }}
                >
                  Reservar reunión estratégica
                </a>
              </div>
              <LanguageSelector mobile />
            </motion.div>
          )}
        </AnimatePresence>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Floating booking button */}
        <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => {
          if (currentPageName === "Home") {
            document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.location.href = createPageUrl("Home") + "#reservar";
          }
        }}
        className="fixed bottom-6 right-6 z-40 px-5 py-3 rounded-full text-white font-semibold text-sm shadow-2xl flex items-center gap-2 hover:scale-[1.05] active:scale-[0.98] transition-transform"
        style={{ background: "var(--primary)" }}
      >
        <Calendar className="w-4 h-4" />
        <span className="hidden sm:inline">Reservar reunión estratégica</span>
        </motion.button>

        {/* Scroll to top */}
        <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-24 right-6 z-40 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-shadow"
          >
            <ArrowUp className="w-4 h-4 text-gray-700" />
          </motion.button>
        )}
        </AnimatePresence>
    </div>
  );
}