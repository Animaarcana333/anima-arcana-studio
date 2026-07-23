import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { EXPERIENCES } from "@/lib/experiences";
import { Divider } from "@/components/Emblem";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences — Anima Arcana" },
      { name: "description", content: "Five interconnected pathways: The Returning Body, Reiki, Triple Vagal Nerve Method, Kundalini Life Force Activation Ceremony and Intuitive Tarot Readings." },
      { property: "og:title", content: "Ways to Walk the Path — Anima Arcana Experiences" },
      { property: "og:description", content: "Interconnected pathways of embodied healing, intuitive guidance and ritual." },
      { property: "og:url", content: "/experiences" },
    ],
    links: [{ rel: "canonical", href: "/experiences" }],
  }),
  component: Experiences,
});

function Experiences() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Experiences"
        title="Ways to Walk the Path"
        subtitle="Each experience begins with listening — to the body, to the nervous system, to intuition and to the deeper movements of the soul."
      />

      <section className="mx-auto max-w-[1300px] px-5 pb-24 lg:px-10">
        <Divider className="mb-20" />
        <div className="space-y-24 md:space-y-32">
          {EXPERIENCES.map((e, i) => (
            <article
              key={e.slug}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="overflow-hidden">
                <img src={e.image} alt={e.name} className="h-[520px] w-full object-cover" loading="lazy" />
              </div>
              <div>
                <p className="text-sacred text-[10px] text-burgundy">Pathway 0{i + 1}</p>
                <h2 className="mt-3 font-display text-4xl text-burgundy sm:text-5xl">{e.name}</h2>
                <p className="mt-4 font-display text-xl italic text-ink/70">{e.poeticSubtitle}</p>
                <p className="mt-6 text-ink/80">{e.intro}</p>
                <dl className="mt-8 grid grid-cols-2 gap-6 text-sm text-ink/80">
                  <div><dt className="text-sacred text-[9px] text-burgundy/70">Duration</dt><dd className="mt-1">{e.duration}</dd></div>
                  <div><dt className="text-sacred text-[9px] text-burgundy/70">Offering</dt><dd className="mt-1">{e.price}</dd></div>
                  <div><dt className="text-sacred text-[9px] text-burgundy/70">Format</dt><dd className="mt-1">{e.format}</dd></div>
                  <div><dt className="text-sacred text-[9px] text-burgundy/70">Location</dt><dd className="mt-1">{e.location}</dd></div>
                </dl>
                <Link
                  to="/experiences/$slug"
                  params={{ slug: e.slug }}
                  className="mt-10 inline-flex items-center border border-burgundy px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-burgundy hover:bg-burgundy hover:text-cream transition-colors duration-500"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
