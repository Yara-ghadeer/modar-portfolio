import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold">
            Modar<span className="text-copper">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/60">
            F&amp;B business development consultant — building concepts that
            last and operations that scale.
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
          <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
            <li>hello@modar.example {/* TODO: real email */}</li>
            <li>+000 00 000 0000 {/* TODO: real phone */}</li>
            <li>LinkedIn {/* TODO: real link */}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-6xl px-6 py-6 text-xs text-cream/40">
          © {new Date().getFullYear()} Modar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
