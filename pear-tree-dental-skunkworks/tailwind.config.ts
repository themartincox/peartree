import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Safelist for dynamic classes that might be purged
  safelist: [
    'bg-dental-green',
    'bg-pear-primary',
    'bg-pear-gold',
    'bg-pinky',
    'bg-pinky-fade',
    'bg-pinky-fade-soft',
    'text-dental-green',
    'text-pear-primary',
    'text-pear-gold',
    'text-pinky',
    'border-dental-green',
    'border-pear-primary',
    'border-pear-gold',
    'border-pinky',
  ],
  theme: {
    extend: {
      fontFamily: {
        'cormorant': ['var(--font-cormorant)', 'Cormorant Garamond', 'serif'],
        'montserrat': ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
      },
      colors: {
        'pear-primary': '#09394d',
        'pear-background': '#FAF9F6',
        'pear-gold': '#D4AF37',
        'pear-gold-dark': '#B8941F', // WCAG AA compliant darker gold
        'accent-gold': '#D4AF37',
        'dental-green': '#4a7c59',
        'dental-navy': '#09394d', // Same as pear-primary for consistency
        'dental-teal': '#09394d', // Same as pear-primary for navigation
        'soft-blue': '#7fb3d3',
        'soft-pink': '#e8c5c5',
        'soft-lavender': '#d1c4e9',
        'pinky': '#e8c5c5', // Base pinky color (same as soft-pink)
        'pinky-light': '#f0d5d5', // Lighter pinky for gradients
        'pinky-lavender': '#d1c4e9', // Pinky fade end color (same as soft-lavender)
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)'
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)'
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)'
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)'
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)'
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)'
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)'
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        chart: {
          '1': 'var(--chart-1)',
          '2': 'var(--chart-2)',
          '3': 'var(--chart-3)',
          '4': 'var(--chart-4)',
          '5': 'var(--chart-5)'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      backgroundImage: {
        'pinky-fade': 'linear-gradient(to right, #e8c5c5, #d1c4e9)',
        'pinky-fade-soft': 'linear-gradient(to right, #f0d5d5, #e8d5e8)',
      },
      spacing: {
        '25px': '25px', // For the 25px gap between PEAR and TREE
        '4px': '4px',   // For the 4px gap below main text
      },
      letterSpacing: {
        'brand': '0.15em', // For PEAR TREE logo
        'subtitle': '0.1em', // For DENTAL subtitle
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
