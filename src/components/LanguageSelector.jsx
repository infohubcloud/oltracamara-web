import React from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const LANGUAGES = [
  { code: "es", label: "ES", domain: "https://oltracamara.es" },
  { code: "en", label: "EN", domain: "https://en.oltracamara.es" },
  { code: "fr", label: "FR", domain: "https://fr.oltracamara.es" },
  { code: "de", label: "DE", domain: "https://de.oltracamara.es" },
  { code: "pt", label: "PT", domain: "https://pt.oltracamara.es" },
];

export default function LanguageSelector({ mobile = false }) {
  const { lang } = useLanguage();

  const handleLanguageChange = (targetDomain) => {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    window.location.href = `${targetDomain}${currentPath}${currentHash}`;
  };

  if (mobile) {
    return (
      <div className="px-4 py-3 border-t border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <Globe className="w-4 h-4 text-gray-400" />
          <span className="text-xs font-medium text-gray-500 uppercase">Idioma</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {LANGUAGES.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.domain)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                lang === language.code
                  ? "text-white"
                  : "text-gray-600 bg-gray-100 hover:bg-gray-200"
              }`}
              style={lang === language.code ? { background: "var(--primary)" } : {}}
            >
              {language.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
        <Globe className="w-4 h-4" />
        <span className="uppercase">{lang}</span>
      </button>
      <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-gray-100 py-1 min-w-[120px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        {LANGUAGES.map((language) => (
          <button
            key={language.code}
            onClick={() => handleLanguageChange(language.domain)}
            className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
              lang === language.code
                ? "text-white"
                : "text-gray-700 hover:bg-gray-50"
            }`}
            style={lang === language.code ? { background: "var(--primary)" } : {}}
          >
            {language.label}
          </button>
        ))}
      </div>
    </div>
  );
}