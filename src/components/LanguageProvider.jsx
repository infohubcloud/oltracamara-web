import React, { createContext, useContext, useState, useEffect } from 'react';

/**
 * Detecta el idioma basado en el subdominio
 * @returns {string} Código de idioma: "es" | "en" | "fr" | "de" | "pt"
 */
function getDomainLanguage() {
  if (typeof window === 'undefined') return 'es';
  
  const hostname = window.location.hostname;
  
  // Detectar subdominio
  if (hostname.startsWith('en.')) return 'en';
  if (hostname.startsWith('fr.')) return 'fr';
  if (hostname.startsWith('de.')) return 'de';
  if (hostname.startsWith('pt.')) return 'pt';
  
  // Sin subdominio → español (por defecto)
  return 'es';
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es');

  useEffect(() => {
    // Detectar idioma del subdominio al iniciar
    const detectedLang = getDomainLanguage();
    setLang(detectedLang);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Hook para acceder al idioma actual
 * @returns {{ lang: string, setLang: (lang: string) => void }}
 */
export function useLanguage() {
  const context = useContext(LanguageContext);
  
  // Fallback seguro si no hay contexto
  if (!context) {
    return { lang: 'es', setLang: () => {} };
  }
  
  return context;
}