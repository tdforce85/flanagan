/*
 * Owner-provided business details for Flanagan Home Services, Inc.
 * Remaining to add when available:
 *   □ Square logo → /public/images/logo.png (then swap into Header/Footer)
 *   □ Work + before/after photos → /public/images/ and /public/images/gallery/
 *   □ Google "Place ID" + Places API key → live reviews (env vars, see README)
 */

export interface Service {
  title: string;
  description: string;
  icon: ServiceIconName;
}

export type ServiceIconName =
  | "wrench"
  | "hammer"
  | "home"
  | "paint"
  | "bolt"
  | "drop";

export interface BusinessHour {
  day: string;
  time: string;
}

export const BUSINESS = {
  name: "Flanagan Home Services, Inc.",
  shortName: "Flanagan Home Services",
  tagline: "Meticulous craftsmanship for your home",
  phone: "(267) 984-5129",
  phoneHref: "tel:+12679845129",
  email: "flanaganhomeservicesinc@gmail.com",
  yearsInBusiness: 15,
  licensed: true,
  insured: true,
  city: "Warminster",
  state: "PA",
  addressLine: "Based in Warminster, PA — serving Bucks & Montgomery Counties",
  counties: ["Bucks County", "Montgomery County"],
  serviceAreas: [
    "Warminster",
    "Warrington",
    "Doylestown",
    "Richboro",
    "Hatboro",
    "Horsham",
    "Willow Grove",
    "Ambler",
  ],
  hours: [
    { day: "Monday – Friday", time: "7:30 AM – 5:00 PM" },
    { day: "Saturday – Sunday", time: "By appointment" },
  ] as BusinessHour[],
  url: "https://www.flanaganhomeservicesinc.com",
  // Free Google Maps embed (no API key) centered on the service area.
  mapEmbedSrc:
    "https://maps.google.com/maps?q=Warminster,%20PA&z=10&output=embed",
  social: {
    facebook:
      "https://www.facebook.com/p/Flanagan-Home-Services-Inc-100086729224438/",
    google: "",
  },
  // About-page story (written from the owner's background).
  about: [
    "Before founding Flanagan Home Services, our owner spent years as a union boilermaker — welding and handling high-risk work where a single missed detail could be the difference between safety and disaster. That standard never left him.",
    "Today he brings that same precision and accountability to every home project, large or small. Meticulous by nature and a craftsman at heart, he treats your house with the same care he'd give his own.",
    "A proud family man rooted in the local community, he built Flanagan Home Services on honest, high-quality work for his neighbors across Bucks and Montgomery Counties.",
  ],
} as const;

export const SERVICES: Service[] = [
  {
    title: "General Repairs",
    description:
      "The odd jobs and honey-do list you never get to — handled with care and done right the first time.",
    icon: "wrench",
  },
  {
    title: "Carpentry & Trim",
    description:
      "Custom trim, shelving, doors, and finish carpentry with clean, precise, level results.",
    icon: "hammer",
  },
  {
    title: "Renovations",
    description:
      "Kitchens, baths, basements, and more — full-room updates managed carefully from start to finish.",
    icon: "home",
  },
  {
    title: "Plumbing",
    description:
      "Faucets, toilets, disposals, and leaks fixed properly — without the runaround.",
    icon: "drop",
  },
  {
    title: "Painting & Drywall",
    description:
      "Patching, texturing, and interior painting that leaves rooms looking new.",
    icon: "paint",
  },
  {
    title: "Minor Electrical",
    description:
      "Fixtures, ceiling fans, outlets, and switches installed safely and to code.",
    icon: "bolt",
  },
];

export interface Review {
  author: string;
  rating: number;
  text: string;
  relativeTime?: string;
}
