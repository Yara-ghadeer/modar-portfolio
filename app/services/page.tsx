import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Modar Ghadeer",
  description:
    "F&B consulting services: business consultation, concept & business planning, restaurant development, business performance, and brand development.",
};

const services = [
  {
    number: "01",
    title: "Business Consultation",
    description:
      "Professional consultation to evaluate ideas, solve business challenges, and support better decision-making.",
    points: [
      "Business Assessment",
      "Strategic Advice",
      "Opportunity Analysis",
      "Action Plan",
    ],
  },
  {
    number: "02",
    title: "Concept & Business Planning",
    description:
      "Developing restaurant concepts and business plans that create a strong foundation for successful projects.",
    points: [
      "Concept Development",
      "Feasibility Study",
      "Business Planning",
      "Market Positioning",
    ],
  },
  {
    number: "03",
    title: "Restaurant Development",
    description:
      "Supporting restaurant projects from planning to opening.",
    points: [
      "Project Development",
      "Equipment Selection",
      "Supplier Coordination",
      "Opening Support",
    ],
  },
  {
    number: "04",
    title: "Business Performance",
    description:
      "Improving operational efficiency, profitability, and customer experience.",
    points: [
      "Operational Review",
      "Menu Engineering",
      "Cost Optimisation",
      "Performance Improvement",
    ],
  },
  {
    number: "05",
    title: "Brand Development",
    description:
      "Building a professional restaurant brand and customer experience.",
    points: [
      "Brand Identity",
      "Menu Design",
      "Food Photography",
      "Marketing Materials",
    ],
  },
];

const process = ["Discovery", "Analysis", "Planning", "Development", "Growth"];

export default function Services() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-28">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-copper">
          Services
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.1] tracking-tight text-espresso md:text-6xl">
          Five ways I help food businesses grow.
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

      {/* Process */}
      <section className="border-t border-espresso/8 bg-cream-deep">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-espresso">
            My process
          </h2>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step, i) => (
              <li
                key={step}
                className="rounded-2xl border border-espresso/8 bg-paper p-6"
              >
                <p className="font-display text-2xl font-semibold text-copper/50">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-display text-lg font-semibold text-espresso">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
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
            className="mt-9 inline-block rounded-full bg-cream px-8 py-4 text-sm font-semibold text-espresso transition-colors hover:bg-cream/80"
          >
            Book a consultation
          </Link>
        </div>
      </section>
    </>
  );
}
