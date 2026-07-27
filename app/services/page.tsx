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

const process = [
  {
    step: "Discovery",
    detail: "Understanding your idea, your business, and what success looks like.",
  },
  {
    step: "Analysis",
    detail: "Market, competitors, and numbers — testing the idea against reality.",
  },
  {
    step: "Planning",
    detail: "Concept, business plan, and budget — the roadmap to opening.",
  },
  {
    step: "Development",
    detail: "Hands-on execution, from space and suppliers to opening day.",
  },
  {
    step: "Growth",
    detail: "Ongoing improvement of menu, operations, and profitability.",
  },
];

export default function Services() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-28">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-copper">
          Services
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.16] tracking-tight text-espresso sm:text-5xl md:text-6xl">
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
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-copper">
            My process
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-espresso">
            From first meeting to lasting growth
          </h2>
          <ol className="relative mt-16 grid gap-10 md:grid-cols-5 md:gap-8">
            <div
              aria-hidden="true"
              className="absolute left-0 top-[6px] hidden h-px w-full bg-copper/25 md:block"
            />
            {process.map(({ step, detail }, i) => (
              <li
                key={step}
                className="relative border-l border-copper/25 pl-6 md:border-l-0 md:pl-0 md:pt-9"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[7px] top-0 h-3.5 w-3.5 rounded-full border-2 border-copper bg-cream-deep md:left-0"
                />
                <p className="font-display text-sm font-semibold text-copper">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-espresso">
                  {step}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink">
                  {detail}
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
          <a
            href="https://wa.me/601128688640?text=Hi%20Modar%2C%20I%27d%20like%20to%20book%20a%20consultation%20about%20my%20F%26B%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-block rounded-full bg-copper px-8 py-4 text-sm font-semibold text-cream transition-colors hover:bg-copper-deep"
          >
            Book a consultation
          </a>
        </div>
      </section>
    </>
  );
}
