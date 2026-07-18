import { BUSINESS } from "@/lib/business";
import { PhoneIcon } from "@/components/icons";

// Fixed bottom call bar, mobile only. Layout adds bottom padding so it never
// covers page content.
export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-primary/15 bg-white/95 p-3 backdrop-blur sm:hidden">
      <a
        href={BUSINESS.phoneHref}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-white"
        aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}
      >
        <PhoneIcon className="h-5 w-5" aria-hidden />
        Call {BUSINESS.phone}
      </a>
    </div>
  );
}
