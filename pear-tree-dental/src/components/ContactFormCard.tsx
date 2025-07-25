"use client";

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
// import { useConversionTracking } from '@/hooks/useConversionTracking'; // <-- STEP 1: Commented out
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader2,
  Send,
  Calendar
} from 'lucide-react';

interface ContactFormProps {
  title?: string;
  description?: string;
  showContactInfo?: boolean;
  formType?: 'contact' | 'booking' | 'emergency';
  className?: string;
}

export default function ContactFormCard({
  title = "Get in Touch",
  description = "Send us a message and we'll get back to you as soon as possible.",
  showContactInfo = true,
  formType = 'contact',
  className = ""
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // const { trackBookingAttempt, trackLocationConversion, trackServiceInterest } = useConversionTracking(); // <-- STEP 2: Commented out

  // Track form interactions (functions are now empty)
  const handleFieldFocus = (fieldName: string) => {
    setFocusedField(fieldName);
    // trackLocationConversion('form_field_focus', 'burton_joyce'); // <-- STEP 3: Commented out
  };

  const handleFieldBlur = () => {
    setFocusedField(null);
  };

  const handleServiceSelect = (service: string) => {
    // trackServiceInterest(service, ...); // <-- STEP 4: Commented out
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);

      const response = await fetch('/forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        throw new Error(`Form submission failed: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFormIcon = () => {
    switch (formType) {
      case 'emergency': return AlertCircle;
      case 'booking': return Calendar;
      default: return Mail;
    }
  };

  const FormIcon = getFormIcon();

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${className}`}>
      {showContactInfo && (
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-gradient-to-br from-pear-primary to-pear-primary/90 text-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FormIcon className="h-6 w-6" />
                <span>Contact Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="group">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                  onClick={() => {
                    // trackLocationConversion('contact_info_phone_click', 'burton_joyce'); // <-- STEP 5: Commented out
                    window.open('tel:01159312935');
                  }}>
                  <Phone className="h-5 w-5 text-pear-gold" />
                  <div><p className="font-medium">Call Us</p><p className="text-sm text-white/90">0115 931 2935</p></div>
                </div>
              </div>
              <div className="group">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                  onClick={() => {
                    // trackLocationConversion('contact_info_email_click', 'burton_joyce'); // <-- STEP 5: Commented out
                    window.open('mailto:hello@peartree.dental');
                  }}>
                  <Mail className="h-5 w-5 text-pear-gold" />
                  <div><p className="font-medium">Email Us</p><p className="text-sm text-white/90">hello@peartree.dental</p></div>
                </div>
              </div>
              <div className="group">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                  onClick={() => {
                    // trackLocationConversion('contact_info_directions_click', 'burton_joyce'); // <-- STEP 5: Commented out
                    window.open('https://maps.google.com/maps?q=22+Nottingham+Road,+Burton+Joyce,+Nottingham,+NG14+5AL');
                  }}>
                  <MapPin className="h-5 w-5 text-pear-gold" />
                  <div><p className="font-medium">Visit Us</p><p className="text-sm text-white/90">22 Nottingham Road</p><p className="text-sm text-white/90">Burton Joyce, NG14 5AL</p></div>
                </div>
              </div>
              <div className="border-t border-white/20 pt-4">
                <div className="flex items-center space-x-3 mb-3"><Clock className="h-5 w-5 text-pear-gold" /><p className="font-medium">Opening Hours</p></div>
                <div className="text-sm text-white/90 space-y-1 ml-8"><p>Mon-Thu: 8:45am - 5:00pm</p><p>Friday: 8:00am - 3:30pm</p><p>Sat-Sun: Closed</p></div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* The rest of the JSX is unchanged, only the logic and imports above are modified */}
      <div className={showContactInfo ? "lg:col-span-2" : "lg:col-span-3"}>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FormIcon className="h-6 w-6 text-pear-primary" />
              <span>{title}</span>
            </CardTitle>
            <p className="text-gray-600">{description}</p>
            <div className="flex space-x-2">
              <Badge variant={formType === 'emergency' ? 'destructive' : 'secondary'}>
                {formType === 'emergency' ? 'Emergency' : formType === 'booking' ? 'Appointment' : 'General Inquiry'}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2"><CheckCircle className="h-5 w-5 text-green-600" /><h3 className="font-medium text-green-800">Message Sent Successfully!</h3></div>
                <p className="text-sm text-green-700 mt-2">Thank you for contacting us. We'll get back to you within 24 hours.</p>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center space-x-2"><AlertCircle className="h-5 w-5 text-red-600" /><h3 className="font-medium text-red-800">Submission Failed</h3></div>
                <p className="text-sm text-red-700 mt-2">Please try again or call us directly at 0115 931 2935.</p>
              </div>
            )}
            <form
  ref={formRef}
  onSubmit={handleSubmit}
  className="space-y-6"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  name="contact-form"
  method="POST"
  action="/forms.html"
>
              <input type="hidden" name="form-name" value="contact-form" />
              <div className="hidden"><input name="bot-field" /></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" name="firstName" required onFocus={() => handleFieldFocus('firstName')} onBlur={handleFieldBlur} className={focusedField === 'firstName' ? 'ring-2 ring-pear-gold' : ''} />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" name="lastName" required onFocus={() => handleFieldFocus('lastName')} onBlur={handleFieldBlur} className={focusedField === 'lastName' ? 'ring-2 ring-pear-gold' : ''} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" name="email" type="email" required onFocus={() => handleFieldFocus('email')} onBlur={handleFieldBlur} className={focusedField === 'email' ? 'ring-2 ring-pear-gold' : ''} />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" onFocus={() => handleFieldFocus('phone')} onBlur={handleFieldBlur} className={focusedField === 'phone' ? 'ring-2 ring-pear-gold' : ''} />
                </div>
              </div>
              <div>
                <Label htmlFor="service">Service Interest</Label>
                <Select name="service" onValueChange={handleServiceSelect}>
                  <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general-checkup">General Check-up</SelectItem>
                    <SelectItem value="emergency-care">Emergency Dental Care</SelectItem>
                    <SelectItem value="teeth-whitening">Teeth Whitening</SelectItem>
                    <SelectItem value="invisalign">Invisalign</SelectItem>
                    <SelectItem value="dental-implants">Dental Implants</SelectItem>
                    <SelectItem value="veneers">Veneers</SelectItem>
                    <SelectItem value="membership">Membership Plans</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea id="message" name="message" rows={5} required placeholder="Tell us about your dental needs or questions..." onFocus={() => handleFieldFocus('message')} onBlur={handleFieldBlur} className={focusedField === 'message' ? 'ring-2 ring-pear-gold' : ''} />
              </div>
              <div>
                <Label htmlFor="contactMethod">Preferred Contact Method</Label>
                <Select name="contactMethod">
                  <SelectTrigger><SelectValue placeholder="How would you like us to contact you?" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="phone">Phone Call</SelectItem>
                    <SelectItem value="text">Text Message</SelectItem>
                    <SelectItem value="any">Any Method</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" size="lg" disabled={isSubmitting} className={`w-full font-semibold ${formType === 'emergency' ? 'bg-red-600 hover:bg-red-700' : 'btn-gold'} text-white`}>
                {isSubmitting ? (<><Loader2 className="w-5 h-5 mr-2 animate-spin" />Sending...</>) : (<><Send className="w-5 h-5 mr-2" />{formType === 'emergency' ? 'Send Emergency Request' : 'Send Message'}</>)}
              </Button>
              <div className="text-center pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">Or call us directly at{' '}<button type="button" onClick={() => {
                      // trackLocationConversion('form_footer_phone_click', 'burton_joyce'); // <-- STEP 5: Commented out
                      window.open('tel:01159312935');
                    }} className="text-pear-primary hover:underline font-medium">0115 931 2935</button></p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}