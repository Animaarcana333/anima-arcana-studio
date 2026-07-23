import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Emblem } from "./Emblem";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  {
    to: "/experiences",
    label: "Experiences",
    children: [
      { to: "/experiences/returning-body", label: "The Returning Body" },
      { to: "/experiences/reiki", label: "Reiki" },
      { to: "/experiences/tvm", label: "Triple Vagal Nerve Method" },
      { to: "/experiences/kundalini", label: "Kundalini Life Force Activation" },
      { to: "/experiences/tarot", label: "Tarot Readings" },
    ],
  },
  { to: "/photography", label: "Photography" },
  { to: "/apothecary", label: "Apothecary" },
  { to: "/school", label: "School" },
  { to: "/journal", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expExpanded, setExpExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled ? "bg-cream/90 backdrop-blur-md border-b border-burgundy/15" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 lg:px-10">
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
            <Emblem size={40} className="transition-transform duration-700 group-hover:rotate-[8deg]" />
            <div className="leading-none">
              <div className="text-sacred text-[10px] text-burgundy sm:text-[11px]">Anima Arcana</div>
              <div className="mt-1 text-[9px] uppercase tracking-[0.35em] text-ink/60 hidden sm:block">
                Virginia Giordano · Oaxaca
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV.map((item) => (
              <div key={item.to} className="group relative">
                <Link
                  to={item.to}
                  className="text-[12px] uppercase tracking-[0.22em] text-ink/80 hover:text-burgundy transition-colors flex items-center gap-1"
                  activeProps={{ className: "text-burgundy" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                  {"children" in item && item.children ? <ChevronDown className="h-3 w-3" /> : null}
                </Link>
                {"children" in item && item.children ? (
                  <div className="pointer-events-none absolute left-1/2 top-full mt-4 w-72 -translate-x-1/2 opacity-0 transition-all duration-500 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                    <div className="border border-burgundy/20 bg-cream shadow-xl">
                      <div className="p-2">
                        {item.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            className="block px-4 py-3 text-[13px] text-ink/85 hover:bg-parchment/60 hover:text-burgundy transition-colors font-display text-lg"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/book"
              className="hidden md:inline-flex items-center border border-burgundy px-5 py-2.5 text-[11px] uppercase tracking-[0.24em] text-burgundy hover:bg-burgundy hover:text-cream transition-colors duration-500"
            >
              Book an Experience
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2 text-burgundy"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
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
            {NAV.map((item) =>
              "children" in item && item.children ? (
                <div key={item.to} className="border-b border-burgundy/15 py-2">
                  <button
                    onClick={() => setExpExpanded((v) => !v)}
                    className="flex w-full items-center justify-between py-3 text-left"
                  >
                    <span className="font-display text-3xl text-burgundy">{item.label}</span>
                    <ChevronDown className={`h-5 w-5 text-burgundy transition-transform ${expExpanded ? "rotate-180" : ""}`} />
                  </button>
                  {expExpanded ? (
                    <div className="pl-4 pb-4 flex flex-col gap-2">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          onClick={() => setOpen(false)}
                          className="text-[13px] uppercase tracking-[0.2em] text-ink/75 py-1"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-burgundy/15 py-5 font-display text-3xl text-burgundy"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <Link
            to="/book"
            onClick={() => setOpen(false)}
            className="mt-10 self-start border border-burgundy px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-burgundy"
          >
            Book an Experience
          </Link>
        </div>
      </div>

      {/* Mobile sticky bottom CTA */}
      <Link
        to="/book"
        className="fixed inset-x-4 bottom-4 z-20 md:hidden inline-flex items-center justify-center bg-burgundy py-4 text-[11px] uppercase tracking-[0.28em] text-cream shadow-2xl"
      >
        Book an Experience
      </Link>
    </>
  );
}
