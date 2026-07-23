import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Modar Ghadeer",
  description:
    "Get in touch with Modar Ghadeer for F&B consulting engagements — WhatsApp, email, or LinkedIn.",
};

const channels = [
  {
    label: "WhatsApp",
    value: "+60 11 2868 8640",
    href: "https://wa.me/601128688640",
  },
  {
    label: "Email",
    value: "modarghadeer33@gmail.com",
    href: "mailto:modarghadeer33@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/modar-ghadeer",
    href: "https://www.linkedin.com/in/modar-ghadeer/",
  },
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
            {channels.map(({ label, value, href }) => (
              <div key={label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/60">
                  {label}
                </dt>
                <dd className="mt-1">
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="font-display text-xl text-espresso transition-colors hover:text-copper"
                  >
                    {value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Contact form — submissions are emailed to Modar via FormSubmit */}
        <form
          className="rounded-2xl border border-espresso/8 bg-paper p-8"
          action="https://formsubmit.co/modarghadeer33@gmail.com"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="New inquiry from your portfolio website"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
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
                required
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
                required
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
                required
                className="mt-1.5 w-full rounded-lg border border-espresso/15 bg-cream px-4 py-3 text-espresso outline-none transition-colors focus:border-copper"
              />
            </div>
            <button
              type="submit"
              className="h-12 w-full rounded-full bg-copper text-sm font-semibold text-cream transition-colors hover:bg-copper-deep"
            >
              Send message
            </button>
            <p className="text-xs text-ink/60">
              Your message goes straight to Modar&apos;s inbox. Prefer chat?
              WhatsApp is the fastest way to reach him.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
