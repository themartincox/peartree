import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema from "@/components/seo/ServiceFAQSchema";
import {
  CheckCircle,
  Clock,
  Sparkles,
  Shield,
  Smile,
  Star,
  Palette,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Composite Bonding Nottingham | Same-Day Smile Enhancements | Pear Tree Dental",
  description:
    "Composite bonding treatments in Nottingham for chips, gaps and uneven edges. Same-day smile improvements delivered by the clinicians at Pear Tree Dental.",
  openGraph: {
    title: "Composite Bonding in Nottingham | Pear Tree Dental",
    description:
      "Achieve a brighter, more balanced smile with bespoke composite bonding at Pear Tree Dental. Same-day treatment for chips, worn edges and small gaps.",
    url: "https://peartree.dental/services/cosmetic-dentistry/composite-bonding",
    type: "website",
  },
  alternates: {
    canonical: "https://peartree.dental/services/cosmetic-dentistry/composite-bonding",
  },
};

const faqs = [
  {
    question: "What concerns can composite bonding fix?",
    answer:
      "Composite bonding is ideal for repairing chipped enamel, closing small gaps, reshaping tooth edges and blending away stubborn discolouration without drilling.",
  },
  {
    question: "How long does the appointment take?",
    answer:
      "Most treatments are completed in a single visit lasting 60–120 minutes depending on the number of teeth being refined.",
  },
  {
    question: "Will the results look natural?",
    answer:
      "Yes. We layer high-shine composites that are colour-matched to your natural teeth and carefully polished for a seamless finish.",
  },
  {
    question: "How long do the results last?",
    answer:
      "With regular hygiene visits and mindful care, composite bonding can look pristine for 5–8 years before simple maintenance is required.",
  },
  {
    question: "Is composite bonding reversible?",
    answer:
      "Treatment is minimally invasive. In most cases there is little or no enamel removal, so the procedure can be adjusted or refreshed in future.",
  },
];

const treatmentOptions = [
  {
    title: "Edge Refinement",
    description: "Subtle smoothing and lengthening of worn or uneven tooth edges to rebalance your smile line.",
    icon: Layers,
    price: "From £160 per tooth",
  },
  {
    title: "Gap Closure",
    description: "Precise additions of composite to close small gaps between teeth without orthodontics.",
    icon: Palette,
    price: "From £180",
  },
  {
    title: "Chip Repair",
    description: "Invisible repairs for chips and fractures using high-strength nanocomposite materials.",
    icon: Shield,
    price: "From £140",
  },
];

const benefits = [
  {
    title: "Same-Day Transformation",
    description: "Walk out with a noticeably improved smile after one appointment.",
    icon: Clock,
  },
  {
    title: "No Drilling or Injections",
    description: "Most cases require minimal preparation so treatment stays comfortable.",
    icon: Smile,
  },
  {
    title: "Beautifully Natural Finish",
    description: "Highly polished composites mimic enamel for a seamless result.",
    icon: Sparkles,
  },
  {
    title: "Strengthens Enamel",
    description: "Modern materials reinforce weakened edges while protecting underlying tooth structure.",
    icon: Shield,
  },
];

export default function CompositeBondingFallbackPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pear-background via-white to-white">
      <EnhancedServiceSchema
        serviceName="Composite Bonding"
        description="Minimally invasive cosmetic bonding to repair chips, close gaps and refine tooth edges for an immediate smile upgrade."
        price="From £140"
        category="Cosmetic Dentistry"
        duration="60-120 minutes"
        preparation="No special preparation required"
        recovery="Immediate normal function"
        benefits={benefits.map((item) => item.title)}
        risks={["May require maintenance every few years", "Can stain without regular hygiene"]}
        rating={4.8}
        reviewCount={112}
        url="https://peartree.dental/services/cosmetic-dentistry/composite-bonding"
        procedureType="Service"
      />

      <ServiceFAQSchema serviceName="Composite Bonding" faqs={faqs} />

      <section className="relative overflow-hidden bg-pear-primary/10 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="bg-white text-pear-primary uppercase tracking-[0.3em] mb-6">Cosmetic Upgrade</Badge>
          <h1 className="heading-serif text-4xl sm:text-5xl font-bold text-pear-primary mb-6">
            Composite Bonding in Nottingham
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl leading-relaxed">
            Refresh worn edges, perfect tooth proportions and restore confidence with bespoke composite bonding delivered by the Pear Tree Dental team.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/book">
              <Button size="lg" className="bg-pear-primary text-white hover:bg-pear-primary/90">
                Book a consultation
              </Button>
            </Link>
            <a href="tel:01159312935">
              <Button size="lg" variant="outline" className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white">
                Call 0115 931 2935
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-10">
            Why patients love our bonding treatments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <Card key={benefit.title} className="border-pear-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pear-primary/10 text-pear-primary">
                        <Icon className="h-6 w-6" />
                      </span>
                      <CardTitle className="text-lg text-pear-primary">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-pear-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-10">
            Treatment options tailored to your smile
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {treatmentOptions.map((option) => {
              const Icon = option.icon;
              return (
                <Card key={option.title} className="h-full border-pear-primary/20 bg-white/90 backdrop-blur">
                  <CardHeader>
                    <Badge variant="outline" className="w-max border-pear-primary/40 text-pear-primary">
                      <Icon className="mr-2 h-4 w-4" />
                      Tailored Care
                    </Badge>
                    <CardTitle className="text-2xl text-pear-primary">{option.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-gray-600">
                    <p>{option.description}</p>
                    <p className="font-semibold text-pear-primary">{option.price}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-pear-primary/20 bg-white/90 p-8 backdrop-blur">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <Badge className="bg-pear-primary text-white">Patient feedback</Badge>
                <p className="mt-4 text-2xl font-semibold text-pear-primary">
                  "My smile looks incredible – you can't see where the bonding starts or ends."
                </p>
                <p className="mt-2 text-gray-600">Gemma, Nottingham</p>
              </div>
              <div className="flex items-center gap-3 text-pear-primary">
                <Star className="h-10 w-10 fill-current" />
                <div>
                  <p className="text-3xl font-bold">4.9/5</p>
                  <p className="text-sm text-gray-600">Average bonding satisfaction rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
            Ready to plan your bonding treatment?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Our clinicians will guide you through digital smile design and create a bespoke bonding plan that complements your features.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/book">
              <Button size="lg" className="bg-pear-primary text-white hover:bg-pear-primary/90">
                Reserve your appointment
              </Button>
            </Link>
            <Link href="/services/cosmetic-dentistry">
              <Button size="lg" variant="outline" className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white">
                Explore cosmetic dentistry
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
