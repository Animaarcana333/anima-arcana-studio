import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Emblem, Divider, Star } from "@/components/Emblem";
import { EXPERIENCES } from "@/lib/experiences";
import heroTarot from "@/assets/hero-tarot.jpg";
import virginiaPortrait from "@/assets/virginia-portrait.jpg";
import bodyEarth from "@/assets/body-earth.jpg";
import apothecary from "@/assets/apothecary.jpg";
import school from "@/assets/school.jpg";
import returningBody from "@/assets/returning-body.jpg";
import kundalini from "@/assets/kundalini.jpg";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anima Arcana — Return to the body. Listen to the soul." },
      {
        name: "description",
        content:
          "Embodied healing, tarot, Reiki, Kundalini ceremony, ritual photography, an apothecary and a tarot school. A sacred, intimate practice by Virginia Giordano in Oaxaca, Mexico.",
      },
      { property: "og:title", content: "Anima Arcana — Return to the body. Listen to the soul." },
      { property: "og:description", content: "Embodied healing, intuitive guidance and ritual experiences in communion with nature." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const PATHWAYS = [
  {
    title: "Return to the Body",
    desc:
      "Myofascial ritual massage, Reiki and nervous-system-centered practices that invite grounding, release and deeper embodiment.",
    cta: "Explore embodied healing",
    to: "/experiences/returning-body" as const,
    image: returningBody,
  },
  {
    title: "Listen to the Soul",
    desc:
      "Intuitive tarot readings and symbolic guidance for moments of transition, clarity and self-discovery.",
    cta: "Explore tarot",
    to: "/experiences/tarot" as const,
    image: heroTarot,
  },
  {
    title: "Awaken the Life Force",
    desc:
      "Triple Vagal Nerve practices and Kundalini Life Force Activation Ceremonies — spaces for presence, movement, energy and transformation.",
    cta: "Explore the practices",
    to: "/experiences/kundalini" as const,
    image: kundalini,
  },
  {
    title: "Body & Earth",
    desc:
      "Ritual photography where the human body enters into dialogue with nature, landscape and the elements.",
    cta: "Discover ritual photography",
    to: "/photography" as const,
    image: bodyEarth,
  },
  {
    title: "Carry the Practice Home",
    desc:
      "Natural medicines, botanical preparations, tarot courses and self-guided spiritual resources.",
    cta: "Visit the apothecary & school",
    to: "/apothecary" as const,
    image: apothecary,
  },
];

const TESTIMONIALS = [
  {
    quote: "I have never been received in a body-work session like this. I left as though something had returned to me.",
    who: "— A., Mexico City",
    kind: "Bodywork",
  },
  {
    quote: "Virginia's tarot reading did not tell me my future. It gave me the courage to make it.",
    who: "— L., Milano",
    kind: "Tarot",
  },
  {
    quote: "The ceremony held me without asking anything of me. It changed how I meet myself.",
    who: "— M., Berlin",
    kind: "Kundalini",
  },
  {
    quote: "The photographs became a mirror. I recognised myself in the landscape.",
    who: "— S., Oaxaca",
    kind: "Photography",
  },
];

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <img
          src={heroTarot}
          alt="Hands laying tarot cards by candlelight on aged parchment"
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
              // deterministic sprinkle
              style={
                {
                  top: `${(i * 37) % 90 + 5}%`,
                  left: `${(i * 73) % 92 + 4}%`,
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
          <p className="mt-8 text-sacred text-[11px] text-cream/90 fade-in-slow">Anima Arcana</p>
          <h1 className="mt-8 font-display text-5xl leading-[1.02] text-cream sm:text-6xl lg:text-8xl rise-in">
            Return to the body.<br />
            <span className="italic text-gold/95">Listen to the soul.</span>
          </h1>
          <p className="mx-auto mt-10 max-w-2xl font-display text-xl italic text-cream/85 fade-in-slow">
            Embodied healing, intuitive guidance and ritual experiences in communion with nature.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/experiences"
              className="border border-cream/70 bg-transparent px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-cream hover:bg-cream hover:text-burgundy transition-colors duration-500"
            >
              Explore the experiences
            </Link>
            <Link
              to="/book"
              className="bg-cream px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-burgundy hover:bg-gold transition-colors duration-500"
            >
              Book a session
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/60">
          <div className="mx-auto h-12 w-px bg-cream/40 animate-pulse" />
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-3xl px-6 py-28 text-center lg:py-40">
        <Divider />
        <p className="mt-10 font-display text-2xl italic leading-relaxed text-ink/80 sm:text-3xl">
          Anima Arcana is a space where body, energy, intuition and nature meet.
          Through touch, ritual, symbolic wisdom and embodied presence, each experience
          invites you to reconnect with what has always lived within you.
        </p>
        <p className="mt-8 text-sacred text-[10px] text-burgundy">Oaxaca · Mexico</p>
      </section>

      {/* PATHWAYS */}
      <section className="relative">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="mb-16 text-center">
            <p className="text-sacred text-[10px] text-burgundy">Five pathways</p>
            <h2 className="mt-4 font-display text-5xl text-burgundy sm:text-6xl">Ways to walk the path</h2>
          </div>
          <div className="space-y-24 md:space-y-32">
            {PATHWAYS.map((p, i) => (
              <article
                key={p.title}
                className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="group overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-[420px] w-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-[1.04] md:h-[560px]"
                  />
                </div>
                <div className="px-2">
                  <p className="text-sacred text-[10px] text-burgundy">Pathway {i + 1}</p>
                  <h3 className="mt-4 font-display text-4xl text-burgundy sm:text-5xl">{p.title}</h3>
                  <div className="mt-5 h-px w-16 bg-burgundy/40" />
                  <p className="mt-6 max-w-md text-base leading-relaxed text-ink/75">{p.desc}</p>
                  <Link
                    to={p.to}
                    className="mt-8 inline-flex items-center border-b border-burgundy pb-1 text-[11px] uppercase tracking-[0.28em] text-burgundy hover:border-transparent transition-colors"
                  >
                    {p.cta} &nbsp;→
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mt-40 border-y border-burgundy/15 bg-parchment/30 py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1300px] gap-14 px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20 lg:px-10">
          <div className="relative">
            <img
              src={virginiaPortrait}
              alt="Virginia Giordano, founder of Anima Arcana"
              loading="lazy"
              className="h-[520px] w-full object-cover md:h-[680px]"
            />
            <div className="absolute -bottom-6 -right-6 hidden h-24 w-24 border border-gold/60 md:block" />
          </div>
          <div>
            <p className="text-sacred text-[10px] text-burgundy">The woman behind Anima Arcana</p>
            <h2 className="mt-4 font-display text-5xl text-burgundy sm:text-6xl">
              My path has never belonged<br />to a single tradition.
            </h2>
            <div className="mt-8 space-y-5 text-ink/80">
              <p className="font-display text-xl italic text-ink/75">
                It has unfolded through travel, the body, intuition, nature, touch and the quiet
                mysteries that reveal themselves when we learn how to listen.
              </p>
              <p>
                Italian by origin, I have spent years travelling — from the Mediterranean to Latin
                America — following the questions that would not let me sit still. I studied fascia
                and long-form bodywork alongside tarot and Reiki, and slowly the two languages
                became one.
              </p>
              <p>
                Today I live on the coast of Oaxaca, where the sea and the jungle are part of my
                practice. Anima Arcana is the container I built for the work: bodywork, ritual,
                photography, tarot, and a small apothecary of plants that keep me company.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center border border-burgundy px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-burgundy hover:bg-burgundy hover:text-cream transition-colors duration-500"
            >
              Read the full story
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED EXPERIENCES */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10 lg:py-32">
        <div className="mb-16 text-center">
          <Divider />
          <p className="mt-8 text-sacred text-[10px] text-burgundy">Featured experiences</p>
          <h2 className="mt-4 font-display text-5xl text-burgundy sm:text-6xl">
            Offerings held with care
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.map((e) => (
            <article
              key={e.slug}
              className="group flex flex-col overflow-hidden border border-burgundy/15 bg-cream transition-shadow duration-500 hover:shadow-2xl"
            >
              <div className="overflow-hidden">
                <img
                  src={e.image}
                  alt={e.name}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-[1.05]"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <p className="text-sacred text-[9px] text-burgundy">{e.format}</p>
                <h3 className="mt-3 font-display text-3xl text-burgundy">{e.name}</h3>
                <p className="mt-4 text-sm italic text-ink/70 font-display text-lg">{e.poeticSubtitle}</p>
                <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-burgundy/15 pt-5 text-xs text-ink/70">
                  <div>
                    <dt className="text-sacred text-[9px] text-burgundy/70">Duration</dt>
                    <dd className="mt-1">{e.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-sacred text-[9px] text-burgundy/70">Offering</dt>
                    <dd className="mt-1">{e.price}</dd>
                  </div>
                </dl>
                <div className="mt-6 flex flex-1 items-end gap-3">
                  <Link
                    to="/experiences/$slug"
                    params={{ slug: e.slug }}
                    className="flex-1 border border-burgundy py-3 text-center text-[10px] uppercase tracking-[0.22em] text-burgundy hover:bg-burgundy hover:text-cream transition-colors"
                  >
                    Explore
                  </Link>
                  <Link
                    to="/book"
                    className="flex-1 bg-burgundy py-3 text-center text-[10px] uppercase tracking-[0.22em] text-cream hover:bg-wine transition-colors"
                  >
                    Book
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BODY & EARTH FEATURE */}
      <section className="relative isolate overflow-hidden">
        <img
          src={bodyEarth}
          alt="A figure wrapped in earth-toned fabric among ocean rocks at golden hour"
          loading="lazy"
          className="h-[90svh] min-h-[560px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-8 sm:p-16 lg:p-24 text-cream">
          <div className="max-w-2xl">
            <p className="text-sacred text-[10px] text-cream/80">Body & Earth</p>
            <h2 className="mt-4 font-display text-5xl text-cream sm:text-6xl lg:text-7xl">
              Where the human body<br />becomes part of the landscape.
            </h2>
            <p className="mt-6 max-w-lg text-cream/85">
              A ritual portrait experience exploring embodiment, vulnerability, sensuality,
              identity and belonging through images created in communion with the sea, jungle,
              stone, earth and light.
            </p>
            <Link
              to="/photography"
              className="mt-8 inline-flex items-center border border-cream/80 px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-cream hover:bg-cream hover:text-burgundy transition-colors duration-500"
            >
              Discover the experience
            </Link>
          </div>
        </div>
      </section>

      {/* APOTHECARY + SCHOOL split */}
      <section className="grid gap-1 md:grid-cols-2 md:gap-2 lg:gap-3 mt-2">
        {[
          {
            title: "The Living Apothecary",
            text: "Natural tinctures, botanical oils, creams, flower waters and seasonal plant preparations.",
            cta: "Enter the apothecary",
            to: "/apothecary" as const,
            image: apothecary,
          },
          {
            title: "Arcana School",
            text: "Tarot courses, recorded masterclasses and symbolic teachings designed to deepen intuitive practice.",
            cta: "Enter the school",
            to: "/school" as const,
            image: school,
          },
        ].map((panel) => (
          <Link
            key={panel.title}
            to={panel.to}
            className="group relative overflow-hidden"
          >
            <img
              src={panel.image}
              alt={panel.title}
              loading="lazy"
              className="h-[70svh] min-h-[520px] w-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-10 text-cream">
              <p className="text-sacred text-[10px] text-cream/80">Carry the practice home</p>
              <h3 className="mt-3 font-display text-4xl text-cream sm:text-5xl">{panel.title}</h3>
              <p className="mt-4 max-w-md text-cream/85">{panel.text}</p>
              <span className="mt-6 inline-flex items-center border-b border-cream pb-1 text-[10px] uppercase tracking-[0.28em] transition-all group-hover:tracking-[0.36em]">
                {panel.cta} &nbsp;→
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-6xl px-6 py-28 lg:py-40">
        <div className="mb-16 text-center">
          <Divider />
          <p className="mt-8 text-sacred text-[10px] text-burgundy">In their own words</p>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.who} className="border-l border-burgundy/40 pl-8">
              <p className="text-sacred text-[10px] text-burgundy/80">{t.kind}</p>
              <p className="mt-4 font-display text-2xl italic leading-relaxed text-ink/85 sm:text-3xl">
                “{t.quote}”
              </p>
              <footer className="mt-6 text-sm text-ink/60">{t.who}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section className="border-y border-burgundy/15 bg-parchment/40 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sacred text-[10px] text-burgundy">The journey</p>
          <h2 className="mt-4 font-display text-5xl text-burgundy sm:text-6xl">A slow, listening path</h2>
          <div className="mt-16 grid gap-10 sm:grid-cols-5">
            {["Arrive", "Listen", "Experience", "Integrate", "Return"].map((step, i) => (
              <div key={step} className="flex flex-col items-center">
                <span className="text-sacred text-[9px] text-burgundy/70">Step {i + 1}</span>
                <div className="mt-3 h-14 w-px bg-burgundy/40" />
                <div className="my-2 h-2 w-2 rotate-45 bg-burgundy" />
                <span className="mt-2 font-display text-2xl text-burgundy">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <Newsletter />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Emblem size={64} className="mx-auto opacity-90" />
          <h2 className="mt-8 font-display text-5xl italic text-burgundy sm:text-6xl">
            Are you ready to return<br />to what lives within?
          </h2>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/book"
              className="bg-burgundy px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-cream hover:bg-wine transition-colors duration-500"
            >
              Book an experience
            </Link>
            <Link
              to="/experiences"
              className="border border-burgundy px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-burgundy hover:bg-burgundy hover:text-cream transition-colors duration-500"
            >
              Explore the offerings
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Newsletter() {
  const [sent, setSent] = useState(false);
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="text-sacred text-[10px] text-burgundy">Letters from Anima Arcana</p>
      <h2 className="mt-4 font-display text-4xl text-burgundy sm:text-5xl">
        Reflections, rituals, new offerings & botanical creations.
      </h2>
      <p className="mt-6 text-ink/75">Delivered slowly, with the seasons.</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="mx-auto mt-10 max-w-xl"
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            type="text"
            required
            maxLength={100}
            placeholder="Your name"
            className="w-full border border-burgundy/30 bg-cream px-5 py-4 text-sm placeholder:text-ink/40 focus:border-burgundy outline-none"
          />
          <input
            type="email"
            required
            maxLength={255}
            placeholder="Your email"
            className="w-full border border-burgundy/30 bg-cream px-5 py-4 text-sm placeholder:text-ink/40 focus:border-burgundy outline-none"
          />
        </div>
        <label className="mt-4 flex items-start gap-3 text-left text-xs text-ink/70">
          <input type="checkbox" required className="mt-1 accent-burgundy" />
          <span>I consent to receive occasional letters and understand I may unsubscribe at any moment.</span>
        </label>
        <button
          type="submit"
          className="mt-6 w-full bg-burgundy px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-cream hover:bg-wine transition-colors sm:w-auto"
        >
          {sent ? "Thank you — welcome" : "Subscribe"}
        </button>
      </form>
    </section>
  );
}
