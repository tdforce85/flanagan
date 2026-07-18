import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business";
import { container, section } from "@/lib/ui";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustBadges } from "@/components/TrustBadges";
import { CTASection } from "@/components/CTASection";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description: `Meet ${BUSINESS.name} — a licensed, insured local handyman with ${BUSINESS.yearsInBusiness}+ years of experience serving ${BUSINESS.serviceAreas[0]} and nearby.`,
};

const REASONS = [
  {
    title: "We show up",
    body: "We call back and arrive when we say we will — the part most people wish handymen got right.",
  },
  {
    title: "Honest, up-front pricing",
    body: "You'll know the price before we start. No surprises, no mystery add-ons.",
  },
  {
    title: "Clean, careful work",
    body: "We treat your home like our own and leave the space tidier than we found it.",
  },
  {
    title: "One call, whole list",
    body: "Knock out several to-dos in a single visit instead of chasing multiple trades.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className={`${container} ${section}`}>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              as="h1"
              eyebrow="About us"
              title="Built on precision"
              description={BUSINESS.about[0]}
            />
            <TrustBadges className="mt-8" />
            <div className="mt-6 space-y-4 text-ink/70">
              {BUSINESS.about.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Owner photo placeholder — drop /public/images/owner.jpg and swap in <Image>. */}
          <div className="flex aspect-[4/5] w-full items-center justify-center rounded-2xl border border-dashed border-primary/30 bg-cream/60 text-center text-ink/50">
            <span className="px-6 text-sm font-medium">
              Add a friendly owner/team photo at
              <br />
              <code className="rounded bg-black/5 px-1">
                /public/images/owner.jpg
              </code>
            </span>
          </div>
        </div>
      </section>

      <section className="bg-cream/40">
        <div className={`${container} ${section}`}>
          <SectionHeading
            eyebrow="Why homeowners choose us"
            title="Dependable from the first call"
            align="center"
          />
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
            {REASONS.map((r) => (
              <div key={r.title} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary">
                    <CheckIcon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-primary">{r.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
