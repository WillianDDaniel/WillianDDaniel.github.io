import { useEffect } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useParams
} from "react-router";
import { useTranslation } from "react-i18next";

import "./index.css";
import "./i18n";

export function links() {
  return [
    { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }
  ];
}

export function meta() {
  return [
    { title: "Willian Daniel | Desenvolvedor" },
    { name: "description", content: "Portfólio de Willian Daniel, Desenvolvedor de Software. Explore meus projetos, habilidades e experiências." },
    { name: "author", content: "Willian Daniel" },
    { name: "keywords", content: "Willian Daniel, Desenvolvedor, Portfólio, Front-end, Back-end, Fullstack, Programador, Web" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Willian Daniel | Desenvolvedor" },
    { property: "og:description", content: "Portfólio de Willian Daniel, Desenvolvedor de Software. Explore meus projetos, habilidades e experiências." },
    { property: "og:url", content: "https://seusite.com.br/" },
    { property: "og:image", content: "https://seusite.com.br/og-image.jpg" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Willian Daniel | Desenvolvedor" },
    { name: "twitter:description", content: "Portfólio de Willian Daniel, Desenvolvedor de Software. Explore meus projetos, habilidades e experiências." },
    { name: "twitter:image", content: "https://seusite.com.br/twitter-image.jpg" },
  ];
}

export default function Root() {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  const fullLang = lang === 'en' ? 'en-US' : lang === 'es' ? 'es-ES' : 'pt-BR';

  if (typeof window === "undefined" && i18n.language !== fullLang) {
    i18n.changeLanguage(fullLang);
  }

  useEffect(() => {
    if (i18n.language !== fullLang) {
      i18n.changeLanguage(fullLang);
    }
  }, [lang, i18n, fullLang]);

  return (
    <html lang={lang || "pt-br"}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            `,
          }}
        />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
