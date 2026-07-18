"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BUSINESS } from "@/lib/business";
import { container, btnPrimary } from "@/lib/ui";
import { CallButton } from "@/components/CallButton";
import { MenuIcon, CloseIcon } from "@/components/icons";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <nav className={`${container} flex h-16 items-center justify-between`}>
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-primary"
          onClick={() => setOpen(false)}
        >
          {BUSINESS.shortName}
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.href) ? "text-primary" : "text-ink/70"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <CallButton className={`${btnPrimary} px-4 py-2 text-sm`} showNumber />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-primary md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <ul className={`${container} flex flex-col py-2`}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-2 py-3 text-base font-medium ${
                    isActive(link.href)
                      ? "text-primary"
                      : "text-ink/80 hover:bg-cream/60"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-2 py-3">
              <CallButton className={`${btnPrimary} w-full`} showNumber />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
