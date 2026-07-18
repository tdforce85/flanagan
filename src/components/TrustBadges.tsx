import { BUSINESS } from "@/lib/business";
import { ShieldIcon, CheckIcon, ClockIcon } from "@/components/icons";

export function TrustBadges({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "onDark";
}) {
  const text = tone === "onDark" ? "text-white/90" : "text-ink/80";
  const icon = tone === "onDark" ? "text-secondary" : "text-primary";

  const badges: { icon: typeof ShieldIcon; label: string }[] = [];
  if (BUSINESS.licensed)
    badges.push({ icon: ShieldIcon, label: "Licensed" });
  if (BUSINESS.insured) badges.push({ icon: CheckIcon, label: "Insured" });
  badges.push({
    icon: ClockIcon,
    label: `${BUSINESS.yearsInBusiness}+ years experience`,
  });

  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-2 ${className}`}>
      {badges.map(({ icon: Icon, label }) => (
        <li key={label} className={`flex items-center gap-2 text-sm font-medium ${text}`}>
          <Icon className={`h-5 w-5 ${icon}`} aria-hidden />
          {label}
        </li>
      ))}
    </ul>
  );
}
