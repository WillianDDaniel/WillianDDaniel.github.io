import { Trans, useTranslation } from "react-i18next";
import { calculateAge } from "../../helpers/calculateAge"

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center text-white">
      <h2>{t("about.title")}</h2>

      <div className="w-10/12 flex">
        {/* aqui */}
        <div className="w-4/12 bg-white p-6 rounded-l-md text-black shadow-lg">
          <div className="space-y-2">
            <p className="font-semibold text-lg">{t("about.name", { defaultValue: "Willian Deiviti Daniel" })}</p>
            <p className="text-gray-700">{t("about.nacionality")}</p>
            <p className="text-gray-700">{t("about.age", { year: calculateAge(1992, 1, 22) })}</p>
            <p className="text-gray-700">{t("about.location")}</p>
            <p className="text-gray-700">
              <span className="font-medium">{t("about.cursing")}:</span> {t("about.university")}
            </p>
          </div>
        </div>

        {/* aqui também */}
        <div className="
          w-8/12 p-6 ml-6
          border-r-2 border-b-2 border-white rounded-br-md rounded-tr-md
          shadow-lg
        ">
          <h3 className="text-xl font-semibold mb-4">{t("about.bio.title")}</h3>
          <div className="space-y-3 text-gray-100 leading-relaxed">
            <p><Trans>{t("about.bio.paragraph1")}</Trans></p>
            <p><Trans>{t("about.bio.paragraph2")}</Trans></p>
          </div>
        </div>
      </div>
    </section>
  )
}