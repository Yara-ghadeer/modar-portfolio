import type { Metadata } from "next";
import Image from "next/image";

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
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-copper md:text-left">
          About
        </p>
        <h1 className="mt-6 max-w-3xl text-center font-display text-4xl font-semibold leading-[1.16] tracking-tight text-espresso sm:text-5xl md:text-left md:text-6xl">
          Who I am
        </h1>

        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/portrait-hero.jpg"
              alt="Portrait of Modar Ghadeer"
              width={1066}
              height={1600}
              className="h-full w-full origin-top scale-[1.6] object-cover object-top"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-copper/15"
            />
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

      {/* How I work */}
      <section className="border-t border-espresso/8 bg-cream-deep">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-copper md:text-left">
            How I work
          </p>
          <h2 className="mt-4 text-center font-display text-4xl font-semibold tracking-tight text-espresso md:text-left">
            Three principles behind every project
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Numbers before opinions",
                text: "Every recommendation starts with the market and the P&L — not personal taste. If the numbers don't support an idea, I'll show you why.",
              },
              {
                title: "Hands-on, not deck-driven",
                text: "I work inside the business — kitchens, menus, suppliers, and service — so advice turns into something you can actually operate.",
              },
              {
                title: "Honest advice, always",
                text: "If a concept won't work, I say so early. A hard conversation at the start is cheaper than a failed opening later.",
              },
            ].map(({ title, text }, i) => (
              <div key={title} className="border-t-2 border-copper pt-6">
                <p className="font-display text-sm font-semibold text-copper">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-espresso">
                  {title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-copper">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1px_1fr] md:gap-14">
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">
              Mission
            </p>
            <p className="mt-6 font-display text-2xl font-semibold leading-snug text-cream md:text-3xl">
              To develop successful, sustainable, and profitable food
              businesses.
            </p>
          </div>
          <div className="hidden w-px bg-cream/20 md:block" />
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">
              Vision
            </p>
            <p className="mt-6 font-display text-2xl font-semibold leading-snug text-cream md:text-3xl">
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
        <a
          href="https://wa.me/601128688640?text=Hi%20Modar%2C%20I%27d%20like%20to%20book%20a%20consultation%20about%20my%20F%26B%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-block rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-copper-deep"
        >
          Get in touch
        </a>
      </section>
    </>
  );
}
