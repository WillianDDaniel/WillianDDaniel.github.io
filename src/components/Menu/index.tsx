import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";

export default function Menu() {
  const { t } = useTranslation();

  return (
    <ul className="
      flex items-center gap-6 text-gray-800 dark:text-gray-200 font-normal
    ">
      <li><a href="#hero">{t("menu.home")}</a></li>
      <li><a href="#about">{t("menu.about")}</a></li>
      <li><a href="#projects">{t("menu.projects")}</a></li>
      <li><a href="#contact">{t("menu.contact")}</a></li>

      <li><LanguageSwitcher /></li>
    </ul>
  )
}