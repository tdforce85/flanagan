import { BUSINESS } from "@/lib/business";

// LocalBusiness structured data for rich results / local SEO.
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: BUSINESS.name,
    description: BUSINESS.tagline,
    url: BUSINESS.url,
    telephone: BUSINESS.phoneHref.replace("tel:", ""),
    email: BUSINESS.email,
    areaServed: BUSINESS.serviceAreas.map((name) => ({
      "@type": "City",
      name,
    })),
    openingHoursSpecification: BUSINESS.hours
      .filter((h) => !/closed/i.test(h.time))
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        description: h.time,
      })),
    ...(BUSINESS.social.facebook || BUSINESS.social.google
      ? {
          sameAs: [BUSINESS.social.facebook, BUSINESS.social.google].filter(
            Boolean,
          ),
        }
      : {}),
  };
}
