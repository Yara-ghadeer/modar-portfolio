import Link from "next/link";

const stats = [
  { value: "12+", label: "Years in F&B" },
  { value: "40+", label: "Concepts launched" },
  { value: "6", label: "Markets entered" },
  { value: "95%", label: "Client retention" },
];

const services = [
  {
    title: "Concept Development",
    description:
      "From idea to opening — positioning, brand story, menu direction, and the numbers behind them.",
  },
  {
    title: "Market Entry & Expansion",
    description:
      "Feasibility studies, location strategy, and franchising models for new markets.",
  },
  {
    title: "Menu Engineering",
    description:
      "Data-driven menu design that balances food cost, kitchen flow, and what guests actually order.",
  },
  {
    title: "Operational Excellence",
    description:
      "SOPs, team structure, and P&L discipline that turn a good restaurant into a scalable business.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-32">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-copper">
          F&amp;B Business Development
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.1] tracking-tight text-espresso md:text-7xl">
          Building food &amp; beverage brands that{" "}
          <em className="italic text-copper">last</em>.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink">
          {/* TODO: replace with Modar's real intro */}
          I&apos;m Modar — a business development consultant helping
          restaurants, cafés, and hospitality groups launch stronger concepts,
          enter new markets, and run profitable operations.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-espresso px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-copper"
          >
            Book a consultation
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-espresso/20 px-7 py-3.5 text-sm font-semibold text-espresso transition-colors hover:border-copper hover:text-copper"
          >
            Explore services
          </Link>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-espresso/8 bg-cream-deep">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="font-display text-4xl font-semibold text-espresso">
                {value}
              </p>
              <p className="mt-2 text-sm text-ink">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-copper">
              What I do
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-espresso">
              From first idea to full-scale operation
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold text-copper transition-colors hover:text-copper-deep"
          >
            All services →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-espresso/8 bg-paper p-8 transition-shadow hover:shadow-lg hover:shadow-espresso/5"
            >
              <h3 className="font-display text-xl font-semibold text-espresso">
                {title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-espresso">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold tracking-tight text-cream">
            Have a concept in mind — or one that needs a turnaround?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-cream/70">
            Let&apos;s talk about where your F&amp;B business is today and
            where it should be next year.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-block rounded-full bg-copper px-8 py-4 text-sm font-semibold text-cream transition-colors hover:bg-copper-deep"
          >
            Start the conversation
          </Link>
        </div>
      </section>
    </>
  );
}
