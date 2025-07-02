"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Calculator, TrendingUp, Clock, DollarSign } from "lucide-react";
import Link from "next/link";

export default function ROICalculator() {
  const [monthlyLeads, setMonthlyLeads] = useState(500);
  const [currentConversionRate, setCurrentConversionRate] = useState(2);
  const [averageDealValue, setAverageDealValue] = useState(2500);
  const [currentMarketingCost, setCurrentMarketingCost] = useState(3000);

  // Calculate current performance
  const currentMonthlyDeals = (monthlyLeads * currentConversionRate) / 100;
  const currentMonthlyRevenue = currentMonthlyDeals * averageDealValue;
  const currentAnnualRevenue = currentMonthlyRevenue * 12;

  // Calculate with Postino improvements (conservative estimates)
  const improvedConversionRate = Math.min(currentConversionRate * 2.5, 15); // 150% improvement, capped at 15%
  const improvedMonthlyLeads = monthlyLeads * 1.4; // 40% more leads from better SEO/content
  const newMonthlyDeals = (improvedMonthlyLeads * improvedConversionRate) / 100;
  const newMonthlyRevenue = newMonthlyDeals * averageDealValue;
  const newAnnualRevenue = newMonthlyRevenue * 12;

  // Calculate improvements
  const additionalMonthlyDeals = newMonthlyDeals - currentMonthlyDeals;
  const additionalMonthlyRevenue = newMonthlyRevenue - currentMonthlyRevenue;
  const additionalAnnualRevenue = newAnnualRevenue - currentAnnualRevenue;

  // Time savings from automation (hours per month)
  const timeSavingsPerMonth = Math.min(monthlyLeads * 0.15, 120); // 9 minutes per lead, capped at 120 hours
  const timeSavingsValue = timeSavingsPerMonth * 50; // £50/hour value

  // Marketing efficiency improvements
  const reducedMarketingWaste = currentMarketingCost * 0.25; // 25% better efficiency
  const totalMonthlySavings = timeSavingsValue + reducedMarketingWaste;
  const totalAnnualSavings = totalMonthlySavings * 12;

  // Format currency
  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return `£${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `£${(amount / 1000).toFixed(0)}k`;
    } else {
      return `£${Math.round(amount).toLocaleString()}`;
    }
  };

  // Format numbers
  const formatNumber = (num: number) => {
    return Math.round(num).toLocaleString();
  };

  return (
    <div className="bg-gradient-to-br from-soft-gray to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="h-8 w-8 text-coral-red mr-3" />
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue">
              Calculate Your ROI with Postino
            </h2>
          </div>
          <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
            See exactly how our marketing expertise and AI automation can transform your business results
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Controls */}
          <Card className="bg-white shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl font-heading text-midnight-blue">
                Tell Us About Your Business
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="monthlyLeads" className="text-sm font-heading font-semibold text-midnight-blue">
                  Monthly Website Visitors / Leads
                </Label>
                <Input
                  id="monthlyLeads"
                  type="number"
                  value={monthlyLeads}
                  onChange={(e) => setMonthlyLeads(Number.parseInt(e.target.value) || 0)}
                  className="mt-2 text-lg"
                  min="0"
                />
              </div>

              <div>
                <Label htmlFor="conversionRate" className="text-sm font-heading font-semibold text-midnight-blue">
                  Current Conversion Rate (%)
                </Label>
                <Input
                  id="conversionRate"
                  type="number"
                  value={currentConversionRate}
                  onChange={(e) => setCurrentConversionRate(Number.parseFloat(e.target.value) || 0)}
                  className="mt-2 text-lg"
                  min="0"
                  max="100"
                  step="0.1"
                />
              </div>

              <div>
                <Label htmlFor="dealValue" className="text-sm font-heading font-semibold text-midnight-blue">
                  Average Deal Value (£)
                </Label>
                <Input
                  id="dealValue"
                  type="number"
                  value={averageDealValue}
                  onChange={(e) => setAverageDealValue(Number.parseInt(e.target.value) || 0)}
                  className="mt-2 text-lg"
                  min="0"
                />
              </div>

              <div>
                <Label htmlFor="marketingCost" className="text-sm font-heading font-semibold text-midnight-blue">
                  Monthly Marketing Spend (£)
                </Label>
                <Input
                  id="marketingCost"
                  type="number"
                  value={currentMarketingCost}
                  onChange={(e) => setCurrentMarketingCost(Number.parseInt(e.target.value) || 0)}
                  className="mt-2 text-lg"
                  min="0"
                />
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            {/* Main Results Cards */}
            <div className="grid grid-cols-1 gap-4">
              <Card className="bg-gradient-to-r from-coral-red to-red-600 text-white shadow-xl border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl lg:text-4xl font-heading font-bold mb-2">
                    {formatCurrency(additionalAnnualRevenue)}
                  </div>
                  <div className="text-lg font-heading font-semibold mb-1">
                    Additional Revenue/Year
                  </div>
                  <p className="text-sm opacity-90">
                    From improved conversion rates and more qualified leads
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-to-r from-forest-green to-green-600 text-white shadow-lg border-0">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-heading font-bold mb-1">
                      +{formatNumber(additionalMonthlyDeals)}
                    </div>
                    <div className="text-sm font-heading font-semibold">
                      Extra Deals/Month
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-midnight-blue to-blue-700 text-white shadow-lg border-0">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-heading font-bold mb-1">
                      {formatCurrency(totalAnnualSavings)}
                    </div>
                    <div className="text-sm font-heading font-semibold">
                      Annual Savings
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-lg font-heading text-midnight-blue flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-coral-red" />
                  Performance Comparison
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-heading font-semibold text-midnight-blue mb-3">
                      Current Performance
                    </h4>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>Conversion Rate:</span>
                        <span className="font-semibold">{currentConversionRate}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monthly Deals:</span>
                        <span className="font-semibold">{formatNumber(currentMonthlyDeals)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monthly Revenue:</span>
                        <span className="font-semibold">{formatCurrency(currentMonthlyRevenue)}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-heading font-semibold text-coral-red mb-3">
                      With Postino
                    </h4>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>Conversion Rate:</span>
                        <span className="font-semibold text-forest-green">{improvedConversionRate.toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monthly Deals:</span>
                        <span className="font-semibold text-forest-green">{formatNumber(newMonthlyDeals)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monthly Revenue:</span>
                        <span className="font-semibold text-forest-green">{formatCurrency(newMonthlyRevenue)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Time Saved/Month:</span>
                    </div>
                    <span className="font-semibold text-midnight-blue">{formatNumber(timeSavingsPerMonth)} hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-to-r from-midnight-blue to-blue-800 text-white shadow-xl border-0">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-heading font-bold mb-3">
                  Ready to Achieve These Results?
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Get a detailed growth strategy session and see exactly how we'll deliver this ROI
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-coral-red hover:bg-coral-red/90 text-white w-full"
                >
                  <Link href="/growth-consultation">
                    Get Your Growth Strategy Session
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-3xl mx-auto">
            * Results based on typical improvements seen across our client base. Individual results may vary
            depending on industry, current performance, and implementation. Conservative estimates used for projections.
          </p>
        </div>
      </div>
    </div>
  );
}
