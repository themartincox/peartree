"use client";

import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const examinationItems = [
  "A full health check of your mouth, teeth and gums",
  "Full medical, social and dental history",
  "Cancer screening of your mouth",
  "Assessment of your jaw and bite",
  "Full Digital X-rays and report diagnosis",
  "Treatment options & costs",
  "Personalised treatment plan – bespoke to you!",
];

export default function ExaminationSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-pear-background to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-4">
              What is a{" "}
              <span className="text-pear-primary">Dental Examination</span>?
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Our comprehensive dental examinations are much more than just a
              quick check-up. They're a thorough assessment of your oral health
              designed to catch potential issues early and help you maintain a
              healthy smile for life.
            </p>

            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {examinationItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-pear-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-pear-primary to-pear-gold rounded-2xl -rotate-2 transform" />
            <div className="relative bg-white p-6 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-pear-primary">
                    Full Digital X-rays
                  </h3>
                  <p className="text-sm text-gray-600">
                    Modern, low-radiation digital X-rays allow us to see what's
                    happening beneath the surface, detecting issues like decay,
                    bone loss, and abnormalities that aren't visible to the
                    naked eye.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-pear-primary">
                    Oral Cancer Screening
                  </h3>
                  <p className="text-sm text-gray-600">
                    Early detection of oral cancer significantly improves
                    treatment outcomes. Our thorough examination includes
                    checking the tissues of your mouth, tongue, and throat for
                    any suspicious changes.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-pear-primary">
                    Personalized Treatment Plan
                  </h3>
                  <p className="text-sm text-gray-600">
                    Based on your examination findings, we'll create a
                    customized treatment plan that addresses your specific needs
                    and goals for your smile. We'll explain all options and
                    costs clearly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
