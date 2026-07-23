import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";

const PAGES: Record<string, { title: string; body: string[] }> = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "Anima Arcana collects only the information necessary to respond to your requests and to deliver the experiences, products and courses you choose. Contact form entries, booking details and email subscriptions are stored securely and are never sold.",
      "You may unsubscribe from newsletters at any time. You may request the deletion of your personal data by writing to hola@animaarcana.com.",
      "This policy is a plain-language placeholder and will be replaced with a full jurisdiction-specific policy prior to public launch.",
    ],
  },
  terms: {
    title: "Terms & Conditions",
    body: [
      "By booking an experience, purchasing a product, or enrolling in a course, you agree to the terms outlined here.",
      "All experiences are offered as wellness, educational and artistic practices. They do not constitute medical, psychological or psychiatric care.",
      "Full terms are being drafted with counsel and will replace this placeholder before public launch.",
    ],
  },
  refund: {
    title: "Refund Policy",
    body: [
      "In-person sessions may be rescheduled with at least 48 hours notice. Sessions cancelled with less notice may not be refundable.",
      "Digital courses are non-refundable once access has been delivered, in line with common practice for downloadable and streaming content.",
      "Botanical products are refundable if unopened and returned within 14 days of receipt. Shipping costs are non-refundable.",
    ],
  },
  shipping: {
    title: "Shipping Policy",
    body: [
      "Apothecary orders ship from Oaxaca, Mexico. Domestic orders are usually delivered within 5–10 business days. International shipping is available on request; delivery times vary by destination.",
      "Please review your address carefully at checkout. Anima Arcana is not responsible for undeliverable parcels resulting from incorrect addresses.",
    ],
  },
  disclaimer: {
    title: "Wellness Disclaimer",
    body: [
      "The experiences and products offered through Anima Arcana are intended for spiritual exploration, personal reflection, relaxation, education and general wellbeing. They do not replace medical, psychological or psychiatric diagnosis or treatment.",
      "If you are under medical or psychological care, please consult with your practitioner before beginning a new practice.",
      "By participating in any experience, you acknowledge that you do so as an adult of sound mind, freely and at your own initiative.",
    ],
  },
};

export const Route = createFileRoute("/legal/$slug")({
  loader: ({ params }) => {
    const page = PAGES[params.slug];
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${loaderData.page.title} — Anima Arcana` },
        { name: "description", content: `${loaderData.page.title} for Anima Arcana.` },
        { property: "og:title", content: `${loaderData.page.title} — Anima Arcana` },
        { property: "og:url", content: `/legal/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/legal/${params.slug}` }],
    };
  },
  component: Legal,
});

function Legal() {
  const { page } = Route.useLoaderData();
  return (
    <PageShell>
      <PageHeader eyebrow="Fine print" title={page.title} />
      <section className="mx-auto max-w-2xl px-6 pb-24">
        <div className="space-y-6 text-ink/80">
          {page.body.map((p: string, i: number) => <p key={i}>{p}</p>)}
        </div>
      </section>
    </PageShell>
  );
}
