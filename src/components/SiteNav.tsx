import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Emblem } from "./Emblem";
import { useI18n } from "@/lib/i18n";
import { LOCALES, LOCALE_NAMES, PAGE_PATHS, type Locale } from "@/lib/translations";

type NavKey = "home" | "about" | "experiences" | "photography" | "apothecary" | "school" | "journal" | "contact";

const NAV_KEYS: NavKey[] = [
  "home",
  "about",
  "experiences",
  "photography",
  "apothecary",
  "school",
  "journal",
  "contact",
];

export function SiteNav() {
  const { locale, t } = useI18n();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expExpanded, setExpExpanded] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const experiencesChildren = [
    { to: "/experiences/returning-body", label: t.experiencesMenu.returningBody },
    { to: "/experiences/tvm", label: t.experiencesMenu.tvm },
    { to: "/experiences/tarot", label: t.experiencesMenu.tarot },
    { to: "/experiences/reiki", label: t.experiencesMenu.reiki },
    { to: "/experiences/kundalini", label: t.experiencesMenu.kundalini },
  ];

  const switchLocale = (next: Locale) => {
    setLangOpen(false);
    setOpen(false);
    navigate({ to: PAGE_PATHS.home[next] });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled ? "bg-cream/90 backdrop-blur-md border-b border-burgundy/15" : "bg-transparent"
        }`}
      >
        <div className="mx-auto grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:flex lg:max-w-[1400px] lg:justify-between lg:px-10">
          <Link
            to={PAGE_PATHS.home[locale]}
            className="flex min-w-0 items-center gap-3 group"
            onClick={() => setOpen(false)}
          >
            <Emblem size={40} className="shrink-0 transition-transform duration-700 group-hover:rotate-[8deg]" />
            <div className="min-w-0 leading-none">
              <div className="text-sacred text-[10px] text-burgundy sm:text-[11px] truncate">Anima Arcana</div>
              <div className="mt-1 hidden text-[9px] uppercase tracking-[0.35em] text-ink/60 sm:block truncate">
                Virginia Giordano · Oaxaca
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {NAV_KEYS.map((key) => {
              const to = PAGE_PATHS[key][locale];
              const isExperiences = key === "experiences";
              return (
                <div key={key} className="group relative">
                  <Link
                    to={to}
                    className="text-[12px] uppercase tracking-[0.22em] text-ink/80 hover:text-burgundy transition-colors flex items-center gap-1"
                    activeProps={{ className: "text-burgundy" }}
                    activeOptions={{ exact: key === "home" }}
                  >
                    {t.nav[key]}
                    {isExperiences ? <ChevronDown className="h-3 w-3" /> : null}
                  </Link>
                  {isExperiences ? (
                    <div className="pointer-events-none absolute left-1/2 top-full mt-4 w-80 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-500 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="border border-burgundy/20 bg-cream shadow-xl">
                        <div className="p-2">
                          {experiencesChildren.map((c) => (
                            <Link
                              key={c.to}
                              to={c.to}
                              className="block px-4 py-3 font-display text-lg text-ink/85 hover:bg-parchment/60 hover:text-burgundy transition-colors"
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            {/* Desktop language selector */}
            <div className="hidden lg:flex items-center gap-1 border-l border-burgundy/25 pl-4" aria-label={t.nav.language}>
              {LOCALES.map((l, i) => (
                <button
                  key={l}
                  onClick={() => switchLocale(l)}
                  className={`text-[11px] tracking-[0.24em] transition-colors ${
                    l === locale ? "text-burgundy font-semibold" : "text-ink/50 hover:text-burgundy"
                  }`}
                  aria-current={l === locale ? "true" : undefined}
                >
                  {LOCALE_NAMES[l]}
                  {i < LOCALES.length - 1 ? <span className="mx-1 text-ink/30">|</span> : null}
                </button>
              ))}
            </div>

            <Link
              to={PAGE_PATHS.experiences[locale]}
              className="hidden md:inline-flex items-center border border-burgundy px-5 py-2.5 text-[11px] uppercase tracking-[0.24em] text-burgundy hover:bg-burgundy hover:text-cream transition-colors duration-500"
            >
              {t.nav.bookCta}
            </Link>

            {/* Mobile language button */}
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="lg:hidden flex items-center gap-1 text-[11px] tracking-[0.24em] text-burgundy p-2"
              aria-label={t.nav.language}
              aria-expanded={langOpen}
            >
              <Globe className="h-4 w-4" />
              <span>{LOCALE_NAMES[locale]}</span>
            </button>

            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2 text-burgundy"
              aria-label={open ? t.nav.close : t.nav.menu}
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile language dropdown */}
        {langOpen ? (
          <div className="lg:hidden border-t border-burgundy/15 bg-cream/95 backdrop-blur-md">
            <div className="mx-auto flex max-w-[1400px] items-center justify-center gap-2 px-5 py-3">
              {LOCALES.map((l) => (
                <button
                  key={l}
                  onClick={() => switchLocale(l)}
                  className={`px-4 py-2 text-[11px] tracking-[0.28em] transition-colors ${
                    l === locale
                      ? "bg-burgundy text-cream"
                      : "border border-burgundy/30 text-burgundy hover:bg-burgundy hover:text-cream"
                  }`}
                >
                  {LOCALE_NAMES[l]}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-cream" />
        <div className="relative flex h-full flex-col overflow-y-auto px-8 pt-24 pb-32">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV_KEYS.map((key) => {
              const to = PAGE_PATHS[key][locale];
              if (key === "experiences") {
                return (
                  <div key={key} className="border-b border-burgundy/15 py-2">
                    <button
                      onClick={() => setExpExpanded((v) => !v)}
                      className="flex w-full items-center justify-between py-3 text-left"
                    >
                      <span className="font-display text-3xl text-burgundy">{t.nav.experiences}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-burgundy transition-transform ${expExpanded ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expExpanded ? (
                      <div className="flex flex-col gap-2 pb-4 pl-4">
                        {experiencesChildren.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            onClick={() => setOpen(false)}
                            className="py-1 text-[13px] uppercase tracking-[0.2em] text-ink/75"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              }
              return (
                <Link
                  key={key}
                  to={to}
                  onClick={() => setOpen(false)}
                  className="border-b border-burgundy/15 py-5 font-display text-3xl text-burgundy"
                >
                  {t.nav[key]}
                </Link>
              );
            })}
          </nav>

          <div className="mt-10 flex items-center gap-2">
            <span className="text-sacred text-[9px] text-burgundy/70">{t.nav.language}</span>
            {LOCALES.map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className={`px-3 py-1.5 text-[11px] tracking-[0.28em] transition-colors ${
                  l === locale ? "bg-burgundy text-cream" : "border border-burgundy/30 text-burgundy"
                }`}
              >
                {LOCALE_NAMES[l]}
              </button>
            ))}
          </div>

          <Link
            to={PAGE_PATHS.experiences[locale]}
            onClick={() => setOpen(false)}
            className="mt-10 self-start border border-burgundy px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-burgundy"
          >
            {t.nav.bookCta}
          </Link>
        </div>
      </div>

      {/* Mobile sticky bottom CTA */}
      <Link
        to={PAGE_PATHS.experiences[locale]}
        className="fixed inset-x-4 bottom-4 z-20 md:hidden inline-flex items-center justify-center bg-burgundy py-4 text-[11px] uppercase tracking-[0.28em] text-cream shadow-2xl"
      >
        {t.nav.bookCta}
      </Link>
    </>
  );
}
