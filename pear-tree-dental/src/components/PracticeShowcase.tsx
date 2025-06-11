import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Camera,
  Play,
  MapPin,
  Clock,
  Users,
  ShieldCheck,
  Award,
  Heart
} from "lucide-react";

const PracticeShowcase = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Main Practice Showcase */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-pear-primary to-pear-primary/90 text-white h-[520px]">
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

                  {/* Google Reviews Widget Space */}
                  <div className="bg-white/10 rounded-2xl p-6 mt-6">
                    <h4 className="text-white font-semibold mb-3">Google Reviews Widget</h4>
                    <p className="text-white/80 text-sm">
                      This space will display live Google reviews with ratings and testimonials.
                    </p>
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
            <div className="space-y-6">
              {/* Location & Hours */}
              <Card className="p-6 border-pear-primary/10">
                <div className="space-y-4">
                  <h4 className="font-semibold text-pear-primary text-lg">Visit Our Practice</h4>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-pear-gold mt-0.5 flex-shrink-0" />
                      <div className="text-gray-700">
                        <div className="font-medium">The Old School House</div>
                        <div>Main Street, Burton Joyce</div>
                        <div>Nottinghamshire NG14 5DP</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-pear-gold flex-shrink-0" />
                      <div className="text-gray-700">
                        <div className="font-medium">Mon-Fri: 8:00-17:00</div>
                        <div className="text-sm text-gray-600">Emergency appointments available</div>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white">
                    Get Directions
                  </Button>
                </div>
              </Card>

              {/* Practice Features */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center border-dental-green/20">
                  <div className="w-12 h-12 bg-dental-green/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <ShieldCheck className="w-6 h-6 text-dental-green" />
                  </div>
                  <h5 className="font-semibold text-pear-primary text-sm">CQC Rated</h5>
                  <p className="text-xs text-gray-600 mt-1">Outstanding care quality</p>
                </Card>

                <Card className="p-4 text-center border-pear-gold/20">
                  <div className="w-12 h-12 bg-pear-gold/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-pear-gold" />
                  </div>
                  <h5 className="font-semibold text-pear-primary text-sm">Award Winning</h5>
                  <p className="text-xs text-gray-600 mt-1">Excellence in dentistry</p>
                </Card>

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
