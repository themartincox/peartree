"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

// Types for customizable fields
interface CustomField {
  id: string;
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string; }[]; // For select fields
  rows?: number; // For textarea fields
}

interface ContactFormCardProps {
  title?: string;
  description?: string;
  className?: string;
  formAction?: string;
  // 5 customizable fields that only show when provided
  customField1?: CustomField;
  customField2?: CustomField;
  customField3?: CustomField;
  customField4?: CustomField;
  customField5?: CustomField;
  // Form submission props
  onSubmit?: (formData: FormData) => void;
  submitText?: string;
  showMarketingConsent?: boolean;
}

export default function ContactFormCard({
  title = "Send us a Message",
  description = "Fill out the form below and we'll get back to you within 24 hours during business days.",
  className = "",
  formAction = "#",
  customField1,
  customField2,
  customField3,
  customField4,
  customField5,
  onSubmit,
  submitText = "Send Message",
  showMarketingConsent = true
}: ContactFormCardProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const customFields = [customField1, customField2, customField3, customField4, customField5].filter(Boolean);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Only prevent default if we have a custom onSubmit handler
    if (onSubmit) {
      e.preventDefault();
      setIsSubmitting(true);
      const formData = new FormData(e.currentTarget);
      onSubmit(formData);
      // Reset submitting state after a delay
      setTimeout(() => setIsSubmitting(false), 2000);
    } else {
      // For Netlify forms, let the browser handle submission naturally
      setIsSubmitting(true);
      // The form will submit normally to Netlify
    }
  };

  const renderCustomField = (field: CustomField) => {
    const baseProps = {
      id: field.id,
      name: field.name,
      required: field.required,
      className: "mt-1",
      placeholder: field.placeholder
    };

    switch (field.type) {
      case 'select':
        return (
          <select
            {...baseProps}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pear-primary focus:border-transparent"
          >
            <option value="">Please select...</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'textarea':
        return (
          <Textarea
            {...baseProps}
            rows={field.rows || 3}
          />
        );

      default:
        return (
          <Input
            {...baseProps}
            type={field.type}
          />
        );
    }
  };

  return (
    <Card className={`shadow-xl ${className}`}>
      <CardHeader>
        <CardTitle className="text-2xl text-pear-primary flex items-center gap-3">
          <Send className="h-6 w-6" />
          {title}
        </CardTitle>
        <p className="text-gray-600">
          {description}
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <form className="space-y-6" action={formAction} method="POST" onSubmit={handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field" name="contact-form">
          <input type="hidden" name="form-name" value="contact-form" />
          <div className="hidden">
            <label>Don't fill this out if you're human: <input name="bot-field" /></label>
          </div>
          {/* Core Name Fields */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="text-gray-700 font-medium">
                First Name *
              </Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                required
                className="mt-1"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-gray-700 font-medium">
                Last Name *
              </Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                required
                className="mt-1"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          {/* Core Email Field */}
          <div>
            <Label htmlFor="email" className="text-gray-700 font-medium">
              Email Address *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Core Phone Field */}
          <div>
            <Label htmlFor="phone" className="text-gray-700 font-medium">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              className="mt-1"
              placeholder="0115 XXX XXXX"
            />
          </div>

          {/* Render Custom Fields */}
          {customFields.map((field) => (
            <div key={field.id}>
              <Label htmlFor={field.id} className="text-gray-700 font-medium">
                {field.label} {field.required && '*'}
              </Label>
              {renderCustomField(field)}
            </div>
          ))}

          {/* Core Message Field */}
          <div>
            <Label htmlFor="message" className="text-gray-700 font-medium">
              Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={4}
              className="mt-1"
              placeholder="Please tell us about your enquiry, any specific concerns, or how we can help you..."
            />
          </div>

          {/* Privacy Policy Checkbox */}
          <div className="flex items-start space-x-2">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              required
              className="mt-1 h-4 w-4 text-pear-primary focus:ring-pear-primary border-gray-300 rounded"
            />
            <Label htmlFor="privacy" className="text-sm text-gray-600">
              I agree to the practice privacy policy and consent to my data being used to contact me regarding my enquiry. *
            </Label>
          </div>

          {/* Optional Marketing Consent */}
          {showMarketingConsent && (
            <div className="flex items-start space-x-2">
              <input
                id="marketing"
                name="marketing"
                type="checkbox"
                className="mt-1 h-4 w-4 text-pear-primary focus:ring-pear-primary border-gray-300 rounded"
              />
              <Label htmlFor="marketing" className="text-sm text-gray-600">
                I would like to receive updates about dental health tips and practice news.
              </Label>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-pear-primary hover:bg-pear-primary/90 text-white py-3 text-lg font-semibold disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : submitText}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
