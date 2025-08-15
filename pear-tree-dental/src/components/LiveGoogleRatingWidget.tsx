"use client";

import { Star } from "lucide-react";

interface LiveGoogleRatingWidgetProps {
  onClick: () => void;
}

const LiveGoogleRatingWidget = ({ onClick }: LiveGoogleRatingWidgetProps) => {
//    Using the actual rating from Google
  const rating = 4.9;
  const reviewCount = "over 415";

  return (
    <button
      onClick={onClick}
      className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm hover:shadow-md transition-all duration-200 hover:border-gray-300 cursor-pointer group"
    >
      <div className="flex items-center space-x-3">
        {/* Google G Logo */}
        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-xs">G</span>
        </div>

        {/* Content */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-700 font-medium text-sm">
            Google Rated
          </span>

          {/* Rating and Stars */}
          <div className="flex items-center space-x-1">
            <span className="text-gray-900 font-semibold text-sm">
              {rating.toFixed(1)}
            </span>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${i < rating ? "text-orange-400 fill-current" : "text-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default LiveGoogleRatingWidget;
