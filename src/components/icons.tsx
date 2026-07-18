import type { SVGProps } from "react";
import type { ServiceIconName } from "@/lib/business";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9L12 2.5z" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

// ── Service glyphs ─────────────────────────────────────────────────────────
function WrenchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 4.9L3 17.5 6.5 21l6.3-6.3a4 4 0 0 0 4.9-5.4l-2.5 2.5-2.3-.6-.6-2.3 2.4-2.6z" />
    </svg>
  );
}
function HammerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M15 12 6.5 20.5a2.1 2.1 0 0 1-3-3L12 9" />
      <path d="M17.6 6.4 14 10l-2-2 3.6-3.6a2 2 0 0 1 2.8 0l1.2 1.2a2 2 0 0 1 0 2.8l-2 .8z" />
    </svg>
  );
}
function PaintIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="6" rx="1" />
      <path d="M19 9v3a2 2 0 0 1-2 2h-5v3" />
      <rect x="10" y="17" width="4" height="5" rx="1" />
    </svg>
  );
}
function BoltIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  );
}
function DropIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.5S5 10 5 14.5a7 7 0 0 0 14 0C19 10 12 2.5 12 2.5z" />
    </svg>
  );
}
function HomeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9.5 21v-6h5v6" />
    </svg>
  );
}

const SERVICE_ICONS: Record<ServiceIconName, (p: IconProps) => React.JSX.Element> = {
  wrench: WrenchIcon,
  hammer: HammerIcon,
  home: HomeIcon,
  paint: PaintIcon,
  bolt: BoltIcon,
  drop: DropIcon,
};

export function ServiceIcon({
  name,
  ...props
}: IconProps & { name: ServiceIconName }) {
  const Glyph = SERVICE_ICONS[name];
  return <Glyph {...props} />;
}
