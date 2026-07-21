import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Modar",
  description:
    "Modar's background in F&B business development, hospitality operations, and brand growth.",
};

const milestones = [
  {
    period: "Placeholder — 20XX–20XX",
    role: "Senior F&B Consultant",
    detail:
      "TODO: real experience — e.g. led concept development and market-entry projects across the region.",
  },
  {
    period: "Placeholder — 20XX–20XX",
    role: "Operations Manager, Hospitality Group",
    detail:
      "TODO: real experience — e.g. ran multi-outlet operations, P&L ownership, team of XX.",
  },
  {
    period: "Placeholder — 20XX–20XX",
    role: "Restaurant Manager",
    detail:
      "TODO: real experience — e.g. opened and stabilized flagship location.",
  },
];

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-28">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-copper">
          About
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.1] tracking-tight text-espresso md:text-6xl">
          Hospitality is a business of details — and margins.
        </h1>

        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1.4fr]">
          {/* Portrait placeholder */}
          <div className="flex aspect-[4/5] items-center justify-center rounded-2xl bg-cream-deep text-sm text-ink/50">
            Portrait photo — to be provided
          </div>

          <div className="space-y-5 text-lg leading-relaxed text-ink">
            {/* TODO: replace with Modar's real bio */}
            <p>
              I&apos;m Modar, an F&amp;B business development consultant. This
              paragraph is a placeholder for your real bio — where you started,
              what markets you&apos;ve worked in, and the kinds of brands
              you&apos;ve helped build.
            </p>
            <p>
              A second placeholder paragraph: your philosophy on hospitality,
              what you believe makes a concept succeed, and how you work with
              owners and operators.
            </p>
            <p>
              A third placeholder paragraph: what clients can expect when they
              engage you — process, honesty about the numbers, and outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Experience timeline */}
      <section className="border-t border-espresso/8 bg-cream-deep">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-espresso">
            Experience
          </h2>
          <ol className="mt-10 space-y-8 border-l border-espresso/15 pl-8">
            {milestones.map(({ period, role, detail }) => (
              <li key={role} className="relative">
                <span className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-copper" />
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/60">
                  {period}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-espresso">
                  {role}
                </h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-ink">
                  {detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-espresso">
          Want the full story?
        </h2>
        <Link
          href="/contact"
          className="mt-7 inline-block rounded-full bg-espresso px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-copper"
        >
          Get in touch
        </Link>
      </section>
    </>
  );
}
