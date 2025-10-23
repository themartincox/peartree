"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLocationDetection } from "@/hooks/useLocationDetection";
import { useConversionTracking } from "@/hooks/useConversionTracking";
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
  ArrowRight,
  MapPin,
  Car,
  Clock,
  Calculator,
  PiggyBank
} from "lucide-react";

import { membershipPlans as centralMembershipPlans } from "@/data/pricing";

// Map local UI plans to central pricing (single source of truth)
function priceForPlan(key: string): string {
  // Map local keys to central planIds
  const idByKey: Record<string, string> = {
    essentialMaintenance: "plan-a",
    completeCare: "plan-c",
    family: "family",
    child: "child",
  };
  const planId = idByKey[key];
  if (!planId) return "";
  const found = centralMembershipPlans.find((p) => p.planId === planId);
  return found?.price ?? "";
}

// Memoize membership data to prevent recreation on each render
const membershipPlans = {
  essentialMaintenance: {
    name: "ESSENTIAL MAINTENANCE",
    price: priceForPlan("essentialMaintenance"),
    period: "/month",
    dailyCost: "Just 37p per day",
    savings: "120",
    description: "Basic preventive dental care for maintaining good oral health with regular check-ups.",
    keyFeatures: [
      "1 Dental check up a year",
      "1 Scale & Polish a year",
      "Worldwide dental accident & emergency cover"
    ],
    icon: UserRound,
    color: "dental-green",
    popular: false
  },
  completeCare: {
    name: "COMPLETE CARE",
    price: priceForPlan("completeCare"),
    period: "/month",
    dailyCost: "Just 67p per day",
    savings: "177",
    description: "Our most popular plan with twice yearly dental care and comprehensive coverage.",
    keyFeatures: [
      "2 Dental check up a year",
      "2 Scale & Polish a year",
      "Worldwide dental accident & emergency cover"
    ],
    icon: User,
    color: "pink-haze",
    popular: true
  },
  family: {
    name: "FAMILY PLAN",
    price: priceForPlan("family"),
    period: "/month",
    dailyCost: "Just £1.65 per day",
    savings: "400+",
    description: "Coverage and Peace of Mind for 2 adults and up to 3 children with significant family savings.",
    keyFeatures: [
      "2 Adults + up to 3 children covered",
      "All adults get Complete Care Plus benefits",
      "Children under 18 included free",
      "Simplified billing for whole family"
    ],
    icon: Users,
    color: "pear-gold",
    popular: true
  },
  child: {
    name: "CHILD PLAN",
    price: priceForPlan("child"),
    period: "/month",
    dailyCost: "Just 17p per day",
    savings: "180",
    description: "Specialised dental care for children under 18. FREE when joining with an adult plan.",
    keyFeatures: [
      "2 Dental check ups a year",
      "Fluoride treatments included",
      "Fissure sealants when required",
      "Worldwide Emergency Dental Cover"
    ],
    icon: Baby,
    color: "soft-pink",
    popular: false
  },
};

// Nottingham-specific benefits component
const NottinghamMembershipBenefits = () => {
  const { isNottingham } = useLocationDetection();
  const { trackLocationConversion } = useConversionTracking();

  // Only show if we've detected the user is from Nottingham
  // No loading states - just appear seamlessly when detected
  if (!isNottingham) return null;

  const handleCalculatorClick = () => {
    trackLocationConversion('savings_calculator_click', 'burton_joyce');
  };

  return (
    <Card className="mt-12 bg-gradient-to-r from-dental-green/5 to-pear-primary/5 border border-dental-green/20 overflow-hidden animate-in fade-in duration-1000">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <Badge className="bg-dental-green text-white mb-4 px-4 py-2">
            <MapPin className="w-4 h-4 mr-2" />
            Special Benefits for Nottingham Members
          </Badge>
          <h3 className="text-2xl font-bold text-pear-primary mb-2">Why Nottingham Patients Love Our Membership</h3>
          <p className="text-gray-600">Exclusive advantages that make the 15-minute journey from Nottingham well worth it</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 justify-center">
          <div className="text-center">
            <Car className="w-8 h-8 text-dental-green mx-auto mb-3" />
            <h4 className="font-semibold text-pear-primary mb-2">Free Parking Always</h4>
            <p className="text-sm text-gray-600">Save £15+ per visit compared to city centre practices</p>
          </div>

       
          <div className="text-center">
            <ShieldCheck className="w-8 h-8 text-dental-green mx-auto mb-3" />
            <h4 className="font-semibold text-pear-primary mb-2">No NHS Waiting</h4>
            <p className="text-sm text-gray-600">Immediate appointments vs 6+ month NHS waits</p>
          </div>

          <div className="text-center">
            <Heart className="w-8 h-8 text-dental-green mx-auto mb-3" />
            <h4 className="font-semibold text-pear-primary mb-2">Personal Service</h4>
            <p className="text-sm text-gray-600">Same dentist every visit, not corporate rotation</p>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-dental-green/20 p-6 mb-6">
          <h4 className="font-semibold text-pear-primary mb-4 text-center">Annual Savings Calculator for Nottingham Patients</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-dental-green mb-1">£60</div>
              <div className="text-sm text-gray-600">Parking savings</div>
              <div className="text-xs text-gray-500 mt-1">4 visits × £15 city center parking</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-dental-green mb-1">£400</div>
              <div className="text-sm text-gray-600">Treatment savings</div>
              <div className="text-xs text-gray-500 mt-1">vs. private dental costs in city</div>
            </div>
            <div className="border-l border-dental-green/20 pl-6 md:pl-0 md:border-l-0">
              <div className="text-3xl font-bold text-pear-gold mb-1">£460</div>
              <div className="text-sm text-gray-600 font-semibold">Total saved annually</div>
              <div className="text-xs text-gray-500 mt-1">Plus time and stress savings</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pear-gold/10 to-dental-green/10 rounded-lg p-6 border border-pear-gold/20">
          <div className="flex items-start space-x-4">
            <PiggyBank className="w-8 h-8 text-pear-gold flex-shrink-0 mt-1" />
            <div>
              <h5 className="font-semibold text-pear-primary mb-2">Why Nottingham Patients Make the Switch</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Avoid city center traffic and parking stress</li>
                <li>• 15-minute journey vs 45+ minutes to central Nottingham practices</li>
                <li>• Personal care vs corporate dental chains</li>
                <li>• Same-day emergency appointments vs NHS emergency queues</li>
                <li>• Modern technology in peaceful countryside setting</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <Button
            asChild
            className="bg-dental-green text-white font-semibold px-6 py-3 hover:bg-dental-green/90"
            onClick={handleCalculatorClick}
          >
            <Link href="/membership#plans">
              <Calculator className="w-4 h-4 mr-2" />
              Calculate Your Nottingham Savings
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const MembershipHighlight = () => {
  const [activeTab, setActiveTab] = useState("completeCare");
  const { trackMembershipPlanSelect, trackBookingAttempt, trackLocationConversion } = useConversionTracking();

  // Memoize current plan to prevent recalculation
  const currentPlan = useMemo(() => {
    const plan = membershipPlans[activeTab as keyof typeof membershipPlans];
    return { ...plan, Icon: plan.icon };
  }, [activeTab]);

  // Handle plan selection with tracking
  const handlePlanSelect = (planKey: string) => {
    setActiveTab(planKey);
    const plan = membershipPlans[planKey as keyof typeof membershipPlans];
    trackMembershipPlanSelect(plan.name, Number.parseFloat(plan.price.replace('£', '')));
  };

  // Handle CTA clicks with tracking
  const handlePlanDetailsClick = () => {
    trackMembershipPlanSelect(`${currentPlan.name}_details_view`, Number.parseFloat(currentPlan.price.replace('£', '')));
  };

  const handleCompareClick = () => {
    trackLocationConversion('membership_compare_all', 'burton_joyce');
  };

  const handleExploreClick = () => {
    trackMembershipPlanSelect('explore_all_plans', 0);
  };

  const handleBookConsultationClick = () => {
    trackBookingAttempt('membership_highlight', 'booking');
  };

  // Memoize tab buttons to prevent recreation and ensure specific order
  const tabButtons = useMemo(() => {
    // Define the specific order we want to display the plans
    const planOrder = ["essentialMaintenance", "completeCare", "family"];

    // Create buttons in the specified order
    return planOrder.map(key => {
      const plan = membershipPlans[key as keyof typeof membershipPlans];
      const TabIcon = plan.icon;
      const isActive = activeTab === key;

      return (
        <button
          key={key}
          onClick={() => handlePlanSelect(key)}
          role="tab"
          aria-selected={isActive}
          aria-controls={`plan-${key}-content`}
          aria-label={`Select ${plan.name} - ${plan.price}${plan.period}`}
          className={`w-full text-left p-3 sm:p-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pear-primary ${
            isActive
              ? key === 'completeCare' ? 'bg-white text-dental-green shadow-lg transform scale-105'
              : key === 'child' ? 'bg-white text-soft-pink shadow-lg transform scale-105'
              : key === 'essentialMaintenance' ? 'bg-white text-dental-green shadow-lg transform scale-105'
              : 'bg-white text-pear-gold shadow-lg transform scale-105'
              : 'text-pear-gold hover:text-pear-gold hover:bg-white/10'
          }`}
        >
          <div className="flex items-center space-x-2 sm:space-x-3">
            <TabIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            <div>
              <div className="font-semibold text-sm sm:text-base">{plan.name}</div>
              <div className="text-xs sm:text-sm text-white/90 font-medium">{plan.price}{plan.period}</div>
            </div>
          </div>
        </button>
      );
    });
  }, [activeTab]);

  return (
    <section className="pt-9 pb-16 md:pt-7 md:pb-20 lg:pt-3 bg-gradient-to-br from-pear-background to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
       
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

        {/* Main Membership Card - Enhanced design */}
        <Card className="max-w-6xl mx-auto overflow-hidden shadow-2xl bg-gradient-to-br from-white via-blue-50/30 to-slate-50 border-2 border-pear-primary/20 mb-8 sm:mb-12 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-4">
            {/* Tabs Sidebar */}
            <div className="lg:col-span-1 bg-gradient-to-br from-pear-primary via-pear-primary/95 to-pear-primary/90 p-4 sm:p-6 lg:p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-pear-gold/20 rounded-full translate-y-12 -translate-x-12" />
              <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Choose Your Plan</h3>

              <div className="space-y-3" role="tablist" aria-orientation="vertical" aria-label="Membership plan options">
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
            <div
              className="lg:col-span-3 p-4 sm:p-6 lg:p-8 xl:p-12"
              role="tabpanel"
              id={`plan-${activeTab}-content`}
              aria-labelledby={`plan-${activeTab}-tab`}
            >
              <div className="space-y-6 sm:space-y-8">

                {/* Plan Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg ${
                      activeTab === 'completeCare' ? 'bg-dental-green' :
                      activeTab === 'child' ? 'bg-soft-pink' :
                      activeTab === 'essentialMaintenance' ? 'bg-dental-green' : 'bg-pear-gold'
                    }`}>
                      <currentPlan.Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-pear-primary">{currentPlan.name}</h3>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-3xl sm:text-4xl font-bold text-pear-primary">{currentPlan.price}</span>
                        <span className="text-gray-500 text-sm sm:text-base">{currentPlan.period}</span>
                        {currentPlan.popular && (
                          <Badge variant="secondary" className="bg-pear-gold/10 text-pear-gold text-xs sm:text-sm">Perfect for busy families
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{currentPlan.dailyCost}</div>
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
                    <div className="items-center">
                      <h4 className="font-semibold text-pear-primary mb-2">Annual Savings</h4>
                      <p className="text-gray-600 text-sm">
                        Save up to £400+ per year compared to pay-as-you-go treatments
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-pear-gold">
                        £{currentPlan.savings}
                      </div>
                      <div className="text-sm text-gray-500">saved annually</div>
                    </div>
                  </div>
                </div>

                {/* CTA with Tracking */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="btn-gold text-pear-primary font-semibold group w-full sm:w-auto h-12 sm:h-auto text-sm sm:text-base"
                    onClick={handlePlanDetailsClick}
                  >
                    <Link href={activeTab === "family" ? "/membership#family-plan" :
                              activeTab === "essentialMaintenance" ? "/membership#essential-maintenance" :
                              "/membership/signup"}>
                      View {currentPlan.name} Details
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white w-full sm:w-auto h-12 sm:h-auto text-sm sm:text-base"
                    onClick={handleCompareClick}
                  >
                    <Link href="/membership#plans">
                      Compare All Plans
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Nottingham-specific benefits */}
        <NottinghamMembershipBenefits />

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-dental-green" />
              <span>No hidden fees</span>
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
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Join thousands of satisfied patients who've made the switch from NHS waiting lists to immediate dental care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="btn-gold text-pear-primary px-8 py-4"
              onClick={handleExploreClick}
            >
              <Link href="/membership#plans">
                Explore All Plans
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-pear-primary border-pear-primary hover:bg-pear-primary hover:text-white px-8 py-4"
              onClick={handleBookConsultationClick}
            >
              <Link href="/book">Book Your Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipHighlight;
