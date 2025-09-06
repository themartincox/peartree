"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BeforeAfterImage {
  title: string;
  description: string;
  timeframe: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  treatmentType?: string;
}

interface BeforeAfterSliderProps {
  images?: BeforeAfterImage[];
  beforeImage?: string;
  afterImage?: string;
  beforeAlt?: string;
  afterAlt?: string;
  title?: string;
  description?: string;
  timeframe?: string;
  treatmentType?: string;
  className?: string;
}

const BeforeAfterSlider = ({
  images,
  beforeImage,
  afterImage,
  beforeAlt = "",
  afterAlt = "",
  title = "",
  description = "",
  timeframe = "",
  treatmentType,
  className = "",
}: BeforeAfterSliderProps) => {
  const imagesToRender =
    images && images.length > 0
      ? images
      : [
          {
            beforeImage: beforeImage || "",
            afterImage: afterImage || "",
            beforeAlt,
            afterAlt,
            title,
            description,
            timeframe,
            treatmentType,
          } as BeforeAfterImage,
        ];

  const containerClass =
    images && images.length > 1
      ? "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
      : className;

  return (
    <div className={containerClass}>
      {imagesToRender.map((image, index) => (
        <BeforeAfterSliderCard key={index} image={image} />
      ))}
    </div>
  );
};

interface BeforeAfterSliderCardProps {
  image: BeforeAfterImage;
}

const BeforeAfterSliderCard = ({ image }: BeforeAfterSliderCardProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalTouchEnd = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener("mouseup", handleGlobalMouseUp);
      document.addEventListener("touchend", handleGlobalTouchEnd);
    }

    return () => {
      document.removeEventListener("mouseup", handleGlobalMouseUp);
      document.removeEventListener("touchend", handleGlobalTouchEnd);
    };
  }, [isDragging]);

  return (
    <Card className="hover:shadow-lg transition-shadow overflow-hidden">
      <CardContent className="p-0">
        <div
          ref={containerRef}
          className="relative aspect-[16/9] overflow-hidden cursor-ew-resize select-none"
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0">
            <img
              src={image.afterImage}
              alt={image.afterAlt}
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              After
            </div>
          </div>

          {/* Before Image (Overlay) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src={image.beforeImage}
              alt={image.beforeAlt}
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute top-4 left-4 bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Before
            </div>
          </div>

          {/* Slider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
            style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
          >
            {/* Slider Handle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-gray-300 flex items-center justify-center">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            </div>
          </div>

          {/* Instruction Text */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-xs">
            Drag to compare
          </div>
        </div>

        {/* Image Info */}
        <div className="p-6">
          <h3 className="font-semibold text-pear-primary mb-2 text-lg">{image.title}</h3>
          <p className="text-gray-600 text-sm mb-3">{image.description}</p>
          <Badge variant="secondary" className="bg-soft-pink/20 text-pear-primary border-soft-pink/30">
            {image.timeframe || image.treatmentType}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default BeforeAfterSlider;

