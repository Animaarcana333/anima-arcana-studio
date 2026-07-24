import { createFileRoute } from "@tanstack/react-router";
import { HomeContent } from "@/components/HomeContent";

const CANON = "https://anima-arcana-studio.lovable.app";

export const Route = createFileRoute("/it/")({
  head: () => ({
    meta: [
      { title: "Anima Arcana — Ritorna al corpo. Ascolta l'anima." },
      {
        name: "description",
        content:
          "Guarigione incarnata, guida intuitiva ed esperienze rituali in comunione con la natura — Virginia Giordano, Oaxaca.",
      },
      { property: "og:title", content: "Anima Arcana — Ritorna al corpo. Ascolta l'anima." },
      {
        property: "og:description",
        content: "Guarigione incarnata, guida intuitiva ed esperienze rituali in comunione con la natura.",
      },
      { property: "og:locale", content: "it_IT" },
      { property: "og:url", content: `${CANON}/it` },
    ],
    links: [
      { rel: "canonical", href: `${CANON}/it` },
      { rel: "alternate", hrefLang: "en", href: `${CANON}/` },
      { rel: "alternate", hrefLang: "es", href: `${CANON}/es` },
      { rel: "alternate", hrefLang: "it", href: `${CANON}/it` },
      { rel: "alternate", hrefLang: "x-default", href: `${CANON}/` },
    ],
  }),
  component: HomeContent,
});
