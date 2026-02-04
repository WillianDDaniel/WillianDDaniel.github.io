import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="
      flex items-center justify-around text-white
      w-full px-2 grow
    ">
      <div>
        <p className="flex flex-col items-center">
          <span className="text-2xl">{t("hero.description")}</span>

          <span className="text-center text-4xl font-bold w-96 px-2">
            {t("hero.descriptionHighlight")}
          </span>
        </p>
      </div>

      <div>
        <img src="/portfolio-web-willian-daniel.svg"
          alt="Portfólio Willian Daniel" className="w-80 h-auto"
        />
      </div>
    </section>
  )
}   