"use client";

import { ArrowRight, BarChart3, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    id: "growth",
    title: "Growth Marketing",
    description:
      "Expert marketing strategies that deliver measurable results and sustainable growth for your business.",
    features: [
      "SEO & Content Strategy",
      "Email Marketing Automation",
      "Social Media Management",
      "Brand Identity & Design",
    ],
    href: "/growth-marketing",
    color: "from-forest-green to-emerald-500",
    icon: <BarChart3 className="h-8 w-8" />,
  },
  {
    id: "ai",
    title: "AI & Automation",
    description:
      "Intelligent automation solutions that streamline operations and unlock new possibilities for efficiency.",
    features: [
      "Process Automation",
      "Intelligent Chatbots",
      "Predictive Analytics",
      "Custom AI Solutions",
    ],
    href: "/ai-automation",
    color: "from-coral-red to-orange-500",
    icon: <Zap className="h-8 w-8" />,
  },
];

export default function EnhancedServiceCards() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {services.map((service) => (
        <Card
          key={service.id}
          className={`relative group border-0 shadow-lg transition-all duration-300 overflow-hidden ${
            hoveredCard === service.id
              ? "shadow-2xl scale-105"
              : "hover:shadow-xl"
          }`}
          onMouseEnter={() => setHoveredCard(service.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Background gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 transition-opacity duration-300 ${
              hoveredCard === service.id ? "opacity-10" : ""
            }`}
          />

          <CardHeader className="relative z-10 pb-4">
            <div className="flex items-center space-x-4 mb-4">
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}
              >
                {service.icon}
              </div>
              <CardTitle className="text-2xl font-heading font-bold text-midnight-blue">
                {service.title}
              </CardTitle>
            </div>
            <p className="text-gray-600 font-body leading-relaxed">
              {service.description}
            </p>
          </CardHeader>

          <CardContent className="relative z-10">
            <div className="mb-6">
              <h4 className="font-heading font-semibold text-midnight-blue mb-3">
                Key Services:
              </h4>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-forest-green to-coral-red rounded-full" />
                    <span className="font-body text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              asChild
              className={`w-full bg-gradient-to-r ${service.color} text-white hover:opacity-90 transition-opacity shadow-lg`}
            >
              <Link href={service.href}>
                Explore {service.title}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>

          {/* Simple hover effect */}
          {hoveredCard === service.id && (
            <div className="absolute inset-0 pointer-events-none">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 animate-pulse`}
              />
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
