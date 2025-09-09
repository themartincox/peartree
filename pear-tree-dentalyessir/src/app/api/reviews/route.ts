import { NextResponse } from 'next/server';
import { googleReviews, googleReviewsStats } from '@/data/googleReviews';

// Return Google Reviews data formatted to match what the GoogleReviews component expects
export async function GET() {
  // Transform the reviews to match the expected format
  const formattedReviews = googleReviews.map(review => ({
    author_name: review.author,
    rating: review.rating,
    text: review.review,
    time: Date.now(), // Current timestamp as fallback
    relative_time_description: review.date,
    profile_photo_url: review.profilePhoto || null
  }));

  // Return the reviews and stats
  return NextResponse.json({
    rating: googleReviewsStats.averageRating,
    total: googleReviewsStats.totalReviews,
    reviews: formattedReviews
  });
}
