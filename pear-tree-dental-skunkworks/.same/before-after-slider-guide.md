# Before/After Slider Component Guide

## Overview

The `BeforeAfterSlider` component provides an interactive way to showcase dental treatment results with a smooth, draggable slider interface. Users can drag between "before" and "after" images to see dramatic transformations.

## Features

- **Interactive 3-position slider**: Far left (before), middle (split view), far right (after)
- **Touch-friendly**: Optimized for mobile devices with touch support
- **Quick controls**: Before/Compare/After buttons for easy navigation
- **Customizable**: Flexible styling and content options
- **Accessible**: Proper alt text and keyboard navigation support

## Component Props

```tsx
interface BeforeAfterSliderProps {
  beforeImage: string;        // Path to before image
  afterImage: string;         // Path to after image
  beforeAlt: string;          // Alt text for before image
  afterAlt: string;           // Alt text for after image
  title?: string;             // Optional slider title
  description?: string;       // Optional description text
  treatmentType?: string;     // Treatment type badge (e.g., "Teeth Whitening")
  className?: string;         // Additional CSS classes
}
```

## Basic Usage

```tsx
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

<BeforeAfterSlider
  beforeImage="/images/before-after/treatment-before.jpg"
  afterImage="/images/before-after/treatment-after.jpg"
  beforeAlt="Patient's teeth before treatment"
  afterAlt="Patient's teeth after treatment showing dramatic improvement"
  title="Amazing Transformation"
  description="See the incredible results achieved with our treatment"
  treatmentType="Teeth Whitening"
  className="bg-white rounded-2xl p-6 shadow-lg"
/>
```

## Examples by Service

### Teeth Whitening
```tsx
<BeforeAfterSlider
  beforeImage="/images/before-after/whitening-before.jpg"
  afterImage="/images/before-after/whitening-after.jpg"
  beforeAlt="Stained teeth before professional whitening"
  afterAlt="Bright white teeth after professional whitening treatment"
  title="Professional Whitening Results"
  description="Up to 8 shades whiter in just one session"
  treatmentType="Professional Whitening"
/>
```

### Dental Veneers
```tsx
<BeforeAfterSlider
  beforeImage="/images/before-after/veneers-before.jpg"
  afterImage="/images/before-after/veneers-after.jpg"
  beforeAlt="Damaged and discolored teeth before veneers"
  afterAlt="Perfect smile with porcelain veneers"
  title="Veneer Transformation"
  description="Complete smile makeover with ultra-thin porcelain veneers"
  treatmentType="Porcelain Veneers"
/>
```

### Orthodontics
```tsx
<BeforeAfterSlider
  beforeImage="/images/before-after/orthodontics-before.jpg"
  afterImage="/images/before-after/orthodontics-after.jpg"
  beforeAlt="Crooked teeth before Invisalign treatment"
  afterAlt="Perfectly straight teeth after Invisalign treatment"
  title="Invisalign Straightening"
  description="Straight teeth without traditional braces"
  treatmentType="Invisalign"
/>
```

### Complete Smile Makeover
```tsx
<BeforeAfterSlider
  beforeImage="/images/before-after/makeover-before.jpg"
  afterImage="/images/before-after/makeover-after.jpg"
  beforeAlt="Patient's smile before complete makeover"
  afterAlt="Patient's transformed smile after complete makeover"
  title="Complete Smile Transformation"
  description="Life-changing results with comprehensive treatment"
  treatmentType="Smile Makeover"
/>
```

## Styling Options

### Background Variations
```tsx
// Light gradient background
className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6"

// White with shadow
className="bg-white rounded-2xl p-6 shadow-lg"

// Transparent with border
className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200"
```

### Color Themes by Treatment
- **Whitening**: Yellow/orange gradients (`from-yellow-100 to-orange-100`)
- **Veneers**: Blue/indigo (`from-blue-50 to-indigo-100`)
- **Orthodontics**: Green/teal (`from-green-50 to-teal-100`)
- **General**: Neutral gray (`from-gray-50 to-gray-100`)

## Implementation in Service Pages

### 1. Import the Component
```tsx
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
```

### 2. Add to Page Layout
Place the slider in appropriate sections:
- Hero area for maximum impact
- Results section after treatment explanation
- Testimonials section alongside patient stories

### 3. Integration Example
```tsx
{/* Results Section */}
<section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-pear-primary mb-6">
        Real Patient Results
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        See the amazing transformations our patients have achieved
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <BeforeAfterSlider
        beforeImage="/images/before-after/case1-before.jpg"
        afterImage="/images/before-after/case1-after.jpg"
        beforeAlt="Patient case 1 before treatment"
        afterAlt="Patient case 1 after treatment"
        title="6-Month Transformation"
        treatmentType="Invisalign"
      />

      <BeforeAfterSlider
        beforeImage="/images/before-after/case2-before.jpg"
        afterImage="/images/before-after/case2-after.jpg"
        beforeAlt="Patient case 2 before treatment"
        afterAlt="Patient case 2 after treatment"
        title="Professional Whitening"
        treatmentType="Teeth Whitening"
      />
    </div>
  </div>
</section>
```

## Image Requirements

### Image Specifications
- **Format**: JPG, WebP, or PNG
- **Dimensions**: Minimum 800x600px, recommended 1200x900px
- **Aspect Ratio**: 4:3 (component default)
- **Quality**: High resolution for crisp details
- **File Size**: Optimized for web (under 500KB each)

### Before/After Image Guidelines
1. **Consistent Lighting**: Same lighting conditions for both images
2. **Same Angle**: Identical positioning and camera angle
3. **Neutral Background**: Clean, consistent background
4. **Focus on Treatment Area**: Clear view of treated teeth/smile
5. **Professional Quality**: Professional photography recommended

### Image Organization
```
public/images/before-after/
├── whitening/
│   ├── case1-before.jpg
│   ├── case1-after.jpg
│   ├── case2-before.jpg
│   └── case2-after.jpg
├── veneers/
│   ├── case1-before.jpg
│   ├── case1-after.jpg
│   └── ...
├── orthodontics/
│   └── ...
└── makeovers/
    └── ...
```

## Best Practices

### Accessibility
- Always provide descriptive alt text
- Ensure sufficient color contrast
- Test with keyboard navigation
- Support screen readers

### Performance
- Optimize images for web delivery
- Use Next.js Image component for automatic optimization
- Consider lazy loading for multiple sliders
- Test on mobile devices for smooth performance

### User Experience
- Place sliders prominently in the layout
- Provide clear instructions for interaction
- Use consistent styling across service pages
- Include context about the transformation

### Content Strategy
- Show diverse patient cases
- Include treatment timeframes
- Highlight key benefits achieved
- Use authentic patient photos (with consent)

## Advanced Usage

### Multiple Sliders in Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {treatmentCases.map((case, index) => (
    <BeforeAfterSlider
      key={index}
      beforeImage={case.beforeImage}
      afterImage={case.afterImage}
      beforeAlt={case.beforeAlt}
      afterAlt={case.afterAlt}
      title={case.title}
      treatmentType={case.treatmentType}
      className="bg-white rounded-2xl p-6 shadow-lg"
    />
  ))}
</div>
```

### With Additional Content
```tsx
<div className="space-y-8">
  <BeforeAfterSlider {...sliderProps} />

  {/* Additional treatment details */}
  <div className="bg-blue-50 p-6 rounded-lg">
    <h4 className="font-semibold text-pear-primary mb-2">Treatment Details:</h4>
    <ul className="space-y-1 text-gray-600">
      <li>• Duration: 6 months</li>
      <li>• Appointments: 8 visits</li>
      <li>• Follow-up: 6 month checkup</li>
    </ul>
  </div>
</div>
```

## Troubleshooting

### Common Issues
1. **Images not loading**: Check file paths and ensure images exist
2. **Slider not dragging**: Verify touch events are properly bound
3. **Layout issues**: Ensure parent container has appropriate dimensions
4. **Performance lag**: Optimize image sizes and check for memory leaks

### Mobile Considerations
- Test touch responsiveness on various devices
- Ensure slider handle is large enough for touch interaction
- Consider adding haptic feedback for enhanced UX
- Test with different screen orientations

## Future Enhancements

### Potential Features
- Video before/after support
- Multiple treatment stages (not just before/after)
- Zoom functionality for detailed views
- Automated slideshow mode
- Social sharing capabilities
- Treatment timeline integration

This component provides a powerful way to showcase dental transformations and can significantly improve conversion rates by allowing patients to see real results interactively.
