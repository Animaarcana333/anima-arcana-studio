import { useState } from "react";
import { X } from "lucide-react";

/**
 * Reusable Calendly booking. Each experience passes its own URL — do not
 * hardcode a single link. Replace placeholders when Virginia's real
 * Calendly URLs are provided.
 */
export const CALENDLY_URLS = {
  returningBody: "https://calendly.com/anima-arcana/returning-body",
  reiki: "https://calendly.com/anima-arcana/reiki",
  tvm: "https://calendly.com/anima-arcana/tvm",
  kundalini: "https://calendly.com/anima-arcana/kundalini",
  tarot: "https://calendly.com/anima-arcana/tarot",
  photography: "https://calendly.com/anima-arcana/photography-discovery",
  general: "https://calendly.com/anima-arcana/introduction",
} as const;

type Props = {
  url: string;
  label?: string;
  variant?: "primary" | "ghost";
  className?: string;
};

export function CalendlyBooking({ url, label = "Book this experience", variant = "primary", className = "" }: Props) {
  const [open, setOpen] = useState(false);

  const base =
    variant === "primary"
      ? "bg-burgundy text-cream hover:bg-wine"
      : "border border-burgundy text-burgundy hover:bg-burgundy hover:text-cream";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`inline-flex items-center justify-center px-8 py-4 text-[11px] uppercase tracking-[0.28em] transition-colors duration-500 ${base} ${className}`}
      >
        {label}
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4 fade-in-slow"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative flex h-[90vh] w-full max-w-4xl flex-col bg-cream shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-burgundy/20 px-6 py-4">
              <p className="text-sacred text-[10px] text-burgundy">Schedule your session</p>
              <button onClick={() => setOpen(false)} aria-label="Close" className="text-burgundy">
                <X className="h-5 w-5" />
              </button>
            </div>
            <iframe
              title="Calendly"
              src={url}
              className="h-full w-full flex-1 border-0"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

export function InlineCalendly({ url }: { url: string }) {
  return (
    <div className="border border-burgundy/20 bg-cream">
      <iframe
        title="Calendly inline"
        src={url}
        className="h-[720px] w-full border-0"
        loading="lazy"
      />
    </div>
  );
}
