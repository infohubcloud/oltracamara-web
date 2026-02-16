import { useLanguage } from './LanguageProvider';
import { translations } from './translations';

/**
 * Hook para internacionalización (i18n)
 * @returns {{ lang: string, t: (key: string) => string }}
 */
export function useI18n() {
  const { lang } = useLanguage();

  /**
   * Función de traducción
   * @param {string} key - Clave de traducción
   * @returns {string} - Texto traducido o string vacía si no existe
   */
  const t = (key) => {
    // Intenta obtener la traducción en el idioma actual
    if (translations[lang] && translations[lang][key]) {
      return translations[lang][key];
    }
    
    // Fallback a español
    if (translations.es && translations.es[key]) {
      return translations.es[key];
    }
    
    // Si no existe, devuelve string vacía (sin mostrar [[MISSING:...]])
    return "";
  };

  return { lang, t };
}