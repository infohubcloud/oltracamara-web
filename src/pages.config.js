/**
 * pages.config.js - Page routing configuration
 *
 * Nota: En Vercel (Linux) los imports son CASE-SENSITIVE.
 * Este archivo usa import.meta.glob para registrar páginas de forma robusta
 * aunque tus ficheros estén como contacto.jsx, Contacto.jsx, etc.
 */

import __Layout from "./Layout.jsx";

// Auto-import de todas las páginas dentro de /pages (Vite)
const pageModules = import.meta.glob("./pages/*.{js,jsx,ts,tsx}", { eager: true });

// Helper: encuentra una página por nombre de archivo, ignorando mayúsculas/minúsculas
function pickPage(name) {
  const target = String(name).toLowerCase();

  // Busca coincidencia exacta por basename (sin extensión)
  for (const [path, mod] of Object.entries(pageModules)) {
    const file = path.split("/").pop() || "";
    const base = file.replace(/\.(js|jsx|ts|tsx)$/, "").toLowerCase();
    if (base === target) return mod?.default;
  }

  // Fallback: busca por includes (por si hay guiones/espacios)
  for (const [path, mod] of Object.entries(pageModules)) {
    const file = path.split("/").pop() || "";
    const base = file.replace(/\.(js|jsx|ts|tsx)$/, "").toLowerCase();
    if (base.replace(/[-_\s]/g, "") === target.replace(/[-_\s]/g, "")) return mod?.default;
  }

  return undefined;
}

// Canonical pages (estas son las rutas/keys que usa tu app)
const Home = pickPage("Home");
const Servicios = pickPage("Servicios");
const SobreMi = pickPage("SobreMi") || pickPage("Sobre Mi") || pickPage("Sobre-mi") || pickPage("SobreMi");
const Proyectos = pickPage("Proyectos");
const Contacto = pickPage("Contacto");

// Si alguna no existe, fallará de forma clara (mejor que un 404 silencioso)
function assertPage(Component, name) {
  if (!Component) {
    throw new Error(
      `[pages.config] No se encontró la página "${name}" en src/pages/. ` +
      `Revisa el nombre del archivo (mayúsculas/minúsculas) y que exporte default.`
    );
  }
  return Component;
}

export const PAGES = {
  "Home": assertPage(Home, "Home"),
  "Servicios": assertPage(Servicios, "Servicios"),
  "SobreMi": assertPage(SobreMi, "SobreMi"),
  "Proyectos": assertPage(Proyectos, "Proyectos"),
  "Contacto": assertPage(Contacto, "Contacto"),
};

export const pagesConfig = {
  mainPage: "Home",
  Pages: PAGES,
  Layout: __Layout,
};
