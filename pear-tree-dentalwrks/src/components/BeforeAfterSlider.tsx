"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Eye, Camera } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  title?: string;
  description?: string;
  treatmentType?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  title,
  description,
  treatmentType,
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mountedRef = useRef(true);

  const updatePosition = useCallback((clientX: number) => {
    if (!mountedRef.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleStart = useCallback((clientX: number) => {
    if (!mountedRef.current) return;
    setIsDragging(true);
    updatePosition(clientX);
  }, [updatePosition]);

  const handleMove = useCallback((clientX: number) => {
    if (!mountedRef.current) return;
    updatePosition(clientX);
  }, [updatePosition]);

  const handleEnd = useCallback(() => {
    if (!mountedRef.current) return;
    setIsDragging(false);
  }, []);

  // Mouse
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  }, [handleStart]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    handleMove(e.clientX);
  }, [handleMove]);

  const handleMouseUp = useCallback(() => {
    handleEnd();
  }, [handleEnd]);

  // Touch
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  }, [handleStart]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    e.preventDefault();
    handleMove(e.touches[0].clientX);
  }, [handleMove]);

  const handleTouchEnd = useCallback(() => {
    handleEnd();
  }, [handleEnd]);

  // Bind/unbind listeners while dragging
  useEffect(() => {
    if (isDragging && mountedRef.current) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove, { passive: false });
      document.addEventListener("touchend", handleTouchEnd);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);

  const setPosition = useCallback((position: number) => {
    if (!mountedRef.current) return;
    setSliderPosition(position);
  }, []);

  return (
    <div className={`space-y-6 ${className}`}>
      {(title || treatmentType) && (
        <div className="text-center space-y-2">
          {treatmentType && (
            <Badge variant="secondary" className="bg-pear-primary/10 text-pear-primary">
              <Camera className="w-4 h-4 mr-2" />
              {treatmentType} Results
            </Badge>
          )}
          {title && <h3 className="heading-serif text-2xl font-bold text-pear-primary">{title}</h3>}
          {description && <p className="text-gray-600">{description}</p>}
        </div>
      )}

      {/* Slider */}
      <div className="relative">
        <div
          ref={containerRef}
          className="relative aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-xl border-4 border-white"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Before (base) */}
          <div className="absolute inset-0">
            <Image
              src={beforeImage}
              alt={beforeAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
              priority
              draggable={false}
              decoding="async"
            />
            <div className="pointer-events-none absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              Before
            </div>
          </div>

          {/* After (clipped) */}
          <div
            className="absolute inset-0 transition-all duration-75 ease-out"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src={afterImage}
              alt={afterAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
              draggable={false}
              decoding="async"
            />
            <div className="pointer-events-none absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              After
            </div>
          </div>

          {/* Slider line & handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-all duration-75 ease-out z-20"
            style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border-2 border-gray-300 flex items-center justify-center cursor-ew-resize hover:bg-gray-50 transition-colors">
              <div className="flex space-x-1">
                <ArrowLeft className="w-3 h-3 text-gray-600" />
                <ArrowRight className="w-3 h-3 text-gray-600" />
              </div>
            </div>
          </div>

          {/* Progress tag */}
          <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {sliderPosition < 25 ? "Before" : sliderPosition > 75 ? "After" : "Transition"}
          </div>
        </div>

        {/* Quick controls */}
        <div className="flex justify-center space-x-4 mt-4">
          <Button
            variant={sliderPosition <= 25 ? "default" : "outline"}
            size="sm"
            onClick={() => setPosition(0)}
            className="text-sm"
          >
            Before
          </Button>
          <Button
            variant={sliderPosition > 25 && sliderPosition < 75 ? "default" : "outline"}
            size="sm"
            onClick={() => setPosition(50)}
            className="text-sm"
          >
            <Eye className="w-4 h-4 mr-1" />
            Compare
          </Button>
          <Button
            variant={sliderPosition >= 75 ? "default" : "outline"}
            size="sm"
            onClick={() => setPosition(100)}
            className="text-sm"
          >
            After
          </Button>
        </div>
      </div>

      <div className="text-center text-sm text-gray-600">
        <p>Drag the slider or use the buttons to compare before and after results</p>
      </div>
    </div>
  );
}