import type { Service } from "@/lib/business";
import { ServiceIcon } from "@/components/icons";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group rounded-xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cream text-primary transition-colors group-hover:bg-secondary">
        <ServiceIcon name={service.icon} className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-primary">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/70">
        {service.description}
      </p>
    </div>
  );
}
