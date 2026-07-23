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
  {
    title: "Premium Shawarma Concept",
    line: "A street classic reimagined as a premium fast-casual brand.",
    tags: ["Concept", "Branding", "Menu"],
    image: "/work/kitchen-equipment.jpg",
  },
  {
    title: "Modern Café Concept",
    line: "A contemporary café experience built around quality coffee.",
    tags: ["Concept", "Feasibility", "Design"],
    image: "/work/cafe-dark.jpg",
  },
  {
    title: "Cloud Kitchen Concept",
    line: "A delivery-first kitchen designed for efficient operations.",
    tags: ["Concept", "Operations", "Launch"],
    image: "/work/cloud-kitchen.jpg",
  },
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

        <div className="relative flex aspect-[4/5] w-full items-end justify-center overflow-hidden rounded-3xl bg-copper/10">
          <Image
            src="/portrait-cutout.png"
            alt="Portrait of Modar Ghadeer"
            width={860}
            height={1120}
            priority
            className="w-[94%] object-contain object-bottom grayscale"
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

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            {/* Featured service */}
            <Link
              href="/services"
              className="group flex flex-col justify-between rounded-2xl bg-copper p-10 transition-colors hover:bg-copper-deep"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cream/60">
                  Where most clients start
                </p>
                <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight text-cream">
                  {services[0].title}
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-cream/80">
                  {services[0].description}
                </p>
                <ul className="mt-8 space-y-2.5">
                  {[
                    "Business Assessment",
                    "Strategic Advice",
                    "Opportunity Analysis",
                    "Action Plan",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm text-cream/90"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-10 text-sm font-semibold text-cream">
                Start here{" "}
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </p>
            </Link>

            {/* Supporting services */}
            <div className="grid gap-6">
              {services.slice(1).map(({ title, description }) => (
                <Link
                  key={title}
                  href="/services"
                  className="group flex items-center justify-between gap-6 rounded-2xl border border-espresso/8 bg-paper p-6 transition-colors hover:border-copper/40"
                >
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-espresso transition-colors group-hover:text-copper">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink">
                      {description}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="-translate-x-1 text-xl text-copper opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="border-t border-espresso/8 bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-copper">
            Featured work
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-espresso">
            Concepts brought to life
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-ink">
            A selection of concepts I&apos;ve helped shape — from first
            sketch to opening day.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {featuredWork.map(({ title, line, tags, image }) => (
              <article key={title} className="group">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={image}
                    alt={`${title} cover photo`}
                    width={1200}
                    height={900}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-espresso">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink">{line}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-copper/25 px-3 py-1 text-xs font-medium text-copper"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure */}
      <section className="border-t border-espresso/8 bg-copper/8">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-copper">
            Brochure
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-espresso">
            F&amp;B consultancy — an overview
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ink">
            Everything on one page — services, process, and how to get in
            touch. Download the overview and share it with your partners or
            investors.
          </p>
          <a
            href="/brochure.pdf"
            download="Modar-Ghadeer-FB-Consultancy.pdf"
            className="mt-9 inline-block rounded-full bg-copper px-8 py-4 text-sm font-semibold text-cream transition-colors hover:bg-copper-deep"
          >
            Download the brochure (PDF)
          </a>
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
