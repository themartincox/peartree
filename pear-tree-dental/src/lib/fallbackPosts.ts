// lib/fallbackPosts.ts
export type BlogPost = {
  slug: string;
  title: string;
  excerpt?: string;
  image?: string; // You can point to local /public images if desired
  date?: string;
};

// Keep 24+ evergreen items here.
// We’ll render only the first 6 on fallback (2 rows × 3).
export const FALLBACK_POSTS: BlogPost[] = [
  {
    slug: "how-to-choose-a-dentist",
    title: "How to Choose a Dentist: A Practical Checklist",
    excerpt: "Simple steps to evaluate experience, reviews, travel time, and services.",
    image: "/images/blog/choose-dentist.jpg",
  },
  {
    slug: "teeth-whitening-basics",
    title: "Teeth Whitening Basics: Safety, Options, and Results",
    excerpt: "Understand at-home vs. in-practice whitening and what results to expect.",
    image: "/images/blog/teeth-whitening-basics.jpg",
  },
  {
    slug: "dental-checkup-intervals",
    title: "How Often Should You See a Dentist?",
    excerpt: "Recommended checkup intervals and when to come in sooner.",
    image: "/images/blog/checkup-intervals.jpg",
  },
  {
    slug: "gum-health-guide",
    title: "A Friendly Guide to Gum Health",
    excerpt: "Spot the signs of gum disease early and keep your gums in great shape.",
    image: "/images/blog/gum-health.jpg",
  },
  {
    slug: "kids-first-dentist-visit",
    title: "Your Child’s First Dentist Visit: What to Expect",
    excerpt: "Tips to make the first trip easy, positive, and routine.",
    image: "/images/blog/kids-first-visit.jpg",
  },
  {
    slug: "dental-hygiene-mistakes",
    title: "Common Dental Hygiene Mistakes (and Easy Fixes)",
    excerpt: "From brushing too hard to skipping interdental cleaning—quick wins.",
    image: "/images/blog/hygiene-mistakes.jpg",
  },
  // --- Add as many as you like; below are quick stubs to reach 24 ---
  { slug: "sensitive-teeth-tips", title: "Sensitive Teeth? Causes and Calming Tips" },
  { slug: "electric-vs-manual", title: "Electric vs Manual Toothbrush: Which Wins?" },
  { slug: "mouthwash-myths", title: "Mouthwash Myths: What Actually Helps" },
  { slug: "floss-like-a-pro", title: "How to Floss Like a Pro" },
  { slug: "coffee-tea-stains", title: "Coffee & Tea Stains: Prevention and Care" },
  { slug: "nightguards-101", title: "Nightguards 101: Bruxism Relief Basics" },
  { slug: "diet-dental-health", title: "Diet and Dental Health: Smart Swaps" },
  { slug: "implants-overview", title: "Dental Implants: A Straightforward Overview" },
  { slug: "invisalign-overview", title: "Clear Aligners: What to Expect" },
  { slug: "composite-bonding-faq", title: "Composite Bonding: FAQs and Benefits" },
  { slug: "root-canal-reality", title: "Root Canal Reality: Comfort and Outcomes" },
  { slug: "dental-anxiety-help", title: "Dental Anxiety? Ways We Can Help" },
  { slug: "pregnancy-dental-care", title: "Dental Care During Pregnancy" },
  { slug: "dry-mouth-fixes", title: "Dry Mouth: Causes and Fixes" },
  { slug: "bad-breath-guide", title: "Bad Breath: A Practical Guide" },
  { slug: "retainers-care", title: "Retainers: Care and Common Issues" },
  { slug: "sports-mouthguards", title: "Sports Mouthguards: Protection That Fits" },
];