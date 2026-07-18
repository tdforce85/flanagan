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
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.state,
      addressCountry: "US",
    },
    areaServed: BUSINESS.counties.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    openingHoursSpecification: BUSINESS.hours
      .filter((h) => !/appointment|closed/i.test(h.time))
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
