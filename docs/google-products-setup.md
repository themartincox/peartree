# Google Products Setup for Pear Tree Dental

## Overview
Configure dental services to appear as products in Google search results and Google Business Profile.

## 1. Google Business Profile Product Catalog

### Setup Steps:
1. **Access Google Business Profile**
   - Go to business.google.com
   - Sign in with business account
   - Select Pear Tree Dental location

2. **Add Products Section**
   - Navigate to "Products" in left sidebar
   - Click "Add Product" or "Get Started"

3. **Service Categories to Add:**

#### Examination & Preventive
- **Dental Examination** - £60
  - Description: "Comprehensive oral health check including digital X-rays and treatment planning"
  - Category: Health Services
  - Image: Professional dental examination photo

- **Scale & Polish** - £70
  - Description: "Professional dental cleaning to remove plaque and tartar buildup"
  - Category: Health Services

#### General Dentistry
- **White Fillings** - from £200
  - Description: "Tooth-colored composite fillings for natural-looking restorations"
  - Category: Health Services

- **Root Canal Treatment** - from £300
  - Description: "Save infected teeth with modern pain-free root canal therapy"

#### Cosmetic Dentistry
- **Teeth Whitening** - from £400
  - Description: "Professional teeth whitening for a brighter, more confident smile"

- **Composite Veneers** - from £200 per tooth
  - Description: "Transform your smile with natural-looking composite veneers"

#### Advanced Treatments
- **Dental Crowns** - from £750
  - Description: "Porcelain crowns to restore damaged teeth to full function"

- **Dental Implants** - from £3000
  - Description: "Permanent tooth replacement with titanium dental implants"

### Product Details Format:
- **Name**: Clear, searchable service name
- **Price**: "from £X" or exact price
- **Description**: 1-2 sentences explaining benefit
- **Category**: Health Services / Medical Services
- **Images**: High-quality before/after or procedure photos
- **Call-to-Action**: "Call to Book" or "Schedule Consultation"

## 2. Structured Data Markup

### Add to Website Pages:
```json
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Dental Examination",
  "description": "Comprehensive oral health check including digital X-rays and treatment planning",
  "brand": {
    "@type": "Organization",
    "name": "Pear Tree Dental"
  },
  "offers": {
    "@type": "Offer",
    "price": "60",
    "priceCurrency": "GBP",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Pear Tree Dental"
    }
  },
  "category": "Dental Services"
}
```

## 3. Google Merchant Center (Optional)

### For Service-Based Products:
1. Create Google Merchant Center account
2. Set up service-based product feed
3. Include dental services as bookable services
4. Link to Google Ads for enhanced visibility

### Service Feed Format:
```xml
<item>
  <g:id>dental-exam-001</g:id>
  <g:title>Dental Examination - Pear Tree Dental</g:title>
  <g:description>Comprehensive oral health check including digital X-rays</g:description>
  <g:price>60 GBP</g:price>
  <g:availability>in stock</g:availability>
  <g:brand>Pear Tree Dental</g:brand>
  <g:product_type>Health Services > Dental Care</g:product_type>
</item>
```

## 4. Website Product Pages

### Create dedicated service pages with:
- Clear pricing information
- Detailed service descriptions
- High-quality images
- Booking call-to-actions
- Patient testimonials
- Before/after galleries

### SEO Optimization:
- Product-focused page titles
- Meta descriptions with pricing
- Structured data markup
- Local SEO optimization

## 5. Social Media Integration

### Facebook/Instagram Shop:
- Create service catalog on Facebook Business
- Add dental services as bookable services
- Include pricing and descriptions
- Link to booking system

## 6. Third-Party Platforms

### Dental-Specific Platforms:
- **Treatwell** - Service listings with pricing
- **Booksy** - Dental service marketplace
- **Doctify** - Medical service directory
- **WhatClinic** - Treatment comparison site

### Setup Requirements:
- Service descriptions
- Pricing information
- Practice photos
- Professional credentials
- Patient reviews

## 7. Local Directory Listings

### Key Directories:
- **Yelp Business** - Service menu with pricing
- **Foursquare Business** - Service offerings
- **Apple Maps Business** - Service categories
- **Bing Places** - Service listings

## 8. Google Ads Integration

### Service-Based Campaigns:
- Create campaigns for each service
- Include pricing in ad extensions
- Use location extensions
- Add sitelink extensions to service pages

### Ad Extensions to Use:
- **Price Extensions**: Show service pricing
- **Structured Snippets**: Service categories
- **Callout Extensions**: "Same-day appointments", "Emergency care"
- **Location Extensions**: Practice address and hours

## 9. Review Management

### Encourage Service-Specific Reviews:
- Ask patients to mention specific treatments
- Respond to reviews mentioning services
- Share positive service reviews on social media

## Implementation Priority:

1. **Immediate (Week 1)**:
   - Set up Google Business Profile products
   - Add structured data to existing service pages

2. **Short-term (Month 1)**:
   - Create dedicated product/service pages
   - Set up social media catalogs
   - List on key directories

3. **Long-term (Month 2-3)**:
   - Google Merchant Center setup
   - Third-party platform integration
   - Advanced Google Ads campaigns

## Monitoring & Optimization:

### Track Performance:
- Google Business Profile insights
- Website service page traffic
- Conversion tracking for bookings
- Search appearance for service queries

### Regular Updates:
- Keep pricing current
- Add seasonal promotions
- Update service descriptions
- Refresh product images

## Compliance Notes:

### Medical Services Considerations:
- Follow Google's healthcare advertising policies
- Include necessary disclaimers
- Ensure pricing transparency
- Maintain professional imagery
- Include practitioner credentials

### Legal Requirements:
- GDC registration details
- Treatment disclaimers
- Privacy policy compliance
- Accurate pricing information
