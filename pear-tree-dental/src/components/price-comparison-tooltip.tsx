import type React from 'react';

interface PriceComparisonTooltipProps {
  planPrice: number;
  normalPrice: number;
  savings: number;
  planName: string;
  children: React.ReactNode;
}

export default function PriceComparisonTooltip({
  planPrice,
  normalPrice,
  savings,
  planName,
  children
}: PriceComparisonTooltipProps) {
  return (
    <div className="group relative inline-block">
      {children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-white text-gray-800 p-3 rounded-lg shadow-lg border text-sm whitespace-nowrap">
          <div className="font-semibold text-primary">{planName} Savings</div>
          <div className="text-xs mt-1">
            Normal cost: £{normalPrice.toFixed(2)}/year
          </div>
          <div className="text-xs text-green-600 font-medium">
            You save: £{savings}/year
          </div>
        </div>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
          <div className="border-4 border-transparent border-t-white"></div>
        </div>
      </div>
    </div>
  );
}
