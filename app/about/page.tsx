import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Modar Ghadeer",
  description:
    "Modar Ghadeer helps entrepreneurs, investors, and restaurant owners build successful food businesses in Malaysia.",
};

const clients = [
  "New Restaurant Projects",
  "Existing Restaurant Owners",
  "Investors",
  "Growing Businesses",
  "Businesses Facing Operational Challenges",
];

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-28">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-copper">
          About
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.1] tracking-tight text-espresso md:text-6xl">
          Who I am
        </h1>

        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1.4fr]">
          {/* TODO: replace with real portrait photo */}
          <div className="flex aspect-[4/5] items-center justify-center rounded-2xl bg-cream-deep text-sm text-ink/50">
            Portrait photo — to be provided
          </div>

          <div>
            <p className="text-lg leading-relaxed text-ink">
              I&apos;m Modar Ghadeer, an F&amp;B business development
              consultant. I help entrepreneurs, investors, and restaurant
              owners build successful food businesses through practical
              business development, strategic planning, and operational
              expertise.
            </p>

            <h2 className="mt-10 text-xs font-semibold uppercase tracking-[0.15em] text-ink/60">
              Who I work with
            </h2>
            <ul className="mt-4 space-y-2.5">
              {clients.map((client) => (
                <li key={client} className="flex gap-3 text-ink">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                  {client}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-t border-espresso/8 bg-cream-deep">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-2">
          <div className="rounded-2xl border border-espresso/8 bg-paper p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copper">
              Mission
            </p>
            <p className="mt-4 font-display text-2xl font-semibold leading-snug text-espresso">
              To develop successful, sustainable, and profitable food
              businesses.
            </p>
          </div>
          <div className="rounded-2xl bg-espresso p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-mint">
              Vision
            </p>
            <p className="mt-4 font-display text-2xl font-semibold leading-snug text-cream">
              To become a trusted F&amp;B business development consultant in
              Malaysia.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-espresso">
          Let&apos;s build something that lasts.
        </h2>
        <Link
          href="/contact"
          className="mt-7 inline-block rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-copper-deep"
        >
          Get in touch
        </Link>
      </section>
    </>
  );
}
