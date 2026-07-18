import { BUSINESS } from "@/lib/business";
import { MapPinIcon } from "@/components/icons";

// Uses the free Google Maps "Share → Embed a map" iframe (no API key). When the
// src isn't filled in yet, renders an obvious placeholder instead of a broken
// iframe.
export function MapEmbed({ className = "" }: { className?: string }) {
  if (!BUSINESS.mapEmbedSrc) {
    return (
      <div
        className={`flex min-h-64 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-primary/30 bg-cream/50 p-6 text-center text-ink/60 ${className}`}
      >
        <MapPinIcon className="h-8 w-8 text-primary/50" aria-hidden />
        <p className="text-sm font-medium">
          Map placeholder — add the Google Maps embed URL in{" "}
          <code className="rounded bg-black/5 px-1">src/lib/business.ts</code>
        </p>
      </div>
    );
  }

  return (
    <iframe
      title={`Map showing the service area of ${BUSINESS.name}`}
      src={BUSINESS.mapEmbedSrc}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={`h-full min-h-64 w-full rounded-xl border-0 ${className}`}
      allowFullScreen
    />
  );
}
