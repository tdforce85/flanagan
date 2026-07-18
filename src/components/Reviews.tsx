"use client";

import { useEffect, useState } from "react";
import { BUSINESS, type Review } from "@/lib/business";
import { StarIcon } from "@/components/icons";

interface ReviewsPayload {
  rating?: number;
  total?: number;
  reviews: Review[];
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <StarIcon
          key={n}
          className={`h-4 w-4 ${n <= Math.round(rating) ? "text-amber-500" : "text-black/15"}`}
          aria-hidden
        />
      ))}
    </div>
  );
}

const googleSearchUrl =
  BUSINESS.social.google ||
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${BUSINESS.name} ${BUSINESS.city} ${BUSINESS.state}`,
  )}`;

export function Reviews() {
  const [data, setData] = useState<ReviewsPayload | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetch("/api/reviews")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((json: ReviewsPayload) => {
        if (active) setData(json?.reviews?.length ? json : null);
      })
      .catch(() => active && setData(null))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-busy>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-40 animate-pulse rounded-xl border border-black/5 bg-cream/60"
          />
        ))}
      </div>
    );
  }

  // No live reviews yet: link to real profiles instead of showing sample quotes.
  if (!data) {
    return (
      <div className="mx-auto max-w-xl rounded-xl border border-black/5 bg-white p-8 text-center shadow-sm">
        <div className="flex justify-center">
          <Stars rating={5} />
        </div>
        <p className="mt-3 text-ink/70">
          We&apos;re proud of the reputation we&apos;ve built with our neighbors.
          Read what customers are saying:
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a
            href={googleSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-semibold text-white transition-colors hover:bg-primary/90"
          >
            Reviews on Google
          </a>
          {BUSINESS.social.facebook && (
            <a
              href={BUSINESS.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-5 py-2.5 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Find us on Facebook
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.reviews.slice(0, 6).map((review, i) => (
          <figure
            key={i}
            className="flex flex-col rounded-xl border border-black/5 bg-white p-6 shadow-sm"
          >
            <Stars rating={review.rating} />
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink/80">
              “{review.text}”
            </blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-primary">
              {review.author}
              {review.relativeTime && (
                <span className="font-normal text-ink/50"> · {review.relativeTime}</span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-ink/50">Reviews from Google.</p>
    </div>
  );
}
