import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Anima Arcana" },
      { name: "description", content: "Reflections on tarot, embodiment, fascia, the nervous system, Reiki, ritual, nature, photography and plant wisdom." },
      { property: "og:title", content: "Journal — Anima Arcana" },
      { property: "og:description", content: "Letters, essays and reflections from the practice." },
      { property: "og:url", content: "/journal" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
  component: Journal,
});

const POSTS = [
  { title: "On the language of fascia", category: "Fascia", date: "November 2025", time: "6 min", excerpt: "Notes on what fascia asks of us — and what it seems to remember." },
  { title: "A short letter about tarot ethics", category: "Tarot", date: "October 2025", time: "4 min", excerpt: "Why I no longer answer questions the cards were never meant to answer." },
  { title: "Rest as ceremony", category: "Nervous System", date: "September 2025", time: "5 min", excerpt: "A meditation on doing less as a spiritual practice." },
  { title: "The plants I return to", category: "Plant Wisdom", date: "August 2025", time: "7 min", excerpt: "Six botanicals that keep me company through the seasons in Oaxaca." },
  { title: "Portraits and the land", category: "Photography", date: "July 2025", time: "5 min", excerpt: "What changes in a body when the landscape enters the frame." },
  { title: "On coming home to yourself", category: "Personal Reflections", date: "June 2025", time: "8 min", excerpt: "A slow essay on return, and what it costs to arrive." },
];

function Journal() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Journal"
        title="Letters from the Practice"
        subtitle="Slow essays and reflections on body, symbol, plant and land."
      />
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="divide-y divide-burgundy/15 border-y border-burgundy/15">
          {POSTS.map((p) => (
            <article key={p.title} className="group grid gap-6 py-10 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="text-sacred text-[10px] text-burgundy">{p.category}</p>
                <p className="mt-2 text-sm text-ink/60">{p.date} · {p.time}</p>
              </div>
              <div>
                <h2 className="font-display text-3xl text-burgundy transition-colors group-hover:text-wine sm:text-4xl">{p.title}</h2>
                <p className="mt-4 text-ink/75">{p.excerpt}</p>
                <a href="#" className="link-underline mt-4 inline-block text-[11px] uppercase tracking-[0.24em] text-burgundy">Read the letter →</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
