import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const currentLanguage = i18n.language;

  return (
    <div className="flex items-center gap-2 p-1 bg-zinc-100/50 rounded-lg border border-zinc-200 w-fit">
      <button
        onClick={() => handleLanguageChange("pt-BR")}
        className={`
          px-3 py-1 text-sm font-medium rounded-md transition-all duration-200
          ${currentLanguage === "pt-BR"
            ? "bg-white text-zinc-900 shadow-sm border border-zinc-200/50"
            : "text-zinc-500 hover:text-zinc-900"
          }
        `}
      >
        PT
      </button>

      <button
        onClick={() => handleLanguageChange("en-US")}
        className={`
          px-3 py-1 text-sm font-medium rounded-md transition-all duration-200
          ${currentLanguage.includes("en")
            ? "bg-white text-zinc-900 shadow-sm border border-zinc-200/50"
            : "text-zinc-500 hover:text-zinc-900"
          }
        `}
      >
        EN
      </button>
    </div>
  );
}