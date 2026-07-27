import { Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Emblem, Divider, Star, Watermark } from "@/components/Emblem";
import returningBody from "@/assets/photos/returning-body.jpg.asset.json";
import tvm from "@/assets/photos/tvm.jpg.asset.json";
import tarot from "@/assets/photos/tarot.jpg.asset.json";
import reiki from "@/assets/photos/reiki.jpg.asset.json";
import kundalini from "@/assets/photos/kundalini.jpg.asset.json";
import bodyEarth from "@/assets/photos/body-earth.jpg.asset.json";
import apothecaryHands from "@/assets/photos/apothecary-hands.jpg.asset.json";
import { useI18n } from "@/lib/i18n";
import { PAGE_PATHS } from "@/lib/translations";
import type React from "react";

/**
 * Warm editorial photo grade applied to every ritual photograph on the site:
 * mild warmth, gentle contrast lift and slight softness for a filmic,
 * hand-toned feeling that reads as sacred rather than clinical.
 */
const RITUAL_GRADE = "sepia(0.14) saturate(0.92) contrast(1.05) brightness(1.02)";

// Pathway-specific media. Each entry pairs a photograph with the destination
// links for its offerings. Reiki uses object-position to preserve a respectful
// crop of the original image while keeping the healer's hand in frame.
type PathwayMedia = {
  src: string;
  objectPosition?: string;
  credit?: string;
  offerings: { path: string }[];
};

function buildPathwayMedia(paths: ReturnType<typeof PAGE_PATHS.experiences.en> extends string ? never : never, exp: (slug: string) => string, page: (k: keyof typeof PAGE_PATHS) => string): PathwayMedia[] {
  return [
    {
      src: returningBody.url,
      offerings: [{ path: exp("returning-body") }, { path: exp("tvm") }],
    },
    {
      src: tarot.url,
      offerings: [{ path: exp("tarot") }],
    },
    {
      src: reiki.url,
      objectPosition: "50% 30%",
      offerings: [{ path: exp("reiki") }],
    },
    {
      src: kundalini.url,
      offerings: [{ path: exp("kundalini") }],
    },
    {
      src: bodyEarth.url,
      credit: "Model · @the.soma.mystic",
      offerings: [{ path: page("photography") }],
    },
    {
      src: apothecaryHands.url,
      offerings: [{ path: page("apothecary") }, { path: page("school") }],
    },
  ];
}

export function HomeContent() {
  const { locale, t } = useI18n();
  const h = t.home;

  const exp = (slug: string) => `${PAGE_PATHS.experiences[locale]}/${slug}`;
  const page = (k: keyof typeof PAGE_PATHS) => PAGE_PATHS[k][locale];
  const pathwayMedia = buildPathwayMedia(undefined as never, exp, page);

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <img
          src={tarot.url}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: RITUAL_GRADE }}
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/45 to-ink/85" />
        <div className="pointer-events-none absolute inset-0">
          {Array.from({ length: 14 }).map((_, i) => (
            <Star
              key={i}
              className="absolute h-1.5 w-1.5 text-cream/50"
              style={
                {
                  top: `${((i * 37) % 90) + 5}%`,
                  left: `${((i * 73) % 92) + 4}%`,
                  animation: `twinkle ${4 + (i % 5)}s ease-in-out ${i * 0.3}s infinite`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 text-center text-cream">
          <div className="fade-in-slow flex justify-center">
            <Emblem size={110} className="drop-shadow-lg [filter:brightness(1.15)]" />
          </div>
          <p className="mt-8 text-sacred text-[11px] text-cream/90 fade-in-slow">{h.heroEyebrow}</p>
          <h1 className="mt-8 font-display text-5xl leading-[1.02] text-cream sm:text-6xl lg:text-8xl rise-in">
            {h.heroTitle1}
            <br />
            <span className="italic text-gold/95">{h.heroTitle2}</span>
          </h1>
          <p className="mx-auto mt-10 max-w-2xl font-display text-xl italic text-cream/85 fade-in-slow">
            {h.heroSub}
          </p>
        </div>

        <a
          href="#pathways"
          aria-label={h.pathwaysTitle}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/70"
        >
          <div className="mx-auto h-12 w-px bg-cream/40 animate-pulse" />
        </a>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-36">
        <Divider />
        <p className="mt-10 text-sacred text-[10px] text-burgundy">{h.introEyebrow}</p>
        <h2 className="mt-6 font-display text-4xl text-burgundy sm:text-5xl lg:text-6xl">
          {h.introTitle}
        </h2>
        <p className="mt-8 font-display text-2xl italic leading-relaxed text-ink/80 sm:text-3xl">
          {h.introP1}
        </p>
        <p className="mt-10 text-base leading-relaxed text-ink/75 sm:text-lg">{h.introQuestion}</p>
        <div className="mt-12 space-y-3">
          <p className="font-display text-2xl italic text-ink/80 sm:text-3xl">{h.introP2}</p>
          <p className="font-display text-3xl text-burgundy sm:text-4xl">{h.introP3a}</p>
        </div>
        <p className="mt-10 text-base leading-relaxed text-ink/75 sm:text-lg">{h.introP4}</p>
      </section>

      {/* ANIMA ARCANA OFFERS */}
      <section className="relative isolate overflow-hidden border-y border-burgundy/15 bg-parchment/50">
        <div className="mx-auto grid max-w-[1300px] items-center gap-10 px-5 py-20 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-16 lg:px-10 lg:py-28">
          <div className="relative overflow-hidden">
            <img
              src={tvm.url}
              alt=""
              loading="lazy"
              className="h-[420px] w-full object-cover md:h-[560px]"
              style={{ filter: RITUAL_GRADE }}
            />
            <Watermark />
          </div>
          <div className="min-w-0">
            <p className="text-sacred text-[10px] text-burgundy">{h.offersEyebrow}</p>
            <h2 className="mt-5 font-display text-4xl text-burgundy sm:text-5xl lg:text-6xl">
              {h.offersTitle}
            </h2>
            <div className="mt-6 h-px w-20 bg-burgundy/40" />
            <p className="mt-8 font-display text-2xl italic leading-relaxed text-ink/80 sm:text-3xl">
              {h.offersP1}
            </p>
            <p className="mt-6 text-base leading-relaxed text-ink/75 sm:text-lg">{h.offersP2}</p>
          </div>
        </div>
      </section>

      {/* WELCOME HOME visual moment */}
      <section className="relative isolate overflow-hidden">
        <img
          src={bodyEarth.url}
          alt=""
          loading="lazy"
          className="h-[70svh] min-h-[440px] w-full object-cover"
          style={{ filter: RITUAL_GRADE }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/80" />
        <div className="pointer-events-none absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <Star
              key={i}
              className="absolute h-1.5 w-1.5 text-cream/40"
              style={
                {
                  top: `${((i * 53) % 80) + 10}%`,
                  left: `${((i * 91) % 88) + 6}%`,
                  animation: `twinkle ${5 + (i % 4)}s ease-in-out ${i * 0.4}s infinite`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-cream">
          <div>
            <Emblem size={72} className="mx-auto opacity-90 [filter:brightness(1.2)]" />
            <h2 className="mt-8 font-display text-5xl italic text-cream sm:text-7xl lg:text-8xl">
              {h.welcomeHome}
            </h2>
          </div>
        </div>
        <p className="absolute bottom-4 right-5 text-[10px] uppercase tracking-[0.28em] text-cream/70 sm:bottom-6 sm:right-8">
          Model · @the.soma.mystic
        </p>
      </section>

      {/* PATHWAYS — the central architecture */}
      <section id="pathways" className="relative scroll-mt-24">
        <div className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10 lg:py-32">
          <div className="mb-20 text-center">
            <Divider />
            <p className="mt-8 text-sacred text-[10px] text-burgundy">{h.pathwaysEyebrow}</p>
            <h2 className="mt-4 font-display text-5xl text-burgundy sm:text-6xl lg:text-7xl">
              {h.pathwaysTitle}
            </h2>
          </div>
          <div className="space-y-24 md:space-y-32">
            {h.pathways.map((p, i) => {
              const media = pathwayMedia[i];
              const primary = media.offerings[0]?.path ?? PAGE_PATHS.experiences[locale];
              return (
                <article
                  key={p.title}
                  className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <Link to={primary} className="group relative block overflow-hidden">
                    <img
                      src={media.src}
                      alt={p.title}
                      loading="lazy"
                      className="h-[380px] w-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-[1.04] md:h-[540px]"
                      style={{ filter: RITUAL_GRADE, objectPosition: media.objectPosition }}
                    />
                    <Watermark />
                    {media.credit ? (
                      <span className="pointer-events-none absolute bottom-3 left-4 text-[9px] uppercase tracking-[0.28em] text-cream/80 mix-blend-difference">
                        {media.credit}
                      </span>
                    ) : null}
                  </Link>

                  <div className="min-w-0 px-2">
                    <p className="text-sacred text-[10px] text-burgundy">{p.eyebrow}</p>
                    <h3 className="mt-4 font-display text-4xl text-burgundy sm:text-5xl">
                      <Link to={primary} className="transition-colors hover:text-wine">
                        {p.title}
                      </Link>
                    </h3>
                    <div className="mt-5 h-px w-16 bg-burgundy/40" />
                    <ul className="mt-6 space-y-2">
                      {p.offerings.map((label, j) => {
                        const to = media.offerings[j]?.path ?? primary;
                        return (
                          <li key={label}>
                            <Link
                              to={to}
                              className="group inline-flex items-start gap-3 font-display text-xl italic text-ink/85 transition-colors hover:text-burgundy"
                            >
                              <span className="mt-3 block h-1 w-1 rotate-45 bg-gold" />
                              <span className="border-b border-transparent group-hover:border-burgundy/40">
                                {label}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    <blockquote className="mt-8 border-l border-burgundy/40 pl-5">
                      <p className="font-display text-lg italic leading-relaxed text-ink/75">
                        &ldquo;{p.quote}&rdquo;
                      </p>
                    </blockquote>
                    <Link
                      to={primary}
                      className="mt-8 inline-flex items-center border-b border-burgundy pb-1 text-[11px] uppercase tracking-[0.28em] text-burgundy transition-colors hover:border-transparent"
                    >
                      {h.pathwaysCta} &nbsp;→
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL invocation */}
      <section className="relative overflow-hidden border-t border-burgundy/15 bg-parchment/40 py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Emblem size={72} className="mx-auto opacity-90" />
          <h2 className="mt-8 font-display text-4xl italic text-burgundy sm:text-5xl lg:text-6xl">
            {h.finalTitle}
          </h2>
          <div className="mt-12 flex justify-center">
            <a
              href="#pathways"
              className="border border-burgundy px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-burgundy transition-colors duration-500 hover:bg-burgundy hover:text-cream"
            >
              {h.pathwaysTitle}
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
