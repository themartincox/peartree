// Use the freshly exported JSON from Google Business Profile as the single source of truth.
// This module maps that JSON into the shape used by the app and computes summary stats.
// Note: tsconfig has "resolveJsonModule": true so we can import JSON at build time.

// biome-ignore lint/suspicious/noExplicitAny: mapping external JSON
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import raw from "./reviews.json";

function mapStar(star?: string): number {
  switch (star) {
    case "FIVE":
      return 5;
    case "FOUR":
      return 4;
    case "THREE":
      return 3;
    case "TWO":
      return 2;
    case "ONE":
      return 1;
    default:
      return 5;
  }
}

function fmt(d?: string): string {
  try {
    if (!d) return "";
    const dt = new Date(d);
    return dt.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  } catch {
    return d || "";
  }
}

// biome-ignore lint/suspicious/noExplicitAny: external JSON shape
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const list: any[] = (raw as any)?.reviews ?? (raw as any) ?? [];

export const googleReviews = list.map((r, i) => ({
  id: i + 1,
  author: r?.reviewer?.displayName || "Anonymous",
  rating: mapStar(r?.starRating),
  date: fmt(r?.createTime),
  review: r?.comment || "",
  verified: true,
  response: r?.reviewReply?.comment
    ? { author: "Pear Tree Dental", text: r.reviewReply.comment, date: fmt(r.reviewReply.updateTime) }
    : undefined,
}));

const total = googleReviews.length;
const sum = googleReviews.reduce((acc, r) => acc + (r.rating || 0), 0);
const averageRating = total ? Math.round((sum / total) * 10) / 10 : 5.0;
const fiveStarCount = googleReviews.filter((r) => r.rating === 5).length;

export const googleReviewsStats = {
  averageRating,
  totalReviews: total,
  fiveStarCount,
};
