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
    totalReviews: googleReviewsStats?.totalReviews || 500,
  };

  // Render stars
  const renderStars = () =>
    Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
      ));

  return (
    <div
      className={`p-2 flex flex-col items-center text-center ${className}`}
      data-testid="googlereviews-widget"
    >
      {/* Line 1 */}
      <div className="flex items-center space-x-1">
        <span className="text-lg font-bold text-pear-primary">
          {stats.averageRating}/5
        </span>
        <div className="flex space-x-0.5">{renderStars()}</div>
      </div>

      {/* Line 2 */}
      <div className="flex items-center space-x-1 text-xs text-gray-600">
        <span>{stats.totalReviews}+ 5-star Google reviews</span>
        <Image
          src="/images/google-logo-mini.webp"
          alt="Google"
          width={14}
          height={14}
          className="inline-block"
        />
      </div>
    </div>
  );
}
