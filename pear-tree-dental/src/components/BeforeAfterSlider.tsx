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
  imageContainerClassName?: string;
  // Add support for optimized responsive images
  beforeImageSizes?: {
    small: string;
    medium: string;
    large: string;
  };
  afterImageSizes?: {
    small: string;
    medium: string;
    large: string;
  };
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  description,
  className = "",
  imageContainerClassName = "",
  beforeImageSizes,
  afterImageSizes
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [momentum, setMomentum] = useState(0);
  const [lastTouchTime, setLastTouchTime] = useState(0);
  const [velocityTracker, setVelocityTracker] = useState<Array<{ pos: number; time: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const mountedRef = useRef(true);
  const animationFrameRef = useRef<number>();

  // Handle position updates with mounted check and momentum
  const updatePosition = useCallback((clientX: number, applyMomentum = false) => {
    if (!mountedRef.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

    // Apply momentum effect for smooth movement
    if (applyMomentum && momentum !== 0) {
      percentage = Math.max(0, Math.min(100, percentage + momentum));
      setMomentum(momentum * 0.95); // Gradually reduce momentum
    }

    setSliderPosition(percentage);

    // Track velocity for touch momentum
    const now = Date.now();
    setVelocityTracker(prev => {
      const newTracker = [...prev, { pos: percentage, time: now }];
      // Keep only last 5 positions for velocity calculation
      return newTracker.slice(-5);
    });
  }, [momentum]);

  // Calculate velocity from touch tracking
  const calculateVelocity = useCallback(() => {
    if (velocityTracker.length < 2) return 0;

    const recent = velocityTracker[velocityTracker.length - 1];
    const previous = velocityTracker[velocityTracker.length - 2];

    const timeDiff = recent.time - previous.time;
    const posDiff = recent.pos - previous.pos;

    return timeDiff > 0 ? (posDiff / timeDiff) * 16 : 0; // Convert to pixels per frame (60fps)
  }, [velocityTracker]);

  // Enhanced touch start handling
  const handleStart = useCallback((clientX: number) => {
    if (!mountedRef.current) return;
    setIsDragging(true);
    setStartPosition(clientX);
    setMomentum(0);
    setVelocityTracker([]);
    setLastTouchTime(Date.now());

    // Cancel any ongoing momentum animation
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    updatePosition(clientX);
  }, [updatePosition]);

  // Enhanced touch move handling with velocity tracking
  const handleMove = useCallback((clientX: number) => {
    if (!mountedRef.current || !isDragging) return;
    updatePosition(clientX);
  }, [isDragging, updatePosition]);

  // Enhanced touch end with momentum
  const handleEnd = useCallback(() => {
    if (!mountedRef.current) return;

    const velocity = calculateVelocity();
    setIsDragging(false);

    // Apply momentum if velocity is significant
    if (Math.abs(velocity) > 0.5) {
      setMomentum(velocity);

      // Animate momentum decay
      const animateMomentum = () => {
        if (Math.abs(momentum) > 0.1) {
          updatePosition(sliderPosition + momentum, true);
          animationFrameRef.current = requestAnimationFrame(animateMomentum);
        }
      };
      animateMomentum();
    }

    setVelocityTracker([]);
  }, [calculateVelocity, momentum, sliderPosition, updatePosition]);

  // Swipe gesture detection
  const handleSwipe = useCallback((direction: 'left' | 'right') => {
    const swipeAmount = 15; // Percentage to move per swipe
    const newPosition = direction === 'left'
      ? Math.max(0, sliderPosition - swipeAmount)
      : Math.min(100, sliderPosition + swipeAmount);

    // Smooth transition to new position
    const animateToPosition = (target: number) => {
      const current = sliderPosition;
      const diff = target - current;
      const step = diff * 0.1;

      if (Math.abs(diff) > 0.5) {
        setSliderPosition(current + step);
        requestAnimationFrame(() => animateToPosition(target));
      } else {
        setSliderPosition(target);
      }
    };

    animateToPosition(newPosition);
  }, [sliderPosition]);

  // Enhanced mouse events
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

  // Enhanced touch events with swipe detection
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault(); // Prevent scrolling
    const touch = e.touches[0];
    handleStart(touch.clientX);
  }, [handleStart]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleMove(touch.clientX);
  }, [handleMove]);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    e.preventDefault();

    // Detect swipe gestures
    const touch = e.changedTouches[0];
    const timeDiff = Date.now() - lastTouchTime;
    const distance = Math.abs(touch.clientX - startPosition);

    // Quick swipe detection (< 300ms, > 50px)
    if (timeDiff < 300 && distance > 50) {
      const direction = touch.clientX > startPosition ? 'right' : 'left';
      handleSwipe(direction);
    }

    handleEnd();
  }, [handleEnd, handleSwipe, lastTouchTime, startPosition]);

  // Global event handlers
  useEffect(() => {
    if (isDragging && mountedRef.current) {
      document.addEventListener('mousemove', handleMouseMove, { passive: false });
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd, { passive: false });
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
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Enhanced position setting with smooth animation
  const setPosition = useCallback((position: number) => {
    if (!mountedRef.current) return;

    const animateToPosition = (target: number) => {
      const current = sliderPosition;
      const diff = target - current;
      const step = diff * 0.15; // Smooth easing

      if (Math.abs(diff) > 0.5) {
        setSliderPosition(current + step);
        requestAnimationFrame(() => animateToPosition(target));
      } else {
        setSliderPosition(target);
      }
    };

    animateToPosition(position);
  }, [sliderPosition]);

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
          className={`relative aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-xl touch-none ${imageContainerClassName}`}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          style={{ touchAction: 'none' }} // Prevent default touch behaviors
        >
          {/* Before Image (Base Layer) */}
          <div className="absolute inset-0">
            {beforeImageSizes ? (
              <picture className="block w-full h-full">
                <source
                  media="(min-width: 768px)"
                  srcSet={beforeImageSizes.large}
                  type="image/webp"
                />
                <source
                  media="(min-width: 480px)"
                  srcSet={beforeImageSizes.medium}
                  type="image/webp"
                />
                <source
                  srcSet={beforeImageSizes.small}
                  type="image/webp"
                />
                <Image
                  src={beforeImage}
                  alt={beforeAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 480px) 400px, (max-width: 768px) 600px, 800px"
                  priority
                />
              </picture>
            ) : (
              <Image
                src={beforeImage}
                alt={beforeAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            )}
            {/* Before Label */}
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg z-10">
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
            {afterImageSizes ? (
              <picture className="block w-full h-full">
                <source
                  media="(min-width: 768px)"
                  srcSet={afterImageSizes.large}
                  type="image/webp"
                />
                <source
                  media="(min-width: 480px)"
                  srcSet={afterImageSizes.medium}
                  type="image/webp"
                />
                <source
                  srcSet={afterImageSizes.small}
                  type="image/webp"
                />
                <Image
                  src={afterImage}
                  alt={afterAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 480px) 400px, (max-width: 768px) 600px, 800px"
                />
              </picture>
            ) : (
              <Image
                src={afterImage}
                alt={afterAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
            {/* After Label */}
            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg z-10">
              After
            </div>
          </div>

          {/* Smooth Border Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 rounded-2xl border-2 border-white/20 shadow-inner"></div>
            <div className="absolute inset-1 rounded-2xl border border-white/10"></div>
          </div>

          {/* Enhanced Slider Line with Touch Feedback */}
          <div
            className={`absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-all duration-75 ease-out z-20 ${
              isDragging ? 'scale-110 bg-blue-400' : ''
            }`}
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            {/* Enhanced Slider Handle with Touch Feedback */}
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-lg border-2 border-gray-300 flex items-center justify-center cursor-ew-resize transition-all duration-200 ${
              isDragging ? 'scale-125 bg-blue-50 border-blue-400 shadow-xl' : 'hover:bg-gray-50 hover:scale-110'
            }`}>
              <div className="flex space-x-1">
                <ArrowLeft className={`w-4 h-4 ${isDragging ? 'text-blue-600' : 'text-gray-600'}`} />
                <ArrowRight className={`w-4 h-4 ${isDragging ? 'text-blue-600' : 'text-gray-600'}`} />
              </div>
            </div>
          </div>

          {/* Enhanced Progress Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {sliderPosition < 25 ? 'Before' : sliderPosition > 75 ? 'After' : 'Transition'}
          </div>

          {/* Mobile Swipe Hints (show briefly on load) */}
          <div className="absolute inset-0 pointer-events-none md:hidden">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-lg px-2 py-1 text-xs text-gray-700 animate-pulse">
              Swipe →
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-lg px-2 py-1 text-xs text-gray-700 animate-pulse">
              ← Swipe
            </div>
          </div>
        </div>

        {/* Enhanced Quick Position Controls */}
        <div className="flex justify-center space-x-4 mt-4">
          <Button
            variant={sliderPosition <= 25 ? "default" : "outline"}
            size="sm"
            onClick={() => setPosition(0)}
            className="text-sm transition-all hover:scale-105"
          >
            Before
          </Button>
          <Button
            variant={sliderPosition > 25 && sliderPosition < 75 ? "default" : "outline"}
            size="sm"
            onClick={() => setPosition(50)}
            className="text-sm transition-all hover:scale-105"
          >
            <Eye className="w-4 h-4 mr-1" />
            Compare
          </Button>
          <Button
            variant={sliderPosition >= 75 ? "default" : "outline"}
            size="sm"
            onClick={() => setPosition(100)}
            className="text-sm transition-all hover:scale-105"
          >
            After
          </Button>
        </div>
      </div>

      {/* Enhanced Instructions with Mobile Tips */}
      <div className="text-center text-sm text-gray-600">
        <p className="hidden md:block">Drag the slider or use the buttons to compare before and after results</p>
        <p className="md:hidden">Touch and drag the slider, swipe left/right, or use the buttons to compare results</p>
      </div>
    </div>
  );
}
