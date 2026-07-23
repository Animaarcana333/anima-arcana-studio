import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { CalendlyBooking } from "@/components/CalendlyBooking";
import { EXPERIENCES } from "@/lib/experiences";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book an Experience — Anima Arcana" },
      { name: "description", content: "Choose an experience and schedule your session with Virginia Giordano through Calendly." },
      { property: "og:title", content: "Book an Experience — Anima Arcana" },
      { property: "og:description", content: "Schedule your session." },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: Book,
});

function Book() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Book"
        title="Choose Your Experience"
        subtitle="Each experience has its own scheduling window. Choose the one that calls you — or write first if you're not sure."
      />
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="space-y-4">
          {EXPERIENCES.map((e) => (
            <div key={e.slug} className="flex flex-col justify-between gap-6 border border-burgundy/20 bg-cream p-8 md:flex-row md:items-center">
              <div>
                <p className="text-sacred text-[10px] text-burgundy/70">{e.format} · {e.duration}</p>
                <h2 className="mt-2 font-display text-3xl text-burgundy">{e.name}</h2>
                <p className="mt-2 text-sm italic text-ink/70">{e.poeticSubtitle}</p>
              </div>
              <div className="flex items-center gap-3">
                <Link to="/experiences/$slug" params={{ slug: e.slug }} className="text-[11px] uppercase tracking-[0.24em] text-burgundy link-underline">Read more</Link>
                <CalendlyBooking url={e.calendly} label="Schedule" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
