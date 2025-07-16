import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceNavigation from "@/components/ServiceNavigation";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import Link from "next/link";
import {
  Crown,
  Star,
  ArrowRight,
  CheckCircle,
  XCircle,
  Clock,
  Shield,
  Sparkles,
  Users,
  ChevronLeft,
  Award,
  Heart,
  Target,
  Zap,
  Layers,
  Grid,
  Smile,
  Filter,
  Grid3X3,
  DollarSign,
  Calendar,
  Wrench,
  TrendingUp,
  AlertCircle,
  Info
} from "lucide-react";
import { getTreatmentPrice } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Treatment Comparison Tool - Choose the Right Dental Solution | Pear Tree Dental",
  description: "Compare dental implants, bridges, and dentures. Interactive tool to help you choose the best tooth replacement option for your needs and budget.",
  keywords: [
    "dental treatment comparison",
    "implants vs bridges vs dentures",
    "tooth replacement options",
    "dental treatment guide Burton Joyce",
    "choose dental implants",
    "dental treatment advisor",
    "implant comparison tool"
  ],
  openGraph: {
    title: "Treatment Comparison Tool - Choose Your Best Option | Pear Tree Dental",
    description: "Interactive comparison of dental implants, bridges, and dentures to help you make the right choice.",
    type: "website",
    url: "https://peartree.dental/services/treatment-comparison"
  },
  alternates: {
    canonical: "https://peartree.dental/services/treatment-comparison"
  }
};

export default function TreatmentComparisonPage() {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'teal':
        return {
          badge: 'bg-teal-500 text-white',
          border: 'border-teal-200 hover:border-teal-300',
          text: 'text-teal-600',
          bg: 'bg-teal-50',
          button: 'bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700',
          outline: 'border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white'
        };
      case 'blue':
        return {
          badge: 'bg-blue-500 text-white',
          border: 'border-blue-200 hover:border-blue-300',
          text: 'text-blue-600',
          bg: 'bg-blue-50',
          button: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700',
          outline: 'border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white'
        };
      case 'purple':
        return {
          badge: 'bg-purple-500 text-white',
          border: 'border-purple-200 hover:border-purple-300',
          text: 'text-purple-600',
          bg: 'bg-purple-50',
          button: 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700',
          outline: 'border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white'
        };
      case 'orange':
        return {
          badge: 'bg-orange-500 text-white',
          border: 'border-orange-200 hover:border-orange-300',
          text: 'text-orange-600',
          bg: 'bg-orange-50',
          button: 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700',
          outline: 'border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white'
        };
      case 'emerald':
        return {
          badge: 'bg-emerald-500 text-white',
          border: 'border-emerald-200 hover:border-emerald-300',
          text: 'text-emerald-600',
          bg: 'bg-emerald-50',
          button: 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700',
          outline: 'border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white'
        };
      default: // gray and slate
        return {
          badge: 'bg-gray-500 text-white',
          border: 'border-gray-200 hover:border-gray-300',
          text: 'text-gray-600',
          bg: 'bg-gray-50',
          button: 'bg-gradient-to-r from-gray-500 to-gray-600 text-white hover:from-gray-600 hover:to-gray-700',
          outline: 'border-gray-500 text-gray-600 hover:bg-gray-500 hover:text-white'
        };
    }
  };

  const treatments = [
    {
      id: "single-implant",
      name: "Single Implant",
      category: "implant",
      shortDesc: "One implant for one tooth",
      price: "£2,500",
      priceValue: 2500,
      duration: "3-6 months",
      durationValue: 4.5,
      longevity: "25+ years",
      longevityValue: 25,
      function: "100%",
      functionValue: 100,
      maintenance: "Standard hygiene",
      maintenanceValue: 5,
      surgery: "Minimal",
      suitability: "Single missing tooth",
      pros: [
        "Preserves adjacent teeth",
        "Prevents bone loss",
        "Natural function",
        "Long-lasting",
        "Easy maintenance"
      ],
      cons: [
        "Higher initial cost",
        "Requires surgery",
        "Healing time needed"
      ],
      bestFor: "Missing one tooth with healthy adjacent teeth",
      url: "/services/implants/single-implant",
      color: "teal"
    },
    {
      id: "multiple-implants",
      name: "Multiple Implants",
      category: "implant",
      shortDesc: "Individual implants for multiple teeth",
      price: "£6,000+",
      priceValue: 6000,
      duration: "4-6 months",
      durationValue: 5,
      longevity: "25+ years",
      longevityValue: 25,
      function: "100%",
      functionValue: 100,
      maintenance: "Individual care",
      maintenanceValue: 5,
      surgery: "Moderate",
      suitability: "Multiple missing teeth",
      pros: [
        "Independent function",
        "Optimal bone preservation",
        "Easiest maintenance",
        "Individual replacement possible",
        "Superior longevity"
      ],
      cons: [
        "Highest cost",
        "Multiple surgical sites",
        "Extended treatment time"
      ],
      bestFor: "Multiple missing teeth in different areas",
      url: "/services/implants/multiple-implant",
      color: "blue"
    },
    {
      id: "implant-bridge",
      name: "Implant Bridge",
      category: "implant",
      shortDesc: "Connected crowns on implants",
      price: "£8,500+",
      priceValue: 8500,
      duration: "4-6 months",
      durationValue: 5,
      longevity: "15-25 years",
      longevityValue: 20,
      function: "95%",
      functionValue: 95,
      maintenance: "Special cleaning",
      maintenanceValue: 3,
      surgery: "Moderate",
      suitability: "3-6 adjacent missing teeth",
      pros: [
        "Cost-effective for multiple teeth",
        "Strong implant support",
        "Fixed solution",
        "Good aesthetics",
        "Fewer implants needed"
      ],
      cons: [
        "Connected design",
        "Special cleaning required",
        "Entire bridge replacement if issues"
      ],
      bestFor: "Multiple adjacent missing teeth",
      url: "/services/implants/implant-bridge",
      color: "purple"
    },
    {
      id: "all-on-4",
      name: "All-on-4",
      category: "implant",
      shortDesc: "Full arch on 4 implants",
      price: "£POA",
      priceValue: 15000,
      duration: "Same day teeth",
      durationValue: 0.1,
      longevity: "20+ years",
      longevityValue: 20,
      function: "90-95%",
      functionValue: 92,
      maintenance: "Bridge-style care",
      maintenanceValue: 3,
      surgery: "Extensive",
      suitability: "Full arch replacement",
      pros: [
        "Same day teeth",
        "Only 4 implants needed",
        "Often avoids bone grafting",
        "Cost-effective for full arch",
        "Immediate function"
      ],
      cons: [
        "High upfront cost",
        "Extensive surgery",
        "Special cleaning required"
      ],
      bestFor: "Most or all teeth missing in one arch",
      url: "/services/implants/all-on-4",
      color: "orange"
    },
    {
      id: "traditional-bridge",
      name: "Traditional Bridge",
      category: "bridge",
      shortDesc: "Connected crowns on natural teeth",
      price: "£2,500+",
      priceValue: 2500,
      duration: "2-3 weeks",
      durationValue: 0.5,
      longevity: "10-15 years",
      longevityValue: 12,
      function: "90%",
      functionValue: 90,
      maintenance: "Special cleaning",
      maintenanceValue: 3,
      surgery: "None",
      suitability: "1-3 missing with healthy adjacent",
      pros: [
        "No surgery required",
        "Quick treatment",
        "Lower initial cost",
        "Proven technique",
        "Good function"
      ],
      cons: [
        "Alters healthy teeth",
        "Shorter lifespan",
        "Bone loss continues",
        "Special cleaning needed"
      ],
      bestFor: "1-3 missing teeth with strong adjacent teeth",
      url: "/services/restorative/bridges",
      color: "emerald"
    },
    {
      id: "partial-denture",
      name: "Partial Denture",
      category: "denture",
      shortDesc: "Removable replacement for multiple teeth",
      price: "£750+",
      priceValue: 750,
      duration: "4-6 weeks",
      durationValue: 1,
      longevity: "5-7 years",
      longevityValue: 6,
      function: "60-70%",
      functionValue: 65,
      maintenance: "Remove daily",
      maintenanceValue: 2,
      surgery: "None",
      suitability: "Multiple missing in one area",
      pros: [
        "Most affordable option",
        "No surgery required",
        "Quick delivery",
        "Can be adjusted",
        "Reversible"
      ],
      cons: [
        "Removable",
        "Limited function",
        "Bone loss continues",
        "Regular adjustments needed",
        "May affect speech"
      ],
      bestFor: "Multiple missing teeth, limited budget",
      url: "/services/restorative/dentures",
      color: "gray"
    },
    {
      id: "complete-denture",
      name: "Complete Denture",
      category: "denture",
      shortDesc: "Full removable arch replacement",
      price: "£875+",
      priceValue: 875,
      duration: "6-8 weeks",
      durationValue: 1.5,
      longevity: "5-7 years",
      longevityValue: 6,
      function: "50-60%",
      functionValue: 55,
      maintenance: "Remove daily",
      maintenanceValue: 2,
      surgery: "None",
      suitability: "All teeth missing in arch",
      pros: [
        "Most affordable full replacement",
        "No surgery required",
        "Can be made quickly",
        "Completely reversible",
        "Supports facial structure"
      ],
      cons: [
        "Removable",
        "Significant bone loss",
        "Limited chewing ability",
        "May slip or click",
        "Regular adjustments needed"
      ],
      bestFor: "All teeth missing, budget constraints",
      url: "/services/restorative/dentures",
      color: "slate"
    }
  ];

  const comparisonFactors = [
    { key: "price", label: "Cost", icon: DollarSign, format: (value: any) => value },
    { key: "duration", label: "Treatment Time", icon: Calendar, format: (value: any) => value },
    { key: "longevity", label: "Lifespan", icon: TrendingUp, format: (value: any) => value },
    { key: "function", label: "Function", icon: Zap, format: (value: any) => value },
    { key: "maintenance", label: "Maintenance", icon: Wrench, format: (value: any) => value },
    { key: "surgery", label: "Surgery Required", icon: Target, format: (value: any) => value }
  ];

  const categories = [
    { id: "all", label: "All Options", color: "gray" },
    { id: "implant", label: "Implant Solutions", color: "blue" },
    { id: "bridge", label: "Bridge Options", color: "emerald" },
    { id: "denture", label: "Denture Solutions", color: "gray" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Treatment Comparison Tool"
        description="Interactive comparison tool for dental implants, bridges, and dentures to help patients choose the best tooth replacement option"
        price="Free consultation"
        category="Treatment Planning"
        duration="Instant comparison"
        preparation="Review your needs and preferences"
        recovery="N/A - comparison tool"
        benefits={[
          "Compare all treatment options",
          "Understand costs and benefits",
          "Make informed decisions",
          "Find best option for your needs",
          "Expert guidance included"
        ]}
        risks={[
          "Individual needs may vary",
          "Professional consultation recommended",
          "Final treatment plan may differ"
        ]}
        rating={4.9}
        reviewCount={350}
        url="https://peartree.dental/services/treatment-comparison"
        procedureType="MedicalProcedure"
      />

      {/* Breadcrumb */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/services" className="hover:text-pear-primary">Services</Link>
            <span>/</span>
            <span className="text-blue-600 font-medium">Treatment Comparison</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 mb-6">
              <Grid3X3 className="w-4 h-4 mr-2" />
              Interactive Comparison Tool
            </Badge>

            <h1 className="heading-serif text-4xl sm:text-6xl font-bold text-pear-primary leading-tight mb-6">
              Find Your Perfect
              <span className="text-blue-600 block">Dental Solution</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Compare dental implants, bridges, and dentures side-by-side.
              Our interactive tool helps you understand the benefits, costs,
              and suitability of each option for your specific needs.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">7</div>
                <div className="text-sm text-gray-600">Treatment Options</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">6</div>
                <div className="text-sm text-gray-600">Comparison Factors</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">Success Rates</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">Free</div>
                <div className="text-sm text-gray-600">Consultation</div>
              </div>
            </div>

            <Link href="/book">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold">
                Book Expert Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Comparison Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Quick Treatment Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get a quick overview of all treatment options to understand
              the key differences and identify your best candidates.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => {
              const categoryColors = getColorClasses(category.color);
              return (
                <Badge
                  key={category.id}
                  variant="outline"
                  className={`px-4 py-2 ${categoryColors.outline} cursor-pointer`}
                >
                  {category.label}
                </Badge>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {treatments.map((treatment) => {
              const colors = getColorClasses(treatment.color);
              return (
                <Card key={treatment.id} className={`hover:shadow-lg transition-all duration-300 border-2 ${colors.border}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={colors.badge}>
                        {treatment.category}
                      </Badge>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${colors.text} fill-current`} />
                        ))}
                      </div>
                    </div>
                    <CardTitle className="text-lg text-pear-primary">{treatment.name}</CardTitle>
                    <CardDescription className="text-sm">{treatment.shortDesc}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Price */}
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Cost</span>
                      <span className={`text-sm font-semibold ${colors.text}`}>{treatment.price}</span>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Treatment Time</span>
                      <span className="text-sm font-semibold">{treatment.duration}</span>
                    </div>

                    {/* Longevity */}
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Lifespan</span>
                      <span className="text-sm font-semibold">{treatment.longevity}</span>
                    </div>

                    {/* Function */}
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Function</span>
                      <span className="text-sm font-semibold">{treatment.function}</span>
                    </div>

                    {/* Best For */}
                    <div className={`${colors.bg} p-3 rounded-lg`}>
                      <span className="text-xs font-medium text-gray-700">Best for: </span>
                      <span className="text-xs text-gray-600">{treatment.bestFor}</span>
                    </div>

                    <Link href={treatment.url}>
                      <Button className={`w-full ${colors.button}`}>
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Detailed Side-by-Side Comparison
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Compare all treatments across key factors to make an informed decision
              about your tooth replacement options.
            </p>
          </div>

          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                    <tr>
                      <th className="py-4 px-6 text-left min-w-[200px]">Treatment</th>
                      <th className="py-4 px-4 text-center min-w-[120px]">Cost</th>
                      <th className="py-4 px-4 text-center min-w-[140px]">Treatment Time</th>
                      <th className="py-4 px-4 text-center min-w-[120px]">Lifespan</th>
                      <th className="py-4 px-4 text-center min-w-[100px]">Function</th>
                      <th className="py-4 px-4 text-center min-w-[140px]">Maintenance</th>
                      <th className="py-4 px-4 text-center min-w-[120px]">Surgery</th>
                      <th className="py-4 px-4 text-center min-w-[200px]">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {treatments.map((treatment, index) => (
                      <tr key={treatment.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-3">
                            <Badge className={`${getColorClasses(treatment.color).badge} text-xs`}>
                              {treatment.category.charAt(0).toUpperCase()}
                            </Badge>
                            <div>
                              <div className="font-semibold text-pear-primary">{treatment.name}</div>
                              <div className="text-sm text-gray-600">{treatment.shortDesc}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className={`${getColorClasses(treatment.color).text} font-semibold`}>{treatment.price}</div>
                        </td>
                        <td className="py-4 px-4 text-center text-gray-700">{treatment.duration}</td>
                        <td className="py-4 px-4 text-center text-gray-700">{treatment.longevity}</td>
                        <td className="py-4 px-4 text-center">
                          <div className="flex items-center justify-center space-x-1">
                            {treatment.functionValue >= 95 ? (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            ) : treatment.functionValue >= 80 ? (
                              <CheckCircle className="w-4 h-4 text-yellow-500" />
                            ) : (
                              <AlertCircle className="w-4 h-4 text-orange-500" />
                            )}
                            <span className="text-gray-700">{treatment.function}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center text-gray-700">{treatment.maintenance}</td>
                        <td className="py-4 px-4 text-center">
                          <Badge
                            variant="outline"
                            className={
                              treatment.surgery === "None" ? "text-green-600 border-green-600" :
                              treatment.surgery === "Minimal" ? "text-yellow-600 border-yellow-600" :
                              treatment.surgery === "Moderate" ? "text-orange-600 border-orange-600" :
                              "text-red-600 border-red-600"
                            }
                          >
                            {treatment.surgery}
                          </Badge>
                        </td>
                        <td className="py-4 px-4 text-center text-sm text-gray-600">{treatment.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pros and Cons Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Pros & Cons Analysis
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understand the advantages and limitations of each treatment
              option to make the best choice for your situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {treatments.map((treatment) => {
              const colors = getColorClasses(treatment.color);
              return (
                <Card key={treatment.id} className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className={colors.badge}>
                        {treatment.category}
                      </Badge>
                      <div className={`text-lg font-bold ${colors.text}`}>{treatment.price}</div>
                    </div>
                    <CardTitle className="text-lg text-pear-primary">{treatment.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col space-y-6">
                    {/* Pros */}
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Advantages
                      </h4>
                      <ul className="space-y-2">
                        {treatment.pros.map((pro, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons */}
                    <div>
                      <h4 className="font-semibold text-red-700 mb-3 flex items-center">
                        <XCircle className="w-4 h-4 mr-2" />
                        Considerations
                      </h4>
                      <ul className="space-y-2 mb-4">
                        {treatment.cons.map((con, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Spacer to push everything below to bottom */}
                    <div className="flex-1"></div>

                    {/* Suitability */}
                    <div className={`${colors.bg} p-3 rounded-lg`}>
                      <h4 className="font-medium text-gray-800 mb-1">Ideal For:</h4>
                      <p className="text-sm text-gray-600">{treatment.suitability}</p>
                    </div>

                    <Link href={treatment.url}>
                      <Button variant="outline" className={`w-full ${colors.outline}`}>
                        Explore {treatment.name}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Decision Guide */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Decision Guide
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Use this guide to narrow down your options based on your
              specific situation and priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Budget-Based Recommendations */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-pear-primary flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Budget Considerations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-700">Budget-Friendly</h4>
                  <p className="text-sm text-gray-600 mb-2">£750 - £2,500</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Partial Denture</li>
                    <li>• Complete Denture</li>
                    <li>• Traditional Bridge</li>
                  </ul>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-700">Mid-Range</h4>
                  <p className="text-sm text-gray-600 mb-2">£2,500 - £8,500</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Single Implant</li>
                    <li>• Multiple Implants</li>
                  </ul>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-blue-700">Premium</h4>
                  <p className="text-sm text-gray-600 mb-2">£8,500+</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Implant Bridge</li>
                    <li>• All-on-4</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Timeline-Based Recommendations */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-pear-primary flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Timeline Priorities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-700">Immediate Need</h4>
                  <p className="text-sm text-gray-600 mb-2">Same day to 6 weeks</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• All-on-4 (same day)</li>
                    <li>• Traditional Bridge</li>
                    <li>• Dentures</li>
                  </ul>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-700">Standard Timeline</h4>
                  <p className="text-sm text-gray-600 mb-2">3-6 months</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Single Implant</li>
                    <li>• Multiple Implants</li>
                    <li>• Implant Bridge</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Longevity-Based Recommendations */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-pear-primary flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Long-term Value
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-700">Best Longevity</h4>
                  <p className="text-sm text-gray-600 mb-2">20-25+ years</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Single Implant</li>
                    <li>• Multiple Implants</li>
                    <li>• All-on-4</li>
                  </ul>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-700">Good Longevity</h4>
                  <p className="text-sm text-gray-600 mb-2">10-20 years</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Implant Bridge</li>
                    <li>• Traditional Bridge</li>
                  </ul>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-orange-700">Regular Replacement</h4>
                  <p className="text-sm text-gray-600 mb-2">5-7 years</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Partial Denture</li>
                    <li>• Complete Denture</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expert Recommendation CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <div className="absolute top-4 right-4">
                <Info className="w-12 h-12 text-white/20" />
              </div>

              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Still Unsure? Get Expert Guidance
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Every situation is unique. Book a free consultation with our dental experts
                to get personalized recommendations based on your specific needs, budget, and goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/book">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 font-semibold">
                    Book Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:01159312935">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 font-semibold">
                    Call 0115 931 2935
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/80">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Expert Assessment</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Personalized Plan</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>No Obligation</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Navigation */}
      <ServiceNavigation />
    </div>
  );
}
