"use client";

import { useState } from "react";
import { Card, CardContent, Badge } from "@/components/ui" as any;
import { Star, Quote, ThumbsUp, Verified } from "lucide-react";

type Review = {
  id: number;
  author: string;
  rating: number;
  date: string;
  review: string;
  verified: boolean;
  helpful?: number;
  response?: { author: string; text: string; date: string };
};

function Stars({ rating }: { rating: number }) {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
      ))}
    </>
  );
}

export default function ReviewsGrid({ reviews }: { reviews: Review[] }) {
  const [visible, setVisible] = useState(18); // 6 rows of 3
  const [loads, setLoads] = useState(0);

  const onLoadMore = () => {
    if (loads < 2) {
      setVisible((v) => v + 6); // +2 rows (6 cards)
      setLoads((l) => l + 1);
    } else {
      window.open(
        "https://www.google.com/search?q=Pear+Tree+Dental+Burton+Joyce+reviews",
        "_blank",
        "noopener,noreferrer",
      );
    }
  };

  const slice = reviews.slice(0, visible);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {slice.map((review) => (
          <Card key={review.id} className="hover:shadow-xl transition-all duration-300 border border-gray-200 bg-white/90">
            <CardContent className="p-6">
              {/* Google Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <img src="/images/google-logo-mini.webp" alt="Google" className="w-5 h-5" />
                  <span className="text-sm font-medium text-blue-600">Google Review</span>
                </div>
                {review.verified && (
                  <Badge variant="secondary" className="bg-blue-50 text-blue-600 border-blue-200">
                    <Verified className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                <Stars rating={review.rating} />
                <span className="text-sm font-medium text-gray-600 ml-2">{review.date}</span>
              </div>

              {/* Review Text */}
              <div className="relative mb-4">
                <Quote className="absolute -top-2 -left-2 w-6 h-6 text-blue-200" />
                <p className="text-gray-700 leading-relaxed pl-4">{review.review}</p>
              </div>

              {/* Author */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-pear-primary">{review.author}</div>
                  {review.helpful && (
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <ThumbsUp className="w-3 h-3" />
                      <span>{review.helpful} found helpful</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Practice Response */}
              {review.response && (
                <div className="mt-4 bg-blue-50 rounded-lg p-3 border-l-4 border-blue-200">
                  <div className="text-xs font-semibold text-blue-600 mb-1">Response from {review.response.author}</div>
                  <p className="text-sm text-gray-700">{review.response.text}</p>
                  <div className="text-xs text-gray-500 mt-1">{review.response.date}</div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load more button */}
      <div className="text-center mt-12">
        <button
          type="button"
          onClick={onLoadMore}
          className="inline-flex items-center px-6 py-3 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium"
        >
          {loads < 2 ? "Load more reviews" : "View all on Google"}
        </button>
      </div>
    </>
  );
}

