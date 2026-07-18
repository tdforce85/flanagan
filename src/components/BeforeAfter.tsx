"use client";

import { useState } from "react";
import Image from "next/image";

interface Side {
  src?: string;
  label: string;
  tone: "before" | "after";
}

function Layer({ src, label, tone }: Side) {
  if (src) {
    return (
      <Image
        src={src}
        alt={`${label} — project photo`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        loading="lazy"
      />
    );
  }
  // Placeholder when no photo is set yet.
  return (
    <div
      className={`flex h-full w-full items-center justify-center ${
        tone === "before" ? "bg-cream text-primary/60" : "bg-secondary text-primary"
      }`}
    >
      <span className="text-sm font-semibold uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  caption,
}: {
  beforeSrc?: string;
  afterSrc?: string;
  caption: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <figure className="overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm">
      <div className="relative aspect-[4/3] w-full select-none overflow-hidden">
        {/* Before = base layer */}
        <Layer src={beforeSrc} label="Before" tone="before" />

        {/* After = clipped overlay revealed by the slider */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Layer src={afterSrc} label="After" tone="after" />
        </div>

        {/* Divider handle */}
        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-white text-primary">
            <span aria-hidden className="text-xs font-bold">
              ‹›
            </span>
          </div>
        </div>

        {/* Full-area range input for touch + mouse dragging */}
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
          aria-label={`Drag to compare before and after: ${caption}`}
        />
      </div>
      <figcaption className="px-4 py-3 text-sm font-medium text-ink/70">
        {caption}
      </figcaption>
    </figure>
  );
}
