"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TestimonialBanner from "@/components/TestimonialBanner";
import {
  Check,
  Crown,
  ChevronRight,
  UserRound,
  User,
  UserPlus,
  Baby,
  Sparkles,
  ShieldCheck,
  Heart,
  Users,
  ArrowRight
} from "lucide-react";

// Memoize membership data to prevent recreation on each render
const membershipPlans = {
  adult: {
    name: "Adult Plan",
    price: "£14.99",
    period: "/month",
    description: "Complete dental care for adults with comprehensive coverage and preventive focus.",
    keyFeatures: [
      "2 check-ups per year included",
      "2 hygiene appointments included",
      "20% discount on all treatments",
      "Worldwide dental trauma cover"
    ],
    icon: User,
    color: "pear-primary"
  },
  child: {
    name: "Child Plan",
    price: "£10.95",
    period: "/month",
    description: "Specialised dental care for children with focus on prevention and education.",
    keyFeatures: [
      "2 check-ups per year included",
      "Fluoride treatments included",
      "Fissure sealants when required",
      "No charge for most treatments"
    ],
    icon: Baby,
    color: "soft-pink"
  },
  family: {
    name: "Family Plan",
    price: "£39.99",
    period: "/month",
    description: "Comprehensive coverage for the whole family with significant savings.",
    keyFeatures: [
      "2 adults + 2 children covered",
      "All individual plan benefits",
      "Priority family appointments",
      "25% discount on treatments"
    ],
    icon: UserPlus,
    color: "pear-gold"
  }
};

const MembershipHighlight = () => {
  const [activeTab, setActiveTab] = useState("adult");

  // Memoize current plan to prevent recalculation
  const currentPlan = useMemo(() => {
    const plan = membershipPlans[activeTab as keyof typeof membershipPlans];
    return { ...plan, Icon: plan.icon };
  }, [activeTab]);

  // Memoize tab buttons to prevent recreation
  const tabButtons = useMemo(() => {
    return Object.entries(membershipPlans).map(([key, plan]) => {
      const TabIcon = plan.icon;
      const isActive = activeTab === key;
      return (
        <button
          key={key}
          onClick={() => setActiveTab(key)}
          className={`w-full text-left p-3 sm:p-4 rounded-xl transition-all duration-300 ${
            isActive
              ? key === 'adult' ? 'bg-white text-pear-primary shadow-lg transform scale-105'
              : key === 'child' ? 'bg-soft-pink/20 text-white shadow-lg transform scale-105 border border-soft-pink/30'
              : 'bg-pear-gold/20 text-white shadow-lg transform scale-105 border border-pear-gold/30'
              : 'text-white/80 hover:text-white hover:bg-white/10'
          }`}
        >
          <div className="flex items-center space-x-2 sm:space-x-3">
            <TabIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            <div>
              <div className="font-semibold text-sm sm:text-base">{plan.name}</div>
              <div className="text-xs sm:text-sm opacity-80">{plan.price}{plan.period}</div>
            </div>
          </div>
        </button>
      );
    });
  }, [activeTab]);

  return (
    <section className="py-16 bg-gradient-to-br from-pear-background to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonial Before Membership */}
        <TestimonialBanner
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          author="Michael Thompson"
          className="max-w-4xl mx-auto mb-16"
        />

        {/* Section Header - Simplified */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-pear-gold text-white">
            <Crown className="w-4 h-4 mr-2" />
            Membership Plans
          </Badge>
          <h2 className="heading-serif text-4xl sm:text-5xl font-bold text-pear-primary mb-6">
            Affordable Peace of Mind
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Skip NHS waiting lists with our comprehensive membership plans.
            Predictable monthly costs, free child coverage, and worldwide protection.
          </p>
        </div>

        {/* Main Membership Card - Optimized structure */}
        <Card className="max-w-6xl mx-auto overflow-hidden shadow-2xl border-2 border-pear-primary/10 mb-8 sm:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-4">
            {/* Tabs Sidebar */}
            <div className="lg:col-span-1 bg-gradient-to-b from-pear-primary to-pear-primary/90 p-4 sm:p-6 lg:p-8">
              <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Choose Your Plan</h3>

              <div className="space-y-3">
                {tabButtons}
              </div>

              {/* Key Benefits - Simplified */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                  All Plans Include:
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2 text-white/90">
                    <Check className="w-4 h-4 text-pear-gold" />
                    <span>Predictable monthly costs</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/90">
                    <Check className="w-4 h-4 text-pear-gold" />
                    <span>Free child coverage options</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/90">
                    <Check className="w-4 h-4 text-pear-gold" />
                    <span>Worldwide dental cover</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3 p-4 sm:p-6 lg:p-8 xl:p-12">
              <div className="space-y-6 sm:space-y-8">

                {/* Plan Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg ${
                      activeTab === 'adult' ? 'bg-pear-primary' :
                      activeTab === 'child' ? 'bg-soft-pink' : 'bg-pear-gold'
                    }`}>
                      <currentPlan.Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-pear-primary">{currentPlan.name}</h3>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-3xl sm:text-4xl font-bold text-pear-primary">{currentPlan.price}</span>
                        <span className="text-gray-500 text-sm sm:text-base">{currentPlan.period}</span>
                        <Badge variant="secondary" className="bg-pear-gold/10 text-pear-gold text-xs sm:text-sm">
                          Save 25%
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  {currentPlan.description}
                </p>

                {/* Key Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {currentPlan.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pear-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Savings Highlight */}
                <div className="bg-gradient-to-r from-pear-background to-pear-background/50 rounded-2xl p-6 border border-pear-primary/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-pear-primary mb-2">Annual Savings</h4>
                      <p className="text-gray-600 text-sm">
                        Save up to £{activeTab === 'adult' ? '400' : activeTab === 'child' ? '250' : '800'} per year compared to pay-as-you-go
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-pear-gold">
                        £{activeTab === 'adult' ? '400' : activeTab === 'child' ? '250' : '800'}
                      </div>
                      <div className="text-sm text-gray-500">saved annually</div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link href={`/membership#${activeTab}`}>
                    <Button size="lg" className="btn-gold text-white font-semibold group w-full sm:w-auto h-12 sm:h-auto text-sm sm:text-base">
                      View Full {currentPlan.name} Details
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white w-full sm:w-auto h-12 sm:h-auto text-sm sm:text-base">
                    Compare All Plans
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Hygiene-Only Option */}
        <Card className="max-w-6xl mx-auto bg-gradient-to-r from-dental-green/5 to-soft-blue/5 border border-dental-green/20">
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 items-center">

              <div className="lg:col-span-3 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-dental-green to-soft-blue rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pear-primary">Hygiene-Only Plan</h3>
                    <p className="text-dental-green font-semibold text-sm">Perfect for maintenance</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-dental-green" />
                    <span>3 hygiene appointments per year</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-dental-green" />
                    <span>Professional cleaning & advice</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-dental-green" />
                    <span>Gum health monitoring</span>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-3">
                <div>
                  <div className="text-2xl font-bold text-dental-green">£9.99</div>
                  <div className="text-sm text-gray-500">/month</div>
                </div>

                <Link href="/membership#hygiene">
                  <Button className="bg-gradient-to-r from-dental-green to-soft-blue text-white font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-dental-green" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-soft-pink" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-pear-primary" />
              <span>2,000+ members</span>
            </div>
            <div className="flex items-center space-x-2">
              <Crown className="w-5 h-5 text-pear-gold" />
              <span>Immediate benefits</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA - Simplified */}
        <div className="text-center">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied patients who've made the switch from NHS waiting lists to immediate, premium dental care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-gold text-white px-8 py-4">
              <Link href="/membership">
                Explore All Plans
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-pear-primary border-pear-primary hover:bg-pear-primary hover:text-white px-8 py-4">
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipHighlight;
