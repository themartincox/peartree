import type { Metadata } from "next";
import dynamicImport from "next/dynamic";
import Link from "next/link";
import { practiceInfo } from "@/data/practiceInfo";
import BeforeAfterSliderPair from "@/components/BeforeAfterSliderPair";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  CalendarDays,
  CheckCircle,
  Shield,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

const PWAInstall = dynamicImport(() => import("@/components/PWAInstall"));

export const metadata: Metadata = {
  title: "Teeth Whitening Nottingham | Expert Dentist-Led Whitening | Pear Tree Dental",
  description:
    "Safe, dentist-led teeth whitening in Nottingham. Enlighten Evolution 3 and Boutique whitening with custom trays, sensitivity-aware protocols, and lasting results. Book your consultation today.",
  keywords: [
    "teeth whitening Nottingham",
    "dentist-led whitening Nottingham",
    "Enlighten Evolution 3 Nottingham",
    "Boutique teeth whitening Nottingham",
    "cosmetic dentistry Nottingham",
  ],
  alternates: {
    canonical: "https://peartree.dental/nottingham-teeth-whitening",
  },
  openGraph: {
    title: "Teeth Whitening Nottingham | Expert Dentist-Led Whitening | Pear Tree Dental",
    description:
      "Transform your smile with Enlighten Evolution 3 and Boutique whitening at Pear Tree Dental in Nottingham. Safe, predictable and sensitivity-aware.",
    url: "https://peartree.dental/nottingham-teeth-whitening",
  },
};

const { address, contact, name: practiceName } = practiceInfo;
const phoneHref = `tel:${contact.phone.replace(/\s+/g, "")}`;
const emailHref = `mailto:${contact.email}`;
const phoneDigits = contact.phone.replace(/\D/g, "");
const structuredTelephone = phoneDigits.startsWith("0")
  ? `+44${phoneDigits.slice(1)}`
  : `+${phoneDigits}`;

const sliderPairs = [
  {
    primarySlider: {
      beforeImage: "/images/before-after/whitening-enlighten-composite-edge-bonding-before.webp",
      afterImage: "/images/before-after/whitening-enlighten-composite-edge-bonding-after.webp",
      beforeAlt: "Teeth before Enlighten Evolution whitening at Pear Tree Dental",
      afterAlt: "Teeth after Enlighten Evolution whitening at Pear Tree Dental",
      title: "Enlighten + Composite Refinement",
      description: "14-day at-home whitening with an in-practice finish for even brightness.",
      treatmentType: "Enlighten Evolution 3",
    },
    secondarySlider: {
      beforeImage: "/images/before-after/orthodontics-invisalign-whitening-enlighten-before.webp",
      afterImage: "/images/before-after/orthodontics-invisalign-whitening-enlighten-after.webp",
      beforeAlt: "Smile before Invisalign and Enlighten whitening at Pear Tree Dental",
      afterAlt: "Smile after Invisalign and Enlighten whitening at Pear Tree Dental",
      title: "Orthodontics & Whitening",
      description: "Aligner therapy combined with Enlighten whitening for a confident smile zone.",
      treatmentType: "Whitening & Aligners",
    },
  },
  {
    primarySlider: {
      beforeImage: "/images/before-after/orthondontics-invisalign-whitening-boutique-composite-bonding-before.webp",
      afterImage: "/images/before-after/orthondontics-invisalign-whitening-boutique-composite-bonding-after.webp",
      beforeAlt: "Before Boutique whitening and composite bonding transformation",
      afterAlt: "After Boutique whitening and composite bonding transformation",
      title: "Boutique Whitening Journey",
      description: "Night-time Boutique plan supporting a composite bonding makeover.",
      treatmentType: "Boutique Whitening",
    },
    secondarySlider: {
      beforeImage: "/images/before-after/whitening-composite-edge-bonding-before.webp",
      afterImage: "/images/before-after/whitening-composite-edge-bonding-after.webp",
      beforeAlt: "Before teeth whitening and edge bonding at Pear Tree Dental",
      afterAlt: "After teeth whitening and edge bonding at Pear Tree Dental",
      title: "Edge Bonding & Whitening",
      description: "Gentle whitening and edge refinement to restore symmetry.",
      treatmentType: "Cosmetic Bonding",
    },
  },
];

const featuredReviews: Array<{ name: string; comment: string }> = [
  {
    name: "David Higgins",
    comment:
      "Lovely experience with friendly staff, ten out of ten. You have transformed my teeth and my smile. Thank you Javaad and the Pear Tree team!",
  },
  {
    name: "Victoria Willis",
    comment:
      "I’ve been coming here for just over 13 years. Everyone at the surgery is wonderful, especially Javaad who is always patient and kind. I have lost the fear of visiting the dentist.",
  },
  {
    name: "John Meharg",
    comment:
      "My dentist was very gentle and the treatment was pain free. I felt completely looked after throughout my visit.",
  },
];

export default function NottinghamTeethWhiteningPage() {
  return (
    <div className="bg-white text-dental-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "@id": "https://peartree.dental/nottingham-teeth-whitening",
            name: `${practiceName} Teeth Whitening`,
            image: "https://peartree.dental/images/heroes/whitening/Whitening-hero-image.png",
            description:
              "Dentist-led teeth whitening in Nottingham using Enlighten Evolution 3 and Boutique whitening systems.",
            url: "https://peartree.dental/nottingham-teeth-whitening",
            telephone: structuredTelephone,
            address: {
              "@type": "PostalAddress",
              streetAddress: address.street,
              addressLocality: address.city,
              addressRegion: address.county,
              postalCode: address.postcode,
              addressCountry: "GB",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: address.gps.latitude,
              longitude: address.gps.longitude,
            },
            medicalSpecialty: "Cosmetic Dentistry",
            serviceArea: {
              "@type": "City",
              name: "Nottingham",
            },
            openingHoursSpecification: practiceInfo.openingHours
              .filter((day) => day.isOpen)
              .map((day) => ({
                "@type": "OpeningHoursSpecification",
                dayOfWeek: day.day,
                opens: day.hours.split(" - ")[0],
                closes: day.hours.split(" - ")[1],
              })),
            sameAs: ["https://g.page/r/CWqgP_bGYz2iEBM"],
            offers: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "MedicalProcedure",
                  name: "Enlighten Evolution 3 Teeth Whitening",
                  description:
                    "Premium whitening protocol combining at-home and in-practice visits with minimal sensitivity.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "MedicalProcedure",
                  name: "Boutique Teeth Whitening",
                  description:
                    "Flexible day or night whitening system tailored to your lifestyle.",
                },
              },
            ],
          }),
        }}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-dental-navy via-dental-navy/95 to-emerald-900/60 py-20 text-white lg:py-28">
        <div className="absolute inset-0 bg-[url('/images/heroes/whitening/Whitening-hero-image.png')] bg-cover bg-center opacity-10 mix-blend-soft-light" />
        <div className="absolute inset-0 bg-dental-navy/80" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex justify-center">
              <Sparkles className="h-14 w-14 text-pear-gold" />
            </div>
            <h1 className="heading-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Transform Your Smile with Teeth Whitening in Nottingham
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
              Unlock a brighter future with safe, dentist-led whitening at {practiceName}. Our
              Enlighten Evolution 3 and Boutique systems deliver predictable results with comfort in
              mind.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-pear-gold px-8 py-4 text-dental-navy hover:bg-pear-gold/90"
              >
                <Link href={phoneHref}>Call {contact.phone} to book</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white px-8 py-4 text-white hover:bg-white/10"
              >
                <Link href="/book">Book online</Link>
              </Button>
            </div>
            <div className="mt-6 flex justify-center">
              <PWAInstall
                className="w-full max-w-sm"
                buttonText="Install Pear Tree Dental"
                dense
              />
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-pear-gold">
                  Dentist-led care
                </p>
                <p className="mt-2 text-sm text-white/75">
                  GDC-registered clinicians plan every whitening journey.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-pear-gold">
                  Sensitivity aware
                </p>
                <p className="mt-2 text-sm text-white/75">
                  Custom trays and desensitising support keep you comfortable.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-pear-gold">
                  Long-lasting results
                </p>
                <p className="mt-2 text-sm text-white/75">
                  Personalised top-up plans make it easy to maintain your new shade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="heading-serif text-3xl font-bold text-soft-pink sm:text-4xl">
              Why Teeth Whitening Matters
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A brighter smile helps you feel confident in photos, at work, on stage, or when
              celebrating big moments. Dentist-led whitening gives you the assurance that every step
              is clinically overseen.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Noticeable results",
                detail:
                  "Lift deep-set stains from coffee, tea, red wine, and everyday life with tailored whitening gels.",
              },
              {
                title: "Safe, regulated treatment",
                detail:
                  "Custom-fitted trays and professionally prescribed gels keep your teeth and gums protected.",
              },
              {
                title: "Personalised plans",
                detail:
                  "Choose day or night wear schedules and sensitivity-aware protocols that suit your lifestyle.",
              },
              {
                title: "Lasting brightness",
                detail:
                  "Top-up guidance helps you maintain your new shade for 12–36 months depending on habits.",
              },
            ].map((item) => (
              <Card key={item.title} className="border-soft-pink/20 bg-white shadow-sm">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="rounded-xl bg-soft-pink/10 p-2 text-soft-pink">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-soft-pink">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="heading-serif text-3xl font-bold text-soft-pink sm:text-4xl">
              Real Patients. Life-Changing Results
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore genuine smile makeovers that combine whitening with aligners, bonding, and
              precision finishing. Slide to compare each transformation.
            </p>
          </div>

          <div className="mt-12 space-y-16">
            {sliderPairs.map((pair, idx) => (
              <BeforeAfterSliderPair
                key={`slider-pair-${idx}`}
                primarySlider={pair.primarySlider}
                secondarySlider={pair.secondarySlider}
                sliderAspectClass="aspect-[4/3]"
                sliderContainerClass="mx-auto max-w-[320px] sm:max-w-[360px] md:max-w-[420px]"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="heading-serif text-3xl font-bold text-soft-pink sm:text-4xl">
              Our Professional Whitening Systems
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Every whitening plan begins with a full oral health assessment. From there we recommend
              Enlighten Evolution 3 or Boutique Whitening, tailoring your routine to sensitivity,
              timeline, and lifestyle.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Card className="h-full border-soft-pink/20 bg-white shadow-md">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="heading-serif text-2xl text-soft-pink">
                      Enlighten Evolution 3
                    </CardTitle>
                    <p className="mt-2 text-gray-600">
                      Premium system designed for predictable, natural-looking brightness with minimal
                      sensitivity.
                    </p>
                  </div>
                  <Award className="h-10 w-10 text-pear-gold" />
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-dental-navy">How it works</h3>
                  <ul className="mt-3 space-y-2 text-gray-600">
                    <li>Consultation, shade mapping, and oral health check.</li>
                    <li>Precision-made trays from digital scans or impressions.</li>
                    <li>2–3 week home phase with Enlighten gels.</li>
                    <li>Final in-practice appointment to refine comfort and shade.</li>
                    <li>Aftercare support with sensitivity advice and top-up guidance.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dental-navy">What to expect</h3>
                  <ul className="mt-3 space-y-2 text-gray-600">
                    <li>Natural, even brightness across the full smile zone.</li>
                    <li>Sensitivity-aware routine with personalised coaching.</li>
                    <li>Clear plan for maintaining your results long-term.</li>
                  </ul>
                </div>
                <p className="rounded-xl bg-soft-pink/10 p-4 text-sm text-soft-pink">
                  Results vary per person. We’ll recommend the safest, most effective protocol for you
                  at your consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full border-soft-pink/20 bg-white shadow-md">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="heading-serif text-2xl text-soft-pink">
                      Boutique Whitening
                    </CardTitle>
                    <p className="mt-2 text-gray-600">
                      Flexible day or night system that fits your routine while delivering consistent
                      results.
                    </p>
                  </div>
                  <Shield className="h-10 w-10 text-pear-gold" />
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-dental-navy">Your options</h3>
                  <ul className="mt-3 space-y-2 text-gray-600">
                    <li>
                      Boutique By Day – short daytime wear with higher concentration gels.
                    </li>
                    <li>
                      Boutique By Night – overnight wear with gentle gels that work while you sleep.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dental-navy">Typical pathway</h3>
                  <ul className="mt-3 space-y-2 text-gray-600">
                    <li>Assessment plus impressions or scans for custom trays.</li>
                    <li>Tray fitting, gel dosage coaching, and sensitivity tips.</li>
                    <li>1–2 week home course tailored to your targets.</li>
                    <li>Review visit to check shade, comfort, and maintenance plan.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dental-navy">Why patients choose Boutique</h3>
                  <ul className="mt-3 space-y-2 text-gray-600">
                    <li>Lifestyle-friendly wear times with professional oversight.</li>
                    <li>Natural, even results when used as directed.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="pink-haze py-16 text-white sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="heading-serif text-3xl font-bold text-white sm:text-4xl">
              Why Choose {practiceName}?
            </h2>
            <p className="mt-4 text-lg text-white/75">
              From your first consultation to long-term maintenance, our whitening clinicians keep
              safety, comfort, and predictable results at the centre of your care.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Certified experts",
                detail:
                  "GDC-registered clinicians with advanced cosmetic training oversee every whitening journey.",
                icon: <Award className="h-6 w-6 text-pear-gold" />,
              },
              {
                title: "Safe techniques",
                detail:
                  "Full dental health check, custom trays, and regulated gels protect your smile.",
                icon: <Shield className="h-6 w-6 text-pear-gold" />,
              },
              {
                title: "Personal guidance",
                detail:
                  "Sensitivity-aware protocols and tailored aftercare keep you comfortable long after treatment.",
                icon: <Users className="h-6 w-6 text-pear-gold" />,
              },
              {
                title: "Transparent timelines",
                detail:
                  "Understand how long treatment will take and what to expect at each visit.",
                icon: <CalendarDays className="h-6 w-6 text-pear-gold" />,
              },
              {
                title: "Regulation compliant",
                detail:
                  "Whitening is provided for adults 18+ and follows all current UK dental regulations.",
                icon: <Shield className="h-6 w-6 text-pear-gold" />,
              },
              {
                title: "Integrated care",
                detail:
                  "We can combine whitening with hygiene, orthodontics, or bonding for complete smile makeovers.",
                icon: <CheckCircle className="h-6 w-6 text-pear-gold" />,
              },
            ].map((item) => (
              <Card key={item.title} className="border-white/10 bg-white/10">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="rounded-2xl bg-white/10 p-2">{item.icon}</div>
                  <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="heading-serif text-3xl font-bold text-soft-pink sm:text-4xl">
              Your Personalised Whitening Journey
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Every patient starts with a consultation so we can tailor your whitening plan and make
              sure your smile stays healthy at every step.
            </p>
          </div>

          <div className="mt-12 space-y-10">
            {[
              {
                step: "Initial consultation",
                detail:
                  "Comprehensive oral health assessment, shade analysis, and clear explanation of whitening options, timelines, and fees.",
              },
              {
                step: "Preparation & treatment",
                detail:
                  "Any hygiene or restorative care comes first. We take precise impressions or scans, supply custom trays, and walk you through your Enlighten or Boutique protocol.",
              },
              {
                step: "Follow-up & maintenance",
                detail:
                  "Review appointment to track shade changes, refresh comfort advice, and plan top-up gel use and lifestyle habits for long-term brightness.",
              },
            ].map((item, index) => (
              <div key={item.step} className="flex flex-col gap-4 rounded-2xl border border-soft-pink/20 bg-white p-6 shadow-sm md:flex-row md:items-start md:gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-soft-pink text-lg font-semibold text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-soft-pink">{item.step}</h3>
                  <p className="mt-3 text-gray-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {featuredReviews.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
            <h2 className="heading-serif text-3xl font-bold text-soft-pink sm:text-4xl">
              Loved by Nottingham Patients
            </h2>
              <p className="mt-4 text-lg text-gray-600">
                Real Google reviews from patients who trust {practiceName} with their smiles.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {featuredReviews.map((review) => (
                <Card key={review.name} className="border-soft-pink/20 bg-slate-50">
                  <CardHeader className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-pear-gold" />
                      <Star className="h-5 w-5 text-pear-gold" />
                      <Star className="h-5 w-5 text-pear-gold" />
                      <Star className="h-5 w-5 text-pear-gold" />
                      <Star className="h-5 w-5 text-pear-gold" />
                    </div>
                    <CardTitle className="text-lg text-soft-pink">{review.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-slate-100 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="heading-serif text-3xl font-bold text-soft-pink sm:text-4xl">
              Teeth Whitening FAQs
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Got a question about whitening? Here are answers to the topics we cover most often in
              the practice.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                question: "Is teeth whitening safe?",
                answer:
                  "Yes—when it is prescribed and overseen by a dental professional. We use regulated gels and custom trays to protect your teeth and gums throughout treatment.",
              },
              {
                question: "How long do results last?",
                answer:
                  "With good oral care and occasional top-ups, many patients enjoy a brighter smile for 12–36 months. Lifestyle habits such as coffee, tea, red wine, and smoking influence longevity.",
              },
              {
                question: "Will whitening work on crowns, veneers or fillings?",
                answer:
                  "Whitening gels do not change the colour of existing restorations. We plan your course around them and can discuss refreshing visible restorations after whitening if needed.",
              },
              {
                question: "How white will my teeth go?",
                answer:
                  "Everyone whitens differently. Our goal is a healthy, natural shade that complements your complexion and looks brilliant in real life.",
              },
              {
                question: "How long does treatment take?",
                answer:
                  "Most at-home courses take between 1–3 weeks, with a brief in-practice visit if your plan includes one. We walk you through every step before you begin.",
              },
              {
                question: "What about sensitivity?",
                answer:
                  "Some patients notice temporary sensitivity. We tailor your protocol, provide guidance, and can recommend desensitising solutions to keep you comfortable.",
              },
              {
                question: "Is over-the-counter whitening the same?",
                answer:
                  "No. Shop-bought kits are not custom-fitted and use different formulations. Dentist-supervised whitening is safer, more predictable, and tailored to you.",
              },
            ].map((item) => (
              <Card key={item.question} className="border-soft-pink/20 bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-soft-pink">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dental-navy py-16 text-white sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="heading-serif text-3xl font-bold sm:text-4xl">
              Ready to brighten your smile?
            </h2>
            <p className="mt-4 text-lg text-white/75">
              Book a consultation and we’ll recommend the safest, most effective whitening plan for
              your goals.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-pear-gold text-dental-navy hover:bg-pear-gold/90">
                <Link href={phoneHref}>Call {contact.phone}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href={emailHref}>Email {contact.email}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/book">Book online</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/60">
              {address.full}. Free parking available opposite the practice.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
