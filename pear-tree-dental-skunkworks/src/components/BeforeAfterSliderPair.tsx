"use client";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { Card } from "@/components/ui/card";

interface SliderData {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  title?: string;
  description?: string;
  treatmentType?: string;
}

interface BeforeAfterSliderPairProps {
  primarySlider: SliderData;
  secondarySlider: SliderData;
  sectionTitle?: string;
  sectionDescription?: string;
  className?: string;
}

export default function BeforeAfterSliderPair({
  primarySlider,
  secondarySlider,
  sectionTitle,
  sectionDescription,
  className = ""
}: BeforeAfterSliderPairProps) {
  return (
    <div className={`space-y-8 ${className}`}>
      {/* Section Header */}
      {(sectionTitle || sectionDescription) && (
        <div className="text-center mb-12">
          {sectionTitle && (
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              {sectionTitle}
            </h2>
          )}
          {sectionDescription && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {sectionDescription}
            </p>
          )}
        </div>
      )}

      {/* Sliders Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Primary Slider */}
        <div className="w-full">
          <BeforeAfterSlider
            beforeImage={primarySlider.beforeImage}
            afterImage={primarySlider.afterImage}
            beforeAlt={primarySlider.beforeAlt}
            afterAlt={primarySlider.afterAlt}
            title={primarySlider.title}
            description={primarySlider.description}
            treatmentType={primarySlider.treatmentType}
            className="w-full"
          />
        </div>

        {/* Secondary Slider */}
        <div className="w-full">
          <BeforeAfterSlider
            beforeImage={secondarySlider.beforeImage}
            afterImage={secondarySlider.afterImage}
            beforeAlt={secondarySlider.beforeAlt}
            afterAlt={secondarySlider.afterAlt}
            title={secondarySlider.title}
            description={secondarySlider.description}
            treatmentType={secondarySlider.treatmentType}
            className="w-full"
          />
        </div>
      </div>


    </div>
  );
}
