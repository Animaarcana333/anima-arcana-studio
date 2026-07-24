import { createFileRoute } from "@tanstack/react-router";
import { HomeContent } from "@/components/HomeContent";

const CANON = "https://anima-arcana-studio.lovable.app";

export const Route = createFileRoute("/es/")({
  head: () => ({
    meta: [
      { title: "Anima Arcana — Regresa al cuerpo. Escucha al alma." },
      {
        name: "description",
        content:
          "Sanación encarnada, guía intuitiva y experiencias rituales en comunión con la naturaleza — Virginia Giordano, Oaxaca.",
      },
      { property: "og:title", content: "Anima Arcana — Regresa al cuerpo. Escucha al alma." },
      {
        property: "og:description",
        content: "Sanación encarnada, guía intuitiva y experiencias rituales en comunión con la naturaleza.",
      },
      { property: "og:locale", content: "es_ES" },
      { property: "og:url", content: `${CANON}/es` },
    ],
    links: [
      { rel: "canonical", href: `${CANON}/es` },
      { rel: "alternate", hrefLang: "en", href: `${CANON}/` },
      { rel: "alternate", hrefLang: "es", href: `${CANON}/es` },
      { rel: "alternate", hrefLang: "it", href: `${CANON}/it` },
      { rel: "alternate", hrefLang: "x-default", href: `${CANON}/` },
    ],
  }),
  component: HomeContent,
});
