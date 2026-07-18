import { eyebrow as eyebrowClass } from "@/lib/ui";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className={eyebrowClass}>{eyebrow}</p>}
      <Heading
        className={`mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl`}
      >
        {title}
      </Heading>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-ink/70">{description}</p>
      )}
    </div>
  );
}
