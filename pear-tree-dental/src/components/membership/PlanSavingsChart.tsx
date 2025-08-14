"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    id: "plan-a",
    name: "Plan A",
    price: 10.95,
    annualCost: 131.4,
    normalCost: 247.6,
    savings: 116,
    color: "plan-a",
  },
  {
    id: "plan-b",
    name: "Plan B",
    price: 15.95,
    annualCost: 191.4,
    normalCost: 359.88,
    savings: 168,
    color: "plan-b",
  },
  {
    id: "plan-c",
    name: "Plan C",
    price: 19.95,
    annualCost: 239.4,
    normalCost: 416.2,
    savings: 177,
    color: "plan-c",
  },
  {
    id: "plan-d",
    name: "Plan D",
    price: 25.95,
    annualCost: 311.4,
    normalCost: 597.2,
    savings: 286,
    color: "plan-d",
  },
  {
    id: "plan-e",
    name: "Plan E",
    price: 29.95,
    annualCost: 359.4,
    normalCost: 710.4,
    savings: 351,
    color: "plan-e",
  },
];

export default function PlanSavingsChart() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("savings-chart");
      if (element) {
        const elementPosition = element.getBoundingClientRect();
        // Set isVisible to true when the element is in the viewport
        if (
          elementPosition.top < window.innerHeight &&
          elementPosition.bottom > 0
        ) {
          setIsVisible(true);
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Find max savings for scaling the chart
  const maxSavings = Math.max(...plans.map((plan) => plan.savings));
  const maxCost = Math.max(...plans.map((plan) => plan.normalCost));

  return (
    <section className="py-16 md:py-20 bg-white" id="savings-chart">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-4">
            See How Much You Can <span className="text-pear-primary">Save</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Compare the annual cost of our plans against paying for treatments
            individually
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Bar chart visualization */}
          <Card className="p-6 shadow-md">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-xl">
                Annual Savings Comparison
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-6">
                {plans.map((plan, index) => (
                  <div key={plan.id} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{plan.name}</span>
                      <span className="font-bold text-pear-primary">
                        £{plan.savings} savings
                      </span>
                    </div>
                    <div className="h-8 bg-gray-200 rounded-full overflow-hidden flex">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: isVisible
                            ? `${(plan.annualCost / maxCost) * 100}%`
                            : "0%",
                        }}
                        transition={{
                          duration: 1,
                          delay: index * 0.2,
                          ease: "easeOut",
                        }}
                        className={`${plan.id} h-full`}
                      />
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: isVisible
                            ? `${(plan.savings / maxCost) * 100}%`
                            : "0%",
                        }}
                        transition={{
                          duration: 1,
                          delay: index * 0.2 + 0.5,
                          ease: "easeOut",
                        }}
                        className="bg-gray-300 h-full opacity-50"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Plan cost: £{plan.annualCost.toFixed(2)}</span>
                      <span>Normal cost: £{plan.normalCost.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Benefits of saving */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-6">
              Why Our Plans Save You Money
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-pear-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-pear-primary font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1">
                    Preventative Care Savings
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Regular check-ups and cleanings help prevent costly
                    treatments down the line, saving you more than just the
                    immediate plan savings.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-pear-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-pear-primary font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1">
                    Predictable Monthly Costs
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Spread the cost of dental care throughout the year with
                    predictable monthly payments rather than unexpected large
                    bills.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-pear-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-pear-primary font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1">
                    Emergency Coverage Included
                  </h4>
                  <p className="text-gray-600 text-sm">
                    All plans include worldwide dental accident and emergency
                    coverage, which would otherwise cost significantly more if
                    purchased separately.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-pear-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-pear-primary font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Free Child Plan</h4>
                  <p className="text-gray-600 text-sm">
                    Under 18s join free when a parent joins, providing even more
                    family savings compared to paying for individual treatments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
