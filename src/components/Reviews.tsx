"use client";

import { useEffect, useState } from "react";
import { FALLBACK_REVIEWS, type Review } from "@/lib/business";
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

export function Reviews() {
  const [data, setData] = useState<ReviewsPayload | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetch("/api/reviews")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((json: ReviewsPayload) => {
        if (active && json?.reviews?.length) setData(json);
        else if (active) setData(null);
      })
      .catch(() => active && setData(null))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  const reviews = data?.reviews ?? FALLBACK_REVIEWS;
  const usingFallback = !data;

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

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.slice(0, 6).map((review, i) => (
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
                <span className="font-normal text-ink/50">
                  {" "}
                  · {review.relativeTime}
                </span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-4 text-xs text-ink/50">
        {usingFallback
          ? "Sample reviews shown. Connect the Google Places API to display live reviews."
          : "Reviews from Google."}
      </p>
    </div>
  );
}
