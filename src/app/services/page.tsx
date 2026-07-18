import type { Metadata } from "next";
import { BUSINESS, SERVICES } from "@/lib/business";
import { container, section } from "@/lib/ui";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services",
  description: `Handyman services offered by ${BUSINESS.name}: general repairs, carpentry, painting, minor electrical and plumbing, decks, tile, doors and more.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-cream/40">
        <div className={`${container} py-14 sm:py-20`}>
          <SectionHeading
            as="h1"
            eyebrow="Services"
            title="What we can take off your list"
            description={`From quick fixes to bigger projects, ${BUSINESS.name} handles the work most homeowners don't have the time or tools for.`}
          />
        </div>
      </section>

      <section className={`${container} ${section}`}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-black/5 bg-cream/50 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-primary">
            Don&apos;t see it listed?
          </h2>
          <p className="mt-2 max-w-2xl text-ink/70">
            This is just the short list. If it&apos;s a repair, an install, or a
            small improvement around the house, there&apos;s a good chance we can
            help — just ask.
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {BUSINESS.serviceAreas.map((area) => (
              <li key={area} className="flex items-center gap-2 text-sm text-ink/80">
                <CheckIcon className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                Serving {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
