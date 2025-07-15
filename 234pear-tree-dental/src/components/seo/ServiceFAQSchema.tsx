'use client';

import Script from 'next/script';

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQSchemaProps {
  serviceName: string;
  faqs: FAQItem[];
}

export default function ServiceFAQSchema({
  serviceName,
  faqs
}: ServiceFAQSchemaProps) {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq, index) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Script
      id={`faq-schema-${serviceName.replace(/\s+/g, '-').toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqData)
      }}
    />
  );
}

// Common dental service FAQs for reuse
export const commonDentalFAQs = {
  pricing: {
    question: "How much does this treatment cost?",
    answer: "Treatment costs vary depending on individual needs. We offer transparent pricing with no hidden fees, flexible payment plans, and membership discounts. Contact us for a personalized quote during your free consultation."
  },
  pain: {
    question: "Will the treatment be painful?",
    answer: "We prioritize patient comfort and use modern pain management techniques including local anesthesia when needed. Most patients experience minimal discomfort, and we provide detailed aftercare instructions to ensure a comfortable recovery."
  },
  duration: {
    question: "How long does the treatment take?",
    answer: "Treatment duration varies by complexity and individual needs. During your consultation, we'll provide a detailed timeline specific to your case, including the number of appointments required."
  },
  aftercare: {
    question: "What aftercare is required?",
    answer: "We provide comprehensive aftercare instructions and support. This typically includes specific oral hygiene guidelines, dietary recommendations, and follow-up appointments to ensure optimal healing and results."
  },
  insurance: {
    question: "Is this treatment covered by insurance or NHS?",
    answer: "Coverage varies by treatment type and your specific insurance plan. Some treatments may be available on the NHS, while others are private only. We'll help you understand your options and available payment plans during consultation."
  },
  results: {
    question: "How long do the results last?",
    answer: "Results longevity depends on the specific treatment, your oral hygiene, and lifestyle factors. We provide detailed information about expected lifespan and how to maximize the longevity of your treatment."
  }
};
