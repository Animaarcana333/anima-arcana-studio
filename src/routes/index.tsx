import { createFileRoute } from "@tanstack/react-router";
import { HomeContent } from "@/components/HomeContent";

const CANON = "https://anima-arcana-studio.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anima Arcana — Return to the body. Listen to the soul." },
      {
        name: "description",
        content:
          "Embodied healing, intuitive guidance and ritual experiences in communion with nature — Virginia Giordano, Oaxaca.",
      },
      { property: "og:title", content: "Anima Arcana — Return to the body. Listen to the soul." },
      {
        property: "og:description",
        content: "Embodied healing, intuitive guidance and ritual experiences in communion with nature.",
      },
      { property: "og:url", content: `${CANON}/` },
    ],
    links: [
      { rel: "canonical", href: `${CANON}/` },
      { rel: "alternate", hrefLang: "en", href: `${CANON}/` },
      { rel: "alternate", hrefLang: "es", href: `${CANON}/es` },
      { rel: "alternate", hrefLang: "it", href: `${CANON}/it` },
      { rel: "alternate", hrefLang: "x-default", href: `${CANON}/` },
    ],
  }),
  component: HomeContent,
});
