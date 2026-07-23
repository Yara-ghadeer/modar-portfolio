import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Business Consultation",
    description:
      "Professional consultation to evaluate ideas, solve business challenges, and support better decision-making.",
  },
  {
    title: "Concept & Business Planning",
    description:
      "Developing restaurant concepts and business plans that create a strong foundation for successful projects.",
  },
  {
    title: "Restaurant Development",
    description:
      "Supporting restaurant projects from planning to opening.",
  },
  {
    title: "Business Performance",
    description:
      "Improving operational efficiency, profitability, and customer experience.",
  },
  {
    title: "Brand Development",
    description:
      "Building a professional restaurant brand and customer experience.",
  },
];

const featuredWork = [
  "Premium Shawarma Concept",
  "Modern Café Concept",
  "Cloud Kitchen Concept",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-16 md:grid-cols-[1.15fr_0.85fr] md:pt-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-copper">
            Modar Ghadeer — F&amp;B Business Development Consultant
          </p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.1] tracking-tight text-espresso md:text-6xl lg:text-7xl">
            Transforming ideas into{" "}
            <em className="not-italic text-copper">successful</em>{" "}
            food businesses.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink">
            I help entrepreneurs and investors build profitable and
            sustainable food businesses through strategic planning, concept
            development, operational improvement, and business growth.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-copper-deep"
            >
              Book a consultation
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-copper px-7 py-3.5 text-sm font-semibold text-copper transition-colors hover:bg-copper/10"
            >
              Explore services
            </Link>
          </div>
        </div>

        <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-cream-deep">
          <Image
            src="/portrait.jpg"
            alt="Portrait of Modar Ghadeer"
            width={860}
            height={1120}
            priority
            className="h-full w-full object-cover object-top grayscale"
          />
        </div>
      </section>

      {/* Services preview */}
      <section className="border-t border-espresso/8 bg-cream-deep">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-copper">
                What I do
              </p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-espresso">
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

          <ul className="mt-14 border-y border-espresso/10">
            {services.map(({ title, description }, i) => (
              <li
                key={title}
                className="border-b border-espresso/10 last:border-b-0"
              >
                <Link
                  href="/services"
                  className="group grid items-center gap-x-8 gap-y-2 py-8 transition-colors hover:bg-copper/4 md:grid-cols-[72px_1.1fr_1.4fr_48px]"
                >
                  <span className="font-display text-lg font-medium text-copper/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-espresso transition-colors group-hover:text-copper">
                    {title}
                  </h3>
                  <p className="leading-relaxed text-ink">{description}</p>
                  <span
                    aria-hidden="true"
                    className="hidden -translate-x-2 justify-self-end text-2xl text-copper opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 md:block"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured work */}
      <section className="border-t border-espresso/8 bg-cream-deep">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-copper">
            Featured work
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-espresso">
            Concepts brought to life
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredWork.map((title) => (
              <article
                key={title}
                className="overflow-hidden rounded-2xl border border-espresso/8 bg-paper"
              >
                {/* TODO: replace with real cover image */}
                <div className="flex aspect-[4/3] items-center justify-center bg-cream-deep text-sm text-ink/50">
                  Cover image — coming soon
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-espresso">
                    {title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-espresso">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold tracking-tight text-cream">
            Have a concept in mind — or one that needs a turnaround?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-cream/70">
            Let&apos;s talk about where your food business is today and where
            it should be next year.
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
