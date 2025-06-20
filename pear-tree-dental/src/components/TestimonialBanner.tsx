import { FaStar } from "react-icons/fa";

interface TestimonialBannerProps {
  text: string;
  author: string;
  className?: string;
}

const TestimonialBanner = ({ text, author, className = "" }: TestimonialBannerProps) => {
  return (
    <div className={`bg-white border border-gray-200 rounded-2xl p-6 shadow-sm ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          {/* Google G Logo */}
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <span className="text-gray-600 font-medium">Google Review</span>
        </div>

        {/* 5 Stars */}
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>
      </div>

      <blockquote className="text-gray-700 leading-relaxed mb-3">
        "{text}"
      </blockquote>

      <cite className="text-sm text-gray-500 font-medium">- {author}</cite>
    </div>
  );
};

export default TestimonialBanner;
