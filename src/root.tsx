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

export function meta({ params }: { params: { lang: string } }) {
  const siteUrl = "https://willianddaniel.github.io";
  const currentLang = params.lang || 'pt-br';

  const seoText = {
    'en': {
      title: "Willian Daniel | Full-Stack Developer",
      desc: "Willian Daniel's Portfolio, Full-Stack Software Developer. Explore my projects, skills, and experiences."
    },
    'es': {
      title: "Willian Daniel | Desarrollador Full-Stack",
      desc: "Portafolio de Willian Daniel, Desarrollador de Software Full-Stack. Explora mis proyectos, habilidades y experiencias."
    },
    'pt-br': {
      title: "Willian Daniel | Desenvolvedor Full-Stack",
      desc: "Portfólio de Willian Daniel, Desenvolvedor de Software Full-Stack. Explore meus projetos, habilidades e experiências."
    }
  };

  const activeSeo = seoText[currentLang as keyof typeof seoText] || seoText['pt-br'];

  return [
    { title: activeSeo.title },
    { name: "description", content: activeSeo.desc },
    { name: "author", content: "Willian Daniel" },
    { name: "keywords", content: "Willian Daniel, Desenvolvedor, Portfólio, Front-end, Back-end, Fullstack, Programador, Web" },

    { property: "og:type", content: "website" },
    { property: "og:title", content: activeSeo.title },
    { property: "og:description", content: activeSeo.desc },
    { property: "og:url", content: siteUrl },
    { property: "og:image", content: `${siteUrl}/og-image.jpg` },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: activeSeo.title },
    { name: "twitter:description", content: activeSeo.desc },
    { name: "twitter:image", content: `${siteUrl}/og-image.jpg` },
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
