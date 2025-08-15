"use client";

import { useRef } from "react";

interface VideoHeroProps {
  videoSrc: string;
  posterImage: string;
  fallbackImage: string;
  altText: string;
}

export default function VideoHero({
  videoSrc,
  posterImage,
  fallbackImage,
  altText,
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="relative h-72 sm:h-96 lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={posterImage}
      >
        <source src={videoSrc} type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <img
          src={fallbackImage}
          alt={altText}
          className="w-full h-full object-cover"
        />
      </video>

      {/* Video overlay for better text readability */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Video controls overlay */}
      <div className="absolute bottom-4 right-4">
        <button
          className="bg-white backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
          onClick={togglePlayPause}
          aria-label="Play/pause video"
        >
          <svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832L12 11.202a1 1 0 000-1.664L9.555 8.168z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
