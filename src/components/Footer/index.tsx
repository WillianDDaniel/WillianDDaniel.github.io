import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="
      flex items-center justify-center
      w-full h-14 bg-white dark:bg-gray-900 mt-auto
    ">
      {t("footer.rights", { year: new Date().getFullYear() })}
    </footer>
  )
}
