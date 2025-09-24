"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterImage {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  title: string;
  description: string;
  treatment: string;
}

interface BeforeAfterSliderProps {
  images: BeforeAfterImage[];
  className?: string;
}

export default function BeforeAfterSlider({ images, className = "" }: BeforeAfterSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAfter, setShowAfter] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setShowAfter(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setShowAfter(false);
  };

  const currentImage = images[currentIndex];

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <Card className="overflow-hidden shadow-xl">
        <CardContent className="p-0">
          {/* Image Container */}
          <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
            {/* Before Image */}
            <picture className={`absolute inset-0 transition-opacity duration-500 ${showAfter ? 'opacity-0' : 'opacity-100'}`}>
              <source media="(min-width: 768px)" srcSet={currentImage.beforeSrc.replace('.JPG', '-large.webp')} type="image/webp" />
              <source media="(min-width: 480px)" srcSet={currentImage.beforeSrc.replace('.JPG', '-medium.webp')} type="image/webp" />
              <source srcSet={currentImage.beforeSrc.replace('.JPG', '-small.webp')} type="image/webp" />
              <img
                src={currentImage.beforeSrc}
                alt={currentImage.beforeAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </picture>

            {/* After Image */}
            <picture className={`absolute inset-0 transition-opacity duration-500 ${showAfter ? 'opacity-100' : 'opacity-0'}`}>
              <source media="(min-width: 768px)" srcSet={currentImage.afterSrc.replace('.JPG', '-large.webp')} type="image/webp" />
              <source media="(min-width: 480px)" srcSet={currentImage.afterSrc.replace('.JPG', '-medium.webp')} type="image/webp" />
              <source srcSet={currentImage.afterSrc.replace('.JPG', '-small.webp')} type="image/webp" />
              <img
                src={currentImage.afterSrc}
                alt={currentImage.afterAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </picture>

            {/* Before/After Toggle */}
            <div className="absolute top-4 left-4 flex bg-black/50 rounded-lg overflow-hidden">
              <button
                onClick={() => setShowAfter(false)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  !showAfter
                    ? 'bg-white text-black'
                    : 'text-pear-gold hover:bg-white/20'
                }`}
              >
                Before
              </button>
              <button
                onClick={() => setShowAfter(true)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  showAfter
                    ? 'bg-white text-black'
                    : 'text-pear-gold hover:bg-white/20'
                }`}
              >
                After
              </button>
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Slide Indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setShowAfter(false);
                    }}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex
                        ? 'bg-white'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Image Info */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-pear-primary mb-2">
                  {currentImage.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {currentImage.description}
                </p>
              </div>
              <Badge variant="outline" className="text-dental-green border-dental-green">
                {currentImage.treatment}
              </Badge>
            </div>

            {/* Progress indicator for multiple images */}
            {images.length > 1 && (
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Case {currentIndex + 1} of {images.length}</span>
                <span className={`font-medium ${showAfter ? 'text-dental-green' : 'text-gray-700'}`}>
                  {showAfter ? 'After Treatment' : 'Before Treatment'}
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
