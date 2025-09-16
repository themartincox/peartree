"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

export default function PracticeVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure inline playback on iOS/Safari
    video.setAttribute("playsinline", "");
    video.playsInline = true;
    video.muted = true; // allow programmatic play on mobile
  }, []);

  const tryPlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.muted = true; // required for iOS autoplay policy when starting programmatically
      await video.play();
      video.controls = true;
      setShowOverlay(false);
    } catch (err) {
      console.error("Video play() failed", err);
      // Keep controls visible so user can start manually
      video.controls = true;
      setShowOverlay(true);
    }
  };

  const handlePause = () => {
    const video = videoRef.current;
    if (video) {
      video.controls = false;
    }
    setShowOverlay(true);
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (video) {
      video.controls = false;
    }
    setShowOverlay(true);
  };

  return (
    <Card className="overflow-hidden shadow-2xl">
      <CardContent className="p-0">
        <div className="aspect-video relative group">
          {showOverlay && (
            <button
              type="button"
              className="absolute inset-0 bg-black/20 flex items-center justify-center z-10 group-hover:bg-black/30 transition-all duration-300 cursor-pointer"
              onClick={tryPlay}
              aria-label="Play practice walkthrough video"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-full p-6 shadow-2xl transform transition-all duration-300 group-hover:scale-110 hover:bg-white">
                <Play className="w-12 h-12 text-pear-primary ml-1" fill="currentColor" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2 drop-shadow-lg">Practice Walkthrough</h3>
                <p className="text-sm opacity-90 drop-shadow">Discover our modern facilities and welcoming environment</p>
              </div>
            </button>
          )}

          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            preload="metadata"
            poster="/images/heroes/pear-tree-home-hero-full.webp"
            onPause={handlePause}
            onEnded={handleEnded}
            controls={false}
            playsInline
            muted
          >
            <source
              src="/videos/pear-tree-dental-video-walk-through.webm"
              type="video/webm"
            />
            <source
              src="/videos/pear-tree-dental-video-walk-through.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </CardContent>
    </Card>
  );
}
