import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import virginia from "@/assets/virginia-portrait.jpg";
import bodyEarth from "@/assets/body-earth.jpg";
import { Divider } from "@/components/Emblem";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The Woman Behind Anima Arcana — About Virginia Giordano" },
      { name: "description", content: "The story of Virginia Giordano — Italian roots, years of travel, a path of body, tarot, Reiki and nature that became Anima Arcana in Oaxaca." },
      { property: "og:title", content: "The Woman Behind Anima Arcana" },
      { property: "og:description", content: "A path of body, intuition, nature and touch that became Anima Arcana." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const CHAPTERS = [
  {
    title: "Roots",
    body:
      "I grew up in Italy, in a house where meals were long and the plants outside had names. My grandmothers taught me a quiet form of listening — to weather, to bodies, to the space between words. That listening never left.",
  },
  {
    title: "The Journey",
    body:
      "I spent years travelling. Southern Europe, North Africa, South America. I learned that a body carries a country inside it, and that leaving home is sometimes the way to arrive at oneself.",
  },
  {
    title: "The Body",
    body:
      "I studied fascia and long-form bodywork. I trained in Reiki. I sat with teachers of the nervous system. Slowly, the practices braided into one language — a language that trusts touch to speak where words end.",
  },
  {
    title: "The Symbol",
    body:
      "Tarot came into my life the way old friends do — quietly, without introduction. I read for people at kitchen tables long before I ever called it work. Today, the cards are a mirror I offer with care.",
  },
  {
    title: "The Land",
    body:
      "Oaxaca chose me before I chose it. The coast, the mountains, the plants, the way ceremony still lives in the ordinary. My practice grew here — held by the sea and the earth.",
  },
  {
    title: "Anima Arcana",
    body:
      "Anima Arcana is the container. Bodywork, tarot, Reiki, TVM, Kundalini, ritual photography, an apothecary, a small school. Different rooms of the same house — all built around the same quiet question: what does it mean to come home to yourself?",
  },
];

function About() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About"
        title="The Woman Behind Anima Arcana"
        subtitle="A story of body, travel, intuition and the slow becoming of a practice."
      />

      <section className="mx-auto max-w-5xl px-6">
        <img
          src={virginia}
          alt="Portrait of Virginia Giordano"
          className="mx-auto h-[70vh] w-full max-w-3xl object-cover"
        />
        <p className="mx-auto mt-10 max-w-2xl text-center font-display text-2xl italic text-ink/80">
          “My path has never belonged to a single tradition. It has unfolded through travel, the
          body, intuition, nature, touch and the quiet mysteries that reveal themselves when we
          learn how to listen.”
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24">
        <Divider className="mb-16" />
        <div className="space-y-16">
          {CHAPTERS.map((c, i) => (
            <div key={c.title} className="border-t border-burgundy/15 pt-8">
              <p className="text-sacred text-[10px] text-burgundy">Chapter {i + 1}</p>
              <h2 className="mt-3 font-display text-4xl text-burgundy sm:text-5xl">{c.title}</h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/80">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative">
        <img src={bodyEarth} alt="" className="h-[60svh] w-full object-cover" loading="lazy" />
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="font-display text-4xl text-burgundy">Training, experience, ethics</h2>
        <div className="mt-8 space-y-6 text-ink/80">
          <p>Trainings in myofascial and long-form bodywork, Reiki (levels I–III), nervous-system-centered practices, and independent tarot study across classical and contemporary schools.</p>
          <p>Practice held with informed consent, confidentiality, and clear scope. I do not diagnose, treat or cure medical or psychiatric conditions. When something belongs elsewhere, I say so.</p>
          <p>Languages: English, Italian, Spanish.</p>
        </div>
      </section>
    </PageShell>
  );
}
