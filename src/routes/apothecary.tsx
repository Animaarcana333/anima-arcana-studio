import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { Divider, Watermark } from "@/components/Emblem";
import { useI18n } from "@/lib/i18n";
import { PRODUCTS, type Product } from "@/lib/products";
import heroImg from "@/assets/photos/IMG_4025.jpg.asset.json";

const RITUAL_GRADE = "sepia(0.14) saturate(0.92) contrast(1.05) brightness(1.02)";

export const Route = createFileRoute("/apothecary")({
  head: () => ({
    meta: [
      { title: "The Living Apothecary — ARCANA Botanical Preparations" },
      {
        name: "description",
        content:
          "Six handcrafted ARCANA preparations from Oaxaca: milk thistle, hoja santa, sunblock, chilcuague spray, herbal cough syrup and muscle relief ointment.",
      },
      { property: "og:title", content: "The Living Apothecary — Anima Arcana" },
      {
        property: "og:description",
        content: "Small-batch botanical preparations, made by hand in Oaxaca.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/apothecary" }],
  }),
  component: Apothecary,
});

function ProductArticle({ product, index }: { product: Product; index: number }) {
  const { locale } = useI18n();
  const [open, setOpen] = useState(false);
  const name = product.name[locale];

  return (
    <article
      id={product.slug}
      className="scroll-mt-28 border-b border-burgundy/10 pb-16 last:border-none"
    >
      <div
        className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
          index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="relative overflow-hidden bg-parchment/40">
          <img
            src={product.image}
            alt={product.imageAlt}
            loading="lazy"
            className="h-[420px] w-full object-cover md:h-[540px]"
            style={product.isPlaceholderImage ? undefined : { filter: RITUAL_GRADE }}
          />
          {product.isPlaceholderImage ? null : <Watermark />}
        </div>

        <div>
          <p className="text-sacred text-[10px] text-burgundy">
            Preparation 0{index + 1}
          </p>
          <h2 className="mt-3 font-display text-4xl text-burgundy sm:text-5xl">{name}</h2>

          <div className="mt-6 space-y-4 text-ink/80">
            {product.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-6 text-sm text-ink/80">
            <div>
              <dt className="text-sacred text-[9px] text-burgundy/70">Size</dt>
              <dd className="mt-1">{product.size}</dd>
            </div>
            <div>
              <dt className="text-sacred text-[9px] text-burgundy/70">Offering</dt>
              <dd className="mt-1 font-display text-xl text-burgundy">{product.price}</dd>
            </div>
            {product.duration ? (
              <div className="col-span-2">
                <dt className="text-sacred text-[9px] text-burgundy/70">Approximate duration</dt>
                <dd className="mt-1">{product.duration}</dd>
              </div>
            ) : null}
          </dl>

          {product.notice ? (
            <p className="mt-6 border-l-2 border-gold bg-parchment/50 p-4 text-sm italic text-ink/75">
              {product.notice}
            </p>
          ) : null}

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={`${product.slug}-panel`}
            className="mt-10 inline-flex items-center border border-burgundy px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-burgundy transition-colors duration-500 hover:bg-burgundy hover:text-cream"
          >
            {open ? "Read less" : "Read more"}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={`${product.slug}-panel`}
          className="mt-16 border-t border-burgundy/15 pt-16 fade-in-slow"
        >
          <div className="mx-auto max-w-3xl space-y-10">
            {product.sections.map((s) => (
              <div key={s.title}>
                <h3 className="text-sacred text-[10px] text-burgundy">{s.title}</h3>
                {s.body ? <p className="mt-3 text-ink/80">{s.body}</p> : null}
                {s.items ? (
                  <ul className="mt-4 space-y-2 text-ink/80">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-3">
                        <span className="mt-3 block h-1 w-1 rotate-45 bg-gold" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}

            <div className="flex flex-wrap items-center gap-6 border-t border-burgundy/15 pt-10">
              <span className="font-display text-3xl text-burgundy">{product.price}</span>
              <button
                type="button"
                disabled
                title="The basket will open soon"
                className="cursor-not-allowed border border-burgundy/50 px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-burgundy/60"
              >
                Buy — coming soon
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
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
}

function Apothecary() {
  return (
    <PageShell>
      <section className="relative">
        <img
          src={heroImg.url}
          alt="ARCANA emblem lid resting among red branches at golden hour"
          width={1280}
          height={860}
          className="h-[70svh] min-h-[520px] w-full object-cover"
          style={{ filter: RITUAL_GRADE }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/20 to-ink/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-16 text-center text-cream">
          <p className="text-sacred text-[11px] text-cream/85">Apothecary</p>
          <h1 className="mt-6 font-display text-5xl sm:text-7xl">The Living Apothecary</h1>
          <p className="mt-6 max-w-xl font-display text-xl italic text-cream/90">
            Small-batch botanical preparations, made by hand in Oaxaca.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1300px] px-5 py-24 lg:px-10">
        <Divider className="mb-20" />
        <div className="space-y-24 md:space-y-32">
          {PRODUCTS.map((p, i) => (
            <ProductArticle key={p.slug} product={p} index={i} />
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
