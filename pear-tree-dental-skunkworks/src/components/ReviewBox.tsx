"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface Testimonial {
  id: string;
  imagePath: string;
  alt: string;
  rating: number;
  platform: "Google" | "Facebook" | "Trustpilot";
  verified: boolean;
}

interface ReviewBoxProps {
  teamMemberName: string;
  testimonials: Testimonial[];
  className?: string;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="border-soft-pink/20 hover:border-soft-pink/40 transition-colors">
      <CardContent className="p-4">
        <div className="bg-gray-50 rounded-lg p-2">
          <Image
            src={testimonial.imagePath}
            alt={testimonial.alt}
            width={400}
            height={300}
            className="w-full h-auto rounded"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default function ReviewBox({ teamMemberName, testimonials, className = "" }: ReviewBoxProps) {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const featuredTestimonial = testimonials[0];

  return (
    <div className={`mt-6 ${className}`}>
      <TestimonialCard testimonial={featuredTestimonial} />

      <div className="text-center mt-4">
        <Link href="/testimonials">
          <Button variant="outline" size="sm" className="text-soft-pink border-soft-pink hover:bg-soft-pink hover:text-white">
            Read More Reviews
            <ExternalLink className="w-3 h-3 ml-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
