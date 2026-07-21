import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Modar Ghadeer",
  description:
    "Get in touch with Modar Ghadeer for F&B consulting engagements — WhatsApp, email, LinkedIn, or Instagram.",
};

const channels = [
  { label: "WhatsApp", value: "+00 000 000 0000" /* TODO: real number */ },
  { label: "Email", value: "hello@modarghadeer.com" /* TODO: real email */ },
  { label: "LinkedIn", value: "linkedin.com/in/…" /* TODO: real link */ },
  { label: "Instagram", value: "@…" /* TODO: real handle */ },
];

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-copper">
        Contact
      </p>
      <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.1] tracking-tight text-espresso md:text-6xl">
        Let&apos;s talk about your business.
      </h1>

      <div className="mt-14 grid gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <p className="max-w-md text-lg leading-relaxed text-ink">
            Whether it&apos;s a new concept, a new market, or an existing
            operation that isn&apos;t performing — the first conversation is
            free and honest.
          </p>

          <dl className="space-y-6">
            {channels.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/60">
                  {label}
                </dt>
                <dd className="mt-1 font-display text-xl text-espresso">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Contact form (front-end only for now) */}
        <form
          className="rounded-2xl border border-espresso/8 bg-paper p-8"
          action="#"
        >
          <div className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-espresso"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="mt-1.5 h-12 w-full rounded-lg border border-espresso/15 bg-cream px-4 text-espresso outline-none transition-colors focus:border-copper"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-espresso"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-1.5 h-12 w-full rounded-lg border border-espresso/15 bg-cream px-4 text-espresso outline-none transition-colors focus:border-copper"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-espresso"
              >
                Tell me about your project
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1.5 w-full rounded-lg border border-espresso/15 bg-cream px-4 py-3 text-espresso outline-none transition-colors focus:border-copper"
              />
            </div>
            <button
              type="submit"
              className="h-12 w-full rounded-full bg-espresso text-sm font-semibold text-cream transition-colors hover:bg-copper"
            >
              Send message
            </button>
            <p className="text-xs text-ink/60">
              The form isn&apos;t wired to a backend yet — WhatsApp or email
              works best for now.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
