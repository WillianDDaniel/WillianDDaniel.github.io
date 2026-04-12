import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  const currentLanguage = i18n.language || "pt-BR";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getDisplayLanguage = () => {
    if (currentLanguage.includes("en")) return "EN-US";
    if (currentLanguage.includes("es")) return "ES-ES";
    return "PT-BR";
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center gap-2 px-3 py-2 text-sm font-medium text-white
          transition-colors duration-200 shadow-sm
        "
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m5 8 6 6" />
          <path d="m4 14 6-6 2-3" />
          <path d="M2 5h12" />
          <path d="M7 2h1" />
          <path d="m22 22-5-10-5 10" />
          <path d="M14 18h6" />
        </svg>

        <span>{getDisplayLanguage()}</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="
          absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border border-zinc-200 
          z-50 py-1 overflow-hidden origin-top-right animate-in fade-in slide-in-from-top-2
        ">
          <button
            onClick={() => handleLanguageChange("pt-BR")}
            className={`
              w-full text-left px-4 py-2 text-sm transition-colors duration-150
              ${currentLanguage.includes("pt") ? "bg-zinc-100 text-zinc-900 font-medium" : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"}
            `}
          >
            Português (BR)
          </button>

          <button
            onClick={() => handleLanguageChange("en-US")}
            className={`
              w-full text-left px-4 py-2 text-sm transition-colors duration-150
              ${currentLanguage.includes("en") ? "bg-zinc-100 text-zinc-900 font-medium" : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"}
            `}
          >
            English (US)
          </button>

          <button
            onClick={() => handleLanguageChange("es-ES")}
            className={`
              w-full text-left px-4 py-2 text-sm transition-colors duration-150
              ${currentLanguage.includes("es") ? "bg-zinc-100 text-zinc-900 font-medium" : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"}
            `}
          >
            Español (ES)
          </button>
        </div>
      )}
    </div>
  );
}