"use client";

import { Heart, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-4 text-pear-primary">
            Ready to Join Pear Tree Dental?
          </h2>

          <p className="mb-8 text-lg text-gray-600">
            Take control of your dental health today. Sign up in under 2 minutes
            and enjoy all the benefits of membership.
          </p>

          <a href="/membership/signup">
            <Button
              size="lg"
              className="rounded-full text-lg font-medium px-8 bg-dental-green hover:bg-dental-green/90 text-white"
            >
              Join Today
            </Button>
          </a>

          <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-5 rounded-xl bg-gradient-to-br from-pear-background/50 to-white border border-gray-200">
              <div className="w-12 h-12 bg-dental-green/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Zap className="h-6 w-6 text-dental-green" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Signup</h3>
              <p className="text-sm text-gray-600">
                Our simple online form takes less than 2 minutes to complete.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-pear-background/50 to-white border border-gray-200">
              <div className="w-12 h-12 bg-dental-green/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Heart className="h-6 w-6 text-dental-green" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Flexible Plans</h3>
              <p className="text-sm text-gray-600">
                Choose the plan that works best for you and your family.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-pear-background/50 to-white border border-gray-200">
              <div className="w-12 h-12 bg-dental-green/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-dental-green" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Cancel Anytime</h3>
              <p className="text-sm text-gray-600">
                No long-term contracts. Cancel with one month's notice.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 w-64 h-64 rounded-full bg-pear-primary/5"
        style={{ filter: "blur(60px)" }}
      />
      <div
        className="absolute bottom-0 left-0 transform translate-y-1/3 w-80 h-80 rounded-full bg-pear-gold/5"
        style={{ filter: "blur(80px)" }}
      />
    </section>
  );
}
