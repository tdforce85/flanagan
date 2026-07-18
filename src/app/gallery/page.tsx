import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business";
import { GALLERY } from "@/lib/gallery";
import { container, section } from "@/lib/ui";
import { SectionHeading } from "@/components/SectionHeading";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Before-and-after photos of recent handyman projects by ${BUSINESS.name}.`,
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-cream/40">
        <div className={`${container} py-14 sm:py-20`}>
          <SectionHeading
            as="h1"
            eyebrow="Our work"
            title="Before &amp; after"
            description="Drag the slider on any project to see the transformation. Real jobs, real results."
          />
        </div>
      </section>

      <section className={`${container} ${section}`}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((item) => (
            <BeforeAfter
              key={item.id}
              beforeSrc={item.beforeSrc}
              afterSrc={item.afterSrc}
              caption={item.caption}
            />
          ))}
        </div>
      </section>

      <CTASection title="Want results like these?" />
    </>
  );
}
