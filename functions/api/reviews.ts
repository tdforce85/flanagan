// Cloudflare Pages Function: GET /api/reviews
// Fetches Google reviews server-side (keeping the API key secret) and caches the
// result to protect the Places API quota. Returns a trimmed JSON payload the
// client `Reviews` component renders. On any failure it returns an empty list
// (HTTP 200) so the client falls back to sample reviews gracefully.
//
// NOTE: this file is served/built by Cloudflare (wrangler), not by `next build`
// — it is excluded from the Next tsconfig. Test locally with:
//   npm run build && npx wrangler pages dev out/   (vars in .dev.vars)

interface Env {
  GOOGLE_PLACES_API_KEY?: string;
  PLACE_ID?: string;
}

interface PagesContext {
  request: Request;
  env: Env;
  waitUntil: (promise: Promise<unknown>) => void;
}

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description?: string;
}

const CACHE_TTL_SECONDS = 60 * 60 * 24; // 24h

function json(body: unknown, cacheSeconds = 0): Response {
  return new Response(JSON.stringify(body), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": cacheSeconds
        ? `public, max-age=${cacheSeconds}`
        : "no-store",
    },
  });
}

export const onRequestGet = async ({
  request,
  env,
  waitUntil,
}: PagesContext): Promise<Response> => {
  const empty = { rating: 0, total: 0, reviews: [] };

  if (!env.GOOGLE_PLACES_API_KEY || !env.PLACE_ID) {
    return json(empty);
  }

  const cache = (caches as unknown as { default: Cache }).default;
  const cacheKey = new Request(new URL("/api/reviews", request.url).toString());

  const hit = await cache.match(cacheKey);
  if (hit) return hit;

  try {
    const url = new URL(
      "https://maps.googleapis.com/maps/api/place/details/json",
    );
    url.searchParams.set("place_id", env.PLACE_ID);
    url.searchParams.set("fields", "rating,user_ratings_total,reviews");
    url.searchParams.set("reviews_sort", "newest");
    url.searchParams.set("key", env.GOOGLE_PLACES_API_KEY);

    const upstream = await fetch(url.toString());
    const data = (await upstream.json()) as {
      status: string;
      result?: {
        rating?: number;
        user_ratings_total?: number;
        reviews?: GoogleReview[];
      };
    };

    if (data.status !== "OK" || !data.result) {
      return json(empty);
    }

    const payload = {
      rating: data.result.rating ?? 0,
      total: data.result.user_ratings_total ?? 0,
      reviews: (data.result.reviews ?? []).slice(0, 6).map((r) => ({
        author: r.author_name,
        rating: r.rating,
        text: r.text,
        relativeTime: r.relative_time_description,
      })),
    };

    const response = json(payload, CACHE_TTL_SECONDS);
    waitUntil(cache.put(cacheKey, response.clone()));
    return response;
  } catch {
    return json(empty);
  }
};
