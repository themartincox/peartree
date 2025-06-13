import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  Users,
  Building2,
  Phone,
  UserPlus,
  Crown,
  Shield,
  Sparkles,
  ShieldCheck,
  Zap,
  Smile,
  AlertTriangle,
  Star,
  FileText,
  Scale,
  MessageSquare
} from "lucide-react";

export const metadata: Metadata = {
  title: "Site Map | Pear Tree Dental - Complete Website Navigation",
  description: "Navigate our complete website with this comprehensive site map. Find all our dental services, information pages, and resources easily.",
  keywords: "sitemap, website navigation, dental services, Pear Tree Dental pages",
};

const siteStructure = [
  {
    category: "Main Pages",
    icon: Home,
    color: "pear-primary",
    pages: [
      { name: "Homepage", href: "/", description: "Welcome to Pear Tree Dental" },
      { name: "Contact Us", href: "/contact", description: "Get in touch with our practice" },
      { name: "New Patients", href: "/new-patients", description: "Information for new patients" },
      { name: "Membership Plans", href: "/membership", description: "Affordable dental care plans" },
    ]
  },
  {
    category: "About Us",
    icon: Users,
    color: "pear-gold",
    pages: [
      { name: "Our Team", href: "/about/team", description: "Meet our dental professionals" },
      { name: "Our Practice", href: "/about/practice", description: "Modern facilities in Burton Joyce" },
    ]
  },
  {
    category: "Dental Service Categories",
    icon: Shield,
    color: "dental-green",
    pages: [
      { name: "General Dentistry", href: "/services/general", description: "Routine dental care and check-ups" },
      { name: "Cosmetic Dentistry", href: "/services/cosmetic", description: "Smile enhancement treatments" },
      { name: "Restorative Dentistry", href: "/services/restorative", description: "Repair and restore damaged teeth" },
      { name: "Dental Implants", href: "/services/implants", description: "Permanent tooth replacement" },
      { name: "Orthodontics", href: "/services/orthodontics", description: "Invisalign and teeth straightening" },
      { name: "Emergency Dentistry", href: "/services/emergency", description: "Urgent dental care" },
    ]
  },
  {
    category: "Specific Treatments",
    icon: Sparkles,
    color: "pear-gold",
    pages: [
      { name: "Check-ups & Cleaning", href: "/services/check-ups-cleaning", description: "Preventive dental care and hygiene" },
      { name: "Dental Fillings", href: "/services/dental-fillings", description: "Tooth-colored composite fillings" },
      { name: "Tooth Extractions", href: "/services/tooth-extractions", description: "Safe and comfortable tooth removal" },
      { name: "Root Canal Treatment", href: "/services/root-canal", description: "Save infected or damaged teeth" },
      { name: "Teeth Whitening", href: "/services/teeth-whitening", description: "Professional smile brightening" },
      { name: "Composite Bonding", href: "/services/composite-bonding", description: "Repair chips and gaps" },
      { name: "Dental Veneers", href: "/services/veneers", description: "Porcelain and composite veneers" },
      { name: "Smile Makeover", href: "/services/smile-makeover", description: "Complete smile transformation" },
      { name: "Dental Abscess Treatment", href: "/services/dental-abscess", description: "Emergency infection treatment" },
      { name: "Dental Trauma Care", href: "/services/dental-trauma", description: "Emergency accident treatment" },
      { name: "Smile Design", href: "/smile-design", description: "Complete smile design service" },
    ]
  },
  {
    category: "Competitive Analysis",
    icon: Star,
    color: "soft-pink",
    pages: [
      { name: "The Dental Suite Reviews", href: "/dental-suite-reviews", description: "Patient reviews and analysis" },
      { name: "The Dental Suite Alternative", href: "/dental-suite-alternative", description: "Why choose Pear Tree Dental" },
      { name: "Sherwood Dental Care Reviews", href: "/sherwood-dental-care-reviews", description: "Patient feedback analysis" },
      { name: "Sherwood Dental Care Alternative", href: "/sherwood-dental-care-alternative", description: "Better dental care option" },
      { name: "Hilton Dental Clinic Reviews", href: "/hilton-dental-clinic-reviews", description: "Review analysis" },
      { name: "Hilton Dental Clinic Alternative", href: "/hilton-dental-clinic-alternative", description: "Choose Pear Tree Dental" },
      { name: "Park Dental Care Reviews", href: "/park-dental-care-reviews", description: "Patient experience analysis" },
      { name: "Park Dental Care Alternative", href: "/park-dental-care-alternative", description: "Superior dental care" },
    ]
  },
  {
    category: "Local Competitors",
    icon: Building2,
    color: "soft-lavender",
    pages: [
      { name: "City Dental Nottingham Reviews", href: "/city-dental-nottingham-reviews", description: "Patient review analysis" },
      { name: "City Dental Nottingham Alternative", href: "/city-dental-nottingham-alternative", description: "Better choice in Nottingham" },
      { name: "Westdale Dental Reviews", href: "/westdale-dental-reviews", description: "Patient feedback review" },
      { name: "Westdale Dental Alternative", href: "/westdale-dental-alternative", description: "Choose Pear Tree instead" },
      { name: "Market Street Dental Care Reviews", href: "/market-street-dental-care-reviews", description: "Review comparison" },
      { name: "Market Street Dental Care Alternative", href: "/market-street-dental-care-alternative", description: "Better dental option" },
      { name: "Impressions Dental Care Reviews", href: "/impressions-dental-care-reviews", description: "Patient experience analysis" },
      { name: "Impressions Dental Care Alternative", href: "/impressions-dental-care-alternative", description: "Superior alternative" },
    ]
  },
  {
    category: "Regional Competitors",
    icon: Sparkles,
    color: "pear-primary",
    pages: [
      { name: "Dental Health Centre Nottingham Reviews", href: "/dental-health-centre-nottingham-reviews", description: "Review analysis" },
      { name: "Dental Health Centre Nottingham Alternative", href: "/dental-health-centre-nottingham-alternative", description: "Better dental care choice" },
      { name: "Mapperley Dental Practice Reviews", href: "/mapperley-dental-practice-reviews", description: "Patient feedback analysis" },
      { name: "Mapperley Dental Practice Alternative", href: "/mapperley-dental-practice-alternative", description: "Choose Pear Tree Dental" },
      { name: "Carlton Dental Surgery Reviews", href: "/carlton-dental-surgery-reviews", description: "Review comparison" },
      { name: "Carlton Dental Surgery Alternative", href: "/carlton-dental-surgery-alternative", description: "Better alternative" },
      { name: "Arnold Dental Care Reviews", href: "/arnold-dental-care-reviews", description: "Patient experience review" },
      { name: "Arnold Dental Care Alternative", href: "/arnold-dental-care-alternative", description: "Superior dental care" },
    ]
  },
  {
    category: "Legal & Policies",
    icon: Scale,
    color: "gray-600",
    pages: [
      { name: "Privacy Policy", href: "/privacy", description: "How we protect your data" },
      { name: "Terms of Service", href: "/terms", description: "Terms and conditions" },
      { name: "Complaints Procedure", href: "/complaints", description: "How to make a complaint" },
    ]
  },
  {
    category: "Local Areas We Serve",
    icon: Building2,
    color: "dental-green",
    pages: [
      { name: "Burton Joyce", href: "/burton-joyce", description: "Our home practice location" },
      { name: "Colwick", href: "/colwick", description: "8 minutes from our practice" },
      { name: "Carlton", href: "/carlton", description: "Convenient dental care" },
      { name: "Gedling", href: "/gedling", description: "Modern dental technology" },
      { name: "Southwell", href: "/southwell", description: "Premium dental care" },
      { name: "Lowdham", href: "/lowdham", description: "Family-friendly dentistry" },
      { name: "East Bridgford", href: "/east-bridgford", description: "Quality dental care" },
      { name: "Lambley", href: "/lambley", description: "Local dental services" },
      { name: "Woodborough", href: "/woodborough", description: "Comprehensive dental care" },
      { name: "Epperstone", href: "/epperstone", description: "Village dental services" },
      { name: "Gonalston", href: "/gonalston", description: "Rural dental care" },
      { name: "Thurgarton", href: "/thurgarton", description: "Community dental services" },
    ]
  },
  {
    category: "Patient Resources",
    icon: MessageSquare,
    color: "pear-gold",
    pages: [
      { name: "Patient Testimonials", href: "/testimonials", description: "What our patients say" },
    ]
  }
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pear-primary to-pear-primary/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full">
                <FileText className="h-12 w-12" />
              </div>
            </div>
            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Site <span className="text-pear-gold">Map</span>
            </h1>
            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-8">
              Complete Website Navigation
            </p>
            <p className="text-lg leading-relaxed opacity-80 max-w-3xl mx-auto">
              Find exactly what you're looking for with our comprehensive site map.
              Browse all our dental services, practice information, and resources.
            </p>
          </div>
        </div>
      </section>

      {/* Site Map Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-pear-primary mb-2">62</div>
                  <div className="text-gray-600">Total Pages</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-pear-gold mb-2">12</div>
                  <div className="text-gray-600">Local Areas</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-dental-green mb-2">24</div>
                  <div className="text-gray-600">Competitor Analyses</div>
                </CardContent>
              </Card>
            </div>

            {/* Site Structure */}
            <div className="space-y-12">
              {siteStructure.map((section) => {
                const Icon = section.icon;
                return (
                  <div key={section.category}>
                    <Card className="overflow-hidden shadow-xl border-2 hover:border-pear-primary/30 transition-colors">
                      <CardHeader className={`bg-gradient-to-r ${
                        section.color === 'pear-primary' ? 'from-pear-primary to-pear-primary/90' :
                        section.color === 'pear-gold' ? 'from-pear-gold to-pear-gold/90' :
                        section.color === 'dental-green' ? 'from-dental-green to-soft-blue' :
                        section.color === 'soft-pink' ? 'from-soft-pink to-soft-lavender' :
                        section.color === 'soft-lavender' ? 'from-soft-lavender to-soft-pink' :
                        'from-gray-600 to-gray-700'
                      } text-white`}>
                        <CardTitle className="flex items-center space-x-3">
                          <div className="p-2 bg-white/20 rounded-lg">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold">{section.category}</h2>
                            <p className="text-white/80 text-sm font-normal">
                              {section.pages.length} page{section.pages.length !== 1 ? 's' : ''}
                            </p>
                          </div>
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {section.pages.map((page) => (
                            <Link
                              key={page.href}
                              href={page.href}
                              className="group block p-4 border border-gray-200 rounded-lg hover:border-pear-primary/50 hover:shadow-md transition-all duration-300"
                            >
                              <h3 className="font-semibold text-pear-primary group-hover:text-pear-gold transition-colors mb-2">
                                {page.name}
                              </h3>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {page.description}
                              </p>
                              <div className="mt-2 text-xs text-pear-primary opacity-70 group-hover:opacity-100 transition-opacity">
                                {page.href}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* Footer Information */}
            <div className="mt-16 text-center">
              <Card className="bg-gradient-to-r from-pear-background to-cream/50 border border-pear-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    Can't Find What You're Looking For?
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    If you can't find the information you need, please don't hesitate to contact us directly.
                    Our friendly team is always happy to help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="bg-pear-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-pear-primary/90 transition-colors"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="tel:01159312525"
                      className="bg-pear-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-pear-gold/90 transition-colors"
                    >
                      Call 0115 931 2525
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
