import { useTranslation } from "react-i18next";
import Background from "@/components/Background";
import Terminal from "@/components/Terminal";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="flex items-stretch justify-center px-16 py-10
      text-zinc-900 w-full min-h-[calc(100vh-3.5rem)] relative gap-10
    ">
      <Background />

      <div className="z-10 flex-1 flex flex-col justify-center items-start text-left">
        <span className="text-xl ml-0.5 text-zinc-600 font-medium">{t("hero.description")}</span>

        <span className="text-4xl font-bold mt-1 tracking-tight">
          {t("hero.descriptionHighlight")}
        </span>

        <button
          className="
            font-medium cursor-pointer mt-6 bg-zinc-900 text-white px-5 py-2
            rounded-md hover:bg-zinc-800 transition-colors duration-300
            shadow-sm flex items-center gap-2
          "
        >
          {t("hero.cta-button-cv")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 8l-3-3m3 3l3-3"
            />
          </svg>
        </button>
      </div>

      <div className="z-10 flex-1 rounded-br-xl border-zinc-200 flex items-center justify-end">
        <Terminal />
      </div>

    </section>
  )
}
