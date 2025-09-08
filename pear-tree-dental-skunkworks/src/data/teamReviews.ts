interface Testimonial {
  id: string;
  imagePath: string;
  alt: string;
  rating: number;
  platform: "Google" | "Facebook" | "Trustpilot";
  verified: boolean;
}

export const teamReviews: Record<string, Testimonial[]> = {
  "Javaad Mirza": [
    {
      id: "javaad-1",
      imagePath: "/images/testimonials/testimonial-pear-tree-dental-javaad1.png",
      alt: "Patient testimonial about Dr. Javaad Mirza's excellent dental care and professional service",
      rating: 5,
      platform: "Google",
      verified: true
    },
    {
      id: "javaad-2",
      imagePath: "/images/testimonials/testimonial-pear-tree-dental-javaad2.png",
      alt: "Patient review highlighting Dr. Javaad Mirza's expertise and gentle approach to dental treatment",
      rating: 5,
      platform: "Google",
      verified: true
    }
  ],

  "Imrana Ishaque": [
    {
      id: "imrana-1",
      imagePath: "/images/testimonials/testimonial-pear-tree-dental-imrana1.png",
      alt: "Patient testimonial about Dr. Imrana Ishaque's exceptional cosmetic dentistry and aesthetic treatments",
      rating: 5,
      platform: "Google",
      verified: true
    },
    {
      id: "imrana-2",
      imagePath: "/images/testimonials/testimonial-pear-tree-dental-imrana2.png",
      alt: "Patient review praising Dr. Imrana Ishaque's skill in restorative dentistry and patient care",
      rating: 5,
      platform: "Google",
      verified: true
    }
  ],

  "Janet Kerr": [
    {
      id: "janet-1",
      imagePath: "/images/testimonials/testimonial-pear-tree-dental-janet1.png",
      alt: "Patient testimonial about Dr. Janet Kerr's gentle approach and excellent dental care",
      rating: 5,
      platform: "Google",
      verified: true
    }
  ],

  "Gavin Goh": [
    {
      id: "gavin-1",
      imagePath: "/images/testimonials/testimonial-pear-tree-dental-gavin1.png",
      alt: "Patient review highlighting Dr. Gavin Goh's preventive care expertise and professional service",
      rating: 5,
      platform: "Google",
      verified: true
    }
  ],

  "Support Team": [
    {
      id: "support-jade-1",
      imagePath: "/images/testimonials/testimonial-pear-tree-dental-jade1.png",
      alt: "Patient testimonial about Jade and the dental therapy services at Pear Tree Dental",
      rating: 5,
      platform: "Google",
      verified: true
    },
    {
      id: "support-jade-2",
      imagePath: "/images/testimonials/testimonial-pear-tree-dental-jade2.png",
      alt: "Patient review praising Jade's professional dental therapy and oral health expertise",
      rating: 5,
      platform: "Google",
      verified: true
    },
    {
      id: "support-practice-1",
      imagePath: "/images/testimonials/testimonial-pear-tree-dental-practice1.png",
      alt: "Patient testimonial about the overall excellent service at Pear Tree Dental practice",
      rating: 5,
      platform: "Google",
      verified: true
    },
    {
      id: "support-practice-2",
      imagePath: "/images/testimonials/testimonial-pear-tree-dental-practice2.png",
      alt: "Patient review highlighting the professional support team and practice management",
      rating: 5,
      platform: "Google",
      verified: true
    },
    {
      id: "support-practice-star",
      imagePath: "/images/testimonials/testimonial-pear-tree-dental-practice-star.png",
      alt: "Five-star patient testimonial about the exceptional care at Pear Tree Dental",
      rating: 5,
      platform: "Google",
      verified: true
    }
  ]
};
