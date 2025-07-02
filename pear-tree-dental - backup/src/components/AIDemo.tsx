"use client";

import { useState, useEffect } from "react";
import { Brain, CheckCircle, ArrowRight } from "lucide-react";

const insights = [
  {
    industry: "Healthcare",
    issues: ["73% drop-off on booking page", "4.2s mobile load times", "Missing patient testimonials"],
    fixes: ["One-click booking", "Optimise images", "Add review section"]
  },
  {
    industry: "Legal",
    issues: ["34% drop in requests", "23s page visit time", "Missing pricing info"],
    fixes: ["Booking widget", "Better content structure", "Display fee structures"]
  },
  {
    industry: "Accounting",
    issues: ["Poor tax season conversion", "12% portal adoption", "Technical jargon"],
    fixes: ["Seasonal pages", "Simplify onboarding", "Plain English copy"]
  }
];

export default function AIDemo() {
  const [currentInsight, setCurrentInsight] = useState(0);
  const [step, setStep] = useState(0); // 0: start, 1: analyzing, 2: complete
  const [revenueIncrease] = useState(25 + Math.floor(Math.random() * 30));

  useEffect(() => {
    // Simple demo cycle
    const cycle = setInterval(() => {
      if (step === 0) {
        setStep(1);
        setTimeout(() => setStep(2), 3000);
        setTimeout(() => {
          setStep(0);
          setCurrentInsight((prev) => (prev + 1) % insights.length);
        }, 6000);
      }
    }, 8000);

    return () => clearInterval(cycle);
  }, [step]);

  const insight = insights[currentInsight];

  return (
    <div className="relative bg-gradient-to-br from-midnight-blue/10 to-blue-50 rounded-2xl p-8 border border-blue-100">
      <div className="text-center mb-6">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
          <Brain className="h-4 w-4" />
          <span>AI Analysis in Action</span>
        </div>
        <h3 className="text-2xl font-heading font-bold text-midnight-blue mb-2">
          Live Website Intelligence Demo
        </h3>
        <p className="text-gray-600">
          Watch our AI analyse a {insight.industry.toLowerCase()} website
        </p>
      </div>

      {/* Industry Selector */}
      <div className="flex justify-center space-x-2 mb-6">
        {insights.map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrentInsight(index)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              index === currentInsight
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            {item.industry}
          </button>
        ))}
      </div>

      {/* Simple Terminal */}
      <div className="bg-black rounded-lg p-6 font-mono text-sm mb-6">
        <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-gray-700">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-400">postino-ai-analyzer</span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-blue-400">$</span>
            <span className="text-white">Analysing {insight.industry} website...</span>
            {step === 1 && (
              <div className="flex space-x-1">
                <div className="w-1 h-4 bg-blue-400 animate-pulse"></div>
                <div className="w-1 h-4 bg-blue-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1 h-4 bg-blue-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            )}
          </div>

          {step >= 2 && (
            <div className="space-y-2">
              <div className="text-yellow-400">🔍 Issues Found:</div>
              {insight.issues.map((issue, index) => (
                <div key={index} className="ml-4 flex items-start space-x-2">
                  <span className="text-red-400">⚠</span>
                  <span className="text-gray-300">{issue}</span>
                </div>
              ))}

              <div className="text-green-400 mt-4">💡 AI Recommendations:</div>
              {insight.fixes.map((fix, index) => (
                <div key={index} className="ml-4 flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{fix}</span>
                </div>
              ))}

              <div className="mt-4 p-3 bg-green-900/20 border border-green-400 rounded">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-green-400 font-semibold">
                    Analysis complete! Estimated revenue increase: +{revenueIncrease}%
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-gray-600 mb-4">
          See how AI can analyse and optimise your website
        </p>
        <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors shadow-lg">
          <span>Get Your AI Analysis</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Simple metrics */}
      <div className="absolute top-4 right-4 space-y-2">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-semibold text-gray-700 shadow-lg">
          <span className="text-green-600">+{15 + Math.floor(Math.random() * 15)}%</span> conversion
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-semibold text-gray-700 shadow-lg">
          <span className="text-blue-600">{Math.floor(Math.random() * 100) + 50}</span> issues found
        </div>
      </div>
    </div>
  );
}
