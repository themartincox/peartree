"use client";

import { Star, X } from "lucide-react";
import { useEffect } from "react";

interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

interface GoogleReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GoogleReviewsModal = ({ isOpen, onClose }: GoogleReviewsModalProps) => {
  // Same genuine reviews as the widget
  const reviews: Review[] = [
    {
      id: "1",
      author: "Marie Q",
      rating: 5,
      text: "Javaad you have actually made me smile and I've gained so much confidence with my smile. It's been just over 24hrs since you fitted my composite and my family and friends are amazed at the result, as am I! Thank you so much for your time and patience with a rather nervous patient.",
      date: "2 weeks ago",
    },
    {
      id: "2",
      author: "Meekz",
      rating: 5,
      text: "Thanx Pear Tree Dentist! Janet is always so friendly and makes me feel great about looking after my teeth. She always goes above and beyond, I would definitely recommend Pear Tree Dentist in Burton Joyce.",
      date: "1 month ago",
    },
    {
      id: "3",
      author: "Marie R",
      rating: 5,
      text: "After visiting a dentist for over 50 years, I can honestly say this is the best one I have been to. Polite, organised, professional and for once in my life, I am not stressed about my appointments.",
      date: "3 weeks ago",
    },
    {
      id: "4",
      author: "Miriam B",
      rating: 5,
      text: "Had to join here with my 2 small boys as nowhere nearer was taking NHS patients but am really pleased we did because the dentist Imrana is very good at her job and very reassuring. Great with my two boys age 1 and 3. Would recommend!",
      date: "1 week ago",
    },
    {
      id: "5",
      author: "Emily M",
      rating: 5,
      text: "I've been coming to this dentist for 30 years since the age of 3! I travel 45 minutes to get here and I wouldn't change it. Janet is absolutely brilliant and has always looked after me and all the family that see her too.",
      date: "2 months ago",
    },
    {
      id: "6",
      author: "Charlotte P",
      rating: 5,
      text: "I'm frightened about going to the dentist. So glad I found this one. Great dentist. She is very patient and positive with me. Wouldn't go anywhere else!",
      date: "5 days ago",
    },
    {
      id: "7",
      author: "Ian P",
      rating: 5,
      text: "Javaad is an absolutely lovely chap and a truly skilled Dentist. No one wants a tooth extraction, but if I'm having one done, it's him I want on the business end. Cheers chap.",
      date: "1 week ago",
    },
  ];

  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Google Reviews
              </h2>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {averageRating.toFixed(1)} • {reviews.length} reviews
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Reviews List */}
        <div className="overflow-y-auto max-h-[60vh] p-6 space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border-b border-gray-100 pb-6 last:border-b-0"
            >
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-pear-gold to-pear-gold/80 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">
                    {review.author.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-semibold text-gray-900">
                      {review.author}
                    </h3>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    "{review.text}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-3">
              Click below to see over 400 5 ⭐ reviews on Google
            </p>
            <a
              href="https://www.google.com/search?q=Pear+Tree+Dental+Burton+Joyce+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              View on Google
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleReviewsModal;
