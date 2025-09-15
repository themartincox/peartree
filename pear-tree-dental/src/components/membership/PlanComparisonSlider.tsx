'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, AlertCircle, Info } from 'lucide-react';
import PriceComparisonTooltip from '../price-comparison-tooltip';

import { plans as allPlans } from "./data";

// Define the plan data
const plans = allPlans.map(p => ({ ...p, price: parseFloat(p.price.replace('£', '')), perDay: parseFloat(p.perDay.replace('p per day', '')) / 100 }));

export default function PlanComparisonSlider() {
  const [sliderValue, setSliderValue] = useState([25]);
  const [selectedPlan, setSelectedPlan] = useState(plans[1]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Convert slider value to a plan
  useEffect(() => {
    const planIndex = Math.min(Math.floor(sliderValue[0] / (100 / plans.length)), plans.length - 1);
    if (selectedPlan.id !== plans[planIndex].id) {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedPlan(plans[planIndex]);
        setIsAnimating(false);
      }, 200);
    }
  }, [sliderValue, selectedPlan.id]);

  // Format price function
  const formatPrice = (price: number) => {
    return `£${price.toFixed(2)}`;
  };

  // Format as pence
  const formatPence = (price: number) => {
    return `${(price * 100).toFixed(0)}p`;
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-pear-background/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-4">
            Compare Our <span className="text-pear-primary">Dental Plans</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Slide to compare different plans and find the one that suits your needs best
          </p>

          <div className="w-full max-w-xl mx-auto mb-16 px-4">
            <Slider
              value={sliderValue}
              onValueChange={setSliderValue}
              max={100}
              step={1}
              className="my-8"
            />

            <div className="flex justify-between text-sm text-gray-500">
              <span>Basic</span>
              <span>Comprehensive</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPlan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md"
              >
                <Card className="shadow-lg overflow-hidden plan-card">
                  <CardHeader className={`${selectedPlan.id} text-white rounded-t-xl pt-6 pb-4`}>
                    <CardTitle className="text-center text-lg">
                      {selectedPlan.name}
                    </CardTitle>
                    <div className="flex justify-center items-baseline mt-2">
                      <PriceComparisonTooltip
                        planPrice={selectedPlan.price}
                        normalPrice={selectedPlan.normalPrice}
                        savings={selectedPlan.savings}
                        planName={selectedPlan.name}
                      >
                        <span className="text-3xl font-bold">{formatPrice(selectedPlan.price)}</span>
                        <span className="text-xl ml-1 opacity-90">/month</span>
                      </PriceComparisonTooltip>
                    </div>
                    <div className="text-center mt-1 text-white/80 text-sm">
                      Just {formatPence(selectedPlan.perDay)} per day
                    </div>
                  </CardHeader>

                  <CardContent className="pt-6 px-6">
                    <div className="flex justify-between items-start bg-gray-100 p-4 rounded-lg mb-6">
                      <div className="flex items-center">
                        <AlertCircle className="h-5 w-5 text-pear-primary mr-2" />
                        <span className="font-medium">Annual Savings</span>
                      </div>
                      <div>
                        <span className="text-xl font-bold text-pear-primary">{`£${selectedPlan.savings}`}</span>
                      </div>
                    </div>

                    <h3 className="font-medium mb-3 text-gray-700">What's Included:</h3>
                    <ul className="space-y-3">
                      {selectedPlan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-pear-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-pear-primary mt-0.5 flex-shrink-0" />
                        <span className="xl:text-left">Worldwide dental accident & emergency cover</span>
                      </li>
                    </ul>
                  </CardContent>

                  <CardFooter className="px-6 pb-6 pt-2">
                    <a href="/membership/signup" className="w-full">
                      <Button className="w-full rounded-md bg-dental-green hover:bg-dental-green/90 text-white">
                        Join {selectedPlan.name}
                      </Button>
                    </a>
                  </CardFooter>
                </Card>

                <div className="flex justify-center items-center gap-2 mt-5">
                  <Info className="h-5 w-5 text-gray-500" />
                  <p className="text-sm text-gray-500">
                    Free child plan when a parent joins this plan
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
