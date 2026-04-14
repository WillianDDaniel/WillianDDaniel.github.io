import { useTranslation } from "react-i18next";

import LanguageSwitcher from "../LanguageSwitcher";
import ThemeToggle from "../ToggleTheme";

interface MenuProps {
  mobile?: boolean;
  onClose?: () => void;
}

export default function Menu({ mobile = false, onClose }: MenuProps) {
  const { t } = useTranslation();

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    onClose?.();
  };

  const handleClick = () => {
    onClose?.();
  };

  if (mobile) {
    return (
      <ul className="flex flex-col px-6 pb-6 gap-5 text-gray-200 font-normal border-t border-zinc-800 pt-4">
        <li>
          <a href="#hero" onClick={scrollToTop}>
            {t("menu.home")}
          </a>
        </li>
        <li><a href="#about" onClick={handleClick}>{t("menu.about")}</a></li>
        <li><a href="#projects" onClick={handleClick}>{t("menu.projects")}</a></li>
        <li><a href="#contact" onClick={handleClick}>{t("menu.contact")}</a></li>
        <li className="flex items-center gap-4 pt-2 border-t border-zinc-800">
          <LanguageSwitcher />
          <ThemeToggle />
        </li>
      </ul>
    );
  }

  return (
    <ul className="flex items-center gap-6 text-gray-200 font-normal">
      <li>
        <a href="#hero" onClick={scrollToTop}>
          {t("menu.home")}
        </a>
      </li>
      <li><a href="#about">{t("menu.about")}</a></li>
      <li><a href="#projects">{t("menu.projects")}</a></li>
      <li><a href="#contact">{t("menu.contact")}</a></li>
      <li><LanguageSwitcher /></li>
      <li><ThemeToggle /></li>
    </ul>
  );
}