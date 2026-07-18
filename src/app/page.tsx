import Link from "next/link";
import { BUSINESS, SERVICES } from "@/lib/business";
import { GALLERY } from "@/lib/gallery";
import { container, section, btnOutline } from "@/lib/ui";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Reviews } from "@/components/Reviews";
import { MapEmbed } from "@/components/MapEmbed";
import { CTASection } from "@/components/CTASection";
import { CheckIcon, ArrowRightIcon } from "@/components/icons";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services teaser */}
      <section className={`${container} ${section}`}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="What we do"
            title="Handyman services for the whole house"
            description="One trusted pro for the repairs, installs, and upgrades on your list — inside and out."
          />
          <Link href="/services" className={`${btnOutline} hidden sm:inline-flex`}>
            All services
            <ArrowRightIcon className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
        <div className="mt-8 sm:hidden">
          <Link href="/services" className={`${btnOutline} w-full`}>
            All services
            <ArrowRightIcon className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      {/* Before / after highlights */}
      <section className="bg-cream/40">
        <div className={`${container} ${section}`}>
          <SectionHeading
            eyebrow="Recent work"
            title="See the difference"
            description="Drag the slider to compare before and after on a few recent projects."
            align="center"
          />
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
            {GALLERY.slice(0, 2).map((item) => (
              <BeforeAfter
                key={item.id}
                beforeSrc={item.beforeSrc}
                afterSrc={item.afterSrc}
                caption={item.caption}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/gallery" className={btnOutline}>
              View the full gallery
              <ArrowRightIcon className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className={`${container} ${section}`}>
        <SectionHeading
          eyebrow="Reviews"
          title="Neighbors who trust us"
          description="Real feedback from homeowners in the area."
          align="center"
        />
        <div className="mt-10">
          <Reviews />
        </div>
      </section>

      {/* Service area + map */}
      <section className="bg-cream/40">
        <div className={`${container} ${section} grid gap-10 lg:grid-cols-2 lg:items-center`}>
          <div>
            <SectionHeading
              eyebrow="Service area"
              title={`Proudly serving ${BUSINESS.serviceAreas[0]} & nearby`}
              description="If you're in the area and it's on your to-do list, we can help. Not sure if you're in range? Just ask."
            />
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
              {BUSINESS.serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-2 text-sm text-ink/80">
                  <CheckIcon className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {area}
                </li>
              ))}
            </ul>
          </div>
          <div className="h-72 lg:h-96">
            <MapEmbed className="h-full" />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
