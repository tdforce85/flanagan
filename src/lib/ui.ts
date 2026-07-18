// Shared Tailwind class strings — the project's lightweight reuse mechanism
// (mirrors the sibling portfolio's `inputClass` pattern, promoted to a module).

export const container = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

export const section = "py-16 sm:py-20 lg:py-24";

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

export const btnPrimary = `${btnBase} bg-primary text-white hover:bg-primary/90 focus:ring-primary px-5 py-3`;

export const btnAccent = `${btnBase} bg-secondary text-primary hover:bg-secondary/80 focus:ring-secondary px-5 py-3`;

export const btnOutline = `${btnBase} border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary px-5 py-3`;

// For use on the dark primary-green band.
export const btnOnDark = `${btnBase} bg-white text-primary hover:bg-cream focus:ring-white focus:ring-offset-primary px-5 py-3`;

export const card =
  "rounded-xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-md";

export const inputClass =
  "w-full rounded-lg border border-black/15 bg-white px-3 py-2.5 text-ink placeholder:text-ink/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40";

export const eyebrow =
  "text-sm font-semibold uppercase tracking-wide text-primary/70";
