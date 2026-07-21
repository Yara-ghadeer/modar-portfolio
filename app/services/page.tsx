import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Modar",
  description:
    "F&B consulting services: concept development, market entry, menu engineering, and operational excellence.",
};

const services = [
  {
    number: "01",
    title: "Concept Development",
    description:
      "Turning an idea into a concept that works on paper before it costs money in the real world.",
    points: [
      "Positioning & brand story",
      "Menu direction & pricing strategy",
      "Financial feasibility & investment model",
      "Design brief & guest experience mapping",
    ],
  },
  {
    number: "02",
    title: "Market Entry & Expansion",
    description:
      "Structured growth into new locations and markets — with the research to back every decision.",
    points: [
      "Market & competitor studies",
      "Location strategy & site evaluation",
      "Franchise model development",
      "Partner & investor readiness",
    ],
  },
  {
    number: "03",
    title: "Menu Engineering",
    description:
      "A menu is a P&L in disguise. I redesign menus around cost, contribution, and guest behavior.",
    points: [
      "Food cost & contribution analysis",
      "Menu mix & pricing optimization",
      "Kitchen workflow alignment",
      "Supplier & procurement review",
    ],
  },
  {
    number: "04",
    title: "Operational Excellence",
    description:
      "The systems that keep quality consistent when the founder isn't in the room.",
    points: [
      "SOPs & service standards",
      "Org structure & training programs",
      "P&L reviews & cost control",
      "Pre-opening & turnaround support",
    ],
  },
];

export default function Services() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-28">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-copper">
          Services
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.1] tracking-tight text-espresso md:text-6xl">
          Four ways I help F&amp;B businesses grow.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink">
          Every engagement starts with the numbers and ends with something you
          can operate. No decks that sit in a drawer.
        </p>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-6 pb-24">
        {services.map(({ number, title, description, points }) => (
          <article
            key={number}
            className="grid gap-8 rounded-2xl border border-espresso/8 bg-paper p-8 md:grid-cols-[auto_1fr_1fr] md:p-12"
          >
            <p className="font-display text-3xl font-semibold text-copper/40">
              {number}
            </p>
            <div>
              <h2 className="font-display text-2xl font-semibold text-espresso">
                {title}
              </h2>
              <p className="mt-3 leading-relaxed text-ink">{description}</p>
            </div>
            <ul className="space-y-2.5 self-center">
              {points.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="bg-espresso">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold tracking-tight text-cream">
            Not sure which one you need?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-cream/70">
            Most projects touch more than one. Tell me where the business
            stands and I&apos;ll tell you where I&apos;d start.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-block rounded-full bg-copper px-8 py-4 text-sm font-semibold text-cream transition-colors hover:bg-copper-deep"
          >
            Book a consultation
          </Link>
        </div>
      </section>
    </>
  );
}
