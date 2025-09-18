"use client";

import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const DirectionsButton = () => {
  return (
    <Button
      variant="outline"
      className="w-full border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white transition-all duration-300"
      onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=22+Nottingham+Rd,+Burton+Joyce,+Nottingham,+UK,+NG14+5AE', '_blank')}
      aria-label="Get directions to Pear Tree Dental practice in Burton Joyce"
    >
      <MapPin className="w-4 h-4 mr-2" />
      Get Directions
    </Button>
  );
};

export default DirectionsButton;
