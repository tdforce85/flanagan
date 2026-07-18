import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business";
import { container, section } from "@/lib/ui";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { MapEmbed } from "@/components/MapEmbed";
import { CallButton } from "@/components/CallButton";
import { btnPrimary } from "@/lib/ui";
import { PhoneIcon, ClockIcon, MapPinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${BUSINESS.name}. Call ${BUSINESS.phone} or send a message for a free quote.`,
};

export default function ContactPage() {
  return (
    <>
      <section className={`${container} ${section}`}>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: details */}
          <div>
            <SectionHeading
              as="h1"
              eyebrow="Get in touch"
              title="Let's talk about your project"
              description="Call for the fastest response, or send a message and we'll get back to you — usually the same day."
            />

            <div className="mt-8">
              <CallButton className={btnPrimary} showNumber />
            </div>

            <dl className="mt-10 space-y-6">
              <div className="flex items-start gap-3">
                <PhoneIcon className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <div>
                  <dt className="text-sm font-semibold text-primary">Phone</dt>
                  <dd>
                    <a href={BUSINESS.phoneHref} className="text-ink/80 hover:text-primary">
                      {BUSINESS.phone}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <div>
                  <dt className="text-sm font-semibold text-primary">Service area</dt>
                  <dd className="text-ink/80">{BUSINESS.addressLine}</dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ClockIcon className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <div>
                  <dt className="text-sm font-semibold text-primary">Hours</dt>
                  <dd>
                    <ul className="space-y-1 text-ink/80">
                      {BUSINESS.hours.map((h) => (
                        <li key={h.day}>
                          <span className="font-medium text-ink">{h.day}:</span>{" "}
                          {h.time}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-primary">Send a message</h2>
            <p className="mt-1 text-sm text-ink/60">
              Tell us what you need and we&apos;ll follow up with a free quote.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className={container}>
          <div className="h-72 w-full sm:h-96">
            <MapEmbed className="h-full" />
          </div>
        </div>
      </section>
    </>
  );
}
