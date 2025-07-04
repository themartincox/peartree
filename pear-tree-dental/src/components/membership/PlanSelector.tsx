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
    name: "ESSENTIAL MAINTENANCE",
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
    name: "ROUTINE CARE",
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
    name: "COMPLETE CARE",
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
    name: "COMPLETE CARE PLUS",
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
    name: "PERIODONTAL HEALTH",
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
  const [selectedPlan, setSelectedPlan] = useState(plans[2].id); // Default to Complete Care (Most Popular)

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
                  {selectedPlan === plan.id ? (
                    <a href={`/membership/signup?plan=${plan.id}`} className="w-full">
                      <Button className="w-full" variant="default">
                        Join Plan
                      </Button>
                    </a>
                  ) : (
                    <Button
                      className="w-full"
                      variant="outline"
                    >
                      Select Plan
                    </Button>
                  )}
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

        {/* Join Plan Button - First Instance */}
        <div className="border-t pt-8 pb-8 text-center">
          <a href="/membership/signup">
            <Button size="lg" className="rounded-full bg-dental-green hover:bg-dental-green/90 text-white">
              Join {plans.find(p => p.id === selectedPlan)?.name} Now
            </Button>
          </a>
        </div>

        {/* Family Plan Section - Full Width */}
        <div className="mt-8 mb-10">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-pear-primary mb-2">Family Plan</h3>
            <p className="text-gray-600">Perfect solution for families at one address</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10 bg-pear-gold text-white font-semibold text-xs px-3 py-1">
                Perfect for Families
              </Badge>
              <Card
                className={`border-2 cursor-pointer transition-all duration-200 ${
                  selectedPlan === "family"
                    ? 'border-pear-primary ring-2 ring-pear-primary ring-offset-2'
                    : 'border-pear-primary hover:border-pear-primary/70'
                }`}
                onClick={() => setSelectedPlan("family")}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
                  {/* Header Section */}
                  <CardHeader className="bg-gradient-to-r from-pear-primary to-dental-green text-white md:rounded-tl-xl lg:rounded-tl-xl md:rounded-tr-none lg:rounded-tr-none pb-4 pt-8">
                    <div className="text-center">
                      <Users className="w-8 h-8 mx-auto mb-2" />
                      <CardTitle className="text-xl mb-2">FAMILY PLAN</CardTitle>
                      <div className="text-center">
                        <span className="text-3xl font-bold">£49.50</span>
                        <span className="text-sm font-medium"> / MONTH</span>
                      </div>
                      <p className="text-sm text-white mt-2 font-medium">2 Adults + up to 3 Children</p>
                      <div className="mt-4">
                        <span className="inline-flex bg-white/40 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-pear-primary">
                          £1.65 per day for the whole family
                        </span>
                      </div>
                    </div>
                  </CardHeader>

                  {/* Content Section */}
                  <CardContent className="pt-6 pb-6 lg:col-span-2">
                    <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-sm text-green-800 font-medium text-center">
                        Easy single payment for whole family peace of mind
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-pear-primary mt-0.5 flex-shrink-0" />
                          <span>All adults get Plan D benefits</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-pear-primary mt-0.5 flex-shrink-0" />
                          <span>Children under 18 included free</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-pear-primary mt-0.5 flex-shrink-0" />
                          <span>Same address requirement</span>
                        </li>
                      </ul>

                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-pear-primary mt-0.5 flex-shrink-0" />
                          <span>10% discount on all treatments</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-pear-primary mt-0.5 flex-shrink-0" />
                          <span>Simplified billing for whole family</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-pear-primary mt-0.5 flex-shrink-0" />
                          <span>Priority family appointments</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-6 text-center">
                      {selectedPlan === "family" ? (
                        <a href="/membership/signup?plan=family" className="inline-block">
                          <Button className="w-full md:w-auto px-8 bg-pear-primary hover:bg-pear-primary/90" size="lg">
                            Join Plan
                          </Button>
                        </a>
                      ) : (
                        <Button className="w-full md:w-auto px-8 bg-pear-primary hover:bg-pear-primary/90" size="lg">
                          Select Plan
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>

                {selectedPlan === "family" && (
                  <motion.div
                    className="absolute -top-2 -right-2 h-6 w-6 bg-pear-primary rounded-full flex items-center justify-center border-2 border-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    <Check className="h-3 w-3 text-white" />
                  </motion.div>
                )}
              </Card>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center">
          <p className="text-sm text-gray-600 mb-6 max-w-2xl mx-auto">
            <strong>Under 18s join free</strong> when a parent joins the plan. Or £5.20/month for under 18s joining alone.
          </p>

          <a href={`/membership/signup?plan=${selectedPlan}`}>
            <Button size="lg" className="rounded-full bg-dental-green hover:bg-dental-green/90 text-white">
              Join {selectedPlan === "family" ? "Family Plan" : plans.find(p => p.id === selectedPlan)?.name} Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
