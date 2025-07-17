# 🖼️ Service Hero Images

This directory contains hero images for all service pages across the Pear Tree Dental website.

## 📁 Directory Structure

```
heroes/
├── cosmetic-dentistry-hero.webp       # Main cosmetic services page
├── general-dentistry-hero.webp        # Main general services page
├── restorative-dentistry-hero.webp    # Main restorative services page
├── dental-implants-hero.webp          # Main implants page
├── orthodontics-hero.webp             # Main orthodontics page
├── hygiene-therapy-hero.webp          # Main hygiene page
├── emergency-dental-hero.webp         # Main emergency page
├── cosmetic/
│   ├── teeth-whitening-hero.webp
│   ├── dental-veneers-hero.webp
│   ├── composite-bonding-hero.webp
│   └── smile-makeover-hero.webp
├── implants/
│   ├── single-implant-hero.webp
│   ├── multiple-implants-hero.webp
│   └── all-on-4-hero.webp
├── restorative/
│   ├── dentures-hero.webp
│   └── biodentine-fillings-hero.webp
├── orthodontics/
│   ├── invisalign-hero.webp
│   └── clearcorrect-hero.webp
└── specialty/
    ├── smile-design-hero.webp
    └── wedding-smile-hero.webp
```

## 📏 Image Specifications

- **Format:** WebP (optimized for web)
- **Dimensions:** 1200x800px (3:2 aspect ratio)
- **Quality:** High resolution, professional photography
- **File Size:** Target under 200KB each
- **Alt Text:** Descriptive and accessible

## 🚀 Implementation

### 1. Add New Service Hero

To add a hero image to any service page:

```tsx
// 1. Import the hero system
import ServiceHero from "@/components/ServiceHero";
import { getServiceHeroConfig } from "@/data/serviceHeroes";

// 2. Replace existing hero section with:
<ServiceHero {...getServiceHeroConfig("/services/your-route")} />
```

### 2. Configure Hero Content

Edit `/src/data/serviceHeroes.ts` to add or modify hero configurations:

```tsx
"/services/your-route": {
  heroImage: "/images/heroes/your-hero-image.webp",
  heroImageAlt: "Descriptive alt text",
  badgeText: "Service Category",
  badgeIcon: YourIcon,
  title: "Main Title",
  subtitle: "Subtitle Text",
  description: "Hero description...",
  keyBenefits: [
    { text: "Benefit 1", icon: Icon1 },
    { text: "Benefit 2", icon: Icon2 }
  ]
}
```

### 3. Fallback Handling

The system automatically handles missing images:
- Falls back to default practice hero image
- Displays error-resistant image loading
- Maintains layout integrity

## ✅ Pages Ready for Hero Images

### Priority 1 - Main Categories:
- [x] `/services/cosmetic/` - **cosmetic-dentistry-hero.webp**
- [ ] `/services/general/` - **general-dentistry-hero.webp**
- [ ] `/services/restorative/` - **restorative-dentistry-hero.webp**
- [ ] `/services/implants/` - **dental-implants-hero.webp**
- [ ] `/services/orthodontics/` - **orthodontics-hero.webp**
- [ ] `/services/hygiene/` - **hygiene-therapy-hero.webp**
- [ ] `/services/emergency/` - **emergency-dental-hero.webp**

### Priority 2 - Specific Treatments:
- [ ] `/services/cosmetic/teeth-whitening/` - **cosmetic/teeth-whitening-hero.webp**
- [ ] `/services/cosmetic/veneers/` - **cosmetic/dental-veneers-hero.webp**
- [ ] `/services/cosmetic/edge-bonding/` - **cosmetic/composite-bonding-hero.webp**
- [ ] `/services/complete-smile-makeover/` - **cosmetic/smile-makeover-hero.webp**

## 🎨 Content Guidelines

### Photography Style:
- Professional dental environment
- Bright, clean lighting
- Real patients (with permission) or professional models
- Focus on results and positive outcomes
- Modern dental equipment where appropriate

### Composition:
- Subject positioned on left or right (not center) for text overlay
- Adequate negative space for hero content
- Professional, welcoming atmosphere
- High-quality, crisp images

### Avoid:
- Generic stock photography that looks artificial
- Overly clinical or sterile environments
- Poor lighting or blurry images
- Copyright-protected images

## 🔧 Technical Implementation

The hero system includes:
- **Responsive design** - Works on all device sizes
- **Performance optimized** - WebP format with lazy loading
- **Accessibility compliant** - Proper alt texts and focus states
- **SEO friendly** - Structured data and semantic markup
- **Brand consistent** - Uses site color scheme and typography

## 📱 Testing Checklist

When adding new hero images:
- [ ] Test on mobile, tablet, and desktop
- [ ] Verify image loads correctly
- [ ] Check alt text is descriptive
- [ ] Ensure text contrast is adequate
- [ ] Test fallback behavior
- [ ] Validate social proof badges still work
- [ ] Check CTA buttons function properly

## 📞 Support

For questions about hero image implementation:
1. Check existing service pages for examples
2. Review `/src/components/ServiceHero.tsx` for props
3. Update `/src/data/serviceHeroes.ts` for new configurations
