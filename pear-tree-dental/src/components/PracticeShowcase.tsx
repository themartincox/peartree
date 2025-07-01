"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Play,
  MapPin,
  Clock,
  Users,
  Heart
} from "lucide-react";

const PracticeShowcase = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Main Practice Showcase */}
            <Card className="relative overflow-hidden bg-white shadow-2xl h-[500px] group">
              {/* Practice Image Background */}
              <div className="absolute inset-0">
                <Image
                  src="/images/cosmetic-dentistry-services.webp"
                  alt="Modern dental practice interior at Pear Tree Dental"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pear-primary/90 via-pear-primary/70 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="relative p-8 h-full flex flex-col justify-between text-white z-10">
                <div>
                  <h3 className="text-3xl font-bold mb-4 leading-tight">
                    Experience Excellence in Every Detail
                  </h3>
                  <p className="text-white/95 mb-6 text-lg leading-relaxed">
                    Our practice combines cutting-edge technology with luxurious comfort.
                    From digital X-rays to relaxing treatment rooms, every aspect is designed
                    with your experience in mind.
                  </p>

                  {/* Sticky Trigger Element - invisible marker for when widget should become sticky */}
                  <div id="reviews-sticky-trigger" className="absolute w-1 h-1 opacity-0 pointer-events-none"></div>

                  {/* Google Reviews Widget - Homepage Position */}
                  <div className="mt-6">
                    <GoogleReviewsWidget />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <Button variant="secondary" className="bg-white text-pear-primary hover:bg-white/90 font-semibold">
                    <Camera className="w-4 h-4 mr-2" />
                    Practice Gallery
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-pear-primary font-semibold">
                    <Play className="w-4 h-4 mr-2" />
                    Virtual Tour
                  </Button>
                </div>
              </div>
            </Card>

            {/* Practice Features & Info */}
            <div className="space-y-4">
              {/* Location & Hours */}
              <Card className="p-6 border-pear-primary/10 relative overflow-hidden">
                {/* Elegant Map Pin Background */}
                <div className="absolute top-4 right-4 opacity-10">
                  <img
                    src="https://ugc.same-assets.com/CjXYYl01zrLFATFwb3l6e4HvL-v703DH.png"
                    alt=""
                    className="w-16 h-16 object-contain"
                    aria-hidden="true"
                  />
                </div>

                <div className="space-y-4 relative">
                  <h4 className="font-semibold text-pear-primary text-lg">Visit Our Practice</h4>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-pear-gold mt-0.5 flex-shrink-0" />
                      <div className="text-gray-700">
                        <div className="font-medium">22 Nottingham Rd</div>
                        <div>Burton Joyce, Nottingham</div>
                        <div>UK, NG14 5AE</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-pear-gold mt-0.5 flex-shrink-0" />
                      <div className="text-gray-700">
                        <div className="font-medium mb-1">Opening Hours</div>
                        <div className="text-sm space-y-1">
                          <div className="flex justify-between">
                            <span>Monday - Thursday</span>
                            <span>8:45 am - 5 pm</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Friday</span>
                            <span>8 am - 3:30 pm</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Weekend</span>
                            <span>Closed</span>
                          </div>
                        </div>
                        <div className="text-xs text-gray-600 mt-2">Emergencies by arrangement</div>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white transition-all duration-300"
                    onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=22+Nottingham+Rd,+Burton+Joyce,+Nottingham,+UK,+NG14+5AE', '_blank')}
                    aria-label="Get directions to Pear Tree Dental practice in Burton Joyce"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </Card>

              {/* Practice Features */}
              <div className="grid grid-cols-2 gap-4">
                <Link href="/about/team">
                  <Card className="p-4 text-center border-soft-blue/20 hover:border-soft-blue/40 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-soft-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-soft-blue" />
                    </div>
                    <h5 className="font-semibold text-pear-primary text-sm">Expert Team</h5>
                    <p className="text-xs text-gray-600 mt-1">Highly qualified dentists</p>
                  </Card>
                </Link>

                <Card className="p-4 text-center border-soft-pink/20">
                  <div className="w-12 h-12 bg-soft-pink/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 text-soft-pink" />
                  </div>
                  <h5 className="font-semibold text-pear-primary text-sm">Patient Care</h5>
                  <p className="text-xs text-gray-600 mt-1">Comfort-focused approach</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeShowcase;
