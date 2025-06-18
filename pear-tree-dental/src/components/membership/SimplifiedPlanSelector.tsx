'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Users, Zap, Star, Heart, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Define the simplified plan data including family plan
const plans = [
  {
    id: "essentials",
    name: "ESSENTIALS",
    price: "£14.50",
    color: "plan-a",
    bgColor: "from-[#48cc6c] to-[#2d8a47]",
    features: [
      "2 Dental check ups a year",
      "1 Hygienist appointment a year",
      "20% discount on all treatments",
      "Worldwide dental trauma cover"
    ],
    perDay: "48p per day",
    sticker: null,
    description: "Perfect for maintaining basic dental health",
    type: "individual"
  },
  {
    id: "premium",
    name: "PREMIUM",
    price: "£24.95",
    color: "plan-c",
    bgColor: "from-[#4A90A4] to-[#2d6b7a]",
    features: [
      "2 Dental check ups a year",
      "2 Hygienist appointments a year",
      "1 Emergency appointment included",
      "25% off Waterpik products",
      "20% discount on all treatments",
      "Worldwide dental trauma cover"
    ],
    perDay: "83p per day",
    sticker: "Most Popular",
    description: "Enhanced care with emergency coverage",
    type: "individual"
  },
  {
    id: "all-in",
    name: "ALL-IN",
    price: "£29.95",
    color: "plan-d",
    bgColor: "from-[#D4AF37] to-[#B8941F]",
    features: [
      "2 Dental check ups a year",
      "4 Hygienist appointments a year",
      "50% off Waterpik products",
      "Free replacement heads for Waterpik",
      "20% discount on all treatments",
      "Worldwide dental trauma cover"
    ],
    perDay: "99p per day",
    sticker: "Best Value",
    description: "Complete oral health package with maximum hygiene support",
    type: "individual"
  },
  {
    id: "family",
    name: "FAMILY",
    price: "£49",
    color: "family-plan",
    bgColor: "from-[#09394d] to-[#48cc6c]",
    features: [
      "2 Adults - Full coverage each",
      "Up to 3 Children included",
      "One simple payment monthly",
      "20% discount on all treatments",
      "Worldwide dental trauma cover",
      "Same address requirement"
    ],
    perDay: "£1.63 per day",
    sticker: "Complete Peace of Mind",
    description: "2 adults + 3 kids with simple billing",
    type: "family"
  }
];

export default function SimplifiedPlanSelector() {
  const [selectedPlan, setSelectedPlan] = useState(plans[1].id); // Default to Premium (Most Popular)
  const [scrollY, setScrollY] = useState(0);
  const [buttonPosition, setButtonPosition] = useState({ bottom: 32, left: '50%' });

  // Handle scroll for floating button positioning
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setScrollY(scrollPosition);

      // Get all sections by their common class or structure
      const sections = document.querySelectorAll('section');
      let currentSectionBottom = 0;
      let isNearSectionEnd = false;

      // Find current section and check if we're near the end
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = scrollPosition + rect.top;
        const sectionBottom = sectionTop + rect.height;

        // Check if we're currently in this section
        if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionBottom - 100) {
          const sectionProgress = (scrollPosition - sectionTop) / rect.height;

          // If we're more than 75% through the section, position button at section end
          if (sectionProgress > 0.75) {
            isNearSectionEnd = true;
            currentSectionBottom = sectionBottom;
          }
        }
      });

      if (isNearSectionEnd) {
        // Calculate button position relative to section end
        const sectionEndOnScreen = currentSectionBottom - scrollPosition;
        const buttonBottom = Math.max(32, Math.min(sectionEndOnScreen - 80, windowHeight - 120));

        setButtonPosition({
          bottom: buttonBottom,
          left: '50%'
        });
      } else {
        // Normal floating position
        setButtonPosition({
          bottom: 32,
          left: '50%'
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const selectedPlanData = plans.find(p => p.id === selectedPlan);

  return (
    <section id="plans" className="py-12 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-pear-primary">Choose Your</span> Perfect Plan
          </h2>
          <p className="text-gray-600 text-lg">
            Four simple plans designed to meet different dental care needs, from individual to family coverage.
          </p>
        </div>

        {/* All Plans in One Row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan) => (
            <div key={plan.id} className="relative">
              {plan.sticker && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10 bg-pear-gold text-white font-semibold text-xs px-3 py-1">
                  {plan.sticker}
                </Badge>
              )}
              <Card
                className={`h-full ${
                  selectedPlan === plan.id
                    ? 'ring-2 ring-pear-primary ring-offset-2'
                    : 'hover:border-pear-primary/50'
                } cursor-pointer transition-all duration-200 ${
                  plan.sticker === 'Most Popular' ? 'scale-105' : ''
                } ${
                  plan.type === 'family' ? 'border-2 border-gradient-to-r from-pear-primary to-dental-green' : ''
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                <CardHeader className={`${
                  plan.type === 'family'
                    ? 'bg-gradient-to-r from-pear-primary to-dental-green'
                    : plan.color
                } text-white rounded-t-xl pb-3 pt-6`}>
                  <CardTitle className="text-center text-lg flex items-center justify-center gap-2">
                    {plan.type === 'family' && <Users className="w-5 h-5" />}
                    {plan.name}
                  </CardTitle>
                  <div className="text-center">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-sm font-medium"> / MONTH</span>
                  </div>
                  {plan.type === 'family' && (
                    <p className="text-sm text-white/90 text-center mt-1 font-medium">2 Adults + up to 3 Children</p>
                  )}
                </CardHeader>

                <CardContent className="pt-5 pb-6">
                  {plan.description && (
                    <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-xs text-blue-800 font-medium text-center">{plan.description}</p>
                    </div>
                  )}

                  <ul className="space-y-3 text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-pear-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 text-center">
                    <span className="inline-flex bg-gray-100 rounded-full px-3 py-1 text-xs font-medium">
                      {plan.perDay}
                    </span>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.type === 'family' && selectedPlan === plan.id
                        ? 'bg-gradient-to-r from-pear-primary to-dental-green hover:from-pear-primary/90 hover:to-dental-green/90'
                        : ''
                    }`}
                    variant={selectedPlan === plan.id ? "default" : "outline"}
                  >
                    {selectedPlan === plan.id ? `Join ${plan.name} Now` : "Select Plan"}
                  </Button>
                </CardFooter>
              </Card>

              {selectedPlan === plan.id && (
                <motion.div
                  className="absolute -top-2 -right-2 h-6 w-6 bg-pear-primary rounded-full flex items-center justify-center border-2 border-white"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <Check className="h-3 w-3 text-white" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Floating Action Button with Section-Aware Positioning and Color Matching */}
        <motion.div
          className="fixed z-50"
          style={{
            bottom: buttonPosition.bottom,
            left: buttonPosition.left,
            transform: 'translateX(-50%)'
          }}
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: scrollY > 400 ? 0 : 100,
            opacity: scrollY > 400 ? 1 : 0
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <a href="/membership/signup">
            <Button
              size="lg"
              className={`rounded-full bg-gradient-to-r ${selectedPlanData?.bgColor || 'from-[#4A90A4] to-[#2d6b7a]'} hover:opacity-90 text-white px-8 py-4 text-lg font-semibold shadow-2xl border-4 border-white transition-all duration-300`}
            >
              Join {selectedPlanData?.name} Plan Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </motion.div>

        {/* Bottom Info Section */}
        <div className="border-t pt-8 text-center mb-20">
          <p className="text-sm text-gray-600 mb-6 max-w-2xl mx-auto">
            <strong>All plans include:</strong> No hidden fees, cancel anytime, immediate benefits,
            priority booking, and professional care from our experienced team.
          </p>

          <p className="text-xs text-gray-500">
            Setup takes less than 5 minutes • Start benefits immediately
          </p>
        </div>
      </div>
    </section>
  );
}
