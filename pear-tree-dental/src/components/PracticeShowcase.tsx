"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Main Practice Showcase */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-pear-primary to-pear-primary/90 text-white h-[440px]">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-700 mb-2">PRACTICE IMAGE</h3>
                  <p className="text-gray-600 text-sm">Modern dental practice interior</p>
                </div>
              </div>

              <div className="relative p-8 h-full flex flex-col justify-start bg-gradient-to-br from-pear-primary/95 to-pear-primary/90">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Experience Excellence in Every Detail
                  </h3>
                  <p className="text-white/90 mb-6">
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

                <div className="flex space-x-4 mt-auto">
                  <Button variant="secondary" className="bg-white text-pear-primary hover:bg-white/90">
                    <Camera className="w-4 h-4 mr-2" />
                    Practice Gallery
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-pear-primary">
                    <Play className="w-4 h-4 mr-2" />
                    Virtual Tour
                  </Button>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-20 h-20 bg-white/10 rounded-full" />
                <div className="absolute bottom-6 right-8 w-12 h-12 bg-pear-gold/30 rounded-full" />
                <div className="absolute top-1/2 -right-8 w-16 h-16 bg-white/5 rounded-full" />
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
                <Card className="p-4 text-center border-soft-blue/20">
                  <div className="w-12 h-12 bg-soft-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-soft-blue" />
                  </div>
                  <h5 className="font-semibold text-pear-primary text-sm">Expert Team</h5>
                  <p className="text-xs text-gray-600 mt-1">Highly qualified dentists</p>
                </Card>

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
