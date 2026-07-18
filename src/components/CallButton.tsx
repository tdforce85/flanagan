import { BUSINESS } from "@/lib/business";
import { PhoneIcon } from "@/components/icons";
import { btnPrimary } from "@/lib/ui";

export function CallButton({
  className,
  label = "Call now",
  showNumber = false,
}: {
  className?: string;
  label?: string;
  showNumber?: boolean;
}) {
  return (
    <a
      href={BUSINESS.phoneHref}
      className={className ?? btnPrimary}
      aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}
    >
      <PhoneIcon className="h-4 w-4" aria-hidden />
      {showNumber ? BUSINESS.phone : label}
    </a>
  );
}
