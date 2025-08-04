# Pear Tree Dental Brand Pack
*Complete Brand Identity Guidelines*

## 🎨 Brand Colors

### Primary Colors
```css
/* Main Brand Colors */
--pear-primary: #09394d        /* Deep teal - Main brand color */
--pear-background: #FAF9F6     /* Off-white - Background */
--pear-gold: #D4AF37           /* Gold - Premium accent */
--pear-gold-dark: #B8941F      /* Darker gold - WCAG AA compliant */

/* Dental Care Colors */
--dental-green: #4a7c59        /* Medical treatments */
--dental-navy: #09394d         /* Same as pear-primary */
--dental-teal: #2d6b7a         /* Medium teal */
```

### Secondary Colors
```css
/* Treatment Category Colors */
--soft-blue: #7fb3d3           /* Medical treatments secondary */
--soft-pink: #e8c5c5           /* Cosmetic treatments */
--soft-lavender: #d1c4e9       /* Cosmetic treatments secondary */
```

### Color Usage Guidelines

**Primary Brand Color (`#09394d`)**
- Main navigation text
- Headings and titles
- Logo text
- Primary buttons
- Important text

**Gold Accent (`#D4AF37`)**
- Premium features
- Membership plans
- Call-to-action buttons
- Success states
- Special offers

**Dental Green (`#4a7c59`)**
- Medical treatments
- Health-related content
- Success confirmations
- Environmental elements

**Treatment Colors**
- **Medical**: Dental green + Soft blue
- **Cosmetic**: Soft pink + Soft lavender

## 📝 Typography

### Font Families
```css
/* Primary Font - Headings */
font-family: 'Cormorant Garamond', serif;
/* Google Fonts: Cormorant_Garamond */
/* Weights: 300, 400, 500, 600, 700 */
/* Styles: normal, italic */

/* Secondary Font - Body Text */
font-family: 'Montserrat', sans-serif;
/* Google Fonts: Montserrat */
/* Weights: 100, 200, 300, 400, 500, 600, 700, 800, 900 */
/* Styles: normal, italic */
```

### Typography System

**Heading Hierarchy**
```css
h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);     /* 40px - 64px */
  font-weight: 700;
  line-height: 1.2;
}

h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 4vw, 3rem);       /* 32px - 48px */
  font-weight: 700;
  line-height: 1.25;
}

h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.5rem, 3vw, 2rem);     /* 24px - 32px */
  font-weight: 600;
  line-height: 1.3;
}

h4 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.25rem, 2vw, 1.5rem);  /* 20px - 24px */
  font-weight: 600;
  line-height: 1.4;
}
```

**Body Text**
```css
body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #09394d;
}

.text-lg { font-size: 18px; }
.text-sm { font-size: 14px; }
.text-xs { font-size: 12px; }
```

### Brand Typography Classes
```css
.brand-logo {
  font-family: 'Cormorant Garamond', serif;
  letter-spacing: 0.15em;
  font-weight: 600;
}

.brand-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  letter-spacing: 0.1em;
}
```

## 🏷️ Logo & Brand Mark

### Primary Logo
```
PEAR TREE
DENTAL
```

**Desktop Sizes**
- Large: `text-3xl` (30px)
- Medium: `text-2xl` (24px)
- Small: `text-xl` (20px)

**Mobile Sizes**
- Large: `text-xl` (20px)
- Medium: `text-lg` (18px)
- Small: `text-sm` (14px)

### Logo Specifications
```css
/* Main Logo Text */
.brand-logo {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: #09394d;
}

/* Subtitle */
.brand-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: #09394d;
  margin-top: 4px;
}
```

### Logo Usage
- **On Light Backgrounds**: Use primary color (#09394d)
- **On Dark Backgrounds**: Use white
- **On Primary Background**: Use white or gold (#D4AF37)
- **Minimum Clear Space**: 25px around the logo
- **Minimum Size**: 120px width

## 📏 Spacing & Layout

### Spacing Scale
```css
/* Tailwind CSS Spacing */
0.5  = 2px     /* 0.125rem */
1    = 4px     /* 0.25rem */
2    = 8px     /* 0.5rem */
3    = 12px    /* 0.75rem */
4    = 16px    /* 1rem */
5    = 20px    /* 1.25rem */
6    = 24px    /* 1.5rem */
8    = 32px    /* 2rem */
10   = 40px    /* 2.5rem */
12   = 48px    /* 3rem */
16   = 64px    /* 4rem */
20   = 80px    /* 5rem */
24   = 96px    /* 6rem */
32   = 128px   /* 8rem */

/* Custom Spacing */
25px = 25px    /* Logo letter spacing */
4px  = 4px     /* Logo subtitle margin */
```

### Container & Layout
```css
/* Container Widths */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
}

/* Responsive Padding */
px-4    /* Mobile: 16px */
sm:px-6 /* Tablet: 24px */
lg:px-8 /* Desktop: 32px */

/* Section Spacing */
py-12   /* 48px top/bottom */
py-16   /* 64px top/bottom */
py-20   /* 80px top/bottom */
```

## 🎯 Component Specifications

### Buttons

**Primary Button**
```css
.btn-primary {
  background: #09394d;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #0b4d66;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(9, 57, 77, 0.3);
}
```

**Gold Button**
```css
.btn-gold {
  background: linear-gradient(135deg, #D4AF37 0%, #B8941F 100%);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.2);
}

.btn-gold:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
}
```

### Cards
```css
.card {
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  border-color: rgba(9, 57, 77, 0.3);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
```

## 🎨 Gradients & Effects

### Brand Gradients
```css
/* Primary Gradient */
.gradient-primary {
  background: linear-gradient(135deg, #09394d 0%, #1e5f73 100%);
}

/* Gold Gradient */
.gradient-gold {
  background: linear-gradient(135deg, #D4AF37 0%, #B8941F 100%);
}

/* Plan Gradients */
.plan-a-gradient {
  background: linear-gradient(135deg, #48cc6c 0%, #2d8a47 100%);
}

.plan-b-gradient {
  background: linear-gradient(135deg, #09394d 0%, #1e5f73 100%);
}

.plan-c-gradient {
  background: linear-gradient(135deg, #4A90A4 0%, #2d6b7a 100%);
}

.family-plan-gradient {
  background: linear-gradient(135deg, #09394d 0%, #48cc6c 100%);
}
```

### Shadow System
```css
/* Card Shadows */
.shadow-sm { box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); }
.shadow    { box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); }
.shadow-lg { box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1); }
.shadow-xl { box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1); }

/* Brand Shadows */
.shadow-primary { box-shadow: 0 4px 15px rgba(9, 57, 77, 0.2); }
.shadow-gold    { box-shadow: 0 4px 15px rgba(212, 175, 55, 0.2); }
```

## 📱 Responsive Breakpoints

```css
/* Tailwind Breakpoints */
sm:   640px   /* Small tablets */
md:   768px   /* Tablets */
lg:   1024px  /* Small desktops */
xl:   1280px  /* Large desktops */
2xl:  1536px  /* Extra large screens */
```

### Mobile-First Design
- Always design for mobile first
- Use responsive typography scales
- Ensure touch targets are minimum 44px
- Maintain readable text sizes (minimum 16px)

## 🎭 Treatment Categories

### Medical Treatments
- **Primary Color**: Dental Green (#4a7c59)
- **Secondary Color**: Soft Blue (#7fb3d3)
- **Icon Style**: Medical/clinical icons
- **Border**: Left border in dental green

### Cosmetic Treatments
- **Primary Color**: Soft Pink (#e8c5c5)
- **Secondary Color**: Soft Lavender (#d1c4e9)
- **Icon Style**: Aesthetic/beauty icons
- **Border**: Left border in soft pink

## ♿ Accessibility Guidelines

### Color Contrast
- **Primary text**: #09394d on #FAF9F6 (AAA compliant)
- **Gold text**: #B8941F on white (AA compliant)
- **Focus indicators**: #D4AF37 with 2px outline

### Focus States
```css
*:focus-visible {
  outline: 2px solid #D4AF37;
  outline-offset: 2px;
  border-radius: 4px;
}

button:focus-visible {
  box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.2);
}
```

### Typography Accessibility
- Minimum font size: 16px for body text
- Line height: 1.6 for body text
- Font weight: 400+ for readability
- Support for `prefers-reduced-motion`

## 🔤 Letter Spacing & Text Styling

```css
/* Letter Spacing */
.tracking-brand     { letter-spacing: 0.15em; } /* Logo */
.tracking-subtitle  { letter-spacing: 0.1em; }  /* Subtitle */
.tracking-wide     { letter-spacing: 0.05em; }  /* Buttons */

/* Text Transforms */
.uppercase         { text-transform: uppercase; }
.capitalize        { text-transform: capitalize; }
```

## 🖼️ Image Guidelines

### Photography Style
- Natural lighting preferred
- Clean, modern aesthetic
- Focus on smiles and professional care
- Consistent color grading with brand palette

### Icon Usage
- Lucide React icon library
- 16px, 20px, 24px standard sizes
- Consistent stroke width (2px)
- Brand colors for theming

## 📋 Usage Examples

### Navigation
```jsx
<div className="brand-logo text-lg sm:text-xl md:text-2xl lg:text-3xl text-pear-primary">
  PEAR TREE
</div>
<div className="brand-subtitle text-xs sm:text-sm text-pear-primary mt-1">
  DENTAL
</div>
```

### Buttons
```jsx
<Button className="btn-gold text-white font-semibold">
  Join Membership
</Button>

<Button className="bg-dental-green hover:bg-dental-green/90 text-white">
  Book Appointment
</Button>
```

### Cards
```jsx
<Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-pear-primary/30">
  <CardContent className="p-6">
    {/* Content */}
  </CardContent>
</Card>
```

---

*This brand pack ensures consistent implementation across all Pear Tree Dental digital touchpoints.*
