import type { Metadata } from "next";
import Image from "next/image";
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
          <div className="flex aspect-[4/5] items-end justify-center overflow-hidden rounded-2xl bg-copper/10">
            <Image
              src="/portrait-cutout.png"
              alt="Portrait of Modar Ghadeer"
              width={860}
              height={1120}
              className="w-[94%] object-contain object-bottom grayscale"
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

      {/* Mission & Vision */}
      <section className="border-t border-espresso/8 bg-cream-deep">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid overflow-hidden rounded-3xl md:grid-cols-2">
            <div className="bg-copper/10 p-10 md:p-14">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copper">
                Mission
              </p>
              <p className="mt-6 font-display text-2xl font-semibold leading-snug text-espresso md:text-3xl">
                To develop successful, sustainable, and profitable food
                businesses.
              </p>
            </div>
            <div className="bg-copper p-10 md:p-14">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-mint">
                Vision
              </p>
              <p className="mt-6 font-display text-2xl font-semibold leading-snug text-cream md:text-3xl">
                To become a trusted F&amp;B business development consultant in
                Malaysia.
              </p>
            </div>
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
