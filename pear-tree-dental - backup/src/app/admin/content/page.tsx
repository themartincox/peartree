"use client";

import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Edit,
  FileText,
  Globe,
  Save,
  Search,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContentManager() {
  const [selectedSection, setSelectedSection] = useState("homepage");

  const contentSections = [
    {
      id: "homepage",
      title: "Homepage",
      description: "Hero section, services overview, and CTAs",
      icon: Globe,
      lastUpdated: "2 days ago",
      status: "published",
    },
    {
      id: "case-studies",
      title: "Case Studies",
      description: "Client success stories and testimonials",
      icon: FileText,
      lastUpdated: "1 week ago",
      status: "published",
    },
    {
      id: "about",
      title: "About Page",
      description: "Company information and team details",
      icon: Users,
      lastUpdated: "3 weeks ago",
      status: "published",
    },
    {
      id: "contact",
      title: "Contact Information",
      description: "Contact details and form settings",
      icon: Settings,
      lastUpdated: "1 month ago",
      status: "published",
    },
    {
      id: "pricing",
      title: "Pricing & Packages",
      description: "Service pricing and package details",
      icon: Settings,
      lastUpdated: "5 days ago",
      status: "published",
    },
    {
      id: "testimonials",
      title: "Client Testimonials",
      description: "Customer reviews and feedback",
      icon: Users,
      lastUpdated: "1 week ago",
      status: "published",
    },
  ];

  const [homepageContent, setHomepageContent] = useState({
    heroTitle: "Where Growth Meets AI Innovation",
    heroSubtitle: "Seamlessly blend expert marketing strategies with cutting-edge AI automation",
    heroDescription: "We help SMEs achieve measurable success through intelligent marketing systems that work around the clock. From strategy to implementation, we're your dedicated growth partner.",
    ctaPrimary: "Book Growth Strategy Session",
    ctaSecondary: "Explore AI Automation",
    statsRevenue: "£6.25M",
    statsRevenueDesc: "Additional revenue generated for clients in 12 months",
    statsLeads: "310%",
    statsLeadsDesc: "Average increase in qualified leads",
    statsTime: "148hrs",
    statsTimeDesc: "Weekly time savings through automation",
    statsROI: "442%",
    statsROIDesc: "Average return on investment",
  });

  const [caseStudies, setCaseStudies] = useState([
    {
      id: 1,
      company: "Precision Components Ltd",
      industry: "Manufacturing",
      challenge: "Struggling with manual processes and inconsistent lead generation",
      solution: "AI-powered workflow automation + comprehensive growth marketing strategy",
      results: {
        leadIncrease: "425%",
        revenueIncrease: "£2.3M",
        timeSaved: "45hrs/week",
        roi: "520%",
      },
      testimonial: "Postino didn't just automate our processes—they transformed how we think about growth.",
      clientName: "Martin",
      clientRole: "CEO",
    },
    {
      id: 2,
      company: "Strategic Consulting Group",
      industry: "Professional Services",
      challenge: "Low online visibility and inefficient client acquisition process",
      solution: "AI-enhanced SEO strategy + automated lead nurturing system",
      results: {
        leadIncrease: "280%",
        revenueIncrease: "£1.8M",
        timeSaved: "35hrs/week",
        roi: "420%",
      },
      testimonial: "Within 6 months, we went from struggling to find clients to having a waiting list.",
      clientName: "Martin",
      clientRole: "Managing Partner",
    },
  ]);

  const handleHomepageUpdate = (field: string, value: string) => {
    setHomepageContent(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const renderHomepageEditor = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-heading text-midnight-blue">
            Hero Section
          </CardTitle>
          <CardDescription>
            Main headline and call-to-action content
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hero Title
            </label>
            <Input
              value={homepageContent.heroTitle}
              onChange={(e) => handleHomepageUpdate("heroTitle", e.target.value)}
              className="text-lg font-semibold"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hero Subtitle
            </label>
            <Input
              value={homepageContent.heroSubtitle}
              onChange={(e) => handleHomepageUpdate("heroSubtitle", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hero Description
            </label>
            <Textarea
              value={homepageContent.heroDescription}
              onChange={(e) => handleHomepageUpdate("heroDescription", e.target.value)}
              rows={4}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary CTA Text
              </label>
              <Input
                value={homepageContent.ctaPrimary}
                onChange={(e) => handleHomepageUpdate("ctaPrimary", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Secondary CTA Text
              </label>
              <Input
                value={homepageContent.ctaSecondary}
                onChange={(e) => handleHomepageUpdate("ctaSecondary", e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-heading text-midnight-blue">
            Statistics Section
          </CardTitle>
          <CardDescription>
            Key performance metrics displayed on homepage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Revenue Generated
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    value={homepageContent.statsRevenue}
                    onChange={(e) => handleHomepageUpdate("statsRevenue", e.target.value)}
                    placeholder="£6.25M"
                  />
                  <Input
                    value={homepageContent.statsRevenueDesc}
                    onChange={(e) => handleHomepageUpdate("statsRevenueDesc", e.target.value)}
                    placeholder="Description"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lead Increase
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    value={homepageContent.statsLeads}
                    onChange={(e) => handleHomepageUpdate("statsLeads", e.target.value)}
                    placeholder="310%"
                  />
                  <Input
                    value={homepageContent.statsLeadsDesc}
                    onChange={(e) => handleHomepageUpdate("statsLeadsDesc", e.target.value)}
                    placeholder="Description"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time Savings
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    value={homepageContent.statsTime}
                    onChange={(e) => handleHomepageUpdate("statsTime", e.target.value)}
                    placeholder="148hrs"
                  />
                  <Input
                    value={homepageContent.statsTimeDesc}
                    onChange={(e) => handleHomepageUpdate("statsTimeDesc", e.target.value)}
                    placeholder="Description"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ROI Percentage
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    value={homepageContent.statsROI}
                    onChange={(e) => handleHomepageUpdate("statsROI", e.target.value)}
                    placeholder="442%"
                  />
                  <Input
                    value={homepageContent.statsROIDesc}
                    onChange={(e) => handleHomepageUpdate("statsROIDesc", e.target.value)}
                    placeholder="Description"
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderCaseStudiesEditor = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-heading font-semibold text-midnight-blue">
          Case Studies Management
        </h3>
        <Button className="bg-coral-red hover:bg-coral-red/90 text-white">
          Add New Case Study
        </Button>
      </div>

      {caseStudies.map((study, index) => (
        <Card key={study.id} className="border-l-4 border-coral-red">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  {study.company}
                </CardTitle>
                <CardDescription>{study.industry}</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="hover:bg-coral-red hover:text-white">
                  Delete
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Challenge
              </label>
              <Textarea
                value={study.challenge}
                onChange={(e) => {
                  const updated = [...caseStudies];
                  updated[index].challenge = e.target.value;
                  setCaseStudies(updated);
                }}
                rows={2}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Solution
              </label>
              <Textarea
                value={study.solution}
                onChange={(e) => {
                  const updated = [...caseStudies];
                  updated[index].solution = e.target.value;
                  setCaseStudies(updated);
                }}
                rows={2}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Results
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <Input
                  placeholder="Lead Increase"
                  value={study.results.leadIncrease}
                  onChange={(e) => {
                    const updated = [...caseStudies];
                    updated[index].results.leadIncrease = e.target.value;
                    setCaseStudies(updated);
                  }}
                />
                <Input
                  placeholder="Revenue"
                  value={study.results.revenueIncrease}
                  onChange={(e) => {
                    const updated = [...caseStudies];
                    updated[index].results.revenueIncrease = e.target.value;
                    setCaseStudies(updated);
                  }}
                />
                <Input
                  placeholder="Time Saved"
                  value={study.results.timeSaved}
                  onChange={(e) => {
                    const updated = [...caseStudies];
                    updated[index].results.timeSaved = e.target.value;
                    setCaseStudies(updated);
                  }}
                />
                <Input
                  placeholder="ROI"
                  value={study.results.roi}
                  onChange={(e) => {
                    const updated = [...caseStudies];
                    updated[index].results.roi = e.target.value;
                    setCaseStudies(updated);
                  }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Testimonial
              </label>
              <Textarea
                value={study.testimonial}
                onChange={(e) => {
                  const updated = [...caseStudies];
                  updated[index].testimonial = e.target.value;
                  setCaseStudies(updated);
                }}
                rows={3}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Client Name
                </label>
                <Input
                  value={study.clientName}
                  onChange={(e) => {
                    const updated = [...caseStudies];
                    updated[index].clientName = e.target.value;
                    setCaseStudies(updated);
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Client Role
                </label>
                <Input
                  value={study.clientRole}
                  onChange={(e) => {
                    const updated = [...caseStudies];
                    updated[index].clientRole = e.target.value;
                    setCaseStudies(updated);
                  }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <div className="bg-midnight-blue text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-heading font-bold">Content Management</h1>
              <p className="text-gray-300 mt-2">
                Update page content, case studies, and dynamic sections
              </p>
            </div>
            <Button className="bg-forest-green hover:bg-forest-green/90 text-white">
              <Save className="w-4 h-4 mr-2" />
              Save All Changes
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  Content Sections
                </CardTitle>
                <CardDescription>
                  Select a section to edit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {contentSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setSelectedSection(section.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedSection === section.id
                          ? "bg-coral-red text-white"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <section.icon className="h-5 w-5" />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{section.title}</p>
                          <p className={`text-xs ${
                            selectedSection === section.id ? "text-white/80" : "text-gray-500"
                          }`}>
                            {section.lastUpdated}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {selectedSection === "homepage" && renderHomepageEditor()}
            {selectedSection === "case-studies" && renderCaseStudiesEditor()}
            {selectedSection !== "homepage" && selectedSection !== "case-studies" && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-heading text-midnight-blue">
                    Coming Soon
                  </CardTitle>
                  <CardDescription>
                    This content section editor is under development
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    The {contentSections.find(s => s.id === selectedSection)?.title} editor
                    will be available in the next update.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-gray-400">
            © 2025 Postino Ltd. Admin Dashboard - All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
