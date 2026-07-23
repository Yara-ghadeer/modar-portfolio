import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold">
            Modar Ghadeer<span className="text-mint">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/60">
            F&amp;B business development consultant — transforming ideas into
            successful food businesses.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cream/40">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/about" className="text-cream/75 transition-colors hover:text-cream">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-cream/75 transition-colors hover:text-cream">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-cream/75 transition-colors hover:text-cream">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cream/40">
            Get in touch
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href="https://wa.me/601128688640"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/75 transition-colors hover:text-cream"
              >
                WhatsApp — +60 11 2868 8640
              </a>
            </li>
            <li>
              <a
                href="mailto:modarghadeer33@gmail.com"
                className="text-cream/75 transition-colors hover:text-cream"
              >
                modarghadeer33@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/modar-ghadeer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/75 transition-colors hover:text-cream"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-6xl px-6 py-6 text-xs text-cream/40">
          © {new Date().getFullYear()} Modar Ghadeer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
