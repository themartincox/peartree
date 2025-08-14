"use client";

import {
  ArrowLeft,
  ArrowRight,
  Baby,
  Building2,
  CalendarDays,
  CheckCircle,
  ChevronDown,
  Crown,
  Download,
  Eye, 
  FileText,
  Lock,
  Mail,
  Shield,
  Star,
  User,
  UserPlus,
  Users,
  Zap
} from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { downloadPDF, generateDirectDebitGuaranteePDF, generateMembershipTermsPDF } from "@/lib/generatePersonalizedPDFs";

export default function MembershipSignupPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isClinicAccess, setIsClinicAccess] = useState(false);
  const [isCheckingIp, setIsCheckingIp] = useState(true);
  const [isKeyThingsExpanded, setIsKeyThingsExpanded] = useState(false);
  const [showRequiredNotification, setShowRequiredNotification] = useState(false);

  const [formData, setFormData] = useState({
    // Personal Details
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    postcode: "",
    emergencyContact: "",
    emergencyPhone: "",

    // Partner Details (for family plans)
    partnerTitle: "",
    partnerFirstName: "",
    partnerLastName: "",
    partnerEmail: "",
    partnerPhone: "",
    partnerDateOfBirth: "",
    partnerIsExistingPatient: "",
    partnerPreferredDentist: "",
    partnerDentistGenderPreference: "",

    // Direct Debit Details
    accountHolderName: "",
    sortCode: "",
    accountNumber: "",
    bankName: "",
    directDebitConfirmed: false,
    ddGuaranteeRead: false,
    membershipTermsRead: false,

    // Patient Status & Preferences
    isExistingPatient: "",
    preferredDentist: "",
    dentistGenderPreference: "",
    preferredAppointmentTime: "",
    communicationPreference: "email",
    marketingConsent: false,
    termsAccepted: false,

    // Staff Tracking (for clinic access)
    staffMemberName: "",
    staffMemberId: "",

    // Family Members
    familyMembers: [] as Array<{
      firstName: string;
      lastName: string;
      dateOfBirth: string;
      relationship: string;
      plan: string;
    }>
  });

  const plans = {
    planA: {
      name: "ESSENTIAL MAINTENANCE",
      price: "£10.95",
      period: "/month",
      dailyCost: "Just 36p per day",
      savings: "£116",
      color: "dental-green",
      gradient: "from-dental-green to-dental-green/90",
      features: [
        "1 Dental check up a year",
        "1 Scale & Polish a year",
        "Worldwide dental accident & emergency cover"
      ],
      popular: false
    },
    planB: {
      name: "ROUTINE CARE",
      price: "£15.95",
      period: "/month",
      dailyCost: "Just 53p per day",
      savings: "£168",
      color: "pear-primary",
      gradient: "from-pear-primary to-pear-primary/90",
      features: [
        "2 Dental check ups a year",
        "1 Scale & Polish a year",
        "Worldwide dental accident & emergency cover"
      ],
      popular: true
    },
    planC: {
      name: "COMPLETE CARE",
      price: "£19.95",
      period: "/month",
      dailyCost: "Just 66p per day",
      savings: "£177",
      color: "soft-blue",
      gradient: "from-soft-blue to-soft-blue/90",
      features: [
        "2 Dental check ups a year",
        "2 Scale & Polishes a year",
        "Worldwide dental accident & emergency cover"
      ],
      popular: false
    },
    planD: {
      name: "COMPLETE CARE PLUS",
      price: "£25.95",
      period: "/month",
      dailyCost: "Just 86p per day",
      savings: "£286",
      color: "pear-gold",
      gradient: "from-pear-gold to-pear-gold/80",
      features: [
        "2 Dental check ups a year",
        "2 Scale & Polishes a year",
        "1 Free emergency appt a year",
        "50% off stain removal",
        "Worldwide dental accident & emergency cover"
      ],
      popular: false
    },
    planE: {
      name: "PERIODONTAL HEALTH",
      price: "£29.95",
      period: "/month",
      dailyCost: "Just 99p per day",
      savings: "£351",
      color: "pear-gold",
      gradient: "from-pear-gold to-pear-gold/80",
      features: [
        "2 Dental check ups a year",
        "4 Scale & Polishes a year",
        "1 Free emergency appt a year",
        "50% off stain removal",
        "Worldwide dental accident & emergency cover"
      ],
      popular: false
    },
    family: {
      name: "FAMILY PLAN",
      price: "£49.50",
      period: "/month",
      dailyCost: "Just £1.65 per day",
      savings: "Family savings",
      color: "pear-primary",
      gradient: "from-pear-primary to-dental-green",
      features: [
        "All adults get Complete Care Plus benefits",
        "Children under 18 included free",
        "Same address requirement",
        "10% discount on all treatments",
        "Simplified billing for whole family",
        "Priority family appointments"
      ],
      popular: false
    }
  };

  const currentPlan = selectedPlan ? plans[selectedPlan as keyof typeof plans] : plans.planB;

  // Secure input handlers for financial data
  const handleSortCodeChange = (value: string) => {
    // Remove all non-numeric characters except hyphens
    let cleaned = value.replace(/[^0-9-]/g, '');

    // Format as XX-XX-XX
    if (cleaned.length <= 6) {
      cleaned = cleaned.replace(/[^0-9]/g, ''); // Remove hyphens for processing
      if (cleaned.length >= 2) {
        cleaned = `${cleaned.substring(0, 2)}-${cleaned.substring(2)}`;
      }
      if (cleaned.length >= 5) {
        cleaned = `${cleaned.substring(0, 5)}-${cleaned.substring(5, 7)}`;
      }
    }

    // Limit to 8 characters (XX-XX-XX format)
    cleaned = cleaned.substring(0, 8);
    handleInputChange("sortCode", cleaned);
  };

  const handleAccountNumberChange = (value: string) => {
    // Remove all non-numeric characters
    const cleaned = value.replace(/[^0-9]/g, '');
    // Limit to 8 digits
    const limited = cleaned.substring(0, 8);
    handleInputChange("accountNumber", limited);
  };

  // Secure input sanitizer for text fields
  const sanitizeTextInput = (value: string, fieldName: string): string => {
    // Remove potentially dangerous characters and limit length
    const sanitized = value
      .replace(/[<>"/\\&']/g, '') // Remove HTML/script injection chars
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .trim();

    // Field-specific length limits
    const maxLengths: { [key: string]: number } = {
      firstName: 50,
      lastName: 50,
      email: 100,
      phone: 20,
      address: 200,
      postcode: 10,
      accountHolderName: 100
    };

    const maxLength = maxLengths[fieldName] || 100;
    return sanitized.substring(0, maxLength);
  };

  // Base handleInputChange function
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Enhanced handleInputChange with security
  const secureHandleInputChange = (field: string, value: string | boolean) => {
    if (typeof value === 'string') {
      // Apply sanitization to text inputs
      const sanitizedValue = sanitizeTextInput(value, field);
      handleInputChange(field, sanitizedValue);
    } else {
      handleInputChange(field, value);
    }
  };

  const nextStep = () => {
    // Validate step 1 (Plan Selection) before proceeding
    if (currentStep === 1) {
      if (!selectedPlan) {
        alert('Please select a membership plan to continue.');
        return;
      }
    }

    // Validate step 2 (Personal Details) before proceeding
    if (currentStep === 2) {
      const step2RequiredFields = ['firstName', 'lastName', 'email', 'phone', 'dateOfBirth', 'postcode', 'address', 'isExistingPatient'];

      // Add partner validation for family plans
      if (selectedPlan === 'family') {
        step2RequiredFields.push('partnerFirstName', 'partnerLastName', 'partnerEmail', 'partnerPhone', 'partnerDateOfBirth', 'partnerIsExistingPatient');
      }

      const missingStep2Fields = step2RequiredFields.filter(field => !formData[field as keyof typeof formData]);

      if (missingStep2Fields.length > 0) {
        alert(`Please fill in all required fields: ${missingStep2Fields.join(', ').replace('isExistingPatient', 'existing patient status').replace('partnerIsExistingPatient', 'partner existing patient status')}`);
        return;
      }

      // Validate dentist preference based on patient status
      if (formData.isExistingPatient === 'no' && !formData.dentistGenderPreference) {
        alert('Please select your dentist gender preference.');
        return;
      }

      if (formData.isExistingPatient === 'yes' && !formData.preferredDentist) {
        alert('Please select your preferred dentist.');
        return;
      }

      // Validate partner dentist preference for family plans
      if (selectedPlan === 'family') {
        if (formData.partnerIsExistingPatient === 'no' && !formData.partnerDentistGenderPreference) {
          alert('Please select your partner\'s dentist gender preference.');
          return;
        }

        if (formData.partnerIsExistingPatient === 'yes' && !formData.partnerPreferredDentist) {
          alert('Please select your partner\'s preferred dentist.');
          return;
        }
      }
    }

    // Validate step 3 (Direct Debit) before proceeding
    if (currentStep === 3) {
      const ddRequiredFields = ['accountHolderName', 'sortCode', 'accountNumber'];
      const missingDDFields = ddRequiredFields.filter(field => !formData[field as keyof typeof formData]);

      if (missingDDFields.length > 0) {
        alert(`Please fill in all Direct Debit fields: ${missingDDFields.join(', ')}`);
        return;
      }
    }

    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    try {
      // Validate required fields
      const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'dateOfBirth', 'postcode', 'address', 'accountHolderName', 'sortCode', 'accountNumber'];
      const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);

      // Validate direct debit confirmation
      if (!formData.directDebitConfirmed) {
        alert('Please confirm your Direct Debit authorization to proceed.');
        return;
      }

      // Validate document acknowledgments - These are required
      if (!formData.membershipTermsRead) {
        alert('You must read and accept all Terms & Conditions before completing your membership signup.');
        return;
      }

      // Check staff member name if clinic access
      if (isClinicAccess && !formData.staffMemberName.trim()) {
        alert('Please enter the staff member name for clinic signups.');
        return;
      }

      if (missingFields.length > 0) {
        alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
        return;
      }

      console.log("Submitting membership signup:", formData);

      // Additional frontend validation
      if (!formData.firstName || !formData.lastName || !formData.email) {
        alert('Please ensure your name and email are provided.');
        return;
      }

      if (!formData.email.includes('@')) {
        alert('Please provide a valid email address.');
        return;
      }

      const response = await fetch('/api/membership/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          selectedPlan,
          isClinicSignup: isClinicAccess
        }),
      });

      console.log('Response status:', response.status, response.statusText);

      if (!response.ok) {
        // Try to get the actual error details from the server
        console.error('❌ Response not OK:', response.status, response.statusText);
        try {
          const errorData = await response.json();
          console.error('🔍 Server error response:', errorData);
          const errorMessage = errorData.details || errorData.error || `HTTP ${response.status}: ${response.statusText}`;
          throw new Error(errorMessage);
        } catch (parseError) {
          console.error('❌ Failed to parse error response:', parseError);
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
      }

      let result;
      try {
        result = await response.json();
        console.log('API Response:', result);
      } catch (parseError) {
        console.error('Failed to parse response JSON:', parseError);
        alert('Server error: Received invalid response. Your application may have been submitted successfully. Please contact our office at 0115 931 2935 to verify.');
        return;
      }

      // Validate response structure
      if (typeof result !== 'object' || result === null) {
        console.error('Invalid response structure:', result);
        alert('Server error: Invalid response format. Please try again or contact our office at 0115 931 2935.');
        return;
      }

      if (result.success) {
        // Validate success response has required fields
        if (!result.applicationId) {
          console.error('Success response missing applicationId:', result);
          alert('Application submitted successfully, but no reference number received. Please contact our office at 0115 931 2935 for your application status.');
          return;
        }

        // Redirect to success page with details
        const params = new URLSearchParams({
          applicationId: result.applicationId,
          plan: currentPlan.name,
          name: `${formData.firstName} ${formData.lastName}`,
          ...(formData.staffMemberName && { staff: formData.staffMemberName })
        });

        console.log('Redirecting to success page with params:', params.toString());
        window.location.href = `/membership/signup/success?${params.toString()}`;
      } else {
        // Handle different error response formats
        const errorMessage = result.error || result.message || result.details || 'Application submission failed';
        const errorDetails = result.details ? ` (${result.details})` : '';
        alert(`Signup failed: ${errorMessage}${errorDetails}`);
        console.error('Submission failed:', result);
      }
    } catch (error) {
      console.error('Submission error:', error);

      // Check if it's a network error
      if (error instanceof TypeError && error.message.includes('fetch')) {
        alert('Network error: Unable to connect to the server. Please check your internet connection and try again.');
      } else if (error instanceof SyntaxError) {
        alert('Server error: Invalid response received. Please try again or contact support.');
      } else {
        alert('There was an unexpected error submitting your application. Please try again or contact our office at 0115 931 2935.');
      }
    }
  };

  const addFamilyMember = () => {
    setFormData(prev => ({
      ...prev,
      familyMembers: [...prev.familyMembers, {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        relationship: "",
        plan: "planA"
      }]
    }));
  };

  // Handle plan selection from URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const planParam = urlParams.get("plan");

    if (planParam) {
      // Map plan IDs from membership page to signup page plan keys
      const planMapping = {
        "plan-a": "planA",
        "plan-b": "planB",
        "plan-c": "planC",
        "plan-d": "planD",
        "plan-e": "planE",
        "family": "family"
      };

      const mappedPlan = planMapping[planParam as keyof typeof planMapping];
      if (mappedPlan && plans[mappedPlan as keyof typeof plans]) {
        setSelectedPlan(mappedPlan);
        console.log('Auto-selected plan from URL:', mappedPlan);
      }
    }
  }, []);

  // Check if user is accessing from clinic IP
  useEffect(() => {
    const checkClinicAccess = async () => {
      try {
        setIsCheckingIp(true);
        const response = await fetch('/api/ip-check');
        const data = await response.json();
        setIsClinicAccess(data.isClinicIp);
        console.log('Clinic access detected:', data.isClinicIp);
      } catch (error) {
        console.error('Error checking IP:', error);
        setIsClinicAccess(false);
      } finally {
        setIsCheckingIp(false);
      }
    };

    checkClinicAccess();
  }, []);

  // Scroll to top when step changes for better UX
  useEffect(() => {
    // Small delay to ensure DOM has updated before scrolling
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    // Use requestAnimationFrame to ensure smooth scrolling after render
    requestAnimationFrame(scrollToTop);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pear-background/30 to-white">



      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="flex justify-between">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex flex-col items-center py-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step <= currentStep
                      ? 'bg-dental-green text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step < currentStep ? <CheckCircle className="w-5 h-5" /> : step}
                  </div>
                  <div className="text-xs mt-2 text-center">
                    {step === 1 && "Plan"}
                    {step === 2 && "Details"}
                    {step === 3 && "Payment"}
                    {step === 4 && "Confirm"}
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-200">
              <div
                className="h-full bg-dental-green transition-all duration-500"
                style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">

            {/* Step 1: Plan Selection */}
            {currentStep === 1 && (
              <Card className="shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-pear-primary mb-4">
                    {selectedPlan ? 'Confirm Your Plan' : 'Choose Your Plan'}
                  </CardTitle>

                  {/* Security Indicators */}
                  <div className="flex items-center justify-center space-x-6 mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Lock className="w-4 h-4 text-green-600" />
                      <span>Secure Signup</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Shield className="w-4 h-4 text-green-600" />
                      <span>Step 1 of 4</span>
                    </div>
                  </div>

                  <p className="text-gray-600">
                    {selectedPlan ? 'Perfect choice! You can also add family members.' : 'Select the membership plan that\'s right for you'}
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  {/* Top Row: Selected Plan + Conditional Upsell */}
                  {selectedPlan && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-pear-primary mb-4">Your Selection</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Selected Plan */}
                        <div className={`relative p-6 rounded-xl border-2 border-${plans[selectedPlan as keyof typeof plans].color} bg-gradient-to-br ${plans[selectedPlan as keyof typeof plans].gradient} text-white shadow-xl`}>
                          <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white">
                            Selected
                          </Badge>
                          <div className="text-center mb-4 text-white">
                            <h3 className="font-bold text-lg mb-2">{plans[selectedPlan as keyof typeof plans].name}</h3>
                            <div className="text-3xl font-bold">{plans[selectedPlan as keyof typeof plans].price}</div>
                            <div className="text-sm opacity-80">{plans[selectedPlan as keyof typeof plans].period}</div>
                            <div className="text-xs opacity-70 mt-1">{plans[selectedPlan as keyof typeof plans].dailyCost}</div>
                          </div>
                          <div className="space-y-2">
                            {plans[selectedPlan as keyof typeof plans].features.map((feature, index) => (
                              <div key={index} className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-white" />
                                <span className="text-sm text-white">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Conditional Upsell Box */}
                        {/* For Plans A, B, C - Show Child Plan */}
                        {(selectedPlan === 'planA' || selectedPlan === 'planB' || selectedPlan === 'planC') && (
                          <div
                            onClick={() => {
                              // Add a child to the family members list
                              setFormData(prev => ({
                                ...prev,
                                familyMembers: [...prev.familyMembers, {
                                  firstName: "",
                                  lastName: "",
                                  dateOfBirth: "",
                                  relationship: "child",
                                  plan: "child"
                                }]
                              }));
                            }}
                            className="relative p-6 rounded-xl border-2 border-green-200 bg-green-50 cursor-pointer hover:border-green-300 hover:shadow-md transition-all duration-300"
                          >
                            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white">
                              Add A Child
                            </Badge>
                            <div className="text-center mb-4 text-green-700">
                              <Baby className="w-8 h-8 mx-auto mb-2" />
                              <h3 className="font-bold text-lg mb-2">CHILD PLAN</h3>
                              <div className="text-3xl font-bold">£5.20</div>
                              <div className="text-sm opacity-80">/month</div>
                              <div className="text-xs opacity-70 mt-1">Just 17p per day</div>
                            </div>
                            <div className="text-center mb-4">
                              <p className="text-sm text-green-800 font-medium mb-2">
                                Great news! You get 1 child included automatically in your plan.
                              </p>
                              <p className="text-sm text-green-700">
                                Click here to add another child for just £5.20/month
                              </p>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-600" />
                                <span className="text-sm text-green-700">2 Dental check ups a year</span>
                              </div>
                              <div className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-600" />
                                <span className="text-sm text-green-700">1 Scale & Polish a year</span>
                              </div>
                              <div className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-600" />
                                <span className="text-sm text-green-700">Worldwide emergency cover</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* For Plans D, E - Show Family Plan Upsell */}
                        {(selectedPlan === 'planD' || selectedPlan === 'planE') && (
                          <div
                            onClick={() => setSelectedPlan('family')}
                            className="relative p-6 rounded-xl border-2 border-purple-200 bg-purple-50 cursor-pointer hover:border-purple-300 hover:shadow-md transition-all duration-300"
                          >
                            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white">Even Better Value!!
                            </Badge>
                            <div className="text-center mb-4 text-purple-700">
                              <Users className="w-8 h-8 mx-auto mb-2" />
                              <h3 className="font-bold text-lg mb-2">FAMILY PLAN</h3>
                              <div className="text-3xl font-bold">£49.50</div>
                              <div className="text-sm opacity-80">/month</div>
                              <div className="text-xs opacity-70 mt-1">£1.65 per day for whole family</div>
                            </div>
                            <div className="text-center mb-4">
                              <p className="text-sm text-purple-800 font-medium mb-2">
                                Add another adult + up to 3 children with great savings!
                              </p>
                              <p className="text-sm text-purple-700">
                                Includes premium Waterpik benefits worth £200+
                              </p>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-purple-600" />
                                <span className="text-sm text-purple-700">All adults get Plan D benefits</span>
                              </div>
                              <div className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-purple-600" />
                                <span className="text-sm text-purple-700">Children under 18 included FREE</span>
                              </div>
                              <div className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-purple-600" />
                                <span className="text-sm text-purple-700">10% discount on all treatments</span>
                              </div>
                              <div className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-purple-600" />
                                <span className="text-sm text-purple-700">Premium Waterpik benefits</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* For Family Plan - Show confirmation */}
                        {selectedPlan === 'family' && (
                          <div className="relative p-6 rounded-xl border-2 border-purple-600 bg-gradient-to-br from-purple-600 to-purple-700 text-white shadow-xl">
                            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white">
                              Excellent Choice!
                            </Badge>
                            <div className="text-center mb-4 text-white">
                              <Users className="w-8 h-8 mx-auto mb-2" />
                              <h3 className="font-bold text-lg mb-2">FAMILY PLAN</h3>
                              <div className="text-3xl font-bold">£49.50</div>
                              <div className="text-sm opacity-80">/month</div>
                              <div className="text-xs opacity-70 mt-1">Best value for families</div>
                            </div>
                            <div className="space-y-2">
                              {plans.(family.features || []).map((feature, index) => (
                                <div key={index} className="flex items-start space-x-2">
                                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-white" />
                                  <span className="text-sm text-white">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Other Plans */}
                  <div className={selectedPlan ? 'border-t pt-8' : ''}>
                    {selectedPlan && (
                      <h3 className="text-lg font-semibold text-pear-primary mb-4">
                        Or Choose a Different Plan
                      </h3>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(plans)
                      .filter(([key]) => key !== selectedPlan)
                      .map(([key, plan]) => (
                      <div
                        key={key}
                        onClick={() => setSelectedPlan(key)}
                        className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          selectedPlan === key
                            ? `border-${plan.color} bg-gradient-to-br ${plan.gradient} text-white shadow-xl`
                            : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                        } ${plan.popular ? 'transform scale-105' : ''}`}
                      >
                        {plan.popular && (
                          <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-dental-green text-white">
                            Most Popular
                          </Badge>
                        )}

                        <div className={`text-center mb-4 ${
                          selectedPlan === key ? 'text-white' : 'text-pear-primary'
                        }`}>
                          <h3 className="font-bold text-lg mb-2">{plan.name}</h3>
                          <div className="text-3xl font-bold">{plan.price}</div>
                          <div className="text-sm opacity-80">{plan.period}</div>
                          <div className="text-xs opacity-70 mt-1">{plan.dailyCost}</div>
                        </div>

                        <div className="space-y-2">
                          {(plan.features || []).map((feature, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                                selectedPlan === key ? 'text-white' : `text-${plan.color}`
                              }`} />
                              <span className={`text-sm ${
                                selectedPlan === key ? 'text-white' : 'text-gray-700'
                              }`}>
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {selectedPlan === key && (
                          <div className="mt-4 text-center">
                            <CheckCircle className="w-6 h-6 text-white mx-auto" />
                            <div className="text-sm font-semibold mt-1">Selected</div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                  <div className="flex justify-end mt-8">
                    <Button onClick={nextStep} className="bg-dental-green hover:bg-dental-green/90 text-white">
                      Continue with {currentPlan.name}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Personal Details */}
            {currentStep === 2 && (
              <Card className="shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-pear-primary mb-4">Personal Details</CardTitle>

                  {/* Security Indicators */}
                  <div className="flex items-center justify-center space-x-6 mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Lock className="w-4 h-4 text-green-600" />
                      <span>Secure Signup</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Shield className="w-4 h-4 text-green-600" />
                      <span>Step 2 of 4</span>
                    </div>
                  </div>

                  <p className="text-gray-600">Tell us a bit about yourself</p>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <select
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        value={formData.title}
                        onChange={(e) => secureHandleInputChange("title", e.target.value)}
                      >
                        <option value="">Select Title</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Ms">Ms</option>
                        <option value="Dr">Dr</option>
                      </select>
                    </div>

                    <div></div>

                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        type="text"
                        pattern="[A-Za-z\s\-']*"
                        value={formData.firstName}
                        onChange={(e) => secureHandleInputChange("firstName", e.target.value)}
                        placeholder="Enter your first name"
                        className="mt-1"
                        maxLength={50}
                        autoComplete="given-name"
                        spellCheck={false}
                      />
                    </div>

                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        type="text"
                        pattern="[A-Za-z\s\-']*"
                        value={formData.lastName}
                        onChange={(e) => secureHandleInputChange("lastName", e.target.value)}
                        placeholder="Enter your last name"
                        className="mt-1"
                        maxLength={50}
                        autoComplete="family-name"
                        spellCheck={false}
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        inputMode="email"
                        value={formData.email}
                        onChange={(e) => secureHandleInputChange("email", e.target.value.toLowerCase())}
                        placeholder="your.email@example.com"
                        className="mt-1"
                        maxLength={100}
                        autoComplete="email"
                        spellCheck={false}
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        inputMode="tel"
                        pattern="[0-9\s\+\-\(\)]*"
                        value={formData.phone}
                        onChange={(e) => secureHandleInputChange("phone", e.target.value)}
                        placeholder="07xxx xxx xxx"
                        className="mt-1"
                        maxLength={20}
                        autoComplete="tel"
                      />
                    </div>

                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => secureHandleInputChange("dateOfBirth", e.target.value)}
                        className="mt-1"
                        max={new Date(new Date().setFullYear(new Date().getFullYear() - 16)).toISOString().split('T')[0]}
                        min={new Date(new Date().setFullYear(new Date().getFullYear() - 120)).toISOString().split('T')[0]}
                      />
                    </div>

                    <div>
                      <Label htmlFor="postcode">Postcode *</Label>
                      <Input
                        id="postcode"
                        type="text"
                        pattern="[A-Za-z0-9\s]*"
                        value={formData.postcode}
                        onChange={(e) => secureHandleInputChange("postcode", e.target.value.toUpperCase())}
                        placeholder="NG14 5DP"
                        className="mt-1 uppercase"
                        maxLength={10}
                        autoComplete="postal-code"
                        spellCheck={false}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="address">Address *</Label>
                      <Input
                        id="address"
                        type="text"
                        value={formData.address}
                        onChange={(e) => secureHandleInputChange("address", e.target.value)}
                        placeholder="Enter your full address"
                        className="mt-1"
                        maxLength={200}
                        autoComplete="street-address"
                      />
                    </div>

                    {/* Partner Details Section - Only for Family Plans */}
                    {selectedPlan === 'family' && (
                      <div className="md:col-span-2 mt-6 pt-6 border-t border-gray-200">
                        <div className="bg-purple-50/50 p-6 rounded-lg border border-purple-200">
                          <div className="flex items-center mb-4">
                            <Users className="w-5 h-5 text-purple-600 mr-2" />
                            <h3 className="text-lg font-semibold text-purple-700">Partner Details</h3>
                            <Badge variant="secondary" className="ml-2 bg-purple-100 text-purple-700">
                              Family Plan
                            </Badge>
                          </div>
                          <p className="text-sm text-purple-600 mb-6">
                            Please provide details for the second adult on your family plan.
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <Label htmlFor="partnerTitle">Partner's Title</Label>
                              <select
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                value={formData.partnerTitle}
                                onChange={(e) => secureHandleInputChange("partnerTitle", e.target.value)}
                              >
                                <option value="">Select Title</option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Miss">Miss</option>
                                <option value="Ms">Ms</option>
                                <option value="Dr">Dr</option>
                              </select>
                            </div>

                            <div></div>

                            <div>
                              <Label htmlFor="partnerFirstName">Partner's First Name *</Label>
                              <Input
                                id="partnerFirstName"
                                value={formData.partnerFirstName}
                                onChange={(e) => secureHandleInputChange("partnerFirstName", e.target.value)}
                                placeholder="Enter partner's first name"
                                className="mt-1"
                              />
                            </div>

                            <div>
                              <Label htmlFor="partnerLastName">Partner's Last Name *</Label>
                              <Input
                                id="partnerLastName"
                                value={formData.partnerLastName}
                                onChange={(e) => secureHandleInputChange("partnerLastName", e.target.value)}
                                placeholder="Enter partner's last name"
                                className="mt-1"
                              />
                            </div>

                            <div>
                              <Label htmlFor="partnerEmail">Partner's Email Address *</Label>
                              <Input
                                id="partnerEmail"
                                type="email"
                                value={formData.partnerEmail}
                                onChange={(e) => secureHandleInputChange("partnerEmail", e.target.value)}
                                placeholder="partner.email@example.com"
                                className="mt-1"
                              />
                            </div>

                            <div>
                              <Label htmlFor="partnerPhone">Partner's Phone Number *</Label>
                              <Input
                                id="partnerPhone"
                                type="tel"
                                value={formData.partnerPhone}
                                onChange={(e) => secureHandleInputChange("partnerPhone", e.target.value)}
                                placeholder="07xxx xxx xxx"
                                className="mt-1"
                              />
                            </div>

                            <div>
                              <Label htmlFor="partnerDateOfBirth">Partner's Date of Birth *</Label>
                              <Input
                                id="partnerDateOfBirth"
                                type="date"
                                value={formData.partnerDateOfBirth}
                                onChange={(e) => secureHandleInputChange("partnerDateOfBirth", e.target.value)}
                                className="mt-1"
                              />
                            </div>

                            <div></div>

                            {/* Partner Patient Status */}
                            <div className="md:col-span-2 mt-4">
                              <h4 className="font-medium text-purple-700 mb-3">Partner's Patient Status</h4>

                              <div className="mb-4">
                                <Label className="text-base font-medium">Is your partner an existing patient at Pear Tree Dental? *</Label>
                                <div className="flex gap-4 mt-3">
                                  <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                      type="radio"
                                      name="partnerExistingPatient"
                                      value="yes"
                                      checked={formData.partnerIsExistingPatient === 'yes'}
                                      onChange={(e) => secureHandleInputChange("partnerIsExistingPatient", e.target.value)}
                                      className="text-purple-600"
                                    />
                                    <span>Yes, existing patient</span>
                                  </label>
                                  <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                      type="radio"
                                      name="partnerExistingPatient"
                                      value="no"
                                      checked={formData.partnerIsExistingPatient === 'no'}
                                      onChange={(e) => secureHandleInputChange("partnerIsExistingPatient", e.target.value)}
                                      className="text-purple-600"
                                    />
                                    <span>No, new to the practice</span>
                                  </label>
                                </div>
                              </div>

                              {/* Partner Existing Patient - Dentist Confirmation */}
                              {formData.partnerIsExistingPatient === 'yes' && (
                                <div>
                                  <Label htmlFor="partnerPreferredDentist">Please confirm your partner's current dentist *</Label>
                                  <select
                                    id="partnerPreferredDentist"
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                                    value={formData.partnerPreferredDentist}
                                    onChange={(e) => secureHandleInputChange("partnerPreferredDentist", e.target.value)}
                                  >
                                    <option value="">Confirm your partner's current dentist</option>
                                    <option value="Javaad Mirza">Javaad Mirza (MD, BDS)</option>
                                    <option value="Imrana Ishaque">Imrana Ishaque (BDS, MFDS)</option>
                                    <option value="Janet Kerr">Janet Kerr (BDS LDS RCS)</option>
                                  </select>
                                </div>
                              )}

                              {/* Partner New Patient - Gender Preference */}
                              {formData.partnerIsExistingPatient === 'no' && (
                                <div>
                                  <Label className="text-base font-medium">Does your partner have a preference for their dentist? *</Label>
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                                    <label className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                                      <input
                                        type="radio"
                                        name="partnerDentistGenderPreference"
                                        value="male"
                                        checked={formData.partnerDentistGenderPreference === 'male'}
                                        onChange={(e) => secureHandleInputChange("partnerDentistGenderPreference", e.target.value)}
                                        className="text-purple-600"
                                      />
                                      <span>Male dentist</span>
                                    </label>
                                    <label className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                                      <input
                                        type="radio"
                                        name="partnerDentistGenderPreference"
                                        value="female"
                                        checked={formData.partnerDentistGenderPreference === 'female'}
                                        onChange={(e) => secureHandleInputChange("partnerDentistGenderPreference", e.target.value)}
                                        className="text-purple-600"
                                      />
                                      <span>Female dentist</span>
                                    </label>
                                    <label className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                                      <input
                                        type="radio"
                                        name="partnerDentistGenderPreference"
                                        value="no-preference"
                                        checked={formData.partnerDentistGenderPreference === 'no-preference'}
                                        onChange={(e) => secureHandleInputChange("partnerDentistGenderPreference", e.target.value)}
                                        className="text-purple-600"
                                      />
                                      <span>No preference</span>
                                    </label>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Main Patient Status Section */}
                    <div className="md:col-span-2 mt-6 pt-6 border-t border-gray-200">
                      <div className="bg-pear-background/30 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-pear-primary mb-4"></h3>

                        <div className="mb-6">
                          <Label className="text-base font-medium">Are you an existing patient at Pear Tree Dental? *</Label>
                          <div className="flex gap-4 mt-3">
                            <label className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="radio"
                                name="existingPatient"
                                value="yes"
                                checked={formData.isExistingPatient === 'yes'}
                                onChange={(e) => secureHandleInputChange("isExistingPatient", e.target.value)}
                                className="text-pear-primary"
                              />
                              <span>Yes, I'm an existing patient</span>
                            </label>
                            <label className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="radio"
                                name="existingPatient"
                                value="no"
                                checked={formData.isExistingPatient === 'no'}
                                onChange={(e) => secureHandleInputChange("isExistingPatient", e.target.value)}
                                className="text-pear-primary"
                              />
                              <span>No, I'm new to the practice</span>
                            </label>
                          </div>
                        </div>

                        {/* Existing Patient - Dentist Selection */}
                        {formData.isExistingPatient === 'yes' && (
                          <div>
                            <Label htmlFor="preferredDentist">Who is your current dentist? *</Label>
                            <select
                              id="preferredDentist"
                              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                              value={formData.preferredDentist}
                              onChange={(e) => secureHandleInputChange("preferredDentist", e.target.value)}
                            >
                              <option value="">Choose your current dentist</option>
                              <option value="Javaad Mirza">Javaad Mirza (MD, BDS)</option>
                              <option value="Imrana Ishaque">Imrana Ishaque (BDS, MFDS)</option>
                              <option value="Janet Kerr">Janet Kerr (BDS LDS RCS)</option>
                            </select>
                          </div>
                        )}

                        {/* New Patient - Welcome & Gender Preference */}
                        {formData.isExistingPatient === 'no' && (
                          <div className="space-y-4">
                            <div className="bg-pear-primary/10 p-4 rounded-lg border border-pear-primary/20">
                              <h4 className="font-semibold text-pear-primary mb-2">Welcome to the Pear Tree Dental Membership Plan!</h4>
                              <p className="text-sm text-gray-700">
                                We're delighted to have you join our practice. Our experienced team is here to provide
                                you with exceptional dental care in a comfortable, friendly environment.
                              </p>
                            </div>

                            <div>
                              <Label className="text-base font-medium">Do you have a preference for your dentist? *</Label>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                                <label className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                                  <input
                                    type="radio"
                                    name="dentistGenderPreference"
                                    value="male"
                                    checked={formData.dentistGenderPreference === 'male'}
                                    onChange={(e) => secureHandleInputChange("dentistGenderPreference", e.target.value)}
                                    className="text-pear-primary"
                                  />
                                  <span>Male dentist</span>
                                </label>
                                <label className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                                  <input
                                    type="radio"
                                    name="dentistGenderPreference"
                                    value="female"
                                    checked={formData.dentistGenderPreference === 'female'}
                                    onChange={(e) => secureHandleInputChange("dentistGenderPreference", e.target.value)}
                                    className="text-pear-primary"
                                  />
                                  <span>Female dentist</span>
                                </label>
                                <label className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                                  <input
                                    type="radio"
                                    name="dentistGenderPreference"
                                    value="no-preference"
                                    checked={formData.dentistGenderPreference === 'no-preference'}
                                    onChange={(e) => secureHandleInputChange("dentistGenderPreference", e.target.value)}
                                    className="text-pear-primary"
                                  />
                                  <span>No preference</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Staff Member Section - Only show for clinic access */}
                    {isClinicAccess && (
                      <div className="md:col-span-2 mt-6 pt-6 border-t border-gray-200">
                          <div className="bg-pear-primary/5 p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                              <User className="w-5 h-5 text-pear-primary mr-2" />
                              <h3 className="text-lg font-semibold text-pear-primary">Staff Member Information</h3>
                              <Badge variant="secondary" className="ml-2 bg-pear-primary/10 text-pear-primary">
                                Clinic Access Detected
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">
                              Please enter the staff member details who is helping with this membership signup.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="staffMemberName">Staff Member Name *</Label>
                                <Input
                                  id="staffMemberName"
                                  value={formData.staffMemberName}
                                  onChange={(e) => secureHandleInputChange("staffMemberName", e.target.value)}
                                  placeholder="Enter staff member's full name"
                                  className="mt-1"
                                />
                              </div>
                              <div>
                                <Label htmlFor="staffMemberId">Staff ID (Optional)</Label>
                                <Input
                                  id="staffMemberId"
                                  value={formData.staffMemberId}
                                  onChange={(e) => secureHandleInputChange("staffMemberId", e.target.value)}
                                  placeholder="Employee ID or initials"
                                  className="mt-1"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                    )}
                  </div>

                  {/* Family Members Section */}
                  <div className="mt-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-pear-primary">Family Members</h3>
                      <Button onClick={addFamilyMember} variant="outline" size="sm">
                        <UserPlus className="w-4 h-4 mr-2" />
                        Add Family Member
                      </Button>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Children under 18 join free when a parent has a membership plan
                    </p>

                    {formData.familyMembers.length === 0 ? (
                      <div className="text-center py-8 text-gray-500">
                        <Baby className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                        <p>No family members added yet</p>
                        <p className="text-sm">Click "Add Family Member" to include them in your plan (Can be added in later)</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {(formData.familyMembers || []).map((member, index) => (
                          <Card key={index} className="p-4 bg-gray-50">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                              <Input
                                placeholder="First Name"
                                value={member.firstName}
                                onChange={(e) => {
                                  const updated = [...formData.familyMembers];
                                  updated[index].firstName = e.target.value;
                                  setFormData(prev => ({ ...prev, familyMembers: updated }));
                                }}
                              />
                              <Input
                                placeholder="Last Name"
                                value={member.lastName}
                                onChange={(e) => {
                                  const updated = [...formData.familyMembers];
                                  updated[index].lastName = e.target.value;
                                  setFormData(prev => ({ ...prev, familyMembers: updated }));
                                }}
                              />
                              <Input
                                type="date"
                                placeholder="Date of Birth"
                                value={member.dateOfBirth}
                                onChange={(e) => {
                                  const updated = [...formData.familyMembers];
                                  updated[index].dateOfBirth = e.target.value;
                                  setFormData(prev => ({ ...prev, familyMembers: updated }));
                                }}
                              />
                              <select
                                className="p-2 border border-gray-300 rounded-md"
                                value={member.relationship}
                                onChange={(e) => {
                                  const updated = [...formData.familyMembers];
                                  updated[index].relationship = e.target.value;
                                  setFormData(prev => ({ ...prev, familyMembers: updated }));
                                }}
                              >
                                <option value="">Relationship</option>
                                <option value="spouse">Spouse/Partner</option>
                                <option value="child">Child</option>
                                <option value="other">Other</option>
                              </select>
                            </div>
                          </Card>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button onClick={prevStep} variant="outline">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                    <Button onClick={nextStep} className="bg-dental-green hover:bg-dental-green/90 text-white">
                      Continue
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Direct Debit Details */}
            {currentStep === 3 && (
              <Card className="shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-pear-primary mb-4">Direct Debit Setup</CardTitle>

                  {/* Security Indicators */}
                  <div className="flex items-center justify-center space-x-6 mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Lock className="w-4 h-4 text-green-600" />
                      <span>Secure Signup</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Shield className="w-4 h-4 text-green-600" />
                      <span>Step 3 of 4</span>
                    </div>
                  </div>

                  <p className="text-gray-600">Set up your monthly membership payments</p>
                </CardHeader>
                <CardContent className="p-8">

                  {/* Selected Plan Summary */}
                  <div className={`bg-gradient-to-r ${currentPlan.gradient} text-white p-6 rounded-xl mb-8`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-lg">{currentPlan.name}</h3>
                        <p className="opacity-90">{currentPlan.dailyCost}</p>
                        <p className="text-sm opacity-80">Saves over £400 per year!</p>
                        <p className="text-sm opacity-80 mt-1">All via 1 simple monthly payment</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{currentPlan.price}</div>
                        <div className="opacity-90">{currentPlan.period}</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <Label htmlFor="accountHolderName">Account Holder Name *</Label>
                      <Input
                        id="accountHolderName"
                        type="text"
                        pattern="[A-Za-z\s\-']*"
                        value={formData.accountHolderName}
                        onChange={(e) => secureHandleInputChange("accountHolderName", e.target.value)}
                        placeholder="Name as it appears on your bank account"
                        className="mt-1"
                        maxLength={100}
                        autoComplete="name"
                        spellCheck={false}
                      />
                    </div>

                    <div>
                      <Label htmlFor="sortCode">Sort Code *</Label>
                      <Input
                        id="sortCode"
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9-]*"
                        value={formData.sortCode}
                        onChange={(e) => handleSortCodeChange(e.target.value)}
                        placeholder="12-34-56"
                        maxLength={8}
                        className="mt-1 font-mono"
                        autoComplete="off"
                        spellCheck={false}
                      />
                      <p className="text-xs text-gray-500 mt-1">Format: XX-XX-XX</p>
                    </div>

                    <div>
                      <Label htmlFor="accountNumber">Account Number *</Label>
                      <Input
                        id="accountNumber"
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={formData.accountNumber}
                        onChange={(e) => handleAccountNumberChange(e.target.value)}
                        placeholder="12345678"
                        maxLength={8}
                        className="mt-1 font-mono"
                        autoComplete="off"
                        spellCheck={false}
                      />
                      <p className="text-xs text-gray-500 mt-1">6-8 digits only</p>
                    </div>

                  </div>

                  {/* Direct Debit Logo & Originator ID */}
                  <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-lg">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-16 h-16 flex items-center justify-center">
                          <img
                            src="https://ext.same-assets.com/direct-debit-logo.png"
                            alt="Direct Debit Logo"
                            className="w-full h-auto max-w-16"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-blue-800 text-lg">Direct Debit</h4>
                          <p className="text-sm text-blue-600">Secure Monthly Payment</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-blue-700 font-medium mb-1">Originator's ID Number</div>
                        <div className="text-2xl font-mono font-bold text-blue-900 tracking-widest bg-white px-4 py-2 rounded border">
                          575171
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded border border-blue-200">
                      <p className="text-sm text-blue-800 leading-relaxed">
                        {/* Text content cleared as per edit instructions */}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button onClick={prevStep} variant="outline">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                    <Button onClick={nextStep} className="bg-dental-green hover:bg-dental-green/90 text-white">
                      Continue
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <Card className="shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-pear-primary mb-4">Confirm Your Membership</CardTitle>

                  {/* Security Indicators */}
                  <div className="flex items-center justify-center space-x-6 mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Lock className="w-4 h-4 text-green-600" />
                      <span>Secure Signup</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Shield className="w-4 h-4 text-green-600" />
                      <span>Step 4 of 4</span>
                    </div>
                  </div>

                  <p className="text-gray-600">Review your details and complete signup</p>
                </CardHeader>
                <CardContent className="p-8">

                  {/* Summary */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Plan Summary */}
                    <div>
                      <div className={`bg-gradient-to-r ${currentPlan.gradient} text-white p-6 rounded-xl`}>
                        <h4 className="font-bold text-xl">{currentPlan.name}</h4>
                        <div className="text-2xl font-bold mt-2">{currentPlan.price}{currentPlan.period}</div>
                        <div className="opacity-90 mt-1">{currentPlan.dailyCost}</div>

                        <div className="mt-4 space-y-2">
                          {(currentPlan.features || []).map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-white" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {formData.familyMembers.length > 0 && (
                        <div className="mt-4">
                          <h4 className="font-semibold mb-2">Family Members:</h4>
                          <div className="space-y-2">
                            {(formData.familyMembers || []).map((member, index) => (
                              <div key={index} className="text-sm text-gray-600">
                                {member.firstName} {member.lastName} ({member.relationship})
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Direct Debit Summary */}
                      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                          <Building2 className="w-4 h-4 mr-2" />
                          Direct Debit Details
                        </h4>
                        <div className="text-sm text-blue-600 space-y-1">
                          <div><strong>Account Holder:</strong> {formData.accountHolderName}</div>
                          <div><strong>Sort Code:</strong> {formData.sortCode}</div>
                          <div><strong>Account Number:</strong> ****{formData.accountNumber.slice(-4)}</div>
                          {formData.bankName && <div><strong>Bank:</strong> {formData.bankName}</div>}
                          <div className="mt-2 text-xs">
                            Monthly payment of {currentPlan.price} will be collected on the same date each month.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Personal Details Summary */}
                    <div>
                      {/* Personal Details Box */}
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 rounded-xl p-6 mb-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center mr-3">
                            <User className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800 text-lg">
                              {selectedPlan === 'family' ? 'Account Holders' : 'Your Details'}
                            </h4>
                            <p className="text-sm text-slate-600">Membership information</p>
                          </div>
                        </div>

                        {/* Main Account Holder */}
                        <div className="space-y-3 text-sm mb-6">
                          <h5 className="font-semibold text-slate-700">
                            {selectedPlan === 'family' ? 'Main Account Holder' : 'Personal Information'}
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-600">
                            <div><strong>Name:</strong> {formData.title} {formData.firstName} {formData.lastName}</div>
                            <div><strong>Email:</strong> {formData.email}</div>
                            <div><strong>Phone:</strong> {formData.phone}</div>
                            <div><strong>Date of Birth:</strong> {formData.dateOfBirth}</div>
                            <div className="md:col-span-2"><strong>Address:</strong> {formData.address}, {formData.postcode}</div>
                          </div>
                        </div>

                        {/* Partner Details for Family Plans */}
                        {selectedPlan === 'family' && formData.partnerFirstName && (
                          <div className="space-y-3 text-sm pt-4 border-t border-slate-300">
                            <h5 className="font-semibold text-purple-700">Partner Details</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-600">
                              <div><strong>Name:</strong> {formData.partnerTitle} {formData.partnerFirstName} {formData.partnerLastName}</div>
                              <div><strong>Email:</strong> {formData.partnerEmail}</div>
                              <div><strong>Phone:</strong> {formData.partnerPhone}</div>
                              <div><strong>Date of Birth:</strong> {formData.partnerDateOfBirth}</div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* What Happens Next Box */}
                      <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-200 rounded-xl p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mr-3">
                            <CalendarDays className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-emerald-800 text-lg">What happens next?</h4>
                            <p className="text-sm text-emerald-600">Your membership journey</p>
                          </div>
                        </div>
                        <ul className="text-sm text-emerald-700 space-y-2">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-emerald-600" />
                            <span>We'll process your details and email you within 2 working days</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-emerald-600" />
                            <span>We'll confirm your Direct Debit start date</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-emerald-600" />
                            <span>Emergency cover activates upon confirmation</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Key Terms Summary */}
                  <div className="mt-8">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => setIsKeyThingsExpanded(!isKeyThingsExpanded)}
                      >
                        <p className="text-blue-800 font-medium">Before you join, here are 5 key things to know about your membership:</p>
                        <ChevronDown
                          className={`w-5 h-5 text-blue-800 transition-transform duration-200 ${
                            isKeyThingsExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </div>

                      {isKeyThingsExpanded && (
                        <ul className="space-y-3 text-blue-700 mt-4">
                          <li className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                            <span><strong>Monthly payments:</strong> You'll pay {currentPlan.price} every month by Direct Debit. Payments continue until you cancel with 1 month's notice.</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                            <span><strong>Book your own appointments:</strong> Your plan includes treatments, but you need to book and attend appointments yourself. We don't automatically schedule them for you.</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                            <span><strong>Use it or lose it:</strong> Unused treatments don't carry over to the next year, and there are no refunds for treatments you don't use.</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</div>
                            <span><strong>Early cancellation:</strong> If you cancel within your first 12 months, you'll need to pay back any savings you received on treatments at our standard prices (the difference between what you paid and our normal fees).</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">5</div>
                            <span><strong>Payment problems:</strong> If your Direct Debit payment fails, all membership benefits stop immediately until payment is sorted out.</span>
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Required Documents - Clean Interface */}
                  <div className="mt-8">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                      <div className="flex items-start space-x-3">
                        <Mail className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-blue-700">
                            Please read both documents below. We'll email you copies once your membership is confirmed. You can download them for your records.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {/* Terms & Conditions */}
                      <div className="border border-gray-300 rounded-lg p-6 bg-white">
                        <div className="flex items-center mb-3">
                          <FileText className="w-5 h-5 text-gray-600 mr-2" />
                          <h4 className="font-semibold text-gray-800">Terms & Conditions</h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">Membership terms and practice policies</p>

                        <div className="flex space-x-3">
                          <Button
                            onClick={async () => {
                              const patientInfo = {
                                firstName: formData.firstName,
                                lastName: formData.lastName,
                                planName: currentPlan.name,
                                planPrice: currentPlan.price,
                                dentistName: formData.isExistingPatient === 'yes'
                                  ? formData.preferredDentist
                                  : (formData.dentistGenderPreference === 'no-preference'
                                    ? 'To be assigned based on availability'
                                    : `${formData.dentistGenderPreference?.charAt(0).toUpperCase()}${formData.dentistGenderPreference?.slice(1)} dentist (to be assigned)`),
                                partnerFirstName: selectedPlan === 'family' ? formData.partnerFirstName : '',
                                partnerLastName: selectedPlan === 'family' ? formData.partnerLastName : '',
                                partnerDentistName: selectedPlan === 'family'
                                  ? (formData.partnerIsExistingPatient === 'yes'
                                    ? formData.partnerPreferredDentist
                                    : (formData.partnerDentistGenderPreference === 'no-preference'
                                      ? 'To be assigned based on availability'
                                      : `${formData.partnerDentistGenderPreference?.charAt(0).toUpperCase()}${formData.partnerDentistGenderPreference?.slice(1)} dentist (to be assigned)`))
                                  : '',
                                isFamily: selectedPlan === 'family',
                                isExistingPatient: formData.isExistingPatient,
                                dentistGenderPreference: formData.dentistGenderPreference
                              };
                              try {
                                const pdfBlob = await generateMembershipTermsPDF(patientInfo);
                                const url = window.URL.createObjectURL(pdfBlob);
                                const newWindow = window.open(url, '_blank');
                                if (newWindow) {
                                  newWindow.document.title = `Terms & Conditions - ${formData.firstName} ${formData.lastName}`;
                                }
                              } catch (error) {
                                console.error('Failed to generate PDF:', error);
                                alert('Failed to generate PDF. Please try again.');
                              }
                            }}
                            variant="outline"
                            size="sm"
                            className="border-gray-300 text-gray-700 hover:bg-gray-50"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>

                          <Button
                            onClick={async () => {
                              const patientInfo = {
                                firstName: formData.firstName,
                                lastName: formData.lastName,
                                planName: currentPlan.name,
                                planPrice: currentPlan.price,
                                dentistName: formData.isExistingPatient === 'yes'
                                  ? formData.preferredDentist
                                  : (formData.dentistGenderPreference === 'no-preference'
                                    ? 'To be assigned based on availability'
                                    : `${formData.dentistGenderPreference?.charAt(0).toUpperCase()}${formData.dentistGenderPreference?.slice(1)} dentist (to be assigned)`),
                                partnerFirstName: selectedPlan === 'family' ? formData.partnerFirstName : '',
                                partnerLastName: selectedPlan === 'family' ? formData.partnerLastName : '',
                                partnerDentistName: selectedPlan === 'family'
                                  ? (formData.partnerIsExistingPatient === 'yes'
                                    ? formData.partnerPreferredDentist
                                    : (formData.partnerDentistGenderPreference === 'no-preference'
                                      ? 'To be assigned based on availability'
                                      : `${formData.partnerDentistGenderPreference?.charAt(0).toUpperCase()}${formData.partnerDentistGenderPreference?.slice(1)} dentist (to be assigned)`))
                                  : '',
                                isFamily: selectedPlan === 'family',
                                isExistingPatient: formData.isExistingPatient,
                                dentistGenderPreference: formData.dentistGenderPreference
                              };
                              try {
                                const pdfBlob = await generateMembershipTermsPDF(patientInfo);
                                downloadPDF(pdfBlob, `Terms-Conditions-${formData.firstName}-${formData.lastName}.pdf`);
                              } catch (error) {
                                console.error('Failed to generate PDF:', error);
                                alert('Failed to generate PDF. Please try again.');
                              }
                            }}
                            variant="outline"
                            size="sm"
                            className="border-gray-300 text-gray-700 hover:bg-gray-50"
                          >
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>

                      {/* Direct Debit Guarantee */}
                      <div className="border border-gray-300 rounded-lg p-6 bg-white">
                        <div className="flex items-center mb-3">
                          <Building2 className="w-5 h-5 text-gray-600 mr-2" />
                          <h4 className="font-semibold text-gray-800">Direct Debit Guarantee</h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">Your rights under the Direct Debit Guarantee</p>

                        <div className="flex space-x-3">
                          <Button
                            onClick={async () => {
                              const patientInfo = {
                                firstName: formData.firstName,
                                lastName: formData.lastName,
                                planName: currentPlan.name,
                                planPrice: currentPlan.price,
                                accountHolderName: formData.accountHolderName,
                                sortCode: formData.sortCode,
                                accountNumber: formData.accountNumber,
                                partnerFirstName: selectedPlan === 'family' ? formData.partnerFirstName : '',
                                partnerLastName: selectedPlan === 'family' ? formData.partnerLastName : '',
                                isFamily: selectedPlan === 'family'
                              };
                              try {
                                const pdfBlob = await generateDirectDebitGuaranteePDF(patientInfo);
                                const url = window.URL.createObjectURL(pdfBlob);
                                const newWindow = window.open(url, '_blank');
                                if (newWindow) {
                                  newWindow.document.title = `Direct Debit Guarantee - ${formData.firstName} ${formData.lastName}`;
                                }
                              } catch (error) {
                                console.error('Failed to generate PDF:', error);
                                alert('Failed to generate PDF. Please try again.');
                              }
                            }}
                            variant="outline"
                            size="sm"
                            className="border-gray-300 text-gray-700 hover:bg-gray-50"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>

                          <Button
                            onClick={async () => {
                              const patientInfo = {
                                firstName: formData.firstName,
                                lastName: formData.lastName,
                                planName: currentPlan.name,
                                planPrice: currentPlan.price,
                                accountHolderName: formData.accountHolderName,
                                sortCode: formData.sortCode,
                                accountNumber: formData.accountNumber,
                                partnerFirstName: selectedPlan === 'family' ? formData.partnerFirstName : '',
                                partnerLastName: selectedPlan === 'family' ? formData.partnerLastName : '',
                                isFamily: selectedPlan === 'family'
                              };
                              try {
                                const pdfBlob = await generateDirectDebitGuaranteePDF(patientInfo);
                                downloadPDF(pdfBlob, `Direct-Debit-Guarantee-${formData.firstName}-${formData.lastName}.pdf`);
                              } catch (error) {
                                console.error('Failed to generate PDF:', error);
                                alert('Failed to generate PDF. Please try again.');
                              }
                            }}
                            variant="outline"
                            size="sm"
                            className="border-gray-300 text-gray-700 hover:bg-gray-50"
                          >
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Single Acceptance Checkboxes */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id="termsAcceptance"
                          checked={formData.membershipTermsRead}
                          onChange={(e) => secureHandleInputChange("membershipTermsRead", e.target.checked)}
                          className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          required
                        />
                        <label htmlFor="termsAcceptance" className="text-sm text-gray-700 cursor-pointer">
                          I have read and accept all Terms & Conditions (membership plan and website terms) *
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Final Confirmations */}
                  <div className="mt-8 space-y-4">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="directDebitAuth"
                        checked={formData.directDebitConfirmed}
                        onChange={(e) => secureHandleInputChange("directDebitConfirmed", e.target.checked)}
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="directDebitAuth" className="text-sm text-gray-700">
                        <strong>I confirm that I am the account holder</strong> and am solely able to authorise debits from this account. I understand that Pear Tree Dental will collect <strong>{currentPlan.price} monthly</strong> via Direct Debit. *
                      </label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="marketing"
                        checked={formData.marketingConsent}
                        onChange={(e) => secureHandleInputChange("marketingConsent", e.target.checked)}
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="marketing" className="text-sm text-gray-700">
                        I'd like to receive updates about dental health tips and special offers
                      </label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="communication"
                        checked={formData.communicationPreference === "email"}
                        onChange={(e) => secureHandleInputChange("communicationPreference", e.target.checked ? "email" : "post")}
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="communication" className="text-sm text-gray-700">
                        I prefer to receive communications by email rather than post
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button onClick={prevStep} variant="outline">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                    <Button
                      onClick={() => {
                        if (!formData.membershipTermsRead || !formData.directDebitConfirmed) {
                          setShowRequiredNotification(true);
                          return;
                        }
                        handleSubmit();
                      }}
                      disabled={!formData.membershipTermsRead || !formData.directDebitConfirmed}
                      className="bg-dental-green hover:bg-dental-green/90 text-white font-semibold px-8"
                    >
                      <Crown className="w-4 h-4 mr-2" />
                      Complete Membership Signup
                    </Button>
                  </div>

                  {/* Required Notification - Only show when user tries to click disabled button */}
                  {showRequiredNotification && (
                    <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">!</span>
                        </div>
                        <p className="text-sm text-amber-800">
                          <strong>Required:</strong> You must read and accept the Terms & Conditions and authorize Direct Debit before completing your membership signup.
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-white border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-dental-green" />
              <span>Secure & Encrypted</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-dental-green" />
              <span>2,000+ Happy Members</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-dental-green" />
              <span>Instant Activation</span>
            </div>

          </div>
        </div>
      </section>


    </div>
  );
}
