import { useTranslation } from "react-i18next";

export default function Menu() {
  const { t } = useTranslation();

	return (
    <ul className="
      flex pr-8 items-center gap-6 text-gray-800 dark:text-gray-200 font-medium
    ">
      <li>{t("menu.home")}</li>
      <li>{t("menu.about")}</li>
      <li>{t("menu.projects")}</li>
      <li>{t("menu.contact")}</li>
    </ul>
	)
}