import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import { container, btnOnDark } from "@/lib/ui";
import { CallButton } from "@/components/CallButton";
import { TrustBadges } from "@/components/TrustBadges";
import { ArrowRightIcon } from "@/components/icons";

// Photo-forward hero. Drop a wide photo at /public/images/hero.jpg to fill the
// background; until then the green gradient stands on its own.
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-primary text-white">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-primary/95 to-primary/80"
        aria-hidden
      />
      <div className={`${container} py-20 sm:py-28 lg:py-32`}>
        <div className="max-w-3xl">
          <p className="font-semibold uppercase tracking-wide text-secondary">
            {BUSINESS.tagline}
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Repairs, upgrades &amp; to-do lists — done right.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85 sm:text-xl">
            {BUSINESS.name} is your reliable local handyman serving{" "}
            {BUSINESS.serviceAreas.slice(0, 2).join(", ")} and the surrounding
            area. One call handles the whole list.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton className={btnOnDark} showNumber />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/40 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Request a free quote
              <ArrowRightIcon className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <TrustBadges tone="onDark" className="mt-8" />
        </div>
      </div>
    </section>
  );
}
