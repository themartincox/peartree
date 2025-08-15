'use client';

import { Shield, Banknote, HeartPulse, Timer, Search, Stethoscope } from "lucide-react";

const emergencyBenefits = [
  {
    id: "emergency",
    icon: <Shield className="h-6 w-6 text-pear-primary" />,
    title: "Emergency Benefit",
    description: "£500 per incident, up to £2000 per annum",
  },
  {
    id: "accident",
    icon: <Banknote className="h-6 w-6 text-pear-primary" />,
    title: "Accident Cover",
    description: "Up to £12,000 towards dental treatment cost as a result of an accident",
  },
  {
    id: "hospital",
    icon: <HeartPulse className="h-6 w-6 text-pear-primary" />,
    title: "Hospital Cash Benefit",
    description: "£150 per 24hrs up to 365 days",
  },
  {
    id: "cancer",
    icon: <Search className="h-6 w-6 text-pear-primary" />,
    title: "Oral Cancer Benefit",
    description: "£3000 on diagnosis of defined oral cancer",
  },
  {
    id: "disfigurement",
    icon: <Stethoscope className="h-6 w-6 text-pear-primary" />,
    title: "Facial Disfigurement",
    description: "Coverage for facial disfigurement resulting from accidents",
  },
  {
    id: "immediate",
    icon: <Timer className="h-6 w-6 text-pear-primary" />,
    title: "Immediate Coverage",
    description: "Protection begins as soon as your membership is active",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-4">
            Worldwide Dental <span className="text-pear-primary">Accident & Emergency</span> Cover
          </h2>
          <p className="text-gray-600 text-lg">
            All our membership plans include comprehensive emergency coverage, giving you peace of mind whether you're at home or abroad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emergencyBenefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-gradient-to-br from-pear-background/30 to-white p-6 rounded-xl border border-gray-200 hover:border-pear-primary/20 hover:bg-pear-background/50 transition-all duration-200"
            >
              <div className="flex flex-col gap-4">
                <div className="rounded-full bg-pear-primary/10 w-12 h-12 flex items-center justify-center">
                  {benefit.icon}
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            For full details on coverage limits and exclusions, please speak with our team when you join. Emergency and accident coverage is provided by a third-party insurer and is subject to their terms and conditions.
          </p>
        </div>
      </div>
    </section>
  );
}
