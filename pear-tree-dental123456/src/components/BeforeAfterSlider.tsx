"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Eye, ArrowLeft, ArrowRight } from "lucide-react";

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
  description,
  className = ""
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mountedRef = useRef(true);

  // Handle position updates with mounted check
  const updatePosition = useCallback((clientX: number) => {
    if (!mountedRef.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  // Handle mouse/touch events for dragging
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

  // Mouse events
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

  // Touch events
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

  // Effect to handle global mouse/touch events
  useEffect(() => {
    if (isDragging && mountedRef.current) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  // Cleanup effect
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  // Quick position buttons
  const setPosition = useCallback((position: number) => {
    if (!mountedRef.current) return;
    setSliderPosition(position);
  }, []);

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Only show description if provided, without title and icon */}
      {description && (
        <div className="text-center">
          <p className="text-gray-600">{description}</p>
        </div>
      )}

      {/* Slider Container */}
      <div className="relative">
        <div
          ref={containerRef}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-xl"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Before Image (Base Layer) */}
          <div className="absolute inset-0">
            <Image
              src={beforeImage}
              alt={beforeAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {/* Before Label */}
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              Before
            </div>
          </div>

          {/* After Image (Clipped Layer) */}
          <div
            className="absolute inset-0 transition-all duration-75 ease-out"
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
            }}
          >
            <Image
              src={afterImage}
              alt={afterAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* After Label */}
            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              After
            </div>
          </div>

          {/* Smooth Border Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 rounded-2xl border-2 border-white/20 shadow-inner"></div>
            <div className="absolute inset-1 rounded-2xl border border-white/10"></div>
          </div>

          {/* Slider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-all duration-75 ease-out z-20"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            {/* Slider Handle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border-2 border-gray-300 flex items-center justify-center cursor-ew-resize hover:bg-gray-50 transition-colors">
              <div className="flex space-x-1">
                <ArrowLeft className="w-3 h-3 text-gray-600" />
                <ArrowRight className="w-3 h-3 text-gray-600" />
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {sliderPosition < 25 ? 'Before' : sliderPosition > 75 ? 'After' : 'Transition'}
          </div>
        </div>

        {/* Quick Position Controls */}
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

      {/* Instructions */}
      <div className="text-center text-sm text-gray-600">
        <p>Drag the slider or use the buttons to compare before and after results</p>
      </div>
    </div>
  );
}
