/*
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │  COLLECT FROM THE OWNER — replace every PLACEHOLDER below.                 │
 * │  □ Business name + logo            □ Phone number                          │
 * │  □ Gmail address (Web3Forms)       □ Service area / towns                  │
 * │  □ Services list                   □ Business hours                        │
 * │  □ Google "Place ID" (reviews)     □ Before/after photos → /public/images │
 * │  □ Domain                          □ Tagline                               │
 * │  □ Years in business + licensed/insured details                           │
 * │  □ Google Maps "Share → Embed" iframe src                                 │
 * └─────────────────────────────────────────────────────────────────────────┘
 */

export interface Service {
  title: string;
  description: string;
  icon: ServiceIconName;
}

export type ServiceIconName =
  | "wrench"
  | "hammer"
  | "paint"
  | "bolt"
  | "drop"
  | "fence"
  | "tile"
  | "door";

export interface BusinessHour {
  day: string;
  time: string;
}

export const BUSINESS = {
  name: "PLACEHOLDER Handyman Co.",
  shortName: "PLACEHOLDER Handyman",
  tagline: "Reliable repairs and improvements for your home",
  // Digits-only version lives in phoneHref; display version can be formatted.
  phone: "(555) 123-4567",
  phoneHref: "tel:+15551234567",
  // Where the Web3Forms contact form delivers. The access key is a separate
  // secret (see .dev.vars / Cloudflare env), NOT this address.
  email: "owner@example.com",
  yearsInBusiness: 10,
  licensed: true,
  insured: true,
  // Use a real street address if he has a storefront; otherwise a service-area
  // line. Shown in the footer + LocalBusiness schema.
  addressLine: "Serving the Greater PLACEHOLDER area",
  serviceAreas: [
    "PLACEHOLDER Town",
    "Neighboring Town",
    "Another Town",
    "Nearby Township",
  ],
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ] as BusinessHour[],
  // Production domain (used for metadataBase, sitemap, canonical, schema url).
  url: "https://example.com",
  // Google Maps "Share → Embed a map" iframe src (no API key needed).
  mapEmbedSrc: "",
  social: {
    facebook: "",
    google: "",
  },
} as const;

export const SERVICES: Service[] = [
  {
    title: "General Repairs",
    description:
      "The odd jobs and honey-do list you never get to — done right the first time.",
    icon: "wrench",
  },
  {
    title: "Carpentry & Trim",
    description:
      "Custom shelving, trim, doors, and finish carpentry with a clean, level result.",
    icon: "hammer",
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
      "Fixtures, ceiling fans, outlets, and switches installed safely to code.",
    icon: "bolt",
  },
  {
    title: "Plumbing Repairs",
    description:
      "Faucets, toilets, garbage disposals, and leaks fixed without the runaround.",
    icon: "drop",
  },
  {
    title: "Decks & Fences",
    description:
      "Repairs, board replacement, staining, and gate fixes to keep things solid.",
    icon: "fence",
  },
  {
    title: "Tile & Flooring",
    description:
      "Backsplashes, floor tile, grout, and transitions installed to last.",
    icon: "tile",
  },
  {
    title: "Doors & Windows",
    description:
      "Sticking doors, broken hardware, weatherstripping, and screen repairs.",
    icon: "door",
  },
];

/*
 * Fallback reviews — shown when the live Google reviews function isn't wired up
 * yet (missing key/Place ID). Replace or leave; the Reviews component prefers
 * live data from /api/reviews when available.
 */
export interface Review {
  author: string;
  rating: number;
  text: string;
  relativeTime?: string;
}

export const FALLBACK_REVIEWS: Review[] = [
  {
    author: "PLACEHOLDER — a happy customer",
    rating: 5,
    text: "Showed up on time, did clean work, and the price was exactly what we agreed on. Highly recommend.",
    relativeTime: "a month ago",
  },
  {
    author: "PLACEHOLDER — another customer",
    rating: 5,
    text: "Fixed three things on my list in one visit. Polite, tidy, and professional the whole way through.",
    relativeTime: "2 months ago",
  },
  {
    author: "PLACEHOLDER — a neighbor",
    rating: 5,
    text: "Finally a handyman who calls back and shows up. Will be my first call from now on.",
    relativeTime: "3 months ago",
  },
];
