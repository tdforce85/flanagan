import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import { container } from "@/lib/ui";
import { CallButton } from "@/components/CallButton";
import { btnOnDark } from "@/lib/ui";
import { ArrowRightIcon } from "@/components/icons";

export function CTASection({
  title = "Got a project or a to-do list?",
  subtitle = "Tell us what you need — most calls get a same-day callback.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-primary text-white">
      <div className={`${container} py-14 sm:py-16`}>
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
            <p className="mt-2 text-white/80">{subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CallButton className={btnOnDark} showNumber />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/40 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Request a quote
              <ArrowRightIcon className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
        <p className="mt-6 text-sm text-white/60">
          Serving {BUSINESS.serviceAreas.slice(0, 3).join(", ")} and nearby.
        </p>
      </div>
    </section>
  );
}
