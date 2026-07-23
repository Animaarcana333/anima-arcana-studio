import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import schoolImg from "@/assets/school.jpg";

export const Route = createFileRoute("/school")({
  head: () => ({
    meta: [
      { title: "Arcana School — Tarot courses & masterclasses" },
      { name: "description", content: "A contemporary mystery school. Pre-recorded tarot courses, masterclasses and symbolic teachings that deepen intuitive practice." },
      { property: "og:title", content: "Arcana School — A contemporary mystery school" },
      { property: "og:description", content: "Recorded tarot courses & masterclasses by Virginia Giordano." },
      { property: "og:url", content: "/school" },
    ],
    links: [{ rel: "canonical", href: "/school" }],
  }),
  component: School,
});

const COURSES = [
  { title: "Tarot Foundations", level: "Beginner", duration: "6 hrs", price: "USD 120", format: "Video · PDF" },
  { title: "The Major Arcana", level: "All levels", duration: "8 hrs", price: "USD 160", format: "Video · Worksheets" },
  { title: "The Minor Arcana", level: "Intermediate", duration: "10 hrs", price: "USD 180", format: "Video · Worksheets" },
  { title: "Intuitive Reading", level: "Intermediate", duration: "5 hrs", price: "USD 140", format: "Video · Audio" },
  { title: "Reading for Others · Ethics", level: "Advanced", duration: "4 hrs", price: "USD 130", format: "Video · Live Q&A" },
  { title: "Recorded Masterclasses", level: "All levels", duration: "60–90 min each", price: "From USD 30", format: "Video · PDF" },
];

function School() {
  return (
    <PageShell>
      <section className="relative">
        <img src={schoolImg} alt="An open manuscript of botanical illustrations and tarot cards" className="h-[70svh] min-h-[520px] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/85" />
        <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-16 text-center text-cream">
          <p className="text-sacred text-[11px] text-cream/85">A contemporary mystery school</p>
          <h1 className="mt-6 font-display text-5xl sm:text-7xl">Arcana School</h1>
          <p className="mt-6 max-w-xl font-display text-xl italic text-cream/90">Symbolic study, held with rigor and warmth.</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="font-display text-2xl italic text-ink/80">
          A place to study the tarot slowly — its history, its images, its ethics, and the practice
          of reading with clarity and care. Scholarly and mystical. Grounded and beautiful.
        </p>
      </section>

      <section className="mx-auto max-w-[1300px] px-5 pb-24 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c) => (
            <article key={c.title} className="group flex flex-col border border-burgundy/15 bg-cream">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={schoolImg} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[2500ms] group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sacred text-[9px] text-burgundy/70">{c.level} · {c.format}</p>
                <h3 className="mt-3 font-display text-2xl text-burgundy">{c.title}</h3>
                <div className="mt-6 flex items-center justify-between text-sm text-ink/70">
                  <span>{c.duration}</span>
                  <span className="font-display text-xl text-burgundy">{c.price}</span>
                </div>
                <button className="mt-6 border border-burgundy py-3 text-[10px] uppercase tracking-[0.22em] text-burgundy hover:bg-burgundy hover:text-cream transition-colors">
                  View course
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
