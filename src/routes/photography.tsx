import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { CalendlyBooking, CALENDLY_URLS } from "@/components/CalendlyBooking";
import bodyEarth from "@/assets/body-earth.jpg";
import { Divider } from "@/components/Emblem";

export const Route = createFileRoute("/photography")({
  head: () => ({
    meta: [
      { title: "Body & Earth — Ritual Photography in Oaxaca" },
      { name: "description", content: "A ritual portrait experience where the human body enters into dialogue with nature — sea, jungle, stone, earth and light." },
      { property: "og:title", content: "Body & Earth — Ritual Photography" },
      { property: "og:description", content: "Where the human body becomes part of the landscape." },
      { property: "og:url", content: "/photography" },
    ],
    links: [{ rel: "canonical", href: "/photography" }],
  }),
  component: Photography,
});

const EXPLORES = [
  "Identity", "Sensuality", "Vulnerability", "Embodiment",
  "Freedom", "Belonging", "Transformation", "Relationship with the land",
];

const LANDS = ["Sea", "Jungle", "Stone", "Sand", "Earth", "Plants", "Natural light", "Wind", "Water"];

function Photography() {
  return (
    <PageShell>
      <section className="relative">
        <img src={bodyEarth} alt="A figure draped in fabric among ocean rocks at golden hour" className="h-[95svh] min-h-[600px] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/85" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-cream">
          <p className="text-sacred text-[11px] text-cream/85 fade-in-slow">Body & Earth</p>
          <h1 className="mt-6 font-display text-5xl leading-[1] sm:text-7xl lg:text-8xl rise-in">
            Ritual photography<br /><span className="italic">in communion with nature.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <Divider className="mb-10" />
        <p className="font-display text-2xl italic text-ink/80">
          An artistic and spiritual portrait experience in which the human body blends with the
          landscape — earth, stone, jungle, sea. Held with dignity, consent, and unhurried care.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-16 px-6 pb-24 md:grid-cols-2">
        <div>
          <p className="text-sacred text-[10px] text-burgundy">What we may explore</p>
          <h2 className="mt-3 font-display text-4xl text-burgundy">Themes</h2>
          <ul className="mt-6 grid grid-cols-2 gap-2 text-ink/80">
            {EXPLORES.map((e) => <li key={e} className="border-b border-burgundy/15 py-2">{e}</li>)}
          </ul>
        </div>
        <div>
          <p className="text-sacred text-[10px] text-burgundy">Where the body meets the land</p>
          <h2 className="mt-3 font-display text-4xl text-burgundy">Landscapes</h2>
          <ul className="mt-6 grid grid-cols-2 gap-2 text-ink/80">
            {LANDS.map((e) => <li key={e} className="border-b border-burgundy/15 py-2">{e}</li>)}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 space-y-14">
        {[
          { t: "Artistic philosophy", b: "The camera is not a mirror of appearance but of relationship — with the land, with the self, with the moment." },
          { t: "How the experience unfolds", b: "A discovery call · a creative consultation · a chosen location · a slow session in the landscape · a private edit · a curated set of images delivered privately." },
          { t: "Clothing, fabric or artistic nudity", b: "You choose. Some sessions are fully clothed; others weave fabric, sea and skin. Nothing is required and consent is asked at every step." },
          { t: "Consent, privacy and image use", b: "Your images are yours. Nothing is published without written permission. Every session begins and ends with clear agreements about privacy and use." },
          { t: "Duration & delivery", b: "Sessions run 2 – 5 hours depending on location. A curated selection of 15 – 40 edited photographs is delivered privately within four weeks." },
          { t: "Pricing", b: "From MXN 12,000. Custom multi-day and travel commissions on request." },
        ].map((s) => (
          <div key={s.t} className="border-t border-burgundy/15 pt-8">
            <h3 className="font-display text-3xl text-burgundy">{s.t}</h3>
            <p className="mt-4 text-ink/80">{s.b}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="text-sacred text-[10px] text-burgundy">Begin</p>
        <h2 className="mt-3 font-display text-4xl text-burgundy sm:text-5xl">A discovery call, first</h2>
        <p className="mx-auto mt-6 max-w-xl text-ink/75">
          Every commission begins with an unhurried conversation. We meet online, share what
          calls you, and see whether the work feels right for both of us.
        </p>
        <div className="mt-10">
          <CalendlyBooking url={CALENDLY_URLS.photography} label="Book a discovery call" />
        </div>
      </section>
    </PageShell>
  );
}
