"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, CheckCircle, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

interface ContactFormProps {
  type?: "general" | "growth-consultation" | "ai-demo";
  title?: string;
  description?: string;
}

export default function ContactForm({
  type = "general",
  title = "Get In Touch",
  description = "Send us a message and we'll get back to you within 24 hours.",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    revenue: "",
    message: "",
    preferredTime: "",
    budget: "",
    timeline: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    setIsSubmitting(true);
    // Form will be handled by Netlify automatically
    // The page will redirect to /success after submission
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-midnight-blue mb-4">
            Thank You!
          </h3>
          <p className="text-gray-600 mb-6">
            We've received your{" "}
            {type === "growth-consultation"
              ? "consultation request"
              : type === "ai-demo"
                ? "demo request"
                : "message"}{" "}
            and will get back to you within 24 hours.
          </p>
          {type === "growth-consultation" && (
            <p className="text-sm text-gray-500">
              You'll receive a calendar link to book your £50 growth strategy
              session.
            </p>
          )}
          {type === "ai-demo" && (
            <p className="text-sm text-gray-500">
              We'll send you a calendar link to schedule your personalized AI
              automation demo.
            </p>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader
        className={`text-center ${
          type === "growth-consultation"
            ? "bg-forest-green text-white"
            : type === "ai-demo"
              ? "bg-coral-red text-white"
              : "bg-midnight-blue text-white"
        }`}
      >
        <CardTitle className="text-2xl font-heading">{title}</CardTitle>
        <CardDescription
          className={`${
            type === "general" ? "text-gray-100" : "text-white/90"
          }`}
        >
          {description}
        </CardDescription>
        {type === "growth-consultation" && (
          <Badge className="bg-white/20 text-white mt-2">
            £50 Investment - Refunded on First Project
          </Badge>
        )}
        {type === "ai-demo" && (
          <Badge className="bg-white/20 text-white mt-2">
            Free Personalized Demo
          </Badge>
        )}
      </CardHeader>

      <CardContent className="p-8">
        <form
          name={`contact-${type}`}
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/success"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Hidden field for Netlify Forms */}
          <input type="hidden" name="form-name" value={`contact-${type}`} />
          <input type="hidden" name="form-type" value={type} />
          <div className="hidden">
            <label>Don't fill this out if you're human: <input name="bot-field" /></label>
          </div>
          {/* Basic Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-heading font-semibold text-midnight-blue mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-red focus:border-transparent transition-all duration-200"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-heading font-semibold text-midnight-blue mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-red focus:border-transparent transition-all duration-200"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-heading font-semibold text-midnight-blue mb-2"
              >
                Company Name *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-red focus:border-transparent transition-all duration-200"
                placeholder="Your company"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-heading font-semibold text-midnight-blue mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-red focus:border-transparent transition-all duration-200"
                placeholder="08007723291"
              />
            </div>
          </div>

          {/* Business-specific fields for consultation/demo */}
          {(type === "growth-consultation" || type === "ai-demo") && (
            <>
              <Separator />
              <div className="space-y-4">
                <h4 className="font-heading font-semibold text-midnight-blue">
                  Business Information
                </h4>

                <div>
                  <label
                    htmlFor="revenue"
                    className="block text-sm font-heading font-semibold text-midnight-blue mb-2"
                  >
                    Annual Revenue Range *
                  </label>
                  <select
                    id="revenue"
                    name="revenue"
                    required
                    value={formData.revenue}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-red focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select revenue range</option>
                    <option value="under-100k">Under £100k</option>
                    <option value="100k-500k">£100k - £500k</option>
                    <option value="500k-1m">£500k - £1M</option>
                    <option value="1m-5m">£1M - £5M</option>
                    <option value="5m-plus">£5M+</option>
                  </select>
                </div>

                {type === "growth-consultation" && (
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-heading font-semibold text-midnight-blue mb-2"
                    >
                      Marketing Budget (Monthly)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-red focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-2k">Under £2k</option>
                      <option value="2k-5k">£2k - £5k</option>
                      <option value="5k-10k">£5k - £10k</option>
                      <option value="10k-25k">£10k - £25k</option>
                      <option value="25k-plus">£25k+</option>
                    </select>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-heading font-semibold text-midnight-blue mb-2"
                  >
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-red focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="3-months">Within 3 months</option>
                    <option value="6-months">Within 6 months</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-heading font-semibold text-midnight-blue mb-2"
            >
              {type === "growth-consultation"
                ? "What are your biggest growth challenges?"
                : type === "ai-demo"
                  ? "What processes would you like to automate?"
                  : "Message"}{" "}
              *
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-red focus:border-transparent transition-all duration-200 resize-none"
              placeholder={
                type === "growth-consultation"
                  ? "Tell us about your current marketing challenges and growth goals..."
                  : type === "ai-demo"
                    ? "Describe the manual processes you'd like to automate..."
                    : "How can we help you?"
              }
            />
          </div>

          {/* Preferred Contact Time for consultations/demos */}
          {(type === "growth-consultation" || type === "ai-demo") && (
            <div>
              <label
                htmlFor="preferredTime"
                className="block text-sm font-heading font-semibold text-midnight-blue mb-2"
              >
                Preferred Contact Time
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-red focus:border-transparent transition-all duration-200"
              >
                <option value="">Select preferred time</option>
                <option value="morning">Morning (9AM - 12PM)</option>
                <option value="afternoon">Afternoon (12PM - 5PM)</option>
                <option value="evening">Evening (5PM - 7PM)</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 text-lg font-heading font-semibold transition-all duration-200 ${
              type === "growth-consultation"
                ? "bg-forest-green hover:bg-forest-green/90"
                : type === "ai-demo"
                  ? "bg-coral-red hover:bg-coral-red/90"
                  : "bg-midnight-blue hover:bg-midnight-blue/90"
            } text-white`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                Submitting...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <Send className="h-5 w-5 mr-2" />
                {type === "growth-consultation"
                  ? "Book Growth Strategy Session"
                  : type === "ai-demo"
                    ? "Request AI Demo"
                    : "Send Message"}
              </div>
            )}
          </Button>

          {/* Additional Info */}
          <div className="text-center text-sm text-gray-500">
            {type === "growth-consultation" && (
              <p>
                After submitting, you'll receive a calendar link to book your
                paid consultation.
              </p>
            )}
            {type === "ai-demo" && (
              <p>
                We'll contact you within 24 hours to schedule your personalized
                demo.
              </p>
            )}
            {type === "general" && (
              <p>We typically respond within 24 hours during business days.</p>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
