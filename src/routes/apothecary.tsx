import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import apothecaryImg from "@/assets/apothecary.jpg";

export const Route = createFileRoute("/apothecary")({
  head: () => ({
    meta: [
      { title: "The Living Apothecary — Anima Arcana" },
      { name: "description", content: "Natural tinctures, botanical oils, creams, flower waters and seasonal plant preparations made by hand in Oaxaca." },
      { property: "og:title", content: "The Living Apothecary — Anima Arcana" },
      { property: "og:description", content: "Small-batch botanical preparations, traditionally used to accompany personal ritual." },
      { property: "og:url", content: "/apothecary" },
    ],
    links: [{ rel: "canonical", href: "/apothecary" }],
  }),
  component: Apothecary,
});

const PRODUCTS = [
  { name: "Hypericum Ritual Oil", desc: "Sun-infused for the days that ask for softness.", price: "MXN 480", size: "60 ml", stock: "In stock" },
  { name: "Rose & Cacao Balm", desc: "For the hollows of the wrists, the heart, the temples.", price: "MXN 420", size: "30 ml", stock: "In stock" },
  { name: "Valeriana Tincture", desc: "Traditionally used to support restful sleep.", price: "MXN 380", size: "30 ml", stock: "Low stock" },
  { name: "Copal Flower Water", desc: "A closing ritual, misted at the end of the day.", price: "MXN 340", size: "100 ml", stock: "In stock" },
  { name: "Damiana Botanical Cream", desc: "A nightly ritual for the body's tender places.", price: "MXN 520", size: "50 ml", stock: "In stock" },
  { name: "Autumn Seasonal Elixir", desc: "A limited preparation for the turning of the year.", price: "MXN 620", size: "50 ml", stock: "Pre-order" },
];

function Apothecary() {
  return (
    <PageShell>
      <section className="relative">
        <img src={apothecaryImg} alt="Amber apothecary bottles and dried botanicals" className="h-[70svh] min-h-[520px] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/20 to-ink/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-16 text-center text-cream">
          <p className="text-sacred text-[11px] text-cream/85">Apothecary</p>
          <h1 className="mt-6 font-display text-5xl sm:text-7xl">The Living Apothecary</h1>
          <p className="mt-6 max-w-xl font-display text-xl italic text-cream/90">Small-batch botanical preparations, made by hand in Oaxaca.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1300px] px-5 py-24 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <article key={p.name} className="group flex flex-col border border-burgundy/15 bg-cream">
              <div className="aspect-square overflow-hidden bg-parchment/50">
                <img src={apothecaryImg} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[2500ms] group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sacred text-[9px] text-burgundy/70">{p.size} · {p.stock}</p>
                <h3 className="mt-3 font-display text-2xl text-burgundy">{p.name}</h3>
                <p className="mt-3 text-sm italic text-ink/70 font-display text-lg">{p.desc}</p>
                <div className="mt-6 flex flex-1 items-end justify-between">
                  <span className="font-display text-2xl text-burgundy">{p.price}</span>
                  <button className="border border-burgundy px-5 py-2 text-[10px] uppercase tracking-[0.22em] text-burgundy hover:bg-burgundy hover:text-cream transition-colors">Add to basket</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="border-l-2 border-gold bg-parchment/50 p-6 text-sm text-ink/75">
          <p className="text-sacred text-[10px] text-burgundy">A quiet note</p>
          <p className="mt-3">
            These preparations are traditionally used to accompany personal ritual and general
            wellbeing. They are not intended to diagnose, treat, cure or prevent any disease. If
            you are pregnant, nursing, or under medical care, please consult your practitioner
            before use.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
