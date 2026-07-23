import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { CalendlyBooking, CALENDLY_URLS } from "@/components/CalendlyBooking";
import { useState } from "react";
import { Instagram, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Anima Arcana" },
      { name: "description", content: "Write to Virginia Giordano — booking questions, private ceremonies, commissions and press. Based on the Oaxaca Coast, Mexico." },
      { property: "og:title", content: "Contact — Anima Arcana" },
      { property: "og:description", content: "Write to Virginia. Oaxaca Coast, Mexico." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact"
        title="Write to Virginia"
        subtitle="For bookings, private ceremonies, commissions and any question you'd like to share slowly."
      />

      <section className="mx-auto grid max-w-6xl gap-16 px-6 pb-24 lg:grid-cols-[3fr_2fr]">
        <form
          className="space-y-5"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <SelectField label="What are you interested in?" name="interest" options={[
            "An experience", "A private ceremony", "Photography commission", "A course", "The apothecary", "Press or collaboration", "Something else",
          ]} />
          <SelectField label="Preferred experience" name="experience" options={[
            "The Returning Body", "Reiki", "Triple Vagal Nerve Method", "Kundalini Life Force Activation", "Tarot Reading", "Body & Earth photography", "Not sure yet",
          ]} />
          <SelectField label="Format" name="format" options={["In person · Oaxaca", "Online", "Either"]} />
          <div>
            <label className="text-sacred text-[10px] text-burgundy">Message</label>
            <textarea name="message" required maxLength={1000} rows={6} className="mt-2 w-full border border-burgundy/30 bg-cream px-4 py-3 text-sm focus:border-burgundy outline-none" />
          </div>
          <label className="flex items-start gap-3 text-xs text-ink/70">
            <input type="checkbox" required className="mt-1 accent-burgundy" />
            <span>I consent to being contacted about my request and understand my message will be handled with care.</span>
          </label>
          <button type="submit" className="bg-burgundy px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-cream hover:bg-wine transition-colors">
            {sent ? "Thank you — I'll write back soon" : "Send"}
          </button>
        </form>

        <aside className="space-y-8 border-l border-burgundy/15 pl-8">
          <div>
            <p className="text-sacred text-[10px] text-burgundy">Reach me</p>
            <ul className="mt-4 space-y-3 text-ink/80">
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-burgundy" /> hola@animaarcana.com</li>
              <li className="flex items-center gap-3"><Instagram className="h-4 w-4 text-burgundy" /> @anima.arcana</li>
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-burgundy" /> Oaxaca Coast, Mexico</li>
            </ul>
          </div>
          <div>
            <p className="text-sacred text-[10px] text-burgundy">Or book directly</p>
            <p className="mt-3 text-sm text-ink/70">Skip the form — schedule an introductory call.</p>
            <div className="mt-4">
              <CalendlyBooking url={CALENDLY_URLS.general} label="Book a call" variant="ghost" />
            </div>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sacred text-[10px] text-burgundy">{label}</label>
      <input name={name} type={type} required={required} maxLength={200} className="mt-2 w-full border border-burgundy/30 bg-cream px-4 py-3 text-sm focus:border-burgundy outline-none" />
    </div>
  );
}
function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="text-sacred text-[10px] text-burgundy">{label}</label>
      <select name={name} className="mt-2 w-full border border-burgundy/30 bg-cream px-4 py-3 text-sm focus:border-burgundy outline-none">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
