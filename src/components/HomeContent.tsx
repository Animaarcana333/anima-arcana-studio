import { Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Emblem, Divider, Star } from "@/components/Emblem";
import heroTarot from "@/assets/hero-tarot.jpg";
import returningBody from "@/assets/returning-body.jpg";
import kundalini from "@/assets/kundalini.jpg";
import bodyEarth from "@/assets/body-earth.jpg";
import apothecary from "@/assets/apothecary.jpg";
import school from "@/assets/school.jpg";
import virginiaPortrait from "@/assets/virginia-portrait.jpg";
import { useI18n } from "@/lib/i18n";
import { PAGE_PATHS } from "@/lib/translations";
import type React from "react";

const PATHWAY_IMAGES = [returningBody, heroTarot, virginiaPortrait, kundalini, bodyEarth, apothecary];

export function HomeContent() {
  const { locale, t } = useI18n();
  const h = t.home;

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <img
          src={heroTarot}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/80" />
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
            <Emblem size={90} className="drop-shadow-lg [filter:brightness(1.15)_sepia(0.15)]" />
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
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pathways"
              className="border border-cream/70 bg-transparent px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-cream hover:bg-cream hover:text-burgundy transition-colors duration-500"
            >
              {h.heroCtaExplore}
            </a>
            <Link
              to={PAGE_PATHS.experiences[locale]}
              className="bg-cream px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-burgundy hover:bg-gold transition-colors duration-500"
            >
              {h.heroCtaBook}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/60">
          <div className="mx-auto h-12 w-px bg-cream/40 animate-pulse" />
        </div>
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

      {/* WELCOME HOME visual moment */}
      <section className="relative isolate overflow-hidden">
        <img src={bodyEarth} alt="" loading="lazy" className="h-[70svh] min-h-[440px] w-full object-cover" />
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
            <Emblem size={64} className="mx-auto opacity-90 [filter:brightness(1.2)]" />
            <h2 className="mt-8 font-display text-5xl italic text-cream sm:text-7xl lg:text-8xl">
              {h.welcomeHome}
            </h2>
          </div>
        </div>
      </section>

      {/* PATHWAYS */}
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
            {h.pathways.map((p, i) => (
              <article
                key={p.title}
                className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="group overflow-hidden">
                  <img
                    src={PATHWAY_IMAGES[i % PATHWAY_IMAGES.length]}
                    alt=""
                    loading="lazy"
                    className="h-[380px] w-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-[1.04] md:h-[520px]"
                  />
                </div>
                <div className="min-w-0 px-2">
                  <p className="text-sacred text-[10px] text-burgundy">{p.eyebrow}</p>
                  <h3 className="mt-4 font-display text-4xl text-burgundy sm:text-5xl">{p.title}</h3>
                  <div className="mt-5 h-px w-16 bg-burgundy/40" />
                  <ul className="mt-6 space-y-1.5">
                    {p.offerings.map((o) => (
                      <li
                        key={o}
                        className="flex items-start gap-3 font-display text-xl italic text-ink/85"
                      >
                        <span className="mt-3 block h-1 w-1 rotate-45 bg-gold" />
                        {o}
                      </li>
                    ))}
                  </ul>
                  <blockquote className="mt-8 border-l border-burgundy/40 pl-5">
                    <p className="font-display text-lg italic leading-relaxed text-ink/75">
                      &ldquo;{p.quote}&rdquo;
                    </p>
                  </blockquote>
                  <Link
                    to={PAGE_PATHS.experiences[locale]}
                    className="mt-8 inline-flex items-center border-b border-burgundy pb-1 text-[11px] uppercase tracking-[0.28em] text-burgundy hover:border-transparent transition-colors"
                  >
                    {h.pathwaysCta} &nbsp;→
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-burgundy/15 bg-parchment/40 py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Emblem size={64} className="mx-auto opacity-90" />
          <h2 className="mt-8 font-display text-4xl italic text-burgundy sm:text-5xl lg:text-6xl">
            {h.finalTitle}
          </h2>
          <div className="mt-12 flex justify-center">
            <Link
              to={PAGE_PATHS.experiences[locale]}
              className="bg-burgundy px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-cream hover:bg-wine transition-colors duration-500"
            >
              {h.finalCta}
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
