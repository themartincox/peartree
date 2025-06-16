'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Users, Zap, Star, Heart, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Define the simplified plan data
const plans = [
  {
    id: "essentials",
    name: "ESSENTIALS",
    price: "£14.50",
    color: "plan-a",
    features: [
      "2 Dental check ups a year",
      "1 Hygienist appointment a year",
      "20% discount on all treatments",
      "Worldwide dental trauma cover"
    ],
    perDay: "48p per day",
    sticker: null,
    description: "Perfect for maintaining basic dental health"
  },
  {
    id: "premium",
    name: "PREMIUM",
    price: "£24.95",
    color: "plan-c",
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
    description: "Enhanced care with emergency coverage"
  },
  {
    id: "all-in",
    name: "ALL-IN",
    price: "£29.95",
    color: "plan-d",
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
    description: "Complete oral health package with maximum hygiene support"
  }
];

export default function SimplifiedPlanSelector() {
  const [selectedPlan, setSelectedPlan] = useState(plans[1].id); // Default to Premium (Most Popular)

  return (
    <section id="plans" className="py-12 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-pear-primary">Choose Your</span> Perfect Plan
          </h2>
          <p className="text-gray-600 text-lg">
            Three simple plans designed to meet different dental care needs, plus a comprehensive family option.
          </p>
        </div>

        {/* Individual Plans */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
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
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                <CardHeader className={`${plan.color} text-white rounded-t-xl pb-3 pt-6`}>
                  <CardTitle className="text-center text-lg">{plan.name}</CardTitle>
                  <div className="text-center">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-sm font-medium"> / MONTH</span>
                  </div>
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
                    className="w-full"
                    variant={selectedPlan === plan.id ? "default" : "outline"}
                  >
                    {selectedPlan === plan.id ? "Selected" : "Select Plan"}
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

        {/* Family Plan Section */}
        <div className="mt-8 mb-10">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-pear-primary mb-2">Family Plan</h3>
            <p className="text-gray-600">Complete peace of mind with simple billing</p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="relative">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10 bg-gradient-to-r from-pear-primary to-dental-green text-white font-semibold text-xs px-3 py-1">
                Complete Peace of Mind
              </Badge>
              <Card className="border-2 border-gradient-to-r from-pear-primary to-dental-green">
                <CardHeader className="bg-gradient-to-r from-pear-primary to-dental-green text-white rounded-t-xl pb-4 pt-8">
                  <div className="text-center">
                    <Users className="w-10 h-10 mx-auto mb-3" />
                    <CardTitle className="text-2xl mb-2">FAMILY PLAN</CardTitle>
                    <div className="text-center">
                      <span className="text-4xl font-bold">£49</span>
                      <span className="text-lg font-medium"> / MONTH</span>
                    </div>
                    <p className="text-sm text-white/90 mt-2 font-medium">2 Adults + up to 3 Children</p>
                  </div>
                </CardHeader>

                <CardContent className="pt-6 pb-6">
                  <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                    <p className="text-sm text-center font-medium text-gray-800">
                      <Heart className="w-4 h-4 inline mr-2 text-red-500" />
                      Complete peace of mind with simple billing for the whole family
                    </p>
                  </div>

                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-pear-primary mt-0.5 flex-shrink-0" />
                      <span><strong>2 Adults</strong> - Full dental care coverage each</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-pear-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Up to 3 Children</strong> - Complete coverage included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-pear-primary mt-0.5 flex-shrink-0" />
                      <span><strong>One simple payment</strong> - No individual billing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-pear-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Same address requirement</strong> - Family convenience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-pear-primary mt-0.5 flex-shrink-0" />
                      <span><strong>20% discount</strong> on all treatments for everyone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-pear-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Worldwide dental trauma cover</strong> for all members</span>
                    </li>
                  </ul>

                  <div className="mt-6 text-center">
                    <span className="inline-flex bg-gradient-to-r from-gray-100 to-gray-50 rounded-full px-4 py-2 text-sm font-medium border">
                      <Zap className="w-4 h-4 mr-2 text-pear-gold" />
                      £1.63 per day for the whole family
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-4 text-xs text-center">
                    <div className="bg-pear-background/30 rounded-lg p-2">
                      <div className="font-semibold text-pear-primary">Per Adult</div>
                      <div className="text-gray-600">£24.50/month value</div>
                    </div>
                    <div className="bg-pear-background/30 rounded-lg p-2">
                      <div className="font-semibold text-pear-primary">Per Child</div>
                      <div className="text-gray-600">Free with plan</div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-pear-primary to-dental-green hover:from-pear-primary/90 hover:to-dental-green/90 text-white font-semibold">
                    Choose Family Plan
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom Action Section */}
        <div className="border-t pt-8 text-center">
          <p className="text-sm text-gray-600 mb-6 max-w-2xl mx-auto">
            <strong>All plans include:</strong> No hidden fees, cancel anytime, immediate benefits,
            priority booking, and professional care from our experienced team.
          </p>

          <div className="space-y-4">
            <a href="/membership/signup">
              <Button size="lg" className="rounded-full bg-dental-green hover:bg-dental-green/90 text-white px-8">
                Join {plans.find(p => p.id === selectedPlan)?.name} Plan Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>

            <p className="text-xs text-gray-500">
              Setup takes less than 5 minutes • Start benefits immediately
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
