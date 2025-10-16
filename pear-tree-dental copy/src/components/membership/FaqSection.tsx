'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    id: "examination",
    question: "What's included in a dental examination?",
    answer: "A full health check of your mouth, teeth and gums, full medical, social and dental history, cancer screening of your mouth, and assessment of your jaw and bite. You'll also receive full digital X-rays and report diagnosis, treatment options & costs, and a personalised treatment plan."
  },
  {
    id: "nhs-care",
    question: "Do I still get NHS care with a membership plan?",
    answer: "Your Pear Tree Dental care plan does not cover NHS care. It's a private membership that provides specific benefits and discounts. However, you can discuss with our team if you need NHS services that aren't covered by your plan."
  },
  {
    id: "emergency-cover",
    question: "What is the worldwide dental accident & emergency cover?",
    answer: "This provides emergency benefit up to £500 per incident (up to £2000 per annum), accident cover up to £12,000 towards the cost of dental treatment as a result of an accident, hospital cash benefit of £150 per 24hrs (up to 365 days), oral cancer benefit of £3000 on diagnosis of defined oral cancer, and facial disfigurement benefit."
  },
  {
    id: "joining",
    question: "How do I join the plan?",
    answer: "Joining is simple. You can sign up online through our website, call our reception team, or visit us in person. We'll set up your direct debit payment and arrange your first appointment. The registration process takes just a few minutes."
  },
  {
    id: "plan-difference",
    question: "What's the difference between Routine Care and Complete Care?",
    answer: "The main difference is that Routine Care includes 2 dental check-ups and 1 scale & polish per year (49p per day), while Complete Care includes 2 dental check-ups and 2 scale & polishes per year (58p per day). Choose Complete Care if you prefer more frequent hygiene appointments."
  },
  {
    id: "cancellation",
    question: "Can I cancel my membership plan?",
    answer: "Yes, you can cancel your membership at any time with one month's notice. Simply contact our reception team or email us, and we'll process your cancellation. There are no cancellation fees or long-term commitments. Within the first year, any treatment savings already received will need to be paid back."
  },
  {
    id: "child-plans",
    question: "Are there plans for children?",
    answer: "Yes! Under 18s join free when a parent joins the plan. Alternatively, there's a special rate of £5.20/month for under 18s joining alone."
  },
  {
    id: "not-covered",
    question: "What isn't covered by the Pear Tree Dental Care Plan?",
    answer: "The plan does not cover referral to a specialist for any dental procedure or a referral for any specialist test such as an OPG x-ray / CT scan, or orthodontics and implants. These would incur additional costs."
  }
];

export default function FaqSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-pear-background/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about our dental membership plans.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
