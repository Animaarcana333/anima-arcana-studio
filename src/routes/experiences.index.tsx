import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageShell, PageHeader } from "@/components/PageShell";
import { EXPERIENCES } from "@/lib/experiences";
import { Divider, Watermark } from "@/components/Emblem";

const RITUAL_GRADE = "sepia(0.14) saturate(0.92) contrast(1.05) brightness(1.02)";

export const Route = createFileRoute("/experiences/")({
  head: () => ({
    meta: [
      { title: "Experiences — Anima Arcana" },
      {
        name: "description",
        content:
          "Five interconnected pathways of embodied healing: The Returning Body, Triple Vagal Nerve Method, Reiki, Kundalini Life Force Activation and Intuitive Tarot Readings.",
      },
      { property: "og:title", content: "Ways to Walk the Path — Anima Arcana Experiences" },
      {
        property: "og:description",
        content: "Interconnected pathways of embodied healing, intuitive guidance and ritual.",
      },
      { property: "og:url", content: "/experiences" },
    ],
    links: [{ rel: "canonical", href: "/experiences" }],
  }),
  component: Experiences,
});

function Experiences() {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && EXPERIENCES.some((e) => e.slug === hash)) {
      setExpanded(hash);
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  const toggle = (slug: string) => {
    setExpanded((cur) => (cur === slug ? null : slug));
  };

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
          {EXPERIENCES.map((e, i) => {
            const isOpen = expanded === e.slug;
            return (
              <article
                key={e.slug}
                id={e.slug}
                className="scroll-mt-28 border-b border-burgundy/10 pb-16 last:border-none"
              >
                <div
                  className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={e.image}
                      alt={e.name}
                      className="h-[420px] w-full object-cover md:h-[520px]"
                      style={{ filter: RITUAL_GRADE }}
                      loading="lazy"
                    />
                    <Watermark />
                  </div>
                  <div>
                    <p className="text-sacred text-[10px] text-burgundy">Pathway 0{i + 1}</p>
                    <h2 className="mt-3 font-display text-4xl text-burgundy sm:text-5xl">
                      {e.name}
                    </h2>
                    <p className="mt-4 font-display text-xl italic text-ink/70">
                      {e.poeticSubtitle}
                    </p>
                    <p className="mt-6 text-ink/80">{e.intro}</p>
                    <dl className="mt-8 grid grid-cols-2 gap-6 text-sm text-ink/80">
                      <div>
                        <dt className="text-sacred text-[9px] text-burgundy/70">Duration</dt>
                        <dd className="mt-1">{e.duration}</dd>
                      </div>
                      <div>
                        <dt className="text-sacred text-[9px] text-burgundy/70">Offering</dt>
                        <dd className="mt-1">{e.price}</dd>
                      </div>
                      <div>
                        <dt className="text-sacred text-[9px] text-burgundy/70">Format</dt>
                        <dd className="mt-1">{e.format}</dd>
                      </div>
                      <div>
                        <dt className="text-sacred text-[9px] text-burgundy/70">Location</dt>
                        <dd className="mt-1">{e.location}</dd>
                      </div>
                    </dl>
                    <button
                      type="button"
                      onClick={() => toggle(e.slug)}
                      aria-expanded={isOpen}
                      aria-controls={`${e.slug}-panel`}
                      className="mt-10 inline-flex items-center border border-burgundy px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-burgundy transition-colors duration-500 hover:bg-burgundy hover:text-cream"
                    >
                      {isOpen ? "Read less" : "Read more"}
                    </button>
                  </div>
                </div>

                {isOpen ? (
                  <div
                    id={`${e.slug}-panel`}
                    className="mt-16 border-t border-burgundy/15 pt-16 fade-in-slow"
                  >
                    <div className="mx-auto max-w-3xl">
                      <div className="space-y-10">
                        {e.sections.map((s) => (
                          <div key={s.title}>
                            <h3 className="text-sacred text-[10px] text-burgundy">{s.title}</h3>
                            <p className="mt-3 font-display text-xl italic leading-relaxed text-ink/80 sm:text-2xl">
                              {s.body}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-14">
                        <h3 className="text-sacred text-[10px] text-burgundy">This may support</h3>
                        <ul className="mt-4 space-y-2 text-ink/80">
                          {e.supports.map((s) => (
                            <li key={s} className="flex items-start gap-3">
                              <span className="mt-3 block h-1 w-1 rotate-45 bg-gold" />
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-14">
                        <h3 className="text-sacred text-[10px] text-burgundy">Questions</h3>
                        <dl className="mt-6 space-y-6">
                          {e.faq.map((q) => (
                            <div key={q.q}>
                              <dt className="font-display text-xl text-burgundy">{q.q}</dt>
                              <dd className="mt-2 text-ink/80">{q.a}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>

                      <div className="mt-14 border-l border-burgundy/40 pl-5">
                        <p className="text-sm italic text-ink/70">{e.safety}</p>
                      </div>

                      <div className="mt-14 flex flex-wrap gap-4">
                        <button
                          type="button"
                          disabled
                          className="cursor-not-allowed border border-burgundy/50 px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-burgundy/60"
                          title="Booking will open soon"
                        >
                          Book — coming soon
                        </button>
                        <button
                          type="button"
                          disabled
                          className="cursor-not-allowed border border-burgundy/50 px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-burgundy/60"
                          title="Payments will open soon"
                        >
                          Pay — coming soon
                        </button>
                        <button
                          type="button"
                          onClick={() => toggle(e.slug)}
                          className="ml-auto text-[11px] uppercase tracking-[0.24em] text-burgundy underline underline-offset-4"
                        >
                          Read less
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
