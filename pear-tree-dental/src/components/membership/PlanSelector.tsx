'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Define the plan data
const plans = [
  {
    id: "plan-a",
    name: "PLAN A",
    price: "£10.95",
    color: "plan-a",
    features: [
      "1 Dental check up a year",
      "1 Scale & Polish a year",
    ],
    perDay: "36p per day",
    sticker: null,
  },
  {
    id: "plan-b",
    name: "PLAN B",
    price: "£15.95",
    color: "plan-b",
    features: [
      "2 Dental check ups a year",
      "1 Scale & Polish a year",
    ],
    perDay: "53p per day",
    sticker: null,
  },
  {
    id: "plan-c",
    name: "PLAN C",
    price: "£19.95",
    color: "plan-c",
    features: [
      "2 Dental check ups a year",
      "2 Scale & Polishes a year",
    ],
    perDay: "66p per day",
    sticker: "Most Popular",
  },
  {
    id: "plan-d",
    name: "PLAN D",
    price: "£25.95",
    color: "plan-d",
    features: [
      "2 Dental check ups a year",
      "2 Scale & Polishes a year",
      "1 Free emergency appt a year",
      "50% off stain removal",
    ],
    perDay: "86p per day",
    sticker: "Great Value",
  },
  {
    id: "plan-e",
    name: "PLAN E",
    price: "£29.95",
    color: "plan-d",
    features: [
      "2 Dental check ups a year",
      "4 Scale & Polishes a year (every 3 months)",
      "1 Free emergency appt a year",
      "50% off stain removal",
    ],
    perDay: "99p per day",
    description: "Specifically designed for patients with periodontal disease and gum issues",
    sticker: null,
  },
];

export default function PlanSelector() {
  const [selectedPlan, setSelectedPlan] = useState(plans[2].id); // Default to Plan C (Most Popular)

  return (
    <section id="plans" className="py-12 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-pear-primary">Affordable</span> Plans for Every Smile
          </h2>
          <p className="text-gray-600 text-lg">
            Choose how often you want to be seen and find the perfect membership plan for your dental care needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-8">
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
                } cursor-pointer transition-all duration-200`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                <CardHeader className={`${plan.id} text-white rounded-t-xl pb-3 pt-6`}>
                  <CardTitle className="text-center text-base">{plan.name}</CardTitle>
                  <div className="text-center">
                    <span className="text-2xl font-bold">{plan.price}</span>
                    <span className="text-sm font-medium"> / MONTH</span>
                  </div>
                </CardHeader>

                <CardContent className="pt-5 pb-6">
                  {plan.description && (
                    <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-xs text-blue-800 font-medium">{plan.description}</p>
                    </div>
                  )}

                  <ul className="space-y-2 text-sm">
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

        {/* Join Selected Plan Button */}
        <div className="text-center mb-8">
          <a href={`/membership/signup/direct-debit?plan=${selectedPlan}`}>
            <Button size="lg" className="rounded-full bg-dental-green hover:bg-dental-green/90 text-white px-8 py-4 text-lg">
              Join {plans.find(p => p.id === selectedPlan)?.name}
            </Button>
          </a>
        </div>

        {/* Family Plan Section */}
        <div className="mt-8 mb-10">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-pear-primary mb-2">Family Plan</h3>
            <p className="text-gray-600">Perfect solution for families at one address</p>
          </div>

          <div className="w-full">
            <div className="relative">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10 bg-pear-gold text-white font-semibold text-xs px-3 py-1">
                Perfect for Families
              </Badge>
              <Card className="border-2 border-pear-primary">
                <CardHeader className="bg-gradient-to-r from-pear-primary to-dental-green text-white rounded-t-xl pb-6 pt-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    {/* Family Icon and Title */}
                    <div className="text-center md:text-left">
                      <Users className="w-12 h-12 mx-auto md:mx-0 mb-2" />
                      <CardTitle className="text-2xl mb-2">FAMILY PLAN</CardTitle>
                      <p className="text-sm text-white/90">2 Adults + up to 3 Children</p>
                    </div>

                    {/* Price */}
                    <div className="text-center">
                      <div className="text-center">
                        <span className="text-4xl font-bold">£49.50</span>
                        <span className="text-lg font-medium"> / MONTH</span>
                      </div>
                      <p className="text-sm text-white/90 mt-1">£1.65 per day for the whole family</p>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center md:text-right">
                      <div className="inline-flex bg-white/20 rounded-full px-4 py-2 text-sm font-semibold">
                        Perfect for Families
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Benefits Column */}
                    <div>
                      <h4 className="text-lg font-semibold text-pear-primary mb-3">What's Included</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-pear-primary mt-0.5 flex-shrink-0" />
                          <span>All adults get Plan C benefits (2 check-ups, 2 scale & polishes)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-pear-primary mt-0.5 flex-shrink-0" />
                          <span>Children under 18 included free</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-pear-primary mt-0.5 flex-shrink-0" />
                          <span>10% discount on all treatments</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-pear-primary mt-0.5 flex-shrink-0" />
                          <span>Simplified billing for whole family</span>
                        </li>
                      </ul>
                    </div>

                    {/* Value Proposition Column */}
                    <div>
                      <div className="mb-4 p-4 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="text-sm font-semibold text-green-800 mb-2">Family Benefits</h4>
                        <p className="text-xs text-green-700">
                          One simple payment covers your entire family's dental care. Save money and ensure everyone gets the care they need.
                        </p>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h4 className="text-sm font-semibold text-gray-800 mb-2">Requirements</h4>
                        <p className="text-xs text-gray-600">
                          All family members must live at the same address. Children under 18 automatically included.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <a href="/membership/signup/direct-debit?plan=family" className="w-full">
                    <Button className="w-full bg-pear-primary hover:bg-pear-primary/90 py-3 text-lg">
                      Choose Family Plan
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center">
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            <strong>Under 18s join free</strong> when a parent joins the plan. Or £5.20/month for under 18s joining alone.
          </p>
        </div>
      </div>
    </section>
  );
}
