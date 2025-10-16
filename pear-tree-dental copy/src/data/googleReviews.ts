// Stable fallback review stats and array used by small widgets / components.
// The Testimonials page loads the latest reviews directly from reviews.json at request time.

export const googleReviews: Array<{
  id: number;
  author: string;
  rating: number;
  date: string;
  review: string;
  verified: boolean;
  response?: { author: string; text: string; date: string };
}> = [];

export const googleReviewsStats = {
  averageRating: 4.9,
  totalReviews: 545,
  fiveStarCount: 515,
};
