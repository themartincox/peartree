import { Star } from "lucide-react";
import Image from "next/image";
import { googleReviewsStats } from "@/data/googleReviews";

interface GoogleReviewsProps {
  className?: string;
}

export default function GoogleReviews({ className = "" }: GoogleReviewsProps) {
  // Get stats with fallbacks
  const stats = {
    averageRating: googleReviewsStats?.averageRating || 4.9,
    totalReviews: googleReviewsStats?.totalReviews || 550,
    fiveStarCount: googleReviewsStats?.fiveStarCount || 525,
  };

  // Render the stars
  const renderStars = () => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
      ));
  };

  return (
    <div className={`p-3 ${className}`} data-testid="googlereviews-widget">
      <div className="flex items-center justify-center mb-1">
        <Image
          src="/images/google-logo-mini.webp"
          alt="Google"
          width={16}
          height={16}
          className="mr-1"
        />
        <span className="text-xs font-medium text-gray-700">Google Reviews</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold text-pear-primary">
          {stats.averageRating}
          <span className="text-sm text-gray-500">/5</span>
        </div>

        <div className="flex items-center space-x-1 my-1">
          {renderStars()}
        </div>

        <div className="text-xs text-gray-600">
          Based on {stats.totalReviews}+ reviews
        </div>
      </div>
    </div>
  );
}