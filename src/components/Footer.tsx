import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import { container } from "@/lib/ui";
import { PhoneIcon, MapPinIcon, ClockIcon } from "@/components/icons";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white/80">
      <div className={`${container} grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4`}>
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-lg font-bold text-white">{BUSINESS.name}</p>
          <p className="mt-2 text-sm">{BUSINESS.tagline}</p>
          <p className="mt-4 text-sm">
            {BUSINESS.licensed && "Licensed"}
            {BUSINESS.licensed && BUSINESS.insured && " & "}
            {BUSINESS.insured && "insured"}
            {" · "}
            {BUSINESS.yearsInBusiness}+ years
          </p>
        </div>

        <div>
          <p className="font-semibold text-white">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Contact</p>
          <ul className="mt-3 space-y-3 text-sm">
            <li>
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-2 hover:text-white"
              >
                <PhoneIcon className="h-4 w-4 text-secondary" aria-hidden />
                {BUSINESS.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
              <span>{BUSINESS.addressLine}</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Hours</p>
          <ul className="mt-3 space-y-2 text-sm">
            {BUSINESS.hours.map((h) => (
              <li key={h.day} className="flex items-start gap-2">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
                <span>
                  <span className="text-white">{h.day}:</span> {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className={`${container} flex flex-col gap-2 py-6 text-sm sm:flex-row sm:items-center sm:justify-between`}>
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p>
            Serving {BUSINESS.serviceAreas.join(", ")}.
          </p>
        </div>
      </div>
    </footer>
  );
}
