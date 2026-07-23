import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { EXPERIENCES, TAROT_OFFERS } from "@/lib/experiences";
import { CalendlyBooking, InlineCalendly } from "@/components/CalendlyBooking";
import { Divider } from "@/components/Emblem";

export const Route = createFileRoute("/experiences/$slug")({
  loader: ({ params }) => {
    const exp = EXPERIENCES.find((e) => e.slug === params.slug);
    if (!exp) throw notFound();
    return { exp };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    const e = loaderData.exp;
    return {
      meta: [
        { title: `${e.name} — Anima Arcana` },
        { name: "description", content: e.short },
        { property: "og:title", content: `${e.name} — Anima Arcana` },
        { property: "og:description", content: e.short },
        { property: "og:url", content: `/experiences/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/experiences/${params.slug}` }],
    };
  },
  component: ExperienceDetail,
});

function ExperienceDetail() {
  const { exp } = Route.useLoaderData();
  const isTarot = exp.slug === "tarot";

  return (
    <PageShell>
      <section className="relative">
        <img src={exp.image} alt={exp.name} className="h-[75svh] min-h-[520px] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/85" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-5xl px-6 pb-16 text-cream">
            <p className="text-sacred text-[11px] text-cream/85">Experience</p>
            <h1 className="mt-4 font-display text-5xl text-cream sm:text-7xl lg:text-8xl">{exp.name}</h1>
            <p className="mt-6 max-w-2xl font-display text-2xl italic text-cream/90">{exp.poeticSubtitle}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-lg leading-relaxed text-ink/80">{exp.intro}</p>
        <div className="mt-10 flex justify-center">
          <CalendlyBooking url={exp.calendly} label={`Book ${exp.name.split(" ")[0]}`} />
        </div>
      </section>

      <section className="border-y border-burgundy/15 bg-parchment/30 py-16">
        <dl className="mx-auto grid max-w-5xl gap-8 px-6 sm:grid-cols-4 text-center">
          <div><dt className="text-sacred text-[9px] text-burgundy">Duration</dt><dd className="mt-2 font-display text-2xl text-burgundy">{exp.duration}</dd></div>
          <div><dt className="text-sacred text-[9px] text-burgundy">Offering</dt><dd className="mt-2 font-display text-2xl text-burgundy">{exp.price}</dd></div>
          <div><dt className="text-sacred text-[9px] text-burgundy">Format</dt><dd className="mt-2 font-display text-2xl text-burgundy">{exp.format}</dd></div>
          <div><dt className="text-sacred text-[9px] text-burgundy">Location</dt><dd className="mt-2 font-display text-2xl text-burgundy">{exp.location}</dd></div>
        </dl>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24">
        <div className="space-y-14">
          {exp.sections.map((s: { title: string; body: string }) => (
            <div key={s.title} className="border-t border-burgundy/15 pt-8">
              <h2 className="font-display text-3xl text-burgundy sm:text-4xl">{s.title}</h2>
              <p className="mt-4 text-ink/80 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {isTarot ? (
        <section className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-sacred text-[10px] text-burgundy text-center">Reading offers</p>
          <h2 className="mt-3 text-center font-display text-4xl text-burgundy sm:text-5xl">Choose the shape of your reading</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TAROT_OFFERS.map((o) => (
              <div key={o.title} className="border border-burgundy/20 bg-cream p-6">
                <h3 className="font-display text-2xl text-burgundy">{o.title}</h3>
                <div className="mt-4 space-y-1 text-sm text-ink/75">
                  <div><span className="text-sacred text-[9px] text-burgundy/70">Duration</span> · {o.duration}</div>
                  <div><span className="text-sacred text-[9px] text-burgundy/70">Offering</span> · {o.price}</div>
                  <div><span className="text-sacred text-[9px] text-burgundy/70">Format</span> · {o.format}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-3xl px-6 py-16">
        <Divider className="mb-12" />
        <h2 className="text-center font-display text-4xl text-burgundy sm:text-5xl">What this experience may support</h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {exp.supports.map((s: string) => (
            <li key={s} className="flex items-start gap-3 border border-burgundy/15 bg-cream/60 p-5">
              <span className="mt-1.5 block h-1.5 w-1.5 rotate-45 bg-burgundy" />
              <span className="text-ink/80">{s}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-center font-display text-4xl text-burgundy sm:text-5xl">Questions often asked</h2>
        <div className="mt-10 divide-y divide-burgundy/15 border-y border-burgundy/15">
          {exp.faq.map((f: { q: string; a: string }) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                <span className="font-display text-xl text-burgundy">{f.q}</span>
                <span className="text-burgundy transition-transform group-open:rotate-45">＋</span>
              </summary>
              <p className="mt-4 text-ink/75">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-10">
        <div className="border-l-2 border-gold bg-parchment/50 p-6 text-sm text-ink/75">
          <p className="text-sacred text-[10px] text-burgundy">Safety & scope</p>
          <p className="mt-2">{exp.safety}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <p className="text-sacred text-[10px] text-burgundy text-center">Schedule</p>
        <h2 className="mt-3 text-center font-display text-4xl text-burgundy">Choose a time</h2>
        <div className="mt-10">
          <InlineCalendly url={exp.calendly} />
        </div>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <CalendlyBooking url={exp.calendly} label={`Book ${exp.name.split(" ")[0]}`} />
          <Link
            to="/experiences"
            className="border border-burgundy px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-burgundy hover:bg-burgundy hover:text-cream transition-colors"
          >
            All experiences
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
