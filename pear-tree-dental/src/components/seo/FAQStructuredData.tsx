import Script from "next/script";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQStructuredDataProps {
  faqs: FAQItem[];
  category?: string;
}

export default function FAQStructuredData({
  faqs,
  category,
}: FAQStructuredDataProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
    // Add category-specific properties
    ...(category && {
      about: {
        "@type": "MedicalProcedure",
        name: category,
      },
    }),
  };

  return (
    <Script
      id={`faq-schema-${category || "general"}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />
  );
}
